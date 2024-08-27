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
    return `https://github.com/${directory}`;
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