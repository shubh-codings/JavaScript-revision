const dog = {
    name:"Bull",
    price:5000
}

// const descriptor = Object.getOwnPropertyDescriptor(dog,'name')
// console.log(descriptor)

let descriptor = Object.getOwnPropertyDescriptor(dog,'name')
console.log(descriptor)
// Object.defineProperty(dog,"name",{  
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
 descriptor = Object.getOwnPropertyDescriptor(dog,'name')

// console.log(descriptor)

for (const [key,value] of Object.entries(dog)) {
    console.log(`${key}:${value}`)
}
Object.defineProperty(dog,"name",{  
    writable: false,
    enumerable: true,
    configurable: false
})
for (const [key,value] of Object.entries(dog)) {
    console.log(`${key}:${value}`)
}
// console.log(descriptor)