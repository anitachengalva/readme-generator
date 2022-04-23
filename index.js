const inquirer = require("inquirer");
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
const fs = require("fs");

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

const generateMarkdown = require("utils\generateMarkdown")
const questions = []

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
      name: "languages",
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
      type: "list",
      message: "What is your preferred form of communication?",
      name: "commType",
      choices: ["Email", "SMS", "Voice Call"],
    },
  ])
  .then(function (data) {
    console.log(data);

    const story = `Hi my name is ${data.username}. I like ${data.languages.join(
      ","
    )}. I like to be contacted by ${data.commType}`;

    fs.writeFile(
      `${data.username.split(" ").join("")}-user-preferences.json`,
      story,
      function (err) {
        err ? console.error(err) : console.log("Success!");
      }
    );
  });
