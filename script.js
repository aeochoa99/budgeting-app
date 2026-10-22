function calculateBudget(income) {
    const values = [];

    const formatCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    values.push(formatCurrency.format(income * .50),
                formatCurrency.format(income * .30),
                formatCurrency.format(income * .20));

    return values;
}

function getInput() {
    const incomeInput = Number(document.querySelector('input').value);
    return incomeInput;
}

function displayBudget(fiftyPercent, thirtyPercent, twentyPercent) {
    const needs = document.querySelector('#needs');
    needs.textContent = fiftyPercent;

    const wants = document.querySelector('#wants');
    wants.textContent = thirtyPercent;

    const savings = document.querySelector('#savings');
    savings.textContent = twentyPercent;
}

const calculateButton = document.querySelector('button');
calculateButton.addEventListener('click', () => {
    const incomeInput = getInput();

    displayBudget(calculateBudget(incomeInput)[0],
                  calculateBudget(incomeInput)[1],
                  calculateBudget(incomeInput)[2]);
})