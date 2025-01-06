// MATH	EXPRESSIONS
document.write(` <h1><strong>Hooria_Codehub Javascript 3rd Assignment</strong></h1> `);
// 1. Write a program that take two numbers & add them in a new
var num1 = 13;
var num2 = 9;
var sum = num1 + num2;
// Display the result using alert
alert(`Sum of ${num1} and ${num2} is ${sum}.`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus. E.g.
//subtract
var num3 = 13;
var num4 = 9;
var sub = num1 - num2;
// Display the result using alert
alert(`Result of subtracting ${num4} from ${num3} is ${sub}.`);
//multiply
var num5 = 13;
var num6 = 9;
var mult = num5 * num6;
// Display the result using alert
alert(`Result of multiplying ${num5} and ${num6} is ${mult}.`);
//divide
var num7 = 13;
var num8 = 9;
var divde = num7 / num8;
// Display the result using alert
alert(`Result of dividing ${num7} by ${num8} is ${divde}.`);
//reminder
var num9 = 13;
var num10 = 9;
var remain = num9 % num10;
// Display the result using alert
alert(`Remainder of dividing ${num9} by ${num10} is ${remain}.`);
// hr line
document.write(`<hr>`);

// // 3. Do the following using JS Mathematic Expressions
document.write(`<h4>Question no 3 : Variable</h4>`);

// a. Declare a variable.
let myVariable;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write(` Value after variable declaration is: ${myVariable} <br>`);
// c. Initialize the variable with some number.
myVariable = 3;
// d. Show the value of variable in your browser like “Initial
// value: 3”.
document.write(`Initial value: ${myVariable}. <br>`);
// e. Increment the variable.
myVariable++;
// f. Show the value of variable in your browser like “Value
// after increment is: 4”.
document.write(`Value after increment is: ${myVariable}. <br>`);
// g. Add 7 to the variable.
myVariable += 7;
// h. Show the value of variable in your browser like “Value
// after addition is: 11”.
document.write(`Value after addition is: ${myVariable}.<br>`);
// i. Decrement the variable.
myVariable--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 10”.
document.write(`Value after decrement is: ${myVariable} <br> `);
// k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1”
let remainder = myVariable % 3;
document.write(`The remainder is : ${remainder}.<br>  `);
//hr line
document.write(`<hr>`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie.
document.write(`<h4>Question no 4 : Movie Ticket Price</h4>`);

let ticket = 600;
let buying = 5;
let totalPrice = buying * ticket;
document.write(
  `Total cost to by 5 tickets to a movie is ${totalPrice} PKR  <br> <br>`
);

//hr line
document.write(`<hr>`);

//  5. Write a script to display multiplication table of any number in
//  your browser.
document.write(`<h4>Question no 5 : Multiplication Table of 4</h4>`);

let num = 4;
document.write(`${num}  x 1 = ${num * 1}<br>`);
document.write(`${num} x 2 =  ${num * 2}<br>`);
document.write(`${num} x 3 = ${num * 3}<br>`);
document.write(`${num} x 4 = ${num * 4}<br>`);
document.write(`${num} x 5 = ${num * 5}<br>`);
document.write(`${num} x 6 = ${num * 6}<br>`);
document.write(`${num} x 7 = ${num * 7}<br>`);
document.write(`${num} x 8 = ${num * 8}<br>`);
document.write(`${num} x 9 = ${num * 9}<br>`);
document.write(`${num} x 10 = ${num * 10}<br>  `);
//hr line
document.write(`<hr>`);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// conversion formula
// C = (F - 32) x 5 / 9
// F = (C x 9 / 5) + 32

document.write(`<h4>Question no 6 : Temperature Converter</h4>`);

let celsius = 12; // Directly assign a Celsius temperature
let fahrenheit = (celsius * 9) / 5 + 32;
document.write(`${celsius}°C is ${fahrenheit}°F<br>`);

let fahrenheitInput = 68; // Directly assign a Fahrenheit temperature
let celsiusConverted = ((fahrenheitInput - 32) * 5) / 9;
document.write(`${fahrenheitInput}°F is ${celsiusConverted}°C <br>`);
//hr line
document.write(`<hr>`);

// 7. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables
document.write(`<h4>Question no 7 : Shopping Cart</h4>`);
// a. Price of item 1
let priceItem1 = 560;
// b. Price of item 2
let priceItem2 = 200;
// c. Ordered quantity of item 1
let qtyItem1 = 2;
// d. Ordered Quantity of item 2
let qtyItem2 = 5;
// e. Shipping charges
let shippingCharges = 150;
// Compute the total cost & show the receipt in your browser.
let totalCost = priceItem1 * qtyItem1 + priceItem2 * qtyItem2 + shippingCharges;

document.write(`Price of item 1 is  ${priceItem1} <br>`);
document.write(`Quantity of item 1 is  ${qtyItem1}<br>`);
document.write(`Price of item 2 is ${priceItem2} <br>`);
document.write(`Quantity of item 2 is ${qtyItem2}<br> <br> `);
document.write(`Shipping Charges ${shippingCharges} <br> <br>`);
document.write(`<strong>Total Cost: ${totalCost} PKR</strong> <br><br>`);
//hr line
document.write(`<hr>`);

// 8. Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.

document.write(`<h4>Question no 8 : Marks Sheet</h4>`);

var totalMarks = 1200;
var markObtained = 900;
var Percentage = (markObtained / totalMarks) * 100;
// Displaying the result
document.write(`Total marks : ${totalMarks} <br>`);
document.write(`Marks obtained : ${markObtained} <br>`);
document.write(`Percentage : ${Percentage}% <br>`);
//hr line
document.write(`<hr>`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)

document.write(`<h4>Question no 9 : Currency in PKR</h4>`);
let dollor = 10;
let perDollar = 104;
let PakRupee = perDollar * dollor;

let Riyal = 25;
let perRiyal = 28;
let PakRupee2 = perRiyal * Riyal;

let totalPKR = PakRupee + PakRupee2;

document.write(` Total currency in PKR : ${totalPKR} <br>`);
//hr line
document.write(`<hr>`);

// 10. Write a program to initialize a variable with some number
// and do arithmetic in following sequence:
document.write(`<h4>Question no 10 </h4>`);

// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.
let number = 2;
let result2 = ((number + 5) * 10) / 2;
alert(` ${result2}`);
//hr line
document.write(`<hr>`);

// 11. The Age Calculator: Forgot how old someone is? Calculate
// it!
document.write(`<h4>Question no 11  The Age Calculator</h4>`);

// a. Store the current year in a variable.
let currentYear = 2015;
// b. Store their birth year in a variable.
let birthYear = 1992;
// c. Calculate their 2 possible ages based on the stored values.
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
// Output them to the screen like so: “They are either NN or NN
// years old”.
document.write(`Current Year : ${currentYear} <br>`);
document.write(`Birth Year: ${birthYear} <br><br>`);
document.write(`They are either ${age1} or ${age2} years old.`);

//hr line
document.write(`<hr>`);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is

// NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write(`<h4>Question no 12 : The Geometrizer</h4>`);

let radius = 12;
const pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write(`Radius of a circle : ${radius} <br>`);
document.write(`The circumference is: ${circumference} <br>`);
document.write(`The area is: ${area} <br>`);

//hr line
document.write(`<hr>`);

// 13. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
document.write(`<h4>Question no 13 </h4>`);

//hr line
document.write(`<hr>`);

// 14. What will be the output in variables a, b & result after
// execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;

document.write(`<h4>Question no 14 </h4>`);

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;
document.write(`a is ${a} <br> b is ${b} <br> result is ${result}`);

//hr line
document.write(`<hr>`);

// 15. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
document.write(`<h4>Question no 15 : The Lifetime Supply Calculator </h4>`);

// a. Store your favorite snack into a variable
var favoriteSnack = "Chocolate Chip";
// b. Store your current age into a variable.
var currentage = 15;
// c. Store a maximum age into a variable.
var maxAge = 85;
// d. Store an estimated amount per day (as a number).
var estimatedAmountPerDay = 2;
// e. Calculate how many would you eat total for the rest of
// your life.
var Totalamount = (maxAge - currentage) * 365 * estimatedAmountPerDay;
document.write(
  `Favourite Snack : ${favoriteSnack}<br>Current Age : ${currentage}<br>Estimate Maximum Age : ${maxAge}<br> Amount of snakes per day : ${estimatedAmountPerDay}<br><br>`
);

document.write(
  `You will need ${Totalamount} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`
);

//hr line
document.write(`<hr> <br>`);

document.write(` <strong>THE END</strong> `);
