document.addEventListener('DOMContentLoaded', () => {
     
    const randomNumber = Math.floor(Math.random() * 50) + 1;

    
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    
    guessButton.addEventListener('click', () => {
   
        const userGuess = parseInt(guessInput.value);

      
        if (userGuess === randomNumber) {
           
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = 'green';
        } else {
          
            message.textContent = 'Wrong guess. Try again!';
            message.style.color = 'red';
        }
    });
});
