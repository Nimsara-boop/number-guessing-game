let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById('guessInput').value);
  const result = document.getElementById('result');

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Correct! You guessed the number!";
  } else if (userGuess > secretNumber) {
    result.textContent = "Too high! Try again.";
  } else {
    result.textContent = "Too low! Try again.";
  }
}
