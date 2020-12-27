const { resolve } = require("path")
const { Command } = require("commander")
const eleventyOpts = require("./.eleventy")()
const inputDir = resolve(process.cwd(), eleventyOpts.dir.input)
const includeDir = resolve(inputDir, eleventyOpts.dir.includes)
const dataDir = resolve(inputDir, eleventyOpts.dir.data)
const { readFileSync, writeFileSync, existsSync } = require("fs")
const { snakeCase } = require('lodash')
const repo = new Command("repo")

repo.command("create:page <title> [slug] [description]")
    .description("Creates a new page")
    .action(function (title, slug, description) {
        
    })

repo.command("create:post <title> [slug] [description]")
    .description("Creates a new post")
    .action(function (title, slug, description) {

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