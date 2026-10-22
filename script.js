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

const calculateButton = document.querySelector('button');
calculateButton.addEventListener('click', () => {
    console.log('Click registered.');
})