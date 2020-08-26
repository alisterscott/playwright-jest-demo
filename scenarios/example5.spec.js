/* eslint-env jest */
const nav = require('../lib/actions/nav')
const pages = require('../lib/pages')
const home = require('../lib/actions/home')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can use xpath selectors to find elements', async () => {
  global.page = await pages.spawnPage()
  await nav.visitHomePage(global.page)
  await home.clickScissors(global.page)
}, jestTimeoutMS)
