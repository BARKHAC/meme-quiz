
var readlineSync = require('readline-sync');
const chalk= require('chalk');
const log = console.log;
console.log(chalk.blue.bgGreen.bold("Swagat hai aapka KBC mai aaj ka vishay hai MEMES"));
var userName = readlineSync.question(chalk.blue.bgGreen.bold("Kripya karke apna naam bataiye: "));
console.log("    ");
log(chalk.blue.bgRed.bold("Toh Chaliye Shuru Karte Hai "));
/*log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));*/
console.log(chalk.green('Complete the'+chalk.blue.underline.bold('___') + 'in the following memes'));


var score=0;
var players = [
  {
    name:"Barkha",
    points:2,
  },
]

var questions = [
 {
    question: "Tu toh ____ nikla re ",
    option1: "Raju",
    option2: "Rakshas",
    option3: "Devmanus",
    answer: "Devmanus",
 },
  {
    question: "___ din mai paisa double",
    option3: "22",
    answer: "21",
    option2: "25",
    option1: "21",
    
  },
  {
    question:"Utha le re baba , utha le ___ ",
    option1: "jaldi utha le",
    option2: "mujhe",
    option3: "mereko nahi re, in dono ko",
    answer: "mereko nahi re, in dono ko",
  },
  {
    question:"50 rupya kaat ___ ka",
    answer: "overacting",
    option1:"rickshaw",
    option2: "overacting",
    option3: "tax",
   
  }
]

/*function removeSpaces(val) {
   return val.split(' ').join('');
}*/

function playGame(question,answer,opt1,opt2,opt3){
  opt =[opt1,opt2,opt3],
  //var userAnswer =  readlineSync.question(question)
  //;
 // console.log(question);
  index = readlineSync.keyInSelect(opt,question);
  //console.log(opt[index]);
  //console.log(answer);
  if(answer === opt[index]){
    console.log(chalk.cyan.bgWhite.bold("Sahi Jawab"));
    score++;
  }
  else {
    console.log(chalk.blackBright.bgWhite.bold("Afsos"));
  }

}

for(var i=0;i<questions.length;i++){
  playGame(questions[i].question,questions[i].answer,questions[i].option1,questions[i].option2,questions[i].option3);
  console.log("-------");
  console.log("Aapka abhi ka score hai: "+score);
}
console.log("-------");
console.log(chalk.red.bgWhite.bold("Aap ka final score hai "+score));
players.push({name:userName,points:score});
console.log("-------");
console.log(chalk.yellowBright.bold("Kya karenge itni dhanrashi ka?"));

console.log("-------");
console.log("High Scores:");
players.sort(function(a,b){
  let comparision=0;
  const A =a.points;
  const B = b.points;
  return B-A;
});
console.table(players);