import path from 'path'
import fs from 'fs'
const { resolve, join } = path
const { readdirSync } = fs

export default function(options = {}) {
  const directory = path.basename(path.dirname(__filename))
  const coreDirectory = resolve(__dirname, 'core')

  for (const file of readdirSync(coreDirectory)) {
    this.addTemplate({
      src: resolve(coreDirectory, file),
      fileName: join(directory, file)
    })
  }

  const pluginFilename = 'plugin.js'
  const { module = 'actionStates', mutation = 'setActionType' } = options
  const { dst } = this.addTemplate({
    src: resolve(__dirname, pluginFilename),
    fileName: join(directory, pluginFilename),
    options: {
      module,
      mutation
    }
  })

  this.options.plugins.push({ src: resolve(this.options.buildDir, dst) })
}
