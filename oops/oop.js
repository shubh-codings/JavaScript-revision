// const user = {
//     username:"Shubh",
//     loginCount:8,
//     isLoggedIn:true,
//     getUserDetails:function(){
//         console.log("this w.r.t context of object user is ", this)
//     }

// }
// user.getUserDetails()
// console.log("this w.r.t context of global is ", this)


function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}
// new keyword creates a new instance of the object.
let userOne = new User("Shubham",5,true)
let userTwo = new User("Shyam",50,false)
console.log(userOne)
console.log(userTwo)