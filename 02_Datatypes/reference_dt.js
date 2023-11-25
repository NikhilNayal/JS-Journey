/*
Reference data types
Objects : are the collection  of properties
where each property is the key: value pair

*/
console.log("----------------------------Lets learn Objects-----------------")
let human = {
    firstName: "Nikhil",
    lastName:"Nayal",
    gender:"Male",
    age:40,
}
console.log(human , typeof(human))
console.log(human["firstName"],typeof(human["firstName"]))
console.log(human.firstName , typeof(human.firstName))


// array
// Array are typ[e of objects that stores a collection of value
console.log("----------------------------Lets learn Arrays-----------------")
let itemList = ["red","green",2,50,true]
console.log("Java script is dynamic type so it can store values with different data types",itemList,typeof(itemList))
let idx = 4
if (itemList[idx]){
    console.log("5th item in the list is",itemList[idx],"and has a type ",typeof(itemList[idx]))
    console.log("length of the itemList is ",itemList.length)
}


for(let item =0;item<itemList.length;item++){
    console.log("item in the list is",itemList[item],"and has a type ",typeof(itemList[item]))
}
console.log("----------------------------Lets learn functions-----------------")
// Function are type of objects that execute the code
function add(num1,num2){
    return num1 + num2
}
console.log(add(5,8),typeof(add))

const sub = function(num1,num2){
    return num1 - num2
}
console.log(sub(19,8),typeof(sub))