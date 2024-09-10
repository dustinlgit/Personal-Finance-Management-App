document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('incomeBreakdownChart')?.getContext('2d');
    
    if (!ctx) {
        console.error('Canvas context not found.');
        return;
    }

    function getCategoryData() {
        const boxes = document.querySelectorAll('#category-container .box');
        
        if (boxes.length === 0) {
            console.error('No boxes found in #category-container.');
            return { labels: [], data: [] };
        }

        const labels = [];
        const data = [];

        boxes.forEach(box => {
            const totalElement = box.querySelector('.box-total');
            
            if (totalElement) {
                const categoryName = box.textContent.split('Total:')[0].trim(); 
                const total = parseFloat(totalElement.textContent.replace('Total: $', ''));

                labels.push(categoryName);
                data.push(total);
            } else {
                console.error('No .box-total found in:', box);
            }
        });

        return { labels, data };
    }

    function createPieChart(labels, data) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    const { labels, data } = getCategoryData();
    createPieChart(labels, data);

    function updateChart() {
        const { labels, data } = getCategoryData();
        createPieChart(labels, data);
    }

    const observer = new MutationObserver(updateChart);
    observer.observe(document.getElementById('category-container'), { childList: true });
});
