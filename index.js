const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const teamMembers = [];
const {
    writeFile,
    copyFile
} = require('./utils/generate-site');

function createTeam(data) {
    console.log(data)
    let employee;
    if (data.role == 'Manager') employee = new Manager(data.name, data.id, data.email, data.officeNumber)
    if (data.role == 'Engineer') employee = new Engineer(data.name, data.id, data.email, data.github)
    if (data.role == 'Intern') employee = new Intern(data.name, data.id, data.email, data.school)
    teamMembers.push(employee);
    console.log(teamMembers)
    if (data.addEmployee) {
        inquirer.prompt(addMembers).then(({
            role
        }) => {
            if (role == 'Engineer') {
                inquirer.prompt(EngineerQuestion.concat(promptQuestions)).then(answer => createTeam(answer));
            };
            if (role == 'Intern') {
                inquirer.prompt(InternQuestion.concat(promptQuestions)).then(answer => createTeam(answer));
            };
        })
    } else {
        writeFile(generatePage(teamMembers));
        copyFile();
        console.log("Files created in /dist");
    };
};

const promptQuestions = [{
        type: 'input',
        name: 'name',
        message: "Enter employee's name ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID (Required)',
        validate: EmployeeIDInput => {
            if (EmployeeIDInput) {
                return true;
            } else {
                console.log('Please enter an employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address (Required)',
        validate: EmployeeIDInput => {
            if (EmployeeIDInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add more employees?'
    },
];

const addMembers = [{
    type: 'list',
    name: 'role',
    message: 'Members Role:',
    choices: ['Engineer', 'Intern'],
}];
const InternQuestion = [{
    type: 'list',
    name: 'role',
    choices: ['Intern']
},{
    type: 'input',
    name: 'school',
    message: 'Enter School',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter a School!');
            return false;
        }
    }
}]
const EngineerQuestion = [{
    type: 'list',
    name: 'role',
    choices: ['Engineer']
},{
    type: 'input',
    name: 'github',
    message: 'Enter Github username',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter Github!');
            return false;
        }
    }
}]
const ManagerQuestion = [{
    type: 'list',
    name: 'role',
    choices: ['Manager']
}, {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Manager's office number?",
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter an office number!');
            return false;
        }
    }
}]

function init() {
    inquirer.prompt(ManagerQuestion.concat(promptQuestions)).then(answer => createTeam(answer));
};

init();