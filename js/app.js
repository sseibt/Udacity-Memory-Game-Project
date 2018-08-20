 const icons =
['fa fa-diamond', 'fa fa-diamond',
'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
'fa fa-bolt', 'fa fa-bolt',
'fa fa-anchor', 'fa fa-anchor',
'fa fa-cube', 'fa fa-cube',
'fa fa-leaf', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bomb',
'fa fa-bicycle', 'fa fa-bicycle'];

const compareCards = array.icons;

// Method to shuffle cards for each new game. Function from http://stackoverflow.com/a/2450976
Array.prototype.shuffle = function () {
  var currentIndex = cardIcon.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      cardIcon[currentIndex] = cardIcon[randomIndex];
      cardIcon[randomIndex] = temporaryValue;
  }

  return shuffle;
};
}

//Flip over cards
const cardDeck = document.querySelectorAll('.card');
let openCards = [];

cardDeck.forEach(function(card) {
  card.addEventListener('click', function(e) {
      openCards.push(card);
      card.classList.add('open', 'show');
    });
});

//Check to see if the cards match
if (card.classList = 'open', 'show') {
  function compareCards() {

  }
} else {

}
)};

//Start Game, call shuffle method to arrange new order of cards to the deck
function newBoard() {
  compareCards = 0;
  const output = '';
  icons.shuffle();
    for var i =0; i < icons.length; i++) {
      output += '<ul class="deck" + i +'" onclick="cardDeck(this,\''+iconArray[i]+'\')"></ul>';
    }
    document.getElementsByClassName('deck').innerHTML = output;
}
window.addEventListener(newBoard(););

// Count the moves made to complete Game. After 16 moves, start removing stars.
let count = 0;
