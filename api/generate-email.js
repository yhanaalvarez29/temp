const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.temp-mail.io/v1/messages/:id/source_code',
  headers: { 
    'Accept': 'application/json', 
    'X-API-Key': '<X-API-Key>'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
