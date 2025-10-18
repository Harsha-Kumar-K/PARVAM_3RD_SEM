//Syntax:
//function declaration & defination
//function function_name(parameters){
//  statements
//  }
//function call
//function_name(arguments)
function sayHi(){
    console.log(`Hello World`);
}
sayHi();
function sayHello(name){
    console.log(`Hello ${name}!`);
}   
sayHello("Adam");
sayHello("Eve");

function findSum(num1 , num2){
    return num1 + num2;
}
n1=20 , n2=30;
console.log(`Sum of ${n1} and ${n2}: ${findSum(n1,n2)}`);

function findSquare(num){
    //return num * num;
    return num**2;
}
num = 25;
console.log(`Square of ${num}: ${findSquare(num)}`);

function checkEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
num = 26;   
console.log(`Is ${num} even? : ${checkEven(num)}`);