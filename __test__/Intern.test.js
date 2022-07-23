const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("contructor", () => {

        it("should construct a name, id, and email", () => {

            const intern = new Intern("Liliana", 21, "example@email.com", "DU");

            expect(intern.name).toEqual("Liliana");
            expect(intern.id).toEqual(21);
            expect(intern.email).toEqual("example@email.com");
            expect(intern.school).toEqual("DU");
        });
    });
    describe("getSchool", () => {

        it("should return an office number", () => {

            const intern = new Intern("Liliana", 21, "example@email.com", "DU");

            expect(intern.getSchool()).toEqual("DU");

        });
    });

    describe("getRole", () => {

        it("should return Intern", () => {

            const intern = new Intern("Liliana", 21, "example@email.com", "DU");

            expect(intern.getRole()).toEqual("Intern");
        });
    });

})