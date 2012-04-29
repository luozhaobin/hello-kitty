function ControlBase(stage)
{
	this.init(stage);
}

ControlBase.prototype.init = function (stage) {
	//this.eventArray = new Array();
	this.em = new Q.EventManager();
    return this;
};

ControlBase.prototype.activeEvents = function (events) {
	//this.eventArray = push(events);
	this.em.registerStage(stage, events);
    return this;
};

ControlBase.prototype.nativeEvents = function (events) {
	this.em.unregisterStage(stage, events);
    return this;
};

ControlBase.prototype.getEvent = function (){
	return 0;
};