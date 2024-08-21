#!/usr/bin/env node
const args = require('args');
const utils = require('./utils');
const transformer = require('./transform');
const linkconverter = require('./convertLinks');
const searchUpdater = require('./updateSearch');
const path = require("path");

args
    .option('phase', 'The phase of the pipeline', 'link')
    .option('files', 'The files to process', undefined)
    .option('searchFile', 'File containing search manifest', undefined)
    .option('json', 'The JSON file containing the list of files to process', '');

const flags = args.parse(process.argv);

console.log(flags.phase);
console.log(flags.files);
console.log(flags.json);

let files = flags.files ? flags.files.split(',') : utils.getFilesList('files.json');
files = files.filter(file => path.basename(file) === 'hub.md');

const searchFile = flags.searchFile || `../public/data/pages/searchToolsCollection.json`;;
const searchPath = path.resolve(__dirname, searchFile);

console.log(`Search path: ${searchPath}`);

let convertedOutput = '';
if (flags.phase === 'transform') {
    transformer.transform(files);
} else if (flags.phase === 'searchupdate') {
    searchUpdater.update(searchPath);
}  else if (flags.phase === 'link') {
    convertedOutput = linkconverter.absolutify(files);
} else {
    console.error('Invalid phase');
}

console.log(convertedOutput);