const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
document.getElementById('category-title').textContent = category;

const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');
const backBtn = document.getElementById('back-btn');

let total = 0;
let savedExpenses = JSON.parse(localStorage.getItem(`expenses_${category}`)) || [];

savedExpenses.forEach((expense, index) => {
    addExpenseToList(expense.subcategory, expense.cost, index);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const subcategory = document.getElementById('subcategory').value;
    const cost = parseFloat(document.getElementById('cost').value);

    addExpenseToList(subcategory, cost, savedExpenses.length);
    savedExpenses.push({ subcategory, cost });
    localStorage.setItem(`expenses_${category}`, JSON.stringify(savedExpenses));
    updateCategoryTotal();
});

function addExpenseToList(subcategory, cost, index) {
    const li = document.createElement('li');
    li.textContent = `${subcategory}: $${cost.toFixed(2)}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        deleteExpense(index);
    });

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);

    total += cost;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function deleteExpense(index) {
    const expense = savedExpenses[index];
    total -= expense.cost;

    savedExpenses.splice(index, 1);
    localStorage.setItem(`expenses_${category}`, JSON.stringify(savedExpenses));

    updateExpenseList();
    updateCategoryTotal();
}

function updateExpenseList() {
    expenseList.innerHTML = '';
    total = 0;

    savedExpenses.forEach((expense, index) => {
        addExpenseToList(expense.subcategory, expense.cost, index);
    });
}

function updateCategoryTotal() {
    localStorage.setItem(`categoryTotal_${category}`, total);
}

backBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
