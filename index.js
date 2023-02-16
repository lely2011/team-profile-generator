// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require ('fs');
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(_diname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateForm = require("./src/template.js");

teamAray = [];

function runApp () {
  inquirer.prompt([{
    type: "list",
    message: "What type of employee are you adding to your team?",
    name: "addEmployeePrompt",
    choices: ["Manager", "Engineer", "Intern", "No additional team members at this time."]
  }]).then(function (userInput) {
    switch(userInput.addEmployeePrompt) {
      case "manager":
        addManager();
        break;
      case "engineer":
        addEngineer();
        break;
      case "intern":
        addIntern();
        break;

        default:
          htmlBuilder();
    }
  })
}

function addManager() {
inquirer.prompt([
  {
    type: "input",
    name: "managername",
    message: "What is your manager's name?"
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the manager's employee ID number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the manager's email address?"
  },
  
  ]).then(answers => {
    const manager = new manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });
}

function addEngineer() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID number?" 
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }

  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    createTeam();
  });

}

function addIntern() {
  inquirer.prompt([
    
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?" 
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }

  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    createTeam();
  });

}

function htmlBuilder () {
  console.log("Team Created!")
  fs.writeFileSync(outputPath, generateForm(teamArray), "utf-8")
}

createTeam();

runApp();