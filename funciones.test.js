const {   toCelsius,toFahrenheit,movingAverage } = require('./src/utils/funciones');


describe('Conversión de temperaturas', () => {
  test('32°F debe ser 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });

  test('0°C debe ser 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('100°C debe ser 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  test('-40°C debe ser -40°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });

  test('-40°F debe ser -40°C', () => {
    expect(toCelsius(-40)).toBe(-40.0);
  });

  test('toCelsius debe lanzar error si no es numero', () => {
    expect(() => toCelsius('p')).toThrow(TypeError);
  });

  test('toFahrenheit debe lanzar error si no es número', () => {
    expect(() => toFahrenheit(null)).toThrow(TypeError);
  });
});

describe('Media móvil simple', () => {
  test('movingAverage([10,20,30,40], 2)', () => {
    expect(movingAverage([10, 20, 30, 40], 2))
      .toEqual([15.00, 25.00, 35.00]);
  });

  test('movingAverage([1,2,3], 3)', () => {
    expect(movingAverage([1, 2, 3], 3))
      .toEqual([2.00]);
  });

  test('Debe lanzar TypeError si la serie tiene valores no numéricos', () => {
    expect(() => movingAverage([1, 'a', 3], 2))
      .toThrow(TypeError);
  });

  test('Debe lanzar RangeError si la ventana es inválida', () => {
    expect(() => movingAverage([1, 2, 3], 1))
      .toThrow(RangeError);
  });
});