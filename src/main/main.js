/*
var planeApp = planeApp || {};
planeApp.main = (function(){
	var stage;
	var player;
	var tObc;
	var worldMap;
	
	return {
		stage:stage,
		tObc:tObc,
		worldMap:worldMap,
		player:player
	}
}());
*/
//$(document).ready(function() {
	//create a DOMContext
	var canvasId = 'canvas';
	var container = Quark.getDOM("container");
	var canvas = Quark.createDOM("canvas", {id:canvasId, width:PlaneConst.width, height:PlaneConst.height, style:
	{
		//position:"absolute",
		border: "1px solid #c3c3c3",
		backgroundColor: "#ffffff"
	}});
	container.appendChild(canvas);
	var canvasContext = new Quark.CanvasContext({canvas:canvas});
	
	planeApp.main.stage = new Quark.Stage({width:950, height:600, context:canvasContext, update:function()
	{
		//write your own update code here
	}});
	
//	var moveVDir = 5;
//	var moveHDir = 5;
	
	planeApp.main.tObc = new Quark.Bitmap({image:Q.getDOM("test"), rect:[0,0,300,400], x:-300, y:0, regX:0, regY:0, update:function()
	{
		//update code here
	}});
	
	var buttleArray = new Array();
	//var buttle = new Quark.Bitmap({image:Q.getDOM("buttle"), rect:[0,0,40,40], x:0, y:0, regX:20, regY:20, update:function()
	//{
	//}});
	
	planeApp.main.worldMap = new Quark.Bitmap({image:Q.getDOM("worldmap"), rect:[0,0,2000,2000], x:-250, y:-300, regX:0, regY:0, update:function()
	{
		//update code here
		switch(moveVDir){
			case 8:
				if(this.y < (ControlConst.WorldTopDiff))
					this.y += ControlConst.PlayerMoveSpeed;
				else
					moveVDir = 5;
				break;
			case 2:
				if(this.y > (-this.height + ControlConst.WorldBottonDiff + PlaneConst.height))
					this.y -= ControlConst.PlayerMoveSpeed;
				else
					moveVDir = 5;
				break;
			default:
				break;
		}
		switch(moveHDir){
			case 4:
				if(this.x < (ControlConst.WorldRightDiff))
					this.x += ControlConst.PlayerMoveSpeed;
				else
					moveHDir = 5;	
				break;
			case 6:
				if(this.x > (-this.width + ControlConst.WorldLeftDiff + PlaneConst.width))
					this.x -= ControlConst.PlayerMoveSpeed;
				else
					moveHDir = 5;
				break;
			default:
				break;
		}
	}});
	
	planeApp.main.player = new Quark.Bitmap({image:Q.getDOM("billd"), rect:[0,0,PlaneConst.playerW,PlaneConst.playerH], x:475, y:300, regX:PlaneConst.playerRegX, regY:PlaneConst.playerRegY, update:function()
	{
		if(isDrug){
			this.x = mouseX - diffX;
			this.y = mouseY - diffY;
		}
		
		//if(QuarkUtils.hitTest(planeApp.main.tObc, planeApp.main.player, canvasId)){
		//	this.alpha = 0.5;
		//}
		//else
		//	this.alpha = 1;
	}});
	
	planeApp.main.stage.addChild(planeApp.main.worldMap);
	for(var i=0;i<obstacleArray.length;i++){
		planeApp.main.stage.addChild(obstacleArray[i]);
	}
	//planeApp.main.stage.addChild(planeApp.main.tObc);
	planeApp.main.stage.addChild(planeApp.main.player);
	
	for(var i=0;i<PlaneConst.totalSkills;i++){
		planeApp.main.stage.addChild(planeApp.ui.skillImgArray[i]);
	}
	for(var i=0;i<PlaneConst.totalSkills;i++){
		planeApp.main.stage.addChild(planeApp.ui.skillbarArray[i]);
	}
	
	var diffX, diffY, mouseX, mouseY;
	
	var isDrug = false;
	planeApp.main.player.onmousedown = function(e)
	{
		diffX = e.eventX - planeApp.main.player.x;
		diffY = e.eventY - planeApp.main.player.y;
		isDrug = true;
		em.registerStage(planeApp.main.stage, moveevent);
	}
	
	planeApp.main.player.onmouseup = function(e)
	{
		diffX = diffY = 0;
		isDrug = false;
		em.unregisterStage(planeApp.main.stage, moveevent);
	}
	
	var events;
	//events = Quark.supportTouch ? ["touchend"] : ["mousedown"];
	events = ["mousedown", "mouseup"];
	keyevents = ["keypress", "keyup", "keydown"];
	moveevent = ["mousemove"];
	var em = new Q.EventManager();
	em.registerStage(planeApp.main.stage, events);
	//em.registerStage(stage, keyevents);
	//em.registerStage(stage, moveevent);
	//em.register(planeApp.main.player, events, onMouseDown);
	
	//planeApp.main.player.addEventListener("mousedown", onMouseDown);
	
	var fps = 30;
	var timer = new Q.Timer(1000/fps);
	timer.addListener(planeApp.main.stage);
	timer.start();
	
	//alert(player.hitTest(bmp2, canvasId));
	//console.log(player.hitTest(bmp, canvasId));
	
//	var playertest = new Player("fuck", 0, 0, 100, 100, 0, 0);
//	console.log(playertest.isControlable);
	
//	controlPlayer.bindNpc(planeApp.main.stage, "onmousemove", onStageMove);
//	controlPlayer.bindNpc(planeApp.main.stage, "onmouseup", firePress);
//	controlPlayer.bindNpc(document, "onkeydown", onKeyDown);
//	controlPlayer.bindNpc(document, "onkeyup", onKeyUp);
	
	//var cs = new ControlSystem(stage);
	//cs.bindNpc("sg", 1);
	//console.log(cs.getNpc("sg"));
//});

	