'use strict'

describe ('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

    it ('shows the score of the bowling game', function (){
      // var game = new Game();
      expect(game.getTotalScore()).toEqual(0);
    })

    it ('shows the score of first roll', function (){
      expect(game.roll(7)).toEqual([7]);
    })

    it ('shows the score of the second roll', function (){
      game.roll(8)
      expect(game.roll(9)).toEqual([8,9]);
    })







    // it ('displays a Gutter game, when the player never hits the pin - 20 zero scores')
    //   expect()
    // it()

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
