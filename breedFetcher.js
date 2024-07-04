// Require the 'needle' module for making HTTP requests
const needle = require('needle');

// Define a function named fetchBreedDescription that takes breedName as a parameter
const fetchBreedDescription = (breedName) => {
  // Construct the URL for the API request using the provided breedName
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make a GET request to the constructed URL using needle
  needle.get(url, (error, response) => {
    // Check if there was an error in the request
    if (error) {
      // Log an error message with the details of the error
      console.error('Request failed:', error.message); // Print the error details to the screen
    } else {
      // Extract the response body from the API response
      const data = response.body;

      // Check if the response body (data) contains any results
      if (data.length > 0) {
        // Output the description of the first breed found in the data array
        console.log(data[0].description);
      } else {
        // Log a message indicating that the breed name was not found
        console.log('Breed not found');
      }
    }
  });
};

// Testing the fetchBreedDescription function by searching for the breed 'Siberian'
fetchBreedDescription('Siberian');
