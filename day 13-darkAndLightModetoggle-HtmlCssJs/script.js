
// function toggle(){
//     let body = document.getElementById('body')
//     let btn = document.getElementById('btn')
//     if(body.classList.contains("light")){
//         body.classList.remove("light");
//         body.classList.add("dark");
//         btn.textContent="Light";
//     }
//     else{
//         body.classList.remove("dark");
//         body.classList.add("light");
//         btn.textContent="Dark";
//     }
// }

function toggleMode() {
  const body = document.getElementById("body");
  const btn = document.getElementById("btn");

//   using built-in function 
  body.classList.toggle("dark");

  btn.textContent = body.classList.contains("dark") ? "Light" : "Dark";
}
