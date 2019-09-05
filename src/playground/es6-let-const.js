// var can be redefined and reasigned
var nameVar = 'Juan'
var nameVar = 'Mike'
nameVar = 'Peter'
console.log('nameVar', nameVar)

// let can not be redefined but can be reasigned
let nameLet = 'Fran'
// let nameLet = 'Jess'
nameLet = 'Jess'
console.log('nameLet', nameLet)

// Const can not be redefined, and can not be reasigned
const nameConst = 'Jul'
// nameConst = 'Maria'
console.log('nameConst', nameConst)

// Scope
function getPetName() {
    const petName = 'Lucas'
    return petName
}

const petName = getPetName()
console.log(petName)

// Block level 

// var is function scope
// const and let are block level scope
// var fullName = 'Juan Diaz'
// if(fullName) {
//     var firstName = fullName.split(' ')[0]
//     console.log(firstName)
// }
// console.log(firstName)

// const and let are block level scope
// only accesibles inside the {}
// var fullName = 'Juan Diaz'
// if(fullName) {
//     const firstName = fullName.split(' ')[0]
//     console.log(firstName)
// }
// console.log(firstName)

// fullName will never be reasigned
// if need acces to firstName outside the {} it need to be defined outside {}
const fullName = 'Juan Diaz'
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}
console.log(firstName)

// Uses
// var -> never
// let -> if needed
// const -> always