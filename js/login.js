
// handle deposite and Balance 
document.getElementById("deposite_button").addEventListener("click",function(){
// deposite money
    // get value from deposite input box
    const getInput = document.getElementById("deposite_amount");
    const storeInput = getInput.value;
    getInput.value="";

    // call deposite section and with previous deposite
    let depoAmount = document.getElementById("deposite_total");
    const holdDepoAmount = depoAmount.innerText;
     depoAmount.innerText = parseFloat(holdDepoAmount)+parseFloat(storeInput);
   

// update balance 
    //get balance from balance section
    const getBalance = document.getElementById("balance_total");
    const holdBalance = getBalance.innerText;
   
    // add balance with previous deposite
    getBalance.innerText = parseFloat(holdBalance)+parseFloat(storeInput);   
     
})


//Handle Withdraw 

document.getElementById("withdraw_button").addEventListener("click",function(){
    //get value from withdraw input box
    const getWithdraw = document.getElementById("withdraw_amount");
    const storeWithdraw = getWithdraw.value;
    console.log(storeWithdraw);
    getWithdraw.value="";

    //call withdraw section with previous withdraw amoutnt
    let withdrawAmount = document.getElementById("withdraw_total");
    withdrawAmount.innerText= parseFloat(withdrawAmount.innerText)+parseFloat(storeWithdraw);
    
    //update balance 
    //get balance from balance section
    const getBalance = document.getElementById("balance_total");
    //substract withdraw amount from balance
    getBalance.innerText=parseFloat(getBalance.innerText)-parseFloat(storeWithdraw);

})