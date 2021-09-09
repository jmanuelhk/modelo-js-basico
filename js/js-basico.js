//variables globales

var numero1 = 0;
var contador = 0;
var verdadero = true;

var numeroUno = 10;
var numeroDos = 5;

var cadena = "";


function asignacionExample() {
    alert("El valor de numero1 antes de asignar es : " + numero1);
    numero1 = 55
    alert("El valor actual es :" + numero1);
}

function incrementoExample() {
    contador = ++contador
    console.log(contador)
}

function decrementoExample() {
    contador = --contador
    console.log(contador)
}

function logicExample() {
    alert(verdadero);
    alert(logicExample);
}

function negacionExample() {
    alert(!verdadero);
    alert(negacionExample);
}

function andExample() {
    console.log("=================================================");
    console.log("AND OPERATOR")

    var verdadero = true;
    var falso = false;

    console.log(verdadero + " | " + verdadero + " | " + (verdadero && verdadero))
    console.log(verdadero + " | " + falso + " | " + (verdadero && falso))
    console.log(falso + " | " + verdadero + " | " + (falso && verdadero))
    console.log(falso + " | " + falso + " | " + (falso && falso))
}

function orExample() {
    console.log("=================================================");
    console.log("OR OPERATOR")

    var verdadero = true;
    var falso = false;

    console.log(verdadero + " | " + verdadero + " | " + (verdadero || verdadero))
    console.log(verdadero + " | " + falso + " | " + (verdadero || falso))
    console.log(falso + " | " + verdadero + " | " + (falso || verdadero))
    console.log(falso + " | " + falso + " | " + (falso || falso))
}

function sumaExample() {
    var resultado = numeroUno + numeroDos;
    alert(resultado)
}

function restaExample() {
    var resultado = numeroUno - numeroDos;
    alert(resultado)
}

function multiplicacionExample() {
    var resultado = numeroUno * numeroDos;
    alert(resultado)
}

function divicionExample() {
    var resultado = numeroUno / numeroDos;
    alert(resultado)
}

function moduloExample() {
    var resultado = numeroUno % numeroDos;
    alert(resultado)
}

function ifExample() {
    console.log("Antes de IF Cadena: " + cadena);
    if (cadena == "") {
        cadena = "Ut deserunt non dolore deserunt consequat fugiat eiusmod dolor enim tempor elit deserunt aute."
        console.log("Cadena Final: " + cadena);
    }
}

function ifElseExample() {
    if (cadena == "") {
        cadena = "Voluptate sint minim magna anim tempor non est enim aliquip proident anim amet."
        console.log("Cadena : " + cadena);
    } else {
        cadena = ""
        console.log("Valor de CADENA ELSE: " + cadena);
    }
}

function ifElseExample2() {
    var culpable = window.prompt("¿eres culpable?"); // si, no

    if (culpable === ("si" || "SI" || "Si")) {
        document.write("irás a la cárcel");
    } else if (culpable === ("no" || "No" || "NO")) {
        document.write("irás a casa");
    } else {
        document.write("la documentación por favor");
    }
}

function forExample() {
    var mensaje = "REPETIR"
    for (let index = 0; index < 2; index++) {
        console.log(mensaje + ": valor de INDEX : " + index);
    }
}

function forInExample() {
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

    for (i in dias) {
        console.log(dias[i], i);
    }
}



// var contador = 0
// var cadena = ""
// var cadenaElse = ""

// var mensaje = "Hola Mundo";
// var numeroLetras = mensaje.length; // numeroLetras = 10
// var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];


// console.log("mensaje : "+mensaje+" contiene : "+numeroLetras+ "caracteres")
// console.log(dias.length)
// console.log(mensaje.toUpperCase())
// console.log(mensaje.toLowerCase())
// console.log(mensaje.charAt(2))
// console.log(mensaje.indexOf('a'))
// console.log(mensaje.indexOf('M'))
// console.log(mensaje.substring(2))
// console.log(mensaje.substring(1, 8));

// var mensaje2 = "Hola Mundo, soy una cadena de texto!";
// var palabras = mensaje2.split(" ");

// console.log(palabras, palabras.length);
// console.log(palabras.join(" "));
// // console.log(dias.length)

// var array = [1, 2, 3];
// var primero = array.shift();

// console.log(primero);
// console.log(array.reverse());