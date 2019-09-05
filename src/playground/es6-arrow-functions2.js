console.log('ES6 Arrow Functions')

// ES5 function
// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

// console.log(add(2,5,6))

// In ES6 - argument objects no longer bound
// const add = (a, b) => {
//     // console.log(arguments) can not be used
//     return a + b
// }

// console.log(add(2,5,6))

const user = {
    name: 'Juan',
    cities: ['Santiago', 'Barcelona', 'dublin'],
    
    // ES5 function
    // printPlaces: function () {
    //     const that = this
    //     this.cities.forEach(function (city) {
    //         console.log(that.name + ' ' + city)
    //     })
    // }

    // ES6 functions no longer bind their own this value
    // use parents this value
    printPlaces () {
        // map transform the provided array
        // return a new array
        return this.cities.map((city) => this.name + ' ' + city + '!' )
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' ' + city)
        // })
    }
}
console.log(user.printPlaces())

///////////////////////////

const multiplier = {
    numbers: [2, 6],
    multiplyBy: 2,
    multiply() {
        // ES6
        return this.numbers.map((number) => this.multiplyBy*number)

        // ES5
        // const result = []
        // const _this = this
        // this.numbers.forEach(function(number) {
        //     const mult = number * _this.multiplyBy
        //     result.push(mult)
        // })
        // return result
    }
}

console.log(multiplier.multiply())