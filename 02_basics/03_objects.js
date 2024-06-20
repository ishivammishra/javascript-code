// singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivam",
    "full name": "Shivam Mishra",
    [mySym]: "mykey1",
    age: 19,
    location: "Delhi",
    email: "shivam@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]

}
/* console.log(JsUser.location);
console.log(JsUser["location"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) */

JsUser.email = "shivam@amazon.com"
// Object.freeze(JsUser)
JsUser.email = "shivam@microsoft.com"

//console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);
}
 
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());