let number = parseInt(prompt("Enter a three-digit number:"));


let hundreds = Math.floor(number / 100);       
let tens = Math.floor((number % 100) / 10);    
let units = number % 10;                       


let reversedNumber = (units * 100) + (tens * 10) + hundreds;

alert("The reversed number is: " + reversedNumber);
