let numbers = [1,2,4,7,6,3,10];
console.log(`Number are as follows:${numbers}`);

let double = numbers.map((num) => num * 2);
console.log(`Doubled Numbers are as follows:${double}`);

let squared = numbers.map((num) => num ** 2);
console.log(`Squared Numbers are as follows:${squared}`);

let names = ["anu","Kushi","Pooja","priya"];
console.log(`original Names:${names}`);

let upperCaseNames = names.map(name=> name.toUpperCase());
console.log(`Names in Uppercase:${upperCaseNames}`);

//Changing names to CamalCase
let normalName = ["Virat","Rohith","Rahul","Gill"]
console.log(`Normal Names: ${normalName}`);


let camelCase = normalName.map(names => {
    return names.toLowerCase().split(' ')
                .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
});
console.log(`Names in camelCase: ${camelCase}`);

// Filter method
let someNumbers = [1,2,3,4,7,8,10];
console.log(`Numbers : ${someNumbers}`);

let evenNumbers = someNumbers.filter((num) => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`);

let oddNumbers = someNumbers.filter((num) => num % 2 !== 0);
console.log(`Odd Numbers: ${oddNumbers}`);

let filterNumbers = someNumbers.filter((num) => num > 5);
console.log(`Numbers greater than 5: ${filterNumbers}`);

let words = ["Alphabet", "Autonomous", "Bibliography", "Caterpillar", "Doodle", "Dedication"];
console.log(`Original Words: ${words}`);

let wordsWithA = words.filter(word => word.startsWith("A"));
console.log(`Words starting with A: ${wordsWithA}`);

let longWords = words.filter(word => word.length > 10);
console.log(`Words with more than 10 characters: ${longWords}`);

// Reduce Method
let randomNumbers = [1, 7, 11, 15, 23, 27, 34];
console.log(`Some Numbers: ${randomNumbers}`);

let sumOfNumbers = randomNumbers.reduce((total, number) => total + number, 0);
console.log(`Sum of given numbers: ${sumOfNumbers}`);

let largeNumber = randomNumbers.reduce((max, number) => Math.max(max, number), randomNumbers[0]);
console.log(`Largest number: ${largeNumber}`);

let smallNumber = randomNumbers.reduce((min, number) => Math.min(min, number), randomNumbers[0]);
console.log(`Smallest number: ${smallNumber}`);