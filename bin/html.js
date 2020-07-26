import pug from 'pug';
import path from 'path';
import { promises as fs } from 'fs';

const rootPath = path.resolve(__dirname, '..');
const sourcePath = path.join(rootPath, 'src');
const publicPath = path.join(rootPath, 'public');

const pages = [
  { src: 'index.pug', dest: 'index.html', props: {} },
];

Promise.all(pages.map(({ src, dest, props }) => {
  const view = pug.compileFile(path.join(sourcePath, 'pages', src));
  return fs.writeFile(path.join(publicPath, dest), view(props), 'utf8');
}))
  .then(() => console.log('pages built'))
  .catch((err) => console.error('unable to build pages', err));
