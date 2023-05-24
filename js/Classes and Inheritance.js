console.log("ES6 Classses and Inheritance") 

// Employee class
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName 
        this.experience = givenExperience 
        this.division = givenDivision 
    }

    // Employee slogan
    slogan(){
        return `I am ${this.name} and this company is the best` 
    }
   
    // Employee joiningYear 
    joiningYear(){
        return 2023 - this.experience 
    }
   
    // Employee class's static method add function name with two parameters a and b
    static add(a, b){
        return a + b 
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        
        // super is used to call the previous constructor
        super(givenName, givenExperience, givenDivision) 
        this.language = language 
        this.github = github 
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python' 
        }
        else{
            return 'JavaScript' 
        }
    }

    static multiply(a, b){
        return a * b 
    }
}

nitin = new Employee("nitin", 56, "Division")

// call constructor named as nitin
console.log(nitin.joiningYear()) 
console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7)) 