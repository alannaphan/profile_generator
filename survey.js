const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer0) => {
  rl.question("What's an activity you like doing? ", (answer1) => {
    rl.question("What do you listen to while doing that? ", (answer2) => {
      rl.question("When is your favourite meal time? (eg. dinner, brunch, etc) ", (answer3) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
          rl.question("Which sport is your absolute favourite? ", (answer5) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer6) => {
              console.log(`${answer0} loves to listen to ${answer2} while doing their favourite activity, ${answer1}. ${answer0}'s favourite thing to eat for ${answer3} is ${answer4}. Their favourite sport is ${answer5} and they're amazing at ${answer6}!`)
              rl.close();
            })
          })
        })
      })
    })
  })
});
