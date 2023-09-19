//& HTML elements

const colorPicker = document.getElementById('color-picker');
const pencil = document.getElementById('pencil');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const grid = document.getElementById('grid');
grid.textContent = 'Show Grid';
const squareNumber = document.getElementById('square-number');
const squareLabel = document.getElementById('square-label');
squareLabel.textContent = `${squareNumber.value} x ${squareNumber.value}`
const sketchPart = document.getElementById('sketch-part');

//& Rainbow Title

const title = document.getElementById('title');
const titleArray = ['E', 't', 'c', 'h', ' ', 'A', ' ', 'S', 'k', 'e', 't', 'c', 'h'];

for (let i = 0; i < titleArray.length; i++) {
    const titleWord = document.createElement('span');
    titleWord.textContent = titleArray[i];
    titleWord.style.color = randomColor();
    title.appendChild(titleWord);
}

//& Selecting square number

squareNumber.addEventListener('input', () => {
    grid.textContent = 'Show Grid';
    grid.style.backgroundColor = 'beige';
    grid.style.color = 'cadetblue';
    const selectedValue = squareNumber.value;
    const currentValue = sketchPart.querySelectorAll('div').length
    squareLabel.textContent = `${selectedValue} x ${selectedValue}`;

    if (currentValue !== selectedValue * selectedValue) {
        for (let i = 0; i < currentValue; i++) {
            const firstChild = sketchPart.firstChild;
            sketchPart.removeChild(firstChild);
        }

        const valueToNumber = parseInt(selectedValue);
        sketchPart.style.gridTemplateColumns = `repeat(${valueToNumber}, 1fr)`;
        sketchPart.style.gridTemplateRows = `repeat(${valueToNumber}, 1fr)`;

        for (let i = 0; i < valueToNumber * valueToNumber; i++) {
            const square = document.createElement('div');
            square.className = 'etch'
            sketchPart.appendChild(square);
        }
    }

});

//& Color Selector

let currentColor = colorPicker.value;

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
});

//& Button Reset

function resetButtons() {
    pencil.style.backgroundColor = '';
    pencil.style.color = '';
    rainbow.style.backgroundColor = '';
    rainbow.style.color = '';
    eraser.style.backgroundColor = '';
    eraser.style.color = '';
    clear.style.backgroundColor = '';
    clear.style.color = ''
};

//& Pencil Button

pencil.addEventListener('click', () => {
    resetButtons();
    pencil.style.backgroundColor = 'cadetblue';
    pencil.style.color = 'beige';

    let isPencil = false;

    sketchPart.addEventListener('click', (e) => {
        if (e.target.classList.contains('etch')) {
            if (isPencil) {
                e.target.style.backgroundColor = currentColor;
            }
        }
    });

    sketchPart.addEventListener('mousedown', (e) => {
        isPencil = true;
    });

    sketchPart.addEventListener('mouseup', () => {
        isPencil = false;
    });

    sketchPart.addEventListener('mouseover', (e) => {
        if (isPencil && e.target.classList.contains('etch')) {
            e.target.style.backgroundColor = currentColor;
        }
    });

    document.addEventListener('click', (e) => {
        if (!sketchPart.contains(e.target)) {
            isPencil = false;
        }
    });

});



//& Rainbow Button

function randomColor() {
    const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += array[Math.floor(Math.random() * 16)]
    };
    if (color === '#28282B') {
        for (let i = 0; i < 6; i++) {
            color += array[Math.floor(Math.random() * 16)]
        };
    } else {
        return color;
    }

}

rainbow.addEventListener('click', () => {
    resetButtons();
    rainbow.style.backgroundColor = 'cadetblue';
    rainbow.style.color = 'beige';

    let isRainbow = false;

    sketchPart.addEventListener('click', (e) => {
        if (e.target.classList.contains('etch')) {
            if (isRainbow) {
                e.target.style.backgroundColor = randomColor();
            };
        };
    });

    sketchPart.addEventListener('mousedown', () => {
        isRainbow = true;
    });

    sketchPart.addEventListener('mouseup', () => {
        isRainbow = false;
    });

    sketchPart.addEventListener('mouseover', (e) => {
        if (isRainbow && e.target.classList.contains('etch')) {
            e.target.style.backgroundColor = randomColor();
        }
    });

    document.addEventListener('click', (e) => {
        if (!sketchPart.contains(e.target)) {
            isRainbow = false;
        }
    });

});

//& Eraser Button

eraser.addEventListener('click', () => {
    resetButtons();
    eraser.style.backgroundColor = 'cadetblue';
    eraser.style.color = 'beige';

    let isErasing = false;

    sketchPart.addEventListener('click', (e) => {
        if (e.target.classList.contains('etch')) {
            if (isErasing) {
                e.target.style.backgroundColor = '#FFFFFF';
            }
        }
    });


    sketchPart.addEventListener('mousedown', () => {
        isErasing = true;

    });

    sketchPart.addEventListener('mouseup', () => {
        isErasing = false;
    });

    sketchPart.addEventListener('mouseover', (e) => {
        if (isErasing && e.target.classList.contains('etch')) {
            e.target.style.backgroundColor = '#FFFFFF';
        }
    });

    document.addEventListener('click', (e) => {
        if (!sketchPart.contains(e.target)) {
            isErasing = false;
        }
    });

});

//& Clear Button

clear.addEventListener('click', () => {
    resetButtons();
    clear.style.backgroundColor = 'cadetblue';
    clear.style.color = 'beige';
    setTimeout(() => {
        clear.style.backgroundColor = '';
        clear.style.color = ''
    }, 100);
    sketchPart.querySelectorAll('.etch').forEach((e) => {
        e.style.backgroundColor = '#FFFFFF'
    });

});

//& Grid Button 

grid.addEventListener('click', () => {
    if (grid.textContent === 'Show Grid') {
        grid.textContent = 'Hide Grid';
        grid.style.backgroundColor = 'cadetblue';
        grid.style.color = 'beige';
        sketchPart.querySelectorAll('.etch').forEach((e) => {
            e.style.border = 'none';
        });
    } else {
        grid.textContent = 'Show Grid';
        grid.style.backgroundColor = 'beige';
        grid.style.color = 'cadetblue';
        sketchPart.querySelectorAll('.etch').forEach((e) => {
            e.style.border = '1px solid black';
        });
    }
});

