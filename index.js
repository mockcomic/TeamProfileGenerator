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

function createTeam(role, options) {
    inquirer.prompt(promptQuestions)
        .then(({id,name,email,addEmployee}) => {
            let employee;
            if(role == 'Manager') employee = new Manager(name, id, email, options)
            if(role == 'Engineer') employee = new Engineer(name, id, email, options)
            if(role == 'Intern') employee = new Intern(name, id, email, options)
            teamMembers.push(employee);
            if (addEmployee) {
                addMembers();
            } else {
                console.log(teamMembers)
                writeFile(generatePage(teamMembers));
                copyFile();
                console.log("Files created in /dist");
            };
        });
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

function addMembers() {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Members Role:',
            choices: ['Engineer','Intern'],
        },
        {
            type: 'input',
            name: 'options',
            message: 'Enter either Github username or School',
        }
    ]).then(({role,options}) => {
        createTeam(role, options);
    });
};


function init() {
    inquirer.prompt([{
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
    }]).then(({officeNumber}) => createTeam('Manager', officeNumber));
};

init();