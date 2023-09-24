const events = require("events")

var myEmitter = new events.EventEmitter()

myEmitter.on("hi", () => {
    console.log("Hello")
})

myEmitter.emit("hi")

var greetMe = (name) => {
    console.log(`Hello, ${name}`)
}

myEmitter.addListener("hello", greetMe)
myEmitter.emit("hello", "Stefan")

myEmitter.on("sweet", (name) => {
    console.log(`Sweet, ${name}`)
})

myEmitter.emit("Sweet", "Heart")

myEmitter.once("bye", () => {
    console.log("See you next time.")
})

myEmitter.emit("bye")
