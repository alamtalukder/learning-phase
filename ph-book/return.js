// function tenTime(number){
//     const result = number * 10; 
//     return result; 
// }
// const output = tenTime(33)
// console.log(output); 

// function add(price1, price2){
//     const total = price1 + price2; 
//     return total ; 
// }
// const bill = add(12, 33); 
// console.log(bill); 

// const potato = 40; 
// const chips = 20; 
// const shirt = 120; 
// const pant = 100; 

// function add(price1, price2){
//     return price1 + price2; 
// }

// const bill1 = add(potato, chips);
// const bill2 = add(shirt, pant); 
// const final = add(bill1, bill2); 
// console.log(final);  


// function doMath(num1, num2){
//     const sum = num1 + num2; 
//     const diff = num1 - num2; 
//     const multiply = num1 * num2;
//     const result = multiply / 2; 

//     return result ; 
// }

// const result = doMath(15, 9); 
// console.log(result); 


// function isEven (number){
//     if(number % 2 === 0){
//         return true; 
//     }else{
//         return false; 
//     }
// }

// console.log(isEven(5)); 
// console.log(isEven(10)); 


// function oddNumber (number){
//     if(number % 2 === 1){
//         return true; 
//     }else{
//         return false; 
//     }
// }

// console.log(oddNumber(2));
// console.log(oddNumber(7));

// function evenSizeString (str){
//     const size = str.length; 
//     if(size % 2 === 0){
//         return true; 
//     }
//     return false; 
   
// }

// const result = evenSizeString('dhaka'); 
// console.log(result);

// function doubleOrTriple(num1, double){
    
//     if(double === true){
//         const result = num1 * 2;
//         return result; 
//     }else{
//         const result = num1 * 3; 
//         return result; 

//     }

// }

// const result = doubleOrTriple(23, true); 
// console.log(result);

function numberOfElement(nums){
    const len = nums.length; 
    return len;
}

const result = numberOfElement([5, 6, 7, 8, 9, 10]); 
console.log(result);