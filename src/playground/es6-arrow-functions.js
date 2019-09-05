console.log('ES6 Arrow Functions')

// an es5 named function
function square1 (x) {
    return x*x
}

// an es5 anonymous function asigned to a variable
const square2 = function (x) {
    return x*x
}

// arrow functions are anonymous
// const squareArrow = (x) => {
//     return x*x
// }

// es6 arrow function expression syntax
// not use return, is implicit
const squareArrow = (x) => x*x

// es5 functions referenced by his name
console.log(square1(3))
console.log(square2(6))
console.log(squareArrow(9))

//////////////////

// const fullName = 'Juan Diaz'
// let firstName;
// if(fullName) {
//     firstName = fullName.split(' ')[0]
//     console.log(firstName)
// }
// console.log(firstName)

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('Juan Diaz'))