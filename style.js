let Player1RoundScore = 0
let Player2RoundScore = 0
let Player1GlobalScore = 0
let Player2GlobalScore = 0

let currentPlayer = 1
let gameInProgress = true

function rollDice() {
    // 1. Simulate a dice roll (replace this with your random number logic)
    const diceRoll = Math.floor(Math.random() * 6) + 1;
 
    // 2. Check if the game is in progress
    if (gameInProgress) {
       // 3. If the dice roll is not 1, update the ROUND score for the current player
       if (diceRoll !== 1) {
          if (currentPlayer === 1) {
             Player1RoundScore += diceRoll;
          } else {
             Player2RoundScore += diceRoll;
          }
       } else {
          // 4. If the dice roll is 1, the current player's ROUND score is reset to 0
          if (currentPlayer === 1) {
             Player1RoundScore = 0;
             // 5. Switch to the other player's turn
             currentPlayer = 2;
          } else {
             Player2RoundScore = 0;
             // 6. Switch to the other player's turn
             currentPlayer = 1;
          }
       }
 
       // 7. Update the UI to show the dice roll and scores
       // (You'll need to modify the HTML to display these values)
    }
 }
 