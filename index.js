// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'proj-title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions:'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Please provide useage information:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors for this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What are the required license(s) for this project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'ISC', 'BSD', 'WTFPL', 'UNKNOWN']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address so you can be reached for addtional questions:'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();