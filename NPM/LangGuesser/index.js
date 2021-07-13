const langs = require("langs");
const franc = require("franc");
const colors = require("colors");

const userInput = process.argv[2];
const languageCode = franc(userInput);

if (languageCode === "und") {
    console.log("Sorry, couldn't figure it out! Try with more sample text.".red)
} else {
    const language = langs.where("3", languageCode);
    console.log(`Our best guess is: ${language.name}`.green);
}

