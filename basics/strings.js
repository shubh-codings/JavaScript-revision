let name = " Shubham-singh "
let followers = 500
const url = "https://hitesh.com/hitesh%20chaudhary"

// console.log(name + followers + " any string")//not prefered
console.log(`Hello my name is ${name}and I have ${followers} followers.`);

console.log(name.toUpperCase())
console.log(name.length)
console.log(name.charAt(2))
console.log(name.indexOf('b'))
console.log(name.substring(0,7))
console.log(name.slice(0,13))
console.log(name.slice(-11,5))
console.log(name.trim())
console.log(url)
console.log(url.includes('hitesh'))
console.log(url.replace("%20", '-'))
console.log(url.split('/'))
