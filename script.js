const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncrypt()
{
    if(textArea.value != "")
    {
    const textEncrypted = encrypter(textArea.value);
    mensaje.value = textEncrypted;
    textArea.value = "";//Limpia la frase a encriptar o desencriptar
    mensaje.style.backgroundImage = "none";
    }
}
function btnDecrypt()
{
    if(textArea.value != "")
    {
    const textDecrypted = decrypter(textArea.value);
    mensaje.value = textDecrypted;
    textArea.value = "";//Limpia la frase a encriptar o desencriptar
    mensaje.style.backgroundImage = "none";
    }
}
function copy()
{
    var text = mensaje.value;
    // Crear un elemento de entrada de texto temporal
    var tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.setAttribute("value", text);
    
    // Agregar el elemento temporal al DOM
    document.body.appendChild(tempInput);
    
    // Seleccionar el texto en el elemento de entrada de texto
    tempInput.select();
    
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    
    // Eliminar el elemento temporal del DOM
    document.body.removeChild(tempInput);
}
function encrypter(stringEncriptada)
{
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();//para tener el arreglo en minusculas
    for (let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        
    }
    return stringEncriptada;
}
function decrypter(stringDesencriptado)
{
    let matrizCodigo = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();//para tener el arreglo en minusculas
    for (let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptado.includes(matrizCodigo[i][1]))
        {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
        
    }
    return stringDesencriptado;
}