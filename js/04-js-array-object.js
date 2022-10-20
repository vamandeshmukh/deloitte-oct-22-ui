// node 04-js-array-object.js

// arrays in JS 

const myArray = [10, 20, 25.50, "abc", false];

// myArray.forEach();

// objects in JS 

const empData = {
    employeeId: 101,
    firstName: 'Sonu',
    salary: 90000.50,
    isMarried: false,
    address: {
        street: 'Bank street',
        city: 'Hyderabad',
        pin: 500001
    },
    phones: [98765433210, 7890123456],
    dateOfBirth: '15-Aug-1947'
};

// console.log(empData);
// console.log(empData.firstName);
console.log(empData.address.city);
