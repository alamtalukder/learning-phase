function oddAverage(arr){
    const oddNumbers = []; 
    for(const num of arr){
        if(num % 2 !== 0){
            oddNumbers.push(num);
        }
        let sum = 0; 
        for (const num of oddNumbers){
            sum += num; 
        }
        const average = sum / oddNumbers.length;
        return average;
    }
}
const array = [4, 9, 2, 7, 5, 10, 3];
const result = oddAverage(array);
console.log(result);