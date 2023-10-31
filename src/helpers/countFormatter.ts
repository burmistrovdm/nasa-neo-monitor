/**
 * @description Получить числительное в нужном склонении по необходимому значению
 * @param {number} value Исходное значение
 * @param {string[]} variants Склоненные варианты числительного в виде готовых значений под значения [1, 2, 5]
 * @example
 * // returns 'яблок'
 * countFormatter(15, ['яблоко', 'яблока', 'яблок']);
 */
const countFormatter = (value: number, variants: [string, string, string]) => {
    const remainder1 = value % 1;
    if (remainder1 > 0) {
        return variants[2];
    }
    const remainder100 = value % 100;
    if (remainder100 > 4 && remainder100 < 20) {
        return variants[2];
    }
    const remainder10 = value % 10;
    if (remainder10 >= 5) {
        return variants[2];
    }
    const cases = [2, 0, 1, 1, 1];
    return variants[cases[remainder10]];
};

export default countFormatter;
