

  let score = JSON.parse(localStorage.getItem('score')) || { 
    wins: 0, 
    losses: 0, 
    ties: 0
  };
    
  function resetScore() { 
    score.wins = 0; score.losses = 0; score.ties = 0;
    localStorage.removeItem('score');
    updateText();
    document.getElementById('result').textContent = '';
  }

  function updateText(playerMove, computerMove, result) {
    const text = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    const resultText = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    document.getElementById('result').textContent = resultText;
    document.getElementById('result-score').textContent = text;
  }

  function playGame(playerMove) { 
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') { 
      if (computerMove === 'rock') {result = 'You lose.';}
      else if (computerMove === 'paper') {result = 'You win.';}
      else {result = 'Tie.';}
    }

    else if (playerMove === 'paper') {
      if (computerMove === 'rock') {result = 'You win.';}
      else if (computerMove === 'paper') {result = 'Tie.';}
      else {result = 'You lose.';}
    }

    else if (playerMove === 'rock') { 
      if (computerMove === 'rock') {result = 'Tie.';}
      else if (computerMove === 'paper') {result = 'You lose.';}
      else {result = 'You win.';}
    }

    if (result === 'You win.') {
      score.wins++; 
    } else if (result == 'You lose.') {
      score.losses++;
    }
    else {
      score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score)); //it only supports strings, convert obj into string 
    updateText(playerMove, computerMove, result);
  }

  function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random(); 
    if (randomNumber >= 0 && randomNumber < 1/3) { computerMove = 'rock';}
    else if (randomNumber >= 1/3 && randomNumber < 2/3) { computerMove = 'paper';}
    else if (randomNumber >= 2/3 && randomNumber < 1) { computerMove = 'scissors';}
    return computerMove;
  }