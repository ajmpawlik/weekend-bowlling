'use strict'

describe ('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

    it ('shows the score of the bowling game', function (){
      expect(game.getTotalScore()).toEqual(0);
    })

    it ('method roll returns the ouctome number of pins hit in this roll', function () {
      expect(game.roll(5)).toEqual(5);
    })
});
