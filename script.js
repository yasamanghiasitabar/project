function show_menu(){

    document.querySelector("#r_menu").style.display="block";
    
}

function hide_menu(){
    document.querySelector("#r_menu").style.display="none"; 
}
function open_form(){
    document.querySelector("#moodal").style.display="block";
}
function close_form(){
    document.querySelector("#moodal").style.display="none";
}
let t=document.querySelectorAll(".border_box");
t[0].style.display="block";
function show(txt){
    for(i=0;i<t.length;i++){
        t[i].style.display="none";
    }
document.getElementById(txt).style.display="block";
}