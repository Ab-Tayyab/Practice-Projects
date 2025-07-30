let notification = document.getElementById('notification')
function password() {
    let inputPassword = document.getElementById('input');
    let toggleBtn = event.target;
    if (inputPassword.value == '') {
        notification.textContent = 'Enter password'
    }
    else {
        notification.textContent = ''
        if (inputPassword.type === "password") {
            inputPassword.type = 'text';
            toggleBtn.textContent = "🙈"
        }
        else {
            inputPassword.type = 'password';
            toggleBtn.textContent = "👁️"
        }

    }
}