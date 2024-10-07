//Get a time in minutes from the user and convert it to hours and then display it
var minutes = Number(prompt("Enter the time (minute) :" , 0))
var hours = minutes / 60

if (isNaN(hours)) {
    alert("The entered value is not valid.");
} else {
    alert(hours + " hours");
}
