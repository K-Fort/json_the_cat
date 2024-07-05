// Require the 'needle' module for making HTTP requests
const needle = require('needle');


// Define a function named fetchBreedDescription that takes breedName and a callback function as parameters
const fetchBreedDescription = function(breedName, callback) {
  // Construct the URL for the API request using the provided breedName
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make a GET request to the constructed URL using needle
  needle.get(url, (error, response) => {
    // Check if there was an error in the request
    if (error) {
      // Call the callback with the error and null for description
      callback(error, null);
    } else {
      // Extract the response body from the API response
      const data = response.body;

      // Check if the response body (data) contains any results
      if (data.length > 0) {
        // Call the callback with null for error and the description of the first breed found in the data array
        callback(null, data[0].description);
      } else {
        // Call the callback with null for error and a message indicating that the breed name was not found
        callback(null, 'Breed not found');
      }
    }
  });
};

fetchBreedDescription('Siberian', (error, description) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Description:', description);
  }
});

// Export the fetchBreedDescription function for use in other modules
module.exports = fetchBreedDescription;


