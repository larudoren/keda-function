const kedaFunctions = {
    funcLooping: function(number){
        if (!Number.isInteger(number) || number <= 0){
            return 'Input Error';
        }

        let printString = number % 15 === 0 ? 'fish bash' : (number % 5 === 0 ? 'bash' : (number % 3 === 0 ? 'fish' : ''));

        if (printString.length === 0){
            for (let i = 1; i <= number; i++){
                console.log(i);
            }
        } else {
            console.log(printString);
        }
            
    },

    funcSorting: function(arrInt){
        if (!Array.isArray(arrInt)){
            return 'Not an array input';
        }

        if (arrInt.length <= 1){
            return arrInt;
        }

        let i = 0, j;
        let errInput = false;

        while (i < arrInt.length) {
            j = i + 1;
            if (!Number.isInteger(arrInt[i])){
                errInput = true;
                break;
            }
            while (j < arrInt.length) {
                if (arrInt[j] < arrInt[i]) {
                    let temp = arrInt[i];
                    arrInt[i] = arrInt[j];
                    arrInt[j] = temp;
                }
                j++;
            }

            i++;
        }

        if (errInput) {
            return 'Input Error';
        }

        return arrInt;

    },

    funcReverseString: function (str){

        if (typeof str === 'string' || str instanceof String) {

            let reversedStr = '';

            str = str.toLocaleLowerCase();

            for (let i = str.length - 1; i >= 0; i--) {
                reversedStr += str[i];
            }
            
            if (str == reversedStr) {
                return true;
            }
        } else {
            return 'Input Error';
        }

        return false;
    }
}

// kedaFunctions.funcLooping(3);
// console.log(kedaFunctions.funcSorting([7,1, 'Test']));
// console.log(kedaFunctions.funcReverseString('kakas'));

module.exports = kedaFunctions;
