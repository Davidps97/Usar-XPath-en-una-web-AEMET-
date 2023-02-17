// Cargar el archivo XML
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../aemet_arucas.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

// Consultar el día y la sensación térmica
var dias = xmlDoc.getElementsByTagName("dia");
for (var i = 0; i < dias.length; i++) {
  var dia = dias[i].getAttribute("fecha");
  var sensTermica = dias[i].getElementsByTagName("sens_termica")[0];
  var maxima = sensTermica.getElementsByTagName("maxima")[0].textContent;
  var minima = sensTermica.getElementsByTagName("minima")[0].textContent;

  // Crear un elemento HTML para mostrar la información
  var consulta = document.getElementById("consulta");
  var div = document.createElement("div");
  var texto = document.createTextNode(
    "El " +
      dia +
      " la sensación térmica máxima es " +
      maxima +
      " y la mínima es " +
      minima
  );
  div.appendChild(texto);
  consulta.appendChild(div);
}
