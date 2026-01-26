// Will be JS to handle PIXI JS

const renderer = new WebGLRenderer();
const options = {width: 500px, height: 300px};
await renderer.init(options);

document.getElementById("pixiPlayground").appendChild(renderer.view);

//const stage = new PIXI.Container();
const sprite = new PIXI.Sprite(renderer.generateTexture(new PIXI.Graphic().beginFill(0X00CCaFF, 1).drawRect(0,0,400,50).endFill()));
renderer.stage.addChild(sprite);

renderer.render({
    target: stage,
    clear: true
});

function render() {
  renderer.render(renderer.stage);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
