// Read File
const fs = require('fs');

fs.readFile('./doc_file/read_doc.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// Write File
fs.writeFile('./doc_file/read_doc.txt', 'Hello! You edited this file.', () => {
    console.log('File has been written!');
});

fs.writeFile('./doc_file/delete.txt', 'Welcome! You created this file.', () => {
    console.log('File has been created!');
})

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder has been created!');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log('Folder has been removed!');
    });
}

// Deleting Files
if (fs.existsSync('./doc_file/delete.txt'))
{
    fs.unlink('./doc_file/delete.txt', (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log('File has been deleted!');
    });
}