const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const target = process.argv[3];
const additionalData = process.argv.slice(4).join(' ');

switch (operation) {
    case 'read':
        fs.readFile(target, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file '${target}':`, err);
                return;
            }
            console.log(`Contents of '${target}':`);
            console.log(data);
        });
        break;
    
    case 'delete':
        fs.unlink(target, (err) => {
            if (err) {
                console.error(`Error deleting file '${target}':`, err);
                return;
            }
            console.log(`File '${target}' deleted`);
        });
        break;
    
    case 'create':
        fs.writeFile(target, '', (err) => {
            if (err) {
                console.error(`Error creating file '${target}':`, err);
                return;
            }
            console.log(`File '${target}' created`);
        });
        break;
    
    case 'append':
        fs.appendFile(target, additionalData + '\n', (err) => {
            if (err) {
                console.error(`Error appending to file '${target}':`, err);
                return;
            }
            console.log(`Content appended to the file '${target}'`);
        });
        break;
    
    case 'rename':
        fs.rename(target, additionalData, (err) => {
            if (err) {
                console.error(`Error renaming file '${target}' to '${additionalData}':`, err);
                return;
            }
            console.log(`File '${target}' renamed to '${additionalData}'`);
        });
        break;
    
    case 'list':
        fs.readdir(target, (err, files) => {
            if (err) {
                console.error(`Error reading directory '${target}':`, err);
                return;
            }
            console.log(`Contents of directory '${target}':`);
            files.forEach(file => {
                console.log(file);
            });
        });
        break;
    
    default:
        console.log(`Invalid operation '${operation}'`);
        break;
}
