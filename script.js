document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Variables para guardar la posición inicial y final del corte
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isCutting = false;

    // Manejar el evento de click del mouse
    canvas.addEventListener('mousedown', function(e) {
        startX = e.offsetX;
        startY = e.offsetY;
        isCutting = true;
    });

    // Manejar el evento de movimiento del mouse
    canvas.addEventListener('mousemove', function(e) {
        if (isCutting) {
            endX = e.offsetX;
            endY = e.offsetY;
            drawScissors();
        }
    });

    // Manejar el evento de soltar el click del mouse
    canvas.addEventListener('mouseup', function(e) {
        if (isCutting) {
            endX = e.offsetX;
            endY = e.offsetY;
            isCutting = false;
            cutObstacle();
        }
    });

    // Función para dibujar las tijeras y otras formas
    function drawScissors() {
        // FIGURAS PRINCIPALES
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

        ctx.fillStyle = "white";
        ctx.fillRect(350, 50, 50, 50); // Cuadrado blanco
        ctx.fillStyle = "green";
        ctx.fillRect(300, 400, 100, 50); // Plataforma verde
        ctx.fillStyle = "blue";
        ctx.fillRect(400, 500, 100, 50); // Obstáculo azul

        // Dibujar las tijeras solo si estamos cortando
        if (isCutting) {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = "red"; 
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    // Dibujar las formas al cargar la página
    drawScissors();
});
