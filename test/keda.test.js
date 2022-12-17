const kedaFunctions = require('../src/keda');
const { default: expect } = require('expect');

describe("Keda Tests", () => {
    test("Function Looping integer number", () => {

        // Testing for input % 15 === 0
        let outputData = "";
        storeLog = inputs => (outputData += inputs);
        console["log"] = jest.fn(storeLog);
        kedaFunctions.funcLooping(15)

        // expected result
        expect(outputData).toBe('fish bash');

        // Testing for input % 5 === 0
        outputData = "";
        kedaFunctions.funcLooping(5)

        // expected result
        expect(outputData).toBe('bash');

        // Testing for input % 5 === 0
        outputData = "";
        kedaFunctions.funcLooping(3)

        // expected result
        expect(outputData).toBe('fish');

        // Testing for input 1
        outputData = "";
        kedaFunctions.funcLooping(1)

        // expected result
        expect(outputData).toBe('1');

        // Testing for invalid input
        let result = kedaFunctions.funcLooping('Test')

        // expected result
        expect(result).toBe('Input Error');
    });

    test("Function Sorting integer Array", () => {
        // arrange and act
        let arr1 = [3, 1];
        let result = kedaFunctions.funcSorting(arr1)
        
        // Testing for array of integer input
        expect(result).toStrictEqual(arr1.sort());

        // Testing for not an array input
        let result1 = kedaFunctions.funcSorting('Test')

        expect(result1).toBe('Not an array input');

        // Testing for not an array input
        let result2 = kedaFunctions.funcSorting(2)

        expect(result2).toBe('Not an array input');

        // Testing for empty array input
        let result3 = kedaFunctions.funcSorting([])

        expect(result3).toStrictEqual([]);

        // Testing for one value array input
        let result4 = kedaFunctions.funcSorting([1])

         expect(result4).toStrictEqual([1]);

        // Testing for value of array input contain not an integer
        let result5 = kedaFunctions.funcSorting([3,1,'Test'])

         expect(result5).toBe('Input Error');
    });

    test("Function Reverse String = String ", () => {

        // Testing not equal string with reversed
        let result = kedaFunctions.funcReverseString('Test')

        expect(result).toBe(false);

        // Testing not string input
        let result1 = kedaFunctions.funcReverseString(1)

        expect(result1).toBe('Input Error');

        // Testing equal string with reversed
        let result2 = kedaFunctions.funcReverseString('Kakak')

        expect(result2).toBe(true);
    });
});
