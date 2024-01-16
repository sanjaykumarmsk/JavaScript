// singleton
//Object.create

//object.literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Sanjay",
    "full name": "Sanjay Kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Ambedkar Nagar",
    email: "sanjay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "sanjay@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "sanjay@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting()); // Execute the code
console.log(JsUser.greetingTwo()); //Execute the code



