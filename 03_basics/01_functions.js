function saymyname() {
  console.log("Hy");
  console.log("my");
  console.log("name");
  console.log("is");
  console.log("Shivam");
}

// saymyname()

function addTwoNumbers(number1, number2) {
  // console.log(number1 + number2);
  return number1 + number2;
}

const result = addTwoNumbers(10, 20);
// console.log(result);

function loginUserMessage(username = "ram") {
  if (username == null) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Shivam"));

//---------------------------------------------------------

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
let price = calculateCartPrice(200, 400, 500, 2000)
// console.log(price);

const user = 
{
  username: "shivam",
  price: 199
}

function handleObject(anyobject)
{
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "ram",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
  return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

