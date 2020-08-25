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
        name: "description,"
    },
    {
        type: "list",
        message: "Describe your installation instructions.",
        choices: ["npm i"],
        name: "installation",
    },   
    {
        type: "input",
        message: "What is the project usage?",
        name: "usage",
    },
   
    {
        type: "list",
        message: "What is your project license?",
        choices: [""],
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
         `# ${answers.projectName};
    ## Description 
    ** ${answers.description};
    ## Table of Contents
        * Installation
        * Usage
        * License
        * Contributing
        * Tests
        * Questions
    ## Installation
    ${answers.installation}`;
    
    // ## Usage;
    // ## License;
    // ## Contributing;
    //     http:www.github.com/ + answers.contributing
    // ## Tests;
    // ## Questions`
     

    fs.writeFile("README.md", readMe, err => {
      if (err) {
          return console.log(err)
        }
        else console.log("README Generator was a success!")
    })
})