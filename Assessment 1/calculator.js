const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log("Calculator Started");
console.log("Operation:", operation);
console.log("Numbers:", num1, num2);

if (operation === "add") {
    console.log("Result:", num1 + num2);
}
else if (operation === "subtract") {
    console.log("Result:", num1 - num2);
}
else if (operation === "multiply") {
    console.log("Result:", num1 * num2);
}
else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Error: Cannot divide by zero");
    } else {
        console.log("Result:", num1 / num2);
    }
}
else {
    console.log("Error: Invalid operation");
}