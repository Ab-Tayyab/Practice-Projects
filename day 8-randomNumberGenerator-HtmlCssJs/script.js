let output = document.getElementById('output');
let prev = null
function generate() {
    let random ;
    do{
        random = Math.floor(Math.random() * 11);
    }while(random === prev)
        prev = random;
    output.textContent = random;
}