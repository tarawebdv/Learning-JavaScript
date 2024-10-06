//Get the user's date of birth and calculate and display his age
var BirthDate = Number(prompt("Please enter your BirthDate :" , 1990))
if (BirthDate < 2024 ){
    var yourAge = 2024 - BirthDate
}
else{
    alert("Date of birth entered is not valid")
}

if (isNaN(yourAge)) {
    alert("Date of birth entered is not valid")
}
else{
alert("your age is " + yourAge)
}


