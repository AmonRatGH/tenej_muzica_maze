var freddieImg = new Image;
freddieImg.src = "img/freddie.png";
var polylineP;
var img = new Image;
var imgSrc;

var diff;

document.getElementById("stop").disabled = true; 
var change=false;
var mazeCreated = false;
var isPlaying = false;
var audio;
var audioAEO = document.getElementById("audio0");
var t;

var i=1;

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
	polyline=document.getElementById("easy");
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
	
    setTimeout(function(){ img.onload = function(){ ctx.drawImage(img,-1,-1); };
    img.src = "svg/20x20.svg"; }, 1500);
}

function drawMazeMedium() {
	audioAEO.play();
	polyline=document.getElementById("medium");
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
	setTimeout(function(){ img.onload = function(){ ctx.drawImage(img,-1,-1); };
    img.src = "svg/30x30.svg"; }, 800);
}

function drawMazeHard() {
	audioAEO.play();
	polyline=document.getElementById("hard");
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
		//ctx.clearRect(0,0,canvas.width,canvas.height);
		//console.log("i+ "+i);
		//drawDots(startX,startY,i);
		if(change==true){
			change=false;
			return;
		}
		ctx.beginPath();
		ctx.strokeStyle = 'red';
		ctx.lineWidth= 5;
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
			return;
		}
	   drawPath(i+1,x,y)
	},t)
}

function getPolylinePoints(diff){
	
	audio.volume=1.0;
	audio.play();
	document.getElementById("dif").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("solve").disabled = true; 
	
	if(mazeCreated==false){
		console.log("maze not created!");
	}
	const points = polyline.getAttribute("points");
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
	if(diff=="medium"){
		document.getElementById("canvas").style.backgroundColor = "transparent";
		document.getElementById("canvas").style.borderColor = "white";
		document.getElementById("title").style.visibility = "hidden";
		document.getElementById("else").style.backgroundColor = "transparent";
		document.getElementById("else").style.border = "none";
		document.getElementById("video").style.display = "inline";
		vid.play();
	}
	console.log((x.length)*t);
	setTimeout(function(){ setInterval(function(){ audio.volume -= 0.05;  }, 300);} , (x.length*t)-2000);
	setTimeout(function(){ audio.volume=0.0; }, (x.length*t)+4000);
	drawPath(0,x,y);
	
}

function stop(audio){
	document.getElementById("canvas").style.backgroundColor = "white";
	document.getElementById("title").style.backgroundColor = "white";
	document.getElementById("else").style.backgroundColor = "white";
	document.getElementById("canvas").style.borderColor = "black";
	document.getElementById("else").style.border = "0.25em black solid";
	document.getElementById("title").style.visibility = "visible";
	vid.pause();
	audio.pause();
	document.getElementById("video").style.display = "none";
	vid.currentTime = 0;
	audio.currentTime = 0;
	document.getElementById("dif").disabled = false;
	document.getElementById("solve").disabled = false; 
	change=true;
}
