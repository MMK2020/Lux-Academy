var person = {
    firstname: "Martin",
    age: 47,
    isMale: true,
    balance: 453.435,
    dob: new Date(1973, 1, 28).toJSON(),
    address: {
        city: "Nairobi",
        postCode: "00100"
    }
};

console.log(person);
console.log(person.firstname);
console.log(person.age)
console.log(person.balance);

console.log(person.address);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));