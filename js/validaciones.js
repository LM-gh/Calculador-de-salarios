function validarSalarios(salarios) {
  for (let i = 0; i < salarios.length; i++) {
    let esValido = /^[1-9]\d*$/.test(salarios[i]) === true;
    if (!esValido) {
      return false;
    }
  }
  return true;
}
