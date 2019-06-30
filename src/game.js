'use strict'
function Game () {
  this.totalScore = 0;
};

Game.prototype.getTotalScore = function() {
  return this.totalScore;
};

Game.prototype.roll = function(pinsHit) {
  // var number = Math.floor(Math.random() * 11);
  // console.log(number)
  return pinsHit;
};

console.log(200)
// Thermostat.prototype.getCurrentTemperature = function() {
//   return this.temperature;
// };
