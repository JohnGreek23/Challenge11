const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:"
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GNU GPL v3", "ISC", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:"
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(`${fileName} has been successfully created!`);
}

// Function to initialize program
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateMarkdown(answers);
    writeToFile("output/README.md", readmeContent);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Function call to initialize program
init();
