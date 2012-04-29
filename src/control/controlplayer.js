/*
function ControlPlayer(stage, ms)
{
	this.init(stage);
	this.setMS(ms);
}
ControlPlayer.prototype = new ControlSystem();
ControlPlayer.prototype.constructor = ControlSystem;

ControlPlayer.prototype.setMS = function(ms){
	this.messageSystem = ms;
}
*/
var imgArray = new Array();
//(imgName, x, y, width, height, regX, regY, moveSpeed)
var fireN = new Weapon("buttle", 0,0,40,40,20,20,2);
var fireN2 = new Weapon("buttle2", 0,0,40,40,20,20,2);
//var buttle = new Quark.Bitmap({image:Q.getDOM("buttle"), rect:[0,0,40,40], x:0, y:0, regX:20, regY:20, update:function()
//{
//}});
imgArray.push(fireN);
imgArray.push(fireN2);
imgArray.push(fireN);
imgArray.push(fireN2);

var controlPlayer = new ControlSystem(planeApp.main.stage);
var ws = new WsNpc(imgArray);
ws.setCurrentId(0);

controlPlayer.bindPlayer(planeApp.main.player);

function onStageMove(e){
	mouseX = e.eventX;
	mouseY = e.eventY;	
}

function firePress(e){
	fire(e.eventX, e.eventY, ws.getCurrentWeapon());
}

var fireSpeed = 5;
function fire(_x, _y, fireNpc){
	var init = false;
	var moveX, moveY;
	var _angel = Math.atan2( Math.abs(controlPlayer.getPlayer().y - _y), Math.abs(controlPlayer.getPlayer().x - _x) );
	var buttle = new Quark.Bitmap({image:Q.getDOM(fireNpc.getImgName()), rect:[0,0,fireNpc.getWidth(),fireNpc.getHeight()], x:controlPlayer.getPlayer().x, y:controlPlayer.getPlayer().y, regX:fireNpc.getRegX(), regY:fireNpc.getRegY(), update:function()
	{
		if(!init){
			if(controlPlayer.getPlayer().x >= _x){
				moveX = -Math.cos(_angel) * ControlConst.fireSpeed;
			}
			else{
				moveX = Math.cos(_angel) * ControlConst.fireSpeed;
			}
			
			if(controlPlayer.getPlayer().y >= _y){
				moveY = -Math.sin(_angel) * ControlConst.fireSpeed;
			}
			else{
				moveY = Math.sin(_angel) * ControlConst.fireSpeed;
			}
			init = true;
		}
		
		switch(moveVDir){
			case 8:
				//if(moveY >= 0)
				//	this.y = this.y + moveY + moveSpeed;
				//else
				this.y = this.y + moveY + ControlConst.PlayerMoveSpeed;
				break;
			case 2:
				//if(moveY >= 0)
				//	this.y = this.y + moveY - moveSpeed;
				//else
				this.y = this.y + moveY - ControlConst.PlayerMoveSpeed;
				break;
			default:
				this.y += moveY;
				break;
		}
		switch(moveHDir){
			case 4:
				//if(moveX >= 0)
				//	this.x = this.x + moveX + moveSpeed;
				//else
				this.x = this.x + moveX + ControlConst.PlayerMoveSpeed;
				break;
			case 6:
				//if(moveX >= 0)
				//	this.x = this.x + moveX - moveSpeed;
				//else
				this.x = this.x + moveX - ControlConst.PlayerMoveSpeed;
				break;
			default:
				this.x += moveX;
				break;
		}
		
		//this.x += moveX;
		//this.y += moveY;
		
		//if(this.hitTestObject(planeApp.main.tObc))
		//	planeApp.main.stage.removeChild(this);
		
		//if(QuarkUtils.hitTest(planeApp.main.tObc,this,"canvas"))
		//	stage.removeChild(this);
		
		if(this.x <= 0 || this.y <= 0 || this.x >= planeApp.main.stage.width || this.y >= planeApp.main.stage.height)
			planeApp.main.stage.removeChild(this);
	}});
	buttleArray.push(buttle);
	//$("#showMessage").val(buttleArray.length);
	//planeApp.main.stage.addChild(buttle);
	planeApp.main.stage.addChildAt(buttle,1);
	//buttle.x = _x;
	//buttle.y = _y;
}

//document.onkeydown = function(e){
function onKeyDown(e){
	//$("#showMessage").val(e.which);
	
	var hasHit = false;
	
	for(var i =0;i<obstacleArray.length;i++){
		if(planeApp.main.player.hitTestObject(obstacleArray[i]))
		{
			hasHit = true;
		}
	}
	
	if(!hasHit){
		if(moveVDir == 5){
			switch(e.which){
				case 87:
					moveVDir = 8;
					break;
				case 83:
					moveVDir = 2;
					break;
				default:
					moveVDir = 5;
					break;
			}	
		}
		
		if(moveHDir == 5){
			switch(e.which){
				case 65:
					moveHDir = 4;
					break;
				case 68:
					moveHDir = 6;
					break;
				default:
					moveHDir = 5;
					break;
			}	
		}
	}
	else{
		moveHDir = moveVDir = 5;
	}
}

//document.onkeyup = function(e){
function onKeyUp(e){
	//moveDir = 5;
	if(moveVDir != 5){
		if(e.which == 87 || e.which == 83)
			moveVDir = 5;
	}
	if(moveHDir != 5){
		if(e.which == 65 || e.which == 68)
			moveHDir = 5;
	}
	
	switch(e.which){
		case 49:
			ws.setCurrentId(0);
			break;
		case 50:
			ws.setCurrentId(1);
			break;
		case 51:
			ws.setCurrentId(2);
			break;
		case 52:
			ws.setCurrentId(3);
			break;
		default:
			break;
	}
}

controlPlayer.bindNpc(planeApp.main.stage, "onmousemove", onStageMove);
controlPlayer.bindNpc(planeApp.main.stage, "onmouseup", firePress);
controlPlayer.bindNpc(document, "onkeydown", onKeyDown);
controlPlayer.bindNpc(document, "onkeyup", onKeyUp);

/*
	player.onmousedown = function(e)
	//function onMouseDown(e)
	{
		//console.log(e);
		//player.x = player.localToGlobal(e.eventX, e.eventY).x;
		//player.y = player.localToGlobal(e.eventX, e.eventY).y;
		//player.x = e.eventX;
		//player.y = e.eventY;
		diffX = e.eventX - player.x;
		diffY = e.eventY - player.y;
		isDrug = true;
		em.registerStage(stage, moveevent);
	//	$("#showMessage").val("start");
	}
	
	player.onmouseup = function(e)
	{
		diffX = diffY = 0;
		isDrug = false;
		em.unregisterStage(stage, moveevent);
	//	$("#showMessage").val("end");
	}
*/