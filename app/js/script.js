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

/*
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
});*/

$(function () {
    const bar = document.getElementById('myBarChart');
    const json_url_dec = "/app/json/data_chart_dec.json";
    const json_url_jan = "/app/json/data_chart_jan.json";
    const json_url_feb = "/app/json/data_chart_feb.json";
    const json_url_mar = "/app/json/data_chart_mar.json";
    const json_url_apr = "/app/json/data_chart_apr.json";

    var myBar = new Chart(bar, {
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

    const btnDecember = document.getElementById("btn-december");
    const btnJanuary = document.getElementById("btn-january");
    const btnFebruary = document.getElementById("btn-february");
    const btnMarch = document.getElementById("btn-march");
    const btnApril = document.getElementById("btn-april");

    btnDecember.onclick = function() {
        ajax_chart(myBar, json_url_dec);
    };
    btnJanuary.onclick = function() {
        ajax_chart(myBar, json_url_jan);
    };
    btnFebruary.onclick = function() {
        ajax_chart(myBar, json_url_feb);
    };
    btnMarch.onclick = function() {
        ajax_chart(myBar, json_url_mar);
    };
    btnApril.onclick = function() {
        ajax_chart(myBar, json_url_apr);
    };

    // the 5th lab
    /*function json_chart(chart, url) { // function to update our chart
        var data = data || {};
        $.getJSON(url, data).done(function(response) {
            chart.data.labels = response.labels;
            chart.data.datasets[0].data = response.values;
            chart.data.datasets[0].backgroundColor = response.backgroundColor;
            chart.update(); // finally update our chart
        });
    }*/

    // the 5th & 6th labs
    function ajax_chart(chart, url) { // function to update our chart
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function (d) {
                chart.data.labels = d.labels;
                chart.data.datasets[0].data = d.values;
                chart.data.datasets[0].backgroundColor = d.backgroundColor;
                chart.update(); // finally update our chart
            }
        });
    }
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

function show (param) {
    const show_id_1 = document.getElementById("show_1").style;
    const btn_id_1_1 = document.getElementById("btn_11").style;
    const btn_id_1_2 = document.getElementById("btn_12").style;
    const cardHeader_id_1 = document.getElementById("cardHeader1").style;

    const show_id_2 = document.getElementById("show_2").style;
    const btn_id_2_1 = document.getElementById("btn_21").style;
    const btn_id_2_2 = document.getElementById("btn_22").style;
    const cardHeader_id_2 = document.getElementById("cardHeader2").style;

    const show_id_3 = document.getElementById("show_3").style;
    const btn_id_3_1 = document.getElementById("btn_31").style;
    const btn_id_3_2 = document.getElementById("btn_32").style;
    const cardHeader_id_3 = document.getElementById("cardHeader3").style;

    const show_id_4 = document.getElementById("show_4").style;
    const btn_id_4_1 = document.getElementById("btn_41").style;
    const btn_id_4_2 = document.getElementById("btn_42").style;
    const cardHeader_id_4 = document.getElementById("cardHeader4").style;

    const show_id_5 = document.getElementById("show_5").style;
    const btn_id_5_1 = document.getElementById("btn_51").style;
    const btn_id_5_2 = document.getElementById("btn_52").style;
    const cardHeader_id_5 = document.getElementById("cardHeader5").style;

    const show_id_6_1 = document.getElementById("show_6_1").style;
    const show_id_6_2 = document.getElementById("show_6_2").style;
    const btn_id_6_1 = document.getElementById("btn_61").style;
    const btn_id_6_2 = document.getElementById("btn_62").style;
    const cardHeader_id_6 = document.getElementById("cardHeader6").style;

    const show_id_7_1 = document.getElementById("show_7_1").style;
    const show_id_7_2 = document.getElementById("show_7_2").style;
    const btn_id_7_1 = document.getElementById("btn_71").style;
    const btn_id_7_2 = document.getElementById("btn_72").style;
    const cardHeader_id_7 = document.getElementById("cardHeader7").style;

    const show_id_8 = document.getElementById("show_8").style;
    const btn_id_8_1 = document.getElementById("btn_81").style;
    const btn_id_8_2 = document.getElementById("btn_82").style;
    const cardHeader_id_8 = document.getElementById("cardHeader8").style;

    if (param==="show_closed_1"){
        show_id_1.visibility = "hidden";
        show_id_1.height="0";
        show_id_1.padding="0";


        cardHeader_id_1.borderBottomLeftRadius="0.5rem";
        cardHeader_id_1.borderBottomRightRadius="0.5rem";

        btn_id_1_2.opacity="25%";
        btn_id_1_1.opacity="100%";
        btn_id_1_2.pointerEvents="none";
        btn_id_1_1.pointerEvents="auto";
        btn_id_1_2.userSelect="none";
        btn_id_1_1.userSelect="auto";
    }

    if (param==="show_opened_1"){
        show_id_1.visibility = "visible";
        show_id_1.height="911px";
        show_id_1.width="1563px";
        show_id_1.padding="25px";

        cardHeader_id_1.borderBottomLeftRadius="0rem";
        cardHeader_id_1.borderBottomRightRadius="0rem";

        btn_id_1_2.opacity="100%";
        btn_id_1_1.opacity="25%";
        btn_id_1_2.pointerEvents="auto";
        btn_id_1_1.pointerEvents="none";
        btn_id_1_2.userSelect="auto";
        btn_id_1_1.userSelect="none";
    }

    if (param==="show_closed_2"){
        show_id_2.visibility = "hidden";
        show_id_2.height="0";
        show_id_2.padding="0";

        cardHeader_id_2.borderBottomLeftRadius="0.5rem";
        cardHeader_id_2.borderBottomRightRadius="0.5rem";

        btn_id_2_2.opacity="25%";
        btn_id_2_1.opacity="100%";
        btn_id_2_2.pointerEvents="none";
        btn_id_2_1.pointerEvents="auto";
        btn_id_2_2.userSelect="none";
        btn_id_2_1.userSelect="auto";
    }

    if (param==="show_opened_2"){
        show_id_2.visibility = "visible";
        show_id_2.height="auto";
        show_id_2.width="auto";
        show_id_2.padding="25px";

        cardHeader_id_2.borderBottomLeftRadius="0rem";
        cardHeader_id_2.borderBottomRightRadius="0rem";

        btn_id_2_2.opacity="100%";
        btn_id_2_1.opacity="25%";
        btn_id_2_2.pointerEvents="auto";
        btn_id_2_1.pointerEvents="none";
        btn_id_2_2.userSelect="auto";
        btn_id_2_1.userSelect="none";
    }

    if (param==="show_closed_3"){
        show_id_3.visibility = "hidden";
        show_id_3.height="0";
        show_id_3.padding="0";

        cardHeader_id_3.borderBottomLeftRadius="0.5rem";
        cardHeader_id_3.borderBottomRightRadius="0.5rem";

        btn_id_3_2.opacity="25%";
        btn_id_3_1.opacity="100%";
        btn_id_3_2.pointerEvents="none";
        btn_id_3_1.pointerEvents="auto";
        btn_id_3_2.userSelect="none";
        btn_id_3_1.userSelect="auto";
    }

    if (param==="show_opened_3"){
        show_id_3.visibility = "visible";
        show_id_3.height="auto";
        show_id_3.width="auto";
        show_id_3.padding="25px";

        cardHeader_id_3.borderBottomLeftRadius="0rem";
        cardHeader_id_3.borderBottomRightRadius="0rem";

        btn_id_3_2.opacity="100%";
        btn_id_3_1.opacity="25%";
        btn_id_3_2.pointerEvents="auto";
        btn_id_3_1.pointerEvents="none";
        btn_id_3_2.userSelect="auto";
        btn_id_3_1.userSelect="none";
    }

    if (param==="show_closed_4"){
        show_id_4.visibility = "hidden";
        show_id_4.height="0";
        show_id_4.padding="0";

        cardHeader_id_4.borderBottomLeftRadius="0.5rem";
        cardHeader_id_4.borderBottomRightRadius="0.5rem";

        btn_id_4_2.opacity="25%";
        btn_id_4_1.opacity="100%";
        btn_id_4_2.pointerEvents="none";
        btn_id_4_1.pointerEvents="auto";
        btn_id_4_2.userSelect="none";
        btn_id_4_1.userSelect="auto";
    }

    if (param==="show_opened_4"){
        show_id_4.visibility = "visible";
        show_id_4.height="auto";
        show_id_4.width="auto";
        show_id_4.padding="1.25rem";

        cardHeader_id_4.borderBottomLeftRadius="0rem";
        cardHeader_id_4.borderBottomRightRadius="0rem";

        btn_id_4_2.opacity="100%";
        btn_id_4_1.opacity="25%";
        btn_id_4_2.pointerEvents="auto";
        btn_id_4_1.pointerEvents="none";
        btn_id_4_2.userSelect="auto";
        btn_id_4_1.userSelect="none";
    }

    if (param==="show_closed_5"){
        show_id_5.visibility = "hidden";
        show_id_5.height="0";
        show_id_5.padding="0";

        cardHeader_id_5.borderBottomLeftRadius="0.5rem";
        cardHeader_id_5.borderBottomRightRadius="0.5rem";

        btn_id_5_2.opacity="25%";
        btn_id_5_1.opacity="100%";
        btn_id_5_2.pointerEvents="none";
        btn_id_5_1.pointerEvents="auto";
        btn_id_5_2.userSelect="none";
        btn_id_5_1.userSelect="auto";
    }

    if (param==="show_opened_5"){
        show_id_5.visibility = "visible";
        show_id_5.height="auto";
        show_id_5.width="auto";
        show_id_5.padding="1.5rem";

        cardHeader_id_5.borderBottomLeftRadius="0rem";
        cardHeader_id_5.borderBottomRightRadius="0rem";

        btn_id_5_2.opacity="100%";
        btn_id_5_1.opacity="25%";
        btn_id_5_2.pointerEvents="auto";
        btn_id_5_1.pointerEvents="none";
        btn_id_5_2.userSelect="auto";
        btn_id_5_1.userSelect="none";
    }

    if (param==="show_closed_6"){
        show_id_6_1.visibility = "hidden";
        show_id_6_1.height="0";
        show_id_6_1.padding="0";
        show_id_6_2.visibility = "hidden";
        show_id_6_2.height="0";
        show_id_6_2.padding="0";

        cardHeader_id_6.borderBottomLeftRadius="0.5rem";
        cardHeader_id_6.borderBottomRightRadius="0.5rem";

        btn_id_6_2.opacity="25%";
        btn_id_6_1.opacity="100%";
        btn_id_6_2.pointerEvents="none";
        btn_id_6_1.pointerEvents="auto";
        btn_id_6_2.userSelect="none";
        btn_id_6_1.userSelect="auto";
    }

    if (param==="show_opened_6"){
        show_id_6_1.visibility = "visible";
        show_id_6_1.height="auto";
        show_id_6_1.width="auto";
        show_id_6_1.paddingLeft="1.5rem"
        show_id_6_1.paddingRight="3rem";
        show_id_6_2.visibility = "visible";
        show_id_6_2.height="auto";
        show_id_6_2.width="auto";
        show_id_6_2.paddingLeft="1.25rem";
        show_id_6_2.paddingRight="1.25rem";
        show_id_6_2.paddingBottom="1rem";

        cardHeader_id_6.borderBottomLeftRadius="0rem";
        cardHeader_id_6.borderBottomRightRadius="0rem";

        btn_id_6_2.opacity="100%";
        btn_id_6_1.opacity="25%";
        btn_id_6_2.pointerEvents="auto";
        btn_id_6_1.pointerEvents="none";
        btn_id_6_2.userSelect="auto";
        btn_id_6_1.userSelect="none";
    }

    if (param==="show_closed_7"){
        show_id_7_1.visibility = "hidden";
        show_id_7_1.height="0";
        show_id_7_1.padding="0";
        show_id_7_2.visibility = "hidden";
        show_id_7_2.height="0";
        show_id_7_2.padding="0";

        cardHeader_id_7.borderBottomLeftRadius="0.5rem";
        cardHeader_id_7.borderBottomRightRadius="0.5rem";

        btn_id_7_2.opacity="25%";
        btn_id_7_1.opacity="100%";
        btn_id_7_2.pointerEvents="none";
        btn_id_7_1.pointerEvents="auto";
        btn_id_7_2.userSelect="none";
        btn_id_7_1.userSelect="auto";
    }

    if (param==="show_opened_7"){
        show_id_7_1.visibility = "visible";
        show_id_7_1.height="auto";
        show_id_7_1.width="auto";
        show_id_7_2.paddingLeft="1.5rem";
        show_id_7_2.paddingRight="0.5rem";
        show_id_7_2.visibility = "visible";
        show_id_7_2.height="auto";
        show_id_7_2.width="auto";
        show_id_7_2.paddingLeft="1.25rem";
        show_id_7_2.paddingRight="1.25rem";
        show_id_7_2.paddingBottom="0.66rem";

        cardHeader_id_7.borderBottomLeftRadius="0rem";
        cardHeader_id_7.borderBottomRightRadius="0rem";

        btn_id_7_2.opacity="100%";
        btn_id_7_1.opacity="25%";
        btn_id_7_2.pointerEvents="auto";
        btn_id_7_1.pointerEvents="none";
        btn_id_7_2.userSelect="auto";
        btn_id_7_1.userSelect="none";
    }

    if (param==="show_closed_8"){
        show_id_8.visibility = "hidden";
        show_id_8.height="0";
        show_id_8.padding="0";

        cardHeader_id_8.borderBottomLeftRadius="0.5rem";
        cardHeader_id_8.borderBottomRightRadius="0.5rem";

        btn_id_8_2.opacity="25%";
        btn_id_8_1.opacity="100%";
        btn_id_8_2.pointerEvents="none";
        btn_id_8_1.pointerEvents="auto";
        btn_id_8_2.userSelect="none";
        btn_id_8_1.userSelect="auto";
    }

    if (param==="show_opened_8"){
        show_id_8.visibility = "visible";
        show_id_8.height="auto";
        show_id_8.width="auto";

        cardHeader_id_8.borderBottomLeftRadius="0rem";
        cardHeader_id_8.borderBottomRightRadius="0rem";

        btn_id_8_2.opacity="100%";
        btn_id_8_1.opacity="25%";
        btn_id_8_2.pointerEvents="auto";
        btn_id_8_1.pointerEvents="none";
        btn_id_8_2.userSelect="auto";
        btn_id_8_1.userSelect="none";
    }
}