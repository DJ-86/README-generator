const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// function to write README file
const writeToFile = (fileName, answers) => {
    fs.writeFile('README1.md', `
    # ${answers.title}
    ## Description
    ${answers.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## License
    ${answers.license}
    ## Contributors 
    ${answers.contributors}
    ## Tests
    ${answers.tests}
    ## Questions
    ${answers.questions}

    `, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

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
promptUser()
.then((answers) => writeToFile('README1.md', (answers)))
.then(() => console.log('Successfully wrote to README'))
.catch((err) => console.error(err));