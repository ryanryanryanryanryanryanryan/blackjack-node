const { dealCards } = require("./deal");
const { sum, play, dealerPlay } = require("./utility");
const prompt = require("prompt-sync")();

const playerNum = prompt("How many players would like to play black jack? ");

console.log("There are", playerNum, "players.");

var deal = dealCards(playerNum);

var dcards = deal[0];
dcards = dcards[0];
var pcards = deal[1];

pcards.forEach((element, index) => {
    var s = sum(element.cards, index);
    element.sum = s;
});
console.log("The dealer has a", dcards.cards[0], "and a mystery card!");

console.log(pcards);

pcards.forEach((element, index) => {
    console.log();
    play(element, index);
});

pcards.forEach(index => {
    //if()
});

dcards = dealerPlay(dcards);
console.log(dcards);

console.log();
pcards.forEach((element, index) =>{
    console.log(`Player ${index + 1}: ${element.state}`);
});

