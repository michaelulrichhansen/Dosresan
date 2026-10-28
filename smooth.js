/* Smooth vector artwork, high-resolution canvas and an integrated question panel. */
const gameShell=document.createElement('section');gameShell.className='game-shell';gameShell.setAttribute('aria-label','Dosresan – fråga och spel');
const questionPanel=document.querySelector('.question');
canvas.before(gameShell);gameShell.append(questionPanel,canvas,$('feedback'));
const smoothStyle=document.createElement('style');smoothStyle.textContent=`
.game-shell{margin:12px auto 18px;border:1px solid #5e8597;border-radius:22px;overflow:hidden;background:#172f46;box-shadow:0 18px 55px #0005}
.game-shell .question{position:relative;top:auto;margin:0;padding:18px 24px;border:0;border-bottom:1px solid #4c7183;border-radius:0;box-shadow:none;background:linear-gradient(120deg,#1e4056,#172e45)}
.game-shell #heading{font-size:14px;color:#9ce9dc;letter-spacing:.3px;margin-bottom:8px}
.game-shell #question{font-size:clamp(16px,1.8vw,20px);line-height:1.5;color:#fff;margin:0}
.game-shell #game{display:block;width:100%;max-width:100%;height:auto;border:0;border-radius:0;box-shadow:none;image-rendering:auto}
.game-shell #feedback{margin:0;padding:12px 24px;min-height:50px;background:#172e45;font-size:15px;line-height:1.5}
@media(max-width:600px){.game-shell{border-radius:14px}.game-shell .question{padding:14px}.game-shell #feedback{padding:10px 14px}}
`;document.head.append(smoothStyle);
function fitSmoothGame(){
 const width=document.querySelector('main').clientWidth-24;
 gameShell.style.width=Math.max(240,width)+'px';
 const ratio=Math.min(2,window.devicePixelRatio||1);
 canvas.width=Math.round(1000*ratio);canvas.height=Math.round(450*ratio);
 ctx.setTransform(ratio,0,0,ratio,0,0);ctx.imageSmoothingEnabled=true;
}
window.addEventListener('resize',fitSmoothGame);fitSmoothGame();
function softRect(x,y,w,h,color,r=6){ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,w,h,Math.min(r,w/2,h/2));ctx.fill()}
// Round architectural details, while long floor and wall surfaces remain flush.
rect=function(x,y,w,h,color){if(w>8&&h>8&&w<240)softRect(x,y,w,h,color,5);else{ctx.fillStyle=color;ctx.fillRect(x,y,w,h)}};
block=function(x,y,w,h,top,base){
 ctx.save();ctx.shadowColor='#18304b25';ctx.shadowBlur=8;ctx.shadowOffsetY=3;softRect(x,y,w,h,base,8);ctx.restore();
 const shine=ctx.createLinearGradient(x,y,x,y+h);shine.addColorStop(0,top);shine.addColorStop(.25,base);shine.addColorStop(1,base);softRect(x+1,y+1,w-2,h-2,shine,7);
};
arcadeNurse=function(){
 const x=player.x-camera+14,y=player.y+24;
 ctx.fillStyle='#153d4530';ctx.beginPath();ctx.ellipse(x,397,18,4,0,0,Math.PI*2);ctx.fill();
 ctx.save();ctx.translate(x,y);
 if(locked==='wrong')ctx.rotate(-.5);else if(!player.grounded)ctx.rotate(player.vx<0?-.1:.1);else ctx.translate(0,Math.sin(clock*(player.vx?18:3))*(player.vx?1.7:.7));
 const stride=player.grounded&&player.vx?Math.sin(clock*18)*4:0;
 softRect(-11,6,9,17+stride,'#296d8e',4);softRect(3,6,9,17-stride,'#296d8e',4);
 softRect(-13,20+stride,12,6,'#203b55',3);softRect(2,20-stride,13,6,'#203b55',3);
 softRect(-14,-10,28,25,'#3ab9c5',9);softRect(-9,-8,18,5,'#80e3df',2);
 softRect(-19,-6,6,17,'#efc39e',3);softRect(13,locked==='right'?-12:-6,locked==='right'?17:6,locked==='right'?7:17,'#efc39e',3);
 ctx.fillStyle='#293d52';ctx.beginPath();ctx.ellipse(0,-20,13,14,0,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#efc39e';ctx.beginPath();ctx.ellipse(1,-18,10,11,0,0,Math.PI*2);ctx.fill();
 softRect(-11,-31,23,7,'#f5fff7',3);softRect(-1,-31,4,7,'#e78497',1);
 ctx.fillStyle='#233b51';ctx.beginPath();ctx.arc(5,-19,1.8,0,Math.PI*2);ctx.fill();
 ctx.strokeStyle='#b97567';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(4,-14,3,0,Math.PI*.8);ctx.stroke();
 softRect(3,-3,7,9,'#fff3d0',2);ctx.restore();
};
