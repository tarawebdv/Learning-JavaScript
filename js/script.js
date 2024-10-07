// Get age and gender from the user.
// If the gender of the user is female or the age is less than 18, it will display an error
// and otherwise show it permission to enter the panel

var age = Number(prompt("Enter your age:" , 18));
var gender = (prompt("Enter your gender: (male or female)?"))
if(gender == 'male' || gender == 'female'){
if (gender == "female" || age < 18){
  alert("You are not allowed to enter the panel.");
} else {
    alert("Welcome to the panel!");
}
}else{
    alert("Invalid gender entered. Please enter either male or female.");
}