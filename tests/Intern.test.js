const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Functionality", () => {
        it("Should store an Interns info with a name, id, email, and role. As well when called on should be able to display Interns info.", () => {

            const name = "Nick";
            const id = "0717";
            const email = "nicholasamaier@gmail.com";
            const role = "Intern";

            const newIntern = new Intern(name, id, email);

            expect(newIntern.getName()).toEqual(name);
            expect(newIntern.getId()).toEqual(id);
            expect(newIntern.getEmail()).toEqual(email);
            expect(newIntern.getRole()).toEqual(role);
        });
    })
})