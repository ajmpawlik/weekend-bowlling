'use strict'
function Game() {
  this.totalScore = 0;
  this.frame = []
  this.currentFrame = 0
};

Game.prototype.roll = function(pins) {
this.frame[this.currentFrame] = pins;
//  the other option could be making frame as array of arrays with meta array being a game
// [[1, 2], [1, 2]......] if 1 < 10 this.frame[this.currentFrame][this.currentFrame]= pins (that is the second place in the inner array).
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getNumberOfPinsHitRoll = function() {
  return this.roll;
};

var game = new Game()

game.roll(3)

console.log(game.frame);
