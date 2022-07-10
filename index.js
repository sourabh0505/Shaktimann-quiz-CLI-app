var readlineSync = require("readline-sync");

highestScore=[
	{
	name: "harsh",
	score:"14"
	}
];
console.log("\n HIGHSCORE \n ");
console.table(highestScore);
var maximum = highestScore[0].score;
for(let i=1;i<highestScore.length;i++)
{
	if(highestScore[i].score>maximum){
		maximum=highestScore[i].score;
	}
}

var userName = readlineSync.question("May i know your name ?");

var welcomeMessage = (" \n Welcome! " + userName + " to SHAKTIMANN QUIZ! \n");
console.log(welcomeMessage);

console.log(" \n Lets start the Shaktimann Quiz. \n ");


console.log("RULES !!! ");
console.log("1.Total 9 questions are there , all questions are necessary to attempt.");
console.log("2. If you give correct answer you will score +2 otherwise you will score -1.");
console.log("3. You have to type the index value of the option selected.");

var questionList=[{	
		question: ("QUESTION 1 :: Who is Shaktimaan ?"),
    arr:["First Indian superhero","Second Indian superhero","Third Indian superhero","Fourth Indian superhero"],
		answer:"First Indian superhero"
	},
		{
		question: ("QUESTION 2 ::  What is the real name of Shaktimaan ?"),
    arr:["Geeta Vishwas","Gangathar Vidyadhar Mayadhar Honkar Nath Shastri","Dhurendar Singh","Chopra"],
		answer:"Gangathar Vidyadhar Mayadhar Honkar Nath Shastri"
	},
		{
		question: ("QUESTION 3 ::  Who made Shaktimaan ?"),
    arr:["Normal bieng","Shaktimaan's mother","Mahaguru","Shaktimaan's father"],
		answer:"Mahaguru"
	},
		{
		question: ("QUESTION 4 :: By which things Shaktimaan is made ?"),
    arr:["man,girl","girl","man","water,earth,mud,sun,solar system"],
		answer:"water,earth,mud,sun,solar system"
	},
		{
		question: ("QUESTION 5 :: Where do Gangadhar work ?"),
    arr:["Apollo","Aaj Ki Awaz","Fortis","Gangaram"],
		answer:"Aaj Ki Awaz"
	},
		{
		question: ("QUESTION 6 :: What is purpose of Shaktimaan ?"),
    arr:["Spread both, truth and badness","Spread badness","Spread the truth","Spread nothing"],
		answer:"Spread nothing"
	},
		{
		question: ("QUESTION 7 ::  Where do Gangadhar live ?"),
    arr:["In every house","President's house","Prime minister's house","Dharmshala"],
		answer:"Dharmshala"
	},
   {
		question: ("QUESTION 8 ::  What shaktimaan have to remove from Earth ?"),
    arr:["Kilvish","Badness","Man","Girl"],
		answer:"Badness"
	},
  {
		question: ("QUESTION 9 ::  Who is Shaktimaan,s biggest enemy ?"),
    arr:["Man","Girl","Kilvish","Priest"],
		answer:"Kilvish"
	}
];

var score = 0;
function Play(question, listOfQuestions, answer){
	
	var userAnswer = readlineSync.keyInSelect(listOfQuestions, question);
	if(listOfQuestions[userAnswer] === answer)
	{
		score+= 2;
	console.log("Yay! your answer is correct , \n score:: "+ score);
	}
	else
	{
		score-= 1;
console.log("Your answer is wrong ! \n The answer is: "+ answer + " \n Your score is :: "+ score);
	}

	if(score === 10)
	{
		console.log(" \n congrats ! you are promoted to level 2 \n");
	}
	else if(score === 6)
	{
		console.log(" \n congrats ! you are promoted to level 1 \n");
	}

}

function game(){
  for(let i=0;i<questionList.length;i++){
	console.log ("--------------------------------------------------");
	Play(questionList[i].question, questionList[i].arr,questionList[i].answer);
	console.log("\n ------------------------------------------------\n ");
  }
}

function showScores(){
  console.log("Congratulations ! "+ userName + " \n Your total score is "+ score + "!" );
}

  game();
  showScores();

if(score >= maximum){
	console.log("\n CONGRATS !! \n You pass the HIGH SCORE ! \n Please send me the screenshot of your result, i will update the score on the scoreboard. \n ");
}
else{
	console.log("\n You didn't pass the HIGHSCORE ! BETTER LUCK NEXT TIME. \n ");
}