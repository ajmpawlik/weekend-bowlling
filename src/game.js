'use strict'
function Game() {
  this.totalScore = 0;
  this.allFrames = []
  this.frame = []
  this.currentFrame = 0
  this.getTotalScore = function() {
    return this.totalScore;
  };
  // this.bum = function() {
  //   while (this.currentFrame < 10) {
  //     console.log(this.currentFrame);
  //     this.currentFrame ++
  //   }
  // };
  this.roll = function(pins){
    if (this.currentFrame > 1) {
      this.currentFrame = 0;
    }
    this.frame[this.currentFrame] = pins;
    this.currentFrame ++
    return this.frame
  };
  // this.getTotalScore=function(pins) {
  // this.frame[this.currentFrame] = pins;
};




Game.prototype.roll = function(pins) {
  this.frame[this.currentFrame] = pins;
//  the other option could be making frame as array of arrays with meta array being a game
// [[1, 2], [1, 2]......] if 1 < 10 this.frame[this.currentFrame][this.currentFrame]= pins (that is the second place in the inner array).
};

Game.prototype.getTotalScore = function() {
  return 1;
};

Game.prototype.getNumberOfPinsHitRoll = function() {
  return this.roll;
};
