Chart.defaults.color='#fff'


const printCharts = () => {

    renderModelsChart()
}

const renderModelsChart = () => {
    const data ={
        labels: ['Arica', 'Tarapaca', 'Antofagasta', 'Atacama', 'Coquimbo', 'Vaparaiso', 'Metropolitana', 'OHiggins', 'Maule', 'Ñuble', 'Bio-Bio', 'Araucania', 'Los Rios', 'Los Lagos', 'Aysen', 'Magallanes'],
        datasets: [{
            data: [66, 2067, 1781, 107, 160, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }
}

const options = {
    plugins: {
        legend: {position: 'left'}
    }
}

new Chart('modelsChart',{type:'doughnut',data,options})