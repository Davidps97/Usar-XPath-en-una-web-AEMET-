// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar la fecha de elaboración
var elaborado = xmlDoc.evaluate("/root/elaborado", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var consulta = document.getElementById("consulta");
var div1 = document.createElement("div");
var texto1 = document.createTextNode("Fecha de elaboración: " + elaborado);
div1.appendChild(texto1);
consulta.appendChild(div1);

// Consultar el nombre y la provincia
var nombre = xmlDoc.evaluate("/root/nombre", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var provincia = xmlDoc.evaluate("/root/provincia", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var div2 = document.createElement("div");
var texto2 = document.createTextNode("Nombre: " + nombre + ", Provincia: " + provincia);
div2.appendChild(texto2);
consulta.appendChild(div2);