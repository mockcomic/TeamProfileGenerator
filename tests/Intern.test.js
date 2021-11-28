const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        test('return the name', () => {
            const str = 'Bill';
            const result = new Intern(str, '1234', 'Bill@email', 'CSUF').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('return the id', () => {
            const str = '1234';
            const result = new Intern('Bill', str, 'Bill@email', 'CSUF').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('return the email', () => {
            const str = 'Bill@email';
            const result = new Intern('Bill', '1234', str, 'CSUF').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("return the role", () => {
            const role = "Intern";
            const result = new Intern('Bill', '1234', 'Bill@email', 'CSUF').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("return the school", () => {
            const str = 'CSUF';
            const result = new Intern('Bill', '1234', 'Bill@email', str).getSchool();
            expect(result).toEqual(str);
        });
    });
});