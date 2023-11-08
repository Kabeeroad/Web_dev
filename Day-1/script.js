var a = document.querySelector(".main");
var btn = document.querySelector("button");

var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    btn.innerHTML = "ON";
    btn.style.color = "blue";
    a.style.backgroundColor = "yellow";
    check = 1;
    console.log("ON");
  } else {
    a.style.backgroundColor = "transparent";
    btn.innerHTML = "OFF";
    btn.style.color = "red";

    check = 0;
    console.log("OFF");
  }

});

