
"use strict";
/*    
      Project to present an online quiz with a countdown clock
      Author: Barbara Vrhovac
      Date:   5/7/2024

      Filename: final.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 60;
const correctAnswers = ["React JS", "Node.js", "Vue.js","TypeScript", "React JS", "Ember.js"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

let timeID;
let questionList = document.querySelectorAll("div#quiz input");
startQuiz.onclick = function() {
overlay.className = "showquiz"
timeID = window.setInterval(countdown,1000)
}

function countdown()
{

if (timeLeft == 0)
{
  window.clearInterval(timeID);
  let totalCorrect = checkAnswers();
  if (totalCorrect == correctAnswers.length)
  {
	window.alert("Congratulations, you got a 100% !");
}

else
{

	window.alert("You got " + totalCorrect + " answers out of " + correctAnswers.length + " right." );

timeLeft= quizTime
quizClock.value = timeLeft
overlay.className = "hidequiz"

}
  
}

else
{
  timeLeft --;
  quizClock.value = timeLeft;
}

}










/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}