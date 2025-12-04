function leapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }


}

const isLeapYear1 = leapYear(2020); 
const isLeapYear2 = leapYear(2025); 
console.log(isLeapYear1);
console.log(isLeapYear2);