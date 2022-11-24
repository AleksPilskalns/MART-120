var characterX = 100;
var characterY = 100;

var characterEyex =100;
var characterEyey =100;

var characterEye2x =120;
var characterEye2y =100;

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
    
    border(10);
    
    

   
    textSize(20);
    text("Go over here! -->", width-200,height-250)


    character();
    movement();

    fill(23,40,123);
    square(characterX,characterY,25);
    fill(10,10,10);
    square(characterEyex, characterEyey, 10)

    fill(10,10,10);
    square(characterEye2x, characterEye2y, 10)

    
   


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

    if(characterX > width && characterY > width-600)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Went Over There!", width/2-50, height/2-50);
    }

    fill(120,130,40);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


function character()
{fill(23,40,123);
    square(characterX,characterY,25);
    fill(10,10,10);
    square(characterEyex, characterEyey, 10)

    fill(10,10,10);
    square(characterEye2x, characterEye2y, 10)}

function border()
{rect(0,0,width,20);
   
    rect(0,0,20,height);
    
    rect(0, height-20,width, 20);}


function movement()
{ if(keyIsDown(w))
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



    if(keyIsDown(w))
    {
        characterEyey -= 10;   
    }
    if(keyIsDown(s))
    {
        characterEyey += 10;   
    }
    if(keyIsDown(a))
    {
        characterEyex -= 10;   
    }
    if(keyIsDown(d))
    {
        characterEyex += 10;   
    }



    if(keyIsDown(w))
    {
        characterEye2y -= 10;   
    }
    if(keyIsDown(s))
    {
        characterEye2y += 10;   
    }
    if(keyIsDown(a))
    {
        characterEye2x -= 10;   
    }
    if(keyIsDown(d))
    {
        characterEye2x += 10;   
    }}