
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

// const value = coding.forEach((item)=>item)// for each does not return any value
const arr = [1,2,3,4,5,6,7,8,9,10]
const value= arr.filter(item => item>5)

const newNumArr =[]
arr.forEach((num)=>{
    if(num>5){
        newNumArr.push(num)
    }
})
// console.log(value)
// console.log(newNumArr)


const books = [
    {
        title:"Book One", genre:"History", publish:"1975", edition: '1995'
    },
    {
        title:"Book Two", genre:"Fiction", publish:"2000", edition: '2006'
    },
    {
        title:"Book Three", genre:"Non-Fiction", publish:"1989", edition: '1999'
    },
    {
        title:"Book Four", genre:"Science", publish:"1985", edition: '1994'
    },
    {
        title:"Book Five", genre:"History", publish:"2009", edition: '2014'
    },
    {
        title:"Book Six", genre:"Romance", publish:"2004", edition: '2020'
    },
    {
        title:"Book Seven", genre:"Fiction", publish:"1994", edition: '2008'
    },
]

// const newBook = books.filter((book)=>book.genre==="Fiction")
const newBook2 = books.filter((book)=>book.publish>1990)

// console.log(newBook2)

const newArr = arr.map((num)=>num+10)
// console.log(newArr)

//chaining of map() and filter()

const newArr1 = arr.map((num)=>num*100).map((num)=>num+10).filter(num=>num<500)
// console.log(newArr1)


//Reduce() method

console.log(arr)

const newNum = arr.reduce((acc,currval)=>{
    // console.log("acc:=",acc," currval=:",currval )
    return acc + currval
}, 10)
// console.log(newNum)

const shoppingCart = [
    {
        courseName:"py",price:1599
    },
    {
        courseName:"js",price:999
    },
    {
        courseName:"java",price:2999
    },
    {
        courseName:"datascience",price:11999
    },
]

const priceToPay = shoppingCart.reduce((acc,curr)=>{return curr.price + acc},0)
console.log(priceToPay);