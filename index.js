class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {

    };
    getId() {

    };
    getEmail() {

    };
    getRole() {
        return `${this}`;
    };
};

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {

    };
    getId() {

    };
    getEmail() {

    };
    getRole() {
        return `${this}`;
    };
};

class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };
    getName() {

    };
    getId() {

    };
    getEmail() {

    };
    getGithub() {

    };
    getRole() {
        return `${this}`;
    };
};

class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = github;
    };
    getName() {

    };
    getId() {

    };
    getEmail() {

    };
    getSchool() {

    };
    getRole() {
        return `${this}`;
    };
};

const promptUser = () => {
    inquirer.prompt(
            [{
                type: 'input',
                name: 'title',
                message: 'Project title:',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter a project title!');
                        return false;
                    };
                }
            }])
        .then(data => generateMarkdown(data))
        .then(stringData => writeToFile(stringData))
        .catch((error) => {
            console.log(error);
        });
};