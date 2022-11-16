
var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeX1 = 70;
var shapeY1 = 40;
var shapeXSpeed1;
var shapeYSpeed1;


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeXSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(60,100,90);
    stroke(0);
    fill(0);
    
    rect(0,0,width,20);
   
    rect(0,0,20,height);
    
    rect(0, height-20,width, 20);
    
    rect(width-20,0,20,height-50);

   
    textSize(16);
    text("EXIT", width-80,height-50)

    
    fill(23,40,123);
    square(characterX,characterY,25);

    
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    
    fill(13,70,14);
   
    circle(shapeX, shapeY, 10);

     
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    fill(13,70,120);
   
    circle(shapeX1, shapeY1, 50);

     
     shapeXSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    
    shapeX1 += shapeXSpeed1;
    shapeY1 += shapeYSpeed1;
    
    if(shapeX1 > width)
    {
        shapeX1 = 0;
    }
    if(shapeX1 < 0)
    {
        shapeX1 = width;
    }
    if(shapeY1 > height)
    {
        shapeY1 = 0;
    }
    if(shapeY1 < 0)
    {
        shapeY1 = height;
    }

    
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    
    fill(120,130,40);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
