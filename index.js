// Global variable to store the package requirements for later use.
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./assets/utils/generateMarkdown.js");

const path = require('path');

// Array of questions for terminal to prompt.
const questions = [
    {
		// Title question.
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        // To prevent empty user input.
        validate: function (input) {
            if (input.trim() === '') {
              return 'Please enter a title for your project!';
            }
            return true;
        },
    },
    {
		// Github username question.
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
		// Email address question.
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
		// Description question.
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
		// Installation instruction question.
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
		// Main usage question.
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
		// License choices.
        type: "list",
        name: "license",
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'None'],
    },
    {
		// Contribution guideline question.
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
		// Testing instruction question.
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

// Function to take data from init() function into README file at a specific file path.
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, '..', 'README-generator', 'assets', 'utils', fileName);

	// To catch any potential errors with the file path.
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`README.md has been written successfully at ${filePath}`);
      }
    });
}

// Function to prompt the user with questions array then pass that data to function above.
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

// Function call to initialize app.
init();
