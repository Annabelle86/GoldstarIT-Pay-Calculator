
function calcPay() {
    var wage = parseFloat(document.getElementById('txt_wage').value);
    var hours = parseFloat(document.getElementById('txt_hours').value);
    var calculate = wage * hours;
    var submit = calculate.toFixed(2);

    document.getElementById('results').innerHTML = "Your total pay will be: £" + submit;
}