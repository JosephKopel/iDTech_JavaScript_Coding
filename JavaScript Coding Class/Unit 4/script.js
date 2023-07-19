let canvas = document.getElementById("draw-me")
let ctx = canvas.getContext("2d")
ctx.canvas.width = 640
ctx.canvas.height = 480

let obj = {
    x: 0,
    y: 0,
    width: 10,
    height: 10
}





function draw(rect) {
    ctx.fillStyle = "red"
    ctx.fillRect(rect.x, rect.y,rect.width, rect.height)
}

draw(obj);

obj.x = 0;
obj.y = 0

function clear() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}


function update() {
    obj.x += 5
    obj.y += 5
    clear();
    draw(obj)   

}

setInterval(update,100)