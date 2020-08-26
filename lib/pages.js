async function spawnPage () {
  const context = await global.__BROWSER__.newContext()
  return await context.newPage()
}

module.exports = {
  spawnPage
}
