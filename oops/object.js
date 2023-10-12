// function multiplyBy5 (num){
//     return num*5
// }
// multiplyBy5.power = 2
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function CreateUser (userName,password,id,balance){
    this.userName = userName;
    this.password= password;
    this.balance=balance;
    this.id= id;
}

CreateUser.prototype.incBalance = function (){
    this.balance+=100
}

let newUser1 = new CreateUser("shubham",145278,15533,5000)
let newUser2 = new CreateUser("shashi",14578,15733,10000)

// newUser1.incBalance()
// console.log(newUser1)
// console.log(newUser2)


const newHeroes = ["Thor","SpiderMan"]
const heroPower = {
    thor:"Thunder",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`"You got ${this.spiderman}"`)
    }
}

// console.log(heroPower)
// console.log(newHeroes)
// Object.prototype.sayShubham=function(){console.log("My name is shubham")}
// Array.prototype.sayShubham=function(){console.log("My name is shubham")}

// heroPower.sayShubham()


//Prototypal Inheritance
// __proto__   (Old Syntax)

// for eg
let User ={name:"Shubham"}
let Teacher={isTeacher:true}
let TeacherSupport={isTeacherSupport:true,
    __proto__:Teacher    
}
// Teacher.__proto__=User;//inheritance using __proto__


//Modern Syntax
// Object.setPrototypeOf(Teacher,User)

String.prototype.trueLength = function (){
    console.log(`True length of String is ${this.trim().length}`)
}

console.log("shubham Singh    ".length)
"shubham Singh      ".trueLength()

