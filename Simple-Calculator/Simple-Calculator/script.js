// use DOM queries to get access to the DOM elements that you need
let d = document.getElementsByClassName("digit");
let o = document.getElementsByClassName("operation");
let e1 = document.getElementById(`btnClear`);
let e2 = document.getElementById(`btnEqual`);
let display=document.getElementById(`display`)


// link the displayDigit function to the click event of the digit buttons
for(let b of d){
b.addEventListener("click",displayDigit)}
//link the operationClicked function to the click even of the operation buttons
for(let oc of o){
    oc.onclick=operationClicked;
}

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label
function displayDigit(e){
    display.innerText+= e.target.innerText;
    

} 


// set the click event of the clear button
e1.onclick = function(){
    display.innerText = '';
};
// to an anonymous function that clears the text of the display lable


let firstValue, secondValue, operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value
function operationClicked(o){
    var target1 = o.target.innerText;
    operation = target1;
    firstValue = Number(display.innerText);
    display.innerText = " ";


}


//Define the equalClicked function to handlet the click event of the equal button with the following steps
    //Convert the value in the display label to a number and store it in the variable secondValue
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.

e2.addEventListener("click",equalClicked);

function equalClicked(){
    secondValue = Number(display.innerText);
    
    if(operation=="+"){
            display.innerText = secondValue + firstValue;
    }
    if(operation=="*"){
        display.innerText = secondValue*firstValue;

    }
    if(operation=="/"){
        display.innerText = firstValue/secondValue;
    }
    if(operation=="-"){
        display.innerText = firstValue-secondValue;
    }
    }