// Maps

const map = new Map()
map.set('IN','India')
map.set('US','United state')
map.set('ENG','England')
map.set('SAF','South africa')
console.log(map)

for (const [key, value] of map) {
    console.log(key,'-->',value)
}