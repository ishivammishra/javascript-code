// Arrays

const myArr = [1, 2, 3, 4, 5]

const myHeros = ["Spiderman", " Ironman", "Deadpool"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[3]);


// -----------Array Methods-----------------------

// myArr.push(10)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(100)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));     // search the element in the array
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);    // [ 1, 2, 3, 4, 5 ]
// console.log( newArr);  // 1,2,3,4,5


// ------------slice, splice------------------

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //slice() does not manipulate original array.

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)    //splice() manipulate the original arrays
console.log("C ", myArr);
console.log(myn2);
