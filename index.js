
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// turns the writeToFile function into a promise based function
const makePromise = util.promisify(fs.writeFile);


const writeToFile = (fileName, data) => {
    return makePromise(fileName, data)
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
        choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'The zlib/libpng License']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter the github username of any contributors:',
        filter: function (value) {
          // Split the input string into an array of keywords
        return value.split(' ');
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'E-mail',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username?',
    },
]);

init();