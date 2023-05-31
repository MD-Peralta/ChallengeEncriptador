/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const entradaTexto = document.querySelector(".ingresarTexto");
const salidaTexto = document.querySelector(".resultadoTexto");
const divInfo = document.getElementById("msjBoton");

function btnEncriptar() {
    const txtEncriptado = encriptar(entradaTexto.value);
    salidaTexto.value = txtEncriptado;
    entradaTexto.value = null;
    salidaTexto.style.backgroundImage = "none";
    divInfo.style.display = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const txtDesencriptado = desencriptar(entradaTexto.value);
    salidaTexto.value = txtDesencriptado;
    entradaTexto.value = null;
    salidaTexto.style.backgroundImage = "none";
    divInfo.style.display = "none";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnCopiar() {
    const txtCopiado = salidaTexto.value;
    salidaTexto.value = null;
    entradaTexto.value = txtCopiado;
    salidaTexto.style.backgroundImage = `url(dibujo.png)`;
    divInfo.style.display = "flex";
}
