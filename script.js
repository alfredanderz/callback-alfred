function generarTabla(numero, callback) {
  let tabla = [];
  for (let i = 1; i <= 25; i++) {
    tabla.push(`${numero} × ${i} = ${numero * i}`);
  }
  callback(tabla);
}

function mostrarTabla(tabla) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  tabla.forEach((linea) => {
    const p = document.createElement("p");
    p.textContent = linea;
    resultadoDiv.appendChild(p);
  });
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const numero = parseInt(document.getElementById("numero").value);
  generarTabla(numero, mostrarTabla);
});
