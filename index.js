const inquirer = require("inquirer");
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
const fs = require("fs");

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

// utilized markdown syntax
const generateREADME = (data) =>
        `#${data.fileName}
        
        ## DESCRIPTION 
        ${data.fileDescr}

        ${data.userStory}

        This program has been developed using ${data.lang}.

        ## SCREENSHOTS
        ![screenshot](${data.projImg})

        ## HOW TO USE
        ${data.fileInstruc}

        ## LICENCE
        This project is licensed under the terms of the ${data.projLicense} license.`


// these user input questions will be used to build the README
// questions are answered in terminal with the use of inquirer
inquirer
  .prompt([
    {
      type: "input",
      name: "fileName",
      message: "What is the name of your project? ",
    },
    {
        type: "input",
        name: "fileDescr",
        message: "Please provide a short description of your project: ",
    },
    {
        type: "input",
        name: "userStory",
        message: "Please provide a User Story for your project: ",
    },
    {
      type: "checkbox",
      name: "lang",
      message: "What languages were utilized?",
      choices: [
        {
          name: "HTML",
        },
        {
          name: "Javascript",
        },
        {
          name: "CSS",
        },
      ],
    },
    {
        type: "input",
        name: "fileInstruc",
        message: "Please provide a description of how to use your project: ",
    },
    {
        type: 'file-tree-selection',
        name: 'projImg',
        message: "Please select the screenshots of your project: ",
    },
    {
      type: "list",
      name: "projLicense",
      message: "Choose a license",
      choices: ["MIT", "Apache", "GNU GPL"],
    },
  ])
  .then((answers) => {
      const READMEcontent = generateREADME(answers);

    fs.writeFile("README.md", READMEcontent, (err) =>
        err ? console.log(err) : console.log("File Sucessfully Written")
    );
  });
