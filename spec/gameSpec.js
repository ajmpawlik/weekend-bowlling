'use strict'

describe ('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

    it ('shows the score of the bowling game', function (){
      expect(game.getTotalScore()).toEqual(0);
    })

    // it ('method roll returns the ouctome number of pins hit in this roll', function () {
    //   expect(game.roll(4)).toEqual(4);
    // })

    // it ('method getNumberOfPinsHitRoll shows the number of the pins hit in the roll', function () {
    //   expect(game.getNumberOfPinsHitRoll() === game.roll).toBeTruthy();
    // })

    // it ('is a storage for the scores from the rolls', function() {
    //   expect(game.frame())
    // })
});
