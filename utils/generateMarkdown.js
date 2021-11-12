// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return (`# ${data.title}

## Descritpion
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
Clone this repository:  
$ git clone ${data.installation}

## Usage
Here is how this application works:  
${data.usage}

## Credits
Here are the list of collaborators:  
${data.contributors}

## License/Badges/Links
Click: [![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

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

module.exports = generateMarkdown;