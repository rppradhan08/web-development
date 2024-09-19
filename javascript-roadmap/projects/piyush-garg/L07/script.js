// Converting normal functions to arrow function
function funcV1(){
    console.log("Hello via normal func")
}

funcV1()

const funcV2 = () => {
    console.log("Hello via arrow func version 1")
}

funcV2()

// More simlified arrow function | This is similar to lambbda function in python
const funcV3 = () => console.log("Hello via arrow func version 1")

funcV3()

// Passing arguments to an arrow function 
const add_two_num = (a, b) => a+b       // One-liner arrow functions work without return keyword

console.log(add_two_num(1,4))
