
let input = document.getElementById('input');
let output = document.getElementById('output');
input.addEventListener('input', () => {
    // letter count 
    const removeSpace = input.value.replace(/\s/g,""); //for remove space
    const countLetter = removeSpace.length;

    // words count 
    const wordSpaces = input.value.trim(); //for remove space start and end
    const countWord = wordSpaces === "" ? 0 : wordSpaces.split(/\s+/).length;

    // sentence count 
    const match = input.value.match(/[\.\!\?]+(?=\s|$)/g);
    const countSentence = match ? match.length : 0;

    // output show 
    output.textContent = `Letter: ${countLetter} || Words: ${countWord} || Sentence: ${countSentence}`
})