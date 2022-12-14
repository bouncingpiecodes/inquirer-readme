const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Whats your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "rawlist",
    name: "license",
    message: "Whats license would you prefer to use for your project?",
    choices: ["MIT", "Apache", "GNU", "Mozilla"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How do you contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "Whats your project questions?",
  },
];
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  try {
    fs.writeFileSync(fileName, data);
  } catch (err) {
    console.error(err);
  }
}
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile("README.md", markdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
      }
    });
}

init();
