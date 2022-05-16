function getInputValue(fieldId){
        const inputValue = document.getElementById(fieldId);
        const inputText =inputValue.value;
        const value = +inputText;
        inputValue.value = '';
        return value;
}

function updateTotal(id,amount){
    debugger;
    const fieldTotal = document.getElementById(id);
    const fieldText  = +fieldTotal.innerText; 
    const fieldAmount = fieldText + amount;
    fieldTotal.innerText = fieldAmount;

}
function getInnerTextValue(fieldId){
    const textValue  = document.getElementById(fieldId);
    const textAmount = +textValue.innerText;
    return textAmount;

}
function updateBalnace(amount,isadd){
        const balanceTag = document.getElementById('Total-amount');
        const balanceTotal = +balanceTag.innerText;
        let presentTotal;
        if(isadd == true){
             presentTotal = balanceTotal + amount;
        }else{
             presentTotal = balanceTotal - amount;
        }
        balanceTag.innerText = presentTotal;
}


//Deposite button 
document.getElementById('deposite-button').addEventListener('click',function(){
        const amount = getInputValue('deposite-input');
        if(amount > 0){
            const updateDepo = updateTotal('deposite-amount',amount);
            updateBalnace(amount,true);
        }
});

//Withdraw buttton
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('widthdraw-input');
    const totalAmount = getInnerTextValue('Total-amount');
    if(withdrawAmount > 0 && withdrawAmount <= totalAmount){

        const updateWithdraw = updateTotal('widthdraw',withdrawAmount);
        updateBalnace(withdrawAmount,false);
    }
});
