
var valor = 300;
document.getElementById('precio').innerHTML = valor;

function GetValues(){
    var cantidad = document.getElementById('cantidad').value;
    var color = document.getElementById('color').value;
    var total= cantidad*valor;
    document.getElementById('precio').innerHTML = valor;

    
    document.getElementById('txttotal').innerHTML = total;
    document.getElementById('txtcantidad').innerHTML = cantidad;
    document.getElementById('txtcolor').style.backgroundColor = color;

}