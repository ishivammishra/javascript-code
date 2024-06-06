const accountId = 17845
let accountEmail = "shivam@gmial.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;
// accountId = 2  not allowed 



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountCity, accountState])