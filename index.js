// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your email?",
        name: "email",

    },

    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    },

    {
        type: "input",
        message: "What is the name of the Project?",
        name: "projectName",
    },
    
    {
        type: "input",
        message: "What is the purpose of the Project?",
        name: "projectObj",
    },
    
    {
        type: "input",
        message: "Are there any tests included?",
        name: "tests",
    },

    {
        type: "input",
        message: "What is the installation process?",
        name: "installation",
    },

    {
        type: "input",
        message: "How do you use this project?",
        name: "usage",
    },

    {
        type: "list",
        message: "Please choose the license for the Project from the followings: ",
        name: "license",
        choices: ["No License", "MIT", "ISC", "Apache 2.0", "MPL 2.0", "lgpl"]
    },

    {
        type: "input",
        message: "Who are the contributors of this project?",
        name: "contributorName",
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(JSON.stringify(responses, null, " "));
        // renderLicenseBadge(data.license);
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
