const pie1 = document.getElementById('myPieChart1');
const image1 = new Image();
image1.src = '/app/img/pieTxt1_resize.png';
const plugin1={
    id: 'custom_canvas_background_image',
    beforeDraw: (chart) => {
        if (image1.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - image1.width / 2;
            const y = top + height / 2 - image1.height / 2;
            ctx.drawImage(image1, x, y);
        } else {
            image1.onload = () => chart.draw();
        }
    }
}
const pieChart1 = new Chart(pie1, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Left Pie Chart',
            data: [100, 100, 150, 100],
            backgroundColor: ['rgb(87, 200, 77)', 'rgb(225, 231, 240)', 'rgb(84, 135, 173)', 'rgb(87, 200, 77)'],
            hoverOffset: 4,
        }],
    },
    plugins:[plugin1],
});


const pie2 = document.getElementById('myPieChart2');
const image2 = new Image();
image2.src = '/app/img/pieTxt2_resize.png';
const plugin2={
    id: 'custom_canvas_background_image',
    beforeDraw: (chart) => {
        if (image2.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - image2.width / 2;
            const y = top + height / 2 - image2.height / 2;
            ctx.drawImage(image2, x, y);
        } else {
            image2.onload = () => chart.draw();
        }
    }
}
const pieChart2 = new Chart(pie2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Center Pie Chart',
            data: [100, 200, 50],
            backgroundColor: [ 'rgb(225, 231, 240)', 'rgb(254, 9, 130)', 'rgb(255, 153, 12)'],
            hoverOffset: 4,
        }],
    },
    plugins: [plugin2],
});

const pie3 = document.getElementById('myPieChart3');
const image3 = new Image();
image3.src = '/app/img/pieTxt3_resize.png';
const plugin3={
    id: 'custom_canvas_background_image',
    beforeDraw: (chart) => {
        if (image3.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - image3.width / 2;
            const y = top + height / 2 - image3.height / 2;
            ctx.drawImage(image3, x, y);
        } else {
            image3.onload = () => chart.draw();
        }
    }
}
const pieChart3 = new Chart(pie3, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Right Pie Chart',
            data: [150, 150, 50, 50],
            backgroundColor: ['rgb(225, 231, 240)', 'rgb(33, 138, 211)', 'rgb(9, 198, 243)', 'rgb(225, 231, 240)'],
            hoverOffset: 4,
        }],
    },
    plugins: [plugin3],
});


const bar = document.getElementById('myBarChart');
const myBar = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
            '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
            data: [725, 650, 700, 775, 885, 700, 675, 400, 450, 500, 550, 600, 650, 700, 750,
                800, 850, 900, 950, 925, 900, 750, 575, 400, 475, 550, 725, 762, 700, 675, 625],
            backgroundColor: [
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(244, 91, 99)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(244, 91, 99)',
                'rgba(84, 166, 222)', 'rgba(84, 166, 222)', 'rgba(84, 166, 222)'
            ],
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    borderWidth: 0
                }
            },
            y: {
                min: 0,
                max: 1300,
                ticks: {
                    display: false,
                    borderWidth: 0
                },
                grid: {
                    display: false,
                    borderWidth: 0
                }
            }
        }
    },
});

const area = document.getElementById('myAreaChart');
const myArea = new Chart(area, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', ''],
        datasets: [{
            data: [3277, 14277, 11509, 20304, 15741, 17082, 21037, 25072],
            borderColor: ['rgba(255, 255, 255)'],
            backgroundColor: ['rgba(236, 89, 146, 0.8)'],
            fill: true,
            tension: 0.2,
            },
            {
                data: [15577, 11277, 22209, 21104, 15141, 9782, 8037, 2252],
                backgroundColor: ['rgba(12, 191, 238, 0.7)'],
                fill: true,
                tension: 0.2,
                legend: false,
                interaction: {
                    intersect: false
                },
                radius: 0,
            }
        ],
    },
    options: {
        responsive: true,
        plugins: {
            filler: {
                propagate: false,
            },
            legend: false,
        },
        pointBackgroundColor: '#515974',
        radius: 10,
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    borderWidth: 0
                },
                ticks: {
                    display: false,
                    borderWidth: 0
                },
            },
            y: {
                min: 0,
                max: 30000,
                ticks: {
                    display: false,
                    borderWidth: 0
                },
                grid: {
                    display: false,
                    borderWidth: 0
                }
            }
        }
    },
});

