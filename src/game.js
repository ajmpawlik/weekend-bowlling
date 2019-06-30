'use strict'
function Game() {
  this.totalScore = 0;
  this.roll = function() {
  return Math.floor(Math.random() * 11)
  console.log(this.roll())
  };
 // this.frame = []
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.getNumberOfPinsHitRoll = function() {
  return this.roll;
  console.log(this.roll)
};

Game.prototype.strike = function() {
  var mix = 3;
  if (this.roll === 0) {
    return mix;
    console.log(mix)
}
    console.log("not strike");
};

console.log(this.roll)
