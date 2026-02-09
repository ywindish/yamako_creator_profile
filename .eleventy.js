module.exports = function(eleventyConfig) {
  // 静的ファイルをそのままコピー
  eleventyConfig.addPassthroughCopy("src/main.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("src/nakayosi-oneesan-tati/4koma/4koma.css");
  eleventyConfig.addPassthroughCopy("src/nakayosi-oneesan-tati/4koma-list.css");

  // 前後のページ情報を取得するフィルター
  eleventyConfig.addFilter("getPrevComic", (comics, currentIndex) => {
    if (currentIndex > 0) {
      return comics[currentIndex - 1];
    }
    return null;
  });

  eleventyConfig.addFilter("getNextComic", (comics, currentIndex) => {
    if (currentIndex < comics.length - 1) {
      return comics[currentIndex + 1];
    }
    return null;
  });

  // 3桁0埋めのフィルター（001, 002, ...）
  eleventyConfig.addFilter("pad3", (num) => {
    return String(num).padStart(3, '0');
  });

  // ファイル名生成用のフィルター
  eleventyConfig.addFilter("comicFileName", (comic) => {
    if (comic.sub_num && comic.sub_num !== '') {
      return `${comic.num}-${comic.sub_num}.html`;
    }
    return String(comic.num).padStart(3, '0') + '.html';
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
