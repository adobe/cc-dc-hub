#!/bin/sh

const core = require('@actions/core');
const marked = require('marked');
const path = require('path');
const utils = require('./utils');
const yaml = require('yaml');
const tracker = require('./tracker');

const parseYamlHtml = (content, file) => {
    console.log('Parsing yaml and html');
    const yamlRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(yamlRegex);
    if (match) {
        console.log('YAML found');
        
        const yamlProperties = match[1];
        const contentWithoutYaml = content.replace(yamlRegex, '');
        
        const y = yaml.parse(yamlProperties.replaceAll("---","").trim());
        const html = marked.parse(contentWithoutYaml.trim());

        // /public/features/{id}
        const dirPath = path.dirname(file);
        const root = dirPath.startsWith('/') ? dirPath : `/${dirPath}`;

        y.id = root.replace(/\/public\/features\//, "");
        y.html = `${root}/index.html`;
        y.json = `${root}/index.json`;
        y.adobeCertified = false
        y.repo = utils.deriveRepo(file);
        
        console.log('Returning yaml and html');

        return {
            props: y, 
            html: html
        };
    }

    return ['', marked.parse(content)];
};

const createJson = (yamlProperties, html) => {
    console.log("Creating JSON");
    let json = {
        properties: yamlProperties, 
        content: html
    }

    return json;
};

const createTemplatedHtml = (yamlProperties, html) => {
    console.log("Creating templated HTML");
    Object.keys(yamlProperties).forEach(key => {
        // console.log(`Key: ${key}, Value: ${yamlProperties[key]}`);
    });
    // console.log(html);
    return html;
};

const transform = (files) => {
    
    console.log("Attempting transformation");
    
    try {
        
        // Iterated through all files and create HTML and JSON files, add to tracker
        files.forEach(file => {
            const fileContent = utils.getContents(file);
            if (fileContent) {

                // Separte YAML and HTML
                const { props, html } = parseYamlHtml(fileContent, file);
                const rootPath = path.dirname(file);
                console.log(`Will write files to: ${rootPath} for file ${file} with props:`);
                console.log(props);

                // Create JSON
                const jsonContent = createJson(props, html);
                const jsonPath = `${rootPath}/index.json`;
                utils.write(jsonPath, JSON.stringify(jsonContent));

                // Create HTML
                const htmlContent = createTemplatedHtml(props, html);
                const htmlPath = `${rootPath}/index.html`;
                utils.write(htmlPath, htmlContent);

                tracker.update(file, props);

                console.log(`File ${file} transformed and saved to ${htmlPath} and ${jsonPath}`);
            } else {
                console.error(`Error reading file ${file.path}`);
            }
        });
    } catch (error) {
        core.setFailed(error.message);
    }   
    console.log("Transformation complete"); 
}

exports.transform = transform;