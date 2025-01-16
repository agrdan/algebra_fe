


function crtez() {

    // linija
    var c1 = document.getElementById("canvas1");
    var ctx1 = c1.getContext("2d");

    ctx1.beginPath();
    ctx1.moveTo(30, 180);
    ctx1.lineTo(460, 30);
    ctx1.lineWidth = 8;
    ctx1.strokeStyle = "blue";
    ctx1.stroke();

    // kvadrat
    var c2 = document.getElementById("canvas2");
    var ctx2 = c2.getContext("2d");

    ctx2.beginPath();
    ctx2.rect(20, 20, 150, 150);
    ctx2.fillStyle = "red";
    ctx2.fill();
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = "blue";
    ctx2.stroke();

    // krug
    var c3 = document.getElementById("canvas3");
    var ctx3 = c3.getContext("2d");

    var centerX = c3.width / 2;
    var centerY = c3.height / 2;
    var radius = 80;
    ctx3.beginPath();
    ctx3.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx3.fillStyle = "red";
    ctx3.fill();
    ctx3.strokeStyle = "black";
    ctx3.lineWidth = 2;
    ctx3.stroke();

    // proizvoljni oblici
    var c4 = document.getElementById("canvas4");
    var ctx4 = c4.getContext("2d");
    
    ctx4.beginPath();
    ctx4.moveTo(170, 80);
    ctx4.bezierCurveTo(130,100,130,150,230,150);
    ctx4.bezierCurveTo(250,180,320,180,340,150);
    ctx4.bezierCurveTo(420,150,420,120,390,100);
    ctx4.bezierCurveTo(430,40,370,30,340,50);
    ctx4.bezierCurveTo(320,5,250,20,250,50);
    ctx4.bezierCurveTo(200,5,150,20,170,80);

    ctx4.closePath();
    ctx4.lineWidth = 5;
    ctx4.strokeStyle = "blue";
    ctx4.stroke();
    
    // tekst sa sjenom
    
    var c5 = create2DContext("canvas5");
    
    c5.beginPath();
    c5.save();

    c5.shadowColor = "grey";
    c5.shadowBlur = 4;
    c5.shadowOffsetX = -3;
    c5.shadowOffsetY = -3;
    
    c5.font = "italic small-caps bold 40px 'Courier New'";
    c5.fillStyle = "orange";
    c5.fillText("Hello World!", 70, 70);

    // c5.strokeStyle = "orange";
    // c5.strokeText("Hello World!", 70, 70);

    // c5.shadowColor = "transparent";

    c5.restore();
    c5.font = "italic bold 30px 'Courier New'";
    c5.fillStyle = "gold";
    c5.fillText("Pozdrav svijete!", 70, 120);

    // Gradijent
    // linearni (postoji i radijalni)
    c6 = create2DContext("canvas6");
    c6.beginPath();
    var grd = c6.createLinearGradient(0, 0, 600, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.5, "yellow");
    grd.addColorStop(1, "green");
    c6.fillStyle = grd;
    c6.fillRect(0, 0, 600, 200);

    // Slika
    c7 = create2DContext("canvas7");
    c7.beginPath();
    var slika = new Image();
    slika.src = "img/algebra-logo.jpg";

    slika.onload = function() {
        c7.drawImage(slika, 10, 50, 140, 100);
    }

    c7.beginPath();
    c7.font = "bold 40px 'Courier New'";
    c7.strokeStyle = "black";
    c7.strokeText("Algebra", 200, 80);

}


function create2DContext(canvasId) {
    var c = document.getElementById(canvasId);
    return c.getContext("2d") 
}