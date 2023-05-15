const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

function botonEncriptar(){

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEnciptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
        return stringEncriptado;
}

function botonDesencriptar(){

    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringdesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringdesencriptado = stringdesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
        return stringdesencriptado;
}

function copiarMensaje() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    document.querySelector(".text-area").value = "";
    mensaje.style.backgroundImage = "url('Imagenes/candado3.png')";
}