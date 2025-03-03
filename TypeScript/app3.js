"use strict";
function identity(arg) {
    return arg;
}
console.log(identity(42));
console.log(identity("hello"));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log(move);
function printId(id) {
    console.log(`ID: ${id}`);
}
printId("123");
printId(456);
