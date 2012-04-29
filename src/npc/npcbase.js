function NpcBase(x, y, regX, regY)
{
    this.setValue(x, y, regX, regY);
}
/*
NpcBase.method('setValue', function (img, x, y, width, height, regX, regY) {
    this.x = x;
    this.y = y;
	this.regX = regX;
	this.regY = regY;
    this.img = img;
	this.width = width;
    this.height = height;
    return this;
});

NpcBase.method('getImg', function () {
    return this.img;
});

NpcBase.method('toString', function () {
    return '(' + this.getImg() + ')';
});
*/
NpcBase.prototype.setValue = function (x, y, regX, regY) {
    this.x = x;
    this.y = y;
	this.regX = regX;
	this.regY = regY;
	this.isControlable = false;
    return this;
};

NpcBase.prototype.getX = function () {
    return this.x;
};

NpcBase.prototype.getY = function () {
    return this.y;
};

NpcBase.prototype.getRegY = function () {
    return this.regX;
};

NpcBase.prototype.getRegY = function () {
    return this.regY;
};

NpcBase.prototype.toString = function () {
    return '(' + this.getImg() + ')';
};