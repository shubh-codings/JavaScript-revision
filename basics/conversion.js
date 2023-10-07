let score = '333';//number passed as string type
let studentClass = '12A';//again a string is passed as a string type
console.log(score, typeof score)
console.log(studentClass, typeof studentClass)

score = Number(score)//string converted to number type
studentClass = Number(studentClass)//string converted to number type

console.log(score, typeof score)//333, number type
console.log(studentClass, typeof studentClass)// NaN, number type


let bool = true
console.log(bool, typeof bool)// true, boolean
bool = Number(bool)
console.log(bool, typeof bool)// 1, number and 0 in case of false 

// in case of null is passed and is converted to number then the output will be 0 and in case of undefined it is NaN

let isLoggedIn = 1
console.log(isLoggedIn, typeof isLoggedIn)//true , number
isLoggedIn = Boolean(isLoggedIn)//convert the type to boolean
console.log(isLoggedIn, typeof isLoggedIn)//true,boolean
isLoggedIn = ''
isLoggedIn = Boolean(isLoggedIn)//convert the type to boolean
console.log(isLoggedIn, typeof isLoggedIn)//false,boolean
isLoggedIn = 'shubham'
isLoggedIn = Boolean(isLoggedIn)//convert the type to boolean
console.log(isLoggedIn, typeof isLoggedIn)//true,boolean


//1=>true; 0=> false
//""=> false
// "Shubham"=> true


let someNumber = 33
console.log(someNumber, typeof someNumber )//33, number
someNumber = String(someNumber)//value converted to type string
console.log(someNumber, typeof someNumber )//33, string
