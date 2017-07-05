const { SRC_PATH } = require("./meta.paths")
const path = require("path")

module.exports = {
  index: path.join(SRC_PATH, "apps", "index", "index.js"),
  resume: path.join(SRC_PATH, "apps", "resume", "index.js")
}
