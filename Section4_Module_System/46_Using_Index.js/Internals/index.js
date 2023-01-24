// module.exports = {
//     request: require('./request'),
//     response: require('./response')
// }

//require('./request')
//require('./response')

//==

// const { send } = require('./request')
// const { read } = require('./response')


//We are directly exporting it by importing in the object.

//now it can be imported using the object properties like request and response.

// const request = require('./request');
// const response = require('./response');

// module.exports = {
//     send: request.send,
//     read: response.read,
//     REQUEST_TIME: request.REQUEST_TIMEOUT
// }

module.exports = {
    ...require('./request'),
    ...require('./response')
}