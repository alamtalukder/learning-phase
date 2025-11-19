// const headPhones = {
//     brand : 'remax', 
//     color: 'black', 
//     price: 1000   
// }

// Object.freeze(headPhones);
// headPhones.price = 1210,
// console.log(headPhones); 

const player = {
    name: 'Lionel Messi',
    age: 36,
    club: 'Paris Saint-Germain',
}
Object.freeze(player); 

player.age = '40'
console.log(player); 