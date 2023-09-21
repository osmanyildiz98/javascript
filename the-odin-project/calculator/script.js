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
const allButton = document.querySelector('.all-button');

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
    playClick();
});

eight.addEventListener('click', () => {
    appendNumber('8');
    playClick();
});

seven.addEventListener('click', () => {
    appendNumber('7');
    playClick();
});

six.addEventListener('click', () => {
    appendNumber('6');
    playClick();
});

five.addEventListener('click', () => {
    appendNumber('5');
    playClick();
});

four.addEventListener('click', () => {
    appendNumber('4');
    playClick();
});

three.addEventListener('click', () => {
    appendNumber('3');
    playClick();
});

two.addEventListener('click', () => {
    appendNumber('2');
    playClick();
});

one.addEventListener('click', () => {
    appendNumber('1');
    playClick();
});

//$ ==> Zero Button <==

zero.addEventListener('click', () => {
    if (bottomNumber.textContent.charAt(0) !== '0' || bottomNumber.textContent.charAt(1) == '.') {
        existingBottomNumber += '0';
        bottomNumber.textContent = existingBottomNumber;
    }
    playClick();
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
    playClick();
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
    playClick();
});

subtraction.addEventListener('click', () => {
    appendOperator('-');
    playClick();
});

multiple.addEventListener('click', () => {
    appendOperator('*');
    playClick();
});

divide.addEventListener('click', () => {
    appendOperator('/');
    playClick();
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
    playClick();
});

//$ ==> Clear Button <==

clear.addEventListener('click', () => {
    existingBottomNumber = '';
    bottomNumber.textContent = '0';
    topNumber.textContent = '';
    operatorSign.textContent = '';
    firstClick = true;
    isClickedEqual = false;
    playClick();
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
    playClick();
});

//$ ==> Keyboard Animation <==

const audio = document.createElement('audio');
audio.src = 'audio/click.wav';

function playClick() {
    audio.play();
}

function styleKey(key) {
    const button = document.getElementById(key);
    if (button) {
        button.style.backgroundColor = '#219C90';
        button.style.transition = 'transform 0.3s';
        button.style.transform = 'translateY(-0.5rem)';
        playClick();
    }
};

function removeAll(key) {
    const button = document.getElementById(key);
    if (button) {
        button.style.backgroundColor = '#E9B824';
        button.style.transform = 'translateY(0)';
    }
};

function removeClear() {
    const button = document.getElementById('clear');
    if (button) {
        button.style.backgroundColor = '#F05454';
        button.style.transform = 'translateY(0)';
    }
};

function removeDelete() {
    const button = document.getElementById('delete');
    if (button) {
        button.style.backgroundColor = '#829460';
        button.style.transform = 'translateY(0)';
    }
};

//$ ==> Keyboard <==

let keyDownActive = true;

document.addEventListener('keydown', (event) => {
    if (keyDownActive) {

        //$ ==> Numbers <==

        if (event.key === '9') {
            appendNumber('9');
            styleKey('nine');
        }
        else if (event.key === '8') {
            appendNumber('8');
            styleKey('eight');
        }
        else if (event.key === '7') {
            appendNumber('7');
            styleKey('seven');
        }
        else if (event.key === '6') {
            appendNumber('6');
            styleKey('six');
        }
        else if (event.key === '5') {
            appendNumber('5');
            styleKey('five');
        }
        else if (event.key === '4') {
            appendNumber('4');
            styleKey('four');
        }
        else if (event.key === '3') {
            appendNumber('3');
            styleKey('three')
        }
        else if (event.key === '2') {
            appendNumber('2');
            styleKey('two');
        }
        else if (event.key === '1') {
            appendNumber('1');
            styleKey('one');
        }
        else if (event.key === '0') {
            if (bottomNumber.textContent.charAt(0) !== '0' || bottomNumber.textContent.charAt(1) == '.') {
                existingBottomNumber += '0';
                bottomNumber.textContent = existingBottomNumber;
            }
            styleKey('zero');
        }

        //$ ==> Dot <==

        else if (event.key === '.' || event.key === ',') {
            if (bottomNumber.textContent == '0') {
                existingBottomNumber = '0.';
                bottomNumber.textContent = existingBottomNumber;
            } else if (bottomNumber.textContent.includes('.')) {

            } else {
                existingBottomNumber += '.';
                bottomNumber.textContent = existingBottomNumber;
            }
            styleKey('dot');
        }

        //$ ==> Operators <==

        else if (event.key === '+') {
            appendOperator('+');
            styleKey('sum');
        }
        else if (event.key === '-') {
            appendOperator('-');
            styleKey('subtraction');
        }
        else if (event.key === '*') {
            appendOperator('*');
            styleKey('multiple');
        }
        else if (event.key === '/') {
            appendOperator('/');
            styleKey('divide');
        }

        //$ ==> Equal <==

        else if (event.key === 'Enter' || event.key === '=') {
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
            styleKey('equal');
        }

        //$ ==> Clear <==

        else if (event.key === 'Delete') {
            existingBottomNumber = '';
            bottomNumber.textContent = '0';
            topNumber.textContent = '';
            operatorSign.textContent = '';
            firstClick = true;
            isClickedEqual = false;
            styleKey('clear');
        }

        //$ ==> Delete <==

        else if (event.key === 'Backspace') {
            if (bottomNumber.textContent.length > 2) {
                bottomNumber.textContent = bottomNumber.textContent.slice(0, bottomNumber.textContent.length - 1);
                existingBottomNumber = bottomNumber.textContent;
            } else {
                bottomNumber.textContent = '0';
                existingBottomNumber = ' ';
            }
            styleKey('delete');
        }
    }
});

document.addEventListener('keyup', () => {
    if (keyDownActive) {
        removeAll('nine');
        removeAll('eight');
        removeAll('seven');
        removeAll('six');
        removeAll('five');
        removeAll('four');
        removeAll('three');
        removeAll('two');
        removeAll('one');
        removeAll('zero');
        removeAll('sum');
        removeAll('subtraction');
        removeAll('multiple');
        removeAll('divide');
        removeAll('dot');
        removeAll('equal');
        removeClear();
        removeDelete();

    }
})