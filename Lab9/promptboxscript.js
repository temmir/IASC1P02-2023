var myPrompt = prompt("What is your age?");
var age = parseFloat(myPrompt);

console.log("Entered age as a Number:", age);

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
console.log("Current year:", currentYear);


var birthYear = currentYear - age;
console.log ("Birth year Calculated", birthYear);

document.write("Your Birth year is: " + birthYear);
