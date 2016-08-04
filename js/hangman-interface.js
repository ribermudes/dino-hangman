var Hangman = require('./../js/hangman.js').hangmanModule;

$(document).ready(function() {
  $('#startGame').click(function() {
    var currentDinoObject = new Hangman();
    currentDinoObject.getDinoWord();

  // $('#submitLetter').click(function() {
  //   var playerLetter = $('#letter').val();

  });
});
