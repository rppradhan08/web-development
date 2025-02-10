// 1. Arrow function Syntax
// Normal Function
function funcV1(){
    console.log("Hello via normal func")
}

funcV1()

// Arrow Function
const funcV2 = () => {
    console.log("Hello via arrow func version 1")
}

funcV2()

// More simlified arrow function. This is similar to lambda function in python
const funcV3 = () => console.log("Hello via arrow func version 2")

funcV3()

// Passing arguments to an arrow function 
// Version 1 - With paranthesis requires "return" keyword
const add_two_num_v1 = (a, b) =>{
    return a+b
}
console.log("Arrow Version 1:", add_two_num_v1(1,4))

// Version 2 - One-liner arrow functions work without "return" keyword
const add_two_num_v2 = (a, b) => a+b 
console.log("Arrow Version 2:", add_two_num_v2(2,4))

/* ############################################################################################### */

// 2. 'arguments' keyword        
// Normal Function      
function display_arguments_v1(){
    console.log("Normal Function: ", arguments)
};
display_arguments_v1(3,4,5)

// Arrow Function
const display_arguments_v2 = () => {
    console.log("Arrow Function: ", arguments)
};
// display_arguments_v2(6,7,8) // Uncaught ReferenceError: arguments is not defined

/* Note: "arguments" attribute doesn't exists for arrow function. 
To pass multiple parameters to an arrow function one needs to use "..." operator.
Ex: Use "..." operator in arrow function to pass multiple parameter at once.
 */

const multiple_array = (...nums) => {
    let result = 1
    for(let num of nums){
        result = result * num
    }
    return result
}
result = multiple_array(2,5,3)
console.log("multiple_array function response:", result)

/* ############################################################################################### */

// 3. Hoisting
// Normal Function
concat_text_v1("Raj", "Praveen")

function concat_text_v1(firstName, lastName){
    console.log(firstName," ", lastName)
}
// Arrow Function
// concat_text_v2("Dev", "Karan")  // Uncaught ReferenceError: concat_text_v2 is not defined
concat_text_v2 = (firstName, lastName) => console.log(firstName," ", lastName)
concat_text_v2("Dev", "Karan")

/* Note: In Javascript, all the normal functions are parsed first before anything else.
Thus, order of function initialization and defination doesn't matter.
However, that rule doesn't apply for arrow functions.
*/

// 4. 'this' keyword
// Object method example
const obj = {
    name: "Raj",
    normalMethod: function() {
        console.log(this); // Refers to obj
    },
    arrowMethod: () => {
        console.log(this); // Refers to outer scope (window/global)
    }
}
obj.normalMethod()
obj.arrowMethod()