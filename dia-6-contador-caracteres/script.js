let myText = document.getElementById("meu-texto");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.getElementById("resultado").textContent = `Total characters: ${count}`;
});