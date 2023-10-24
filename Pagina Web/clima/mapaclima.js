regioneschile = d3.json('https://raw.githubusercontent.com/fcortes/Chile-GeoJSON/master/Regional.geojson')
temperaturaData = d3.json('https://climatologia.meteochile.gob.cl/application/servicios/getEstacionesRedEma?usuario=correo@correo.cl&token=apiKey_personal')
width = 700
height = 580
{
let svg = d3.select( "body" )
    .append( "svg" )
    .attr( "width", width)
    .attr( "height", height);

// Append empty placeholder g element to the SVG
// g will contain geometry elements
let g = svg.append( "g" );
chileprojection = d3.geoAlbers()
.scale( 1900 )
.rotate( [-71.542969,0] )
.center( [0, -35.675147] )
.translate( [width/2,height/2] )
chile_geoPath = d3.geoPath()
    .projection( chileprojection );
let svg = d3.select(DOM.svg(width, height));

// Append empty placeholder g element to the SVG
    // g will contain geometry elements
let g = svg.append("g");
let temperaturas = svg.append("g");

    // Classic D3... Select non-existent elements, bind the data, append the elements, and apply attributes
g.selectAll( "path" )
        .data( regioneschile.features )
        .enter()
        .append( "path" )
        .attr( "fill", "#ccc" )
        .attr( "stroke", "#333")
        .attr( "d", chile_geoPath );

temperaturas.selectAll( "path" )  
        .data( temperaturaData.features )
        .enter()
        .append( "path" )
        .attr( "fill", "#900")
        .attr( "stroke", "#999" )
        .attr( "d", chile_geoPath )
        .attr("class", "incident")
        .on("mouseover", d => d3.select("#label").text(d.properties.NombreRegion))
        .on("mouseout", d => d3.select("#label").text(""));;

return svg.node();
}

