let numX=4;
let numY=7;
//let nb;
//emply arraylist 袋子
let nbs=[];

function setup() {
  createCanvas(400, 400);
  background(220);
  nb=new ourBall(width/2,height/2,50);
//for loop

  for (let i=0;i<numX;i=i+1){
  
  for (let j=0;j<numY;j=j+1){
    
    nbs.push(new ourBall 
             
          (i*width/numX+width/numX/2,
          j*height/numY+height/numY/2,
          50))
      
      
    
          //circle(i*width/numX+width/numX/2,
          //j*height/numY+height/numY/2,
          //20);
    
   
  }
   }
 
}

function draw() {
  
  background(220);
  //稱 list 裡面的每一個東西為v
  nbs.forEach(v=>{
    v.display();
    
    
    })
  //nb.run();
  //nb.display();
  //
}
class ourBall{
  //建構類別需要的參數
  constructor(x,y,s){
    this.x=x;
    this.y=y;
    this.size=s;
    //速度
    this.dx=0.3;
    this.dy=-0.5;
    this.color=color(50, 55, 100);
    }
  //能力method()
  display(){
    
  
    this.run();
    this.bounce();
    fill(this.color);
    circle(this.x,this.y,this.size)
    
  }
  run(){
    this.x=this.x+this.dx;
    this.y=this.y+this.dy;
  }
  bounce(){
    if (this.y-this.size<0)
    {this.dy=-1*this.dy;
    this.color=color(255, 0, 0);}//Upperside
    
    if (this.x+this.size>width)
    {this.dx=-1*this.dx;
    this.color=color(255, 0, 255);}//Right
    
    if (this.y+this.size>height)
    {this.dy=-1*this.dy;
    this.color=color(255, 255, 0);}//lower side
    
    if (this.x-this.size<0)
    {this.dx=-1*this.dx;
    this.color=color(255, 255, 255);}//Left
  }
}
  //checkmouse(){
    //line(this.x,this.y,mouseX,mouseY);
    //if (mouseX < this.x + this.size/2 && //&&= 且 的意思
        //mouseX > this.x - this.size/2 &&
       // mouseX < this.y + this.size/2 &&
        //mouseX > this.y - this.size/2
      // ){
     // circle(this)
   // }
        
  //}

  
  

  
  