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
        type: "input",
        message: "Describe your installation instructions.",
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
        message: "Who all contributed to this project?",
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
 
]). then(answers => {
    let read = "";
    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err);
        }
    })
})