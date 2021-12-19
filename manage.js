document.getElementById("venue").innerHTML="Venue:- "+localStorage.getItem("ven")
document.getElementById("prizes").innerHTML="Prizes:- "+localStorage.getItem("p")
document.getElementById("link").innerHTML="Important Links:- "+localStorage.getItem("parti_form")
document.getElementById("event").innerHTML=localStorage.getItem("n")
document.getElementById("club").innerHTML="~"+localStorage.getItem("c")
document.getElementById("duration").innerHTML="Duration:-"+localStorage.getItem("dstart")+" to "+localStorage.getItem("dfinish")
// var u_name= localStorage.getItem("user_name")
// var u_number= localStorage.getItem("user_number")

document.getElementById("registered_user").innerHTML=localStorage.getItem("user_number")+" "+localStorage.getItem("user_name")
console.log(localStorage.getItem("user_name"))
console.log(localStorage.getItem("user_number"))



