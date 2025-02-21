document.addEventListener('DOMContentLoaded', () => {
    // Generates a random number between 1 and 50
    const randomNumber = Math.floor(Math.random() * 50) + 1;

    // Get references to the input, button, and message elements
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    // Adds an event listener to the button to handle the guess
    guessButton.addEventListener('click', () => {
        // Parse the user's guess to an integer
        const userGuess = parseInt(guessInput.value);

        // Check if the user's guess is correct
        if (userGuess === randomNumber) {
            // If correct, display a congratulatory message in green
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = 'green';
        } else {
            // If incorrect, prompt the user to try again with a red message
            message.textContent = 'Wrong guess. Try again!';
            message.style.color = 'red';
        }
    });
});