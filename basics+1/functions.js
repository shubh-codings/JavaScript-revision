//function

function sayMyName(){
    console.log("Shubham Singh")
}

// sayMyName()

function addTwoNumbers (number1,number2){
//    let result= number1+number2;
    return number1+number2
}
let result = addTwoNumbers(56,12.56)
// console.log(result)

function loginUserMsg(username="A user"){
    if(username===undefined){
        console.log('Please Enter a user Name')
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMsg())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(500,600,897,354))

function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`)
}

// handleObj({
//     username:"shubham",
//     price:1548
// })

let obj1 = {
    username:'hitesh',
    price:879
}
// handleObj(obj1)

let arr1 = [45,78,89,587]

function returnSecondValue(arr){
    return arr[1]
}
// console.log(returnSecondValue(arr1))

// scope : global and block

var a = 10
var b = 56
const p = 45
const q = 85
let x = 41
let y = 20

// console.log(a,b,p,q,x,y,"global")

if(true){
    var a = 50
    var b = 7
    const p = 78
    const q = 46
    let x = 4
    let y = 205
    // console.log(a,b,p,q,x,y, "block")
}
// console.log(a,b,p,q,x,y,"global")


function one(){
    const username = "hitesh"
    function two(){
        const website = "google"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one("shubham")

if(true){
    const username = "shubham"
    if(username==="shubham"){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
}
// console.log(username)


// console.log(addOne(5))
// function addOne(num){
//     return num+1
// }
// // console.log(addTwo(5))
// // can not call a function before initialisation in this case
// console.log(addOne(5))
// const addTwo =function (num){
//     return num+2
// }
// console.log(addTwo(5))


// Arrow Functions

