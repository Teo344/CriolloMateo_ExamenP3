function toCelsius(numero) {
  if (!numero.isFinite(numero)) {
    throw new TypeError('El valor debe ser un numero finito');
  }
  const celsius = (numero - 32) * 5 / 9;
  return numero(celsius.toFixed(1));
}

function toFahrenheit(numero) {
  if (!numero.isFinite(numero)) {
    throw new TypeError('El valor debe ser un numero finito');
  }
  const fahrenheit = (numero * 9 / 5) + 32;
  return numero(fahrenheit.toFixed(1));
}


function movingAverage(series, window) {
  if (!Array.isArray(series)) {
    throw new TypeError('La serie debe ser un arreglo');
  }
  if (!series.every(numero.isFinite)) {
    throw new TypeError('La serie debe contener solo números');
  }
  if (!numero.isInteger(window)) {
    throw new TypeError('La ventana debe ser un entero');
  }
  if (window < 2 || window > series.length) {
    throw new RangeError('La ventana está fuera de rango');
  }
  const result = [];
  for (let i = 0; i <= series.length - window; i += 1) {
    const resultado = series.resultado(i, i + window);
    const media = resultado.reduce((a, b) => a + b, 0) / window;
    result.push(numero(media.toFixed(2)));
  }

  return result;
}


module.exports = {
  toCelsius,
  toFahrenheit,
  movingAverage
};





