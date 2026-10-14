const calcularIMC = require('./imc');

describe('Validador de IMC', () => {
    test('Teste de abaixo do peso normal', () => {
        const resultado = calcularIMC(52.00, 1.75);
        expect(resultado).toEqual({ imc: 16.98, status: "Abaixo do peso normal" });
    });

    test('Teste de peso normal', () => {
        const resultado = calcularIMC(68.00, 1.75);
        expect(resultado).toEqual({ imc: 22.2, status: "Peso normal" });
    });

    test('Teste de excesso de peso', () => {
        const resultado = calcularIMC(80.00, 1.75);
        expect(resultado).toEqual({ imc: 26.12, status: "Excesso de Peso" });
    });

    test('Teste de obesidade', () => {
        const resultado = calcularIMC(95.00, 1.75);
        expect(resultado).toEqual({ imc: 31.02, status: "Obesidade" });
    });
} );