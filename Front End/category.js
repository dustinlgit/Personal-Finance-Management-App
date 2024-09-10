const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
document.getElementById('category-title').textContent = category;

const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalElement = document.getElementById('total');
const backBtn = document.getElementById('back-btn');

let total = 0;
let savedExpenses = JSON.parse(localStorage.getItem(`expenses_${category}`)) || [];

savedExpenses.forEach(expense => {
    addExpenseToList(expense.subcategory, expense.cost);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const subcategory = document.getElementById('subcategory').value;
    const cost = parseFloat(document.getElementById('cost').value);

    addExpenseToList(subcategory, cost);
    savedExpenses.push({ subcategory, cost });
    localStorage.setItem(`expenses_${category}`, JSON.stringify(savedExpenses));
});

function addExpenseToList(subcategory, cost) {
    const li = document.createElement('li');
    li.textContent = `${subcategory}: $${cost.toFixed(2)}`;
    expenseList.appendChild(li);

    total += cost;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

backBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
