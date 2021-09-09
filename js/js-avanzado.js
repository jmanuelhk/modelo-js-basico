//variables globales
var numero1 = 1
var numero2 = 2
var resultado

var mensaje = "mensaje variable GLOBAL "

//funciones 
function funcionArgumentoExample(numeroUno, numeroDos) {
    alert("se les paso el argumento los valores numeroUno: " + numeroUno + " y numeroDos : " + numeroDos);
    // function suma_y_muestra(numeroUno, numeroDos){
    // resultado = numero1 + numero2;
    // alert("antes de asignar " + numero1 +" - "+numero2)
    // numero1 = numeroUno;
    // numero2 = numeroDos;

    resultado = numeroUno + numeroDos;
    alert("El resultado de la suma es " + resultado);
}

function scopeExample() {
    console.log(mensaje + "| antes de asignar nuevo valor");
    mensaje = "Este es un mensaje almacenado de manera LOCAL"
    console.log(mensaje + "| despues de asignar nuevo valor");
}

function breakExample() {
    var cadena = "En un lugar de la mancha de cuyo nombre no quiero acordarme..."
    var letras = cadena.split("");
    var resultado = "";

    for (i in letras) {
        if (letras[i] == 'a') {
            break;
        } else {
            console.log(letras[i])
            resultado += letras[i];
            console.log(resultado)
        }
    }
    alert(resultado);
}

function continueExample() {
    var cadena = "En un lugar de la mancha de cuyo nombre no quiero acordarme..."
    var letras = cadena.split("");
    var resultado = "";

    for (i in letras) {
        if (letras[i] == 'a') {
            continue;
        } else {
            console.log(letras[i])
            resultado += letras[i];
            console.log(resultado)
        }
    }
    alert(resultado);
}

function whileExample() {
    var resultado = 0;
    var numero = 100;
    var i = 0;

    while (i <= numero) {
        resultado += i
        console.log(resultado);
        i++

    }
    alert(resultado);
}

function doWhileExample() {
    var resultado = 1;
    var numero = 5;

    do {
        resultado *= numero;
        console.log(resultado);
        numero--;
    } while (numero > 0);

    alert(resultado);
}

function switchExample(dia) {
    var resultadoDia;

    switch (dia) {
        case "Lunes":
            resultadoDia = "caso Lunes"
            break;
        case "Martes":
            resultadoDia = "caso Martes"
            break;
        case "Miercoles":
            resultadoDia = "caso Miercoles"
            break;
        case "Jueves":
            resultadoDia = "caso Jueves"
            break;
        case "Viernes":
            resultadoDia = "caso Viernes"
            break;

        default:
            resultadoDia = "caso DEFAULT este dia no se encuentra"
            break;
    }
    alert(resultadoDia)
}