/* eslint-env jest */
const nav = require('../lib/actions/nav')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can check for errors when there are present', async () => {
  const context = await global.__BROWSER__.newContext()
  const page = await context.newPage()
  let errors = ''

  page.on('pageerror', error => {
    errors = errors + error.message
  })

  await nav.goToPath(page, 'error')
  expect(errors).toBe('Purple Monkey Dishwasher Error')
}, jestTimeoutMS)
