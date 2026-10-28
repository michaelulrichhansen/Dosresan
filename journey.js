// Continuous corridor: world coordinates remain stable when a new task opens.
let camera=0,segment=0,travel=false;
let answerBag=[],recentSlots=[];
function nextAnswerSlot(){
 if(!answerBag.length)answerBag=shuffle([0,0,1,1,2,2]);
 let slotIndex=answerBag.findIndex(s=>recentSlots.length<2||s!==recentSlots[0]||s!==recentSlots[1]);
 // A bag contains only two copies of a slot; swap across a boundary if needed.
 if(slotIndex<0)slotIndex=0;
 const slot=answerBag.splice(slotIndex,1)[0];recentSlots.push(slot);recentSlots=recentSlots.slice(-2);return slot;
}
const numericalExercise=makeQuestion;
makeQuestion=function(){const q=numericalExercise(),a=q.answer;
 // Nearby, equally formatted alternatives; vary whether the answer is lowest,
 // middle or highest instead of making it the only plausible magnitude.
 const steps=[100,.25,100,1,.5,10,1,20,1,1,5,10,25,25,5,30,5,1,1.2,1,5,1,1,5];
 const step=steps[stage];
 const patterns=[[-2,-1],[-1,1],[1,2]].filter(pair=>pair.every(d=>a+d*step>0));
 const offsets=patterns[Math.floor(Math.random()*patterns.length)];
 const traps=offsets.map(d=>a+d*step);
 const clean=v=>Number(v.toPrecision(8));
 q.options=[a,...traps.map(clean)].filter((v,i,arr)=>v>0&&Number.isFinite(v)&&arr.indexOf(v)===i);
 for(let n=1;q.options.length<3;n++)if(!q.options.includes(a+n))q.options.push(a+n);
 return q;
};
// Preserve small unit-conversion distractors instead of rounding them to zero.
fmt=n=>Number(n.toPrecision(8)).toLocaleString('sv-SE',{maximumFractionDigits:8,useGrouping:false});
const loadTask=load;
load=function(){const worldX=player.x;loadTask();segment=stage*1000;const slot=nextAnswerSlot(),wrong=shuffle(question.options.filter(v=>v!==question.answer));platforms.forEach((p,i)=>{p.x+=segment;p.value=i===slot?question.answer:wrong.shift()});$('answers').textContent='Plattformar från vänster: '+platforms.map(p=>`${fmt(p.value)} ${question.unit}`).join(' · ');if(stage>0)player.x=Math.max(segment+35,worldX);else player.x=70;player.y=350;player.vy=0;travel=false;$('feedback').textContent='Hoppa till rätt svar — svaret registreras direkt när du landar på plattformen.';};
const resetGame=reset;reset=function(){camera=0;segment=0;travel=false;answerBag=[];recentSlots=[];resetGame()};
update=function(dt){clock+=dt;
 if(locked&&clock>=transition){if(locked==='right'){travel=true;locked=false;player.y=350;player.vy=0;player.grounded=true;$('feedback').textContent=stage%6===5?'Avdelningen klar! Fortsätt genom dörren →':'Vägen är öppen! Fortsätt åt höger →';}else{const x=player.x;load();player.x=Math.max(segment+35,x-100);$('feedback').textContent='Ny uppgift på samma nivå. Försök igen.';}}
 if(!locked&&!won){player.vx=(Number(keys.right)-Number(keys.left))*280;player.x=Math.max(segment,Math.min(segment+(travel?1050:970),player.x+player.vx*dt));const bottom=player.y+player.h;player.vy+=1550*dt;player.y+=player.vy*dt;player.grounded=false;
 if(!travel&&player.vy>=0)for(const p of platforms)if(bottom<=p.y&&player.y+player.h>=p.y&&player.x+player.w>p.x&&player.x<p.x+p.w){player.y=p.y-player.h;player.vy=0;player.grounded=true;choose(p);break}
 if(!locked&&player.y+player.h>=398){player.y=350;player.vy=0;player.grounded=true;}
 if(travel&&player.x>=segment+1010){if(stage===23){won=true;travel=false;$('heading').textContent='Sjukhusresan avklarad!';$('question').textContent='Du har passerat alla fyra avdelningar och 24 beräkningsmoment.';$('feedback').textContent='Snyggt jobbat! Börja om för en ny omgång.';sound('win');}else{stage++;load();}}
 }
 camera+=(Math.max(0,player.x-260)-camera)*Math.min(1,dt*7);
 for(const p of particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=400*dt}particles=particles.filter(p=>p.life>0);
};
const paint=draw;
draw=function(){const realX=player.x,realPlatforms=platforms,realParticles=particles,realWon=won;
 ctx.clearRect(0,0,1000,450);
 // Render adjacent corridor sections, then draw the current section with actors.
 const first=Math.floor(camera/1000);
 for(let section=first;section<=first+1;section++){
   const offset=section*1000;player.x=realX-offset;
   platforms=section===stage?realPlatforms.map(p=>({...p,x:p.x-offset})):[];
   particles=realParticles.map(p=>({...p,x:p.x-offset}));
   won=realWon;
   ctx.save();ctx.translate(offset-camera,0);paint();if(section===stage&&travel){rect(937,187,54,211,'#123c38');ctx.fillStyle='#83f6c9';ctx.font='bold 13px system-ui';ctx.fillText('ÖPPET →',925,162);}ctx.restore();
 }
 player.x=realX;platforms=realPlatforms;particles=realParticles;won=realWon;
 ctx.fillStyle='#081a2bed';ctx.fillRect(15,12,340,29);ctx.fillStyle='#b3f4e7';ctx.font='14px system-ui';ctx.fillText(`${wards[Math.min(3,Math.floor(stage/6))]} · ${stage%6+1}/6`,26,32);
};
document.querySelector('.controls span').textContent='← → förflytta · Mellanslag hoppa';
canvas.setAttribute('aria-label','Plattformsspel. Piltangenter förflyttar och mellanslag hoppar. Landa på en svarsplattform för att svara direkt.');
reset();
