// forEach()
const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
    console.log(num * 2);
});

//map()
const result = numbers.map( num => num*10);
console.log(result)

// filter()
const greaterThan2 = numbers.filter(num => num > 2);
console.log(greaterThan2); 


// slice()
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); 


// find()
const users = [
    { id: 1, name: "Raj" },
    { id: 2, name: "Praveen" },
    { id: 3, name: "Sam" }
];

const user = users.find(u => u.name === "Praveen");
console.log(user); 

// Alternatively
function find(arr, name){
    for(let user of arr){
        if (user.name === name){
            return user
        }
    }
}
console.log(find(users,"Raj"))
