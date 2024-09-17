// number(integers)
var userAge = 24
console.log(typeof(userAge))

// number(decimal/Float)
var userSalary = 3000.5
console.log(typeof(userSalary))

// strings
var userName = "Raj"
console.log(typeof(userName))

// boolean
var userMarried = false
console.log(typeof(userMarried))

// object
var userAddress = {
    "Flat No." : 233,
    "Socity Name" : "Laxami Nagar",
    "Street Name" : "Gandhi Road",
    "City" : "Pune",
    "PIN" : 411015
}

console.log(typeof(userAddress))

// Differnt ways to access the value stored in a object
console.log(userAddress.PIN)
console.log(userAddress["PIN"])
console.log(userAddress["Street Name"])

// Performing arithmetic operations on numeric variables
var a = 10
var b = 2
console.log("Sum: ", a+b)
console.log("Multiply: ", a*b)
console.log("Divide: ", a/b)
console.log("Remainder: ", a%b)
console.log("Dividing num by 0: ", a/0) // Infinity
console.log("Dividing num by string: ", a/'a') // NaN: Not a Number

// Performing string concatenation
var firstName = "Raj"
var lastName = "Pradhan"
console.log(firstName + " " + lastName)

// Boolean variables with arithematic operators
console.log("true + 1 =>", true+1)      // true is considered as 1
console.log("false + 1 =>", false+1)    // false is considered as 0 