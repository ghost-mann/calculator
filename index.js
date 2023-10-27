// updates input field with clicked button's value
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
// clears input field when "C" is clicked
function clearDisplay() {
    const display = document.getElementById('display')
    display.value= '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        // eval function allows us to evaluate a string of code
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

//adding listeners to buttons when theyre clicked appropriate function is called.
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            clearDisplay();
        } else if (button.textContent === '=') {
            calculate();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});