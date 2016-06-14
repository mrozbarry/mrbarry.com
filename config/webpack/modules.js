import { SRC_PATH } from './meta.paths'

export default {
  loaders: [
    {
      test: /\.js$/,
      include: SRC_PATH,
      loader: 'babel'
    },
    {
      test: /\.jpeg$/,
      include: SRC_PATH,
      loader: 'file'
    },
    {
      test: /\.json$/,
      include: SRC_PATH,
      loader: 'json'
    }
  ]
}

