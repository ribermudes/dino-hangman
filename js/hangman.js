function Hangman(dinoChars){
  this.dinoChars = dinoChars;
}

Hangman.prototype.getDinoWord = function() {
  $.get("http://dinoipsum.herokuapp.com/api/?format=json").then(function(response) {
    response.forEach(function(name){
      var dinoName = name[0];
      var dinoChars = dinoName.toUpperCase().split('');
      $(".showDinoWord").text(dinoChars);
      }).fail(function(error){
      $('.showDinoWord').text(error.responseJSON.message);
      });
  });
};

exports.hangmanModule = Hangman;
