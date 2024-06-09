const name = "shivam"
const profileview = 134

// console.log(name + profileview + "value");

// console.log(`Hello my name is ${name} and my profile view is ${profileview} right now`);

const gameName = new String("lord photon")

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStingOne = "    shivam       "
console.log(newStingOne);
console.log(newStingOne.trim());

const url = "https://www.youtube.com/shivam%20mishra"

console.log(url.replace('%20', '-'));  // replace %20 with '-'

console.log(url.includes('lord'))  // if lord string is there or not  -> not then false

console.log(gameName.split(' ')); 
