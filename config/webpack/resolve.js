const path = require("path")
const { SRC_PATH } = require("./meta.paths")

module.exports = {
  extensions: [".js"],
  modules: [
    path.resolve(SRC_PATH, "apps", "index"),
    path.resolve(SRC_PATH),
    path.resolve("node_modules")
  ]
}
