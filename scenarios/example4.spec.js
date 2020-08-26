/* eslint-env jest */
const nav = require('../lib/actions/nav')
const pages = require('../lib/pages')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can check for errors when there are present', async () => {
  global.page = await pages.spawnPage()
  let errors = ''

  global.page.on('pageerror', error => {
    errors = errors + error.message
  })

  await nav.goToPath(global.page, 'error')
  expect(errors).toBe('Purple Monkey Dishwasher Error')
}, jestTimeoutMS)
