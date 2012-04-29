function ControlSystem(stage)
{
	this.init(stage);
}
ControlSystem.prototype = new ControlBase();
ControlSystem.prototype.constructor = ControlBase;

ControlSystem.prototype.bindPlayer = function(player){
	this.player = player;
}

ControlSystem.prototype.getPlayer = function(){
	return this.player;
}

ControlSystem.prototype.bindNpc = function(_player, onevent, func){
	//ControlSystem.prototype[npcName] = player;
	//_player.prototype[onevent] = func;
	_player[onevent] = func;
}

ControlSystem.prototype.getNpc = function(npcName){
	return ControlSystem.prototype[npcName];
}