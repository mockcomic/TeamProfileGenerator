
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        test('return a name', () => {
            const str = 'Bill';
            const result = new Employee(str, '12345', 'bill@email').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('return employee id', () => {
            const str = '12345';
            const result = new Employee('Bill', str, 'bill@email').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('return email address', () => {
            const str = 'bill@email';
            const result = new Employee('Bill', '12345', str).getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("return role", () => {
            const role = "Employee";
            const result = new Employee('Bill', '12345', 'bill@email@').getRole();
            expect(result).toEqual(role);
        });
    });
});