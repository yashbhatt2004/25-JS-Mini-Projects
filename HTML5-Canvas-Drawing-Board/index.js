const canvas=document.querySelector('#drawing-board');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle='#00ffff';
ctx.lineCap='round';
ctx.lineJoin='round';
ctx.lineWidth=1;
let isDrawing=false;
let lastX=0;
let lastY=0;
let direction=true;
let hue=0;
ctx.globalCompositionOperation='destination-over';
let draw=(e)=>{
    if (!isDrawing){ return }
    console.log(e); 
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    hue=(hue+1)%360;
    if (ctx.lineWidth>=200 || ctx.lineWidth<=1){
        direction=!direction;
    }
    if (direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e)=>{
    lastX=e.offsetX;
    lastY=e.offsetY;
    ctx.lineWidth=1;
    isDrawing=true;
})
canvas.addEventListener('mouseup',()=>{
    isDrawing=false;
})
canvas.addEventListener('mouseout',()=>{
    isDrawing=false;
})