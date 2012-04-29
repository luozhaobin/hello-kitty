(function(){

/**
 * 控制常量
 */
ControlConst = {

	PlayerMoveSpeed:3,
	fireSpeed:5,
	
	WorldLeftDiff: 100,
	WorldRightDiff: 100,
	WorldTopDiff: 100,
	WorldBottonDiff: 100
	
	};
	
})();

(function(){
	
PlaneConst = {
	
	width: 950,
	height: 600,
	
	playerW: 60,
	playerH:60,
	playerRegX:30,
	playerRegY:30,
	
	worldDefX: -300,
	worldDefY: 0,
	
	totalSkills: 4,
	skillSpace: 5,
	uiskbar: 62,
	uiskbarDefX: 341,
	uiskbarDefY: 450
	
	};
	
})();

var planeApp = planeApp || {};
planeApp.main = (function(){
	var stage;
	var tObc;
	var player;
	var worldMap;
	
	return {
		stage:stage,
		player:player,
		worldMap:worldMap,
		tObc:tObc
	}
}());