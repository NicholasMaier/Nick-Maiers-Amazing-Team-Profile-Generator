const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Functionality", () => {
        it("Should store a Managers info with a name, id, email, and role. As well when it is called on it should be able to display Managers info.", () => {

            const name = "Nick";
            const id = "0717";
            const email = "nicholasamaier@gmail.com";
            const role = "Manager";

            const newManager = new Manager(name, id, email);

            expect(newManager.getName()).toEqual(name);
            expect(newManager.getId()).toEqual(id);
            expect(newManager.getEmail()).toEqual(email);
            expect(newManager.getRole()).toEqual(role);
        });
    })
})