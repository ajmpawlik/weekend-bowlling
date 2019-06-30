'use strict'
function Game () {
  this.totalScore = 0;
  this.roll = function() {
    return Math.floor(Math.random() * 11)
  };
  // this.pinsHit = function(){
  //
  //
  // }
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

// Game.prototype.roll = function() {
//   return Math.floor(Math.random() * 11)
// };

console.log(200)
