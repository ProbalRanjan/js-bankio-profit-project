// ---- Get Input Values ----
function allInputValue(inputId) {
    const inputField = document.getElementById(inputId + "-input");
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.value = "";
    return inputFieldAmount;
}

// ---- Calculate for Total Expenses & Net Balance ----
function calculation(foodAmount, rentAmount, clothesAmount, inputAmount) {

    // ---- Get Expenses & Balance innerText Id
    const expensesResult = document.getElementById("total-expenses");
    const balanceResult = document.getElementById("total-balance");

    // ---- Error Message
    if (foodAmount < 0 || rentAmount < 0 || clothesAmount < 0 || inputAmount < 0) {
        alert("Please provide a positive amount!");
    }

    // ---- Total Expense & Balance
    else if (foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0 && inputAmount > 0) {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        if (totalExpenses < inputAmount) {
            expensesResult.innerText = totalExpenses;
            balanceResult.innerText = inputAmount - totalExpenses;
        }

        // ---- Error Message
        else {
            alert("Not enough balance to expense!");
        }
    }

    // ---- Error Message
    else {
        alert("Please Input the Fields")
    }
}

// ---- Click Event for Calculate Button  ----
document.getElementById("calculate-button").addEventListener("click", function () {
    // ---- Get Input Field Id
    const inputAmount = allInputValue("income")
    const foodAmount = allInputValue("food");
    const rentAmount = allInputValue("rent");
    const clothesAmount = allInputValue("clothes");

    // ---- Calculate Function
    calculation(foodAmount, rentAmount, clothesAmount, inputAmount);
});

// ---- Click Event for Save Button ----
document.getElementById("save-button").addEventListener("click", function () {

    // ---- Get Saving Input Field Id
    const savingAmount = allInputValue("saving");
    const savingResult = document.getElementById("saving-balance");

    // ---- Net Balance
    const balanceResult = document.getElementById("total-balance");
    const balanceValue = parseFloat(balanceResult.innerText);

    // ---- Remaining Balance
    const remainingResult = document.getElementById("remaining-balance");

    // ---- Error Message
    if (savingAmount > 100) {
        alert("Put a number bellow 100")
    }

    // ---- Saving Amount
    else if (savingAmount > 0 && savingAmount <= 100) {
        if (balanceValue > 0) {
            const savingValue = (savingAmount * balanceValue) / 100;
            savingResult.innerText = savingValue.toFixed(3);

            const netBalance = balanceValue - savingValue;
            remainingResult.innerText = netBalance.toFixed(3);
        }

        // ---- Error Message
        else {
            alert("Balance is too low for saving");
        }
    }

    // ---- Error Message
    else {
        alert("Please fill the saving persentage");
    }
});