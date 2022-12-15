var dust = 0;
function initialize(){
    hint=document.getElementById("hint");
    item=document.getElementById("response");
    item2=document.getElementById("response2");
    empty=document.getElementById("nothing");
    fakeHint=document.getElementById("fake");
    trapEscpae=document.getElementById("trap");
}
function searchEmpty(){
    empty.innerHTML="Hm...nothing here, better look elsewhere."
}
function searchRealHint(){
    item2.innerHTML="You can still turn back..."
}
function searchDecoyHint(){
    item.innerHTML="You're heading the right way...";
}
function searchDecoyChest(){
        fakeHint.innerHTML="Your path is righteous!";
}
function searchRealChest(){
        hint.innerHTML="Avoid distractions...and the right side...";
}
function trapDoor(){
    if(dust >= 30){
        document.getElementById('escape').style.visibility = 'visible';   
    }
    else{
        dust++;
    }
}