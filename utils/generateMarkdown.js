// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === "ISC") {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === "Apache 2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "MPL 2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === "lgpl") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-lgpl-brightgreen.svg)](https://opensource.org/licenses/lgpl-license)'
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") {
    return "";
  } else {
    return "[License](#License)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  } else {
    return `## License ${license}`
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}`;
// }

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.projectName}
  
  ## Description
  ${data.projectObj}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributor(s)](#Contributors)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ${renderLicenseLink(data.license)}

  ## Installation
  In order to install the project you will have to ${data.installation}.

  ## Usage
  The usage of the project is ${data.usage}.
  
  ## Tests
  Test it by ${data.tests}.

  ## Questions
  Find me on Github: [${data.username}](https://github.com/${data.username})
  Email be at ${data.email} for any questions that you may have!
  
  ## Contributors
  ${data.contributorName} is/are contributors of the project!

  ${renderLicenseSection(data.license)}
  `
};

module.exports = generateMarkdown;