// Destructuring assignment is used to unpack values form oan array or properties from objects into disticnt variable
console.log("-------------------- Arrays destructing----------------")
let arr = [3,5,8,9,10,11,12,13,14]
let [a , b ,c , d, ...rest] = arr
console.log(a,b,c,d,rest)

let [x , , , , ...remain] = arr
console.log(x,remain)


console.log("-------------------- objects destructing----------------")
// let obj = {a2:5,b2:9}
let { a1, b1 } = { a2: 5, b2: 9 };
console.log(a1, b1)

const obj = { a3: 1, b3: 2 };
const { a4, b4 } = obj;
console.log(obj.a3, b4)