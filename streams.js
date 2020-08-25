const fs = require('fs');

const readStream = fs.createReadStream('./doc_file/large_file.txt', { encoding: 'utf-8' });

const writeStream = fs.createWriteStream('./doc_file/large_file_second.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- New Chunk ----');
//     console.log(chunk);

//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

// Instead you can try below short code
readStream.pipe(writeStream);