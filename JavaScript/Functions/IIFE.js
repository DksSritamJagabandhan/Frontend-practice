// Immediately Invoked Function Expression (IIFE)
// --> it use to reduce the pollution of global scope
// ( function body )(execution)

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})(); // ; required

// unnamed iife
(()=>{
    console.log(`DB NOT CONNECTED`)
})();

// parameter iife
((name)=>{
    console.log(`DB NOT CONNECTED ${name}`)
})("ROHAN");
