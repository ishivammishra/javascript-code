//  Primitive
// 7 string : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive):

// Array, Objects, Functions

const heros = ["spiderman", "superman", "ironman"];
let myObj = {
        name: "Shivam",
        age: 19
}

const myfunciton = function()
{
    console.log("Hello World");
}

