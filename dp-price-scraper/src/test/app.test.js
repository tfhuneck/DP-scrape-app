//Test 1 is testing adding number1 and number2 to produce the sum of the two variables

const adding = require('./app');

describe('sum of number1 and number2', () => {
    it('should add number1 and number2 to produce new sum value', () => {
        const number1 = 20;
        const number2 = 15;
        expect(adding(number1,number2))=== 35;
    });
});


