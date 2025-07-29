let output = document.getElementById('output');
let prev = null
function generateRandomNumber() {
    let random;
    do {
        random = Math.floor(Math.random() * 11);
    } while (random === prev)
    prev = random;
    output.textContent = random;
}

function generateRandomString() {
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let random;
    do {
        random = Math.floor(Math.random() * str.length)
    } while (random === prev)
    prev = str[random];
    output.textContent = str[random];
}

function generatePassword() {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@!#'
    let valid = false;
    while (!valid) {
        let password = '';
        let sch = 0, lch = 0, spch = 0, num = 0;
        for (let i = 0; i < 8; i++) {

            let random = str[Math.floor(Math.random() * str.length)];
            password += random;
            if (random >= 'a' && random <= 'z') {
                sch++;
            }
            else if (random > 'A' && random <= 'Z') {
                lch++;
            }
            else if ('123456789'.includes(random)) {
                num++;
            }
            else if ('@#!'.includes(random)) {
                spch++;
            }
        }
        if (sch >= 2 && lch >= 2 && num >= 3 && spch >= 0) {
            valid = true;
        }
        output.textContent = password;
    }
}

function reset() {
    output.textContent = 'Generate Random Number / String / Password';
}