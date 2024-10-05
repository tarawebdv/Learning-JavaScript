//Receive a number from the user and show the user whether it is even or odd

var user = prompt("Please enter a number")
var usernum = +user
if (usernum % 2 === 0) {
    alert("The number is even")
} else {
    alert("The number is odd")
}