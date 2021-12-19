document.getElementById("p2").textContent="Description of the Event : "+localStorage.getItem("i")
document.getElementById("p3").textContent="Rules & Regulations : "+localStorage.getItem("rule")     

document.getElementById("venue").innerHTML="Venue:- "+localStorage.getItem("ven")
document.getElementById("prizes").innerHTML="Prizes:- "+localStorage.getItem("p")
document.getElementById("link").innerHTML="Important Links:- "+localStorage.getItem("parti_form")
document.getElementById("event").innerHTML=localStorage.getItem("n")
document.getElementById("club").innerHTML="~"+localStorage.getItem("c")
document.getElementById("duration").innerHTML="Duration:-"+localStorage.getItem("dstart")+" to "+localStorage.getItem("dfinish")
document.getElementById("submit").addEventListener('click',function(){
    localStorage.setItem("user_name",document.getElementById("name").value)
    localStorage.setItem("user_number",document.getElementById("reg_no").value)
})