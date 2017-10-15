---
layout: default
title: game 
date: 2017-09-06 8:00:00
permalink: "/game/"
---

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
canvas {
    border:1px solid #d3d3d3;
    background-color: #f1f1f1;
}
</style>
</head>
<body onload="startGame()">  <!-- starts game on load -->
<script>

var green_player, blue_player;

function startGame() {
    myGameArea.start();
    green_player = new Player(30, 30, "green", 2, 2);
    blue_player = new Player(30, 30, "blue", 2, 300-2-30);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 512;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); // updates every 20th milisecond (50times/sec)
        // listen for keyboard
        window.addEventListener('keydown', function(e) {
            myGameArea.key = e.keyCode;
        
        })

        // listen for touch
        // window.addEventListener('touchmove', function (e) {
        //     myGameArea.x = e.touches[0].screenX;
        //     myGameArea.y = e.touches[0].screenY;
        // })
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

function Player(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;

    // moves coordinates to new position
    this.move = function() { 
        this.x += this.speedX;
        this.y += this.speedY;
    }

    // redraws the player
    this.redraw = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function updateGameArea() {
    myGameArea.clear();

    // calculate new positions
    green_player.move();
    blue_player.move();

    // update
    green_player.redraw();
    blue_player.redraw();

}


</script>
<p>moving squares</p>
</body>
</html>
