// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {
            browsers: ['ie>=5','>1% in CN']
        },
      "postcss-px2rem":{
          remUnit: 75
      }
  }
}
