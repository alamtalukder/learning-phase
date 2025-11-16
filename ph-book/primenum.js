// let num = 0; 
// for (let i = 0; i <= 100; i++) {
//     if( i % 2 === 1){
//         console.log(i);
//     }else {
//         continue;
//     }
// }

// let num = 20; 
// for ( let i = 20 ; i<= 50 ; i++){
//     if( i % 7 === 0){
//         console.log(i); 
//     }else{
//         continue; 
//     }
// }
// let num = 40; 
// for ( let i = 20 ; i<= 80 ; i++){
//     if( i % 5 === 0 && i % 7 === 0){
//         console.log(i); 
//     }else{
//         continue; 
//     }
// }

let num = 1;
let sum = 0;  
for ( let i = 1; i<= 40; i++){
    if(i % 13 === 0 ){
        sum = sum + i; 
        
    }else{
        continue; 
    }
}
console.log(sum);