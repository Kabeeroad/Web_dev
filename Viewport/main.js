const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function handleAdd() {
  const add = parseInt(num1.value) + parseInt(num2.value);
  result.innerHTML = add;
}
