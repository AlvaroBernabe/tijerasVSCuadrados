document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Rectangulo Victoria
    ctx.fillStyle = "green";
    ctx.fillRect(320, 400, 100, 50); // x, y, width, height

    // Cuadrado Principal
    ctx.fillStyle = "red"; 
    ctx.fillRect(350, 50, 50, 50); // x, y, width, height

    // Obstaculo
    ctx.fillStyle = "blue";
    ctx.fillRect(200, 100, 400, 40); // x, y, width, height
});
