// for
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// while
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do while 
let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);

// for in
let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for of
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}