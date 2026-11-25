/* Lesson widgets + page renderers */
(function(){
"use strict";
const W=window.Widgets={};
const LES=()=>window.LESSONS||{};
const koCell=x=>{ const s=L(x); if(!isKo(s)||/<[a-z]/i.test(s)) return h("span",{html:rich(s)});
  const span=h("span"); s.split(/([\u3131-\u318E\uAC00-\uD7A3][\u3131-\u318E\uAC00-\uD7A3\s~?!.,()]*)/).forEach(part=>{ if(!part) return;
    if(isKo(part)){ const t2=part.trim(); span.append(h("span",{class:"kchip ko","data-say":t2.replace(/\(.*?\)/g,"")},t2)," "); } else span.append(part); }); return span; };

/* ---------- generic ---------- */
W.cards=s=>h("div",{class:"cards"},s.items.map(c=>h("div",{class:"card"},c.icon?h("div",{class:"ci"},c.icon):null,h("h4",{html:rich(L(c.title))}),c.body?h("p",{html:rich(L(c.body))}):null,c.ko?h("div",{class:"cko"},koCell(c.ko),h("button",{class:"wbtn sm",onclick:()=>openWriter(c.ko)},"✍️")):null)));
W.tip=s=>h("div",{class:"tip "+(s.kind||"")},h("span",{class:"ti"},s.icon||"💡"),h("div",{html:rich(L(s.body))}));
W.table=s=>{ const tb=h("table",{class:"tbl"}); if(s.cols) tb.append(h("thead",null,h("tr",null,s.cols.map(c=>h("th",{html:rich(L(c))})))));
  tb.append(h("tbody",null,s.rows.map(r=>h("tr",null,r.map(c=>h("td",null,koCell(c))))))); return h("div",{class:"tbl-wrap"},tb); };
W.timeline=s=>h("div",{class:"timeline"},s.items.map(c=>h("div",{class:"tl"},h("div",{class:"yr"},L(c.year)),h("div",null,h("h4",{html:rich(L(c.title))}),h("p",{html:rich(L(c.body))})))));
W.writers=s=>h("div",{class:"writers"},Array.from(s.chars).filter(c=>c.trim()).map(c=>writerBox(c,s.size||130,{start:"numbers"})));
W.video=s=>s.src?h("div",{class:"video"},h("h4",null,t("videoTitle")),s.yt?h("iframe",{src:s.src,allowfullscreen:true,loading:"lazy"}):h("video",{src:s.src,controls:true,preload:"metadata"})):null;

/* jamo cards: big letter, name, sound, tip, examples, write */
W.jamo=s=>h("div",{class:"jamos"},s.items.map(j=>{
  const card=h("div",{class:"jamo"});
  card.append(h("div",{class:"jtop"},h("button",{class:"jbig ko",onclick:()=>say(j.j)},j.j),
      h("div",{class:"jinfo"},j.name?h("div",{class:"jname ko"},j.name):null,h("div",{class:"jrom"},"[",h("b",null,j.rom),"]"),
        h("div",{class:"jbtns"},sayBtn(j.say||j.j),h("button",{class:"wbtn sm",onclick:()=>openWriter(j.j,j.name)},"✍️")))),
    j.tip?h("p",{class:"jtip",html:rich(L(j.tip))}):null,
    j.ex?h("div",{class:"jex"},j.ex.map(e=>h("span",{class:"e"},koCell(e.ko),h("small",null,L(e.m))))):null);
  return card; }));

/* contrast sets: e.g. 가 / 카 / 까 — play each, then a mini "what did you hear" */
W.contrast=s=>{ const wrap=h("div",{class:"contrast"});
  s.sets.forEach(set=>{ const row=h("div",{class:"crow"});
    set.forEach((x,i)=>row.append(h("button",{class:"cbtn",onclick:e=>TTS.speak(x.ko,{btn:e.currentTarget,rate:.7})},h("span",{class:"ko"},x.ko),h("small",null,L(x.lab)||""))));
    const quizBtn=h("button",{class:"btn ghost sm",onclick:()=>{ const pick=set[Math.floor(Math.random()*set.length)]; row._ans=pick.ko; TTS.speak(pick.ko,{rate:.75}); fb.textContent="❓ "+(getLang()==="es"?"¿Cuál fue? Toca la opción.":"Which one? Tap it."); row.classList.add("quiz"); }},"🎲");
    const fb=h("span",{class:"cfb"});
    row.addEventListener("click",e=>{ const b=e.target.closest(".cbtn"); if(!b||!row.classList.contains("quiz")) return; const ok=$(".ko",b).textContent===row._ans; fb.textContent=ok?"✅ "+t("correct"):"❌ "+row._ans; row.classList.remove("quiz"); },true);
    wrap.append(h("div",{class:"cset"},row,h("div",{class:"cq"},quizBtn,fb))); });
  return wrap; };

/* word list to read: reveal romanization / meaning */
W.read=s=>h("div",{class:"readlist"},s.items.map(w=>{ const m=h("div",{class:"rm"},h("span",{class:"rom"},w.rom||""),h("span",null,L(w.m)||""));
  return h("div",{class:"rw",onclick:e=>{ if(e.target.closest("button")) return; m.classList.toggle("on"); say(w.ko); }},h("span",{class:"ko"},w.ko),m,h("button",{class:"wbtn sm",onclick:()=>openWriter(w.ko,L(w.m))},"✍️")); }));

/* dialogue */
W.dialog=s=>{ const lines=s.lines; const box=h("div",{class:"dialog"}); let stop=false;
  const play=h("button",{class:"btn ghost sm",onclick:async()=>{ if(play._on){ stop=true; TTS.stop(); return; } play._on=true; stop=false; play.textContent=t("stop");
    const rows=$$(".dl",box); for(let i=0;i<lines.length&&!stop;i++){ rows[i].classList.add("cur"); await TTS.speak(lines[i].ko); rows[i].classList.remove("cur"); await new Promise(r=>setTimeout(r,350)); }
    play._on=false; play.textContent=t("playDialog"); }},t("playDialog"));
  box.append(h("div",{class:"dhead"},s.title?h("b",{html:rich(L(s.title))}):h("b",null,t("dialog")),play));
  lines.forEach(l=>box.append(h("div",{class:"dl "+(l.who==="B"?"b":"a")},h("span",{class:"who"},l.name||l.who),
    h("div",{class:"bub"},h("div",{class:"ko"},l.ko," ",sayBtn(l.ko)),l.rom?h("div",{class:"rom"},l.rom):null,h("div",{class:"tr"},L(l.tr))))));
  return box; };

/* pronunciation rules: word → [pronunciation] */
W.rules=s=>h("div",{class:"rules"},s.items.map(r=>h("div",{class:"rule"},h("h4",{html:rich(L(r.name))}),h("p",{html:rich(L(r.body))}),
  h("div",{class:"rex"},r.ex.map(e=>h("button",{class:"rx",onclick:ev=>TTS.speak(e[0],{btn:ev.currentTarget,rate:.75})},h("span",{class:"ko"},e[0]),e[1]&&e[1]!==e[0]?h("span",{class:"arr"},"→"):null,e[1]&&e[1]!==e[0]?h("span",{class:"ko pr"},"["+e[1]+"]"):null,e[2]?h("small",null,L(e[2])):null))))));

/* syllable structure blocks */
W.blocks=()=>{ const ex=[["가","▯▯",{es:"inicial + vocal vertical",en:"initial + vertical vowel"}],["고","▭",{es:"inicial + vocal horizontal",en:"initial + horizontal vowel"}],["과","◰",{es:"inicial + vocal compuesta",en:"initial + compound vowel"}],["강","▯▯▭",{es:"… + final (받침)",en:"… + final (받침)"}],["공","▭▭",{es:"horizontal + final",en:"horizontal + final"}],["광","◰▭",{es:"compuesta + final",en:"compound + final"}]];
  return h("div",{class:"blocks"},ex.map(([s,_,lab])=>{ const box=h("div",{class:"hw-box"}); const w=HangulWriter.create(box,s,{size:110,start:"full"}); return h("div",{class:"blk",onclick:()=>{ w.animate(); say(s); }},box,h("b",{class:"ko"},s),h("small",null,L(lab))); }),
    h("div",{class:"legend"},h("span",{class:"lg L"},"■ "+t("initial")),h("span",{class:"lg V"},"■ "+t("vowelL")),h("span",{class:"lg T"},"■ "+t("final")))); };

/* syllable builder */
W.builder=s=>{ const H=HangulWriter; const sel={l:"ㅎ",v:"ㅏ",t:"ㄴ"};
  const L0=s.l||H.CHO, V0=s.v||H.JUNG, T0=s.t||["","ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅇ"];
  const out=h("div",{class:"bout"}), box=h("div",{class:"hw-box"}), big=h("div",{class:"ko bigs"});
  const upd=()=>{ const ch=String.fromCharCode(0xAC00+H.CHO.indexOf(sel.l)*588+H.JUNG.indexOf(sel.v)*28+H.JONG.indexOf(sel.t)); box.innerHTML=""; const w=HangulWriter.create(box,ch,{size:150,start:"full"}); big.textContent=ch; out._ch=ch; out._w=w; };
  const row=(arr,key,lab)=>h("div",{class:"brow"},h("b",null,lab),Array.from(arr).map(j=>{ const b=h("button",{class:"jb ko"+(sel[key]===j?" sel":""),onclick:()=>{ sel[key]=j; $$(".jb",b.parentNode).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); upd(); say(out._ch); }},j||"∅"); return b; }));
  upd(); out.append(box,h("div",null,big,h("div",{class:"bbtns"},h("button",{class:"btn sm",onclick:()=>say(out._ch)},"🔊"),h("button",{class:"btn ghost sm",onclick:()=>out._w.animate()},t("animate")),h("button",{class:"btn ghost sm",onclick:()=>openWriter(out._ch)},t("trace")))));
  return h("div",{class:"builder"},h("h4",null,"🧩 "+t("builder")),row(L0,"l",t("initial")),row(V0,"v",t("vowelL")),row(T0,"t",t("final")),out); };

/* vocal-organ diagram for the 5 basic consonants (훈민정음 해례: 象形) */
function profile(kind){
  const hl="#c0392b",ink="#2d2d34",SK="#fdeedd",CAV="#f9dcd6",TG="#f1a7a0";
  const T={"ㄱ":"M64 140 C70 136 80 134 92 132 C104 128 114 118 124 116 C132 116 134 126 133 138 C132 152 131 166 130 178 L104 176 C88 166 74 156 64 148 Z",
   "ㄴ":"M64 124 C68 122 72 124 76 130 C86 134 104 132 118 132 C130 133 133 142 132 154 C131 164 131 172 130 178 L104 176 C88 166 74 156 64 148 C62 140 62 130 64 124 Z"};
  const t=T[kind]||"M64 138 C72 134 88 130 104 130 C120 130 131 136 132 150 C132 162 131 170 130 178 L104 176 C88 166 74 156 64 148 Z", ht=!!T[kind];
  const over={"ㄱ":`<path d="M96 126 C108 120 116 113 124 113 C132 114 134 126 133 140" stroke="${hl}" stroke-width="3" stroke-dasharray="2 5"/><circle cx="123" cy="114" r="7" stroke="${hl}" stroke-width="2.6"/>`,
   "ㄴ":`<circle cx="67" cy="122" r="7" stroke="${hl}" stroke-width="2.6"/>`,
   "ㅁ":`<ellipse cx="48" cy="131" rx="11" ry="15" stroke="${hl}" stroke-width="3"/>`,
   "ㅅ":`<ellipse cx="60" cy="131" rx="9" ry="13" stroke="${hl}" stroke-width="3"/>`,
   "ㅇ":`<ellipse cx="128" cy="205" rx="15" ry="13" stroke="${hl}" stroke-width="3"/>`}[kind]||"";
  const lc=kind==="ㅁ"?hl:ink, lw=kind==="ㅁ"?3.4:2.3, tc=kind==="ㅅ"?hl:ink, tw=kind==="ㅅ"?2.4:1.3;
  return `<svg viewBox="20 4 210 276" class="prof"><g stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M100 10 C140 2 186 12 204 48 C216 74 212 112 196 136 C188 148 184 156 184 170 C185 210 188 245 190 280 L104 280 C104 245 102 210 98 180 C88 178 76 178 66 174 C56 170 50 162 51 152 C51 147 50 145 48 142 C46 139 47 136 51 134 C48 131 46 128 47 125 C48 121 51 118 52 114 C48 112 40 110 38 105 C40 100 47 92 54 84 C58 78 58 72 56 64 C54 50 62 28 76 18 C83 14 92 11 100 10 Z" fill="${SK}" stroke="${ink}" stroke-width="2.4"/>
<path d="M70 174 C90 176 112 170 130 160 C142 152 150 140 154 126" stroke="${ink}" stroke-width="1.6" opacity=".55"/>
<path d="M64 120 C76 112 98 108 118 110 C128 111 136 116 139 124 C143 134 144 150 144 170 L145 280 L118 280 L118 210 C118 196 116 186 112 180 C90 172 74 160 62 148 Z" fill="${CAV}"/>
<path d="M64 120 C76 112 98 108 118 110" stroke="${ink}" stroke-width="2"/>
<path d="M118 110 C128 111 135 116 138 124 C139 128 137 131 134 130" stroke="${ink}" stroke-width="2"/>
<path d="M139 124 C143 134 144 150 144 170 L145 280" stroke="${ink}" stroke-width="1.8"/>
<path d="M118 186 L118 280" stroke="${ink}" stroke-width="1.4" opacity=".6"/>
<path d="M112 190 L128 196 M112 200 L128 206" stroke="${ink}" stroke-width="1.2" opacity=".45"/>
<path d="${t}" fill="${ht?hl:TG}" fill-opacity="${ht?.85:1}" stroke="${ink}" stroke-width="1.6"/>
<path d="M56 119 L63 119 L61 128 L57 128 Z" fill="#fff" stroke="${tc}" stroke-width="${tw}"/>
<path d="M57 134 L61 134 L62 143 L56 143 Z" fill="#fff" stroke="${tc}" stroke-width="${tw}"/>
<path d="M52 114 C48 118 47 122 47 125 C48 128 50 130 53 131" stroke="${lc}" stroke-width="${lw}"/>
<path d="M53 132 C48 134 46 137 48 141 C50 144 51 146 51 150" stroke="${lc}" stroke-width="${lw}"/>
<ellipse cx="162" cy="96" rx="9" ry="15" fill="${SK}" stroke="${ink}" stroke-width="2"/>
<path d="M159 89 C163 92 164 100 160 104" stroke="${ink}" stroke-width="1.3"/>
<path d="M68 66 C74 63 81 63 86 66 M71 75 C75 72 80 72 83 75" stroke="${ink}" stroke-width="2"/>
<path d="M64 104 C68 100 76 98 84 100 C96 102 110 104 124 108" stroke="${ink}" stroke-width="1" opacity=".3"/>
${over}</g></svg>`;
}
window.profileSVG=profile;
W.origin=s=>h("div",{class:"origin"},s.items.map(o=>h("div",{class:"org"},h("div",{class:"pv",html:profile(o.j)}),
  h("div",{class:"ot"},h("div",{class:"ol"},h("button",{class:"ko big",onclick:()=>say(o.j)},o.j),h("b",null,L(o.part))),h("p",{html:rich(L(o.body))}),
    h("div",{class:"ofam ko"},o.fam.map((f,i)=>[i?h("span",{class:"arr"},"→"):null,h("button",{class:"kchip",onclick:()=>say(f)},f)]))))));

/* 천지인: vowels from three symbols */
W.cheonjiin=s=>{ const items=[["·",{es:"cielo (sol, redondo)",en:"heaven (round sun)"}],["ㅡ",{es:"tierra (plana)",en:"earth (flat)"}],["ㅣ",{es:"ser humano (de pie)",en:"human (standing)"}]];
  const mk=[["ㅣ","·","ㅏ",{es:"humano + punto a la derecha (hacia fuera)",en:"human + dot to the right (outward)"}],["·","ㅣ","ㅓ",{es:"punto a la izquierda (hacia dentro)",en:"dot to the left (inward)"}],["·","ㅡ","ㅗ",{es:"punto arriba (sol sobre la tierra)",en:"dot above (sun over earth)"}],["ㅡ","·","ㅜ",{es:"punto abajo (sol bajo la tierra)",en:"dot below (sun under earth)"}],["ㅏ","·","ㅑ",{es:"dos puntos = sonido con «y»",en:"two dots = 'y' sound"}],["ㅗ","·","ㅛ",{es:"dos puntos = sonido con «y»",en:"two dots = 'y' sound"}]];
  return h("div",{class:"cji"},h("div",{class:"three"},items.map(([sym,lab])=>h("div",{class:"sym"},h("span",{class:"ko"},sym),h("small",null,L(lab))))),
    h("div",{class:"mk"},mk.map(([a,b,r,lab])=>h("button",{class:"mkr",onclick:()=>say(r)},h("span",{class:"ko"},a),"+",h("span",{class:"ko"},b),"=",h("span",{class:"ko res"},r),h("small",null,L(lab)))))); };

/* name transcriber */
W.namebox=()=>{ const inp=h("input",{type:"text",placeholder:"María, Juan, México…",value:"",class:"nin"}); const out=h("div",{class:"nout"});
  const go=()=>{ const v=inp.value.trim(); out.innerHTML=""; if(!v) return; const k=esToHangul(v);
    out.append(h("div",{class:"ko nk"},k," ",sayBtn(k)),h("div",{class:"wchars"},Array.from(k).filter(isKo).slice(0,8).map(c=>writerBox(c,120,{start:"numbers"})))); };
  inp.addEventListener("input",()=>{ clearTimeout(inp._t); inp._t=setTimeout(go,350); });
  const chips=["María","José","Guadalupe","Carlos","Sofía","Alejandro","México","España","Colombia","Argentina"].map(n=>h("button",{class:"chip",onclick:()=>{ inp.value=n; go(); }},n));
  return h("div",{class:"namebox"},h("h4",null,"🪪 "+t("yourName")),h("p",null,t("nameHint")),inp,h("div",{class:"chips"},chips),out,h("p",{class:"hint"},t("approx"))); };


/* ---------- speaking: speech recognition (ko-KR) with jamo-level scoring ---------- */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
function jamoSeq(str){ const out=[]; for(const ch of String(str).replace(/[^가-힣]/g,"")){ const [a,b,c]=HangulWriter.decompose(ch); out.push(a,b); if(c) out.push(c); } return out; }
function simil(a,b){ const A=jamoSeq(a),B=jamoSeq(b); if(!A.length) return 0; const d=Array.from({length:A.length+1},(_,i)=>[i]);
  for(let j=1;j<=B.length;j++) d[0][j]=j; for(let i=1;i<=A.length;i++) for(let j=1;j<=B.length;j++) d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(A[i-1]===B[j-1]?0:1));
  return Math.max(0,Math.round((1-d[A.length][B.length]/Math.max(A.length,B.length))*100)); }
window.similKo=simil;
window.listenOnce=function(){ return new Promise((res,rej)=>{ if(!SR) return rej("nosr"); const r=new SR(); r.lang="ko-KR"; r.interimResults=false; r.maxAlternatives=4;
  let got=false; r.onresult=e=>{ got=true; res(Array.from(e.results[0]).map(x=>x.transcript)); }; r.onerror=e=>rej(e.error); r.onend=()=>{ if(!got) rej("nospeech"); }; r.start(); }); };
W.speak=s=>{ const box=h("div",{class:"speak"});
  if(!SR) box.append(h("div",{class:"tip warn"},h("span",{class:"ti"},"🎙"),h("div",null,"Tu navegador no reconoce la voz. Usa Chrome o Edge (computadora o Android). Mientras tanto: escucha 🔊, repite en voz alta y marca ✔.")));
  s.items.forEach(it=>{ const res=h("div",{class:"sres"});
    const mic=h("button",{class:"mic",title:"Hablar",onclick:async()=>{
      if(!SR){ res.innerHTML="✔ ¡Repetido!"; res.className="sres hi"; return; }
      TTS.stop(); mic.classList.add("rec"); res.className="sres"; res.textContent="🎙 Habla ahora…";
      try{ const alts=await listenOnce(); let best=0,heard=alts[0]; alts.forEach(a=>{ const v=simil(it.ko,a); if(v>best){best=v;heard=a;} });
        res.className="sres "+(best>=85?"hi":best>=60?"mid":"lo"); res.innerHTML=""; res.append(h("span",null,"Oí: "),h("b",{class:"ko"},heard),h("span",{class:"pct"},` ${best}% `),h("span",null,best>=85?"¡Excelente! 👏":best>=60?"¡Casi! Repite 🔁":"Escucha otra vez 🔊"));
      }catch(e){ res.className="sres lo"; res.textContent=e==="nospeech"||e==="no-speech"?"No te oí. Pulsa 🎙 y habla cerca del micrófono.":e==="not-allowed"?"Permite el uso del micrófono en el navegador.":"Error: "+e; }
      mic.classList.remove("rec"); }},"🎙");
    box.append(h("div",{class:"srow"},h("div",{class:"stx"},h("div",{class:"ko sk"},it.ko),h("div",{class:"ses"},it.es||"")),
      h("div",{class:"sbt"},sayBtn(it.ko),h("button",{class:"say",title:"Lento",onclick:()=>TTS.speak(it.ko,{rate:.6})},"🐢"),mic),res)); });
  return box; };
const SKILL={gram:["📘","Gramática"],pron:["🗣","Pronunciación"],listen:["👂","Escuchar"],speak:["🎙","Hablar"],read:["📖","Leer"],write:["✍️","Escribir"],culture:["🇰🇷","Cultura"]};
window.SKILL=SKILL;

/* ---------- lesson page ---------- */
function goalsBox(g){ return h("div",{class:"goals"},h("h3",null,"🎯 "+t("goals")),h("ul",null,g.map(x=>h("li",{html:rich(L(x))})))); }
function wordsBox(ws){ return h("div",{class:"wordlist"},ws.map(w=>h("div",{class:"word"},h("span",{class:"ko wk"},w.ko),h("span",{class:"wt"},h("span",{class:"rom"},w.rom||""),h("span",{class:"m"},L(w.m))),h("span",{class:"acts"},sayBtn(w.ko),h("button",{class:"wbtn sm",onclick:()=>openWriter(w.ko,L(w.m))},"✍️"))))); }
window.renderLesson=function(n){
  const d=LES()[n]; document.body.innerHTML=""; document.body.append(buildTopbar());
  if(!d){ document.body.append(h("main",{class:"wrap"},h("p",null,"404"))); return; }
  document.title=`${t("lesson")} ${n} · ${L(d.title)} — Coreano Básico`;
  const main=h("main",{class:"wrap lesson"});
  main.append(h("div",{class:"lhero b"+d.block},h("div",{class:"lnum"},t("lesson")+" "+n),h("h1",null,d.icon+" ",h("span",{html:rich(L(d.title))})),
    h("div",{class:"lko ko"},d.ko),h("p",{class:"lsub",html:rich(L(d.subtitle))})));
  const toc=h("nav",{class:"toc"}); main.append(toc);
  if(d.video) main.append(W.video(d.video)||"");
  main.append(goalsBox(d.goals));
  d.sections.forEach((s,i)=>{ const id="s"+(i+1); toc.append(h("a",{href:"#"+id},(SKILL[s.skill]?SKILL[s.skill][0]+" ":"")+L(s.h).replace(/^\d+\.\s*/,"").replace(/<[^>]+>/g,"")));
    const sk=SKILL[s.skill]; const sec=h("section",{class:"sec sk-"+(s.skill||"x"),id},h("h2",null,sk?h("span",{class:"skb"},sk[0]+" "+sk[1]):null,h("span",{html:rich(L(s.h))})));
    if(s.body) sec.append(h("div",{class:"body",html:rich(L(s.body))}));
    (s.widgets||[]).forEach(wd=>{ const f=W[wd.type]; if(f){ const el=f(wd); if(el) sec.append(el); } if(wd.after) sec.append(h("div",{class:"body",html:rich(L(wd.after))})); });
    main.append(sec); });
  if(d.words&&d.words.length){ toc.append(h("a",{href:"#words"},t("words"))); main.append(h("section",{class:"sec",id:"words"},h("h2",null,"📚 "+t("words")),wordsBox(d.words))); }
  if(d.sets&&d.sets.length){ toc.append(h("a",{href:"#practice"},t("practice"))); const ps=h("section",{class:"sec",id:"practice"},h("h2",null,"📝 "+t("practice")));
    d.sets.forEach((st,i)=>ps.append(h("details",{class:"set",open:i===0},h("summary",null,h("b",null,`${i+1}. `,L(st.title)),h("span",{class:"sc","data-k":n+"_"+i})),renderSet(st,n+"_"+i))));
    main.append(ps); }
  const keys=Object.keys(LES()).map(Number).sort((a,b)=>a-b), k=keys.indexOf(+n);
  main.append(h("div",{class:"pager"},keys[k-1]?h("a",{class:"btn ghost",href:"leccion.html?n="+keys[k-1]},t("prev")):h("span"),
    keys[k+1]?h("a",{class:"btn",href:"leccion.html?n="+keys[k+1]},t("next")):h("a",{class:"btn",href:"index.html"},t("home"))));
  document.body.append(main,footer()); updScores(); LS.set("last",n);
};
function updScores(){ $$(".sc[data-k]").forEach(s=>{ const v=Scores.get(s.dataset.k); s.textContent=v==null?"":`${v}%`; s.className="sc "+(v==null?"":v>=80?"hi":v>=50?"mid":"lo"); }); }
document.addEventListener("scorechange",updScores);

/* ---------- home ---------- */
window.renderHome=function(){
  document.body.innerHTML=""; document.body.append(buildTopbar()); const D=LES();
  const last=LS.get("last",null);
  const main=h("main",{class:"wrap home"});
  main.append(h("section",{class:"hero"},h("div",{class:"ht"},h("div",{class:"kick ko"},"한국어 첫걸음"),h("h1",null,t("heroTitle")),h("p",null,t("heroLead")),
    h("div",{class:"hbtns"},h("a",{class:"btn",href:"leccion.html?n="+(last||1)},last?t("cont")+" · "+t("lesson")+" "+last:t("start")),h("a",{class:"btn ghost",href:"tabla.html"},"🔤 "+t("chart")))),
    h("div",{class:"hart"},h("div",{class:"hw-box",id:"heroW"}))));
  const block=(b,title)=>{ const g=h("div",{class:"lgrid"});
    Object.keys(D).map(Number).sort((a,b)=>a-b).filter(n=>D[n].block===b).forEach(n=>{ const d=D[n]; const sc=Scores.lesson(n,(d.sets||[]).length);
      g.append(h("a",{class:"lcard b"+b,href:"leccion.html?n="+n},h("div",{class:"ln"},h("span",null,t("lesson")+" "+n),h("span",{class:"lic"},d.icon)),h("h3",{html:rich(L(d.title))}),h("div",{class:"ko lk"},d.ko),h("p",{html:rich(L(d.subtitle))}),
        h("div",{class:"pbar"},h("i",{style:`width:${sc.avg}%`})),h("small",null,`${t("progress")}: ${sc.avg}% · ${sc.done}/${(d.sets||[]).length} ${t("sets")}`))); });
    return h("section",{class:"blockA"},h("h2",null,title),g); };
  main.append(block("A",t("blockA")),block("B",t("blockB")));
  main.append(h("section",null,h("h2",null,"🧰 "+t("tools")),h("div",{class:"cards"},
    h("a",{class:"card tool",href:"tabla.html"},h("div",{class:"ci"},"🔤"),h("h4",null,t("chart")),h("p",null,t("toolChart"))),
    h("a",{class:"card tool",href:"escribir.html"},h("div",{class:"ci"},"✍️"),h("h4",null,t("workshop")),h("p",null,t("toolWrite"))),
    h("a",{class:"card tool",href:"vocabulario.html"},h("div",{class:"ci"},"📚"),h("h4",null,t("vocab")),h("p",null,t("toolVocab"))))));
  document.body.append(main,footer());
  const hw=HangulWriter.create($("#heroW"),"한",{size:220}); const seq=["한","국","어"]; let i=0;
  const loop=()=>{ $("#heroW").innerHTML=""; const w=HangulWriter.create($("#heroW"),seq[i%3],{size:220}); w.animate(()=>setTimeout(loop,1400)); i++; }; loop();
};

/* ---------- chart ---------- */
window.renderChart=function(){
  document.body.innerHTML=""; document.body.append(buildTopbar()); const H=HangulWriter;
  const main=h("main",{class:"wrap"}); main.append(h("h1",null,"🔤 "+t("chartTitle")),h("p",null,t("chartLead")));
  const V="ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔㅘㅝㅢ", C="ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅃㅆㅉ";
  const tb=h("table",{class:"chart"}); tb.append(h("thead",null,h("tr",null,h("th"),Array.from(V).map(v=>h("th",null,h("button",{class:"ko",onclick:()=>say(v)},v))))));
  const body=h("tbody"); Array.from(C).forEach(c=>{ const tr=h("tr",null,h("th",null,h("button",{class:"ko",onclick:()=>say(c)},c)));
    Array.from(V).forEach(v=>{ const s=String.fromCharCode(0xAC00+H.CHO.indexOf(c)*588+H.JUNG.indexOf(v)*28);
      tr.append(h("td",null,h("button",{class:"ko syl",onclick:()=>say(s),ondblclick:()=>openWriter(s)},s))); }); body.append(tr); });
  tb.append(body); main.append(h("div",{class:"tbl-wrap"},tb));
  main.append(W.builder({}));
  document.body.append(main,footer());
};
/* ---------- workshop ---------- */
window.renderWorkshop=function(){
  document.body.innerHTML=""; document.body.append(buildTopbar());
  const main=h("main",{class:"wrap"}); main.append(h("h1",null,"✍️ "+t("workshopTitle")),h("p",null,t("writeHelp")));
  main.append(W.namebox());
  const out=h("div",{class:"wchars"}); let cur="";
  const show=s=>{ out.innerHTML=""; Array.from(s).filter(isKo).slice(0,10).forEach(c=>out.append(writerBox(c,130,{start:"numbers"}))); };
  const disp=h("div",{class:"typeout ko"},"…");
  const kb=koKeyboard(s=>{ cur=s; disp.textContent=s||"…"; });
  main.append(h("div",{class:"freew"},h("h4",null,"⌨️ "+t("freeWrite")),disp,kb.el,h("button",{class:"btn",onclick:()=>show(cur)},t("writeIt"))),out);
  main.append(h("h2",null,"ㄱㄴㄷ"),W.writers({chars:"ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",size:110}),h("h2",null,"ㅏㅑㅓㅕ"),W.writers({chars:"ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅐㅔㅘㅝㅢ",size:110}));
  document.body.append(main,footer()); show("안녕하세요");
};
/* ---------- vocabulary ---------- */
window.renderVocab=function(){
  document.body.innerHTML=""; document.body.append(buildTopbar()); const D=LES();
  const all=[]; Object.keys(D).map(Number).sort((a,b)=>a-b).forEach(n=>(D[n].words||[]).forEach(w=>all.push(Object.assign({n},w))));
  const main=h("main",{class:"wrap"}); main.append(h("h1",null,"📚 "+t("vocabTitle")+` (${all.length})`));
  let mode="list", filt="all", q="";
  const ctr=h("div",{class:"vctl"}), area=h("div");
  const sel=h("select",{onchange:e=>{ filt=e.target.value; draw(); }},h("option",{value:"all"},t("all")),Object.keys(D).map(Number).sort((a,b)=>a-b).filter(n=>(D[n].words||[]).length).map(n=>h("option",{value:n},`${t("lesson")} ${n} · ${L(D[n].title).replace(/<[^>]+>/g,"")}`)));
  const inp=h("input",{type:"search",placeholder:t("search"),oninput:e=>{ q=e.target.value.toLowerCase(); draw(); }});
  const mb=(m,lab)=>h("button",{class:"btn ghost sm",onclick:()=>{ mode=m; draw(); }},lab);
  ctr.append(sel,inp,mb("list","📋 "+t("list")),mb("flash","🃏 "+t("flash")));
  const draw=()=>{ area.innerHTML=""; const ws=all.filter(w=>(filt==="all"||w.n==filt)&&(!q||(w.ko+" "+(w.rom||"")+" "+L(w.m)).toLowerCase().includes(q)));
    if(mode==="list") area.append(wordsBox(ws));
    else { let i=0; const card=h("div",{class:"flash"}); const sh=shuffle(ws);
      const show=()=>{ const w=sh[i%sh.length]; if(!w) return; card.innerHTML=""; const inner=h("div",{class:"fin"},h("div",{class:"ff ko"},w.ko),h("div",{class:"fb2"},h("div",{class:"rom"},w.rom||""),h("div",null,L(w.m))));
        card.append(inner); card.onclick=()=>{ card.classList.toggle("on"); if(card.classList.contains("on")) say(w.ko); }; card.classList.remove("on"); };
      area.append(h("p",{class:"hint"},t("flipHint")),card,h("div",{class:"pager"},h("button",{class:"btn ghost",onclick:()=>{ i=(i-1+sh.length)%sh.length; show(); }},"←"),h("button",{class:"btn ghost",onclick:()=>say(sh[i%sh.length].ko)},"🔊"),h("button",{class:"btn",onclick:()=>{ i++; show(); }},"→"))); show(); } };
  main.append(ctr,area); draw(); document.body.append(main,footer());
};
})();
