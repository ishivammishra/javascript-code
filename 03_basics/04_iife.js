// Immediately Invoked Function Expressions (   IIFE)

(function coffee() {
    // named iife
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Shivam')
