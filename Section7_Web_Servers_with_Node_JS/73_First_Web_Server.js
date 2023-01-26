const http = require('http');
const PORT = 4000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Anup Gupta'
    }));
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost

