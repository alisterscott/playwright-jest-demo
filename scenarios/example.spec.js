/* eslint-env jest */
const nav = require('../lib/actions/nav')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can wait for an element to appear', async () => {
  const context = await global.__BROWSER__.newContext()
  const page = await context.newPage()
  await nav.visitHomePage(page)
  await page.waitForSelector('#elementappearschild', { visible: true, timeout: 5000 })
}, jestTimeoutMS)
