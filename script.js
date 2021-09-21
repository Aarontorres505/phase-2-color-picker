window.onload = function () {
    initcolorpicker();
};

function initcolorpicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
setColorPickereventlisteners(colorBox, rgb);
}

 function setColorPickereventlisteners(colorBox, rgb) {
     rgb.red.addEventListener('change', () => {
         console.log("Red value: ", rgb.red.value);
     })
     rgb.green.addEventListener('change', () => {
         console.log("Green value: ", rgb.green.value);
     })
     rgb.blue.addEventListener('change', () => {
         console.log("Blue value: ", rgb.blue.value);
     });
 }