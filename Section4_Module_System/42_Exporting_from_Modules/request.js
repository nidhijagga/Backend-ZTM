module.exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'Encrypted Data';
}


module.exports = function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

