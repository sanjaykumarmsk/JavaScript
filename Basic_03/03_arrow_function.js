const user = {
    username: "sanjay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}
// this -> making a current context(value)

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sanjay"
//     console.log(this);
// }

// chai();

// const chai = () => {
//     let username = "sanjay";
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Sanjay"})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
