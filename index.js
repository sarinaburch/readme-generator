var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt( [
    {
        type: "input",
        message: "What's your project name?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Describe your installation instructions.",
        name: "installation",
        default: "npm i"
    },   
    {
        type: "input",
        message: "What is the project usage?",
        name: "usage",
    },
   
    {
        type: "list",
        message: "What is your project license?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license",
    },
    
    {
        type: "contribution",
        message: "Who contributed to this project?",
        name:"contribution",
        }, 
    {
        type: "test",
        message: "Please lists project tests.",
        name: "test",
    },
    {
        type: "input",
        message: "Please submit additional questions.",
        name: "questions",
    },
 
]).then(answers => {
    let readMe = 
    `# ${answers.projectName}

## Description 
        ${answers.description}

## Table of Contents
* [Installation](answers.installation)
* [Usage](answers.usage)
* [License](answers.license)
* [Contributing](answers.contribution)
* [Tests](answers.test)
* [Questions](answers.questions)
* 
## Installation
        ${answers.installation}
    
## Usage;

## License
![github badge](https://img.shields.io/badge/${answers.license}.license-green)`
     
    // ## Contributors
    // ${answers.contribution}
      
    // ## Tests;
    // ## Questions`
     

    fs.writeFile(answers.projectName + "README.md", readMe, err => {
      if (err) {
          return console.log(err)
        }
        else console.log("README Generator was a success!")
    })
})