// this keyword
const user = {
    userNmae : "Rohan",
    price : 999,
    welcomeMessage : function(){
        console.log(`$(this.userName), welcome to website`)
        console.log(this) // { all details }
    }
}
user.welcomeMessage()
user.userNmae="Rahul"
user.welcomeMessage()

console.log(this); //{}

// function chai(){
//     let username ="Rohan"
//     console.log(this.username) // undefine 
// }
// chai()

// arrow function

const chai = () => {
    let userName = "rohan"
    console.log(userName)
}
chai()

const addNum = (num1,num2)=>{
    return num1+num2
}
console.log(addNum(2,4))
