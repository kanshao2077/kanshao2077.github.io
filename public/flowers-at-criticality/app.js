(() => {
  'use strict';
  const works = window.FLOWER_WORKS;
  const grid = document.getElementById('works-grid');
  works.forEach((work, index) => {
    const figure = document.createElement('figure');
    figure.className = `artwork reveal${index === 2 || index === 5 ? ' wide' : ''}`;
    figure.innerHTML = `<button class="art-button" type="button" aria-label="查看作品 ${work.number}：${work.title}"><img src="assets/${work.id}.jpg" alt="${work.title}：${work.material}构成的虚拟花艺雕塑" width="1536" height="1024" loading="lazy"><span class="art-open" aria-hidden="true">↗</span></button><figcaption><div class="art-meta"><div class="art-caption"><span class="art-number">${work.number}</span><div><h3>${work.title}</h3><p class="art-en">${work.en}</p></div></div><span class="art-phase">${work.phase}</span></div><p class="art-quote">${work.quote}</p></figcaption>`;
    figure.querySelector('button').addEventListener('click', () => openWork(index));
    grid.appendChild(figure);
  });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  const dialog = document.getElementById('art-dialog');
  let activeWork = 0;
  function renderWork(index) {
    activeWork = (index + works.length) % works.length;
    const work = works[activeWork];
    document.getElementById('dialog-counter').textContent = `SPECIMEN ${work.number} / 08`;
    const image = document.getElementById('dialog-image');
    image.src = `assets/${work.id}.jpg`;
    image.alt = `${work.title}，${work.material}构成的虚拟花艺雕塑`;
    const fields = { 'dialog-phase': work.phase, 'dialog-title': work.title, 'dialog-en': work.en, 'dialog-description': work.description, 'dialog-material': work.material, 'dialog-concept': work.concept, 'dialog-quote': work.quote };
    Object.entries(fields).forEach(([id, text]) => { document.getElementById(id).textContent = text; });
    dialog.scrollTop = 0;
  }
  function openWork(index) { renderWork(index); dialog.showModal(); document.body.style.overflow = 'hidden'; }
  function closeWork() { document.body.style.overflow = ''; dialog.close(); }
  document.getElementById('close-dialog').addEventListener('click', closeWork);
  document.getElementById('previous-art').addEventListener('click', () => renderWork(activeWork - 1));
  document.getElementById('next-art').addEventListener('click', () => renderWork(activeWork + 1));
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
  dialog.addEventListener('cancel', () => { document.body.style.overflow = ''; });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeWork();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); renderWork(activeWork + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); renderWork(activeWork - 1); }
  });

  const ns = 'http://www.w3.org/2000/svg';
  function diagram(containerId, kind) {
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 240 240');
    svg.setAttribute('aria-hidden', 'true');
    const add = (tag, attributes) => { const node = document.createElementNS(ns, tag); Object.entries(attributes).forEach(([key,value]) => node.setAttribute(key, value)); svg.appendChild(node); return node; };
    add('path', { d: 'M120 25V215M25 120H215', stroke:'#d2d7ca', 'stroke-width':'.5', fill:'none' });
    [42,76,100].forEach(r => add('circle', { cx:120,cy:120,r,stroke:'#d2d7ca','stroke-width':'.5',fill:'none','stroke-dasharray':kind === 'time'?'2 5':'1 0' }));
    if (kind === 'time') {
      for(let j=0;j<4;j++) for(let i=0;i<12;i++) {
        const a=i*Math.PI/6+j*.2, radius=[14,30,52,78][j], cx=120+Math.cos(a)*radius, cy=120+Math.sin(a)*radius;
        add('ellipse',{cx,cy,rx:kind==='time'?6-j:5,ry:12-j*2,fill:['#747e69','#90928a','#839079','#454d40'][j],opacity:'.8',transform:`rotate(${a*180/Math.PI+90} ${cx} ${cy})`});
      }
      add('path',{d:'M187 61Q223 110 190 166',stroke:'#747e69','stroke-width':'1',fill:'none'});
      add('path',{d:'M190 166L192 152M190 166L204 162',stroke:'#747e69','stroke-width':'1',fill:'none'});
    } else {
      const count=kind==='form'?18:kind==='space'?32:40;
      for(let i=0;i<count;i++) {
        const a=i*Math.PI*2/count, r=kind==='form'?44:kind==='space'?42+(i%4)*8:36+(i%5)*13;
        const x=120+Math.cos(a)*r,y=120+Math.sin(a)*r;
        if(kind==='burst') add('line',{x1:120+Math.cos(a)*19,y1:120+Math.sin(a)*19,x2:x,y2:y,stroke:i%2?'#69745b':'#909a83','stroke-width':'.7',opacity:'.6'});
        add('ellipse',{cx:x,cy:y,rx:kind==='burst'?2.5:kind==='form'?8:5,ry:kind==='burst'?7:19,fill:i%3===0?'#90928a':'#747e69',opacity:'.8',transform:`rotate(${a*180/Math.PI+90} ${x} ${y})`});
        if(kind==='burst')add('circle',{cx:120+Math.cos(a)*104,cy:120+Math.sin(a)*104,r:'.8',fill:'#747e69'});
      }
      add('circle',{cx:120,cy:120,r:kind==='form'?14:10,fill:kind==='form'?'#747e69':'#eeefe9',stroke:'#747e69','stroke-width':'.7'});
    }
    document.getElementById(containerId).appendChild(svg);
  }
  diagram('diagram-form','form'); diagram('diagram-space','space'); diagram('diagram-burst','burst'); diagram('diagram-time','time');

  const canvas = document.getElementById('bloom-canvas');
  const ctx = canvas.getContext('2d');
  const slider = document.getElementById('bloom-time');
  const playButton = document.getElementById('play-toggle');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width=1,height=1, time=.44, playing=false, inView=false, dirty=true, pointerX=0,pointerY=0,lastTime=0, animationTime=0;
  let seed=2177;
  const random=() => { seed=(seed*16807)%2147483647;return (seed-1)/2147483646; };
  const petals=Array.from({length:290},(_,i)=>({angle:i*2.39996323, sphere:1-2*(i+.5)/290, radius:.2+random()*.8, length:12+random()*26, width:3+random()*7, jitter:random(), tone:Math.floor(random()*4)}));
  const dust=Array.from({length:160},()=>({x:random(),y:random(),alpha:random()*.35,size:random()*1.2+.2}));
  function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);dirty=true;}
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)dirty=true;},{threshold:.02}).observe(canvas);
  canvas.addEventListener('pointermove',event=>{const rect=canvas.getBoundingClientRect();pointerX=(event.clientX-rect.left)/width-.5;pointerY=(event.clientY-rect.top)/height-.5;dirty=true;});
  canvas.addEventListener('pointerleave',()=>{pointerX=pointerY=0;dirty=true;});
  function setTime(value){time=Math.max(0,Math.min(1,value));slider.value=Math.round(time*100);document.getElementById('time-label').textContent=`T + ${time.toFixed(2)}`;document.getElementById('lab-state').textContent=time<.24?'聚合':time<.52?'临界':time<.8?'喷发':'耗散';dirty=true;}
  function setPlaying(value){playing=value;playButton.setAttribute('aria-pressed',String(value));playButton.innerHTML=value?'<span aria-hidden="true">Ⅱ</span> 暂停演化':'<span aria-hidden="true">▶</span> 自动演化';}
  slider.addEventListener('input',()=>{setPlaying(false);setTime(Number(slider.value)/100);});
  playButton.addEventListener('click',()=>setPlaying(!playing));
  document.getElementById('reset-time').addEventListener('click',()=>{setPlaying(false);setTime(0);});
  function draw(now){
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle='#f0f1eb';ctx.fillRect(0,0,width,height);
    dust.forEach(p=>{ctx.fillStyle=`rgba(109,119,98,${p.alpha*.55})`;ctx.beginPath();ctx.arc(p.x*width,p.y*height,p.size,0,Math.PI*2);ctx.fill();});
    const scale=Math.min(width/760,height/590),cx=width*.5,cy=height*.45,base=height*.85;
    const explode=Math.max(0,(time-.46)/.54), bloom=Math.min(time/.46,1),radius=(48+bloom*87)*scale;
    const rotation=pointerX*.8+(reduceMotion?0:Math.sin(now*.00015)*.08), tilt=pointerY*.5;
    ctx.save();ctx.globalAlpha=1-Math.max(0,time-.8)*2;
    const metal=ctx.createLinearGradient(cx-20,0,cx+20,0);metal.addColorStop(0,'#353a34');metal.addColorStop(.35,'#d0d3c8');metal.addColorStop(.55,'#51594e');metal.addColorStop(.78,'#c8cfc1');metal.addColorStop(1,'#30362e');
    ctx.strokeStyle=metal;ctx.lineWidth=12*scale;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(cx,base);ctx.bezierCurveTo(cx-45*scale,base-45*scale,cx+45*scale,base-75*scale,cx,cy+radius*.8);ctx.stroke();
    ctx.fillStyle='#22291f';ctx.beginPath();ctx.ellipse(cx,base+8*scale,48*scale,6*scale,0,0,Math.PI*2);ctx.fill();ctx.restore();
    const visiblePetals=petals.map(p=>{
      const phi=p.angle+rotation, s=Math.sqrt(1-p.sphere*p.sphere),out=radius*(.35+p.radius*.65)+explode*explode*(180+p.jitter*320)*scale;
      const x=Math.cos(phi)*s*out, y=p.sphere*out, z=Math.sin(phi)*s*out;
      const y2=y*Math.cos(tilt)-z*Math.sin(tilt),z2=y*Math.sin(tilt)+z*Math.cos(tilt);
      return {...p,x:cx+x,y:cy+y2+explode*explode*65*scale,z:z2,perspective:Math.max(.45,1+z2/(900*scale)),angle2:Math.atan2(y2,x),opacity:Math.max(0,1-Math.max(0,time-.7)*2.5)*(z2<0?.55:1)};
    }).sort((a,b)=>a.z-b.z);
    const colors=['#89907e','#a89ca4','#645868','#d6d8cc'];
    visiblePetals.forEach(p=>{
      if(p.opacity<=0)return;
      ctx.globalAlpha=p.opacity;
      ctx.strokeStyle='rgba(94,113,65,.38)';ctx.lineWidth=.5;
      if(explode<.65){ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(p.x,p.y);ctx.stroke();}
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle2);
      const l=p.length*scale*p.perspective*(.6+bloom*.4)*(1-explode*.4),w=p.width*scale*p.perspective;
      ctx.fillStyle=colors[p.tone];ctx.beginPath();ctx.moveTo(-l*.2,0);ctx.bezierCurveTo(l*.3,-w,l*1.15,-w*.75,l,0);ctx.bezierCurveTo(l*.9,w*.9,l*.2,w*.75,-l*.2,0);ctx.fill();
      ctx.strokeStyle='rgba(245,246,240,.38)';ctx.lineWidth=.45;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(l*.6,-w*.1,l*.91,0);ctx.stroke();ctx.restore();
      if(explode>.05){ctx.fillStyle='rgba(92,108,77,.35)';ctx.beginPath();ctx.arc(p.x+Math.cos(p.angle2)*14*scale,p.y+Math.sin(p.angle2)*14*scale,.65*scale,0,Math.PI*2);ctx.fill();}
    });ctx.globalAlpha=1;
  }
  function loop(now){
    const delta=Math.min((now-lastTime)||16,60);lastTime=now;
    if(inView&&playing){animationTime+=delta;setTime((time+delta/24000)%1);}
    if(inView&&(dirty||(!reduceMotion&&Math.floor(now/50)!==Math.floor((now-delta)/50)))){draw(now);dirty=false;}
    requestAnimationFrame(loop);
  }
  setTime(time);requestAnimationFrame(loop);
})();
