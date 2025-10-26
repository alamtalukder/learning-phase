const students =[
    {id: 21, name: "Salman"},
    {id: 12, name: "Adnan"}, 
    {id: 32, name: "Dipjol"}, 
    {id: 15, name: "Mannaa"}
]

// const output = []; 
// for(let i=0; i<students.length; i++){
//     const element = students[i]; 
//     const findName = element.name; 
//     output.push(findName); 

// }
// console.log(output); 
// const names = students.map( s => s.name); 
// console.log(names); 
const ids = students.map( s => s.id); 
console.log(ids); 