const ctx = document.getElementById('streamChart').getContext('2d');
const streamChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['28 Apr', '29 Apr', '30 Apr', '1 May', '2 May', '3 May', '4 May'],
        datasets: [{
            label: 'Streams per Day',
            data: [5, 12, 20, 50, 400, 1330, 12547],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    }
});
