// var => Variable | Scope => GLOBAL | Reassign => Yes
var userName = "Sam"
var userAge = 40
{
    var userRole1 = "Global"
}
console.log("Name: ", userName);
console.log("Age: ", userAge);
console.log("Role 1: ", userRole1);
userAge = userAge + 10
console.log("New Age: ", userAge);

// let => literal | Scope => LOCAL | Reassign => Yes

{
    let userRole2 = "Local"
}
console.log("Role 2: ", userRole2);  // Raise an exception

// const => constant | Scope => LOCAL | Reassign => No

const num = 20
num = num + 1;  // Raise an exception
