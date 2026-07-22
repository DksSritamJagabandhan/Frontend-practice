const tinderUser= new Object()
//const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Sushil"
tinderUser.isLoggedIn= true

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // print all the keys in array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const regularUser={
    email:"sushil@gmail.com",
    fullname:{
        first_name:"sushil",
        last_name:"pradhan"
    }
}
// console.log(regularUser.fullname.last_name)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)

const user=[{ id:"1", name:"rohan"},
    { id:"2", name:"rahul"},
    { id:"3", name:"roshan"},
    { id:"4", name:"ritik"},
]
console.log(user[3].name)


