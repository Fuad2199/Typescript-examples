// Array examples
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["apple", "banana"];
let mixed: (number | string)[] = [1, "two", 3];

let users: Array<string> = ["Alice", "Bob"];

console.log(numbers, strings, mixed, users);

// Empty array and later adding values
let fruits: string[] = [];
fruits.push("apple");
fruits.push("banana");


// Array with tuple
let person: [string, number] = ["Alice", 25];

console.log(person)

// Array destructuring
let colors = ["red", "green", "blue"];
let [first, second] = colors;
console.log(first)
console.log(second)

// Readonly array
const names: readonly string[] = ["Dylan"];

console.log(names)