const textArea = document.querySelector("#input");
const mensaje = document.querySelector(".output");

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncryiptado) {
  let llaves = [
    { a: "ai" },
    { e: "enter" },
    { i: "imes" },
    { o: "ober" },
    { u: "ufat" },
  ];
  console.table(llaves);
  stringEncryiptado = stringEncryiptado.toLowerCase();
  for (let i = 0; i < llaves.length; i++) {
    if (stringEncryiptado.includes(llaves)) {
    }
  }
}
