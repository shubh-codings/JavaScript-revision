//ES6
// Classes in Java Script 

class User{
    constructor(username,password,email){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    static add(a,b){
        return a=+b;
    }
}


//Behind the scene

// function User (username,password,email){
//         this.username=username;
//         this.password=password;
//         this.email=email;
// }
// User.prototype.encryptPassword= function(){return `${this.password}abcd`}

//Inheritence in classes
class AdminUser extends User{
    constructor(username,password,email){
        super(username,password,email)
    }
    changedJob(){
        console.log(`${this.username} has changed job`)
    }
}
const newUser = new AdminUser("Shubham",145687,"Shubhk456@hdj.com")
newUser.changedJob()
newUser.encryptPassword()
console.log(newUser);
// console.log(newUser instanceof User)
// console.log(newUser.add(4,5))// not allowed
