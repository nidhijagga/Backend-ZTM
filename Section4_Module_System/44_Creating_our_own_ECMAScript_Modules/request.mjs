const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'Encrypted Data';
}


function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`);
}

export {
    REQUEST_TIMEOUT,
    send
}

