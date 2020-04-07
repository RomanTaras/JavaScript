var login = prompt("Please enter the login","Admin");
var password = prompt("Please enter password", "TheMaster");
if(login == "Cancel") {
   alert("Canceled")
} else if(login == "Other") {
   alert("Dont know you")
} else if(login == login){
    if(password=="cancel"){
        console.log("Canceled")}
    else if(password=="other"){
        console.log("wrong password")}
    else if(password=="TheMaster")	
{          console.log("welcome")}
    else{
        alert("Wrong password")}};