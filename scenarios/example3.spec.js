/* eslint-env jest */
const nav = require('../lib/actions/nav')
const pages = require('../lib/pages')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

jest.retryTimes(1)

test('can check for errors when there should be none', async () => {
  global.page = await pages.spawnPage()
  let errors = ''
  global.page.on('pageerror', pageerr => {
    errors = errors + pageerr
  })
  await nav.visitHomePage(global.page)
  expect(errors).toBe('')
}, jestTimeoutMS)
