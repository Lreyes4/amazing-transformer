const Employee = require("./Employee");



class Manager extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNum) {
      super(name, id, email)
      this.officeNum = officeNum
    }
  
    getOfficeNum(){
        return this.officeNum
    }
    getRole (){
        return "Manager"
    }


  }

  module.exports = Manager