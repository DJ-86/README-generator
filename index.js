const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'Project Title?',
    'Project Description?',

];

// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile('README1.md', 'hey hey' );
    // maybe a switch statement?
}

// function to initialize program
function init() {

}

// function call to initialize program
init();



const promptUser = () =>
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of contents',
    },
    {
        type: 'input',
        name: 'instillation',
        message: 'Provide instillation instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
]);
promptUser()
.then((answers) => writeToFile('README1.md', (answers)))
.then(() => console.log('Successfully wrote to README'))
.catch((err) => console.error(err));