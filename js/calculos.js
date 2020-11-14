function calcularMayorNumero(numeros) {
  let mayorNumero;
  for (let i = 0; i < numeros.length; i++) {
    if (i === 0) {
      mayorNumero = numeros[i];
    } else if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }
  return mayorNumero;
}

function calcularMenorNumero(numeros) {
  let menorNumero;
  for (let i = 0; i < numeros.length; i++) {
    if (i === 0) {
      menorNumero = numeros[i];
    } else if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }
  return menorNumero;
}

function calcularPromedioNumeros(numeros) {
  let sumaNumeros = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaNumeros = sumaNumeros + numeros[i];
  }
  return sumaNumeros / numeros.length;
}

function calcularSalarioMensualPromedio(salarios) {
  let sumaSalarios = 0;
  for (let i = 0; i < salarios.length; i++) {
    sumaSalarios += salarios[i];
  }
  return sumaSalarios / 12;
}
