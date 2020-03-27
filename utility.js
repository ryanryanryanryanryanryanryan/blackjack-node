const prompt = require("prompt-sync")();
const { hit } = require("./deal");

function sum(p, n) {
  var s = 0;
  for (var i = 0; i < p.length; i++) {
    if (p[i] === "A") {
      var aceval = prompt(
        `Player ${n} you have an ace and your cards are ${p}, what do you want the ace to be? 1 or 11: `
      );
      const num = parseInt(aceval);
      s = s + num;
    } else if (p[i] === "J") {
      s = s + 10;
    } else if (p[i] === "Q") {
      s = s + 10;
    } else if (p[i] === "K") {
      s = s + 10;
    } else {
      s = s + p[i];
    }
  }
  return s;
}
function d1sum(d) {
    var s = 0;
    for (var i = 0; i < d.length; i++) {
      if (d[i] === "A") {
        var num = 1;
        s = s + num;
      } else if (d[i] === "J") {
        s = s + 10;
      } else if (d[i] === "Q") {
        s = s + 10;
      } else if (d[i] === "K") {
        s = s + 10;
      } else {
        s = s + d[i];
      }
    }
    return s;
}
function d2sum(d) {
    var s = 0;
    for (var i = 0; i < d.length; i++) {
      if (d[i] === "A") {
        var num = 11;
        s = s + num;
      } else if (d[i] === "J") {
        s = s + 10;
      } else if (d[i] === "Q") {
        s = s + 10;
      } else if (d[i] === "K") {
        s = s + 10;
      } else {
        s = s + d[i];
      }
    }
    return s;
}

//p is the current player
//n is the space in the array of players that p occupies
function play(p, n) {
  console.log("Player", n + 1, "your turn!");
  var playing = true;
  while (playing) {
    const hitOrStay = prompt(
      `Your cards are: ${p.cards}. Your sum is ${p.sum}. Do you want to hit or stay?`
    );
    if (
      !hitOrStay.toLowerCase() == "hit" &&
      !hitOrStay.toLowerCase() == "stay"
    ) {
      hitOrStay = prompt(
        `You entered an invalid answer. Your sum is ${p.sum}. Do you want to hit or stay?`
      );
    }
    if (hitOrStay.toLowerCase() == "hit") {
      hit(p);
      console.log("Your new card is", p.cards[p.cards.length - 1], ".");
    } else if (hitOrStay.toLowerCase() == "stay") {
      playing = false;
    }
    var s = sum(p.cards, n + 1);
    p.sum = s;
    if (p.sum > 21) {
      p.state = "busted";
      playing = false;
      console.log("Player", n + 1, "has", p.state, ".");
    } else if (p.sum === 21) {
      p.state = "blackjack";
      playing = false;
      console.log("Player", n + 1, "has", p.state, ".");
    }
  }
}

function dealerPlay(d)
{
    var condition = true;
    while(condition)
    {
        console.log(d);
        if(d.sum <= 16)
        {
            hit(d);
            var onesum = d1sum(d);
            var elevensum = d2sum(d);
            if(elevensum <= 21)
            {
              d.sum = elevensum;
            }
            else
            {
              d.sum = onesum;
            }
        }
        else{
            condition = false;
        }
    }
    return d;
}
module.exports = {
  sum,
  play,
  dealerPlay
};