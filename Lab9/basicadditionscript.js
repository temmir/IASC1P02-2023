function sum() {
    var number1 = parseFloat(document.forms.myForm.number1.value);
    var number2 = parseFloat(document.forms.myForm.number2.value);


        var total = number1 + number2;

        // Display the total in the output paragraph
        document.getElementById("output").textContent = " " + total;
    
}
