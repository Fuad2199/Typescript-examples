//======================== OBJECTS EXAMPLES STARTS =====================================
let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };
bike.brand = 'old'

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP'};


let product1 = {title:'shirt', price: 20}
let product2 = {title:'pants', price: 25}
let products: { title: string; price?: number }[] = [product1, product2]
console.log(bike, laptop, products)
//======================== OBJECTS EXAMPLES ENDS =====================================

//======================== FUNCTION EXAMPLES STARTS =====================================
function sayHi(name: string){
    console.log(`Hello there ${name.toUpperCase()}`)
}

sayHi("Fuad");

// function calculateDiscount
function calculateDiscount(price: number) {
    const hasDiscount = true;
    if (hasDiscount) {
        return 'Discount Applied';
    }
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);

console.log(finalPrice)

// function addThere
function addThere(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
}

const result = addThere(3);
const someValue = result;

// someValue.myMethod()
console.log(someValue)
//======================== FUNCTION EXAMPLES ENDS =====================================

//======================== NAME CHECK FUNCTION STARTS =====================================
const names: string[] = ['john', 'jane', 'jim', 'jill'];

function isNameInList(name: string): boolean {
    return names.includes(name);
}

let nameToCheck = 'jane';

if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
} else {
    console.log(`${nameToCheck} is in the list`);

}
//======================== NAME CHECK FUNCTION ENDS =====================================
