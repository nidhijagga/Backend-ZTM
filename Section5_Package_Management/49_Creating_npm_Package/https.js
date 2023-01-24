const { send } = require('./request')
const { read } = require('./response')
const { REQUEST_TIMEOUT } = require('./request')


function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'Hello')
console.log(responseData);


