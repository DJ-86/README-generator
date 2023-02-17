// function to generate markdown for README
function generateMarkdown(answers) {
  console.log('getting here')
  return `
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

`;

}

module.exports = generateMarkdown;
