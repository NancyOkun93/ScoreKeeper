//$('h1').html('it works');

var score = 0;
var finalscore = 'Points';

$('#increase-5').on('click', function(){
  score = score + 5;
  updatescore();

});


$('#decrease-5').on('click', function(){
  score = score - 5;
  if(score < 0) score = 0;
  updatescore();

});


$('#submit-custom-score').on('click', function(){
    score = parseInt( $('#custom-score').val() );
    if(score < 0) score = 0;
    updatescore();

});

function updatescore(){
 $('#score').html(score).append(finalscore);}
