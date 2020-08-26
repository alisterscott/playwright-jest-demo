module.exports = {
  testRunner: 'jest-circus/runner',
  globalSetup: './lib/setup.js',
  globalTeardown: './lib/teardown.js',
  testEnvironment: './lib/playwright-environment.js',
  reporters: ['default', 'jest-stare']
}
