/* HangulWriter — stroke-order animation + guided tracing for Hangul jamo and syllables.
 * Works like Hanzi Writer on the Chinese sites: ▶ shows the strokes one by one,
 * ✍️ lets the learner draw each stroke with mouse / finger and checks shape, position and direction.
 * Coordinates: every jamo is drawn in a 0–100 box; syllables are composed by placing jamo in sub-boxes.
 */
(function(){
"use strict";
const circle=(cx,cy,rx,ry,n=40)=>{ const p=[]; for(let i=0;i<=n;i++){ const a=-Math.PI/2 - i*2*Math.PI/n; p.push([cx+rx*Math.cos(a), cy+ry*Math.sin(a)]); } return p; };

/* ---------- jamo stroke data (standard stroke order, print style) ---------- */
const J = {
 // consonants
 "ㄱ":[[[14,20],[80,20],[80,88]]],
 "ㄴ":[[[20,12],[20,84],[88,84]]],
 "ㄷ":[[[18,18],[84,18]],[[18,18],[18,84],[86,84]]],
 "ㄹ":[[[18,12],[80,12],[80,50]],[[18,50],[80,50]],[[18,50],[18,88],[84,88]]],
 "ㅁ":[[[18,15],[18,85]],[[18,15],[82,15],[82,85]],[[18,85],[82,85]]],
 "ㅂ":[[[20,12],[20,88]],[[80,12],[80,88]],[[20,48],[80,48]],[[20,88],[80,88]]],
 "ㅅ":[[[50,10],[48,38],[36,64],[14,88]],[[46,48],[64,70],[86,88]]],
 "ㅇ":[circle(50,50,34,36)],
 "ㅈ":[[[15,16],[78,16],[58,44],[16,88]],[[52,52],[86,88]]],
 "ㅊ":[[[50,3],[50,15]],[[15,24],[78,24],[58,50],[16,90]],[[52,58],[86,90]]],
 "ㅋ":[[[14,18],[80,18],[80,88]],[[14,52],[80,52]]],
 "ㅌ":[[[18,15],[84,15]],[[18,50],[84,50]],[[18,15],[18,85],[86,85]]],
 "ㅍ":[[[12,16],[88,16]],[[32,16],[34,82]],[[68,16],[66,82]],[[10,84],[90,84]]],
 "ㅎ":[[[50,2],[50,14]],[[16,24],[84,24]],circle(50,63,26,24)],
 // vowels
 "ㅏ":[[[40,6],[40,94]],[[40,48],[74,48]]],
 "ㅑ":[[[40,6],[40,94]],[[40,36],[74,36]],[[40,62],[74,62]]],
 "ㅓ":[[[22,48],[56,48]],[[58,6],[58,94]]],
 "ㅕ":[[[22,36],[56,36]],[[22,62],[56,62]],[[58,6],[58,94]]],
 "ㅗ":[[[50,30],[50,62]],[[8,64],[92,64]]],
 "ㅛ":[[[36,30],[36,62]],[[64,30],[64,62]],[[8,64],[92,64]]],
 "ㅜ":[[[8,36],[92,36]],[[50,38],[50,76]]],
 "ㅠ":[[[8,36],[92,36]],[[36,38],[36,76]],[[64,38],[64,76]]],
 "ㅡ":[[[8,50],[92,50]]],
 "ㅣ":[[[50,6],[50,94]]],
 "ㅐ":[[[30,6],[30,94]],[[30,48],[52,48]],[[64,6],[64,94]]],
 "ㅔ":[[[18,48],[42,48]],[[44,6],[44,94]],[[74,6],[74,94]]],
 "ㅒ":[[[30,6],[30,94]],[[30,36],[52,36]],[[30,62],[52,62]],[[64,6],[64,94]]],
 "ㅖ":[[[14,36],[40,36]],[[14,62],[40,62]],[[44,6],[44,94]],[[74,6],[74,94]]],
 "ㅘ":[[[32,40],[32,64]],[[6,66],[58,66]],[[68,6],[68,94]],[[68,48],[92,48]]],
 "ㅙ":[[[26,40],[26,64]],[[4,66],[48,66]],[[58,6],[58,94]],[[58,48],[74,48]],[[86,6],[86,94]]],
 "ㅚ":[[[34,40],[34,64]],[[6,66],[62,66]],[[76,6],[76,94]]],
 "ㅝ":[[[4,40],[54,40]],[[29,42],[29,74]],[[58,50],[74,50]],[[80,6],[80,94]]],
 "ㅞ":[[[4,40],[46,40]],[[25,42],[25,74]],[[50,50],[62,50]],[[66,6],[66,94]],[[88,6],[88,94]]],
 "ㅟ":[[[6,40],[62,40]],[[34,42],[34,74]],[[78,6],[78,94]]],
 "ㅢ":[[[6,60],[64,60]],[[78,6],[78,94]]]
};
/* doubled consonants & consonant clusters: two jamo side by side */
const PAIRS={"ㄲ":"ㄱㄱ","ㄸ":"ㄷㄷ","ㅃ":"ㅂㅂ","ㅆ":"ㅅㅅ","ㅉ":"ㅈㅈ","ㄳ":"ㄱㅅ","ㄵ":"ㄴㅈ","ㄶ":"ㄴㅎ","ㄺ":"ㄹㄱ","ㄻ":"ㄹㅁ","ㄼ":"ㄹㅂ","ㄽ":"ㄹㅅ","ㄾ":"ㄹㅌ","ㄿ":"ㄹㅍ","ㅀ":"ㄹㅎ","ㅄ":"ㅂㅅ"};

const CHO="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const JUNG="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
const JONG=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
const VERT="ㅏㅐㅑㅒㅓㅔㅕㅖㅣ", HORI="ㅗㅛㅜㅠㅡ";

function place(strokes, box){ const [x0,y0,x1,y1]=box, sx=(x1-x0)/100, sy=(y1-y0)/100; return strokes.map(s=>s.map(([x,y])=>[x0+x*sx, y0+y*sy])); }
function jamoStrokes(j, box=[0,0,100,100]){
  if(PAIRS[j]){ const [a,b]=PAIRS[j]; const [x0,y0,x1,y1]=box, mid=(x0+x1)/2, g=(x1-x0)*0.03;
    return place(jamoStrokes(a),[x0,y0,mid-g,y1]).concat(place(jamoStrokes(b),[mid+g,y0,x1,y1])); }
  if(!J[j]) return [];
  return place(J[j], box);
}
function isSyl(ch){ const c=ch.charCodeAt(0); return c>=0xAC00 && c<=0xD7A3; }
function decompose(ch){ const c=ch.charCodeAt(0)-0xAC00; return [CHO[Math.floor(c/588)], JUNG[Math.floor((c%588)/28)], JONG[c%28]]; }
/* returns [{jamo, role, strokes}] in writing order */
function syllableParts(ch){
  if(!isSyl(ch)) return [{jamo:ch, role:"j", strokes:jamoStrokes(ch,[6,6,94,94])}];
  const [l,v,t]=decompose(ch); const fin=!!t;
  let bl,bv,bt;
  if(VERT.includes(v)){ bl=fin?[6,6,54,50]:[6,12,54,88]; bv=fin?[50,2,96,62]:[50,4,96,96]; bt=[14,64,86,96]; }
  else if(HORI.includes(v)){ bl=fin?[20,3,80,32]:[18,5,82,46]; bv=fin?[4,22,96,64]:[4,34,96,94]; bt=[18,66,82,97]; }
  else { bl=fin?[10,2,50,24]:[8,4,50,34]; bv=fin?[2,6,98,62]:[2,6,98,96]; bt=[16,66,84,97]; }
  const parts=[{jamo:l,role:"L",strokes:jamoStrokes(l,bl)},{jamo:v,role:"V",strokes:jamoStrokes(v,bv)}];
  if(fin) parts.push({jamo:t,role:"T",strokes:jamoStrokes(t,bt)});
  return parts;
}
const HW = window.HangulWriter = { J, PAIRS, CHO, JUNG, JONG, isSyl, decompose, syllableParts, jamoStrokes };

/* ---------- geometry helpers ---------- */
const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
function plen(p){ let L=0; for(let i=1;i<p.length;i++) L+=dist(p[i-1],p[i]); return L; }
function resample(p,n=24){
  if(p.length<2) return Array(n).fill(p[0]||[0,0]);
  const L=plen(p), step=L/(n-1), out=[p[0]]; let acc=0;
  for(let i=1;i<p.length;i++){ let a=p[i-1], b=p[i], d=dist(a,b);
    while(acc+d>=step && out.length<n){ const t=(step-acc)/d; const q=[a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])]; out.push(q); a=q; d=dist(a,b); acc=0; }
    acc+=d; }
  while(out.length<n) out.push(p[p.length-1]);
  return out;
}
function match(user, target){
  const TL=plen(target);
  if(TL<10){ // tiny tick (top of ㅎ/ㅊ in a final): check place and size only
    const c=P=>[P.reduce((a,q)=>a+q[0],0)/P.length,P.reduce((a,q)=>a+q[1],0)/P.length];
    return {ok: dist(c(user),c(target))<10 && plen(user)<34, reversed:false}; }
  if(plen(user)<3) return {ok:false};
  const U=resample(user), T=resample(target);
  let avg=0; for(let i=0;i<U.length;i++) avg+=dist(U[i],T[i]); avg/=U.length;
  const tol=Math.max(10, Math.min(18, TL*0.32));
  const sOK=dist(U[0],T[0])<tol*1.7, eOK=dist(U[U.length-1],T[T.length-1])<tol*1.7;
  const lenOK=plen(user)>TL*0.4 && plen(user)<TL*2.4+20;
  // reversed?
  let rev=0; for(let i=0;i<U.length;i++) rev+=dist(U[i],T[T.length-1-i]); rev/=U.length;
  // direction: straight-ish strokes must go the same way; closed strokes (ㅇ) must turn the same way
  const tv=[T[T.length-1][0]-T[0][0],T[T.length-1][1]-T[0][1]], uv=[U[U.length-1][0]-U[0][0],U[U.length-1][1]-U[0][1]];
  let dirOK=true;
  if(Math.hypot(tv[0],tv[1])>TL*0.3){ dirOK = (tv[0]*uv[0]+tv[1]*uv[1])>0; }
  else { const area=P=>{let a=0;for(let i=1;i<P.length;i++)a+=P[i-1][0]*P[i][1]-P[i][0]*P[i-1][1];return a;}; dirOK = area(T)*area(U)>0; }
  return {ok: avg<tol && sOK && eOK && lenOK && dirOK, reversed: !dirOK || (rev<tol && rev<avg), avg};
}
const pathD=p=>"M"+p.map(q=>q[0].toFixed(1)+" "+q[1].toFixed(1)).join(" L");

/* ---------- the writer widget ---------- */
const NS="http://www.w3.org/2000/svg";
const el=(tag,attrs)=>{ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); return e; };
const COLORS={L:"#c0392b",V:"#1f5fbf",T:"#1e8449",j:"#1f2330"};

HW.create = function(container, text, opt={}){
  const size=opt.size||160, chars=Array.from(text);
  // one syllable per writer; multi-char text = several boxes handled by caller
  const ch=chars[0];
  const parts=syllableParts(ch);
  const strokes=[]; parts.forEach(p=>p.strokes.forEach(s=>strokes.push({pts:s,role:p.role,jamo:p.jamo})));
  const sw=opt.strokeWidth || (isSyl(ch)?7.2:9);
  const svg=el("svg",{viewBox:"0 0 100 100",width:size,height:size,class:"hw-svg"});
  // practice-paper guides
  const g0=el("g",{stroke:"#e9dcc8","stroke-width":"0.6","stroke-dasharray":"2 2"});
  g0.append(el("line",{x1:50,y1:0,x2:50,y2:100}),el("line",{x1:0,y1:50,x2:100,y2:50}));
  svg.append(el("rect",{x:.5,y:.5,width:99,height:99,fill:"#fffdf8",stroke:"#e2d3bb","stroke-width":"1",rx:"3"}),g0);
  const gOut=el("g",{fill:"none",stroke:"#e7e1d7","stroke-width":sw,"stroke-linecap":"round","stroke-linejoin":"round"});
  const gInk=el("g",{fill:"none","stroke-width":sw,"stroke-linecap":"round","stroke-linejoin":"round"});
  const gNum=el("g",{"font-size":"7","font-weight":"700","font-family":"system-ui,sans-serif"});
  const gUser=el("g",{fill:"none",stroke:"#2b7de9","stroke-width":sw*0.8,"stroke-linecap":"round","stroke-linejoin":"round",opacity:".75"});
  svg.append(gOut,gInk,gNum,gUser);
  strokes.forEach(s=>gOut.append(el("path",{d:pathD(s.pts)})));
  container.append(svg);
  const colorFor=s=>opt.mono?"#1f2330":COLORS[s.role];
  let timer=null, quiz=null, outlineOn=true;

  function clearInk(){ gInk.innerHTML=""; gNum.innerHTML=""; gUser.innerHTML=""; }
  function drawFull(){ clearInk(); strokes.forEach(s=>gInk.append(el("path",{d:pathD(s.pts),stroke:colorFor(s)}))); }
  function numLabel(i){ const s=strokes[i], p=s.pts[0];
    const c=el("circle",{cx:p[0],cy:p[1],r:4.2,fill:colorFor(s),opacity:".9"}); const t=el("text",{x:p[0],y:p[1]+2.4,"text-anchor":"middle",fill:"#fff"}); t.textContent=i+1; gNum.append(c,t); }
  function animStroke(i,dur){
    const s=strokes[i]; const p=el("path",{d:pathD(s.pts),stroke:colorFor(s)});
    gInk.append(p); const L=p.getTotalLength(); p.style.strokeDasharray=L; p.style.strokeDashoffset=L;
    p.getBoundingClientRect(); p.style.transition=`stroke-dashoffset ${dur}ms ease-in-out`; p.style.strokeDashoffset=0;
    return p;
  }
  const api={
    strokes, parts, char:ch,
    stop(){ clearTimeout(timer); timer=null; },
    animate(onDone){
      api.cancelQuiz(); api.stop(); clearInk(); let i=0;
      const next=()=>{ if(i>=strokes.length){ onDone&&onDone(); return; }
        const L=plen(strokes[i].pts), dur=Math.max(380, L*11)/(opt.speed||1);
        numLabel(i); animStroke(i,dur); i++; timer=setTimeout(next, dur+260/(opt.speed||1)); };
      next();
    },
    show(){ api.cancelQuiz(); api.stop(); drawFull(); },
    showNumbers(){ api.cancelQuiz(); api.stop(); drawFull(); strokes.forEach((_,i)=>numLabel(i)); },
    hide(){ api.stop(); clearInk(); },
    toggleOutline(){ outlineOn=!outlineOn; gOut.style.opacity=outlineOn?1:0; return outlineOn; },
    cancelQuiz(){ if(quiz){ quiz.off(); quiz=null; } },
    quiz(cb={}){
      api.stop(); api.cancelQuiz(); clearInk();
      let k=0, misses=0, totalMiss=0, cur=null, drawing=false;
      const pt=e=>{ const r=svg.getBoundingClientRect(); return [(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100]; };
      const down=e=>{ if(k>=strokes.length) return; e.preventDefault(); svg.setPointerCapture&&svg.setPointerCapture(e.pointerId); drawing=true; cur=[pt(e)];
        gUser.innerHTML=""; gUser.append(el("path",{d:pathD(cur)})); };
      const move=e=>{ if(!drawing) return; e.preventDefault(); const q=pt(e); if(dist(q,cur[cur.length-1])>0.8){ cur.push(q); gUser.firstChild.setAttribute("d",pathD(cur)); } };
      const up=e=>{ if(!drawing) return; drawing=false; gUser.innerHTML="";
        const m=match(cur, strokes[k].pts);
        if(m.ok){ const p=animStroke(k,160); k++; misses=0; cb.onCorrect&&cb.onCorrect(k,strokes.length);
          if(k>=strokes.length){ quiz.off(); quiz=null; cb.onComplete&&cb.onComplete({mistakes:totalMiss}); } }
        else { misses++; totalMiss++; svg.classList.remove("shake"); svg.getBoundingClientRect(); svg.classList.add("shake");
          cb.onMistake&&cb.onMistake(m.reversed?"reversed":"miss", k);
          if(misses>=2){ // hint: flash the expected stroke with its start point
            const s=strokes[k]; const hp=el("path",{d:pathD(s.pts),stroke:"#f5a623",opacity:".8"}); gInk.append(hp);
            const L=hp.getTotalLength(); hp.style.strokeDasharray=L; hp.style.strokeDashoffset=L; hp.getBoundingClientRect(); hp.style.transition="stroke-dashoffset 600ms"; hp.style.strokeDashoffset=0;
            const dot=el("circle",{cx:s.pts[0][0],cy:s.pts[0][1],r:4,fill:"#f5a623"}); gNum.append(dot);
            setTimeout(()=>{hp.remove();dot.remove();},1300); } } };
      svg.addEventListener("pointerdown",down); svg.addEventListener("pointermove",move); window.addEventListener("pointerup",up); svg.addEventListener("pointercancel",up);
      svg.style.touchAction="none"; svg.classList.add("quizzing");
      quiz={off(){ svg.removeEventListener("pointerdown",down); svg.removeEventListener("pointermove",move); window.removeEventListener("pointerup",up); svg.removeEventListener("pointercancel",up); svg.classList.remove("quizzing"); svg.style.touchAction=""; }};
    }
  };
  if(opt.start==="full") drawFull(); else if(opt.start==="numbers") api.showNumbers();
  return api;
};
})();
