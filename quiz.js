const quizForm = document.querySelector('.quiz-form'); 
const submitBtn = document.querySelector('#submit-btn');
const outputE1 = document.querySelector('#outputs'); 

const correctAnswer = ["90", "right angled"];

//getting data from form using formdata instead of using a seperate query selctor for each value 
//automatically gives the answer that the user has checked 
//otherwise go to each radio button check if it was turned on or not etc etc had querysector was being used 
function calculateScore(){
    let score =0; 
    let index =0; 

    const formResult = new FormData(quizForm); 

    //object is a collection of key value pairs by using this method only value is returned 
    //unlike the entries wala method jaha both key+value is returned 
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            score = score+1; 
        }
        index = index+1;
    }
}
submitBtn.addEventListener("click", calculateScore);
