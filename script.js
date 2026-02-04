// let, const
let myName = "Rahat";
//console.log(myName);
myName = "Sara";
console.log(myName);


const country = "Bangladesh";
const dualName = country + " " + "Short name: BD";
console.log(dualName);


const shopping = ['shirt', 'pant','Jacket']
shopping.push('panjabi')  // Alow
console.log(shopping);


const student = {
    name: 'Rahat',
    class: 'University',
    Marks: 3.44
}
student.Marks = 3.50;   // Allow
console.log(student);


// Normal (Function)
function sum(num1, num2){
    total = num1 + num2;
    console.log(num1, num2, total);
}
sum(10, 20)
sum(10) // Not Allow

// Default Parameter (Function)
function sum2(num1=0, num2=0){
    total = num1 + num2;
    console.log(num1, num2, total);
}
sum2(10,30) 
sum2(10)  // Allow also this

function multiply(num1 = 1,num2 = 1){
    total = num1 * num2;
    console.log(total);
}
multiply(5,10)
multiply(5)

/**
 * Sum, Substruct ---> 0
 * multiply ---> 1
 * string  ---> ' '
 * Array  ---> [] 
 */


// Template string, multiple line string, dynamic string (` `)
 
function numberSum(num1, num2){
    const total = num1 + num2;
    const result = `Sum of ${num1} and ${num2} is equal to ${total}`;   // Template string
    console.log(result);
}
numberSum(10, 20)

const price = 100;
const discount = `Total price is ${price}, and After 20% discount your discounted price is ${price * 0.8}`;
console.log(discount);


// Arrow function
const sum3 = (num1, num2) => num1 + num2;
const result = sum3(2, 5);
console.log(result);

const multiply2 = (num1, num2) => {
    const total = num1 * num2;
    return total;
}
console.log(multiply2(2,3));


// Spread operator, array max, copy arrays

const numbers = [10, 30, 710, 40, 60, 44, 211, 33];
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);

const min = Math.min(...numbers);
console.log(min);

// Wrong Way
const first = [1,2,3,4,5,6,7];
const second = first;
second.push(8,9)
console.log(first);

// Right Way
const first1 = [1,2,3,4,5,6,7];
const second1 = [...first];
second.push(8,9)
const third = [0, ...first, 11,12,13]
console.log(first1);
console.log(second1);
console.log(third);



const no1 = [1,2,3,4,5]
const no2 = [6,7,8,9]
const combine = [...no1, ...no2]
console.log(combine);


//  Object and Array Destructuring

const products = {name: 'iPhone', price: 100000, color: 'red'}
console.log(products);


const {dam, color} = {name: 'iPhone', dam: 100000, color: 'red'};
console.log(color, dam);


const company = {name: 'ICT', empSize: 500, address: 'Mirpur'};
const {name, address} = company;
console.log(address, name);


// Keys, values, entries, delete, seal, freeze

const employee = {
    name: 'Rahat',
    role: 'QA',
    salary: 20000,
    experience: 2
}

const key = Object.keys(employee);
console.log(key);

const value = Object.values(employee);
console.log(value);

const entries = Object.entries(employee);
console.log(entries);

delete employee.salary;
console.log(employee);

// Object.freeze(employee)       // Kono change, Add, Update, Delete kicu kora jabe na
// Object.seal(employee)        // Update kora jabe, Add or Delete kora jabe na