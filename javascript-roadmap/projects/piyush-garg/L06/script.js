// Passing limited parameters to a function
function add_two_num(a,b){
    return a+b
}
let sum = add_two_num(2,5)
console.log("Sum of 2 numbers: ", sum);


// Handling unlimited parameters using function's built-it arguments keyword 
function add_num(){
    sum = 0
    for(let num of arguments) // Using for... of to iterate over arguments list
        sum = sum + num
    return sum
}
let arr_sum = add_num(2,4,7,3,1)
console.log("Sum of number array (using arguments): ", arr_sum);


// Handling unlimited parameters using spread operator
function add_num_v2(...numArr){
    sum = 0
    for(let num of numArr) // Using for... of to iterate over numArr list
        sum = sum + num
    return sum
}
let arr_sum_v2 = add_num_v2(2,4,7,3,1)
console.log("Sum of number array (using spread operator): ", arr_sum_v2);