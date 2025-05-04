// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Simple enums
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let move: Direction = Direction.Up;
// console.log(move)

// Manually gives value
// enum Direction {
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4
// }

// console.log(Direction.Left)

// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = "Right"
// }

// console.log(Direction.Down);

// enum with const
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Left;
console.log(move)

// enum with function
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    console.log(`${recipient} respond with ${message}`);
}

respond("John", Response.Yes);

