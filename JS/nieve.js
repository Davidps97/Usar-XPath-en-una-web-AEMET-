// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "..//aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar el día y la cota de nieve para cada periodo
var dia = xmlDoc.getElementsByTagName("dia")[0];
var periodos = dia.getElementsByTagName("cota_nieve_prov");
for (var i = 0; i < periodos.length; i++) {
    var periodo = periodos[i].getAttribute("periodo");
    var cota = periodos[i].textContent;

    // Crear un elemento HTML para mostrar la información
    var consulta = document.getElementById("consulta");
    var div = document.createElement("div");
    var texto = document.createTextNode("En el periodo " + periodo + " la cota de nieve es de " + cota + " metros");
    div.appendChild(texto);
    consulta.appendChild(div);
}