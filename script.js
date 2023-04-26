'use strict';

// DOM (Document Object Model) Manipulation
// console.log(document.querySelector('.message').textContent); // To select the message we type in `.textContent` of the element
// // The querySelector('....') is for selecting the first element of the class name; So in this case, <p class = 'message' is being return with it corresponded values and element with the message, "Start guessing...". The .textContent is just to get the text out of the element.

// // Setting the message equal to something else (another message) instead of the original, "Start Guessing...";
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// // Seeing the message in console;
// console.log(
//   (document.querySelector('.message').textContent = '🎉 Correct Number!')
// );

// // Make sure to add .textContent to the number when changing the value;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// // If you just need the value of the class key of the input type;
// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

// On clicks - event listeners-----

//  Random number for 0-1 and multiplying the 0-1 number by 20 so it would be numbers above 0-1. Also, .trunc is to get rid of the decimals so it would be whole numbers;

// Keep in mind, to set anything, we must use the "=" to a String. So use '' when we are setting a value to something;

// If we want to manipulate the component of the html page, we would'nt to use the '.' notation. Only for class names we would need to.
// Secret number;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// score counter;
let score = 20;

// Highscore variable;

let Highscore = 0;

// display message function pertaining the class name ".message";
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// check btn
// type in the .addEventListener() to add the action of the onclick
document.querySelector('.check').addEventListener(
  'click',
  function () {
    // The addEventListener is only a way to add a action and receive values once click.

    // The second value inside the ('parameters) is a regular function that would take the value of the guess feature and then display it onto the console/

    // Remember, the parameters is looking for a value, so when the function finishes, it will return the value;
    // In this case, users guess number
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // This is saying if there is no number, then return this message;
    // NOTE: This is all on this function;

    //   else {
    //     document.querySelector('.message').textContent =
    //       ' You lost the game 😭😭😭😭';
    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = '#36454F';
    //   } // End of else statement;

    // If users guess number is equal to  the guess number;
    // When player wins, the background will be green
    // }
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number! 🎉');

      document.querySelector('body').style.backgroundColor = '#60b347';

      //   Setting the "?" to the random number
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';

      // Setting the new highscore component  equal to the highest (current) score user won;
      if (score > Highscore) {
        // Physically setting the highscore to the score;
        Highscore = score;

        // Displaying the highscore;
        document.querySelector('.highscore').textContent = Highscore;
      }
    } // End of if statement when guess == secretNumber;

    // -------------------------------

    // Condensed version using ternary - if statements;
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'); // Decreasing score for wrong guess
        score--;
        // Returning score to screen;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage(' You lost the game 😭😭😭😭');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#EE4B2B';
      } //end of else statement;
    } //  end of if statement for below or above secretNumber;

    if (!guess) {
      if (score > 0) {
        // If guess number is empty or 0
        displayMessage(' 🥲 ⛔️ No Number!');

        // Score Decreases
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#FFBF00';
      }
    } // end of if statement when there is no number in guess field;
  } // end of click function;

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('body').style.backgroundColor = '#EE4B2B';
  //     document.querySelector('.message').textContent = '📈 Too High!';

  //     // Decreasing score for wrong guess
  //     score--;
  //     // Returning score to screen;
  //     document.querySelector('.score').textContent = score;
  //   } // end of it statement;
  //   else {
  //     document.querySelector('.message').textContent =
  //       ' You lost the game 😭😭😭😭';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#36454F';
  //   } // End of else statement;

  //   //   -----------------------------
  //   // When guess is too low;
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     document.querySelector('body').style.backgroundColor = '#368BC1';
  //   } // end of if statement
  //   else {
  //     document.querySelector('.message').textContent =
  //       ' You lost the game 😭😭😭😭';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#36454F';
  //   } // End of else statement;
  // } // end score above 0 statement;
  // end of click function;
); // end of querySelector for .check btn;

// ------------------------------

// This is adding the event handler button for the "again" btn.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage(secretNumber);
  document.querySelector('.number').style.width = '15rem';
  displayMessage('?');
  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
});

// --------------------------------

// Reset;
document.querySelector('.reset').addEventListener('click', function () {
  location.reload();
});
