/* Each exercise states all required data; fictional arithmetic training. */
const wards=['Medicin- och kirurgavdelningen','Akutvårdsavdelningen','Akutmottagningen','Intensivvården'];
document.querySelector('header span').textContent='SJUKHUSRESAN · 4 AVDELNINGAR';
let fmt=n=>String(Math.round(n*100)/100).replace('.',',');
const syllabus=[
 ['Gram till milligram','Mikrogram till milligram','Liter till milliliter','Tablettdos','Flytande läkemedel','Mängd i lösning'],
 ['Viktbaserad engångsdos','Dygnsdos fördelad på doser','Styrka efter spädning','Volym koncentrat','Mängd spädningsvätska','Procentstyrka'],
 ['Infusionshastighet','Minuter till ml/h','Dropptakt','Infusionstid','Tillförd mängd per timme','Återstående infusionstid'],
 ['Mikrogram/kg/min till ml/h','Omvänd infusionsberäkning','Vikt, spädning och tid','Maximal dygnsdos','Rekonstitution och deldos','Två spädningar och infusion']
];
function exercise(){const level=Math.floor(stage/6),i=stage%6,n=2+Math.floor(Math.random()*5);let text,answer,unit,solution;
 const set=(t,a,u,s)=>({text:t,answer:a,unit:u,solution:s});let q;
 if(level===0)q=[
 set(`Omvandla ${fmt(n/10)} g till mg.`,n*100,'mg',`${fmt(n/10)} × 1 000 = ${n*100} mg.`),
 set(`Omvandla ${n*250} mikrogram till mg.`,n/4,'mg',`${n*250} ÷ 1 000 = ${fmt(n/4)} mg.`),
 set(`Omvandla ${fmt(n/10)} liter till ml.`,n*100,'ml',`${fmt(n/10)} × 1 000 = ${n*100} ml.`),
 set(`Dosen är ${n*50} mg. Varje tablett innehåller 50 mg. Hur många tabletter behövs?`,n,'tabletter',`${n*50} ÷ 50 = ${n} tabletter.`),
 set(`Dosen är ${n*10+5} mg. Styrkan är 10 mg/ml. Vilken volym behövs?`,n+.5,'ml',`${n*10+5} ÷ 10 = ${fmt(n+.5)} ml.`),
 set(`En spruta innehåller ${n} ml med styrkan 20 mg/ml. Hur många mg innehåller sprutan?`,n*20,'mg',`${n} × 20 = ${n*20} mg.`)][i];
 if(level===1)q=[
 set(`Engångsdosen är 2 mg/kg. Vikten är ${n*10} kg och styrkan 10 mg/ml. Vilken volym behövs?`,n*2,'ml',`2 × ${n*10} ÷ 10 = ${n*2} ml.`),
 set(`Dygnsdosen är 12 mg/kg/dygn för ${n*10} kg, fördelad på 3 lika doser. Hur många mg ges per dos?`,n*40,'mg',`12 × ${n*10} ÷ 3 = ${n*40} mg per dos.`),
 set(`${n*100} mg späds till totalt 50 ml. Vilken blir styrkan?`,n*2,'mg/ml',`${n*100} ÷ 50 = ${n*2} mg/ml.`),
 set(`Du ska bereda 100 ml med styrkan ${n} mg/ml från 100 mg/ml. Hur många ml koncentrat behövs?`,n,'ml',`100 × ${n} ÷ 100 = ${n} ml koncentrat.`),
 set(`${n*100} mg finns i 10 ml. Slutstyrkan ska vara 10 mg/ml. Hur mycket spädningsvätska tillsätts?`,n*10-10,'ml',`Slutvolym ${n*100} ÷ 10 = ${n*10} ml. Tillsätt ${n*10} − 10 = ${n*10-10} ml.`),
 set(`En lösning är ${n} % (massa/volym), vilket betyder ${n} g per 100 ml. Vad är styrkan i mg/ml?`,n*10,'mg/ml',`${n} × 1 000 ÷ 100 = ${n*10} mg/ml.`)][i];
 if(level===2)q=[
 set(`${n*100} ml ska ges på 4 timmar. Vilken hastighet behövs?`,n*25,'ml/h',`${n*100} ÷ 4 = ${n*25} ml/h.`),
 set(`${n*50} ml ska ges på 40 minuter. Vilken hastighet behövs?`,n*75,'ml/h',`${n*50} ÷ 40 × 60 = ${n*75} ml/h.`),
 set(`${n*100} ml ska ges på 2 timmar. Aggregatet ger 20 droppar/ml. Ange droppar/min, avrundat till närmaste heltal.`,Math.round(n*100*20/120),'droppar/min',`${n*100} × 20 ÷ 120 ≈ ${Math.round(n*100*20/120)} droppar/min.`),
 set(`${n*100} ml ges med 100 ml/h. Hur många minuter tar infusionen?`,n*60,'min',`${n*100} ÷ 100 × 60 = ${n*60} minuter.`),
 set(`Styrkan är ${n} mg/ml och flödet 15 ml/h. Hur många mg tillförs per timme?`,n*15,'mg/h',`${n} × 15 = ${n*15} mg/h.`),
 set(`Infusionen innehöll ${n*100} ml. 100 ml har gått in. Flödet är 50 ml/h. Hur många timmar återstår?`,(n-1)*2,'h',`(${n*100} − 100) ÷ 50 = ${(n-1)*2} timmar.`)][i];
 if(level===3)q=[
 set(`Dosen är ${n} mikrogram/kg/min, vikten 60 kg och styrkan 1 mg/ml. Vilket flöde i ml/h behövs?`,n*3.6,'ml/h',`${n} × 60 × 60 ÷ 1 000 ÷ 1 = ${fmt(n*3.6)} ml/h.`),
 set(`Flödet är ${n*6} ml/h, styrkan 1 mg/ml och vikten 50 kg. Vilken dos ges i mikrogram/kg/min?`,n*2,'µg/kg/min',`${n*6} × 1 × 1 000 ÷ 50 ÷ 60 = ${n*2} mikrogram/kg/min.`),
 set(`Dosen är 5 mg/kg för ${n*10} kg. 5 ml av 100 mg/ml späds till 50 ml. Dosen ska ges på 30 minuter. Vilket flöde behövs?`,n*10,'ml/h',`Dos ${n*50} mg. Styrka 500 ÷ 50 = 10 mg/ml. Volym ${n*5} ml. ${n*5} ÷ 0,5 = ${n*10} ml/h.`),
 set(`I denna övning är maximal dygnsdos ${n*200} mg. Redan given mängd är ${n*100} mg. Styrkan är 50 mg/ml. Vilken ytterligare volym motsvarar återstående dygnsdos?`,n*2,'ml',`(${n*200} − ${n*100}) ÷ 50 = ${n*2} ml.`),
 set(`En flaska med ${n*200} mg löses till en total slutvolym på 20 ml. Dosen är ${n*50} mg. Vilken volym behövs?`,5,'ml',`Styrka ${n*200} ÷ 20 = ${n*10} mg/ml. ${n*50} ÷ ${n*10} = 5 ml.`),
 set(`2 ml av 100 mg/ml späds till 20 ml. Sedan späds 5 ml av den lösningen till 50 ml. Dosen ${n*10} mg ska ges på 30 minuter. Vilket flöde behövs?`,n*20,'ml/h',`Första styrkan: 200 ÷ 20 = 10 mg/ml. Andra: 5 × 10 ÷ 50 = 1 mg/ml. Dosvolym ${n*10} ml. Flöde ${n*10} ÷ 0,5 = ${n*20} ml/h.`)][i];
 q.answer=Math.round(q.answer*100)/100;q.options=[q.answer,Math.round(q.answer*2*100)/100,Math.round(q.answer*.5*100)/100];return q;
}
makeQuestion=exercise;
const oldLoad=load;load=function(){oldLoad();$('heading').textContent=`${wards[Math.floor(stage/6)]} · ${stage%6+1}/6 · ${syllabus[Math.floor(stage/6)][stage%6]}`};
const oldUpdate=update;
update=function(dt){if(locked==='right'&&clock+dt>=transition){if(stage===23){clock+=dt;won=true;locked=false;$('heading').textContent='Alla fyra avdelningar avklarade!';$('question').textContent='Du har tränat 24 olika beräkningsmoment.';$('feedback').textContent='Dörren är öppen. Börja om för nya tal.';sound('win');return}stage++;locked=false;load();clock+=dt;return}oldUpdate(dt)};
let audio=null,master=null,music=false,muted=false,musicId=null,noteIndex=0;
async function unlock(){try{if(!audio){const A=window.AudioContext||window.webkitAudioContext;if(!A)return;audio=new A();master=audio.createGain();master.gain.value=muted?0:.22;master.connect(audio.destination)}if(audio.state==='suspended')await audio.resume()}catch{}}
function tone(f,start,duration=.15,type='triangle',volume=.35,end=f){if(!audio||!master)return;const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+start;o.type=type;o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(end,t+duration);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.012);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g).connect(master);o.start(t);o.stop(t+duration+.02);o.onended=()=>{o.disconnect();g.disconnect()}}
function sound(type){try{if(muted)return;if(type==='jump')tone(220,0,.16,'square',.12,680);else if(type==='wrong'){tone(220,0,.18);tone(147,.15,.3)}else{(type==='win'?[523,659,784,1047]:[523,659,880]).forEach((f,i)=>tone(f,i*.09,.22))}}catch{}}
document.addEventListener('pointerdown',unlock);document.addEventListener('keydown',unlock);
const oldJump=jump;jump=function(){const ok=!locked&&!won&&player.grounded;oldJump();if(ok){sound('jump');for(let i=0;i<8;i++)particles.push({x:player.x+14,y:398,vx:(Math.random()-.5)*80,vy:-Math.random()*70,life:.3})}};
const oldChoose=choose;choose=function(p){oldChoose(p);sound(p.value===question.answer?'right':'wrong')};
const bar=document.createElement('div');bar.className='audio-bar';bar.innerHTML='<button id="sound" aria-pressed="true">♪ Ljud på</button><button id="music" aria-pressed="false">♫ Starta musik</button><span>Fyra avdelningar · 24 beräkningsmoment</span>';$('game').before(bar);
$('sound').onclick=async()=>{muted=!muted;await unlock();if(master)master.gain.value=muted?0:.22;$('sound').textContent=muted?'♪ Ljud av':'♪ Ljud på';$('sound').setAttribute('aria-pressed',String(!muted));canvas.focus()};
// Original eight-bar theme, 96 BPM: melody, soft harmony and a quiet pulse.
const musicPhrases=[
 [64,null,67,69,67,null,64,62], [60,null,64,67,64,null,62,null],
 [62,null,65,69,67,65,64,null], [62,67,null,71,69,null,67,null],
 [69,null,72,71,69,67,64,null], [67,64,null,60,62,null,64,null],
 [65,null,69,67,65,64,62,null], [67,null,62,64,62,null,60,null]
];
const musicChords=[[48,52,55],[45,48,52],[53,57,60],[43,47,50],[45,48,52],[48,52,55],[53,57,60],[43,47,50]];
const frequency=midi=>440*Math.pow(2,(midi-69)/12);
function musicTick(){
 if(!audio||audio.state!=='running'||document.hidden||muted)return;
 const bar=Math.floor(noteIndex/8)%8,beat=noteIndex%8,variation=Math.floor(noteIndex/64)%2;
 const phrase=musicPhrases[bar],chord=musicChords[bar];
 const note=variation&&beat===6?chord[2]+12:phrase[beat];
 if(note!==null)tone(frequency(note),0,beat===6?.48:.36,'triangle',.075);
 if(beat===0){chord.forEach(n=>tone(frequency(n+12),0,1.8,'sine',.022));tone(frequency(chord[0]-12),0,.65,'sine',.13);}
 if(beat===4)tone(frequency(chord[2]-12),0,.55,'sine',.10);
 if(beat===2||beat===6)tone(180,0,.06,'sine',.04,70);
 noteIndex++;
}
$('music').onclick=async()=>{await unlock();if(!audio){$('music').textContent='Ljud stöds inte';return}music=!music;$('music').textContent=music?'♫ Musik på':'♫ Starta musik';$('music').setAttribute('aria-pressed',String(music));clearInterval(musicId);if(music){musicTick();musicId=setInterval(musicTick,312.5)}canvas.focus({preventScroll:true})};
window.addEventListener('blur',()=>{if(audio)audio.suspend().catch(()=>{})});
draw=function(){const palettes=[['#102b44','#19445c','#57d9c1'],['#1a2648','#2d4069','#8cbdff'],['#30243e','#543b59','#ffbc7a'],['#172947','#28495c','#c3a1ff']],c=palettes[Math.min(3,Math.floor(stage/6))];ctx.clearRect(0,0,1000,450);const bg=ctx.createLinearGradient(0,0,0,450);bg.addColorStop(0,c[0]);bg.addColorStop(1,c[1]);ctx.fillStyle=bg;ctx.fillRect(0,0,1000,450);
for(let x=0;x<1000;x+=100){rect(x,0,2,398,'#ffffff09');rect(x+4,190,90,2,'#ffffff08')}rect(0,19,1000,5,'#081a30');rect(0,181,1000,5,'#071c30');rect(0,188,1000,3,c[2]);
for(let x=50;x<900;x+=300){ctx.shadowColor=c[2];ctx.shadowBlur=18;rect(x,31,180,5,c[2]);ctx.shadowBlur=0;rect(x+18,58,146,104,'#081a30');rect(x+24,64,134,92,'#315b79');for(let j=0;j<5;j++)rect(x+28+j*26,110-j%3*15,21,46+j%3*15,'#163b57');rect(x+88,64,4,92,'#78b8cf');rect(x+24,108,134,3,'#78b8cf');}
// Quiet background life stays behind the answer labels and play area.
const ward=Math.min(3,Math.floor(stage/6));
for(let j=0;j<3;j++){
 const x=85+j*300+((clock*9+j*27)%80),y=130;
 ctx.globalAlpha=.22;rect(x,y-20,9,9,'#d7f6ef');rect(x-3,y-10,15,20,c[2]);
 rect(x-2,y+10,5,10+Math.sin(clock*3+j)*2,'#a2c7d8');rect(x+6,y+10,5,10-Math.sin(clock*3+j)*2,'#a2c7d8');ctx.globalAlpha=1;
}
// Each ward has its own equipment silhouette.
if(ward===0){
 rect(492,357,108,12,'#b4d9df');rect(500,345,92,12,'#e0eee9');rect(503,339,24,8,'#f5fcf5');rect(490,334,5,47,'#709ba9');rect(600,347,5,34,'#709ba9');rect(502,370,5,20,'#709ba9');rect(585,370,5,20,'#709ba9');
}else if(ward===1){
 rect(510,322,74,61,'#406589');for(let y=331;y<380;y+=16){rect(515,y,64,12,'#6993ad');rect(540,y+5,14,2,'#d9ecec')}rect(505,315,84,7,'#b0cdd9');rect(517,384,9,9,'#091b2e');rect(570,384,9,9,'#091b2e');
}else if(ward===2){
 rect(495,350,110,10,'#efb07e');rect(500,340,32,10,'#f2e6d1');rect(504,360,5,30,'#9cb6c5');rect(590,360,5,30,'#9cb6c5');rect(510,370,80,4,'#9cb6c5');
}else{
 rect(520,313,56,40,'#0a1c31');rect(525,318,46,26,'#234d59');ctx.fillStyle=c[2];ctx.font='12px monospace';ctx.fillText('72 ♥',530,336);rect(545,353,5,37,'#9cb6c5');rect(533,388,28,4,'#9cb6c5');rect(600,320,4,70,'#9cb6c5');rect(589,330,26,30,'#d5e5e5');rect(593,335,18,10,'#538e9a');
}
rect(480,204,135,22,'#081b2c');ctx.fillStyle=c[2];ctx.font='11px system-ui';ctx.textAlign='center';ctx.fillText(['VÅRDRUM','OBSERVATION','AKUT','ÖVERVAKNING'][ward],547,219);ctx.textAlign='left';
// Equipment: bedside monitor, trolley, IV stand, supply shelves.
rect(24,230,78,54,'#071a2b');rect(29,235,68,40,'#123744');ctx.strokeStyle=c[2];ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<65;i++){const yy=254+(i===25?-13:i===29?12:Math.sin((i+clock*18)*.2)*2);if(!i)ctx.moveTo(30+i,yy);else ctx.lineTo(30+i,yy)}ctx.stroke();rect(60,284,5,38,'#6a94a7');rect(15,322,100,8,'#547d94');rect(20,330,90,45,'#294d68');rect(29,342,72,2,'#6a94a7');rect(25,379,12,12,'#091b2e');rect(91,379,12,12,'#091b2e');
rect(180,215,3,173,'#709ba9');rect(166,215,30,3,'#709ba9');rect(168,224,15,26,'#a9e6e0');rect(170,235,11,13,'#57b7c3');rect(174,250,2,50,'#86bec8');rect(164,388,35,3,'#709ba9');
for(let x=370;x<=670;x+=300){rect(x,315,85,64,'#1a384e');rect(x,315,85,5,'#72a9b5');for(let j=0;j<4;j++){rect(x+9+j*18,330,10,24,'#c8e5dc');rect(x+10+j*18,327,8,5,c[2]);rect(x+10+j*18,341,8,6,c[2])}}
rect(931,180,66,218,'#071a2b');rect(937,187,54,211,won?'#378f80':'#42667b');rect(943,204,42,66,'#9cdad8');rect(975,305,7,5,'#f9dc8e');rect(918,144,80,26,c[2]);ctx.fillStyle='#102b44';ctx.font='bold 12px system-ui';ctx.fillText(won?'ÖPPET':'UTGÅNG',927,162);
rect(0,398,1000,52,'#112b40');rect(0,398,1000,6,c[2]);for(let x=0;x<1000;x+=50){rect(x,409,47,2,'#42667b');rect(x+20,435,47,2,'#42667b')}ctx.fillStyle='#adc9d4';ctx.font='12px system-ui';ctx.fillText('SÄKER GÅNGVÄG',20,432);
platforms.forEach((p,i)=>{const pc=p.state==='right'?'#71f4ad':p.state==='wrong'?'#ff8093':c[2];ctx.shadowColor=pc;ctx.shadowBlur=12;rect(p.x,p.y,p.w,5,pc);ctx.shadowBlur=0;rect(p.x,p.y+5,p.w,20,'#0a2036');rect(p.x+6,p.y+8,p.w-12,4,'#41637b');rect(p.x+15,p.y+25,30,4,pc);rect(p.x+p.w-45,p.y+25,30,4,pc);rect(p.x-3,p.y-44,p.w+6,34,'#071a2be8');ctx.fillStyle='#f5fbff';ctx.textAlign='center';ctx.font='bold 20px system-ui';ctx.fillText(`${fmt(p.value)} ${question.unit}`,p.x+p.w/2,p.y-20,p.w-8);ctx.textAlign='left';});
// Original pixel-style nurse; shadow, face, uniform and animated limbs.
ctx.fillStyle='#06192977';ctx.beginPath();ctx.ellipse(player.x+14,398,22,5,0,0,Math.PI*2);ctx.fill();ctx.save();ctx.translate(Math.round(player.x+14),Math.round(player.y+24));if(locked==='wrong')ctx.rotate(Math.sin(clock*12)*.15);if(locked==='right')ctx.translate(0,-Math.abs(Math.sin(clock*7))*5);const walk=player.grounded&&Math.abs(player.vx)>0?Math.sin(clock*18)*4:0;
rect(-12,7,10,17+walk,'#26718e');rect(3,7,10,17-walk,'#26718e');rect(-14,21+walk,13,5,'#d6f6ee');rect(3,21-walk,13,5,'#d6f6ee');rect(-15,-9,30,22,'#44b8c3');rect(-12,-7,24,5,'#74e6db');rect(-19,-6,6,16,'#edbe94');rect(14,-6,6,16,'#edbe94');rect(-10,-26,22,20,'#edbe94');rect(-13,-29,27,8,'#26354a');rect(-13,-22,5,8,'#26354a');rect(-5,-31,19,6,'#e5f9ec');rect(2,-31,4,6,'#e77987');rect(4,-18,4,4,'#182e47');rect(5,-9,6,2,'#ac665a');rect(3,-3,8,10,'#fff1c0');rect(-7,-6,3,9,'#163f5f');ctx.restore();for(const p of particles){ctx.globalAlpha=Math.max(0,Math.min(1,p.life));rect(p.x,p.y,4,4,'#ffdf8a')}ctx.globalAlpha=1;
for(let i=0;i<6;i++)rect(435+i*22,10,14,5,i<stage%6||won?c[2]:'#496078');if(won){rect(255,80,490,100,'#071a2bf0');ctx.fillStyle='#8cf1c9';ctx.font='bold 28px system-ui';ctx.textAlign='center';ctx.fillText('SJUKHUSRESAN AVKLARAD',500,140);ctx.textAlign='left'}};
const overview=document.createElement('details');overview.innerHTML='<summary>Kunskapskarta · 24 moment</summary>'+syllabus.map((list,i)=>`<h3>${i+1}. ${wards[i]}</h3><p>${list.join(' · ')}</p>`).join('')+'<p>Översikten täcker centrala beräkningsmoment. Kursens specifika lärandemål behöver jämföras med kartan.</p>';document.querySelector('main').append(overview);reset();

// Foreground effects use the same world coordinates as the corridor renderer.
const roomArtwork=draw;
draw=function(){
 roomArtwork();
 const accent=['#57d9c1','#8cbdff','#ffbc7a','#c3a1ff'][Math.min(3,Math.floor(stage/6))];
 ctx.save();
 // A door sign tells the player where the journey leads.
 rect(800,95,195,36,'#071a2bf0');ctx.fillStyle=accent;ctx.textAlign='center';ctx.font='bold 11px system-ui';
 const nextWard=Math.min(3,Math.floor((stage+1)/6));
 ctx.fillText(stage===23?'SLUTMÅL':wards[nextWard],897,110,185);
 ctx.font='10px system-ui';ctx.fillStyle='#c0d6df';ctx.fillText(stage%6===5?'NÄSTA AVDELNING →':'FORTSÄTT GENOM DÖRREN →',897,124,185);
 if(!player.grounded&&!locked){
  ctx.globalAlpha=.3;ctx.strokeStyle=accent;ctx.lineWidth=2;
  for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(player.x-6-i*5,player.y+20+i*7);ctx.lineTo(player.x-13-i*5,player.y+30+i*7);ctx.stroke()}
 }
 ctx.globalAlpha=1;
 if(locked==='right'){
  const elapsed=Math.max(0,2.3-(transition-clock));
  const x=player.x+34+elapsed*160,y=player.y+20;
  ctx.shadowBlur=22;ctx.shadowColor='#6ffff0';ctx.fillStyle='#aaffef';
  ctx.beginPath();ctx.ellipse(x,y,17,12,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#56dace';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x-55,y);ctx.lineTo(x-20,y);ctx.stroke();ctx.shadowBlur=0;
  for(let i=0;i<10;i++){const a=i*Math.PI/5+elapsed,r=25+elapsed*30;ctx.fillStyle=i%2?'#fff0a6':accent;ctx.fillRect(player.x+14+Math.cos(a)*r,player.y+15+Math.sin(a)*r,4,4)}
 }else if(locked==='wrong'){
  ctx.strokeStyle='#ffc1a8';ctx.lineWidth=3;
  for(let i=0;i<3;i++){const x=player.x-15-i*10;ctx.beginPath();ctx.moveTo(x,player.y+44);ctx.lineTo(x-10,player.y+48);ctx.stroke()}
  ctx.fillStyle='#ffd093';ctx.font='bold 20px system-ui';ctx.fillText('!',player.x+14,player.y-16+Math.sin(clock*6)*3);
 }
 if(typeof travel!=='undefined'&&travel){
  ctx.globalAlpha=.5+Math.sin(clock*4)*.2;ctx.strokeStyle='#9bfbd9';ctx.lineWidth=3;
  for(let x=770;x<920;x+=35){ctx.beginPath();ctx.moveTo(x,417);ctx.lineTo(x+9,423);ctx.lineTo(x,429);ctx.stroke()}
 }
 ctx.restore();
};
