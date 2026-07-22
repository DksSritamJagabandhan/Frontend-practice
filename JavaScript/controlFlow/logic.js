// // if
// if (true) {
//     //code execute
// }
// if (false) {
//     //code not executed
// }

// // Compression <,>,<=,>=,==,!=,===
// if (2 == "2") {
//     // execute
// }
// if (2 === "2") {
//     // not execute
// }

const balance = 1000
//don't do this // if (balance > 500) console.log("available"),console.log("available");

const month = "mar"
switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "mar":
        console.log("March")
        break;
    default:
        break;
}

//operator

// && --> if both condition true then it true
// || --> if one of condition true then it true

// Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15 // 10
console.log(val1)

// ternary operator --> condition ? true : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log("greater than 80")

const rating = 2;
rating === 1 ? console.log("benchod") : rating === 2 ? console.log("bhosdike") : rating === 3 ? console.log("Thanks"): console.log("Madarchod rating de")