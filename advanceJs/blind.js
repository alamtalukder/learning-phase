const normalPerson = {
    firstName: "Rohim", 
    lastName: "uddin", 
    salary: 12000, 

    getfullName: function(){
        console.log(this.firstName, this.lastName); 
    }, 
    chargeBill: function(amount, tips, tax){
        console.log(this); 
        this.salary = this.salary - amount - tips - tax; 
        return this.salary; 
    }
}

const heroPerson = {
    firstName: "Hero", 
    lastName: "alam", 
    salary: 25000, 
}

const friendlyPerson = {
    firstName: "Kader", 
    lastName: "khan", 
    salary: 30000, 
}

// const herochargeBill = normalPerson.chargeBill.bind(heroPerson);
// herochargeBill(2000);
// herochargeBill(3000);
// const friendlychargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlychargeBill(4000);
// friendlychargeBill(5000);
// console.log(normalPerson.salary);
// normalPerson.chargeBill(200); 
// console.log(normalPerson.salary); 

// const herochargeBill = normalPerson.chargeBill.call(heroPerson, 1500);
// console.log(heroPerson.salary);

// const friendlychargeBill = normalPerson.chargeBill.call(friendlyPerson, 2500, 300, 100);
// console.log(friendlyPerson.salary);

const herochargeBill = normalPerson.chargeBill.apply(heroPerson, [1200, 200, 100]); 
console.log(heroPerson.salary); 