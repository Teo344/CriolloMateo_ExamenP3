function toCelsius(f) {
  if (!Number.isFinite(f)) {
    throw new TypeError('El valor debe ser un numero finito');
  }

  const celsius = (f - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
}

function toFahrenheit(c) {
  if (!Number.isFinite(c)) {
    throw new TypeError('El valor debe ser un numero finito');
  }

  const fahrenheit = (c * 9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
}


function movingAverage(series, window) {
  if (!Array.isArray(series)) {
    throw new TypeError('La serie debe ser un arreglo');
  }
  if (!series.every(Number.isFinite)) {
    throw new TypeError('La serie debe contener solo números');
  }
  if (!Number.isInteger(window)) {
    throw new TypeError('La ventana debe ser un entero');
  }
  if (window < 2 || window > series.length) {
    throw new RangeError('La ventana está fuera de rango');
  }
  const result = [];
  for (let i = 0; i <= series.length - window; i += 1) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }

  return result;
}


module.exports = {
  toCelsius,
  toFahrenheit,
  movingAverage
};





