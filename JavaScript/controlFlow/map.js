// Maps

const map = new Map()
map.set('IN','India')
map.set('US','United state')
map.set('ENG','England')
map.set('SAF','South africa')
// console.log(map)

for (const [key, value] of map) {
    // console.log(key,'-->',value)
}

// map function

const nums = [1,2,3,4,5]
// const newNums = nums.map((n)=> n+10)
// console.log(newNums)

const newNums = nums.map((num) => num * 10 ).map((num) => num + 1).filter((num) => num > 30)
console.log(newNums)
