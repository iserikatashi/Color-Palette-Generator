const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.getElementById('palette-container');
const copyBtn = document.querySelector('.btn-copy');

generateBtn.addEventListener('click', generatePalette);
paletteContainer.addEventListener('click', (evt) => {

    if (evt.target.classList.contains('fa-copy')) {
        const hexValue = evt.target.previousElementSibling.textContent;

        navigator.clipboard.writeText(hexValue)
            .then(() => {
                evt.target.classList.remove('fa-solid', 'fa-copy');
                evt.target.classList.add('fa-solid', 'fa-check');
                evt.target.style.color = '#667eea';

                setTimeout(() => {
                    evt.target.classList.remove('fa-solid', 'fa-check');
                    evt.target.classList.add('fa-solid', 'fa-copy');
                    evt.target.style.color = '#64748b';
                },1000)
            })
    }
});

function generatePalette(params) {
    const colors = [];

    for (let index = 0; index < 5; index++) {
        colors.push(generateRandomColor())
    }

    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach((box, index) => {
        const color = colors[index]

        const colorDiv = box.querySelector('.color');
        const hexValue = box.querySelector('.hex-value');

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    })
}