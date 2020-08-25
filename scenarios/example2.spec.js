/* eslint-env jest */
const jestTimeoutMS = require('config').get('jestTimeoutMS')
const nav = require('../lib/actions/nav')

jest.retryTimes(1)

test('can handle alerts', async () => {
  const context = await global.__BROWSER__.newContext()
  const page = await context.newPage()
  page.on('dialog', async dialog => {
    await dialog.accept()
  })
  await nav.goToPath(page, 'leave')
  await page.click('#homelink')
  await page.waitForSelector('#elementappearsparent', { visible: true, timeout: 5000 })
}, jestTimeoutMS)
