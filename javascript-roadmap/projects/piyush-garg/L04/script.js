// Logical operators
// AND  :   &&
// OR   :   ||
// NOT  :   !=
var age = 20;
console.log(typeof(age));

if ((age >= 18) && (typeof(age) === "number")) {
    console.log("Allowed!!");
} 
else if ((age < 18) && (typeof(age) === "number")) {
    console.log("Not Allowed!!");
} 
else {
    console.log("Invalid Input!!");
}

// switch statement

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
