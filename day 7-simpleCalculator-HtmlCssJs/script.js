let display = document.getElementById("output-screen");
function append(value) {
    display.value += value;
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!";
    }
}

function clearScreen() {
    display.value = "";
}

function removeLastDigit() {
    display.value = display.value.slice(0, -1)
}