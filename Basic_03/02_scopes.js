// let a = 10;
// const b = 20;
// var c = 30;

let c = 300;
let a = 300; 

if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner: ", a);
    // var c = 30;
}
//console.log(a)
//console.log(b)
//console.log(c)

function one() {
    const username = "sanjay";

    function two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}

// one()

if (true) {
    const username = "sanjay"
    if(username === "sanjay"){
        const website = " youtube"
        // console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

// +++++++++++++++++++ Interesting Concept ++++++++++++++

// addOne(5);
console.log(addOne(5))
function addOne(num){
    return num + 1
} 


// addTwo(5)
const addTwo = function(num){
    return num + 2;
}

