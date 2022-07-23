const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("contructor", () => {
      
      it("should construct a name, id, and email", () => {
         
        const employee = new Employee("Liliana", 21, "example@email.com");
        
        expect(employee.name).toEqual("Liliana");
        expect(employee.id).toEqual(21);
        expect(employee.email).toEqual("example@email.com");
      });
    });
    describe("getName", () => {
      
      it("should return a name", () => {
         
        const employee = new Employee("Liliana", 21, "example@email.com");
        
        expect(employee.getName()).toEqual("Liliana");
        
      });
    });
    describe("getId", () => {
      
      it("should return an id", () => {
         
        const employee = new Employee("Liliana", 21, "example@email.com");
        
        expect(employee.getId()).toEqual(21);
      });
    });
    describe("getEmail", () => {
      
      it("should return an email", () => {
         
        const employee = new Employee("Liliana", 21, "example@email.com");
        
        expect(employee.getEmail()).toEqual("example@email.com");
      });
    });
    describe("getRole", () => {
      
      it("should return Employee", () => {
         
        const employee = new Employee("Liliana", 21, "example@email.com");
        
        expect(employee.getRole()).toEqual("Employee");
      });
    });

})    