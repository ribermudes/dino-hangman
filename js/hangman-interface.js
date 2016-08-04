var Hangman = require('./../js/hangman.js').hangmanModule;

$(document).ready(function() {
  $('#startGame').click(function() {
    var currentDinoObject = new Hangman();
    currentDinoObject.getDinoWord();
  });
  $('#submitLetter').click(function() {
    var currentDinoObject = new Hangman();
    var playerLetter = $('#letter').val();
    var dinoChars = currentDinoObject.getDinoWord();
    for (i=0; i < dinoChars.length; i++) {
      if (playerLetter === i) {
        console.log("Letter matches!");
      } else {
        console.log("Letter doesn't match!");
      }
      }
    });

});
