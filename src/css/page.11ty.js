const autoprefixer = require('autoprefixer');
const cssnanoPlugin = require('cssnano');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const tailwindConfig = require('../../tailwind.config.cjs');

module.exports = class {
  async data() {
    const cssDir = path.join(__dirname, '..', '_includes', 'css');
    const rawFilepath = path.join(cssDir, '_page.css');

    return {
      permalink: `css/page.css`,
      rawFilepath,
      rawCss: fs.readFileSync(rawFilepath),
      excludeFromSitemap: true
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      postcssImport,
      cssnanoPlugin,
      tailwind(tailwindConfig),
      autoprefixer
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
