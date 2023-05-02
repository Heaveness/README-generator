// Function to return a license badge based on which license is passed in.
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  } else {
    return '';
  }
}

// Function to return the license link.
// If there is no license, return an empty string.
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// Function to return the license section of README.
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (license) {
    return `## License
  This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// Function to generate the README content from index.js's user inputted data. New content is placed within the readme file called "newREADME.md"
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribute}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions regarding the repo, please contact me at ${data.email}. Or check with me through my Github profile: ${data.github}.
`;
}

// Exports the generateMarkdown function as a module to be used by other files.
module.exports = generateMarkdown;
