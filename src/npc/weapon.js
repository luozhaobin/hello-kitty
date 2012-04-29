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

function Weapon(imgName, x, y, width, height, regX, regY, moveSpeed)
{
	this.setValue(x, y, regX, regY);
	this.imgName = imgName;
	this.width = width;
	this.height = height;
	this.moveSpeed = moveSpeed;
	this.isControlable = false;
	//this.setImg();
}
Weapon.prototype = new NpcBase();
Weapon.prototype.constructor = Weapon;

Weapon.prototype.getImgName = function(){
	return this.imgName;
}
Weapon.prototype.getX = function(){
	return this.x;
}
Weapon.prototype.getY = function(){
	return this.y;
}
Weapon.prototype.getWidth = function(){
	return this.width;
}
Weapon.prototype.getHeight = function(){
	return this.height;
}
Weapon.prototype.getRegX = function(){
	return this.regX;
}
Weapon.prototype.getRegY = function(){
	return this.regY;
}
Weapon.prototype.getMoveSpeed = function(){
	return this.moveSpeed;
}
