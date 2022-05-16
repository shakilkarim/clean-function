function TotalAmountCost(){
    //Totla expense food
    const foodTotal = document.getElementById('food-total');
    
    const foodAmount = parseInt(foodTotal.value);
    foodTotal.value = '';

   //Totla expense rent
    const rentTotal = document.getElementById('rent-total');
    const rentAmount = parseInt(rentTotal.value);
    rentTotal.value ='';
    
    //Totla expense clothe
    const clotheTotal = document.getElementById('clothe-total');
    const clotheAmount = parseInt(clotheTotal.value);
    clotheTotal.value = '';
    
    
    const totalExpense = foodAmount + rentAmount + clotheAmount;
    //Total expenses 
    const totlaExpenseAmount = document.getElementById('total-expense');
    const expenseAmount = parseFloat(totlaExpenseAmount.innerHTML);
    totlaExpenseAmount.innerHTML = totalExpense;

    //Total Income 
    const totalIncome = document.getElementById('total-income');
    const totalIncomeAmount = parseInt(totalIncome.value);
    totalIncome.value = '';
    const totalBalance = totalIncomeAmount - totalExpense;
    if(totalBalance < totalExpense){
        alert("it's impossible");
    }

    const totalIncomeBalance = document.getElementById('total-baln');
    const totalBalanceShow = parseInt(totalIncomeBalance.innerText);
    if(totalBalance > totalExpense){
        totalIncomeBalance.innerText = totalBalance;
    }
    
    
}
function checkError(err){
       if(err == ''){
        alert('field must not full')
       }
            
        
}

document.getElementById('calculator-button').addEventListener('click',function(){
        // console.log('check button');
        const expance = TotalAmountCost();
        
        
})