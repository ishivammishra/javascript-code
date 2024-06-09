let score = "shivam"

//console.log(typeof score);
//console.log(typeof(score));

// here we can convert the above score to number 
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN

//  true => 1; false => 0  -> when we use boolean 

let isLoggedin = "Shivam"

let booleanisLoggedin = Boolean(isLoggedin)
// console.log(booleanisLoggedin)

// 1 => true; 
// 0 => false
// "" => false
// " " => true ......it is giving true because there is space 
// "Shivam" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);
// --------------------------------Operations------------------------------------------------------------

let value = 3
let negvalue = -value

// console.log(negvalue);
// console.log(typeof negvalue);

let str1 = "Shivam"
let str2 = "Mishra"
let str3 = str1 + " " +str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  -> this will give 1 because we are incrementing a string and a string can to get incermented.
// console.log(+"");  -> this will give 0 because                         "             "

let gameCounter = 100
++gameCounter;

console.log(gameCounter);
gameCounter++;
console.log(gameCounter);

