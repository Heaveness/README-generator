// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./assets/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide an installation instruction:"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the main usage of your project?"
    },
    {
        type: "list",
        name: "license",
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'None'],
    },
    {
        type: "input",
        name: "contribute",
        message: "Please provide contribution guidelines for your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any test instructions for your project:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inqReadMe) => {
        return inqReadMe;
    })
}

// Function call to initialize app
init();
