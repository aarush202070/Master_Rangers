var canvas = new fabric.Canvas('myCanvas');




window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '82')
	{
		red_image('red.png'); 
		console.log("r")
    }

    if(keyPressed == '80')
	{
		pink_image('pink.png'); 
		console.log("p")
    }

    
if(keyPressed == '66')
{
    blue_image('blue.png'); 
    console.log("b")
}
if(keyPressed == '89')
{
    yellow_image('yellow.png'); 
    console.log("y")
}
if(keyPressed == '71')
{
    green_image('https://i.pinimg.com/originals/47/d4/f5/47d4f55b0db56ea6e693650c1633a5f5.png'); 
    console.log("g")
}
}

function pink_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object_p = Img;

	block_image_object_p.scaleToWidth(200);
	block_image_object_p.scaleToHeight(400);
	block_image_object_p.set({	top:220,	left:350
	});
	canvas.add(block_image_object_p);

	});

}

function blue_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object_b = Img;

	block_image_object_b.scaleToWidth(200);
	block_image_object_b.scaleToHeight(400);
	block_image_object_b.set({	top:120,	left:520
	});
	canvas.add(block_image_object_b);

	});

}


function yellow_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object_y = Img;

	block_image_object_y.scaleToWidth(200);
	block_image_object_y.scaleToHeight(400);
	block_image_object_y.set({	top:90,	left:750
	});
	canvas.add(block_image_object_y);

	});

}

function green_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object_g = Img;

	block_image_object_g.scaleToWidth(200);
	block_image_object_g.scaleToHeight(400);
	block_image_object_g.set({	top:250,	left:100
	});
	canvas.add(block_image_object_g);

	});

}

function red_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object_red = Img;

	block_image_object_red.scaleToWidth(200);
	block_image_object_red.scaleToHeight(400);
	block_image_object_red.set({	top:150,	left:10
	});
	canvas.add(block_image_object_red);

	});

}
