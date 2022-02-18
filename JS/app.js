function allInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.value = "";
    return inputFieldAmount;
}

function totalExpenses(items) {
    const totalExpenses = document.getElementById("total-expenses");
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);
    totalExpenses.innerText = totalExpensesAmount + items;
}

function totalBalance(balance, expenses) {
    const totalBalance = document.getElementById("net-balance");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = balance - expenses;
}

document.getElementById("calculate-button").addEventListener("click", function () {




    const foodAmount = allInputValue("food-input");
    const rentAmount = allInputValue("rent-input");
    const clothesAmount = allInputValue("clothes-input");
    const total = foodAmount + rentAmount + clothesAmount;
    totalExpenses(total);


    const incomeInput = allInputValue("income-input");
    totalBalance(incomeInput, total);

});