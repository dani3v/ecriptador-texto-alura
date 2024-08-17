const textArea = document.querySelector("#input-txt-area");
const mensaje = document.querySelector("#output-txt-area");

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const txtEncriptado = encriptar(textArea.value);
  mensaje.value = txtEncriptado;
  textArea.value = "";
  // Ocultar la imagen de fondo
  mensaje.style.backgroundImage = "none";
  // Asegurarse de que el textarea sea visible y tenga espacio para el texto
  mensaje.style.height = "fixed";
  mensaje.style.visibility = "visible"; // Si se necesita mostrar el textarea
}

function encriptar(stringEncriptado) {
  let llaves = [
    ["h", "horror"],
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["p", "pato"],
  ];
  console.table(llaves);
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < llaves.length; i++) {
    if (stringEncriptado.includes(llaves[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        llaves[i][0],
        llaves[i][1]
      );
      console.log(stringEncriptado);
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const txtDesencriptado = desencriptar(textArea.value);
  console.log(mensaje.value);

  mensaje.value = txtDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado) {
  let llaves = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  console.table(llaves);
  stringDesencriptado = stringDesencriptado.toLowerCase();
  for (let i = 0; i < llaves.length; i++) {
    if (stringDesencriptado.includes(llaves[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        llaves[i][1],
        llaves[i][0]
      );
    }
  }
  return stringDesencriptado;
}
