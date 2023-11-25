// Destructuring assignment is used to unpack values form oan array or properties from objects into disticnt variable
console.log("-------------------- Arrays destructing----------------")
let arr = [3,5,8,9,10,11,12,13,14]
let [a , b ,c , d, ...rest] = arr
console.log(a,b,c,d,rest)

let [x , , , , ...remain] = arr
console.log(x,remain)


console.log("-------------------- objects destructing----------------")
// let obj = {a2:5,b2:9}
let { a2, b2 } = { a2: 5, b2: 9 };//  Ensure the name are same
console.log(a2, b2)
// Spread coverts the array to object
console.log("-------------------- Spread----------------")
arr1 = [9,8,7]
obj = {...arr1}
console.log(obj)