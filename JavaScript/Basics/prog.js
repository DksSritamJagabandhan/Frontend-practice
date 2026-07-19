// console.log("Rohan");
// console.log(typeof "rohan")
// console.log(typeof undefined)
// console.log(typeof null)
// // //datatype conversion
// let mark = "23"
// console.log(typeof mark)
// let numMark = Number(mark)
// console.log(typeof numMark)

// let isLoggedIn=0
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// //cpmparison

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

const id=Symbol("Rohan")
const anotherId=Symbol("Rohan")
console.log(id===anotherId) //false

console.log(null>0) //false
console.log(null == 0) //false
console.log(null >=0) //true

// //array
// const fruits=["Apple","Orange","Banana"]
// //object
// let obj={
//     name: "Rohan",
//     age: 23,
// }
// //String
let name="dks"
let anotherName=name
anotherName="Rohan"
console.log(name)
console.log(anotherName)

userOne={
    email:"user1@gmail.com",
    UpiId:"user@ybl"
}
let userTwo=userOne
userTwo.email="user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
// //function
// const myFunction=function(){
//     console.log(fruits);
// }
// myFunction()

// const id=8822
// var name="Rohan" // normally var can not use in javasvript because it occur problems in scope 
// let address="bhubaneswar"

// // id=3433 const can not change
// name="rahul"
// address="cuttack"

// console.table([id,name,address])
// // if any value is not assign then it show undefine
