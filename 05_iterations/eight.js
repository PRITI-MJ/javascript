//reduce

const array1 = [1, 2, 3, 4];

//0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithValue = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 
    initialValue
    //here whatever is the initial value, it goes inside the accumulator for the first time then it will continue to add with current value
)

console.log(sumWithValue); //10



//another example
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)
console.log(myTotal); //6
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
*/


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }, 
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay); //22996