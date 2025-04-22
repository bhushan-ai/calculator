let resultDispaly = document.getElementById("result");
const equalBtn = document.getElementById("equal-btn");

let string = "";
function noEvaluate(value) {
  string = resultDispaly.value += value;
}

equalBtn.addEventListener("click", () => {
  resultDispaly.value = eval(string);
});
function clearAll() {
  resultDispaly.value = "";
}
function delOneEle() {
  
  string = string.slice(0, -1);
  resultDispaly.value = string;
}


