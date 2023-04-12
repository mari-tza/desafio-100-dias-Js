let bnt = document.getElementById("btn");
bnt.addEventListener("click", () => {
    if (bnt.innerText == "ON") {
        document.documentElement.style.cssText = "--light-color: #f8d11d";
        bnt.innerText = "OFF";
    } else {
        document.documentElement.style.cssText = "--light-color: #94b0ff";
        bnt.innerText = "ON";
    }
});