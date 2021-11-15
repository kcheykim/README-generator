// a function to generate markdown for README
function generateMarkdown(data) {
    return (`# ${data.title}

#### This page is licensed under (click badge for license page): 
[![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license) 
* [Contributing](#contributing)
* [Test](#test)  
* [Questions](#questions)

## Installation
${renderInstructions(data.instructions)}

## Usage
Here is how this application works:  
${data.usage}

## Credits
Here are the list of collaborators:  
${renderContributors(data.contributors)}

## License
Notice: This license is covered under ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Test
Here is the instruction to run or test your application:  
${data.test}

## Questions
More Questions? Contact me via:  
GitHub: http://github.com/${data.github}  
Email: ${data.email}`);
}

//function renders the badge
function renderLicenseBadge(license) {
    license = license.split('-');
    return `https://img.shields.io/badge/License-${license[0]}-yellow.svg`;
}

//function renders the license
function renderLicenseLink(license) {
    if (license == 'NONE') { return 'https://unlicense.org'; }
    return `https://opensource.org/licenses/${license}`;
}
//function to output a list of contributors
function renderContributors(people) {
    let tempArr = people.split(', ');
    let person = '';
    tempArr.forEach(element => { person += `${element}<br />`; })
    return person;
}

//function to out a list of installation instructions
function renderInstructions(instructions) {
    let newInstruction = '';
    instructions.forEach(element => { newInstruction += `${element}<br />`; })
    return newInstruction;
}

module.exports = generateMarkdown;