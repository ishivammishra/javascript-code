let a = 300
if(true)
    {
        let a = 10
        const b = 20
        // var c = 30
        console.log("INNER", a);
    }

console.log("OUTTER",a);
// console.log("OUTTER",c);

function one()
{
    const username = "shivam"
    function two()
    {
        const website = "github"
        console.log(username);
    }

    // console.log(website);
    two()
    
}

// one()

if(true)
    {
        const username = "shivam"
        if(username == "shivam")
            {
                const website = "instagram"
                console.log(`${username} ${website}`);
            }
            // console.log(website);

    }

// console.log(username);


// ---------------interesting------------


function addone(num) {
    return num + 1
}
// console.log(addone(5));

// addTwo(5)
const addTwo = function(num)
{
    return num + 2
}
addTwo(5)