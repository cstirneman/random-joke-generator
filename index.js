// API URL for fetching jokes
const apiURL = 'https://official-joke-api.appspot.com/random_joke';

// Elements from the DOM
const jokeContainer = document.getElementById('joke-container');
const newJokeBtn = document.getElementById('new-joke-btn');

// Function to fetch a joke
async function fetchJoke() {
  try {
    const response = await fetch(apiURL);
    const joke = await response.json();
    
    // Display the joke in the jokeContainer
    jokeContainer.innerHTML = `${joke.setup} - ${joke.punchline}`;
  } catch (error) {
    jokeContainer.innerHTML = 'Oops! Something went wrong. Try again later.';
    console.error('Error fetching joke:', error);
  }
}

newJokeBtn.addEventListener('click', fetchJoke);
