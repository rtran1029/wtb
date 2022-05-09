document.getElementById("button1").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("box").style.height = "500px";
  
}

document.getElementById("button2").addEventListener("click", myFunction2);

function myFunction2() {
  document.getElementById("box").style.backgroundColor = "blue";
  
}

document.getElementById("button3").addEventListener("click", myFunction3);

function myFunction3() {
  document.getElementById("box").style.opacity = "0.5";
  
}

document.getElementById("button4").addEventListener("click", myFunction4);

function myFunction4() {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.boxShadow = "0px 0px 0px black"

}

document.getElementById("button5").addEventListener("click", myFunction5);

function myFunction5() {
  document.getElementById("box").style.boxShadow = "10px 20px 30px black";
  
}