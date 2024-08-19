#!/bin/sh

const core = require('@actions/core');
const fs = require('fs');
const utils = require('./utils');

const findAndReplace = (content, prefix) => {
    const regex = /\((\.\.\/|\..\/|\/)?([^)]+)\)/g;
    const matches = content.match(regex);

    if (matches) {
        matches.forEach(match => {
            let link = match.slice(1, -1);
            const isRelative = link.startsWith('.') || link.startsWith('/');

            if (isRelative) {
                let absoluteLink = '';
                if (link.startsWith('/')) {
                    absoluteLink = `${prefix}${link}`;
                } 
                if (link.startsWith('..') || link.startsWith('.')) {  
                    const pattern = /\.(\.)?\//
                    link = link.replace(pattern, '');
                    absoluteLink = `${prefix}/${link}`;
                }
                content = content.replace(match, `(${absoluteLink})`);
            }
        });
    }

    return content;
}

const absolutifyLinks = (files) => {
    try {
        files.forEach(file => {
            const content = utils.getContents(file);
            const newContent = findAndReplace(content, utils.deriveRepo(file));
            fs.writeFileSync(file, newContent);
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

exports.absolutify = absolutifyLinks;


