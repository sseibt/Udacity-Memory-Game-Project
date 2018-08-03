/* Array that holds the cards
const cardIcon =
['fa-diamond', 'fa-diamond',
'fa-paper-plane-o', 'fa-paper-plane-o',
'fa-bolt', 'fa-bolt',
'fa-anchor', 'fa-anchor',
'fa-cube', 'fa-cube',
'fa-leaf', 'fa-leaf',
'fa-bomb', 'fa-bomb',
'fa-bicycle', 'fa-bicycle'];
*/


//Grabbing cards by CSS class, creating a new array each time after a card is clicked which holds no more than two cards clicked and then resets array to empty again
const cardDeck = document.querySelectorAll('.card');
let openCards = [];

cardDeck.forEach(function(card) {
  card.addEventListener('click', function(e) {
      openCards.push(card);
      card.classList.add('open', 'show');
    });
});
//To start the game, prepare board



// Count the moves made to complete Game. After 8 moves, start removing stars.


/* Shuffle cards for each new game. Function from http://stackoverflow.com/a/2450976
function shuffle(cardIcon) {
    var currentIndex = cardIcon.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        cardIcon[currentIndex] = cardIcon[randomIndex];
        cardIcon[randomIndex] = temporaryValue;
    }

    return cardIcon;
}
*/
