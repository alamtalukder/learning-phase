// function vaatkhao (){
//     console.log("Ami onkk vaatkhai"); 
// }
// vaatkhao(); 

// function juiceKhao(){
//     console.log("ei naw lemon juice"); 
// }
// juiceKhao(); 

// function addNumber ( a, b){
//     return a + b; 
// }
// result = (2, 5); 
// console.log(result); 

// function addNumber ( a, b){
//     // console.log(arguments); 
//     return a+b; 
// }

// const result = addNumber (3, 3, 32, 3 ); 
// console.log(result); 

function addNumber ( a, b){
    let sum = 0; 
    for(const num of arguments){
        sum = sum + num; 
    }
    console.log(sum); 
}
addNumber( 3, 2, 4, 5, 6); 

