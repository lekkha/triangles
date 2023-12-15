const sideInputs = document.querySelectorAll('.side-length'); 
const calcBtn = document.querySelector('#cal-btn'); 
const outputEl = document.querySelector('#output'); 

function sumofsquare(a, b){
    const num1 = a*a;
    const num2 = b*b;
    const sumSq = num1 + num2; 
   
    return sumSq; 
  
}

function calculateHypo(){
    const sum = sumofsquare(Number(sideInputs[0].value), Number(sideInputs[1].value));
    
    // Number(sideInputs[0].value)*Number(sideInputs[0].value);
    // const squareSideB = Number(sideInputs[1].value)*Number(sideInputs[1].value);
    const rootval = Math.sqrt(sum);
 
    outputEl.innerText = "the length of hypo is: " + rootval;  

}

calcBtn.addEventListener("click", calculateHypo);