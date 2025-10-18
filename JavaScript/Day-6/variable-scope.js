// Global Variables
var semester = 3;
let sem = 3;
// JavaScript is Case-Sensitive
const Sem = 3;

// Global Scope
console.log(`(Var) Currently I'm studying in Sem: ${semester}`);
console.log(`(Let) Currently I'm studying in Sem: ${sem}`);
console.log(`(Const) Currently I'm studying in Sem: ${Sem}`);
// Block Scope
{
    var fullname = "Harsha";
    console.log(`var fullname in block: ${fullname}`);
    let fullName = "Harsha Kumar";
    console.log(`let fullName in block: ${fullName}`);
    const FullName = "Harsha Kumar K";
    console.log(`const FullName in block: ${FullName}`);
}

function showVariables(){
    let fullName = "FunctionBlock Name: Harsha (let)";
    const FullName = "FunctionBlock Name: Harsha (const)";
    console.log(`(Var) Full Name: ${fullname}`);
    // Throws error as let variable - fullName is declared out of the function scope under block scope
    console.log(`(Let) Full Name: ${fullName}`)
    // Throws error as const variable - FullName is declared out of the function scope under block scope
    console.log(`(Const) Full Name: ${FullName}`);
}
showVariables();
//Function scope
function printVariables(){
    var collegename = "CEC";
    let collegeName = "CEC";
    const CollegeName = "CEC";
    //function variable can access within the function scope
    console.log(`Inside Function:`);
    console.log(`(Var) College Name: ${collegename}`);
    console.log(`(Let) College Name: ${collegeName}`);
    console.log(`(Const) College Name: ${CollegeName}`);
}
printVariables();
//out of the function, we can't access var,let and const variables
console.log(`Outside Function`);
console.log(`(Var) College Name: ${collegename}`);
console.log(`(Let) College Name: ${collegeName}`);
console.log(`(Const) College Name: ${CollegeName}`);


