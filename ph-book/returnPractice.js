// function nameOfFirstLetter(str){
//     const firstLetter = str[0]; 
//     return firstLetter;
// }
// const firstLetter = nameOfFirstLetter('Raju'); 
// console.log(firstLetter);

// function numberCalculation(number){
//     if(number > 10){
//         const divide = number / 10; 
//         return divide; 
//     }else{
//         const multiply = number * 10;
//         return multiply; 
//     }
// } 

// const number = numberCalculation(9); 
// console.log(number); 

// function arraySum(str){
//     const sum = str[0] + str[1]; 
//     return sum; 
// }
// const result = arraySum([6, 9, 12, 15]); 
// console.log(result);

// function numberCalculation(n){
//     if( n > 0){
//         const result = n * 2; 
//         return result
//     }else(n < 0)
//         const result = -1 * (n * 3); 
//         return result;     
// }   
// const result = numberCalculation(-4); 
// console.log(result);

// function name(firstName, secondName){
//     if(firstName.length > secondName.length){
//         return true; 
//     }else(firstName.length < secondName.length)
//         return false; 
// }
// const person = name('John', 'Doe'); 
// console.log(person);

// function add(num1, num2){
//     const multiply = num1 * num2; 
//     if(multiply > 100){
//         return multiply / 2; 
//     }else
//         return multiply; 

// }

// const result = add(27, 5); 
// console.log(result); 


// function sumOfNumber(numbers){
//     let sum = 0; 
//     for(const num of numbers){
//         sum = sum + num; 
//     }
//     return sum; 
// }
// const result = sumOfNumber([2, 5, 8, 9, 11, 15, 17]); 
// console.log(result); 


// function sumOfEvenNumber (numbers){
//     let sum = 0; 
//     for(const num of numbers){
//         if( num % 2 === 0){
//             sum = sum + num; 
//         }
//     }
//     return sum; 
// }
// const result = sumOfEvenNumber([2, 5, 8, 9, 11, 15, 17]); 
// console.log(result);



// function sumOfOddNumber (numbers){
//     let oddNum = 0; 
//     for(const num of numbers){
//         if( num % 2 === 1){
//             oddNum = oddNum + num; 
//         }
//     }
//     return oddNum; 
// }
// const result = sumOfOddNumber([2, 3, 5, 8, 11, 13]); 
// console.log(result);

function lessThanNumber (numbers){
    for(const num of numbers){
        if(num < 10){
            console.log(num);
        }else{
            console.log('Number is greater than or equal to 10:', num);
        }
    }

}
const result = lessThanNumber([20, 45, 78]); 
