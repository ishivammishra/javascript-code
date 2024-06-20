// const tinderUser = new Object()    -> it is a singleton object

const tinderUser = {}       //it is not a singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Arjun"
 tinderUser.isLoggedin = false

// console.log(tinderUser);   
const regularUser = 
{
    email: "some@gmail.com",
    fullname: 
    {
        userfullname: 
        {
            firstname: "Shivam",
            lastname: "Mishra"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}    //best syntax spread operator
// console.log(obj3);

const user = 
[
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
    {
        id: 1,
        email: "shiv@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = 
{
    courseName: "Artifical Intelligence",
    price: "1000",
    courseInstructor: "Paul"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

/* {
    name: "Shivam",
    coursename: "Big Data",
    "price": "free"
} */

