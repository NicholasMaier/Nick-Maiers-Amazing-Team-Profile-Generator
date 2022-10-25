const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Functionality", () => {
        it("Should store an Engineers info with a name, id, email, gitHub, and role. As well when called on should be able to display Engineers info.", () => {

            const name = "Nick";
            const id = "0717";
            const email = "nicholasamaier@gmail.com";
            const role = "Engineer"

            const newEngineer = new Engineer(name, id, email);

            expect(newEngineer.getName()).toEqual(name);
            expect(newEngineer.getId()).toEqual(id);
            expect(newEngineer.getEmail()).toEqual(email);
            expect(newEngineer.getRole()).toEqual(role);
        });
    })
})