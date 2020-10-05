const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  async redirects () {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false
      }
    ]
  }
})
