// const student = {
//     name: "Sakib Al Hasan",
//     age: 34,
//     salary: 40000
// }; 

// // const objectKeys = Object.keys(student);
// // console.log(objectKeys); 
// console.log(Object.keys(student)); 

// const fruits = {
//     name: "Mango",
//     color: "Yellow",
//     price: 200
// }
// console.log(Object.values(fruits)); 

// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Developer"
// }

// const  keys = Object.keys(person);
// const hasAge = keys.includes("age"); 
// console.log(hasAge); 

// const profile = {
//     name: "Robert",
//     age: 45,
//     country: "USA",
//     email: "L4hMl@example.com"
// }
// if("email" in profile){
//     console.log("Email is present"); 
// }else{
//     console.log("Email is not present");
// }

// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020
// }
// if(car.hasOwnProperty("model")){
//     console.log("Model is present");
// }else {
//     console.log("Model is not present");
// }

// const person ={
//     name: "Alice",
//     age: 28,
//     city: "Dhaka", 
    
// }
// if(person.city === "New York"){
//     console.log("Jam er sohor Dhaka");    
// }else{
//     console.log("shanti nai");
// }

const laptop = {
    brand: "Dell",
    model: "XPS 13",
    year: 2022
}

const entries = Object.entries(laptop); 
console.log(entries);