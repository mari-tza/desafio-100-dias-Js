document.addEventListener("click", (e) => {
 
  var gato = document.createElement("span");
  gato.classList.add("gato");


  gato.style.left = e.offsetX + "px";
  gato.style.top = e.offsetY + "px";


  var size = Math.random() * (200 - 20 + 1) + 20;

 
  gato.style.width = size + "px";
  gato.style.height = size + "px";
  document.body.appendChild(gato);
  setTimeout(() => {
    gato.remove();
  }, 1000);
});