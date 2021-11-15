//include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

//an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) { return true; } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) { return true; } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Do you want to provide installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage info (written instruction, how-to-video link, screenshoot link):'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors for this project? (Please use commas to list them)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the required license(s) for this project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'NONE']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please indicate your contributing guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Command to run or test your application:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username:',
        validate: gitInput => {
            if (gitInput) { return true; } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address so you can be reached for addtional questions:'
    },
];

//an array of question that repeats for more installation instructions
const instructions = [{
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions (Clone, etc):'
    },
    {
        type: 'confirm',
        name: 'finish',
        message: 'Do you want more instructions?'
    }
]

//function to write to README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log('There was an error', err) }
        console.log("Successful.");
    });
}

//function to handle the repeat of installation instructions
function repeatQuestions(data) {
    inquirer.prompt(instructions)
        .then(instructionData => {
            data.instructions.push(instructionData.installation)
            if (instructionData.finish) { repeatQuestions(data); } else { writeToFile('README.md', generateMarkdown(data)) }
        })
}

//function to initialize the application promt user with questions for input,
// if the user provides installation instructions, it calls the repeatQuestions()
function init() {
    inquirer.prompt(questions)
        .then(data => {
            if (data.confirmInstall) {
                data.instructions = [];
                repeatQuestions(data);
            } else {
                data.instructions = ['Sorry, there are no instructions.'];
                writeToFile('README.md', generateMarkdown(data));
            }
        })
        .catch((err) => {
            console.log('There was an error', err);
        });
}

// Initialize 
init();