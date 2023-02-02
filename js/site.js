//get values from the user 
function getValues(){
    //Get the values from the user 
    let loanAmount = document.getElementById("amount").value;
    let loanTerm = document.getElementById("term").value;
    let interestRate = document.getElementById("rate").value;

        //parse for numbers 
        loanAmount = parseInt(loanAmount);
        loanTerm = parseInt(loanAmount);
        interestRate = parseInt(interestRate);
    
        //check that they are integers 
        if(Number.isInteger(loanAmount) && Number.isInteger(loanTerm) && Number.isInteger(interestRate)){
            //call calculator
            let smArray = calculator(loanAmount, loanTerm, interestRate);
            //call displayData
            displayData(smArray);
        }else{
            alert("You Must Enter Numbers");
        } 
}

function calculator(loanAmount,loanTerm,interestRate){
      let returnArray = [];
      
      
}