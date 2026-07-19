function name(){
    console.log("R")
    console.log("O")
    console.log("H")
    console.log("A")
    console.log("N")
}
name()

function sum(n1,n2){
    console.log(n1+n2)
}
sum(2,8)

function sum2(n1,n2){
    let result = n1+n2
    return result
    //after return any console can not print
}
const ans = sum2(2,8)
console.log(ans)

function loginUserName(userName){ //(userName="default")
    if (userName === undefined) { //if(!uerName){...}
        console.log("Please enter a user name")
        return
    }
    return `${userName} just logged in...`
}
console.log(loginUserName())