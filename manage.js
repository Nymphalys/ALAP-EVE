document.getElementById("venue").innerHTML="Venue:- "+localStorage.getItem("ven")
document.getElementById("prizes").innerHTML="Prizes:- "+localStorage.getItem("p")
document.getElementById("link").innerHTML="Important Links:- "+localStorage.getItem("parti_form")
document.getElementById("event").innerHTML=localStorage.getItem("n")
document.getElementById("club").innerHTML="~"+localStorage.getItem("c")
document.getElementById("duration").innerHTML="Duration:-"+localStorage.getItem("dstart")+" to "+localStorage.getItem("dfinish")
if (user_name!=null&&user_number!=null){
    document.getElementById("registered_user").innerHTML=localStorage.getItem("user_number")+" "+localStorage.getItem("user_name")
}
