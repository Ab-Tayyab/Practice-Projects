let prev = null;
// function bgColorChanger() {
//     let colors = ['red', 'green', 'yellow', 'black'];
//     let color;
//     do {
//         color = colors[Math.floor(Math.random() * colors.length)]
//     } while (color === prev)
//     prev = color
//     document.body.style.backgroundColor = color;
// }

function bgColorChanger() {
    let color;
    do {
        color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(color)
    } while (color === prev)
    prev = color
    document.body.style.backgroundColor = color;
}