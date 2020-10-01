const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: ['astroturf/loader'],
    })

    return config
  },
})
