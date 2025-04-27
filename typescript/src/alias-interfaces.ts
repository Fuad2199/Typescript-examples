// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);

// Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
console.log(rectangle);

// Alias Manager and Employees

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "Sales" };
const steve: Employee = { id: 2, name: "steve", department: "HR" };

const bob: Manager = { id: 3, name: "bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
console.log(coloredRectangle);

// Template Literal Types (Advanced Type Alias)

type BaseEvents = "click" | "mouseOver" | "keyDown";
type EventName = `on${Capitalize<BaseEvents>}`;

function handleEvent(event: EventName) {
  console.log(`Handling event: ${event}`);
}

handleEvent("onClick");
handleEvent("onMouseOver");
handleEvent("onKeyDown");
