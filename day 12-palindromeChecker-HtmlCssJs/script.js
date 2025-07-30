let inputText = document.getElementById('text')
let output = document.getElementById('output')
function checkPalindrome() {
    let original = inputText.value.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reversed = original.split('').reverse().join('');
    output.textContent = original===reversed?"✅ Palindrome" :"❌ Not a Palindrome";

    // let rev = '';
    // for (let i = inputText.value.length - 1; i >= 0; i--) {
    //     rev += inputText.value[i]
    // }
    // let finalInput = inputText.value.replaceAll(' ',"")
    // let finalRevText = rev.replaceAll(' ',"")
    // if(finalInput==finalRevText){
    //     output.textContent = "Palindrome";
    // }
    // else{
    //     output.textContent = "Not a Palindrome";
    // }
}