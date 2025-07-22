let input = document.getElementById('input')
let output = document.getElementById('output')

input.addEventListener('change', () => {
    let currentDate = new Date();
    let dob = new Date(input.value)
    if (dob > currentDate) {
        output.textContent = "Invalid Date";
        return;
    }
    let year = currentDate.getFullYear() - dob.getFullYear();
    let month = currentDate.getMonth() - dob.getMonth();
    let date = currentDate.getDate() - dob.getDate();

    if (date < 0) {
        month--;
        date += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }
    else {
        output.textContent = `Year ${year} / Month ${month} / Day ${date}`
    }
})