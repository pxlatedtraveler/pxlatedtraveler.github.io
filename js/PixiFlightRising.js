const renderer = new PIXI.WebGLRenderer();
const options = {width: 500, height: 300};
await renderer.init(options);
await document.getElementById("pixiPlayground").appendChild(renderer.canvas);

const stage = new PIXI.Container();
const dragonContainer = new PIXI.Container();
const dragonTexture = new PIXI.Texture();
const dragonSprite = new PIXI.Sprite(dragonTexture);
const accentTexture = new PIXI.Texture();
const accentSprite = new PIXI.Sprite(accentTexture);
dragonContainer.addChild(dragonSprite, accentSprite);
stage.addChild(dragonContainer);

renderer.render(stage);

function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

const btn = document.getElementById("dragonbtn"); //type button
const input = document.getElementById("dragoninput"); //type url
//const accent = document.getElementById("accentselection"); //dropdown

input.addEventListener("click", grabDragon);

function grabDragon() {
  if (input.value !== "") {
    dragonSprite.texture = dragonTexture.from(input.value);
    // request new frame?
    console.log(input.value);
  }
}

function onAccentSelect() {
  
}
