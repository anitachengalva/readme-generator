const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What's your name?",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What languages do you know?",
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
