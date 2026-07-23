const array = [120,210,400]

// const total = array.reduce((i, n) => {
//     return i + n
// },0)

const total = array.reduce((i, n) => i + n,0)
console.log(total)


const cart = [
    { name:"shirt",price:999},
    { name:"pant",price:1499},
    { name:"cap",price:299},
    { name:"shoes",price:1999}
]
const totalPrice = cart.reduce((acc,item) => acc + item.price ,0)
console.log(totalPrice)
