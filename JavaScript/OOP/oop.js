// this keyword


const user = {
    username : "Rohan",
    id : 12,
    signedIn : true,
    getDetails : function(){
        console.log(`username: ${this.username}, id: ${this.id}`)
        console.log(this)
    }
}
console.log(user.id)
console.log(user.getDetails())


// new keyword


function User(userName, id, isLoggedIn){
    this.userName = userName,
    this.id = id,
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${userName}`)
    }
    return this
}
const userOne = new User("Rohan",12,false)
const userTwo = new User("Rahul",13,true)
console.log(userOne)
console.log(userTwo)
