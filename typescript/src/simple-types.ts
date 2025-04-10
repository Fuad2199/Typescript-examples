//All primitive types were used in this example!

//Explicit types
let firstName: string = "Dylan";
let age: number = 21;
let higherEducation: boolean = true;
let id: bigint = 1235544878n;
let calculatedScore:number = 350 - 200
let password: symbol = Symbol("user_password");

let finalScore = calculatedScore

console.log(firstName, age, higherEducation, id, password, finalScore)

//Implicit types
let name = "Martin";
let number = 120;

console.log(name, number);