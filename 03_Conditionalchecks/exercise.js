// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x  = 1
if (x>10){
    console.log("x is greater then 10")
}
else{
    console.log("x is not greater then 10")
}
// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
const age = 18
if (age>=18){
    console.log("eligible to drive a car")
}
else{
    console.log("Not eligible to drive a car")
}
// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
const grade = (score) =>{
    if (score>=90 && score<=100){return "A"}
}
console.log(`Grade in subject is ${grade(92)}`)
// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
const fruitColor = 1
switch (fruitColor) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    default:
        break;
}
// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
const color = "red"
switch (color) {
    case "red":
        console.log("Apple")
        break;
    case "yellow":
        console.log("Banana")
        break;
    default:
        break;
}
// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.
const   numCheck = 90
if (numCheck >=0){console.log("number is positive")}
else{console.log("number is negative")}
if ( numCheck%2 == 0){console.log("its even")}
else{console.log("its odd")}
// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted." 
const userName = "NikhilNayal"
if (userName.length <6){console.log("username too short")}
else if(userName.length >15){console.log("username too long")}
else{console.log("Username accepted")}