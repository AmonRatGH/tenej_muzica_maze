var freddieImg = new Image;
freddieImg.src = "img/freddie.png";
var polylineP;
var img = new Image;
var imgSrc;

var diff;
const easy="154,2 154,10 170,10 170,26 186,26 186,10 202,10 202,26 250,26 250,10 266,10 266,26 314,26 314,74 282,74 282,90 266,90 266,106 250,106 250,90 234,90 234,106 218,106 218,170 186,170 186,138 202,138 202,122 138,122 138,138 122,138 122,122 90,122 90,138 106,138 106,154 154,154 154,138 170,138 170,218 154,218 154,234 170,234 170,250 122,250 122,266 106,266 106,234 74,234 74,250 58,250 58,266 74,266 74,282 122,282 122,298 138,298 138,314 154,314 154,282 170,282 170,298 250,298 250,314 170,314 170,322";
const medium="234,2 234,10 266,10 266,42 298,42 298,90 314,90 314,42 330,42 330,90 362,90 362,106 330,106 330,122 314,122 314,106 298,106 298,138 282,138 282,122 266,122 266,138 250,138 250,186 234,186 234,154 218,154 218,170 202,170 202,186 186,186 186,154 202,154 202,138 170,138 170,154 122,154 122,170 106,170 106,186 90,186 90,202 106,202 106,234 122,234 122,218 138,218 138,250 90,250 90,234 74,234 74,250 58,250 58,282 74,282 74,266 106,266 106,282 122,282 122,266 138,266 138,282 154,282 154,266 170,266 170,250 186,250 186,266 218,266 218,234 266,234 266,250 282,250 282,218 266,218 266,154 282,154 282,170 298,170 298,186 282,186 282,202 298,202 298,218 314,218 314,250 298,250 298,266 314,266 314,298 266,298 266,330 298,330 298,314 330,314 330,330 346,330 346,314 378,314 378,362 362,362 362,378 394,378 394,330 474,330 474,346 458,346 458,362 474,362 474,394 458,394 458,410 474,410 474,474 458,474 458,458 442,458 442,442 410,442 410,458 426,458 426,474 394,474 394,458 378,458 378,442 394,442 394,410 330,410 330,426 298,426 298,410 282,410 282,458 298,458 298,474 266,474 266,458 250,458 250,482";
const hard="314,2 314,10 330,10 330,26 346,26 346,10 442,10 442,26 410,26 410,42 426,42 426,74 410,74 410,58 394,58 394,26 378,26 378,58 362,58 362,42 330,42 330,74 314,74 314,58 266,58 266,42 250,42 250,26 234,26 234,10 218,10 218,42 234,42 234,74 218,74 218,138 202,138 202,122 186,122 186,138 170,138 170,154 218,154 218,170 234,170 234,122 250,122 250,138 266,138 266,154 250,154 250,170 282,170 282,138 298,138 298,186 282,186 282,202 314,202 314,218 330,218 330,186 362,186 362,202 346,202 346,234 266,234 266,250 234,250 234,234 218,234 218,250 138,250 138,266 154,266 154,298 170,298 170,314 154,314 154,330 170,330 170,346 202,346 202,362 122,362 122,394 90,394 90,410 74,410 74,426 106,426 106,410 122,410 122,426 170,426 170,474 154,474 154,490 138,490 138,522 106,522 106,554 122,554 122,538 170,538 170,522 154,522 154,506 186,506 186,538 202,538 202,506 218,506 218,522 250,522 250,538 266,538 266,554 282,554 282,570 314,570 314,538 346,538 346,554 330,554 330,602 314,602 314,634 330,634 330,642";

document.getElementById("stop").disabled = true; 
var change=false;
var mazeCreated = false;
var isPlaying = false;
var audio;
var audioAEO = document.getElementById("audio0");
var t;
var mazesrc;

var i=1;
var audioInt;

let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

function selectDif(dif){
	document.getElementById("solve").disabled = false; 
	if(dif=="easy"){
		ctx.clearRect(0,0,canvas.height,canvas.width);
		drawMazeEasy();
		audio=document.getElementById("audio1");
		t=610;
		imgSrc="img/newFreddie.png";
		diff="easy";
	}
	else if(dif=="medium"){
		ctx.clearRect(0,0,canvas.height,canvas.width);
		drawMazeMedium();
		audio=document.getElementById("audio2");
		t=650;
		imgSrc="img/newFreddie.png";
		diff="medium";
	}
	else if(dif=="hard"){
		ctx.clearRect(0,0,canvas.height,canvas.width);
		drawMazeHard();
		audio=document.getElementById("audio3");
		t=700;
		imgSrc="img/freddieBicycle.jpg";
		diff="easy";
	}
}
function drawMazeEasy() {
	audioAEO.play();
	polyline=easy;
	mazeCreated = true;
	var dif="easy";
	
	var w=document.getElementById('canvas').width;
	var h=document.getElementById('canvas').height;
	console.log(w+" "+h);
	if(w==482){
		canvasAnimation(w,h,dif,-160);
	}
	else if(w==642){
		canvasAnimation(w,h,dif,-320);
	}
	mazesrc="svg/20x20.svg";
    setTimeout(function(){ img.onload = function(){ ctx.drawImage(img,-1,-1); };
    img.src = "svg/20x20.svg"; }, 1500);
}

function drawMazeMedium() {
	audioAEO.play();
	polyline=medium;
	mazeCreated = true;
	var dif="medium";
	
	var w=document.getElementById('canvas').width;
	var h=document.getElementById('canvas').height;
	console.log(h+" "+w);
	if(w==322){
		canvasAnimation(w,h,dif,160);
	}
	else if(w==642){
		canvasAnimation(w,h,dif,-160);
	}
	mazesrc="svg/30x30.svg";
	setTimeout(function(){ img.onload = function(){ ctx.drawImage(img,-1,-1); };
    img.src = "svg/30x30.svg"; }, 800);
}

function drawMazeHard() {
	audioAEO.play();
	polyline=hard;
	mazeCreated = true;
	var dif="hard";
	
	var w=document.getElementById('canvas').width;
	var h=document.getElementById('canvas').height;
	console.log(h+" "+w);
	if(w==482){
		canvasAnimation(w,h,dif,160);
	}
	if(w==322){
		canvasAnimation(w,h,dif,320);
	}
	mazesrc="svg/40x40.svg";
    setTimeout(function(){ img.onload = function(){ ctx.drawImage(img,-1,-1); };
    img.src = "svg/40x40.svg"; }, 1750);
}
function canvasAnimation(w,h,dif,i){
    time=setTimeout(function(){
		if(i>0){
			document.getElementById('canvas').width=canvas.width+4;
			document.getElementById('canvas').height=canvas.height+4;
			canvasAnimation(w,h,dif,i-4)
		}
		if(i<0){
			document.getElementById('canvas').width=canvas.width-4;
			document.getElementById('canvas').height=canvas.height-4;
			canvasAnimation(w,h,dif,i+4);
		}
		if(i==0){
			clearTimeout(time);
			return;
		}
	},10)
}

function drawPath(i,x,y){
    time=setTimeout(function(){
		console.log(t);
		if(change==true){
			console.log("1234");
			change=false;
			return;
		}
		console.log(i);
		ctx.beginPath();
		ctx.strokeStyle = 'blue';
		ctx.lineWidth= 1;
		ctx.clearRect(x[i-1]-7,y[i-1]-7,13,13);
		ctx.moveTo(x[i-1],y[i-1]);
		ctx.lineTo(x[i], y[i]);
		ctx.moveTo(x[i-2],y[i-2]);
		ctx.lineTo(x[i-1], y[i-1]);
		ctx.stroke();
		img.src = imgSrc;
		img.onload = function(){ ctx.drawImage(img,x[i]-7,y[i]-7); };
		if(i==x.length){
			let img = new Image;
			img.src = "img/newFreddie.png";
			img.onload = function(){ ctx.drawImage(img,x[i]-7,y[i]-7); };
			clearTimeout(time);
		}
	   drawPath(i+1,x,y);
	},t)
}

function getPolylinePoints(diff,img){
	ctx.clearRect(0,0,canvas.height,canvas.width);
	img.onload = function(){ ctx.drawImage(img,-1,-1); };
	img.src = mazesrc;
	document.getElementById("stop").disabled = false;
	audio.volume=0.3;
	if(diff=="easy"){
		audio.volume=0.5;
	}
	audio.play();
	document.getElementById("dif").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("solve").disabled = true; 
	
	if(mazeCreated==false){
		console.log("maze not created!");
	}
	const points = polyline;
	const pointsAr= points.split(/[\s,]+/);
	var x=[];
	var y=[];
	var newimg = new Image;
	for(i=0;i<pointsAr.length;i++){
		if(i%2==0){
			x.push(pointsAr[i]);
		}else{
			y.push(pointsAr[i]);
		}
	}
	if(diff=="hard"){
		console.log("hello hard");
		var img = new Image;
		img.src = "img/finishLine.jpg";
		img.onload = function(){ ctx.drawImage(img,300,500) };
	} 
	console.log((x.length)*t);
	setTimeout(function(){ audioInt = setInterval(interval, 300);  } , (x.length*t)-2000);
	drawPath(0,x,y);
	
}
function interval(){
	audio.volume -= 0.03;
	if(audio.volume<0){
		clearInterval(audioInt);
		return;
	}
}

function stop(audio){
	clearInterval(audioInt);
	audio.pause();
	audio.currentTime = 0;
	document.getElementById("stop").disabled = true;
	document.getElementById("dif").disabled = false;
	document.getElementById("solve").disabled = false;
	change=true;
}
