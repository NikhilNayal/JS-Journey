// Primitive data types

// String
let firstName = "Nikhil"
let lastName = 'Nayal'
// Number
const age = 40
console.log(firstName, "is of type ",typeof(firstName))
console.log(lastName, "is of type ",typeof(lastName))
console.log(age, typeof(age))
// Boolean
let isLearner = true
if (isLearner){
    console.log("Nikhl is a learner, ",isLearner,typeof(isLearner))
}
// UNDEFINED
// if the variable is assigned but the value is not assigned then the value of the variable is undefined and the data type is also undefined
let myAddress
console.log("The value of myAddress is",myAddress, "and date type is ",typeof(myAddress))

// NULL data type

myAddress = null
console.log("The value of myAddress is",myAddress, "and date type is ",typeof(myAddress))
// check if NULL and UNEFINED are same?
console.log(undefined == null)

// BigInt and Symbol will learn later