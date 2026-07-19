// Array in function
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) //[200,400,500]

function calculateCartPrice(val1,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) //[400,500]

// object in function
const user ={
    userName:"Rohan",
    password:"1234"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and password is ${anyObject.password}`)
}
handleObject(user)

// Array as argument
const newArray = [200,300,400,500]
function returnSecondValue(arr){
    return arr[3]
}
console.log(returnSecondValue(newArray))