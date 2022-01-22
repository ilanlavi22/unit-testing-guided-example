const { multiply } = require('./../calculator.js');

describe("Multiply", () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
    });

    test("should multiply a negative and a positive number correctly", () => {
        const result = multiply(-6, 10);
        expect(result).toBe(-60);
    });

    test("should return 0 when function is called without arguments", () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
    });
});