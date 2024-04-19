#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.underline.yellow("\n\tWelcome to Alizey Word Counter..."))


const answers: {
   sentence: string;
} = await inquirer.prompt([
    {
        name: "sentence",
      type: "input",
        message:(chalk.underline.italic.cyan("Enter a sentence to count a word... "))

    }
])

const words = answers.sentence.trim().split(" ")


//print the array of word 

console.log(words)

 //print the word count of the sentence 

console.log(chalk.underline.italic.magenta(`Your sentence word count is ${words.length}`));
console.log(chalk.bold.italic.underline.yellow("\n\tThankyou for using Alizey word counter..."));


