async function clickScissors (page) {
  await page.waitForSelector('//span[contains(., "Scissors")]')
  await page.click('//span[contains(., "Scissors")]')
  await page.waitForSelector('//div[contains(., "Scissors clicked!")]')
}

module.exports = {
  clickScissors
}
