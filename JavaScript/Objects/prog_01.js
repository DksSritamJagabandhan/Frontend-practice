// // singleton --> jabvi hum literals ke tarah declare karte he to singleton nahi banta 
// // but constructor se hamesha banega
// // object.create


// // object literals
const mySymbol=Symbol("DKS")
const jsUser = {
    name:"Rohan",
    [mySymbol]:"DKS",
    "father_name":"Sanjay",
    age:23,
    location:"bhubaneswar",
    email:"rohan@gmail.com"
}
// console.log(jsUser.email) // we normally use dot to access
// console.log(jsUser["email"]) 
// console.log(jsUser["father_name"]) //but some cases when key is declare in string then we have to use ["..."]
// console.log(jsUser[mySymbol]) //to access symbol we use [...]

// jsUser.location="Bhawanipatna"
// // Object.freeze(jsUser)
// jsUser.location="bangaluru" // value not change due to freeze
// console.log(jsUser["location"])

jsUser.greeting = function(){
    console.log("hello js user ...")
}
console.log(jsUser.greeting())

jsUser.greeting_two=function(){
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greeting_two())
