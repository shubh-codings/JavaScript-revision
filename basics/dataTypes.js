"use strict"; // treat all JS code as newer version

//alert(3+3) we are using nodejs, not browser

//code readablity should bw high.

// let name = 'shubham'
// let age = 25
// let isMale = true 


//number => 2^53, 2 to power 53
//bigint => no limit
// string => ""
// boolean => true/false
//null => standalone value
//undefined => no value assigned
//symbol => unique


//object

// console.log(typeof null)//object
// console.log(typeof undefined)//undefined

//************************************ */

//Primitive DataTypes => 7 Types
// String, Number, Boolean, Null, Undefined, Symbol, Bigint

//const num = 1
//const bool = true
// const bar = null 
//const boo = undefined
// const name = 'Shubham'
// const id = Symbol('123');
// const studentId = Symbol('123');
// console.log(id)
// console.log(studentId)
// console.log(studentId===id)

// const bigNumber = 785456565666666666645n
// console.log(bigNumber, typeof bigNumber)


//Reference Types or Non-Primitive
// Arrays, Objects, Functions

const heroes = ['Shaktimaan', 'NaagRaaj', 'Doga']

let obj = {
    name:'Shubham',
    rollNo:15533,
    department:'CSE',
    data:heroes
}

const func1= function (params) {
    console.log("this is a function")
}

// console.log(typeof id)
console.log(typeof heroes)
console.log(typeof obj)
console.log(typeof func1)
// JavaScript is A Dynamically Typed Language





