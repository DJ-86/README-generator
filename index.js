
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// turns the writeToFile function into a promise based function
const writeTofileAsync = util.promisify(fs.writeFile);


const writeToFile = (fileName, data) => {
    return writeTofileAsync(fileName, data)
        .then(() => console.log(`Successfully wrote to ${fileName}`))
        .catch((err) => console.error(err));
};

function init() {
    promptUser()
        .then((answers) => writeToFile('README1.md', generateMarkdown(answers)))
        .catch((err) => console.error(err));
}


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
        name: 'installation',
        message: 'Provide instillation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide a license',
        choices: ['a', 'b', 'c']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'email',
    },
]);


init();

