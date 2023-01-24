const send = require('./request')
const read = require('./response')

//Another Method

//if module.export = {send, REQUEST_TIMEOUT}
//We can do like const {send}, const{read} and then directly use send(url, data) and return read()

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://www.google.com', 'Hello')
console.log(responseData);