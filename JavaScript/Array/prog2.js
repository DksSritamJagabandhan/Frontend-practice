const name=["rohan","rahul","roshan"]
const name2=["bitu","ritik","arbind"]
// array concat
const brothers=name.concat(name2)
console.log(name)
console.log(brothers)
const allBrothers=[...name,...name2]
console.log(allBrothers)

//flat
const nums=[2,3,4,[5,6,7,[8,9,[10]]]]
const flat_nums=nums.flat(Infinity)
console.log(flat_nums)

//string to array
console.log(Array.isArray("Rohan"))
console.log(Array.from("Rohan"))
console.log(Array.from({name:"Rohan"})) // empty

let mark1=98
let mark2=70
let mark3=87
console.log(Array.of(mark1,mark2,mark3))
