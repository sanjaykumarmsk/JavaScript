// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "Hello world" 
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps ==> data types in JS 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of game) {
//     console.log(key, ':-', value);
// }


// for (const key in map) {
//    console.log(map[key]);
// }

// Note :- map is not iterable