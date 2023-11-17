function addition() {
    var textone = parseFloat(document.myForm.textone.value);
    var texttwo = parseFloat(document.myForm.texttwo.value);


        var total = textone + texttwo;

        document.getElementById("output").textContent = " " + total;
}

function subtract() {
    var textone = parseFloat(document.myForm.textone.value);
    var texttwo = parseFloat(document.myForm.texttwo.value);


        var total = textone - texttwo;

        document.getElementById("output").textContent = " " + total;
}

function multiply() {
    var textone = parseFloat(document.myForm.textone.value);
    var texttwo = parseFloat(document.myForm.texttwo.value);


        var total = textone * texttwo;

        document.getElementById("output").textContent = " " + total;
}

function divide() {
    var textone = parseFloat(document.myForm.textone.value);
    var texttwo = parseFloat(document.myForm.texttwo.value);


        var total = textone / texttwo;

        document.getElementById("output").textContent = " " + total;
}
