//Arrow functions
//syntax:
//declaration_type functionName = (parameters) => {
// statements
//}
let sayHi = () => { console.log(`Hello World!`);}
sayHi();
let sayHello = (fullName) => { console.log(`Hello ${fullName}`);}
sayHello("Siddharth");
sayHello(`Harsha`);

let finsSum = (num1, num2) => { return num1 + num2};
n1 = 30, n2 = 20;
console.log(`The sum of ${n1} and ${n2} is ${finsSum(n1,n2)}`);
 
let findCube = (number) => { return number ** 3 };
number = 35;
console.log(`Cube of ${number}: ${findCube(number)}`);
console.log(`Cube: ${findCube(20)}`);

// Ternary Operator:
// (condition) ? "True statement" : "False statement"
let checkEven = (num) => {
    return (num % 2 == 0) ? true : false
};

num = 30;
console.log(`Is ${num} a even number? ${checkEven(num)}`);
console.log(`Is 35 a even number? ${checkEven(35)}`);