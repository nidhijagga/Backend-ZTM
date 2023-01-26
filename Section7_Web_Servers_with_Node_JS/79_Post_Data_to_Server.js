const http = require('http');
const PORT = 4000;
const server = http.createServer();


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost

const friends = [
    {
        id: 0,
        name: 'Anup Gupta'
    },
    {
        id: 1,
        name: 'Gaurav'
    },
    {
        id: 2,
        name: 'Nidhi'
    },
    {
        id: 3,
        name: 'Dhruv'
    }
];

server.on('request', (req, res) => {

    const items = req.url.split('/');
    //friends/2 => ['', 'friends', '2']

    //POST

    if (req.method == 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request: ', friend);
            friends.push(JSON.parse(friend));
        })
    }


    //GET
    else if (req.method === 'GET' && items[1] === 'friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            if (friendIndex === 0) {
                res.end(JSON.stringify(friends[0]))
            }
            if (friendIndex === 1) {
                res.end(JSON.stringify(friends[1]))
            }
            if (friendIndex === 2) {
                res.end(JSON.stringify(friends[2]))
            }
            if (friendIndex === 3) {
                res.end(JSON.stringify(friends[3]))
            }
        }
        else {
            res.end(JSON.stringify(friends));
        }

    }
    else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Anup</li>');
        res.write('<li>How are you?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end('Wrong Url! Try Again');
    }
})