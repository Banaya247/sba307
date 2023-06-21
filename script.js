// Variables and If Statements
let count = 5;

if (count > 10) {
    console.log("Count is greater than 10.");
} else {
    console.log("Count is less than or equal to 10.");
}

// Loops and Collections
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Functions and Callbacks
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function sayHello(callback) {
    let name = prompt("Enter your name:");
    callback(name);
}

sayHello(greet);

// Events
document.getElementById("name").addEventListener("input", function(event) {
    let name = event.target.value;
    console.log(`Name entered: ${name}`);
});
