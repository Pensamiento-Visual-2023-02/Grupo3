// Variables para el ancho y alto del SVG
const width = 700;
const height = 580;

// Cargar los datos del GeoJSON
d3.json('https://raw.githubusercontent.com/fcortes/Chile-GeoJSON/master/Regional.geojson')
  .then(function(regioneschile) {
    // Proyección y generación de ruta (path)
    const chileprojection = d3.geoAlbers()
      .scale(1839)
      .rotate([71.057, 0])
      .center([0, -35.6])
      .translate([width / 2, height / 2]);

    const chile_geoPath = d3.geoPath().projection(chileprojection);

    // Crear el SVG y el grupo (g)
    const svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g");

    // Dibujar las regiones de Chile
    g.selectAll("path")
      .data(regioneschile.features)
      .enter()
      .append("path")
      .attr("fill", "#ccc")
      .attr("stroke", "#333")
      .attr("d", chile_geoPath);

    // Ahora debes cargar los datos de los roedores (rodentData) y dibujarlos en el mismo SVG
    // Asegúrate de que rodentData contenga los datos antes de intentar dibujarlos
    d3.json('https://climatologia.meteochile.gob.cl/application/servicios/getEstacionesRedEma?usuario=correo@correo.cl&token=apiKey_personal')
      .then(function(temperaturaData) {
        const temperaturas = svg.append("g");

        temperaturas.selectAll("path")
          .data(temperaturaData.features)
          .enter()
          .append("path")
          .attr("fill", "#900")
          .attr("stroke", "#999")
          .attr("d", chile_geoPath)
          .attr("class", "incident")
          .on("mouseover", d => d3.select("#label").text(d.properties.LOCATION_STREET_NAME))
          .on("mouseout", d => d3.select("#label").text(""));
      })
      .catch(function(error) {
        console.error("Error cargando los datos de roedores:", error);
      });
  })
  .catch(function(error) {
    console.error("Error cargando los datos de regiones de Chile:", error);
  });
