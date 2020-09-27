const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexColorArray = []
let cc = [1, 2, 3, 4, 5, 6]
function createHexCode() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += colors[generateCode()]
    };
    hexColorArray.push(hexColor)
}

function createHexCodeArray(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        createHexCode()
    }
    return hexColorArray
}

function generateCode() {
    return Math.floor(Math.random() * colors.length)
};

function createChart(labels, name, fi, type, colors, fr) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: name,
                data: fi,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                }]
            }
        }
    });
};

function createChartLabels(arr1, arr2, linhas){
    let labels = [];
    let temp;
    for(let i = 0; i < linhas; i++){
        temp = `${arr1[i]} --| ${arr2[i]}`
        labels.push(temp)
    }
    return labels
}