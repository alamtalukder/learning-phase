const numbers = [ 2, 3, 4, 5, 6, 7]; 
//const output = []; 

// for(let i=0; i<numbers.length; i++){
//     const element = numbers [i]; 
//     const result = element * element; 
//     output.push(result); 

// }
// console.log(output); 
//
// const result = numbers.map(x => x * x); 
// console.log(result); 

// const bigger = numbers.filter(n => n < 5); 
// console.log(bigger); 

const isThere = numbers.find(n => n < 6); 
console.log(isThere); 