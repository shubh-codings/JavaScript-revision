// object Literals 

const mySym = Symbol("Key1")
const jsUser = {
    name: 'Shubham',
    "full name": 'Shubham Singh',
    id:Date.now(),
    email:'abc@xyz.com',
    isLoggedIn:false,
    location:'Greater Noida',
    [mySym]: "myKey1"
}

// console.log(jsUser)
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym],typeof jsUser[mySym])
// jsUser.name = "Sonu"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.name = "Shubham"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello User")
}
jsUser.greeting2 = function(){
    console.log(`Hello JSUser ${this["full name"]}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greeting2())

// console.log(jsUser)

//Singleton


const tinderUser = new Object()
tinderUser.name = "Shubham Singh"
tinderUser.email = "shubh0@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser={
    email:"someone @something.com",
    "full name":{
        firstName:"Shubham",
        lastName:"Singh"
    }
}
// console.log(regularUser["full name"].firstName)

const obj1 = {1:"A",2:'B'}
const obj2 = {3:"X",4:'Y'}
// obj3 = {obj1,obj2}
// obj3 = Object.assign({},obj1,obj2)
obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    courseName:"Java Script",
    price:999,
    courseInstructor:"Hitesh Chaudhary"
}

const {courseName, courseInstructor:instructor} = course//de-sturcturing of objects
console.log(instructor)
