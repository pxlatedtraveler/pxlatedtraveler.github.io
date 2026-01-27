// Will be JS to handle PIXI JS

const renderer = new PIXI.WebGLRenderer();
const options = {width: 500, height: 300};
await renderer.init(options);
await document.getElementById("pixiPlayground").appendChild(renderer.canvas);

const stage = new PIXI.Container();
const sprite = new PIXI.Sprite(renderer.generateTexture(new PIXI.Graphics().beginFill(0X00CCaFF, 1).drawRect(0,0,100,100).endFill()));
stage.addChild(sprite);

renderer.render(stage);

function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
