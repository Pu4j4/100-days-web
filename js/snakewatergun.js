function playGame() {
    const userChoice = prompt("Enter S for Snake, W for Water, or G for Gun").toUpperCase();
    const choices = ['S', 'W', 'G'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
    if (userChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'S' && computerChoice === 'W') ||
      (userChoice === 'W' && computerChoice === 'G') ||
      (userChoice === 'G' && computerChoice === 'S')
    ) {
      result = "You win!";
    } else {
      result = "You lose!";
    }
    alert(`Your choice: ${userChoice}\nComputer's choice: ${computerChoice}\nResult: ${result}`);
    const playAgain = confirm("Do you want to play again?");
    
    if (playAgain) {
      playGame();
    } else {
      alert("Thanks for playing! Goodbye!");
    }
  }
  playGame();
  
  