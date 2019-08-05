'use strict'

const cp = require('child_process');
const fs = require('fs');

process.chdir('static/release-notes/');
cp.execSync('cp -r ../../src/docs/release-notes/* .');

const urls = String(cp.execSync('ls */*.md'))
    .trim()
    .split('\n')
    .reverse()
    .map(path => `https://www.gitpod.io/release-notes/${path}`);

fs.writeFileSync('all.json', JSON.stringify(urls, null, 2) + '\n');
console.log('Release Notes build successful');
