/*
17.2
Shuffle
*/

var NUMBER_OF_CARDS = 52;

function Card(number) {
    this.number = number;
}

function Deck() {
    this.cards = [];
}
Deck.prototype.addCard = function(card) {
    this.cards.push(card);
};
Deck.prototype.shuffleCardRandomly = function(from) {
    var to = random(NUMBER_OF_CARDS - 1),
        temp = this.cards[to];

    this.cards[to] = this.cards[from];
    this.cards[from] = temp;
};
Deck.prototype.shuffle = function() {
    for (var k = 0; k < NUMBER_OF_CARDS; k++) {
        this.shuffleCardRandomly(k);
    }
};


function random(max) {
    return Math.round(Math.random() * max);
}

function shuffle() {
    var deck = new Deck();
    for (var i = 0; i < NUMBER_OF_CARDS; i++) {
        deck.addCard(new Card(i));
    }
    console.log(deck);
    deck.shuffle();
    console.log(deck);
}


shuffle();