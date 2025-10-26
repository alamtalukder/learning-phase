class Parent {
    constructor() {
        this.fatherName = "Abul Hannan"; 
       
    }
}

class FirstChild extends Parent {
    constructor(name, age) {
        super();
        this.name = name; 
        this.age = age;
    }
    getFatherName(){
        return this.fatherName + " is the father of " + this.name;
    }
}

const secondChild = new FirstChild("Sakib", 8);
console.log(secondChild.getFatherName());