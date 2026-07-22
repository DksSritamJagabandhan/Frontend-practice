//........Array........

//declaration
const arr = [3, 8, 9, 10, 22, 83, 69]
const arr2= new Array(3,3,5,6,7,21,72)
console.log(arr) //[ 3,8,9,10,22,83,69]
console.log(arr[4])

//methods
arr.push(81) //add value in last
arr.pop() //remove last value
arr.unshift(9) //add value in first but not optimize
arr.shift() //remove first value

console.log(arr.includes(10)) //false/true
console.log(arr.indexOf(69)) //6

const newArr = arr.join()
console.log(newArr) //3,8,9,10,22,83,69

console.log("A", arr) //A [3,  8,  9, 10,22, 83, 69]
const arra = arr.slice(1, 4)
console.log(arra) //[8,9,10]-->print value from index 1 to 3 (4 not include)
console.log("B", arr) //B [3,  8,  9, 10,22, 83, 69]
const arrb = arr.splice(1, 4) 
console.log("C", arr) //C [3, 83, 69]
console.log(arrb) //[8,9,10,22]-->print value from index 1 to 4 and remove the value from original array and change it
