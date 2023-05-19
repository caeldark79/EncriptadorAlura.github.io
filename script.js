function botonEncriptar() {
    let texto = document.getElementById("text-area").value;
    let mensaje = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagenes = document.getElementById("imagenPrincipal");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0) {
    imagenes.src = "Imagenes/candado5.jpg";
    mensaje.value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    } else {
    imagenes.src = "Imagenes/candado6.jpg";
    swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function botonDesencriptar() {
    let texto = document.getElementById("text-area").value;
    let mensaje = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagenes = document.getElementById("imagenPrincipal");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
    imagenes.src = "Imagenes/candado7.jpg";
    mensaje.value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    } else {
        imagenes.src = "Imagenes/candado6.jpg";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
function copiarMensaje() {
    let mensaje = document.getElementById("mensaje");

    if (mensaje.value.length !== 0) {
        navigator.clipboard.writeText(mensaje.value)
        .then(() => {
        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mensaje Copiado Con Exito',
                showConfirmButton: false,
                timer: 1500
        }).then(() => {
            resetForm();
        });
        })
        .catch((error) => {
        console.error("Error al copiar el mensaje:", error);
        });
    } else {
        Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'No hay mensaje para copiar',
        });
    }
}

function resetForm() {
    document.getElementById("text-area").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("titulo-mensaje").textContent = "Ningún Mensaje fue Encontrado";
    document.getElementById("imagenPrincipal").src = "Imagenes/candado6.jpg";
}