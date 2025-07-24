let bmiForm = document.getElementById('bmi-form');
let feet = document.getElementById('feet');
let inches = document.getElementById('inches');
let kg = document.getElementById('kg');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');

bmiForm.addEventListener('submit', function(e){
    e.preventDefault();

    let totalInches = (parseFloat(feet.value) * 12) + parseFloat(inches.value);
    let heightInMeters = totalInches * 0.0254;
    let meterSquare = heightInMeters * heightInMeters;
    let bmi = parseFloat(kg.value) / meterSquare;

    output1.textContent = "BMI is: " + bmi.toFixed(2);

    if(bmi < 18.5){
        output2.textContent = "Result: Underweight";
    }
    else if(bmi >= 18.5 && bmi < 25){
        output2.textContent = "Result: Normal weight";
    }
    else if(bmi >= 25 && bmi < 30){
        output2.textContent = "Result: Overweight";
    }
    else{
        output2.textContent = "Result: Obese";
    }
});

function resetForm(){
    document.getElementById('bmi-form').reset();
    output1.textContent = "BMI is: ";
    output2.textContent = "Result: ";
}
