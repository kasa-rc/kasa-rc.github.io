//Variables que usemos en todas las funciones


//----------Numero y signo----------->
function num(digito) {
    var display = document.getElementById("display");
    var K = display.value;
    if (K === '0'){       
        display.value = digito; 
    }if(K !== '0'){
        display.value  = display.value + digito; 
    }
}
function signo(y){
    document.micalcu.display.value += y;                    //EN ESTA FUNCION METO LOS  SIGNOs + - * / ( ) --> 
}
//----------Limpiar----------->
function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="0";
}
//----------Calcular----------->                            Solo las operaciones basicas / * - + () -->
function calcular() {
    var NUMEROYSIGNO = document.micalcu.display.value;      //ME CREO UNA VARIABLE QUE ES IGUAL=document.nombreformulario.dondesemuestra.value -->
    document.micalcu.display.value = eval(NUMEROYSIGNO);    // y digo que los datos metidos me lo cualcule la funcion eval(NUMEROYSIGNO) -->
}
  
//----------funciones que requieren un solo numero------------>
function factorial(){
    var n = document.micalcu.display.value;
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    document.micalcu.display.value = total;
}
function log(){
    document.micalcu.display.value = Math.log(document.micalcu.display.value);
}
function In(){ 
    document.micalcu.display.value = Math.LOG2E.toFixed(document.micalcu.display.value);
}
function raiz() {
    document.micalcu.display.value = Math.sqrt(document.micalcu.display.value);
}
//----------Funciones donde se ocupa dos numero--------------->
function potencia(_xy) {
    var exponente = prompt('¿Indique el numero de exponente?')
    document.micalcu.display.value = Math.pow(document.micalcu.display.value, exponente);
}
function porcentaje () {
    document.micalcu.display.value = eval(document.micalcu.display.value)/100;
}


//-----------------------Bibliografia-------------------------->
/*function eliminar(){
    document.micalcu.barra.value = document.micalcu.barra.value.substring(0, document.micalcu.barra.value.length - 1)

    https://amigos-de-la-informatica.blogspot.com/2016/05/calculadora-html-javascript.html
    https://www.lawebdelprogramador.com/foros/JavaScript/1675262-Ayuda-Calculadora-Cientifica-en-Macromedia-Dreamweaver-8.html
}*/

