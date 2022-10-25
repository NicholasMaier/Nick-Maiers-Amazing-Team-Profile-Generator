const fs = require("fs/promises");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const generateHTML = require("./src/generateHTML.js");

let thisTeam = [];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

function createManager(answer) {
    let thisManager = new Manager(answer.nameM, answer.idM, answer.emailM, answer.officeNumM);
    thisTeam.push(thisManager);
}


const managerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "nameM",
    },
    {
        type: "input",
        message: "What is your Employee ID?",
        name: "idM",
    },
    {
        type: "input",
        message: `What is your email address?`,
        name: "emailM",

    },
    {
        type: "input",
        message: "What is your Office Number?",
        name: "officeNumM",
    },
];

const moreQuestions = [
    {
        type: "list",
        message: "Which type of member would you like to add?",
        name: "addMemberChoice",
        choices: ["An Engineer", "An Intern", "None"]
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineers name?",
        name: "nameE",
    },
    {
        type: "input",
        message: "What is the Engineers ID?",
        name: "idE",
    },
    {
        type: "input",
        message: `What is the Engineers email address?`,
        name: "emailE",
    },
    {
        type: "input",
        message: "What is the Engineers Github Username?",
        name: "gitHubE",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "What is the Interns name?",
        name: "nameI",
    },
    {
        type: "input",
        message: "What is the Interns ID?",
        name: "idI",
    },
    {
        type: "input",
        message: `What is the Interns email address?`,
        name: "emailI",
    },
    {
        type: "input",
        message: "What is the Interns School?",
        name: "schoolI",
    },
];

function addMembers() {
    inquirer
        .prompt(moreQuestions)
        .then((answers) => {
            switch (answers.addMemberChoice) {

                case "An Engineer": createEngineer();
                    break;

                case "An Intern": createIntern();
                    break;

                case "None": writeToFile("./dist/index.html", generateHTML(thisTeam));
                    break;

                default: console.log("Error with addMemberChoice");
            }
        })
}


function createEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            let thisEngineer = new Engineer(answers.nameE, answers.idE, answers.gitHubE, answers.emailE);
            thisTeam.push(thisEngineer);
            addMembers();
        })
}

function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            let thisIntern = new Intern(answers.nameI, answers.idI, answers.schoolI, answers.emailI);
            thisTeam.push(thisIntern);
            addMembers();
        })
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            createManager(answers);
            addMembers();
        })
}


init();