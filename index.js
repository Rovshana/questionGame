let questions ={
   q1: [ 'html is a not a proggramming language','t'],

    q2: ['"Cards on the table" work belongs to the Agatha Cristie', 't'],
    q3:  ['Jonathan swift was born in London', 'f'],
    
   q4: ['London is a capital of USA', 'f'],
  
    q5:[ 'India is the world"s largest tea-drinking country','t'],
    q6:['In Spain people eat 12 grapes for good luck of each month in the  new year ', 't'],
    q7: [ 'Lake Baykal is the deepest lake on the Earth', 't'],
    

    q8: ['istanbul is the capital of Turkey', 'f']

}
 let score = 0;
 let questionIndex = 0;

  let questionsArr = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7, questions.q8];


  // 
  function renderQuestion(){
      if(questionIndex <= (questionsArr.length -1)){
          document.querySelector('#question').innerHTML = questionsArr[questionIndex][0];

      } else{
        document.querySelector("#question").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArr.length;
      }
  }


  // updating score
   function updateScore (){
    document.querySelector("#score").innerHTML = "Score: " + score;
   }

   //  time to call the function in order to start the game!
   renderQuestion();
   updateScore();

   //
   document.onkeydown = function(event){
       if(questionIndex === questionsArr.length){
           return;
       }
let userInput = String.fromCharCode(event.which).toLowerCase();

if (userInput === questionsArr[questionIndex][1]) {
    alert("Correct!");
    score++;
    updateScore();
  } 
  else {
    alert("Wrong!");
  }
  questionIndex++;
renderQuestion();

   }