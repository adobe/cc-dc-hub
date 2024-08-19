const utils = require('./utils');

const trackerFile = `${process.env.HOME}/tracker.json`;

const getEntries = () => {
    return JSON.parse(utils.getContents(trackerFile));
}

exports.entries = getEntries;

const updateTracker = (file, props) => {

    try {
        let tracked = getEntries(trackerFile);
        // Ensure entry doesn't already exist
        let found = tracked.find(entry => entry.id === props.id);
        if (found) {
            // Remove the entry to ensure no erroneous caching
            tracked = tracked.filter(entry => entry.id !== props.id);
        }
        
        tracked.push({
            file,
            id: props.id,
            html: props.html,
            json: props.json
        });
        utils.write(trackerFile, JSON.stringify(tracked));

    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
    
}

exports.update = updateTracker;