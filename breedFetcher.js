const request = require(`request`);

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.therrcatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
    if (error) { // Handle request errors
      callback(`Request error: ${error.errno}`, null);
      process.exit();
    }

    const data = JSON.parse(body)[0];
    if (data) { // Handle breed name errors
      callback(null, data.description);
    } else {
      callback(`Couldn't find a ${breed} breed`, null);
    }

  });
};

module.exports = {fetchBreedDescription};


