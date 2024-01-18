function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("J")
    console.log("A")
    console.log("Y")
}

//sayMyName() // sayMyName is reference and sayMyName() is execute the code

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;

    return number1 + number2
}

const result = addTwoNumbers(3, 5);

//console.log("Result: ", result);

function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sanjay"))
//console.log(loginUserMessage("sanjay"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "sanjay",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 199, 699]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 199, 699]))