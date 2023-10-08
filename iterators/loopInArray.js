// for of 

const arr = [1,2,3,4,5,6,7,8]

const str = "Shubham Singh"

//for of in arrays

// for (const item of arr) {
//     console.log(item)
// }
// for (const item of str) {
//     console.log(item)
// }

//Maps

let map = new Map()
map.set("India", "+91")
map.set("US", "+1")
map.set("Pakistan", "+92")
map.set("Pakistan", "+92")

// console.log(map)
//
//for of in MAP
// for(const [key,value]of map){
//     console.log(key, ":-",value)
// }
//output
// India :- +91
// US :- +1
// Pakistan :- +92

const myObj = {
    name:"shubham",
    marks:"75%",
    subject:"Science"
}
//forof in OBJECT
// for(const [key,value] of myObj){
//     console.log(key, ":-",value)
// }
//output 
//error :=> myObj is not iterable

//for in loop in objects
for (const key in myObj) {
        // console.log(key, ":-", myObj[key])
    }

//for in loop in array
for (const key in arr) {
        // console.log(key, ":-", arr[key])
    }

//forin loop in MAP is not applicable

// for (const key in map) {
//     console.log(key, ":-", map[key])
// }

// for each loop

const heroes = ['Superman','batman','Flash','Cyborg','Thor','Hulk']

// heroes.forEach(function(item){console.log(item)});//normal function
// heroes.forEach((item)=>console.log(item));//arrow function
// heroes.forEach(printMe);
function printMe(item){
    // console.log(item)
}

// heroes.forEach((item,index,arr)=>{
//     console.log(index,item,arr)
// })

const coding = [
    {
        languageName:"JavaScript",
        fileExtension:".js"
    },
    {
        languageName:"Python",
        fileExtension:".py"
    },
    {
        languageName:"HTML",
        fileExtension:".html"
    }
]

// coding.forEach((item)=>{
//     console.log(item.languageName)
// })

const value = coding.forEach((item)=>item)// for each does not return any value
console.log(value)