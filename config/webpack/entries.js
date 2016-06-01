const path = require('path')

const { SRC_PATH } = require('./meta.paths.js')

module.exports = {
  index: path.join(SRC_PATH, 'apps', 'index', 'index.js'),
  admin: path.join(SRC_PATH, 'apps', 'admin', 'index.js')
}
