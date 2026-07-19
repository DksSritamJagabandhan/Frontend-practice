const name="Rohan"
const mark=50

console.log(`hello my name is ${name} and my mark is ${mark}`)

const gameName= new String ("Rohan")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(1,3)
console.log(newString)

const anotherString = gameName.slice(-1,3)
console.log(anotherString)

const trimString ="    Rohan  "
console.log(trimString)
console.log(trimString.trim)

const url ="https://rohan.com/rohan%20dakua"
console.log(url.replace('%20','kumar'))

console.log(url.includes('kumar'))
console.log(gameName.split(' '))

//read many extra functions 