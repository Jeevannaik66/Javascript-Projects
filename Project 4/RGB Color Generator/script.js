document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const inputType = document.getElementById('inputType');
    const copyButton = document.getElementById('copyButton');

    function updateColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;
        const rgb = `rgb(${r}, ${g}, ${b})`;

        colorBox.style.backgroundColor = rgb;
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
        inputType.textContent = rgb;
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(inputType.textContent).then(() => {
            alert('RGB value copied to clipboard!');
        });
    });

    // Initialize color box on page load
    updateColor();
});
