const config = require('config')

async function visitHomePage (page) {
  return await page.goto(`${config.get('baseURL')}`)
}

async function goToPath (page, path) {
  return await page.goto(`${config.get('baseURL')}/${path}`)
}

module.exports = {
  visitHomePage,
  goToPath
}
