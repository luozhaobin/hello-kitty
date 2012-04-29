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

function Player(imgName, x, y, width, height, regX, regY, moveSpeed)
{
	this.setValue(x, y, regX, regY);
	this.imgName = imgName;
	this.width = width;
	this.height = height;
	this.moveSpeed = moveSpeed;
	this.isControlable = true;
	this.setImg();
}
Player.prototype = new NpcBase();
Player.prototype.constructor = Player;

Player.prototype.setImg = function(){
	this.img = new Quark.Bitmap({image:Q.getDOM(this.imgName), rect:[0,0,this.width,this.height], x:this.x, y:this.y, regX:this.regX, regY:this.regY, update:function(){}});
}

Player.prototype.getImg = function(){
	return this.img;
}

Player.prototype.getImgName = function(){
	return this.imgName;
}

Player.prototype.getMoveSpeed = function(){
	return this.moveSpeed;
}
