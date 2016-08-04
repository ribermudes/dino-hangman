function Hangman(){

}

Hangman.prototype.getDinoWord = function() {
  $.get("http://dinoipsum.herokuapp.com/api/?format=json").then(function(response) {
    response.forEach(function(name){
      var dinoName = name[0];
      $('.showDinoWord').text(dinoName);
      }).fail(function(error){
      $('.showDinoWord').text(error.responseJSON.message);
      });
  });
};

exports.hangmanModule = Hangman;
