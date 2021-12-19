document.getElementById("event_name").value =localStorage.getItem("n");
document.getElementById("bd").value=localStorage.getItem("dstart");
document.getElementById("ed").value=localStorage.getItem("dfinish");
document.getElementById("bt").value=localStorage.getItem("tstart");
document.getElementById("et").value=localStorage.getItem("tfinish");
document.getElementById("description").innerHTML=localStorage.getItem("i");
document.getElementById("prizes").innerHTML=localStorage.getItem("p");
document.getElementById("club_name").value=localStorage.getItem("c");
document.getElementById("sponsor1").innerHTML=localStorage.getItem("s1");
document.getElementById("sponsor2").innerHTML=localStorage.getItem("s2");
document.getElementById("sponsor3").innerHTML=localStorage.getItem("s3");
document.getElementById("participation_form").innerHTML=localStorage.getItem("parti_form");
document.getElementById("rules").value=localStorage.getItem("rule");
document.getElementById("m_link").value=localStorage.getItem("ven");


// })

document.getElementById("plus1").addEventListener('click',function(){
    document.getElementById("sponsors").style.height="90px";
    document.getElementById("del1").style.visibilty="visible";
    document.getElementById("sponsor2").style.visibility="visible";
    document.getElementById("plus1").style.display="none";
})
document.getElementById("plus2").addEventListener('click',function(){
    document.getElementById("sponsors").style.height="130px";
    document.getElementById("plus2").style.display="none";
})
document.getElementById("del1").addEventListener('click',function(){
    document.getElementById("plus1").style.display="none";
    document.getElementById("del1").style.display="none";
    document.getElementById("sponsor1").style.display="none";
})
document.getElementById("del2").addEventListener('click',function(){
    document.getElementById("plus2").style.display="none";
    document.getElementById("del2").style.display="none";
    document.getElementById("sponsor2").style.display="none";
    if (document.getElementById("sponsors").style.height="90px"){
        document.getElementById("sponsors").style.height="43px";
    }
    if (document.getElementById("sponsors").style.height="130px"){
        document.getElementById("sponsors").style.height="90px";
    }
})
document.getElementById("del3").addEventListener('click',function(){
    document.getElementById("plus3").style.display="none";
    document.getElementById("del3").style.display="none";
    document.getElementById("sponsor3").style.display="none";
    if (document.getElementById("sponsors").style.height="90px"){
        document.getElementById("sponsors").style.height="43px";
    }
    else if (document.getElementById("sponsors").style.height="130px"){
        document.getElementById("sponsors").style.height="90px";
    }
})