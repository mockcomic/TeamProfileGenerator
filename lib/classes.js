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
    constructor(name = '', id = '', email = '', officeNumber = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this;
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
module.exports = {
    Employee,
    Manager,
    Engineer
};