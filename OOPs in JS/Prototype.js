let myName = "sanjay    ";

console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sanjay = function () {
  console.log(`sanjay is present in all objects`);
};

Array.prototype.heySanjay = function () {
  console.log(`Sanjay says Hello`);
};

// heroPower.sanjay();
myHeros.sanjay();
myHeros.heySanjay();
// heroPower.heySanjay();


// inhritance

const User = {
    name: "Rahul",
    email: "rahul@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailble: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__prot__ == User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Adam    "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.truelength();
"sanjay".truelength()
"iceTea".truelength()