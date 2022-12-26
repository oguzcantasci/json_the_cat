const request = require(`request`);

const breed = process.argv[2]; // Get the breed name from commandline

request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
});
