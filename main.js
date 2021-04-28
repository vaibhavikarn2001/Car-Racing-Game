canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_1_width=120;
car_1_height=70;
car_1_image="car1.png";
car_1_x=10;
car_1_y=10;
car_2_width=120;
car_2_height=70;
car_2_image="car2.png";
car_2_x=10;
car_2_y=100;
background_image="racing.jpg";
function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src= background_image;
    car_1_imgTag=new Image();
    car_1_imgTag.onload=uploadcar1;
    car_1_imgTag.src= car_1_image;
    car_2_imgTag=new Image();
    car_2_imgTag.onload=uploadcar2;
    car_2_imgTag.src= car_2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar1()
{
    ctx.drawImage(car_1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);

}

function uploadcar2() {
	ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}
window.addEventListener("keydown",my_keydown);


function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '38')
    {
       up();
       console.log("up");
    
    }
    if(keyPressed== '40')
    {
       down();
       console.log("down");
    
    }
    if(keyPressed== '37')
    {
       left();
       console.log("left");
    
    }
    if(keyPressed== '39')
    {
       right();
       console.log("right");
    }
    if(keyPressed== '87')
    {
       w();
       console.log("w");
    }
    if(keyPressed== '65')
    {
       a();
       console.log("a");
    }
    if(keyPressed== '83')
    {
       s();
       console.log("s");
    }
    if(keyPressed== '68')
    {
       d();
       console.log("d");
    }
    
}