// const multiply = require('./mod')
// console.log(multiply(2, 5))

const animal = require('./mod')

const dog = new animal('Dog')
dog.bark()

console.log(__filename)
console.log(__dirname)