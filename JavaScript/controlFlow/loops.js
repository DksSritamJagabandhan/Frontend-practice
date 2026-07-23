// // for

// for (let i = 0; i < 10; i++) {
//     // const element = i/2;
//     if (i===3) {
//         console.log("3 is best number")
//     }
//     console.log(i)
// }

// // table

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}X${j}:`,i*j)
//     }
    
// }

// // break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log(`detected 5`)
//         break
//     }
//     console.log(`value of i is ${i}`)   
// }

// for (let i = 1; i <= 20; i++) {
//     if (i === 5 || i === 10 || i === 15) {
//         console.log(`detected ${i}`)
//         continue
//     }
//     console.log(`value of i is ${i}`)   
// }

// // while and do-while
// let i = 0
// while (i<=10) {
//     console.log(`${i}`)
//     i+=2
// }

// do {
//     console.log(`${i}`)
//     i+=2
// } while (i<=10);


// // for of 

// const arr = [1,2,3,4,5]

// for (const item of arr) {
//     console.log(item)
// }

// for (const key in arr) {
//     console.log(arr[key])
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char id ${greet}`)
// }

// for in

const obj = {
    js : "javascript",
    cpp : "c++",
    rb : "rubby",
    swift : "swift by apple"
}

for (const key in obj) {
    console.log(`${key} is shortcut for ${obj[key]}`)
}

// for each

const coding = ["js", "java","python","c++"]

coding.forEach( function (val){
    console.log(val)
})

coding.forEach((val) => {
    console.log(val)
});

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


const myCoding = [
    {
        language : "JAVA",
        extension : ".java"
    },
    {
        language : "PYTHON",
        extension : ".py"
    },
    {
        language : "JAVASCRIPT",
        extension : ".js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language)
})