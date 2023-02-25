const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

const ansObj = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      ansObj[i] = answer;
      i++;
      console.log()
      question()
    });
  } else {
    rl.close()
    console.log("Your New Profile:");
    setTimeout(() => console.log(`
    ${ansObj[0]} likes ${ansObj[1]} while listening to ${ansObj[2]}. 
    They like eating ${ansObj[4]} for their favorite meal ${ansObj[3]}. 
    ${ansObj[0]}'s absolute favorite sport is ${ansObj[5]}.
    When ${ansObj[0]} was asked their superpower they answered: ${ansObj[6]}
  `), 1500);
  }
}

question()