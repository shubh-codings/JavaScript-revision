// arrays

const myArr = [0,1,5,45,87,50];
const heroes = ['Shaktimaan', 'Iron-Man', 'Thor', 'Hulk', 'Spider-Man'];
const myArr2 = new Array(1,2,3,4,5,6,7);

// console.log(heroes)

//Array Methods
// myArr.push(6)
// myArr.push(75)
// myArr.pop()
// myArr.unshift(85)
// console.log(myArr)
// myArr.shift()
// console.log(myArr.includes(50))
// console.log(myArr.indexOf(50))

// const newArr = myArr.join()
// console.log(newArr, typeof newArr)

//slice and splice

// console.log('A: ',myArr)
// const myn1 = myArr.slice(1,3)
// console.log('MYN1: ',myn1)
// console.log('B: ',myArr)
// const myn2 = myArr.splice(1,3)
// console.log('MYN2: ',myn2)
// console.log('C: ',myArr)

const marvelHeroes = ['IronMan', "Thor", "SpiderMan"]
const dcHeroes = ["BatMan", "SuperMan", "Flash"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
//[ 'IronMan', 'Thor', 'SpiderMan', [ 'BatMan', 'SuperMan', 'Flash' ] ]


const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)
// [ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]

const newAllHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(newAllHeroes)
//[ 'IronMan', 'Thor', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]

const anotherArr = [4,8,85,[45,6,82],45,[55,96,[12,36,45],45]]
// console.log(anotherArr)
const usableArr = anotherArr.flat(Infinity)
// console.log(usableArr)

// console.log(Array.isArray("Shubham"))
// console.log(Array.from("Shubham-Singh"))
// console.log(Array.from({name:"Shubham-Singh"}))// returns an empty array

let score1 = 100
let score2 = 500
let score3 = 400
let score4 = 800

console.log(Array.of(score1,score2,score3,score4))