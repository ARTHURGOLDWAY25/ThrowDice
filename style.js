let Player1RoundScore = 0;
let Player2RoundScore = 0;
let Player1GlobalScore = 0;
let Player2GlobalScore = 0;

let currentPlayer = 1;
let gameInProgress = true;


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
       // You can then update their content as the game progresses
diceResultElement.textContent = diceRoll; // Example: Set the dice result to 5
roundScore1Element.textContent = Player1RoundScore; // Example: Update Player 1's ROUND score
globalScore1Element.textContent = Player1GlobalScore; // Example: Update Player 1's GLOBAL score
roundScore2Element.textContent = Player2RoundScore; // Example: Update Player 2's ROUND score
globalScore2Element.textContent = Player2GlobalScore; // Example: Update Player 2's GLOBAL score
    }
 }
  // Get references to the new elements
const diceResultElement = document.getElementById('dice-result');
const roundScore1Element = document.getElementById('round-score-1');
const globalScore1Element = document.getElementById('global-score-1');
const roundScore2Element = document.getElementById('round-score-2');
const globalScore2Element = document.getElementById('global-score-2');

// Implement hold function 
function hold() {
   if (gameInProgress) {
       // Check whose turn it is (based on the currentPlayer variable)
       if (currentPlayer === 1) {
           // Add Player 1's ROUND score to their GLOBAL score
           Player1GlobalScore += Player1RoundScore;
           // Update the UI to display the updated scores

           // Check if Player 1 has won
           if (Player1GlobalScore >= 100) {
               // Display a message or end the game
               gameInProgress = false;
           } else {
               // Switch to Player 2's turn
               currentPlayer = 2;
           }
       } else {
           // Add Player 2's ROUND score to their GLOBAL score
           Player2GlobalScore += Player2RoundScore;
           // Update the UI to display the updated scores

           // Check if Player 2 has won
           if (Player2GlobalScore >= 100) {
               // Display a message or end the game
               gameInProgress = false;
           } else {
               // Switch to Player 1's turn
               currentPlayer = 1;
           }
       }
   }
}
hold()


// Add a click event listener to the element
document.addEventListener("DOMContentLoaded", function () {
   const newGameButton = document.getElementById("new-game-button")

   newGameButton.addEventListener("click", function() {
   
      // Call the function to reset the game state here
      resetGame()
   
      alert('Game Reset')
   })

   // Define the resetGame function (same as in the previous example)

function resetGame() {
   // Reset the game state
   Player1RoundScore = 0
   Player2RoundScore = 0
   Player1GlobalScore = 0
   Player2GlobalScore = 0

   currentPlayer = 1
   gameInProgress = true

   
   
   // Set the text content of the relevant HTML elements to 0
   document.getElementById('round-score-' + currentPlayer).textContent = '0';
   document.getElementById('global-score-' + currentPlayer).textContent = '0';

   // Set the text content of the message element to indicate the game reset
   document.getElementById('message').textContent = 'Game Reset';

   // Ensure it's Player 1's turn and that the game is in progress

}
})




