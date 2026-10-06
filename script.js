function calculateBudget(total) {
    const budgetValues = [];

    const fiftyPercent = Math.round((total * .5) * 100) / 100;
    const thirtyPercent = Math.round((total * .3) * 100) / 100;
    const twentyPercent = Math.round((total * .2) * 100) / 100;

    budgetValues.push(fiftyPercent, thirtyPercent, twentyPercent);

    return budgetValues;
}