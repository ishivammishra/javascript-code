// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//    " comparisions should be between same datatypes "
// console.log("2" > 1);    
// console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
*/

/*
On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other 
and don’t equal anything else. That’s why (2) null == 0 is false.
*/

console.log("2" === 2);  // "===" it not only checks the values but also it checks the datatypes (basicallu it strictly checks)

