
var bubbles = [];
var shell=0; 
function setup()
{
createCanvas(windowWidth, windowHeight);
 
for (var i =0; i<250; i++)
{
    bubbles.push(new bubble(random(0,width) , random(0,height) , random(39,90))); 
}

}


function draw()
{
background(shell); 

for (var i=0; i<bubbles.length; i++)
{
 
    bubbles[i].draw(); 
    bubbles[i].move(); 

    
}
}

function mousePressed()
{
 shell = 1;    
}

class bubble
{
    constructor(x,y,d)
    {
this.x = x; 
this.y = y; 
this.d = d; 
this.r =120; 
this.g = 0; 
this.b =0; 
    }
    draw()
    {
fill(this.r,this.g,this.b); 
ellipse(this.x, this.y, this.d);
    }
    move()
    {
this.x = this.x + random(-2, 2);
this.y= this.y + random(-2, 2);
    }

    clicked()
    {
        var distance = dist(mouseX, mouseY, this.x , this.y); 
        if (distance < this.d/2)
        {
this.r = random(100,255); 
this.g = random(100,255); 
this.b = random(100,255); 

        }
    }
}
function mousePressed()
{
    for (var i=0; i<bubbles.length; i++)
    {
        bubbles[i].r = 120; 
        bubbles[i].g=0; 
        bubbles[i].b =0 ;        
    }
}
function mouseMoved()
{
    for (var i=0; i<bubbles.length; i++)
    {
        bubbles[i].clicked(); 
    }  
}
