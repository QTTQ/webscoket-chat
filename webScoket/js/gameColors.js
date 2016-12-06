const colors=[#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000,#FF0000];

var thickness=1;
var lineColor="000000";




var websocketGame={

	isDrawing:false,
	startX:0,
	startY:0
};



var canvas=document.getElementById("drawing-pad");

var WINDOW_WIDTH=canvas.offsetWidth;
var WINDOW_HEIGHT=canvas.offsetHeight;

canvas.width=WINDOW_WIDTH;
canvas.height=WINDOW_HEIGHT;

var ctx=canvas.getContext("2d");

$(function(){
	var str="";
	
	for(var i=0;i<colors.length;i++){
		str+="<li style='background:"+colors[i]+"'></li>"
	}
	
	$("#palette").html(str);
	str="";
	
	for(var i=0;i<11;i++){
		str+="<li><a class='btn_line' style='height:"+i+"px'></a></li>"
	}
	
	$("#line").html(str);
	
	$("#palette li").click(function(){
		$("#palette li").removeClass("active");
		$(this).addClass("active");
		lineColors=$(this).css("background-color");
	});
	offLine();
	
})

function offLine(){
	$("drawing-pad").mousedown(function(e){
		var canvasPostion=$(this).position();
		var mouseX=(e.pageX-this.offsetLeft)||0;
		var mouseY=(e.pageY-this.offsetTop)||0;
		websocketGame.startX=mouseX;
		websocketGame.startY=mouseY;
		websocketGame.isDrawing=true;
		
	});
	
	$("#drawing-pad").mousemove(function(e){
		if(websocketGame.isDrawing){
			var canvasPostion=$(this).offset();
			var mouseX=(e.pageX-this.offsetLeft)||0;
			var mouseY=(e.pageY-this.offsetTop)||0;
			
			if(!(mouseX==websocketGame.startX&&mouseY==websocketGame.startY)){
				drawing(ctx,websocketGame.startX,startX,websocketGame.startY,mouseX,mouseY,thickness);
				websocketGame.startX=mouseX;
				websocketGame.startY=mouseY;
			}
		}
	});
	$("drawing-pad").mouseup(function(e){
		websocketGame.isDrawing=false;
	});
	$("#clear").click(function(){
		ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	});
}function drawing(ctx,x1,y1,x2,y2,thickness,lineColor){
	ctx.beginPath();
	ctx.moveTo(x1,y1);

	ctx.lineTo(x2,y2);
	ctx.lineWidth=thickness;
	ctx.strokeStyle=lineColor;
	ctx.stroke();
}
