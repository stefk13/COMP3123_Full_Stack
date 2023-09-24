var msg = require("./message")
var arit = require("./arithmatics")
var {sum} = require("./arithmatics")
var Employee = require("./Employee")

console.log(msg)
console.log(msg.college)
console.log(msg.sayHello("Stefan"))

console.log(arit)
console.log(arit.mul(10,2))
console.log(sum(10,2))

console.log(typeof Employee)
console.log(Employee)

var e1 = new Employee(1,"Stefan")
e1.print()

// console.log(module)