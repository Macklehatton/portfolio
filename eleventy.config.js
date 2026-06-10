module.exports = async function (eleventyConfig) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(HtmlBasePlugin);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("video");
    eleventyConfig.addPassthroughCopy("styles.css");
    pathPrefix: "/portfolio/"
};

