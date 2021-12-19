
document.getElementById("plus1").addEventListener('click',function(){
    document.getElementById("sponsors").style.height="90px";
    document.getElementById("sponsor2").style.visibility="visible";
    document.getElementById("plus1").style.display="none";
})
document.getElementById("plus2").addEventListener('click',function(){
    document.getElementById("sponsors").style.height="130px";
    document.getElementById("plus2").style.display="none";
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
// function store(a,b){
//     localStorage.setItem("a",document,getElementById("b").value)
// }

document.getElementById("but").addEventListener('click',function(){
    localStorage.setItem("n",document.getElementById("event_name").value)
    localStorage.setItem("dstart",document.getElementById("bd").value)
    localStorage.setItem("dfinish",document.getElementById("ed").value)
    localStorage.setItem("tstart",document.getElementById("bt").value)
    localStorage.setItem("tfinish",document.getElementById("et").value)
    localStorage.setItem("i",document.getElementById("description").value)
    localStorage.setItem("p",document.getElementById("prizes").value)
    localStorage.setItem("c",document.getElementById("club_name").value)
    localStorage.setItem("parti_form",document.getElementById("participation_form").value)
    localStorage.setItem("s1",document.getElementById("sponsor1").value)
    localStorage.setItem("s2",document.getElementById("sponsor2").value)
    localStorage.setItem("s3",document.getElementById("sponsor3").value)
    localStorage.setItem("rule",document.getElementById("rules").value)
    localStorage.setItem("ven",document.getElementById("m_link").value)

    var passcode= Math.floor((Math.random() * (999999-100000)) + 100000);
    localStorage.setItem("passc",passcode)
})
