import pug from 'pug';
import path from 'path';
import { promises as fs, existsSync, mkdirSync } from 'fs';
import process from 'process';

import skills from './data/skills.js';
import languages from './data/languages.js';
import tools from './data/tools.js';
import courses from './data/courses.js';
import projects from './data/projects.js';
import friends from './data/friends.js';

const rootPath = process.cwd(); //path.resolve(__dirname, '..');
const sourcePath = path.join(rootPath, 'src');
const publicPath = path.join(rootPath, 'public');

const pages = [
  { src: 'index.pug', props: { skills, languages, tools, friends, courses, projects } },
  { src: 'testimony.pug', props: {} },
  { src: 'projects/index.pug', props: { projects } },
  { src: 'courses/index.pug', props: { courses } },
  { src: 'courses/hands-on-web-development-with-hyperapp.pug', props: {} },
  { src: 'test-bed/index.pug', props: {} },
];

Promise.all(pages.map(({ src, props }) => {
  const dest = src.replace(/pug$/, 'html');
  const view = pug.compileFile(path.join(sourcePath, 'pages', src));
  const destPath = path.join(publicPath, path.dirname(dest));
  if (!existsSync(destPath)) {
    mkdirSync(destPath);
  }
  return fs.writeFile(path.join(publicPath, dest), view(props), 'utf8');
}))
  .then(() => console.log('pages built'))
  .catch((err) => console.error('unable to build pages', err));
