// Importar las librerías necesarias
const assert = require('assert');

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, altura) {
    return longitud * altura;
}

// Prueba unitaria para el cálculo del área del rectángulo
describe('Prueba de cálculo de área del rectángulo', function() {
    it('Debe devolver el área correcta para un rectángulo con longitud 5 y altura 3', function() {
        // Definir los valores esperados
        const longitud = 5;
        const altura = 3;
        const areaEsperada = 15;

        // Calcular el área del rectángulo
        const areaCalculada = calcularAreaRectangulo(longitud, altura);

        // Afirmar que el área calculada es igual al área esperada
        assert.strictEqual(areaCalculada, areaEsperada);
    });
});
