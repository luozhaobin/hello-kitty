/*
var sceneJson = {"scene":[
	{"stage":[
		{"id":"0", "obc":[
			{"id":"0", "x":"0", "y":"0","w":"300", "h":"250"},
			{"id":"1", "x":"770", "y":"400","w":"430", "h":"260"},
			//{"id":"2", "x":"370", "y":"880","w":"300", "h":"370"},
			//{"id":"3", "x":"600", "y":"1200","w":"200", "h":"180"},
			{"id":"4", "x":"1470", "y":"760","w":"430", "h":"80"}]
		},
		{"id":"1", "obc":[
			{"id":"0", "x":"0", "y":"0","w":"100", "h":"50"},
			{"id":"1", "x":"0", "y":"0","w":"100", "h":"50"},
			{"id":"2", "x":"0", "y":"0","w":"100", "h":"50"}]
		}]
	}]
};
*/
var sceneJson = {"scene":[
	{"stage":[
		{"id":"0", "obc":[
			{"id":0, "x":0, "y":0,"w":300, "h":250},
			{"id":1, "x":770, "y":400,"w":430, "h":260},
			//{"id":"2", "x":"370", "y":"880","w":"300", "h":"370"},
			//{"id":"3", "x":"600", "y":"1200","w":"200", "h":"180"},
			{"id":4, "x":1470, "y":760,"w":430, "h":80}]
		},
		{"id":"1", "obc":[
			{"id":"0", "x":"0", "y":"0","w":"100", "h":"50"},
			{"id":"1", "x":"0", "y":"0","w":"100", "h":"50"},
			{"id":"2", "x":"0", "y":"0","w":"100", "h":"50"}]
		}]
	}]
};

//sceneJson.scene[0].stage[0].obc[0].id		// "0"

var moveVDir = 5;
var moveHDir = 5;

var obstacleArray = new Array();
var obc;

for(var i = 0; i<sceneJson.scene[0].stage[0].obc.length; i++){
	obc = new Quark.Bitmap({image:Q.getDOM("tt"), rect:[0,0,sceneJson.scene[0].stage[0].obc[i].w,sceneJson.scene[0].stage[0].obc[i].h], x:sceneJson.scene[0].stage[0].obc[i].x, y:sceneJson.scene[0].stage[0].obc[i].y, regX:0, regY:0, update:function()
	{
		if(!this.hitTestObject(planeApp.main.player)){
			switch(moveVDir){
				case 2:
					this.y -= ControlConst.PlayerMoveSpeed;
					$("#showMessage").val(this.y);
					break;
				case 8:
					this.y -= -ControlConst.PlayerMoveSpeed;
					$("#showMessage").val(this.y);
					break;
				default:
					break;
			}
			switch(moveHDir){
				case 4:
					this.x -= -ControlConst.PlayerMoveSpeed;
					break;
				case 6:
					this.x -= ControlConst.PlayerMoveSpeed;
					break;
				default:
					break;
			}
		}
		
		else{
			switch(moveVDir){
				case 2:
					if(planeApp.main.player.y + planeApp.main.player.regY >= this.y && planeApp.main.player.x + planeApp.main.player.regX > this.x && planeApp.main.player.x-planeApp.main.player.regX<this.x+parseInt(this.width)){
						//this.y -= ControlConst.PlayerMoveSpeed;
						moveVDir = 55;
						$("#showMessage").val(moveVDir);
					}
					break;
				case 8:
					if(planeApp.main.player.y - planeApp.main.player.regY <= this.y + this.height && planeApp.main.player.x + planeApp.main.player.regX > this.x && planeApp.main.player.x-planeApp.main.player.regX<this.x+parseInt(this.width)){
						this.y -= -ControlConst.PlayerMoveSpeed;
						$("#showMessage").val(this.y);
						moveVDir = 55;
					}
					break;
				default:
					break;
			}
			switch(moveHDir){
				case 4:
					this.x -= -ControlConst.PlayerMoveSpeed;
					break;
				case 6:
					this.x -= ControlConst.PlayerMoveSpeed;
					break;
				default:
					break;
			}
		}
	}});
	
	obstacleArray.push(obc);
}