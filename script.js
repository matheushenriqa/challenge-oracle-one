const textToEncrypt = document.querySelector(".actions__input__text");
const decryptInfo = document.querySelector(".actions__output__initial");
const decryptText = document.querySelector(".actions__output__result");
const textEncryptedArea = document.querySelector(".actions__output__result-text");

let text;
let encryptedText;

function getText(area) {
   text = area.value;
}

function insertText(area, text) {
   area.innerText = text;
}

function hideDecryptInfo() {
   if (decryptText.classList.contains("hide")) {
      decryptInfo.classList.add("hide");
      decryptText.classList.remove("hide");
   }
}

function copyText() {
   navigator.clipboard.writeText(textEncryptedArea.textContent);
}

function encrypt() {
   hideDecryptInfo();
   getText(textToEncrypt);
   encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
   
   insertText(textEncryptedArea, encryptedText);
}

function decrypt() {
   hideDecryptInfo();
   getText(textToEncrypt);
   encryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
   
   insertText(textEncryptedArea, encryptedText);
}