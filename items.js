var key = false;
var axe = false;
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
function searchKey(){
    if(key){
        item.innerHTML="You already have this item."
    }
    else{
        item.innerHTML="You received a key!"
        key=true;
    }
}
function searchAxe(){
    if(axe){
        item2.innerHTML="You already have this item."
    }
    else{
        item2.innerHTML="You received an axe!"
        axe=true;
    }
}
function searchDecoyChest(){
    if(key){
        fakeHint.innerHTML="Your path is righteous!"
    }
}
function searchRealChest(){
    if(key){
        hint.innerHTML="Avoid distractions...and the right side..."
    }
}
function trapDoor(){
    if(axe){
        trapEscape.innerHTML= <button onclick="window.location.href='escape.html';">Escape!</button>
    }
    else{
        trapEscape.innerHTML= "I have nothing to open this...looks like I need an axe to break this lock..."
    }
}