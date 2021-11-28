
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        test('return an Engineer name', () => {
            const str = 'Bill';
            const result = new Engineer(str, '12345', 'Bill@email', 'Bill@github').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('return an Engineer id', () => {
            const str = '12345';
            const result = new Engineer('Bill', str, 'Bill@email', 'Bill@github').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('return email address', () => {
            const str = 'Bill@email';
            const result = new Engineer('Bill', '12345', str, 'Bill@github').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("return role", () => {
            const role = "Engineer";
            const result = new Engineer('Bill', '12345', 'Bill@email', 'Bill@github').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("return github", () => {
            const str = 'Bill@github';
            const result = new Engineer('Bill', '12345', 'Bill@email', str).getGithub();
            expect(result).toEqual(str);
        });
    });
});