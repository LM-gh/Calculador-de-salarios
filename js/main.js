// 1. - Boton agregar, quitar y calcular.
// 2. - Agregar crea label + inputs por cada integrante.
// 3. - Calcular muestra, en un elemento pre-existente, el mayor salario anual, menor salario // anual, salario anual promedio y salario mensual promedio.
// 4. - Si hay inputs vacios, ignorarlos en el calculo.

let $botonAgregar = document.querySelector("#boton-agregar");
let $botonQuitar = document.querySelector("#boton-quitar");
let $botonCalcular = document.querySelector("#boton-calcular");
let $botonResetear = document.querySelector("#boton-reset");
let $placeholderIntegrantes = document.querySelector("#integrantes");
let $resultados = document.querySelector("#resultados");
let $mayorSalarioAnual = document.querySelector("#mayor-salario-anual");
let $menorSalarioAnual = document.querySelector("#menor-salario-anual");
let $salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
let $salarioMensualPromedio = document.querySelector(
  "#salario-mensual-promedio"
);
let integrantes = 0;

$botonAgregar.onclick = crearIntegrante;
$botonQuitar.onclick = quitarIntegrante;
$botonResetear.onclick = resetear;
$botonCalcular.onclick = function (event) {
  let salarios = obtenerSalarios();
  if (!validarSalarios(salarios)) {
    alert(
      "Los valores ingresados en el campo de salarios deben ser números enteros mayores a 0."
    );
    return false;
  } else {
    let resultados = calcularResultados(salarios);
    $mayorSalarioAnual.textContent = resultados.mayorSalarioAnual;
    $menorSalarioAnual.textContent = resultados.menorSalarioAnual;
    $salarioAnualPromedio.textContent = resultados.salarioAnualPromedio;
    $salarioMensualPromedio.textContent = resultados.salarioMensualPromedio;
    mostrarElemento($resultados);
  }
};

function resetear() {
  borrarIntegrantesAnteriores();
  deshabilitarElemento($botonQuitar);
  deshabilitarElemento($botonCalcular);
  $resultados.className = "oculto";
  document.querySelectorAll(".strong").forEach((i) => {
    i.textContent = "";
  });
  integrantes = 0;
}
function crearIntegrante() {
  mostrarElemento($placeholderIntegrantes);
  $botonQuitar.removeAttribute("disabled");
  $botonCalcular.removeAttribute("disabled");
  integrantes++;

  let $integrante = document.createElement("div");
  $integrante.id = `integrante-${integrantes}`;
  $integrante.className = "integrante";

  let $label = document.createElement("label");
  $label.setAttribute("for", `for-integrante-${integrantes}`);
  $label.textContent = `Ingresa el salario para el integrante ${integrantes}: `;

  let $input = document.createElement("input");
  $input.setAttribute("id", `for-integrante-${integrantes}`);
  $input.type = "number";
  $input.className = "integrantes";
  $input.setAttribute("placeholder", "Salario Anual: ");

  $label.appendChild($input);
  $integrante.append($label);
  $placeholderIntegrantes.appendChild($integrante);
}

function quitarIntegrante() {
  let integranteAQuitar = document.querySelector(`#integrante-${integrantes}`);

  if (integrantes === 1) {
    integranteAQuitar.remove();
    integrantes--;
    deshabilitarElemento($botonQuitar);
    deshabilitarElemento($botonCalcular);
  } else {
    integranteAQuitar.remove();
    integrantes--;
  }
}

function borrarIntegrantesAnteriores() {
  let $integrantes = document.querySelectorAll(".integrante");

  $integrantes.forEach(function (index) {
    index.remove();
  });
}

function obtenerSalarios() {
  let integrantes = document.querySelectorAll(".integrantes");
  let salarios = [];

  for (let i = 0; i < integrantes.length; i++) {
    if (!validarSalarios(Number(integrantes[i].value))) {
      continue;
    } else {
      salarios.push(Number(integrantes[i].value));
    }
  }
  return salarios;
}

function calcularResultados(salarios) {
  let resultados = {
    mayorSalarioAnual: calcularMayorNumero(salarios),
    menorSalarioAnual: calcularMenorNumero(salarios),
    salarioAnualPromedio: calcularPromedioNumeros(salarios),
    salarioMensualPromedio: calcularSalarioMensualPromedio(salarios),
  };
  return resultados;
}

function mostrarElemento(elemento) {
  elemento.className = "";
}

function deshabilitarElemento(elemento) {
  elemento.setAttribute("disabled", "true");
}
