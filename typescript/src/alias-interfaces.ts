// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(car)

// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
    height: number;
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle)

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle)

// Template Literal Types (Advanced Type Alias)

type BaseEvents = "click" | "mouseOver" | "keyDown";
type EventName = `on${Capitalize<BaseEvents>}`;

// EventName => "onClick" | "onMouseOver" | "onKeyDown"

function handleEvent(event: EventName) {
    console.log(`Handling event: ${event}`);
}

handleEvent("onClick");
handleEvent('onMouseOver');
handleEvent('onKeyDown');