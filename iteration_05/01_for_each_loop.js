const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter(  (num)  => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

// myNums.forEach (  (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books =[
    { title: 'Book One', genre: 'Hindi', publish: 1989, edition: 1989 },
    { title: 'Book Two', genre: 'Science', publish: 1980, edition: 1982 },
    { title: 'Book Three', genre: 'English', publish: 197, edition: 1988 },
    { title: 'Book Four', genre: 'History', publish: 1990, edition: 1991 },
    { title: 'Book Five', genre: 'Economics', publish: 1995, edition: 1996 },
    { title: 'Book Seven', genre: 'Computer', publish: 1990, edition: 1992 },
    { title: 'Book Eight', genre: 'Java', publish: 1991, edition: 2003 },
    { title: 'Book Nine', genre: 'History', publish: 1998, edition: 2007 },
    { title: 'Book Ten', genre: 'Computer', publish: 1987, edition: 2000 },
    { title: 'Book Eleven', genre: 'Science', publish: 1979, edition: 2008 },
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter(  (bk) => {
    return bk.publish >= 1995  && bk.genre === "History"})
console.log(userBooks);