// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return (`# ${data.title}

## Descritpion
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage and Demo Video](#usage)
* [Credits](#credits)
* [License - Badges - Link](#license)    

## Installation
Open up your terminal and clone this repository with: 
$ git clone ${data.installation}

## Usage and Demo Video
Open up your ${data.usage}

## Credits
Here are the collaborators: ${data.contributors}

## License - Badges - Link

[![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

## Contributing
${data.contributing}

## Test
Here is the instruction to run or test your application:
${data.test}`);

}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    license = license.split('-');
    return `https://img.shields.io/badge/License-${license[0]}-yellow.svg`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'NONE') { return 'https://unlicense.org'; }
    return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     return ![license](renderLicenseBadge(license)
//     }

module.exports = generateMarkdown;