const path = require('path');
const siteData = require('./website-spec.json');
const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    // Set input and output directories
    eleventyConfig.addPassthroughCopy("src/assets");

    // Add `website-spec.json` data to global data
    eleventyConfig.addGlobalData("site", siteData.site);
    eleventyConfig.addGlobalData("pages", siteData.pages);
    eleventyConfig.addGlobalData("team", siteData.team);
    eleventyConfig.addGlobalData("currentYear", DateTime.now().toFormat('yyyy'));

    // Add a custom Nunjucks date filter
    eleventyConfig.addNunjucksFilter("date", function (dateString, format) {
        return DateTime.fromJSDate(dateString).toFormat(format);
    });

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
