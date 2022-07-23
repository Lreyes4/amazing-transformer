const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("contructor", () => {

        it("should construct a name, id, and email", () => {

            const manager = new Manager("Liliana", 21, "example@email.com", 123);

            expect(manager.name).toEqual("Liliana");
            expect(manager.id).toEqual(21);
            expect(manager.email).toEqual("example@email.com");
            expect(manager.officeNum).toEqual(123);
        });
    });
    describe("getOfficeNum", () => {

        it("should return an office number", () => {

            const manager = new Manager("Liliana", 21, "example@email.com", 123);

            expect(manager.getOfficeNum()).toEqual(123);

        });
    });

    describe("getRole", () => {

        it("should return Manager", () => {

            const manager = new Manager("Liliana", 21, "example@email.com", 123);

            expect(manager.getRole()).toEqual("Manager");
        });
    });

})