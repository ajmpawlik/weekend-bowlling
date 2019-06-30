'use strict'
function Game () {
  this.totalScore = 0;
  this.roll = function() {
    return Math.floor(Math.random() * 11)
  };
  console.log(this.roll())
  // this.frame = []
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getNumberOfPinsHitRoll = function() {
  return this.roll;
}

console.log(200)

var game = new Game();

var a = game.roll()

console.log(a)
