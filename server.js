const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, Tom');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening to the requests on port 3000');
})