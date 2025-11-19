// const book = {
//     name: "Water Park", 
//     rating: 4, 
//     price: "$230", 
//     writer: "jemes", 
//     publish: 1920,
//     publication: "Brave",  
// }
// const keys = Object.keys(book); 
// for(const key of keys){
//     console.log(key, ":", book[key]); 
// }

// const article = {
//     title: "Learning JS", 
//     category: "Programming", 
// }
// const keys =Object.keys(article); 
// const hasAuthor = keys.includes('author'); 
// console.log(hasAuthor); 

// const laptop = {
//     Brand: "HP", 
//     Processor: "core i5", 
//     Gen: 7, 
//     Ram: "24GB", 
//     SSD: "1TB nvme", 
//     Color: "silver", 
//     Price: "$230", 
// }
// for( const key in laptop){
//     const values = laptop[key]; 
//     console.log(key, ":", values); 
// }

// const phones = {
//     Brand: "Xiami",
//     Model: "Note pro 7", 
//     price: 85000 
// }
// const keys = Object.keys(phones);
// for( const key of keys) {
//     console.log(key, ":", phones[key]); 
// }

// const bike = {
//     Brand: "Hero", 
//     Price: 1200000,
//     Model: "splendor", 
// }
// const values = Object.values(bike); 
// console.log(values); 

// const book = {
//     Book1: "Harry Potter",
//     Book2: "The Hobbit", 
//     Book3: "Game of Thrones" 
// }
// for(const key in book){
//     const values = book[key]; 
//     console.log(values); 
// }

const numbers = {
    a: 10, 
    b: 20, 
    c: 39,
    d: 44, 
}
const key = Object.values(numbers)
const keyOfArray = key; 
let sum = 0; 

for(let i=0 ; i<keyOfArray.length; i++){
   sum +=keyOfArray[i]; 
}
console.log(sum); 
