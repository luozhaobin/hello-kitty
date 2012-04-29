/*
function Player(img, x, y, width, height, regX, regY)
{
    this.setValue(img, x, y, width, height, regX, regY);
}

Player.inherits(NpcBase);

ZParenizor.method('toString', function () {
    if (this.getValue()) {
        return this.uber('toString');
    }
    return "-0-";
});
*/
/*
function Cat(name,color){
	this.name = name;
	this.color = color;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
*/

function WsNpc(imgArray)
{
	this.currentWeaponId = 0;
	this.imgArray = imgArray;
}

WsNpc.prototype.setCurrentId = function(id){
	this.currentWeaponId = id;
}

WsNpc.prototype.getCurrentWeapon = function(){
	return this.imgArray[this.currentWeaponId];
}


