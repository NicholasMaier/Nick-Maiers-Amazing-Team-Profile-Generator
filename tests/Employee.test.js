const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Functionality", () => {
        it("Should store an Employees info with a name, id, email, and role. As well when called on should be able to display Employees info.", () => {

            const name = "Nick";
            const id = "0717";
            const email = "nicholasmaier@gmail.com";
            const role = "Employee"

            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getName()).toEqual(name);
            expect(newEmployee.getId()).toEqual(id);
            expect(newEmployee.getEmail()).toEqual(email);
            expect(newEmployee.getRole()).toEqual(role);
        });
    })
})