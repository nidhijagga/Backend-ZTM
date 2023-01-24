const { send, read } = require('./Internals')
// const { send } = require('./Internals/request')
// const { read } = require('./Internals/response')
// const { REQUEST_TIMEOUT } = require('./Internals/request')


function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'Hello')
console.log(responseData);

