const renderer = new PIXI.WebGLRenderer();
const options = {width: 500, height: 300};
await renderer.init(options);
await document.getElementById("pixiPlayground").appendChild(renderer.canvas);

const dragonCanvas = document.getElementById("vanillarender");

const stage = new PIXI.Container();
const dragonContainer = new PIXI.Container();
stage.addChild(dragonContainer);
let dragonSprite, dragonTexture, accentSprite;

function drawVanilla () {
  var context1 = dragonCanvas.getContext('2d');
  context1.clearRect(0, 0, 350, 350);
  const imageObj = new Image();
  imageObj.onload = function () { context1.drawImage(imageObj, 0, 0); }
  imageObj.src = "https://www1.flightrising.com/rendern/350/242967/24296649_350.png";
  setTimeout(drawPixi, 2000);

}
drawVanilla();

function drawPixi () {
  let base64Data = dragonCanvas.toDataURL('image/png');
  const dragonTexture = await PIXI.Assets.load(base64Data);
  //const dragonTexture = PIXI.Texture.from(base64);
  //dragonTexture = PIXI.Texture.from(dragonCanvas, { resourceOptions: { dynamic: true } });
  dragonTexture = PIXI.Texture.from(texture);
  dragonSprite = new PIXI.Sprite(dragonTexture);
  accentSprite = new PIXI.Sprite();
  dragonContainer.addChild(dragonSprite, accentSprite);
  
  renderer.render(stage);
}

function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

const btn = document.getElementById("dragonbtn"); //type button
const input = document.getElementById("dragoninput"); //type url
//const accent = document.getElementById("accentselection"); //dropdown

btn.addEventListener("click", grabDragon);

function grabDragon() {
  if (input.value !== "") {
    dragonSprite.texture = new PIXI.Texture.from(input.value);
    dragonSprite.texture.dynamic = true;
    //requestAnimationFrame(animate);
    console.log(input.value);
  }
}

function onAccentSelect() {
  
}
