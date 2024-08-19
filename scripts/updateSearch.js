const tracker = require('./tracker');
const utils = require('./utils');
const path = require('path');

const updateSearch = (searchPath) => {

    console.log(`Updating search file at ${searchPath}`);

    try {
        let trackedEntries = tracker.entries();
        let searchEntries = JSON.parse(utils.getContents(searchPath));
        
        trackedEntries.forEach(trackedEntry => {

            const directory = path.dirname(trackedEntry.file);
            const jsonFile = `${directory}/index.json`;
            console.log(`Attempting to read file: ${jsonFile}`);

            const props = JSON.parse(utils.getContents(jsonFile)).properties;

            // Ensure entry doesn't already exist
            let found = searchEntries.find(searchEntry => searchEntry.id === props.id);
            if (found) {
                console.log(`Removing entry for ${props.id}`);
                // Remove the entry to ensure no erroneous caching
                searchEntries = searchEntries.filter(searchEntry => searchEntry.id !== props.id);
            }

            console.log(`Adding entry for ${props.id} with details:`);
            console.log(props);

            searchEntries.push({
                id: props.id,
                title: props.title,
                tagline: props.tagline,
                creator: props.creator, 
                contributors: props.contributors,
                desc: props.desc || props.tagline || "",
                featureType: props.featureType,
                productType: props.products,
                path: jsonFile
            });
        });

        console.log(`Writing search entries to ${searchPath}`);
        utils.write(searchPath, JSON.stringify(searchEntries));

    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}

exports.update = updateSearch;