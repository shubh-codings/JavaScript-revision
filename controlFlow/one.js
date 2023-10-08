//if
// let temperature = 28
// if(temperature>25){
//     console.log("Above room temperature")
// }
// else{
//     console.log('below room temperature')
// }

//comparisor operators
//<, >, <=, >=, ==, !=, ===, !==

// const balance = 400;
// if(balance>500) console.log("balance is above 500");
// if(balance<500){
//     console.log('less then 500')
// }
// else if(balance<750){
//     console.log('less then 750')
// }
// else if(balance<1000){
//     console.log('less then 1000')
// }
// else{
//     console.log('more then 1000')

// }

const isLoggedIn = true
const debitCard = true
const loggedInWithEmail= false
const loggedInWithPhone = true

// if(isLoggedIn&&debitCard){//and condition check both to be true
//     console.log('allowed to shop')
// }
// if(loggedInWithEmail||loggedInWithPhone){// or only checks for 1 to be true
//     console.log('logged in')
// }

//Switch statement
let month = 2
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("Please Enter a valid month.")
        break;
}


//Truthy and falsy value
// False , 0, -0, BigInt, "", null , undefined, NaN 
//True, "0", "false", " ", [],{}, function(){}

const emptyArr = [];
const emptyObj = {};

// if(emptyArr.length===0){
//     console.log("Its Empty")
// }
// if(Object.keys(emptyObj).length===0){
//     console.log("Its Empty")
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5??10 //output:5
// val1 = null ?? 10 //output:10
val1 = undefined??15 // output:15
console.log(val1)

// Ternaiary Operator

//condition ? true : false
const iceTeaPrice = 75
iceTeaPrice<80? console.log('less then 80'): console.log('less then 80');