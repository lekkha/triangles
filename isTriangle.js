//saare inputs ka const lo 
const inputs = document.querySelectorAll(".angle-input");
const IsTributton = document.querySelector("#checker-button");
const outputE1 = document.querySelector("#output"); 


//checks if the sum is 180 gives Y/N 
function isTriangle(){
    const sumOfAngles = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value);
    
    if(sumOfAngles=== 180){
        outputE1.innerText = "yes";
    }
    else{
        outputE1.innerText = "no";
    }
}

//when button is clicked call function
IsTributton.addEventListener("click", isTriangle)