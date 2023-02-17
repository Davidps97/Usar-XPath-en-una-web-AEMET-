// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la fecha y la temperatura máxima y mínima para cada día
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
    var dia = dias[i].getAttribute("fecha");
    var temperatura = dias[i].getElementsByTagName("temperatura")[0];
    var maxima = temperatura.getElementsByTagName("maxima")[0].textContent;
    var minima = temperatura.getElementsByTagName("minima")[0].textContent;

    // Crear un elemento HTML para mostrar la información
    var consulta = document.getElementById("consulta");
    var div = document.createElement("div");
    var texto = document.createTextNode("El " + dia + " la temperatura máxima es " + maxima + "°C y la temperatura mínima es " + minima + "°C");
    div.appendChild(texto);
    consulta.appendChild(div);
}