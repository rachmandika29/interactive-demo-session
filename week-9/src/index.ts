import Game from './game';

const existingCanvas = document.querySelectorAll('canvas');
existingCanvas.forEach(canvas => canvas.remove());

const existingButtons = document.querySelectorAll('button');
existingButtons.forEach(button => {
    if (button.textContent === 'Reset Game') {
        button.remove();
    }
});

new Game();