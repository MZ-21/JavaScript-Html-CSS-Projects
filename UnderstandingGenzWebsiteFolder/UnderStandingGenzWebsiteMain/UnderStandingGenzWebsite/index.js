

let submitB = document.getElementById(`submit`);
let display = document.getElementById(`display`);
let textBox = document.getElementById(`def`);

//event listener to 
textBox.addEventListener('focusin',beg);
//submitB.addEventListener('click',clear);
submitB.addEventListener('click',showText);

function beg(){
    display.innerText = "";
    
}

function clear(){
    textBox.value = "";
    //display.innerText = "";
}

function showText(){

    if(textBox.value.toLowerCase().includes("slay") ){
    display.innerText = "slay: to do something well or to do a good job";
            
    }
    else if(textBox.value.toLowerCase().includes("tea")){
        display.innerText = "tea: to gossip";
    }
    else if(textBox.value.toLowerCase().includes("ghost")){
        display.innerText = "ghost: to stop talking to someone without telling them";
    }
    else if(textBox.value.toLowerCase().includes("cap")){
        display.innerText = "cap:a lie. If someone says 'no cap' it means they're not lying";
    }
    else if(textBox.value.toLowerCase().includes("period")){
        display.innerText = "period: to emphasize that there is nothing else to add to the statement or to signify the end of a discussion"
    }
    else {display.innerText = "Enter a GenZ term"}
}












/*const fs = require("fs");


let display = document.getElementById(`display`);
let submit = document.getElementsById(`submit`);



display.innerText="hi";


if(display.innerText.toLowerCase().includes(words["Defintions"][0])){
    display.innerText = "hello";
}
submit.addEventListener("click",showText);
submit.addEventListener("click",click)


function showText(e){
    display.innerText="hi";
}

let ref,fv;

function click(display){
    var t1 = display.target.innerText;
    ref = t1;
    fv = String(display.innerText);
    display.innerText="";
}

*/