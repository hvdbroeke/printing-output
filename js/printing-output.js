/*global alert*/
// alert( "description of alerted_value: " + alerted_value );
//Task 1
var a = 3;
var b = 5;
var c;
alert("var a = 3;\nvar b = 5;\nvar c;\n_______________\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "a += b = " + (a += b) + "\n" +
      "a -= b = " + (a -= b) + "\n" +
      "a *= b = " + (a *= b) + "\n" +
      "a /= b = " + (a /= b) + "\n" +
      "a %= b = " + (a %= b) + "\n" +
      "a == b = " + (a == b) + "\n" +
      "a != b = " + (a != b) + "\n" +
      "a > b = " + (a > b) + "\n" +
      "a < b = " + (a < b) + "\n" +
      "!a && !c  = " + (!a && !c) + "\n" +
      "!a || !c = " + (!a || !c) + "\n"
     );

//Task 2

var first_name = "Heidi";
var last_name = "Vandenbroeke";
var email = "vand0532@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + "." + " " + "You can contact me at " + email + ".";
alert(output);

//Task 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100),
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[1];
if(sum % 2 == 0){
    alert(numbers[0] + "+" + numbers[1] + "=" + sum + "\n" + "This is an even number.")
};
if(sum % 2 != 0){
   alert(numbers[0] + "+" + numbers[1] + "=" + sum + "\n" + "This is an odd number.") 
};
