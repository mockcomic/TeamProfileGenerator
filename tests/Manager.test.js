const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        test('return the name', () => {
            const str = 'Bill';
            const result = new Manager(str, '123456', 'Bill@email', '7148937721').getName()
            expect(result).toBe(str);
        })
    })

    describe('getId', () => {
        test('return the id', () => {
            const str = '123456';
            const result = new Manager('Bill', str, 'Bill@email', '7148937721').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('return the email address', () => {
            const str = 'Bill@email';
            const result = new Manager('Bill', '123456', str, '7148937721').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe('getRole', () => {
        test('return the role', () => {
            const role = "Manager";
            const result = new Manager('Bill', '123456', 'Bill@email', '7148937721').getRole();
            expect(result).toEqual(role);
        });
    });

    describe('getOfficeNumber', () => {
        test('return the office number', () => {
            const str = '7148937721';
            const result = new Manager('Bill', '123456', 'Bill@email', str).getOfficeNumber();
            expect(result).toEqual(str);
        });
    });
});