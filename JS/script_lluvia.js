// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la fecha y la probabilidad de precipitación para cada período
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
    var dia = dias[i].getAttribute("fecha");
    var periodos = dias[i].getElementsByTagName("prob_precipitacion");
    for (var j = 0; j < periodos.length; j++) {
        var periodo = periodos[j].getAttribute("periodo");
        var probabilidad = periodos[j].textContent;

        // Crear un elemento HTML para mostrar la información
        var consulta = document.getElementById("consulta");
        var div = document.createElement("div");
        var texto = document.createTextNode("El " + dia + " en el período " + periodo + " hay una probabilidad de precipitación del " + probabilidad + "%");
        div.appendChild(texto);
        consulta.appendChild(div);
    }
}
