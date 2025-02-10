// Example 1: Function Taking Another Function
function addNums(num1, num2){
    return num1 + num2
}

function operate(a,b, operation){
    return operation(a,b)
}

result = operate(2,6,addNums)
console.log("Example 1 Response: ", result)

/*  operate is a higher-order function because it takes another function (add) as an argument.
*/

// Example 2: Function Returning Another Function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplier(2);
result = double(5)
console.log("Example 2 Response: ", result)


/*  multiplier returns a new function, making it a higher-order function.
*/

// Examples of Javascript Built-in HOF map(), reduce(), filter()
// map()
// Using normal function as input
function numSquared_v1(num){
    return num*num
}
const arr = [1,2,3,4]
result = arr.map(numSquared_v1)
console.log("map using normal function:",result)

// Using arrow function as input
const numSquared_v2 = num => num*num;
result = arr.map(numSquared_v2)
console.log("map using arrow function:",result)             // [1, 4, 9, 16]

// filter()
result = arr.filter(num => num>2)
console.log("filter using arrow function:",result)          // [3,4]

// reduce()
result = arr.reduce((num1, num2) =>  num2+num1,0)           // single line AF
result = arr.reduce((num1, num2) => {return num2+num1},0)   // Alternatively, using braces
console.log("reduce using arrow function:",result)
