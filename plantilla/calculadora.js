
function sumaNumeros() {
    alert("Para sumar");
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var result;
    var result = parseFloat(num1)+parseFloat(num2);
    document.getElementById("resultado").innerHTML = result;
}

function restaNumeros() {
    alert("Para restar");
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var result;
    var result = parseFloat(num1)-parseFloat(num2);
    document.getElementById("resultado").innerHTML = result;
}

function multiplicaNumeros() {
    alert("Para multiplicar");
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var result;
    var result = parseFloat(num1)*parseFloat(num2);
    document.getElementById("resultado").innerHTML = result;
}

function divideNumeros() {
    alert("Para dividir");
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var result;
    var result = parseFloat(num1)/parseFloat(num2);
    document.getElementById("resultado").innerHTML = result;
}

// https://altocodigo.blogspot.com/2016/10/sumar-dos-numeros-en-javascript.html#:~:text=Si%20los%20dos%20n%C3%BAmeros%20vienen,ser%C3%A1%2023%2C%20ya%20que%20concatena.
//los comentarios en línea que comienzan con una doble barra: //, 
//y los comentarios multilínea, que comienzan con /* y terminan con */.