const axios = require('axios');

axios.get('https://www.instagram.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        (console.error(err));
    })