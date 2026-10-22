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

const calculateButton = document.querySelector('button');
calculateButton.addEventListener('click', () => {
    const incomeInput = getInput();
    console.log(incomeInput);
})