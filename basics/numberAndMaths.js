// let balance = new Number(50000)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toFixed(3))

// const otherNumber = 156.5554
// console.log(otherNumber)
// console.log(otherNumber.toPrecision(4))
// console.log(otherNumber.toPrecision(3))

// const newBalance = 10000000
// console.log(newBalance.toLocaleString())
// console.log(newBalance.toLocaleString('en-US'))

/******************************Maths******************************* */
// let a = [45,85,54,2,666]
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.69));
// console.log(Math.ceil(4.69));
// console.log(Math.floor(4.69));
// console.log(Math.min(45,85,54,2,666));
// console.log(Math.max(45,85,54,2,666));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

let min = 10
let max = 50

let randomNumber = Math.floor(Math.random()*(max-min+1)) + min;
console.log(randomNumber)