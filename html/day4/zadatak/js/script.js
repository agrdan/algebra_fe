function create2DContext(canvasId) {
    var c = document.getElementById(canvasId);
    return c.getContext("2d") 
}

function drawCanvas() {
    var c = create2DContext("canvasExample");

    // draw outer rectangle
    c.beginPath();
    c.rect(0, 0, 500, 360);
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.stroke();

    // draw inner rectangle
    c.beginPath();
    c.fillStyle = "orange";
    c.fillRect(5, 5, 490, 350);

    var innerX = 490;
    // draw inner white rectangle
    c.beginPath();
    c.rect(innerX / 3, 20, 163, 163)
    c.strokeStyle = "white";
    c.lineWidth = 8;
    c.stroke();

    // draw inner dot
    c.beginPath();
    c.arc(innerX / 2, 75, 10, 0, 2 * Math.PI);
    c.fillStyle = "white";
    c.fill();

    //draw inner block
    c.beginPath();
    c.fillStyle = "white";
    c.fillRect(innerX / 2 - 50, 135, 100, 10);

    // draw text algebra
    var textStart = innerX / 3 - 30;
    c.beginPath();
    c.font = "bold 44px 'Arial'"
    c.fillStyle = "white";
    c.fillText("ALGEBRA", textStart, 230)

    c.beginPath();
    c.fillStyle = "white";
    c.fillRect(textStart, 245, 220, 5);

    c.beginPath();
    c.font = "bold 34px 'Arial'";
    c.fillStyle = "white";
    c.fillText("U Č I L I Š T E", textStart, 290);

}