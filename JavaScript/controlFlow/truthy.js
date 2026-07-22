// const userEmail = "rohan@gmail.com"
// if (userEmail) {
//     console.log("Got user email")
// }else{
//     console.log("Dont have user email")
// }

// // falsy values --> false,0,-0,bigint 0n,"",null,undefined, NaN
// // truthy values --> true,"0","false"," ",[],{},function(){}

// // false == 0 --> true
// // false == "" --> true
// // 0 == "" --> true

// const emptyArr = []
// if (emptyArr.length === 0) {
//     console.log("Array is empty")
// }
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// // Nullish coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 15 // 10
// console.log(val1)

// // ternary operator --> condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("greater than 80")

const rating = 2;
rating === 1 ? console.log("benchod") : rating === 2 ? console.log("bhosdike") : rating === 3 ? console.log("Thanks"): console.log("Madarchod rating de")