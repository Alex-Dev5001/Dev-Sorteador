function drawNumbers() {
const min = document.querySelector(".input-min").value;
const max = document.querySelector(".input-max").value;
const result = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
resultElement.value = result;
}
const resultElement = document.querySelector(".result");
console.log(resultElement.value)
const buttonSort = document.querySelector("button");
buttonSort.addEventListener("click", drawNumbers);

const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;
console.log(larguraJanela, alturaJanela);