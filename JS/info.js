// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar el productor, web, enlace y copyright
var productor = xmlDoc.evaluate("/root/origen/productor", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var web = xmlDoc.evaluate("/root/origen/web", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var enlace = xmlDoc.evaluate("/root/origen/enlace", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;
var copyright = xmlDoc.evaluate("/root/origen/copyright", xmlDoc, null, XPathResult.STRING_TYPE, null).stringValue;

// Crear elementos HTML para mostrar la información
var consulta = document.getElementById("consulta");
var div1 = document.createElement("div");
var texto1 = document.createTextNode("Productor: " + productor);
div1.appendChild(texto1);
consulta.appendChild(div1);

var div2 = document.createElement("div");
var texto2 = document.createTextNode("Web: " + web);
div2.appendChild(texto2);
consulta.appendChild(div2);

var div3 = document.createElement("div");
var texto3 = document.createTextNode("Enlace: " + enlace);
div3.appendChild(texto3);
consulta.appendChild(div3);

var div4 = document.createElement("div");
var texto4 = document.createTextNode("Copyright: " + copyright);
div4.appendChild(texto4);
consulta.appendChild(div4);