const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("contructor", () => {

        it("should construct a name, id, and email", () => {

            const engineer = new Engineer("Liliana", 21, "example@email.com", "myGithub");

            expect(engineer.name).toEqual("Liliana");
            expect(engineer.id).toEqual(21);
            expect(engineer.email).toEqual("example@email.com");
            expect(engineer.github).toEqual("myGithub");
        });
    });
    describe("getGithub", () => {

        it("should return an office number", () => {

            const engineer = new Engineer("Liliana", 21, "example@email.com", "myGithub");

            expect(engineer.getGithub()).toEqual("myGithub");

        });
    });

    describe("getRole", () => {

        it("should return Engineer", () => {

            const engineer = new Engineer("Liliana", 21, "example@email.com", "myGithub");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

})