let output = document.getElementById('output')
let amount = document.getElementById('amount');
function calculate() {
    let perc = Math.floor((5*amount.value)/100);
    output.textContent = perc+": RS";
}