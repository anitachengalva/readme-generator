const inquirer = require("inquirer");
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
const fs = require("fs");

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

const generateREADME = (data) =>
        `## PROJECT TITLE
        ${data.fileName}
        
        ## DESCRIPTION 
        ${data.fileDescr}

        ${data.userStory}

        This program has been developed using ${data.lang}.

        ## SCREENSHOTS
        ${data.projImg}

        ## HOW TO USE
        ${data.fileInstruc}

        ## LICENCE
        This project is licensed under the terms of the ${data.projLicense} license.`

// const generateMarkdown = require("utils/generateMarkdown")
// const questions = []

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
        type: "input",
        name: "fileImage",
        message: "Please provide screenshots of your project: ",
    },
    {
        type: 'file-tree-selection',
        name: 'projImg'
    },
    {
      type: "list",
      message: "Choose a license",
      name: "projLicense",
      choices: ["MIT", "Apache", "GNU GPL"],
    },
  ])
  .then((response) => console.log(response));


//   .then(function (data) {
//     console.log(data);
//     // utilized markdown syntax
//     const story = 
//         `## PROJECT TITLE
//         ${data.fileName}
        
//         ## DESCRIPTION 
//         ${data.fileDescr}

//         ${data.userStory}

//         This program has been developed using ${data.lang}.

//         ## SCREENSHOTS
//         ${data.projImg}

//         ## HOW TO USE
//         ${data.fileInstruc}

//         ## LICENCE
//         This project is licensed under the terms of the ${data.projLicense} license.`
//     });
    
// // creates a file in the generatedREADMEs folder, content is created with user input from the above questions in the user story
//     fs.writeFile("generatedREADMEs/README.md", story, (err) => {
//         if (err)
//             console.log (err);
//         else {
//             console.log("File Sucessfully Written");
//             console.log("The written has the following contents: ");
//             console.log(fs.readFileSync(generatedREADMEs/README.md));
//         }
//     });