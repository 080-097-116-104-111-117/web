
function myFunction(e) {
    let loanAmount = document.getElementById("amount").value;
    let loanInterest = document.getElementById("apr").value;
    let loanduration = document.getElementById("duration").value;



    let totalInterest = (loanAmount * loanInterest * loanduration) / 100;
    let totalAmount = parseInt(loanAmount) + parseInt(totalInterest);


    let EMI = Math.round(totalAmount / loanduration);

    document.getElementById("text").innerHTML = "<B> EMI: Rs. <B> " + EMI + "<br>" + "<B> Total: Rs. <B>" + totalAmount;

    
    if (loanAmount !== "" || loanInterest !== "" || loanduration !== "") {
        document.getElementById("result").style.display = "block";
        document.getElementById("myForm").reset();
    }
    else {
        document.getElementById("result").style.display = "block";
        document.getElementById("text").innerHTML = "<B>Enter the valid number!<br> Try again...<B>";
        document.getElementById("result").style.color = "black";
        
    }
    e.preventDefault();
    
}

document.getElementById("bttn").addEventListener("click", myFunction);
document.getElementById("exit").addEventListener("click", hide);

function hide() {
    document.getElementById("result").style.display = "none";
}