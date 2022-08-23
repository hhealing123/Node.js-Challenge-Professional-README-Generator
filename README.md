# Node.js Challenge: Professional README Generator

## Description
The task is to create a command-line application that dynamically generates a professional `README.md` file from a user's input using the [Inquirer Package](https://www.npmjs.com/package/inquirer). The following [README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) is a good resource that will guide you through creating a high-quality, professional README. The application will be invoked by using the following command `node index.js`. Note that this weekly challenge will not be deployed; however, a link to a walkthrough video that demonstrates its functionality will be needed. `Screencastify` will be used to make video of a demonstration of functionalities.

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Installation & Usage
In order to install things that I needed for this week's challenge, I simply typed `npm install` in the terminal to get the dependencies in the `package.json`. After typing `npm install` and finishing installing the dependencies, `package.json` will appear in the project folder. Note that I had to run the program by typing `node index.js` in the terminal to generate the `README.md` file.

The main purpose of the project is to generate MarkDown files. The application allows to create the syntax which is filled by pre-styled prompts using the `inquirer` package of `Node.js` that helps create professional, organized, and structured `README` documentation.

## Steps Taken
* Clone the starter code from [Starter Code Link](https://github.com/coding-boot-camp/potential-enigma.git).
* Create a `.gitignore` file and include node.modules/ and .DS_Store/ so that node_modules directory is not tracked or uploaded to GitHub. Note that `.gitignore` file was created before installing any npm dependencies.
* Make an array of questions for user input on `index.js` and create functions that return license badge, license link, license section of README, and generate markdown for README.
    * Be sure to use correct names!
* Use `Screencastify` to create a video demonstration of the typical user flow through my application. This will include views of the prompts and the responses after their selection.
    * Include any other screenshots that is deemed necessary to help someone who has never been introduced to my application.
* Finally, push all necessary files to Github Repository!

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation & Usage](#installation--usage)
* [Steps](#steps-taken)
* [Installation](#installation)
* [Video Demo](#video-demonstration)
* [Final Thoughts](#final-thoughts)
* [Utilized Resources](#utilized-resources)
* [Contact](#contact)

## Video Demonstration 
[Project Demonstration Link](https://user-images.githubusercontent.com/106945679/186050811-527eb2ec-807a-4426-b6e8-1386650da122.mp4)

## Final Thoughts
Nothing was particularly hard for this week's challenge because everything was pretty straightforward. However, I was having a bit of trouble when I tried pushing all necessary files to my GitHub, because for some reason, not all files were correctly uploaded; perhaps it was because of the `gitignore` files. Since the challenge was mainly running `node index.js` in my terminal, I feel like I am now more comfortable using my terminal than before. Furthermore, I feel more confident using node; for instance, I now know better how to install and include packages that I need than before I started this week's challenge and I am more confident in creating more professional and organized README documentation.

## Utilized Resources
* [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
* [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)
* [NPM Inquirer Documentation](https://www.npmjs.com/package/inquirer)
* [List of License](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

## Contact
If you have any questions my GitHub user name is `hhealing123` and you can reach out to me at `hhealing123@gmail.com` with any questions that you may have!