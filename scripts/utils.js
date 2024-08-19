const { dir } = require('console');
const fs = require('fs');
const path = require('path');

function readFileContents(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        return null;
    }
}

exports.getContents = readFileContents;

function getFilesList(fileName) {
    try {
        const filePath = `${process.env.HOME}/${fileName}`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const files = JSON.parse(fileContent);
    
        return files;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        return [];
    }
}

exports.getFilesList = getFilesList;

const deriveRepo = (file) => {
    
    let directory = path.dirname(file);
    const featuresRegEx = /(\/|.*\/|\.\.\/)?features\//g;
    directory = directory.replaceAll(featuresRegEx, '');
    const segments = [
        directory.slice(0, directory.indexOf('-')),
        directory.slice(directory.indexOf('-') + 1)
    ];  
    console.log(segments);

    return `https://github.com/${segments[0]}/${segments[1]}`;
}

exports.deriveRepo = deriveRepo;


const writeToFile = (filePath, content) => {
    try {
        fs.writeFileSync(filePath, content);
    } catch (err) {
        console.error(`Error writing file: ${err}`);
    }
};

exports.write = writeToFile;