const { resolve } = require("path")
const { Command } = require("commander")
const { readFileSync, writeFileSync, existsSync } = require("fs")
const { snakeCase, kebabCase } = require("lodash")
const { question, questionPath, keyInSelect, keyInYN } = require("readline-sync")
const { ensureDirSync } = require("fs-extra")
const eleventyOpts = require("./.eleventy")()
const inputDir = resolve(process.cwd(), eleventyOpts.dir.input)
const includeDir = resolve(inputDir, eleventyOpts.dir.includes)
const dataDir = resolve(inputDir, eleventyOpts.dir.data)
const pageDir = resolve(inputDir, eleventyOpts.repo.page)
const postDir = resolve(inputDir, eleventyOpts.repo.post)
const repo = new Command("repo")

/** Basic file options for layouts, templates, pages and posts */
const fileOpts = {
    "layout": "page",
    "title": null,
    "category": null,
    "description": null,
    "eleventyNavigation": {
        "key": null,
        "order": "1"
    }
}

/** Shorthand method for optional variables */
const anyOf = (main, opt) => typeof main !== "undefined" ? main : opt

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
const safeHaven = (handle, logger = err => false) => {
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
 * @param {object} opts - defaults to `fileOpts`
 * @param {number} depth
 */
const genOpts = (opts = fileOpts, depth = 0) => {
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
const writeOpts = (path, extra, opts) => writeFileSync(path, `---${genOpts(opts)}\n---` + extra)

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
    let contents = safeHaven(_n => JSON.stringify(data))
    writeFileSync(path, contents)
}

/**
 * Ask for inputs
 *
 * @param {string} message
 * @param {any} _default
 */
const prompt = (message, _default = null) => question(message) || _default

/**
 * Confim an action
 *
 * @param {string} message
 */
const confirm = message => keyInYN(message)

/** Create page using its title and optional slug */
repo.command("create:page <title> [slug]")
    .description("Creates a new page")
    .action(function (title, slug) {
        fileOpts.title = title
        fileOpts.description = prompt("Describe your page: ")
        if (!confirm("Add to Navigation")) {
            fileOpts.eleventyNavigation = null
        } else {
            fileOpts.eleventyNavigation.key = title
            fileOpts.eleventyNavigation.order = prompt("Order in Navigation: ")
        }
        slug = slugit(slug || title)
        let path = resolve(pageDir, `${slug}.njk`)
        writeOpts(path, `\n# ${title}`)
        console.log("Created new page here: " + path)
    })

/** Create post using its title, optional slug and or category */
repo.command("create:post <title> [slug] [category]")
    .description("Creates a new post")
    .action(function (title, slug, category) {
        fileOpts.title = title
        fileOpts.layout = "post"
        fileOpts.description = prompt("Describe your post: ")
        fileOpts.category = anyOf(category, prompt("Give your post a Category: ", readData("archive").category[0]))
        fileOpts.eleventyNavigation = null
        slug = slugit(slug || title)
        category = slugit(fileOpts.category)
        let path = resolve(postDir, `${category}/${slug}.njk`)
        ensureDirSync(resolve(postDir, category))
        writeOpts(path, `\n# ${title}`)
        console.log("Created new post here: "+path)
    })

/** create layouts using a name and optional parent */
repo.command("create:layout <name> [parent]")
    .description("Creates layouts for inheritance")
    .action(function (name, parent = prompt("Inherit template: ", "base")) {
        writeOpts(resolve(includeDir, "layouts", slugit(name)+".njk"), "\n", {
            name: slugit(name),
            layout: parent,
            templateClass: prompt("Template class: "),
        })
    })

/** create templates using a name and optional type */
repo.command("create:tpl <name> [type]")
    .description("Creates template parts")
    .action(function (name, type = prompt("Add template to group: ", ".")) {
        writeOpts(resolve(includeDir, slugit(type), slugit(name) + ".njk"), "\n", {
            name: slugit(name),
            group: type,
            templateClass: prompt("Template class: "),
        })
    })

repo.command("set:data <path> [datastr]")
    .description("Creates a new data file for use")
    .action(function (path, data) {

    })

repo.command("set:file <path> [name]")
    .description("Sets up a file for use in posts/pages")
    .action(function (path, name) {

    })

repo.version("1.0.0")
repo.parse()