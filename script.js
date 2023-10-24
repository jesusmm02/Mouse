function evento() {
    let container = document.getElementById("contenedor");

    // Genera la cuadrícula de 50x50
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 50; j++) {
            let cuadro = document.createElement("div");
            cuadro.className = "div";

            // Colorear cuando el ratón pasa por encima
            cuadro.addEventListener("mouseover", function () {
                let color= generateRandomColor();
                cuadro.target.style.backgroundColor = color;
                setTimeout(function() {
                    cuadro.target.style.backgroundColor="#272626";
                }, 1000);
            });
            container.appendChild(cuadro);
        }
    }
};

function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var colorHexadecimal = "#" + 
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0');

    return colorHexadecimal;
}

document.addEventListener("DOMContentLoaded", evento);