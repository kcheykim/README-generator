// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return (
        `# ${data.title}

## Descritpion
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)    

## Installation
Open up your terminal and clone this repository with: 
$ git clone ${data.installation}

## Usage and Demo Video
Open up your ${data.usage}


## Credits
Here are the collaborators: ${data.contributors}

## License

![license](${renderLicenseBadge(data.license)})
    

## Badges

## Contributing

## Test

  `);
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license);
    return `https://img.shields.io/badge/License-${license}-yellow.svg`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenses = {
        MIT: 'https://opensource.org/licenses/MIT',
        APACHE: 'https://opensource.org/licenses/Apache-2.0',
        GPL: 'https://opensource.org/licenses/GPL-3.0',
        BSD: 'https://opensource.org/licenses/BSD-3-Clause)',
        NONE: 'https://unlicense.org'
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

module.exports = generateMarkdown;