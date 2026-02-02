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