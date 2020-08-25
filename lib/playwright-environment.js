// puppeteer_environment.js
const NodeEnvironment = require('jest-environment-node')
const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')
const os = require('os')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

class PuppeteerEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup()
    // get the wsEndpoint
    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8')
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }

    // connect to puppeteer
    this.global.__BROWSER__ = await chromium.connect({
      wsEndpoint
    })
  }

  async teardown () {
    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = PuppeteerEnvironment
