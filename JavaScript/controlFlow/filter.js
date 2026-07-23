const nums = [1,2,3,4,5,6,7,8,9,10]

// const value = nums.filter((num)=> num>4)
// //const value = nums.filter((num)=> { return num>4})

// console.log(value)

const newNums = []
nums.forEach((num)=>{
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums)

 const bookDetails = [
    {title : "book1", genre : "science", publish:1991, edition : 2023},
    {title : "book2", genre : "commerce", publish:1995, edition : 2024},
    {title : "book3", genre : "commerce", publish:1983, edition : 2025},
    {title : "book4", genre : "arts", publish:1950, edition : 2020},
    {title : "book5", genre : "science", publish:1973, edition : 2025},
    {title : "book6", genre : "science", publish:1969, edition : 2026}
 ]
 const userBooks = bookDetails.filter((book)=>{ return book.genre == "science" && book.edition >= 2026})
 console.log(userBooks)