const path = require('path')

const ROOT_PATH = path.join(__dirname, '..', '..')

const ASSET_PATH = path.join(ROOT_PATH, 'assets')
const PUBLIC_PATH = path.join(ROOT_PATH, 'public')
const SRC_PATH = path.join(ROOT_PATH, 'src')

module.exports = {
  ROOT_PATH: ROOT_PATH,
  ASSET_PATH: ASSET_PATH,
  PUBLIC_PATH: PUBLIC_PATH,
  SRC_PATH: SRC_PATH
}
