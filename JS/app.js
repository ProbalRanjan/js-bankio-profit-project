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

    // ---- Calculation
    else if (foodAmount >= 0 && rentAmount >= 0 && clothesAmount >= 0 && inputAmount > 0) {
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        if (totalExpenses < inputAmount) {
            expensesResult.innerText = totalExpenses;
            balanceResult.innerText = inputAmount - totalExpenses;
        }
        else {
            alert("Not enough balance to expense!");
        }
    }
}

// ---- Click Event for Calculate Button
document.getElementById("calculate-button").addEventListener("click", function () {
    // ---- Get Input Field Id
    const inputAmount = allInputValue("income")
    const foodAmount = allInputValue("food");
    const rentAmount = allInputValue("rent");
    const clothesAmount = allInputValue("clothes");

    // ---- Calculate Function
    calculation(foodAmount, rentAmount, clothesAmount, inputAmount);
});