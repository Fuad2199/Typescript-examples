//======================== OBJECTS EXAMPLES STARTS =====================================
let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
bike.brand = "old";

let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP'};

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants", price: 25 };
let products: { title: string; price?: number }[] = [product1, product2];
console.log(bike, laptop, products);
//======================== OBJECTS EXAMPLES ENDS =====================================

//======================== FUNCTION EXAMPLES STARTS =====================================
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("Fuad");

// function calculateDiscount
function calculateDiscount(price: number) {
  const hasDiscount = true;
  if (hasDiscount) {
    return "Discount Applied";
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

console.log(finalPrice);

// function addThere
// function addThere(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }

// const result = addThere(3);
// const someValue = result;

// someValue.myMethod()
// console.log(someValue);
//======================== FUNCTION EXAMPLES ENDS =====================================

//======================== NAME CHECK FUNCTION STARTS =====================================
const names: string[] = ["john", "jane", "jim", "jill"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = "jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is in the list`);
}
//======================== NAME CHECK FUNCTION ENDS =====================================

//======================== CALCULATOR FUNCTION STARTS =====================================
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
    initialScore: number, 
    penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);
console.log(priceAfterDiscount, scoreAfterPenalty, scoreWithoutPenalty);
//======================== CALCULATOR FUNCTION ENDS =====================================

//======================== CALCULATOR FUNCTION TWO STARTS =====================================
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result = sum('The total is : ', 1, 2, 3, 4, 5)
console.log(result) 
//======================== CALCULATOR FUNCTION TWO ENDS =====================================

//======================== LOG MESSAGE FUNCTION STARTS =====================================
function logMessage(message: string): void {
  console.log(message);
  // return 'hello world';  return is not asignable!
}

logMessage('Hello, Typescript');
//======================== LOG MESSAGE FUNCTION ENDS =====================================

//======================== INPUT PROCESS FUNCTION STARTS =====================================
function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2)
  }
}

processInput(10);
processInput('Hello');
//======================== INPUT PROCESS FUNCTION ENDS =====================================

//======================== SIMPLE EMPLOYEE FUNCTION STARTS =====================================
function createEmployee({id}: {id: number}): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
const first = createEmployee({ id: 1 })
const second = createEmployee({ id: 2 })
console.log(first, second);

// Alternative

function createStudent(student:{id:number, name:string}):void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com'
};

createStudent(newStudent);
createStudent({ id: 1, name: 'bob '});
//======================== SIMPLE EMPLOYEE FUNCTION ENDS =====================================

//======================== DATA PROCESS FUNCTION STARTS =====================================
function processData(
  input: string | number,
  config:{reverse:boolean} = {reverse: false }
): string | number {
if (typeof input === 'number') {
  return input * input
} else {
  return config.reverse
  ? input.toUpperCase().split('').reverse().join('')
  : input.toUpperCase();
}
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));
//======================== DATA PROCESS FUNCTION ENDS =====================================