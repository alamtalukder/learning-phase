// class student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.school = "ABC High School";
//     }

// }

// const student1 = new student("Alice", 20);
// console.log(student1);

// const student2 = new student("Bob", 22);
// console.log(student2);

class Car{
    constructor(liecensePlateNumber, brand, model, price, color){
        this.liecensePlateNumber = liecensePlateNumber;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.choice = "My car is best and affordable";

    }
}
const car1 = new Car("WH993C2", "Toyota", "Camry", "$3000", "Black"); 
console.log(car1); 
const car2 = new Car("AB123CD", "Honda", "Civic", "$2500", "White");
console.log(car2);