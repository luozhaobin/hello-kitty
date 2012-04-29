var QuarkUtils = QuarkUtils || {};

QuarkUtils = (function(){

	var canvas, context;											//像素级碰撞画布及上下文
	var minx, maxx, miny, maxy, maxWidth, maxHeight, data1, data2;	//像素级碰撞变量声明
	
	function hitTest(sprite1, sprite2, canvasId)
	{
		minx = sprite1.x - sprite1.regX > sprite2.x - sprite2.regX ? sprite1.x - sprite1.regX :sprite2.x - sprite2.regX;
		maxx = sprite1.x - sprite1.regX + sprite1.width < sprite2.x - sprite2.regX + sprite2.width ? sprite1.x - sprite1.regX + sprite1.width : sprite2.x - sprite2.regX + sprite2.width ;
		miny = sprite1.y - sprite1.regY > sprite2.y - sprite2.regY ? sprite1.y - sprite1.regY : sprite2.y - sprite2.regY;
		maxy = sprite1.y - sprite1.regY + sprite1.height < sprite2.y - sprite2.regY + sprite2.height ? sprite1.y - sprite1.regY + sprite1.height : sprite2.y - sprite2.regY + sprite2.height;
		
		if (minx >= maxx || miny >= maxy){
			return false;
		}
		else{
			maxWidth = sprite1.x - sprite1.regX + sprite1.width + sprite2.x - sprite2.regX + sprite2.width - maxx + minx;	
			maxHeight = sprite1.y - sprite1.regY + sprite1.height + sprite2.y - sprite2.regY - sprite2.regY + sprite2.height - maxy + miny;	
			maxWidth = maxWidth > 0 ? maxWidth : 550;
			maxHeight = maxHeight > 0 ? maxHeight : 400;
			
			canvas = document.createElement(canvasId);
			canvas.setAttribute('width', maxWidth); 
			canvas.setAttribute('height', maxHeight);
			context = canvas.getContext('2d');
			
			/*第一种方法*/
			/*
			context.drawImage(sprite1.image, sprite1.x, sprite1.y);
			data1 = context.getImageData(minx, miny, maxx - minx, maxy - miny).data;
			context.clearRect(0, 0, maxWidth, maxHeight);
			context.drawImage(sprite2.image, sprite2.x, sprite2.y);
			data2 = context.getImageData(minx, miny, maxx - minx, maxy - miny).data;
			
			for(var i = 3; i < data1.length; i += 4)
			{
				if(data1[i] > 0 && data2[i] > 0) return true;
			}
			return false;
			*/
			//第二种方法
			context.drawImage(sprite1.image, sprite1.x - sprite1.regX, sprite1.y - sprite1.regY);
			context.globalCompositeOperation = 'source-in';
			context.drawImage(sprite2.image, sprite2.x - sprite2.regX, sprite2.y - sprite2.regY);
			var data = context.getImageData(minx, miny, maxx - minx, maxy - miny).data;
			context.globalCompositeOperation = 'source-over';
			
			for(var i = 3; i < data.length; i += 4)
			{
				if(data[i] > 0 ) return true;
			}
			return false;
		}
	}
	
	return {
		hitTest:hitTest
	}
}())