let radius = 5;
let area = Math.PI * radius;
let circumference = 2*Math.PI*radius;

// izmanto toFixed metodi ar diviem cipariem aiz komata

console.log("Laukums: " + area);
console.log("Apkārtmērs: " + circumference);
//------------------------------

let age = 20;

if (age<20) {
    console.log("balso");
} else {
    console.log("Tu neesi tiesīgs balsot.");
}

//-------------------------------------


let numbers = [5, 10, 15, 20, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += i;
}

let average = sum / numbers.length;

console.log("Summa: " + sum);
console.log("Videja Vertiba" + average);

//---------------------------------
 
function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findMax(7, 6)); // Izvade: 7
console.log(findMax(10, 5)); // Izvade: 10

//-----------------------------------------------------------

let inputString = "sveiki";

function reverseString(str) {
    // izmantot reverse metodi
    return ...
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + );
        