const {fetchBreedDescription} = require('./breedFetcher');

const breed = process.argv[2]; // Get the breed name from commandline

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log("Error fetching details: ", error);
  } else {
    console.log(description);
  }
});