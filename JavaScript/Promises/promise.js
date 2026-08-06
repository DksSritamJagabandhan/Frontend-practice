const promise_01 = new Promise(function(resolve, reject){
    // do and async task
    // db calls, cryptograhy related, network call
    setTimeout(function(){
        console.log('Async task id complete')
    }, 1000)
})

promise_01.then(function(){
    console.log('Promise consumed')
})

const promise_02 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task...')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolve')
})

const promise_03 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Rohan',
                email: 'rohankumar@gmail.com'})
    }, 1000)
})
promise_03.then(function(user){
    console.log(user)
})

const promise_04 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({
                username : 'rohan kumar',
                password : 'rohan@1234'
            })
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})
promise_04.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('The promise eaither resolve or rejected')
})


const promise_05 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({
                username : 'rohan kumar',
                password : 'rohan@1234'
            })
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
// promise_05.then
async function consumePromiseFive(){
    try{
        const response = await promise_05
        console.log(response)
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUser(){
//     try{
//         const response =await fetch('https://api.github.com/users/dkssritamjagabandhan')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUser()


fetch('https://api.github.com/users/dkssritamjagabandhan')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})