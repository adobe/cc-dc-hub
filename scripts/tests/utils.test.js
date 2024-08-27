const underTest = require('../utils');
const path = require('path');
const fs = require('fs');

jest.mock('path');
jest.mock('fs');

test('Derives proper repository name', () => {
    path.dirname.mockReturnValue('/public/features/owner/feature-contribution');
    const repo = underTest.deriveRepo('file.md');
    expect(repo).toBe('https://github.com/owner/feature-contribution');
});

test('Reads file contents', () => {
    fs.readFileSync.mockReturnValue('file contents');
    const contents = underTest.getContents('file.md');
    expect(contents).toBe('file contents');
});

test('Get changed files', () => {
    fs.readFileSync.mockReturnValue('["file1.md","file2.md"]');
    const files = underTest.getFilesList('files.json');
    expect(files).toEqual(["file1.md", "file2.md"]);
});