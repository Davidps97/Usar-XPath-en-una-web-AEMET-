// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la fecha y el valor de uv_max para cada día
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
    var dia = dias[i].getAttribute("fecha");
    var uvMax = dias[i].getElementsByTagName("uv_max")[0].textContent;

    // Crear un elemento HTML para mostrar la información
    var consulta = document.getElementById("consulta");
    var div = document.createElement("div");
    var texto = document.createTextNode("El " + dia + " el índice UV máximo es " + uvMax);
    div.appendChild(texto);
    consulta.appendChild(div);
}