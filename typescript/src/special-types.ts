//All special types were used in this example!

// any is a type that disables type checking and effectively allows all types to be used.
//Any type using all of primitive types
let noDifference: any = true; //Any type accepting every time but is not good approach.
noDifference = "string"; //string type
noDifference = 55; //number type
noDifference = 88988544n; //bigInt type
noDifference = "mySymbol"; //symbol type

// unknown is a similar, but safer alternative to any.
let w: unknown = 1;
w = "string";

console.log(w, noDifference);


// In this function I have been coding all of special types for checking Input validation.
function validateUserData(data: unknown): void {
  if (data === null) {
    console.warn("The information provided is null.");
    return;
  }

  if (data === undefined) {
    console.warn("The information provided is undefined.");
    return;
  }

  if (typeof data === "object" && data !== null) {
    const user = data as { name: any; age: any; email: any };   
    if (typeof user.name === "string" &&
        typeof user.age === "number" &&
        typeof user.email === "string" &&
        user.email.includes("@")) {
            console.log("Information accepted!");
    } else {
        throw new Error("Wrong data type."); // used as never throw new error
    }
  } else {
    throw new Error("Incompatible data type"); // used as never throw new error
  }
}

// usage examples:
validateUserData({ name: "Fuad", age: 25, email: "fuad.beybutov099@gmail.com"});
validateUserData(null);
validateUserData(undefined);
validateUserData({ name: 123, age: "twenty", email: "noemail" });


// next example

function validateProductData(data: unknown): void {
  if (data === null && undefined) {
    console.warn("The information provided is null and undefined")
  }
}
console.log(validateProductData)