const categories = [
    'Income', 'Expenses', 'Savings', 'Investments', 'Debt', 'Budgeting', 
    'Entertainment', 'Bills', 'Personal Development', 'Food'
];

const container = document.getElementById('category-container');

categories.forEach((category) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = category;
    box.setAttribute('data-category', category);

    box.addEventListener('click', function () {
        window.location.href = `category.html?category=${encodeURIComponent(category)}`;
    });

    container.appendChild(box);
});
