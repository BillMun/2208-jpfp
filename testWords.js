const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
  params: {entry: 'pet'},
  headers: {
    'X-RapidAPI-Key': '45b12ba1e7mshcb2bb3e1252ae27p18462ajsn5cdf49a44660',
    'X-RapidAPI-Host': 'twinword-word-associations-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});