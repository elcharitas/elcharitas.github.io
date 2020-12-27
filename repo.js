const { resolve } = require("path")
const { Command } = require("commander")
const { readFileSync, writeFileSync, existsSync } = require("fs")
const { snakeCase, kebabCase } = require('lodash')
const eleventyOpts = require("./.eleventy")()
const inputDir = resolve(process.cwd(), eleventyOpts.dir.input)
const includeDir = resolve(inputDir, eleventyOpts.dir.includes)
const dataDir = resolve(inputDir, eleventyOpts.dir.data)
const pageDir = resolve(inputDir, eleventyOpts.repo.page)
const repo = new Command("repo")

const fileOpts = {
    "layout": "page",
    "title": null,
    "description": null,
    "eleventyNavigation": {
        "key": null,
        "order": "1"
    }
}

const anyOf = (main, opt) => typeof main !== "undefined" ? main : opt

const slugit = slug => kebabCase(slug).toLowerCase()

const safeHaven = (handle, logger = err => false) => {
    try {
        return handle()
    }
    catch (error) {
        return logger(error)
    }
}

const genOpts = (opts = fileOpts, depth = 0) => {
    let result = "", tab = ""
    while (tab.length < depth) tab += "\t"
    for (let name in opts) {
        var opt = opts[name]
        if (typeof opt === "object") {
            opt = genOpts(opt, depth + 1)
            result += `\n${tab + name}: ${opt}`
        } else if (opt !== "null") {
            opt = opts[name]
            result += `\n${tab + name}: ${opt}`
        }
    }
    return result
}

const readData = function (name) {
    let path = resolve(dataDir, `${name}.json`), contents = null
    if (existsSync(path) && (contents = readFileSync(path).toString())) {
        return safeHaven(_n => JSON.parse(contents, "utf8"))
    }
    return {}
}

const meta = readData("meta")

repo.command("create:page <title> [slug] [description]")
    .description("Creates a new page")
    .action(function (title, slug, description) {
        fileOpts.title = title
        fileOpts.description = anyOf(description, title)
        slug = slugit(slug || title)
        writeFileSync(resolve(pageDir, `${slug}.njk`), `---${genOpts()}\n---`)
    })

repo.command("create:post <title> [slug] [description]")
    .description("Creates a new post")
    .action(function (title, slug, description) {
        slug = slugit(slug || title)
    })

repo.command("create:layout <name> [parent]")
    .description("Creates layouts for inheritance")
    .action(function (name, parent) {

    })

repo.command("create:tpl <name> [type]")
    .description("Creates template parts")
    .action(function (name, type) {

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