const name = "sanjay";
const repoCount  = 50;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('SanjayS');
// `` => This sign is backtickes It is used to the String Interpolation
// ${} => Variable injects

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('S'));
// console.log(gameName.charAt(2));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   sanjay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanjay.com/sanjay%20kumar";

console.log(url.replace('%20', '-'));

console.log(url.includes('sanjay'));

console.log(gameName.split('-'));

