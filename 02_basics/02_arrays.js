const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)  // concat returns a new array 
// console.log(allHeros);

const all_new_heros = [...marvel, ...dc]    // spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Shivam"));
// console.log(Array.from("Shivam"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));