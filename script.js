const textarea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function bEncriptar () {
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value ="";
}

function encriptar (stringEncriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function bDesencriptar () {
    const textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value ="";
}

function desencriptar (stringDesencriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function bCopiar () {
    const textoCopiado = copiar(textarea.value);
    mensagem.value = textoCopiado;
    textarea.value ="";
}


function copiar() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
} 

