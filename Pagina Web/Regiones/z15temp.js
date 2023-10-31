var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var minTempOutput = document.getElementById("minTemp"); // Agregado
var maxTempOutput = document.getElementById("maxTemp"); // Agregado

var meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

output.innerHTML = meses[slider.value - 1];

slider.oninput = function() {
  output.innerHTML = meses[this.value - 1];
  updateTemperatureInfo(this.value); // Llamada a la función de actualización
}

function updateTemperatureInfo(monthIndex) {
  var temperaturas = [
    { min: 8, max: 17 },
    { min: 8, max: 17 },
    { min: 4, max: 15 },
    { min: 2, max: 12 },
    { min: -0, max: 8 },
    { min: -1, max: 6 },
    { min: 0, max: 5 },
    { min: 2, max: 7 },
    { min: 4, max: 10 },
    { min: 6, max: 12 },
    { min: 7, max: 14 },
    { min: 6, max: 10 }
  ];

  var minTemp = temperaturas[monthIndex - 1].min;
  var maxTemp = temperaturas[monthIndex - 1].max;

  minTempOutput.textContent = minTemp + "°C";
  maxTempOutput.textContent = maxTemp + "°C";
}
