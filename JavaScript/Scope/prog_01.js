
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
