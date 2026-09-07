const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application started");

console.log("Is 10 even?", isEven(10));
console.log("Is 15 even?", isEven(15));

logger("Application finished");