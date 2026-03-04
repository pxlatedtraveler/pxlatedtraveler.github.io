const renderer = new PIXI.WebGLRenderer();
const options = {width: 500, height: 300};
await renderer.init(options);
await document.getElementById("pixiPlayground").appendChild(renderer.canvas);

const stage = new PIXI.Container();
const dragonContainer = new PIXI.Container();
const dragonSprite = new PIXI.Sprite(new PIXI.Texture.from("https://www1.flightrising.com/rendern/350/242967/24296649_350.png"));
const accentSprite = new PIXI.Sprite();
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
