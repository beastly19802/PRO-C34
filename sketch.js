//Create variables here
var dog,dogimg,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  dog = createSprite(200,200,100,100)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  drawSprites();
  //add styles here
  textSize(20)
  text("Nate, press the up arrow to feed the dog milk!", 400,40)
}

function readStock(data) {
  foodS=data.val()
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}