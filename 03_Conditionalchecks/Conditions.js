// Scope
console.log("--------------------------Scope--------------------------")
let x = 90
console.log(`this x is global with value ${x}`)
{
let x = 1
console.log(`this x is local with value ${x}`)
}
if (true){
    let x = 9
    console.log(`this x is lcoal to "if" with value ${x}`)
}

const age = 90
console.log(`this age is global with value ${age}`)
{
 const age = 1
console.log(`this age is local with value ${age}`)
}
console.log("--------------------------if else--------------------------")
if (true){
    const age = 9
    console.log(`this age is lcoal to "if" with value ${age}`)
}    

const studentAge = 18
if (studentAge>18){
    console.log("You can vote")
}
else{
    console.log("Finish your milk first")
}
console.log("--------------------------Switch--------------------------")
const cups = 4
switch (cups) {
    case 41:
        console.log(`the value of cup is ${cups}`)
        break;
    case 42:
        console.log(`the value of cup is ${cups}`)
        break;
    case 43:
        console.log(`the value of cup is ${cups}`)
        break;
    case 44:
        console.log(`the value of cup is ${cups}`)
        break;
    default:
        console.log(`the value of cup is non of 41,42,43,44`)
        break;
}