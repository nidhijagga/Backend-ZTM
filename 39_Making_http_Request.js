const http = require('https');

const req = http.request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No More Data");
    })
});

req.end();

//Modern ES Module
const { request, get } = require('http');
//Now we can directly write request() instead of http.request()
const request = request()

const { get } = require('http');
get('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log("No More Data");
    })
})

//Now we dont have to use get.end(), its directly call by get