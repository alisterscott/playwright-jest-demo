/* eslint-env jest */
const nav = require('../lib/actions/nav')
const home = require('../lib/actions/home')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can use xpath selectors to find elements', async () => {
  const context = await global.__BROWSER__.newContext()
  const page = await context.newPage()
  await nav.visitHomePage(page)
  await home.clickScissors(page)
}, jestTimeoutMS)
