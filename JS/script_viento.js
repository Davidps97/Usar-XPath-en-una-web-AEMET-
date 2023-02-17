// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la dirección y velocidad del viento para cada período
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
    var dia = dias[i].getAttribute("fecha");
    var periodos = dias[i].getElementsByTagName("viento");
    for (var j = 0; j < periodos.length; j++) {
        var periodo = periodos[j].getAttribute("periodo");
        var direccion = periodos[j].getElementsByTagName("direccion")[0].textContent;
        var velocidad = periodos[j].getElementsByTagName("velocidad")[0].textContent;

        // Crear un elemento HTML para mostrar la información
        var consulta = document.getElementById("consulta");
        var div = document.createElement("div");
        var texto = document.createTextNode("El " + dia + " en el periodo " + periodo + " el viento tiene una dirección de " + direccion + " y una velocidad de " + velocidad + " km/h");
        div.appendChild(texto);
        consulta.appendChild(div);
    }
}