var planeApp = planeApp || {};
planeApp.ui = (function(){
	var skillbarArray = new Array();
	var skillImgArray = new Array();
	var skillbar;
	var skImg;
	var total = PlaneConst.totalSkills;
	
	for(var i=0;i<total;i++){
		skillbar = new Quark.Bitmap({image:Q.getDOM("uiskbar"), rect:[0,0,PlaneConst.uiskbar,PlaneConst.uiskbar], x:PlaneConst.uiskbarDefX + i*PlaneConst.uiskbar +PlaneConst.skillSpace , y:PlaneConst.uiskbarDefY, regX:0, regY:0, update:function()
		{
			//update code here
		}});
		skillbarArray.push(skillbar);
	}
	
	for(var i=0;i<total;i++){
		skImg = new Quark.Bitmap({image:Q.getDOM("uisk"+i), rect:[0,0,PlaneConst.uiskbar,PlaneConst.uiskbar], x:PlaneConst.uiskbarDefX + i*PlaneConst.uiskbar +PlaneConst.skillSpace , y:PlaneConst.uiskbarDefY, regX:0, regY:0, update:function()
		{
			//update code here
		}});
		skillImgArray.push(skImg);
	}
	
	return {
		skillbarArray:skillbarArray,
		skillImgArray:skillImgArray
	}
}());