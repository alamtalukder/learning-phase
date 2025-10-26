const  age = [25, 30, 35, 40, 45];
const ages2 = [...age, 50, 55, 60];
const ages3 = [20, ...age, 65, 70];

const allAges =[ ...age, ...ages2, ...ages3];  
console.log(allAges); 

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250];

const maximum = Math.max(business, minister, sochib);
//const maximum = Math.max(...takaPoisa);
console.log(maximum);