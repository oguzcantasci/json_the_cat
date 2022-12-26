const request = require(`request`);

const breed = process.argv[2]; // Get the breed name from commandline

request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
  if (error) { // Handle request errors
    console.log("!!!!!!Error!!!!!!\n",
      `Error Numner: ${error.errno}\n`,
      `Error Code: ${error.code}`);
  }

  const data = JSON.parse(body);
  if (data.length === 0) { // Handle breed name errors
    console.log("Breed not found");
    process.exit();
  }
  console.log(data[0].description);
});
