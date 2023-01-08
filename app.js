'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

// Function for repeating code
const displayMessage = function(message){
 document.querySelector('.message').textContent = message
}

const displayNumber = function(number){
 document.querySelector('.number').textContent = number
}

const displayScore = function(score){
  document.querySelector('.score').textContent = score
}

const bodyStyle = function(body){
  document.querySelector('body').style.backgroundColor = body
}

const numberStyleWidth = function(numStyle){
  document.querySelector('.number').style.width = numStyle
}


// document.querySelector('.number').textContent = secretNumber


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!')

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')
    displayNumber(secretNumber)
    // document.querySelector('.number').textContent = secretNumber

    // Change a color if wins
    bodyStyle(' #60b347')
    numberStyleWidth('30rem')
   
    // Set a highscore
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // When guess is wrong
  } else if(guess !== secretNumber){
   if (score > 1) {
     displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low')
     score--
     displayScore(score)
   } else {
     displayMessage('💥 You lost the game!') 
     displayScore(0)
   }
  }
})

// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20

  displayMessage('Start guessing...')
  displayNumber('?')
  displayScore(score)

  document.querySelector('.guess').value = ''
  
  bodyStyle(' #222')
  numberStyleWidth('15rem')
})