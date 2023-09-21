//$ ==> DOM <==

const topNumber = document.getElementById('top-number');
const operatorSign = document.getElementById('operator-sign');
const bottomNumber = document.getElementById('bottom-number');
const clear = document.getElementById('clear');
const dlt = document.getElementById('delete');
const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const divide = document.getElementById('divide');
const multiple = document.getElementById('multiple');
const subtraction = document.getElementById('subtraction');
const sum = document.getElementById('sum');
const equal = document.getElementById('equal');

//$ ==> Variables and Flags <==

let sign = '';
let existingBottomNumber = ' ';
let firstClick = true;
let isClickedEqual = false;
bottomNumber.textContent = '0';

//$ ==> Number Append Function <==

function appendNumber(number) {
    if (isClickedEqual) {
        bottomNumber.textContent = ' ';
        existingBottomNumber = ' ';
        existingBottomNumber += number;
        bottomNumber.textContent = existingBottomNumber;
        isClickedEqual = false;
    } else {
        existingBottomNumber += number;
        bottomNumber.textContent = existingBottomNumber;
    }
};

//$ ==> Number Buttons <==

nine.addEventListener('click', () => {
    appendNumber('9');
});

eight.addEventListener('click', () => {
    appendNumber('8');
});

seven.addEventListener('click', () => {
    appendNumber('7');
});

six.addEventListener('click', () => {
    appendNumber('6');
});

five.addEventListener('click', () => {
    appendNumber('5');
});

four.addEventListener('click', () => {
    appendNumber('4');
});

three.addEventListener('click', () => {
    appendNumber('3');
});

two.addEventListener('click', () => {
    appendNumber('2');
});

one.addEventListener('click', () => {
    appendNumber('1');
});

//$ ==> Zero Button <==

zero.addEventListener('click', () => {
    if (bottomNumber.textContent.charAt(0) !== '0' || bottomNumber.textContent.charAt(1) == '.') {
        existingBottomNumber += '0';
        bottomNumber.textContent = existingBottomNumber;
    }
});

//$ ==> Dot Button <==

dot.addEventListener('click', () => {
    if (bottomNumber.textContent == '0') {
        existingBottomNumber = '0.';
        bottomNumber.textContent = existingBottomNumber;
    } else if (bottomNumber.textContent.includes('.')) {

    } else {
        existingBottomNumber += '.';
        bottomNumber.textContent = existingBottomNumber;
    }
});

//$ ==> Operator Append Function <==

function appendOperator(operator) {
    if (firstClick) {
        topNumber.textContent = bottomNumber.textContent;
        bottomNumber.textContent = '0';
        existingBottomNumber = ' ';
        operatorSign.textContent = operator;
        sign = operator;
        firstClick = false;
    }
    else {
        let result;
        if (sign == '+') {
            result = Number(topNumber.textContent) + Number(bottomNumber.textContent);
        }
        else if (sign == '-') {
            result = Number(topNumber.textContent) - Number(bottomNumber.textContent);
        }
        else if (sign == '*') {
            result = Number(topNumber.textContent) * Number(bottomNumber.textContent);
        }
        else if (sign == '/') {
            result = Number(topNumber.textContent) / Number(bottomNumber.textContent);
        }
        topNumber.textContent = result;
        bottomNumber.textContent = '0';
        existingBottomNumber = ' ';
        operatorSign.textContent = operator;
        sign = operator;
    }
};

//$ ==> Operator Buttons <==

sum.addEventListener('click', () => {
    appendOperator('+');
});

subtraction.addEventListener('click', () => {
    appendOperator('-');
});

multiple.addEventListener('click', () => {
    appendOperator('*');
});

divide.addEventListener('click', () => {
    appendOperator('/')
});

//$ ==> Equal Button <==

equal.addEventListener('click', () => {
    isClickedEqual = true;
    let result = bottomNumber.textContent;
    if (sign == ' ') {
        result;
    }
    else if (sign == '+') {
        result = Number(topNumber.textContent) + Number(bottomNumber.textContent);
        topNumber.textContent = '';
        operatorSign.textContent = '';
    }
    else if (sign == '-') {
        result = Number(topNumber.textContent) - Number(bottomNumber.textContent);
        topNumber.textContent = '';
        operatorSign.textContent = '';
    }
    else if (sign == '*') {
        result = Number(topNumber.textContent) * Number(bottomNumber.textContent);
        topNumber.textContent = '';
        operatorSign.textContent = '';
    }
    else if (sign == '/') {
        result = Number(topNumber.textContent) / Number(bottomNumber.textContent);
        topNumber.textContent = '';
        operatorSign.textContent = '';
    }
    else {

    }

    bottomNumber.textContent = result;
});

//$ ==> Clear Button <==

clear.addEventListener('click', () => {
    existingBottomNumber = '';
    bottomNumber.textContent = '0';
    topNumber.textContent = '';
    operatorSign.textContent = '';
    firstClick = true;
    isClickedEqual = false;
});

//$ ==> Delete Button <==

dlt.addEventListener('click', () => {
    if (bottomNumber.textContent.length > 2) {
        bottomNumber.textContent = bottomNumber.textContent.slice(0, bottomNumber.textContent.length - 1);
        existingBottomNumber = bottomNumber.textContent;
    } else {
        bottomNumber.textContent = '0';
        existingBottomNumber = ' ';
    }
});

//$ ==> Keyboard(Numbers) <==

document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
        appendNumber('9');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '8') {
        appendNumber('8');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        appendNumber('7');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        appendNumber('6');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        appendNumber('5');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        appendNumber('4');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        appendNumber('3');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '2') {
        appendNumber('2');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        appendNumber('1');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        if (bottomNumber.textContent.charAt(0) !== '0' || bottomNumber.textContent.charAt(1) == '.') {
            existingBottomNumber += '0';
            bottomNumber.textContent = existingBottomNumber;
        }
    }
});

//$ ==> Keyboard(Dot) <==

document.addEventListener('keydown', (event) => {
    if (event.key === '.' || event.key === ',') {
        if (bottomNumber.textContent == '0') {
            existingBottomNumber = '0.';
            bottomNumber.textContent = existingBottomNumber;
        } else if (bottomNumber.textContent.includes('.')) {

        } else {
            existingBottomNumber += '.';
            bottomNumber.textContent = existingBottomNumber;
        }
    }
});

//$ ==> Keyboard(Operators) <==

document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        appendOperator('+');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
        appendOperator('-');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '*') {
        appendOperator('*');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
        appendOperator('/');
    }
});

//$ ==> Keyboard(Equal) <==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        isClickedEqual = true;
        let result = bottomNumber.textContent;
        if (sign == ' ') {
            result;
        }
        else if (sign == '+') {
            result = Number(topNumber.textContent) + Number(bottomNumber.textContent);
            topNumber.textContent = '';
            operatorSign.textContent = '';
        }
        else if (sign == '-') {
            result = Number(topNumber.textContent) - Number(bottomNumber.textContent);
            topNumber.textContent = '';
            operatorSign.textContent = '';
        }
        else if (sign == '*') {
            result = Number(topNumber.textContent) * Number(bottomNumber.textContent);
            topNumber.textContent = '';
            operatorSign.textContent = '';
        }
        else if (sign == '/') {
            result = Number(topNumber.textContent) / Number(bottomNumber.textContent);
            topNumber.textContent = '';
            operatorSign.textContent = '';
        }
        else {

        }

        bottomNumber.textContent = result;
    }
});

//$ ==> Keybord(Clear) <==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        existingBottomNumber = '';
        bottomNumber.textContent = '0';
        topNumber.textContent = '';
        operatorSign.textContent = '';
        firstClick = true;
        isClickedEqual = false;
    }
});

//$ ==> Keybord(Delete) <==

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        if (bottomNumber.textContent.length > 2) {
            bottomNumber.textContent = bottomNumber.textContent.slice(0, bottomNumber.textContent.length - 1);
            existingBottomNumber = bottomNumber.textContent;
        } else {
            bottomNumber.textContent = '0';
            existingBottomNumber = ' ';
        }
    }
});
