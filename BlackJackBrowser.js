'use strict';
let repeat = confirm('Do you want to start the game?');
while (repeat === true) {
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen',
  'King', 'Ace'];
const suits = ['of Hearts', 'of Clubs', 'of Diamonds', 'of Spades'];
const usedCards = [];
let score = [0, 0];
let playersHand = [[], []];
//let rivalScore = 0;
function dealCard(c) {
  function randomize(randCeil) {
    let a;
    a = Math.random();
    a >= 0.5 ? a = Math.ceil(a * randCeil) : a = Math.floor(a * randCeil);
    //console.log(a);
    return a;
  }
  const suit = suits[randomize(3)];
  const rank = ranks[randomize(12)];
  const cardId = rank + ' ' + suit;
  //console.log(rank, Number(rank));
  let cardScore = 0;
  if (Number(rank)) {
    cardScore = Number(rank);
  } else if (rank === 'Ace') {
    cardScore = 11;
  } else {
    cardScore = 10;
  }
  usedCards.indexOf(cardId) > -1 ? dealCard(c) :
    usedCards.push(cardId);
  playersHand[c].push(cardId);
  score[c] += cardScore;
  if (score[c] > 21 && cardScore === 11) {
    score[c] -= 10;
  }
}
//for (; answer === true; askDrawCard()
function askDrawCard() {
  let answer = confirm('Your score: ' + score[0] + '\n' +
    'Your cards: ' + playersHand[0] + '\n\n' +
    'Dealer score: ' + '?' + '\n' +
    'Dealer cards: ' + playersHand[1][0] + ', ?' + '\n\n' +
    'Draw another card? {Y/N}')
  if (answer) {
    dealCard(0);
    alert('Your score: ' + score[0] + '\n' +
      'Your cards: ' + playersHand[0]);
    if (score[0] < 21) {
      askDrawCard()
    } else if (score[0] === 21) {
      alert('YOU WIN!')
    } else { alert('BUST!') }
  }
}
dealCard(0);
dealCard(0);
alert('Your score: ' + score[0] + '\n' +
  'Your cards: ' + playersHand[0]);
//score[0] = 21;
if (score[0] === 21) {
  alert('BLACKJACK!');
} else {
  dealCard(1);
  dealCard(1);
  if (score[1] === 21) {
    alert(playersHand[1] + 'Dealer score: 21' + '\n' + 'YOU LOSE!')
  } else {
    alert('Dealer score: ' + '?' + '\n' +
      'Dealer cards: ' + playersHand[1][0] + ', ?');
    askDrawCard();
    if (score[0] < 21) {
      while (score[1] < 17) {
        dealCard(1);
      }
      alert('Dealer score: ' + score[1] + '\n' +
        'Dealer cards: ' + playersHand[1]);
      if (score[0] > score[1] || score[1] > 21) {
        alert('YOU WIN!')
      } else if (score[0] === score[1]) {
        alert('DRAW!')
      } else {
        alert('YOU LOSE!')
      }
    }
  }

}
let repeat = confirm('Do you want to  play a new round?');
if (!repeat) {break}
}
