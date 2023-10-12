const dog = {
    name:"Bull",
    price:5000
}

// const descriptor = Object.getOwnPropertyDescriptor(dog,'name')
// console.log(descriptor)

// let descriptor = Object.getOwnPropertyDescriptor(dog,'name')
// console.log(descriptor)
// Object.defineProperty(dog,"name",{  
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
//  descriptor = Object.getOwnPropertyDescriptor(dog,'name')

// console.log(descriptor)

// for (const [key,value] of Object.entries(dog)) {
//     console.log(`${key}:${value}`)
// }
// Object.defineProperty(dog,"name",{  
//     writable: false,
//     enumerable: true,
//     configurable: false
// })
// for (const [key,value] of Object.entries(dog)) {
//     console.log(`${key}:${value}`)
// }
// console.log(descriptor)


// Getter and Setter properties in class

// class User{
//     constructor(username,password){
//         this.username=username;
//         this.password=password;

//     }
//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const shubham = new User("Shubham","hdjfjf")

// console.log(shubham.password)

function User(username,password){
    this._username=username;
    this._password=password;

    Object.defineProperty(this,"password",{
        get:function(){
             return this._password.toUpperCase()
            },
        set:function(value){this._password=value}
    })
}

const user1 = new User("Shubham","fsgdj")
console.log(user1.password)