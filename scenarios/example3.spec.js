/* eslint-env jest */
const nav = require('../lib/actions/nav')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can check for errors when there should be none', async () => {
  const context = await global.__BROWSER__.newContext()
  const page = await context.newPage()
  let errors = ''
  page.on('pageerror', pageerr => {
    errors = errors + pageerr
  })
  await nav.visitHomePage(page)
  expect(errors).toBe('')
}, jestTimeoutMS)
