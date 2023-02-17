// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la fecha y la humedad relativa máxima y mínima para cada día
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
    var dia = dias[i].getAttribute("fecha");
    var humedad = dias[i].getElementsByTagName("humedad_relativa")[0];
    var maxima = humedad.getElementsByTagName("maxima")[0].textContent;
    var minima = humedad.getElementsByTagName("minima")[0].textContent;

    // Crear un elemento HTML para mostrar la información
    var consulta = document.getElementById("consulta");
    var div = document.createElement("div");
    var texto = document.createTextNode("El " + dia + " tiene una humedad relativa máxima de " + maxima + " y una humedad relativa mínima de " + minima);
    div.appendChild(texto);
    consulta.appendChild(div);
}