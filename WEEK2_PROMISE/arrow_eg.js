function sayHello(name) {
    return `Hello, ${name}`
}

sayHello = (name) => {
    return `Hello, ${name}`
}

sayHello = (name) => `Hello, ${name}`
sayHello = name => `Hello, ${name}`
sayHello = () => "Hello, Stefan"

sayHello = (name) => {
    console.log(`Hello, ${name}`)
    return `Hello, ${name}`
}

let c = sayHello("Stefan")
console.log(c)