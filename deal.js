var cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function getRandomInt() {
    return Math.floor(Math.random() * 13);
}

function dealCards(p) {
    var dealer = [];
    var players = [];

    dealer.push({
        cards: [cards[getRandomInt()], cards[getRandomInt()]],
        sum: 0
    });
    for(var i = 0; i < p; i ++)
    {  
        players.push({
            cards: [cards[getRandomInt()], cards[getRandomInt()]],
            sum: 0,
            state: 'playing'
        });
    }
    return [dealer, players];
}

function hit(o) {
    o.cards.push(cards[getRandomInt()]);
}

module.exports = {
    dealCards, hit
};