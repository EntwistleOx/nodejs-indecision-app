// The goal is use Classes to re use code

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGretting() {
        return `Hi ${this.name}!` // ES6 template strings
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.` 
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    
    getGretting() {
        let gretting = super.getGretting()
        if(this.homeLocation){
            gretting += ` You are in ${this.homeLocation}`
        }
        return gretting
    }
}

const me = new Person('Peter H', 28)
console.log(me)
console.log(me.getGretting())
console.log(me.getDescription())

const you = new Person()
console.log(you)
console.log(you.getGretting())
console.log(you.getDescription())

const juan = new Student('Juan D', 35, 'Developer')
console.log(juan.hasMajor())
console.log(juan.getDescription())

const fran = new Student()
console.log(fran.hasMajor())
console.log(fran.getDescription())

const fox = new Traveller('Fox M', 45, 'Montreal')
console.log(fox)
console.log(fox.getGretting())

const diana = new Traveller(undefined, undefined, 'Mars')
console.log(diana)
console.log(diana.getGretting())