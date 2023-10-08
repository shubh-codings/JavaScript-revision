const user = {
    username:"Shubham",
    price:999,
    welcomeGreeting:function(){
        console.log(`${this.username}, welcome to this website.`)
        console.log(this)
    }
}
// user.welcomeGreeting()
// console.log(user)
// user.username="Puja"
// user.welcomeGreeting()
// console.log(user)

// console.log(this)

// function one(){
//     let username = "shubh"
//     console.log(this.username)
// }

// const one = function (){ 
//     let username = "shubh"
//     console.log(this)
// }
//Output
//<ref *1> Object [global] {
//     global: [Circular *1],
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     structuredClone: [Function: structuredClone],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     atob: [Function: atob],
//     btoa: [Function: btoa],
//     performance: Performance {
//       nodeTiming: PerformanceNodeTiming {
//         name: 'node',
//         entryType: 'node',
//         startTime: 0,
//         duration: 68.34619998931885,
//         nodeStart: 4.412600040435791,
//         v8Start: 12.637899994850159,
//         bootstrapComplete: 50.46090006828308,
//         environment: 27.89520001411438,
//         loopStart: -1,
//         loopExit: -1,
//         idleTime: 0
//       },
//       timeOrigin: 1696749319211.859
//     },
//     fetch: [AsyncFunction: fetch]
//   }

//Arrow Function ()=>{}

const one = ()=>{
    let username = "shubh"
    console.log(this)
}
//{} //output

// one()

// const addTwoNum= (num1,num2)=>{
//     return num1+num2
// }
// const addTwoNum= (num1,num2)=> num1+num2
const addTwoNum= (num1,num2)=> (num1+num2)

// const returnObj = (obj)=>(obj)
const returnObj = (obj)=>({username:'shubh'})

// console.log(addTwoNum(45,85))
console.log(returnObj())