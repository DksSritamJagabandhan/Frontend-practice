// Dates

// let myDate=new Date()
// console.log(myDate) //2026-07-18T07:28:12.153Z
// console.log(myDate.toString()) //Sat Jul 18 2026 12:58:12 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) //2026-07-18T07:28:12.153Z
// console.log(myDate.toLocaleDateString()) //18/7/2026
// console.log(myDate.toLocaleTimeString()) //12:58:12 pm
// console.log(myDate.toLocaleString()) //18/7/2026, 12:58:12 pm
// console.log(myDate.toUTCString()) //Sat, 18 Jul 2026 07:28:12 GMT
// console.log(myDate.toJSON()) //2026-07-18T07:28:12.153Z
// console.log(typeof(myDate)) //object

// let myCreatedDate = new Date("09-27-2003")
// console.log(myCreatedDate.toLocaleString())
// let myTiemStamp= Date.now()
// console.log(myTiemStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // time in second


let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getTime())

console.log(`Date is ${newDate.getDate()} and time is ${newDate.getTime()}`)

newDate.toLocaleString('default',{
    weekday: "long",
})