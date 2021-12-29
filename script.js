let b0 = document.querySelector("#btn0");
let b1 = document.querySelector("#btn1");
let b2 = document.querySelector("#btn2");
let b3 = document.querySelector("#btn3");
let b4 = document.querySelector("#btn4");
let b5 = document.querySelector("#btn5");
let b6 = document.querySelector("#btn6");

document.addEventListener("keypress", function(event){
    if(event.code == "Enter"){
        b0.style.backgroundColor = "blue";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
    } 
    if(event.code == "KeyS"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "blue";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
    }
    else if(event.code == "KeyE"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "blue";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
    }
    else if(event.code == "KeyO"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "blue";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
    }
    else if(event.code == "KeyN"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "blue";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "black";
    }
    else if(event.code == "KeyL"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "blue";
        b6.style.backgroundColor = "black";
    }
    else if(event.code == "KeyZ"){
        b0.style.backgroundColor = "black";
        b1.style.backgroundColor = "black";
        b2.style.backgroundColor = "black";
        b3.style.backgroundColor = "black";
        b4.style.backgroundColor = "black";
        b5.style.backgroundColor = "black";
        b6.style.backgroundColor = "blue";
    }
})