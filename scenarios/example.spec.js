/* eslint-env jest */
const nav = require('../lib/actions/nav')
const pages = require('../lib/pages')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can wait for an element to appear', async () => {
  global.page = await pages.spawnPage()
  await nav.visitHomePage(global.page)
  await global.page.waitForSelector('#elementappearschild', { visible: true, timeout: 5000 })
}, jestTimeoutMS)
