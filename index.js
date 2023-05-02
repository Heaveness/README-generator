// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./assets/utils/generateMarkdown.js");

const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter a title for your project!';
            }
            return true;
        },
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter a Github username for your project!';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter an email address for your project!';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter a description of your project!';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide an installation instruction:",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please provide an installation instruction for your project!';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What is the main usage of your project?",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter the main usage for your project!';
            }
            return true;
        }
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
        message: "Please provide contribution guidelines for your project:",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please provide the contribution guidelines for your project!';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any test instructions for your project:",
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter any test instructions for your project!';
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, '..', 'README-generator', 'assets', 'utils', fileName);

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`README.md has been written successfully at ${filePath}`);
      }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerReadMe) => {
        console.log("Please wait while we generate your README.md file...")

        const markdownContent = generateMarkdown(inquirerReadMe)

        writeToFile('newREADME.md', markdownContent);
    })
    .catch((error) => {
        console.error(error);
    })
}

// Function call to initialize app
init();
