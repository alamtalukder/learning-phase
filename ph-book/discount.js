const price = 1500; 
if(price => 2000){
    const discount = (price/100)*10; 
    const pay = price - discount; 
    console.log("You got a 10% discount! Your total is: " + pay);
}else {
    console.log(price); 
}


const total = 5000

const discountPrice = (total/100)*15; 


console.log(discountPrice); 