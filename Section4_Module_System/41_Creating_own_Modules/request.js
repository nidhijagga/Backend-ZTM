function encrypt(data) {
    return 'Encrypted Data';
}


function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

// console.log(module);
module.exports = {
    // send: send,
    send,
}