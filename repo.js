const { resolve } = require("path")
const { Command } = require("commander")
const { readFileSync, writeFileSync, existsSync, rmdirSync } = require("fs")
const { kebabCase } = require("lodash")
const { question, questionPath, keyInSelect, keyInYN } = require("readline-sync")
const { ensureDirSync, copyFileSync } = require("fs-extra")
const { DateTime } = require("luxon")
const editor = require("tiny-cli-editor")
const { log } = console
const jsDot = require("js-dot")
const eleventyOpts = require("./.eleventy")()
const inputDir = resolve(process.cwd(), eleventyOpts.dir.input)
const includeDir = resolve(inputDir, eleventyOpts.dir.includes)
const dataDir = resolve(inputDir, eleventyOpts.dir.data)
const pageDir = resolve(inputDir, eleventyOpts.repo.page)
const postDir = resolve(inputDir, eleventyOpts.repo.post)
const uploadDir = resolve(inputDir, eleventyOpts.repo.upload)
const repo = new Command

/**
 * Converts a text to slug format
 *
 * @param {string} slug
 */
const slugit = slug => kebabCase(slug).toLowerCase()

/**
 * Executes a function safely and log it errors
 *
 * @param {function} handle
 * @param {function} logger
 */
const safeHaven = (handle, logger = () => false) => {
    try {
        return handle()
    }
    catch (error) {
        return logger(error)
    }
}

/**
 * Generates eleventy options for files
 *
 * @param {object} opts
 * @param {number} depth
 */
const genOpts = (opts, depth = 0) => {
    let result = "", tab = ""
    while (tab.length < depth) tab += "\t"
    for (let name in opts) {
        var opt = opts[name]
        if (typeof opt === "object" && opt !== null) {
            opt = genOpts(opt, depth + 1)
            result += `\n${tab + name}: ${opt}`
        } else if (opt !== null) {
            opt = opts[name]
            result += `\n${tab + name}: ${opt}`
        }
    }
    return result
}

/**
 * Writes options to a path
 *
 * @param {string} path
 * @param {string} extra
 * @param {object|null} opts
 */
const writeOpts = (path, extra, opts) => editor(extra).on("submit", data => writeFileSync(path, `---${genOpts(opts)}\n---\n` + data))

/** generates path and returns it */
const pathDir = (path, ...args) => ((path = resolve(path, ...args)) && !ensureDirSync(path)) ? path: null

/**
 * Reads a data file safely and parses it
 *
 * @param {string} name
 */
const readData = function (name) {
    let path = resolve(dataDir, `${name}.json`), contents = null
    if (existsSync(path) && (contents = readFileSync(path).toString())) {
        return safeHaven(_n => JSON.parse(contents, "utf8"))
    }
    return {}
}

/**
 * Writes a data object into its file
 *
 * @param {string} name
 * @param {object} data
 */
const writeData = function (name, data) {
    let path = resolve(dataDir, `${name}.json`);
    let contents = safeHaven(_n => JSON.stringify(data, null, 2))
    writeFileSync(path, contents)
}

/**
 * Ask for inputs
 *
 * @param {string} message
 * @param {any} _default
 */
const prompt = (message, _default = null) => question(message+" ") || _default

/**
 * Confim an action
 *
 * @param {string} message
 */
const confirm = message => keyInYN(message)

/** The archive data object */
const archive = readData("archive");

/** Category names */
const categories = []

/** Category slug */
const categoryKeys = []

/** global for holding paths */
let filePath = null;

archive.category?.forEach(cat => {
    categoryKeys.push(cat?.slug)
    categories.push(cat?.name)
})

/** Add a data file */
repo.command("add:data [path] [dataset]")
    .description("Creates a new data file for use")
    .action(function (path, dataset) {
        let data = readData(path)
        dataset = require("querystring").parse(dataset)
        for (let key in dataset) jsDot.set(data, key, dataset[key])
        writeData(path, data)
        log("Data modified succesfully")
    })

/** Add a file for upload */
repo.command("add:file [path] [name]")
    .description("Sets up a file for use in posts/pages. You can use ~, . or cwd, pwd")
    .action(function (path = questionPath("Path to image/file:"), name = Date.now()) {
        let dest = `${name}.jpg`
        if (!jsDot.get(archive.uploads, name)) {
            jsDot.set(archive.uploads, name, dest)
            copyFileSync(path, resolve(uploadDir, dest))
            writeData("archive", archive)
            log(`File added succesfully. Use \`{{${name} | upload}}\` to add to posts/pages `)
        } else {

        }
    })

/** Create or edit a category */
repo.command("make:category [name]")
    .description("Creates/Edit a category")
    .action(function (name = prompt("Category Name:")) {
        var slug = slugit(name), id = archive.category?.length || 0
        if (name.match(/^\d+$/)) {
            id = name - 1
            let cat = archive.category[id]
            if(!cat) return log("Category not exist!")
            slug = cat.slug
            if (!confirm("Delete Category?")) {
                name = prompt("Category Name(Overwrite?):", cat.name)
            } else {
                delete archive.category[id]
                rmdirSync(pathDir(postDir, slug), { recursive: true, force: true })
                slug = null
            }
        }
        if (!name.match(/^\d+$/)) {
            (slug = prompt("Category Slug(optional):", slug)) && pathDir(postDir, slug)
            archive.category[id] = { name, slug }
        }
        writeData("archive", archive)
        log("Data modified succesfully")
    })

/** Create page using its title and optional slug */
repo.command("make:page [title] [slug]")
    .description("Creates a new page")
    .action(function (title = prompt("Page title:"), slug) {
        slug = slugit(slug || title)
        writeOpts(filePath = resolve(pageDir, `${slug}.md`), `# ${title}`, {
            layout:"page",
            title,
            description: prompt("Page Excerpt:"),
            eleventyNavigation: confirm("Add to Navigation?") ? {
                key: title,
                order: prompt("Order in Navigation:")
            } : null
        })
        log("Created new page here:" + filePath)
    })

/** Create post using its title, optional slug and or category id */
repo.command("make:post [title] [slug] [category]")
    .description("Creates a new post")
    .action(function (title = prompt("Post title:"), slug = null, category = keyInSelect(categories, "Post Category:") || 1) {
        slug = slugit(categoryKeys[category]) + `/${slugit(slug || title)}.md`
        archive.posts.push(slug)
        writeOpts(filePath = pathDir(postDir, slug), `# ${title}`, {
            id: archive.posts.length,
            layout:"post",
            title,
            description: prompt("Post Excerpt:"),
            category,
            date: DateTime.fromJSDate(new Date, { zone: 'utc' }).toFormat("y-L-d"),
        })
        writeData("archive", archive)
        log("Created new post here:" + filePath)
    })

/** create layouts using a name and optional parent */
repo.command("make:layout [name] [parent]")
    .description("Creates layout templates for inheritance")
    .action(function (name = prompt("Layout Name:"), parent = prompt("Inherit template:", "base")) {
        writeOpts(filePath = resolve(includeDir, "layouts", slugit(name)+".njk"), "", {
            name: slugit(name),
            layout: parent,
            templateClass: prompt("Layout class:"),
        })
        log("Created new layout here:" + filePath)
    })

/** create templates using a name and optional type */
repo.command("make:tpl [name] [type]")
    .description("Creates template parts")
    .action(function (name=prompt("Template Name:"), type = prompt("Template Group(optional):")) {
        writeOpts(filePath = resolve(includeDir, slugit(type), slugit(name) + ".njk"), "", {
            name: slugit(name),
            group: type,
            templateClass: prompt("Template Class(optional):"),
        })
        log("Created new template here:" + filePath)
    })

repo.version("1.0.0")
repo.parse()