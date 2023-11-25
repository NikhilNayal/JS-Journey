//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
let distance = 20
console.log("distanc in KM=",distance,"distance in meter=",distance*1000,"distance in centimeter=",distance*100000)

//Question-2:    WAP to input radius of a circle and log the area of circle.
let radius = 20
console.log("Area of circle with raius",radius," is ",Math.PI*20**2)

//Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.
function calc(operation,num1,num2){
    if ( operation == "ADD"){return num1+num2}
    if ( operation == "SUB"){return num1-num2}
    if ( operation == "MUL"){return num1*num2}
}
console.log(calc("ADD",90,11))
console.log(calc("SUB",90,11))
console.log(calc("MUL",90,11))
//Question-4:    WAP to calculate total marks in two subject and then calculate percentage.
function calPercentage(subj1,subj2){
    return((subj1 + subj2) /200)
}
console.log(calPercentage(90,80))

//Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
const area = function(length,breath){return length*breath}
const parameter = function(length,breath){return 2*(length+breath)}
console.log("Area is",area(20,10),"parameter is",parameter(20,10))
//Question-6:    WAP to input n numbers and log the average of those number.
const average = function(itemList){
    sumList = 0
    for(let item =0;item<itemList.length;item++){
        sumList = sumList +itemList[item]
    }
    avg = sumList/itemList.length
return avg
}

let num=[1,2,3,4,5,6,7,8,9,10]
console.log("Average is ",average(num))
//Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
let dist = 200
console.log("Meter",dist*1000,"Feet",dist*3281,"Inches",dist*39370,"CM",dist*100000)
//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
function convertToCentigrade(fah){return (fah -32)*(5/7)}
console.log("Centigrade",convertToCentigrade(30))
//Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
let prd = {
    rate:50,
    qty:100,

}
prdrate = 90
console.log(`Rate of the product is ${prd.rate}`)

//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
const simpleIntrest = (principalAmt,rateOfIntrest,numberOfyears) =>{
    return(principalAmt*(1+rateOfIntrest*numberOfyears))
}
console.log(`Simple intrest is ${simpleIntrest(1000,10,10)}`)