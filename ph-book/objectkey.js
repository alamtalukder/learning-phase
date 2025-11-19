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

// const laptop = {
//     brand: "Dell",
//     model: "XPS 13",
//     year: 2022
// }

// const entries = Object.entries(laptop); 
// console.log(entries);

// const profile = {
//     name: "Emma Watson",
//     age: 33,
//     profession: "Actress", 
//     height: "5.5ft", 
//     country: "UK", 
//     weight: "55kg"
// }

// for(const key in profile){
//     const values = profilekey];
//     console.log(key, ":", values); 
// }


// const student = {
//     name: "Sakib Al Hasan",
//     age: 34,
//     salary: 40000   
// };
// const keys = Object.keys(student); 
// for( const key of keys){
//     const value = student[key];
//     console.log(key, ":", value);
// }

const doctor = {
    name: "Elan Musk", 
    age: 23, 
    experience: 12, 
    jobAddress: "Dhaka", 
}

const keys = Object.keys(doctor);

for (const key of keys) {
    
    console.log(key, ":", doctor[key]); 
}
