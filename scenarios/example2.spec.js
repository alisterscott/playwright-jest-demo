/* eslint-env jest */
const jestTimeoutMS = require('config').get('jestTimeoutMS')
const nav = require('../lib/actions/nav')
const pages = require('../lib/pages')

jest.retryTimes(1)

test('can handle alerts', async () => {
  global.page = await pages.spawnPage()
  global.page.on('dialog', async dialog => {
    await dialog.accept()
  })
  await nav.goToPath(global.page, 'leave')
  await global.page.click('#homelink')
  await global.page.waitForSelector('#elementappearsparent', { visible: true, timeout: 5000 })
}, jestTimeoutMS)
