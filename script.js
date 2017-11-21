"use strict";
//Javascript

var canvas = document.getElementById("myCanvas"); //Sótt í canvas
var ctx = canvas.getContext("2d"); //Þetta notað til þess að teikna í canvasinn

//Breytur Skilgreindar
var paddleHeight = 10;
var paddleWidth = 80;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var ballRadius = 14;
var x = canvas.width/2; //x fyrir staðsetningu á x-ás
var y = canvas.height-30; //y fyrir staðsetningu á y-ás
var x2 = 100;
var y2 = 200;
var dx = 2;
var dy = -5;
var dx2 = 2;
var dy2 = 4;
var x3 = 460;
var y3 = 100;
var dx3 = 3;
var dy3 = 5;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

var Ball = {
	create: function () {
		var newBall = Object.create(this);
		return newBall;
	},
	collision: function (x, y, dx, dy) {
		if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
	        dx = -dx;
	    }
	    if(y + dy < ballRadius) {
	        dy = -dy;
	    } 
		else if(y + dy > canvas.height-ballRadius) {
		    if(x > paddleX && x < paddleX + paddleWidth) {
		        dy = -dy;
		    }
		    else {
		        alert("GAME OVER");
		        document.location.reload();
		    }
		}
	},
	drawBall: function (x, y, color, dx, dy) {
		ctx.beginPath();
	    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	    ctx.fillStyle = color;
	    ctx.fill();
	    ctx.closePath();
	}
};

var ball1 = Ball.create();
var ball2 = Ball.create();
var ball3 = Ball.create();

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#34495e";
    ctx.fill();
    ctx.closePath();
}

function collision(x, y, dx, dy) {
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } 
	else if(y + dy > canvas.height-ballRadius) {
	    if(x > paddleX && x < paddleX + paddleWidth) {
	        dy = -dy;
	    }
	    else {
	        alert("GAME OVER");
	        document.location.reload();
	    }
	}
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball1.drawBall(x, y, "#9b59b6", dx, dy);
    ball2.drawBall(x2, y2, "#e67e22", dx, dy);
    ball3.drawBall(x3, y3, "#27ae60", dx, dy);
    drawPaddle();

    //Bolti 1
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
	    dx = -dx;
	}
    if(y + dy < ballRadius) {
        dy = -dy;
    }
	else if(y + dy > canvas.height-ballRadius) {
	    if(x > paddleX && x < paddleX + paddleWidth) {
	        dy = -dy;
	    }
	    else {
	        alert("GAME OVER");
	        document.location.reload();
	    }
	}

	//Bolti 2
	if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if(y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    } 
	else if(y2 + dy2 > canvas.height-ballRadius) {
	    if(x2 > paddleX && x2 < paddleX + paddleWidth) {
	        dy2 = -dy2;
	    }
	    else {
	        alert("GAME OVER");
	        document.location.reload();
	    }
	}

	//Bolti 3
	if(x3 + dx3 > canvas.width-ballRadius || x3 + dx3 < ballRadius) {
        dx3 = -dx3;
    }
    if(y3 + dy3 < ballRadius) {
        dy3 = -dy3;
    } 
	else if(y3 + dy3> canvas.height-ballRadius) {
	    if(x3 > paddleX && x3 < paddleX + paddleWidth) {
	        dy3= -dy3;
	    }
	    else {
	        alert("GAME OVER");
	        document.location.reload();
	    }
	}

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
    	paddleX += 10;
	}
	else if(leftPressed && paddleX > 0) {
	    paddleX -= 10;
	}

	x += dx;
    y += dy;
    x2 += dx2;
    y2 += dy2;
    x3 += dx3;
    y3 += dy3;
}

setInterval(draw, 20);