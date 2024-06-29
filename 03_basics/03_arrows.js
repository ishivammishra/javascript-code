const user = {
    username: "Shivam",
    price: 1000,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Mishra"
// user.welcomeMessage()
// console.log(this);

// function coffee()
// {
//     let username = "Shivam"
//     console.log(this.username);
// }

// coffee()

const coffee = () => {
    let username = "Shivam"
    console.log(this);
}

// coffee()

// -----------------curly braces use huua to return keyword likhna padega-------- 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Shivam"})

console.log(addTwo(3, 4));

