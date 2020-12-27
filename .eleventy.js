const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const meta = JSON.parse(fs.readFileSync("_data/meta.json", 'utf8'));

function gen_url(path = "") {
  path = path.toString()
  if (path.indexOf("//") === 0) {
    return path
  } else if (path.indexOf("/") === 0) {
    path = path.replace("/", "")
  }
  return meta.url + path;
}

module.exports = function (eleventyConfig) {
  if (typeof eleventyConfig === "object") {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

    eleventyConfig.addFilter("page", path => {
      return gen_url("/p/" + path.replace('.', '/'));
    });

    eleventyConfig.addFilter("image", path => {
      if (fs.existsSync("assets/img/" + path)) return gen_url("/assets/img/" + path);
      return gen_url("/uploads/posts/" + path);
    });

    eleventyConfig.addFilter("asset", path => {
      return gen_url("/assets/" + path);
    });

    eleventyConfig.addFilter("tagUrl", path => {
      return gen_url("/tag/" + path.toLowerCase().replace(/\s+/g, '-'));
    });

    eleventyConfig.addFilter("url", path => {
      return gen_url(path);
    });

    eleventyConfig.addFilter("tagName", tag => {
      return tag.replace(/\-+/g, ' ');
    });

    eleventyConfig.addFilter("starts", (text, search) => {
      return text.indexOf(search) === 0
    });

    eleventyConfig.addFilter("ends", (text, search) => {
      return text.indexOf(search) === 0
    });

    eleventyConfig.addFilter("ceil", number => {
      return Math.ceil(number)
    });

    eleventyConfig.addFilter("stringify", anyth => {
      return JSON.stringify(anyth)
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL, yyyy");
    });

    eleventyConfig.addFilter("date", (dateObj = new Date, format = 'f J, Y') => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(typeof format == "string" ? format.toLowerCase() : "dd LLL yyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
      if (n < 0) {
        return array.slice(n);
      }

      return array.slice(0, n);
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("slide", (array, n) => {
      return array && array.constructor === Array ? array.slice(n) : [];
    });

    eleventyConfig.addFilter("min", (...numbers) => {
      return Math.min.apply(null, numbers);
    });

    eleventyConfig.addCollection("archives", function (collection) {
      return collection.getFilteredByTag('archive')
    });

    eleventyConfig.addCollection("tagList", function (collection) {
      let tagSet = new Set();
      collection.getAll().forEach(function (item) {
        if ("tags" in item.data) {
          let tags = item.data.tags;

          tags = tags.filter(function (item) {
            switch (item) {
              // this list should match the `filter` list in tags.njk
              case "all":
              case "nav":
              case "post":
              case "archive":
                return false;
            }

            return true;
          });

          for (const tag of tags) {
            tagSet.add(tag);
          }
        }
      });

      // returning an array in addCollection works in Eleventy 0.5.3
      return [...tagSet];
    });

    let assetsDir = [
      "css", "fonts", "img", "js"
    ]

    assetsDir.forEach(dir => eleventyConfig.addPassthroughCopy(`assets/${dir}`))
    assetsDir.forEach(dir => eleventyConfig.addPassthroughCopy("uploads"))

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
      html: true,
      breaks: true,
      linkify: true
    });

    eleventyConfig.setLibrary("md", markdownLibrary);

    // Browsersync Overrides
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function (err, browserSync) {
          const content_404 = fs.readFileSync('_site/404.html');

          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        },
      },
      ui: false,
      ghostMode: false
    });
  }
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
