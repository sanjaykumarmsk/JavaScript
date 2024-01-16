// Premitive data types- 7 types 

//Number, String , Boolean, null, symbol, undefined, Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
// reference(Non Premitive data types)

//array, Object, Function

const heros =["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Sanjay",
    age: 20,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory types in JS

// 1. Stack(Premitive),
// 2. Heap(Non Premitive)

let myYoutubename = "CodeinJava";

let anothername = myYoutubename
anothername = "Mr.SanjayKumarVlogs";
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "sanjay@google.com",
    upi: "user@ybl"
}

let userTow = userOne;

userTow.email = "sanjay@google.com"

console.log(userOne.email);
console.log(userTow.email);