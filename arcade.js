/* Original hospital arcade artwork and bonus collectibles. */
let bonus=0,coins=[],coinStage=-1;
const arcadeUpdate=update,arcadeReset=reset;
reset=function(){bonus=0;coins=[];coinStage=-1;arcadeReset()};
update=function(dt){
 arcadeUpdate(dt);
 if(coinStage!==stage){coinStage=stage;coins=[]}
 if(travel&&!coins.length)coins=[810,865,920].map(x=>({x:segment+x,y:367,taken:false}));
 if(!locked&&!won)for(const coin of coins)if(!coin.taken&&Math.abs(player.x+14-coin.x)<24&&Math.abs(player.y+24-coin.y)<36){
  coin.taken=true;bonus++;tone(1047,0,.09,'sine',.12);tone(1568,.06,.12,'sine',.1);
  for(let i=0;i<8;i++)particles.push({x:coin.x,y:coin.y,vx:(Math.random()-.5)*100,vy:-80-Math.random()*90,life:.6});
 }
};
function block(x,y,w,h,top,base){rect(x,y,w,h,'#18304b');rect(x+2,y+2,w-4,h-4,base);rect(x+3,y+3,w-6,5,top);rect(x+w-6,y+7,3,h-10,'#0003')}
function badge(x,y){const w=4+Math.abs(Math.cos(clock*4+x))*6;ctx.fillStyle='#ffcf47';ctx.beginPath();ctx.ellipse(x,y,w,12,0,0,Math.PI*2);ctx.fill();rect(x-1,y-7,2,14,'#fff6ac')}
function arcadeNurse(){
 const x=Math.round(player.x-camera+14),y=Math.round(player.y+24);
 ctx.fillStyle='#153d4540';ctx.beginPath();ctx.ellipse(x,397,19,4,0,0,Math.PI*2);ctx.fill();
 ctx.save();ctx.translate(x,y);
 if(locked==='wrong')ctx.rotate(-.55);
 else if(!player.grounded)ctx.rotate(player.vx<0?-.12:.12);
 else if(!locked)ctx.translate(0,Math.sin(clock*(player.vx?18:3))*(player.vx?2:1));
 const stride=player.grounded&&player.vx?Math.sin(clock*18)*4:0;
 const lift=!player.grounded?-5:0;
 rect(-12,7,10,17+stride,'#24698a');rect(3,7,10,17-stride,'#24698a');
 rect(-14,21+stride,13,5,'#18304b');rect(3,21-stride,13,5,'#18304b');
 rect(-15,-9,30,22,'#36b9c6');rect(-12,-7,24,5,'#8aeee1');
 rect(-20,-6+lift,6,16,'#efc39a');rect(14,locked==='right'?-14:-6+lift,locked==='right'?17:6,locked==='right'?7:16,'#efc39a');
 rect(-10,-26,22,20,'#efc39a');rect(-13,-29,27,8,'#293b50');rect(-13,-22,5,8,'#293b50');
 rect(-5,-33,19,8,'#f5fff6');rect(2,-32,4,6,'#ed8294');rect(4,-18,4,4,'#182e47');rect(4,-10,7,2,'#a86557');rect(3,-3,8,10,'#fff1c0');
 ctx.restore();
}
draw=function(){
 const ward=Math.min(3,Math.floor(stage/6));
 const themes=[['#8cd5eb','#e8faf3','#56b6ab'],['#a0bff0','#edf1ff','#7b93cd'],['#f5b99b','#fff2dc','#dd8a67'],['#b6ace9','#f2edff','#9380c5']];
 const [sky,wall,trim]=themes[ward];ctx.clearRect(0,0,1000,450);rect(0,0,1000,450,sky);
 // Distant city and clouds move slower than the foreground.
 for(let i=-1;i<9;i++){const x=i*160-(camera*.2%160);rect(x,100-i%3*15,80,155,'#6d9bb54a');rect(x+12,115,12,22,'#ffffff60');rect(x+43,115,12,22,'#ffffff60')}
 for(let i=-1;i<7;i++){const x=i*220-((camera*.12+clock*3)%220);rect(x,67,68,14,'#ffffffa0');rect(x+14,55,37,16,'#ffffffa0')}
 const first=Math.floor(camera/1000);
 for(let section=first;section<=first+1;section++){
  const ox=section*1000-camera;
  rect(ox,185,1000,213,wall);rect(ox,185,1000,9,trim);rect(ox,304,1000,3,'#51878a35');
  for(let x=25;x<900;x+=225){
   block(ox+x,65,155,113,'#f6ffff',trim);rect(ox+x+7,73,141,96,sky);rect(ox+x+73,73,6,96,'#edffff');rect(ox+x+7,119,141,5,'#edffff');
   rect(ox+x+10,79,33,4,'#ffffff70');
  }
  // Bed, supplies, or monitors identify the ward without obstructing answers.
  for(let x=70;x<900;x+=350){
   if(ward===0){rect(ox+x,355,89,12,'#6c9ea8');rect(ox+x+3,344,80,11,'#ffffff');rect(ox+x+5,337,22,7,'#b9dce4');rect(ox+x+7,367,5,25,trim);rect(ox+x+76,367,5,25,trim)}
   else {block(ox+x,338,62,49,'#d9f2ef',trim);rect(ox+x+8,345,46,21,'#244b65');ctx.fillStyle='#7bf0bd';ctx.font='12px monospace';ctx.fillText(ward===3?'72 ♥':ward===2?'AKUT':'+ +',ox+x+14,360);rect(ox+x+8,389,8,8,'#274560');rect(ox+x+47,389,8,8,'#274560')}
  }
  // Solid, readable tiled floor and an exit flag.
  for(let x=0;x<1000;x+=40){block(ox+x,398,40,26,'#b5efc6',trim);block(ox+x,424,40,26,'#9bcbb6','#608d91')}
  rect(ox+952,186,6,212,'#f4ffff');const open=section===stage&&(travel||won);rect(ox+958,open?195:260,35,25,open?'#ffe064':trim);ctx.fillStyle='#23405c';ctx.font='bold 17px system-ui';ctx.fillText('+',ox+966,open?214:279);
  block(ox+925,321,70,77,'#e4fffa',trim);rect(ox+933,328,54,70,open?'#233e60':'#91c9d3');
  rect(ox+775,195,220,29,'#24425beF');ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 11px system-ui';ctx.fillText(stage===23?'MÅL':wards[Math.min(3,Math.floor((stage+1)/6))],ox+885,214,209);ctx.textAlign='left';
 }
 for(const p of platforms){
  const x=p.x-camera,color=p.state==='right'?'#72dfa0':p.state==='wrong'?'#f39399':'#ffd069';
  for(let b=0;b<p.w;b+=34)block(x+b,p.y,34,29,'#fff2b4',color);
  rect(x-5,p.y-45,p.w+10,35,'#203c55');rect(x-3,p.y-43,p.w+6,2,'#ffffeb');ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 20px system-ui';ctx.fillText(`${fmt(p.value)} ${question.unit}`,x+p.w/2,p.y-20,p.w-8);ctx.textAlign='left';
 }
 for(const coin of coins)if(!coin.taken)badge(coin.x-camera,coin.y+Math.sin(clock*5+coin.x)*3);
 arcadeNurse();
 for(const p of particles){ctx.globalAlpha=Math.max(0,Math.min(1,p.life));rect(p.x-camera,p.y,5,5,'#ffbe36')}ctx.globalAlpha=1;
 if(locked==='right'){const t=Math.max(0,2.3-transition+clock);ctx.fillStyle='#7afbea';ctx.beginPath();ctx.ellipse(player.x-camera+45+t*170,player.y+16,18,12,0,0,Math.PI*2);ctx.fill()}
 if(locked==='wrong'){ctx.fillStyle='#ae4055';ctx.font='bold 24px system-ui';ctx.fillText('!',player.x-camera+12,player.y-15)}
 rect(12,10,440,32,'#203c55');ctx.fillStyle='#fff';ctx.font='bold 13px system-ui';ctx.fillText(`${ward+1}–${stage%6+1}  ${wards[ward]}`,24,31);
 rect(810,10,178,32,'#203c55');ctx.fillStyle='#ffe07d';ctx.fillText(`BONUS  ${String(bonus).padStart(2,'0')}  ✦`,827,31);
 if(travel){ctx.fillStyle='#23445d';ctx.font='bold 17px system-ui';ctx.fillText('Samla bonus och gå till flaggan →',480,382)}
 if(won){rect(230,90,540,90,'#203c55');ctx.fillStyle='#ffe07d';ctx.textAlign='center';ctx.font='bold 25px system-ui';ctx.fillText('ALLA AVDELNINGAR KLARA!',500,127);ctx.font='18px system-ui';ctx.fillText(`${bonus} bonusmärken samlade`,500,159);ctx.textAlign='left'}
};
