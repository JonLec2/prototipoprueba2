class Controles{
    constructor(){
      
      this.button1=createButton("◀")
        this.button2=createButton('⊗')
        this.button3=createButton('▲')
    

    }

    hide(){
      this.button2.hide();
        this.button3.hide();
      }

display(){
    
  this.button1.position(20 , windowHeight/2+100);
  this.button1.style('background', '#FBBB21');
  this.button1.style('font-size', '60px');
  this.button1.style('color', 'white');
  this.button1.style('border-radius', '60px');
  this.button1.style('touch-action', 'none');


   
 this.button2.position(windowWidth-60 , windowHeight/2-70);
 this.button2.style('background', '#FBBB21');
 this.button2.style('font-size', '60px');
 this.button2.style('color', 'white');
 this.button2.style('border-radius', '60px');
 this.button2.style('touch-action', 'none');
 



 this.button3.position(20 , windowHeight/2);
 this.button3.style('background', '#FBBB21');
 this.button3.style('font-size', '60px');
 this.button3.style('color', 'white');
 this.button3.style('border-radius', '60px');
 this.button3.style('touch-action', 'none');
 


if(gameState===1){

  this.button1.touchStarted(()=>{
    if(spider.x>190){
    spider.x=spider.x-12
    }
else{
  spider.x=spider.x-0
}

return false;


  })



this.button2.touchStarted(()=>{

  if(spider.x>3500 && spider.x<4780){
    disparolaser=createSprite(spider.x, spider.y, 40, 10)
    disparolaser.addImage(laserultimo2Img)
    disparolaser.scale=0.1
    disparolaser.velocityX=+17
    disparolaser.lifetime=100
    disparolaserGroup.add(disparolaser)
   
      }


    if(spider.x>4800 && spider.x<6000){
    laserultimo=createSprite(spider.x, spider.y, 40, 10)
    laserultimo.addImage(laserultimo2Img)
    laserultimo.scale=0.1
    laserultimo.velocityX=+17
    laserultimo.lifetime=100
    laserultimoGroup.add(laserultimo)
    }

    if(spider.x>6025){
    laserultimo2=createSprite(spider.x, spider.y, 40, 10)
 laserultimo2.addImage(laserultimo2Img)
 laserultimo2.scale=0.1
    laserultimo2.velocityX=+17
    laserultimo2.lifetime=100
  laserultimo2Group.add(laserultimo2)
    }


return false;

})


this.button3.touchStarted(()=>{
    if(spider.y>300){
    spider.velocityY=spider.velocityY-31
    spider.maxSpeed=+15
    }

    else{
        spider.velocityY=spider.velocityY-0
        spider.maxSpeed=+15

    }
    return false;

})

}


}
}

