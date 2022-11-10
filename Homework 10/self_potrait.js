var headX = 250
var headY = 300
var headDir = 5
var circX = 250
var circY = 350
var circDir = 3
var eye1X = 240
var eye1Y = 290
var eye1Dir = 7
var eye2X = 270
var eye2Y = 290
var eye2Dir = 7
var noseX = 261
var noseY = 303
var noseDir = 4
var size = 30
var count = 1
var sizeDir = 3


function setup()
{
    createCanvas(500, 600)
}

function draw()
{
    background(129,80,111);
    fill(500)
    circle(headX,headY,90);
    headX+=headDir;
    if(headX >= 500 || headX <= 40)
    {
        headDir *= -1;
    }

    circle(circX,circY,50);
    circY+=circDir;
    if(circY >= 500 || circY <= 40)
    {
        circDir *= -1;
    }

    line(250, 350, 250, 500);

    line(300, 550, 250, 500);

    line(250, 500, 200, 550);

    line(250, 400, 200, 350);

    line(250, 400, 300, 400);

   
    fill(0)
    { square(eye1X,eye1Y,10);}
    eye1X+=eye1Dir;
    if(eye1X >= 500 || eye1X <= 40)
    {
        eye1Dir *= -1;
    }
    { square(eye2X,eye2Y,10);}
    eye2Y+=eye1Dir;
    if(eye2Y >= 500 || eye2Y <= 40)
    {
        eye2Dir *= -1;
    }
    eye2X+=eye1Dir;
    if(eye2X >= 500 || eye2X <= 40)
    {
        eye2Dir *= -1;
    }

    point(noseX, noseY);
    noseY+=noseDir;
    if(noseY >= 500 || noseY <= 40)
    {
        noseDir *= -1;
    }

    triangle(250, 310, 270, 310, 260, 320);

    fill(500)
    text('Stick!', 100, 400);


    textSize(size);
    size+=sizeDir;
    count++;
    if(count > 5)
    {
        sizeDir *=-1;
        count=0
    }
    text('~Aleks~',10, 30);
   
}

