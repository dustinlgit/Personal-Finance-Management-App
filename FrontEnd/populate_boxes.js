const categories = [
    'Income', 'Expenses', 'Savings', 'Investments', 'Debt', 
    'Budgeting', 'Entertainment', 'Bills', 'Personal Development', 'Food'
];

const container = document.getElementById('category-container');

categories.forEach((category) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = category;

    const total = getCategoryTotal(category);
    if (total) {
        const totalElement = document.createElement('div');
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        totalElement.classList.add('box-total');
        box.appendChild(totalElement);
    }

    box.addEventListener('click', function () {
        window.location.href = `category.html?category=${encodeURIComponent(category)}`;
    });

    container.appendChild(box);
});

function getCategoryTotal(category) {
    const savedExpenses = JSON.parse(localStorage.getItem(`expenses_${category}`)) || [];
    return savedExpenses.reduce((sum, expense) => sum + expense.cost, 0);
}
