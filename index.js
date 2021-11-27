const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {
  writeFile,
  copyFile
} = require('./utils/generate-site');
const {
  Employee,
  Manager,
  Engineer
} = require('./lib/classes');



const promptUser = () => {
  return inquirer.prompt(
    [{
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeID',
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
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number (Required)',
        validate: EmployeeIDInput => {
          if (EmployeeIDInput) {
            return true;
          } else {
            console.log('Please enter an office number!');
            return false;
          }
        }
      }
    ])
};

const promptProject = userData => {
  console.log(`
=================
Add a New User
=================
`);

  // If there's no 'projects' array property, create one
  if (!userData.projects) {
    userData.projects = [];
  }
  return inquirer
    .prompt([{
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      userData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(userData);
      } else {
        return userData;
      }
    });
};

promptUser()
  .then(answer => {
    console.log(answer.managerName)
    const manager = new Manager(answer.mangerName, answer.employeeID, answer.email, answer.officeNumber)
    console.log(manager)

    promptProject(answer)
  })
  .then(userData => {
    return generatePage(userData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });