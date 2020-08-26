const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    // Set header content type
    res.setHeader('Content-Type', 'text/html');
    
    // Read html file
    fs.readFile('./views/index.html', (err, data) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening to the requests on port 3000');
})