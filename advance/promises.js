const newPromise = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Asynk function is running")
        resolve()
    },1000)
})
newPromise.then(function (){
    console.log("Promise is Resolved")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Asynk2 Function is being run")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 promise is resolved")
})

const obj={name:"shubham",age:25}
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Promise three")
        resolve(obj)
    },1000)
})
promiseThree.then((data)=>{
    console.log(data)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve(obj)
        }else{
            reject("something went wrong")
        }
    },1000)
})
promiseFour.then((data)=>{
    console.log(data)
    return data.name
}).then((name)=>{
    console.log(name)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{console.log("The promise is either Resolved or Rejected")})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false
        if(!error){
            resolve(obj)
        }else{
            reject("something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('Something went wrong', error)
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/shubh-codings").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{console.log(error)})