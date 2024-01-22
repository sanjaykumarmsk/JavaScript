const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currval) {
//     console.log(`accumulator: ${accumulator} and currval: ${currval}`);
//     return accumulator + currval;

// }, 0)


// const myTotal = myNums.reduce(  (acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "dsa course",
        price: 4999
    },
    {
        itemName: "data Science course",
        price: 6999
    },
    {
        itemName: "python course",
        price: 1999
    },

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
