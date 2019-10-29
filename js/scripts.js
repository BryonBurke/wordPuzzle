$(document).ready(function() {
  $('form#puzzleInput').submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("#userSentenceInput").val();
    var chars = sentenceInput.split('');

    var quizSentence=chars.map(function(char){

      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        return("-")
      } else {
        return(char)
      };
    });
    var quizString = quizSentence.join('');
    $('#quiz-sentence').text(quizString);
    $(".results").show();
    $('form#puzzleInput').hide();
  });

  // console.log(chars);

});
