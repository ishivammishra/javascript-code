//  Primitive
// 7 string : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id === anotherId);

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

//---------------------------------------------------------------------------------------------

// STACK (Primitive),  HEAP (Non-Primitive)

// STACK -> we get the copy of the data
// HEAP -> we get the original data

let myName = "Ironman"

let anothername = myName
anothername = "Tony Stark"

console.log(myName);
console.log(anothername);

let userOne = 
    {
    email : "usernamegmail.com",
    location : "Delhi"
    }

let userTwo = userOne

userTwo.email = "shivam@gmail.com"
console.log(userOne.email);