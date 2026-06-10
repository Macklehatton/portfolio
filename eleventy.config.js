module.exports = async function (eleventyConfig) {
    const { HtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("video");
    eleventyConfig.addPassthroughCopy("styles.css");
};

module.exports.config = {
    pathPrefix: "/portfolio/",
}

