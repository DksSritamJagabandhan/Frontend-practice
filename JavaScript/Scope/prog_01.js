
// {
//     let a= 10
//     const b=30
//     var c=40
// }
// console.log(a) //error 
// console.log(b) //error
// console.log(c) //40

let a = 300
{
    let a = 3
    console.log("inner a = ",a)
}
console.log("outer a = ",a)

function one(){
    const userName="Rohan"
    function two(){
        const website="youtube"
        console.log(userName) //Rohan 
    }
    console.log(website) //error
    two()
}
one()


// .............interesting.............
//addone(5) // 6
function addone(num){
    return num+1
}
addone(5)

//addTwo(5) // it gives error
const addTwo = function(num){
    return num + 2
}
addTwo(5)