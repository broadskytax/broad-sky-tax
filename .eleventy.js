const path = require('path');
const siteData = require('./website-spec.json');
const { DateTime } = require('luxon');
const htmlmin = require("html-minifier");
const env = require('./src/_data/env.js');

module.exports = function(eleventyConfig) {
    // Set input and output directories
    eleventyConfig.addPassthroughCopy("src/assets");

    // Add `website-spec.json` data to global data
    eleventyConfig.addGlobalData("site", siteData.site);
    eleventyConfig.addGlobalData("pages", siteData.pages);
    eleventyConfig.addGlobalData("team", siteData.team);
    eleventyConfig.addGlobalData("currentYear", DateTime.now().toFormat('yyyy'));
    eleventyConfig.addGlobalData("env", env);

    // Add a custom Nunjucks date filter
    eleventyConfig.addNunjucksFilter("date", function (dateString, format) {
        return DateTime.fromJSDate(dateString).toFormat(format);
    });

    eleventyConfig.addWatchTarget("./src/_includes/css/");

    if (process.env.NODE_ENV === "production") {
        eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
          if( outputPath && outputPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, {
              useShortDoctype: true,
              removeComments: true,
              collapseWhitespace: true
            });
            return minified;
          }
          return content;
        });
    }

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        pathPrefix: "/broad-sky-tax/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
