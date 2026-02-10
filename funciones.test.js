const {   toCelsius,toFahrenheit,movingAverage } = require('./src/utils/funciones');


describe('Pruebas unitarias', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(toCelsius(0)).toBe(1);
  });   


});