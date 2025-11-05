class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.salary = salary; 

    }
}

const heroPerson = new Person('Hero', 'Alom', 25000); 
console.log(heroPerson); 


function Student(name, age, salary){
    this.name = name; 
    this.age = age; 
    this.salary = salary;
}


const result = new Student('korim', 21, 21222); 
console.log(result); 