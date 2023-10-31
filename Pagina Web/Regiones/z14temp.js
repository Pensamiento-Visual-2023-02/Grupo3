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
    { min: 10, max: 20 },
    { min: 10, max: 20 },
    { min: 9, max: 18 },
    { min: 7, max: 15 },
    { min: 6, max: 12 },
    { min: 4, max: 10 },
    { min: 4, max: 10 },
    { min: 4, max: 11 },
    { min: 5, max: 12 },
    { min: 6, max: 14 },
    { min: 8, max: 16 },
    { min: 9, max: 18 }
  ];

  var minTemp = temperaturas[monthIndex - 1].min;
  var maxTemp = temperaturas[monthIndex - 1].max;

  minTempOutput.textContent = minTemp + "°C";
  maxTempOutput.textContent = maxTemp + "°C";
}
