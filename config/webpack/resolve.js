import path from "path"
import { SRC_PATH } from "./meta.paths"

export default {
  extensions: ["", ".js"],
  root: [
    path.resolve(SRC_PATH, "apps", "index"),
    path.resolve(SRC_PATH)
  ]
}
