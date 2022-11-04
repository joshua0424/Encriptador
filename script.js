const ingresarTexto = document.querySelector(".Ingresar-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage= "none";
    ingresarTexto.value="";
    
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i= 0;i < matrizCodigo.length;i++){
       
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
       } 
    }
    return stringEncriptar;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage= "none";
    ingresarTexto.value="";
    
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();//letras minusculas

    for(let i= 0;i < matrizCodigo.length;i++){
       
        if(stringDesencriptar.includes(matrizCodigo[i][1])){//incluye includes
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
       } 
    }
    return stringDesencriptar;
}

function copiar() {
    mensaje.select()//para seleccionar
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value=""
    alert("Texto Copiado")
}
