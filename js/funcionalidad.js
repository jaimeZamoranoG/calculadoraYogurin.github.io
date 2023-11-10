document.addEventListener('DOMContentLoaded', (event) => {
    let buttons = document.querySelectorAll('.button');
    let output = document.getElementById('output');
    let operation = null;
    let firstNumber = '';
    let secondNumber = '';

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            switch(e.target.id) {
                case 'one':
                case 'two':
                case 'three':
                case 'four':
                case 'five':
                case 'six':
                case 'seven':
                case 'eight':
                case 'nine':
                case 'zero':
                    if (operation === null) {
                        firstNumber += e.target.innerText;
                        output.innerText = firstNumber;
                    } else {
                        secondNumber += e.target.innerText;
                        output.innerText = secondNumber;
                    }
                    break;
                case 'addition':
                case 'subtraction':
                case 'multiplication':
                case 'division':
                    operation = e.target.id;
                    break;
                case 'equal':
                    switch(operation) {
                        case 'addition':
                            output.innerText = parseFloat(firstNumber) + parseFloat(secondNumber);
                            break;
                        case 'subtraction':
                            output.innerText = parseFloat(firstNumber) - parseFloat(secondNumber);
                            break;
                        case 'multiplication':
                            output.innerText = parseFloat(firstNumber) * parseFloat(secondNumber);
                            break;
                        case 'division':
                            output.innerText = parseFloat(firstNumber) / parseFloat(secondNumber);
                            break;
                    }
                    firstNumber = output.innerText;
                    secondNumber = '';
                    operation = null;
                    break;
                case 'percentage':
                    if (operation === null && firstNumber !== '') {
                        firstNumber = (parseFloat(firstNumber) / 100).toString();
                        output.innerText = firstNumber;
                    } else if (operation !== null && secondNumber !== '') {
                        secondNumber = (parseFloat(secondNumber) / 100).toString();
                        output.innerText = secondNumber;
                    }
                    break;
                case 'backspace':
                    if (operation === null && firstNumber !== '') {
                        firstNumber = firstNumber.slice(0, -1);
                        output.innerText = firstNumber;
                    } else if (operation !== null && secondNumber !== '') {
                        secondNumber = secondNumber.slice(0, -1);
                        output.innerText = secondNumber;
                    }
                    break;
                case 'clear':
                    firstNumber = '';
                    secondNumber = '';
                    operation = null;
                    output.innerText = '';
                    break;
            }
        });
    });
});