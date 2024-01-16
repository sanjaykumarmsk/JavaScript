const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ['superman', "flash", "batman"];

// marvel_heros.push(dc_heros);

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// marvel_heros.concat(dc_heros);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [2, 4, 5, 6, 7], 9, [8, 4, 6, 2], [9, 3, 4, 1], 1 , 9, 4];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Sanjay"));
console.log(Array.from("Sanjay"));
console.log(Array.from({name:"Sanjay"})); //Interesting case This is not converted in array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
