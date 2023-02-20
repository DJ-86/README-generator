// function to generate markdown for README
function generateMarkdown(answers) {
    const contributorLinks = answers.contributors.map(contributor => `\n[${contributor}](https://www.github.com/${contributor})  `);
    answers.combined = contributorLinks.join(' ');

    console.log(answers.contributors);
    switch(answers.license) {
        case 'Apache 2.0 License':
            answers.badge = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'BSD 3-Clause License':
            answers.badge = '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case 'BSD 2-Clause License':
            answers.badge = '[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            break;
        case 'Attribution 4.0 International':
            answers.badge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
            break;
        case 'Attribution-ShareAlike 4.0 International':
            answers.badge = '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'
            break;
        case 'Attribution-NonCommercial 4.0 International':
            answers.badge = '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)'
            break;
        case 'Attribution-NoDerivates 4.0 International':
            answers.badge = '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)'
            break;
        case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
            answers.badge = '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'
            break;
        case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
            answers.badge = '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'
            break;
        case 'Eclipse Public License 1.0':
            answers.badge = '[![License: Eclipse](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            break;
        case 'GNU GPL v3':
            answers.badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'GNU GPL v2':
            answers.badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en)'
            break;
        case 'GNU AGPL v3':
            answers.badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            break;
        case 'GNU LGPL v3':
            answers.badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
            break;
        case 'GNU FDL v1.3':
            answers.badge = '[![License: FDL v1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'
            break;
        case 'IBM Public License Version 1.0':
            answers.badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            break;
        case 'The MIT License':
            answers.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Mozilla Public License 2.0':
            answers.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'Attribution License (BY)':
            answers.badge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
            break;
        case 'Open Database License (ODbL)':
            answers.badge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
            break;
        case 'Public Domain Dedication and License (PDDL)':
            answers.badge = '[![License: PDDL](https://img.shields.io/badge/License-PDDL-blue.svg)](https://opendatacommons.org/licenses/pddl/)'
            break;
        case 'The Perl License':
            answers.badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            break;
        case 'The Artistic License 2.0':
            answers.badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
            break;
        case 'The zlib/libpng License':
            answers.badge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
            break;
        }
      
  return `
  ${answers.badge};
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
  ${answers.combined}
  ## Tests
  ${answers.tests}
  ## Questions
  ${answers.questions}

`;
}

module.exports = generateMarkdown;
