/* Coreano Básico — core: language, storage, Korean TTS, helpers, top bar, writer modal */
(function(){
"use strict";
const LS = window.LS = {
  get(k,d){ try{ const v=localStorage.getItem("cb_"+k); return v==null?d:JSON.parse(v); }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem("cb_"+k,JSON.stringify(v)); }catch(e){} }
};
/* ---------- language ---------- */
const LANGS = window.LANGS = [{code:"es",name:"Español",flag:"🇲🇽"}];
let lang = "es"; /* sitio solo en español */
window.getLang=()=>lang;
window.setLang=c=>{ lang=c; LS.set("lang",c); document.documentElement.lang=c; document.dispatchEvent(new Event("langchange")); };
document.documentElement.lang=lang;
window.L=function(x){ if(x==null) return ""; if(typeof x!=="object") return String(x); if(Array.isArray(x)) return x; return x[lang]!=null?x[lang]:(x.es!=null?x.es:(x.en||"")); };
window.t=k=>L((window.UI||{})[k])||k;

/* ---------- DOM helpers ---------- */
window.$=(s,r=document)=>r.querySelector(s);
window.$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
window.h=function(tag,attrs,...kids){
  const e=document.createElement(tag);
  if(attrs) for(const k in attrs){ const v=attrs[k]; if(v==null||v===false) continue;
    if(k==="class") e.className=v; else if(k==="html") e.innerHTML=v; else if(k==="style") e.style.cssText=v;
    else if(k.startsWith("on")) e.addEventListener(k.slice(2),v); else e.setAttribute(k,v===true?"":v); }
  for(const c of kids.flat(9)){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(c)); }
  return e;
};
window.shuffle=a=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
window.toast=function(msg){ let el=$(".toast"); if(!el){ el=h("div",{class:"toast"}); document.body.append(el); } el.textContent=msg; el.classList.add("on"); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove("on"),2300); };
window.isKo=s=>/[ᄀ-ᇿ㄰-㆏가-힣]/.test(s);

/* ---------- Korean TTS (native voices first) ---------- */
const TTS = window.TTS = {
  voices:[], voice:null, rate:LS.get("rate",0.85), pref:LS.get("voice","auto"), audio:null, curBtn:null,
  score(v){ const n=v.name, l=(v.lang||"").replace("_","-").toLowerCase();
    if(!/^ko/.test(l) && !/korean|한국/i.test(n)) return -1;
    let s=10; if(/natural|neural|online/i.test(n)) s+=30; if(/sunhi|injoon|hyunsu|seoyeon|yuna|jimin|bongjin|gookmin/i.test(n)) s+=12;
    if(/google/i.test(n)) s+=18; if(/premium|enhanced/i.test(n)) s+=10; if(v.localService===false) s+=2; return s; },
  load(){ if(!("speechSynthesis" in window)) return; this.voices=speechSynthesis.getVoices().filter(v=>this.score(v)>=0).sort((a,b)=>this.score(b)-this.score(a)); this.pick(); },
  pick(){ if(this.pref==="online"){ this.voice=null; return; } if(this.pref!=="auto"){ const v=this.voices.find(v=>v.name===this.pref); if(v){ this.voice=v; return; } } this.voice=this.voices[0]||null; },
  clean(s){ return String(s).replace(/<[^>]+>/g,"").replace(/\s*\/\s*/g,", ").replace(/[\[\]]/g,"").replace(/[（(][^)）]*[)）]/g,"").replace(/…/g,", ").trim(); },
  stop(){ try{ speechSynthesis.cancel(); }catch(e){} if(this.audio){ this.audio.pause(); this.audio=null; } if(this.curBtn){ this.curBtn.classList.remove("playing"); this.curBtn=null; } },
  speak(text,opt={}){
    text=this.clean(text); if(!text) return Promise.resolve(); this.stop();
    const btn=opt.btn; if(btn){ btn.classList.add("playing"); this.curBtn=btn; }
    const rate=opt.rate||this.rate;
    return new Promise(res=>{
      const fin=()=>{ if(btn) btn.classList.remove("playing"); res(); };
      if(this.voice && "speechSynthesis" in window){
        const u=new SpeechSynthesisUtterance(text); u.voice=this.voice; u.lang=this.voice.lang||"ko-KR"; u.rate=rate; u.onend=fin; u.onerror=fin;
        speechSynthesis.speak(u); setTimeout(()=>{ if(!speechSynthesis.speaking&&!speechSynthesis.pending) fin(); },15000);
      } else {
        const a=new Audio("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ko&ttsspeed="+(rate<0.8?"0.3":"1")+"&q="+encodeURIComponent(text));
        this.audio=a; a.onended=fin; a.onerror=()=>{ fin(); toast("🔇 "+t("noVoice")); }; a.play().catch(fin);
      }
    });
  }
};
if("speechSynthesis" in window){ TTS.load(); speechSynthesis.onvoiceschanged=()=>{ TTS.load(); window.renderVoiceMenu&&renderVoiceMenu(); }; setTimeout(()=>TTS.load(),700); }
/* jamo are read by their names / sounds so the TTS says something useful */
const JAMO_SAY={"ㄱ":"기역","ㄴ":"니은","ㄷ":"디귿","ㄹ":"리을","ㅁ":"미음","ㅂ":"비읍","ㅅ":"시옷","ㅇ":"이응","ㅈ":"지읒","ㅊ":"치읓","ㅋ":"키읔","ㅌ":"티읕","ㅍ":"피읖","ㅎ":"히읗","ㄲ":"쌍기역","ㄸ":"쌍디귿","ㅃ":"쌍비읍","ㅆ":"쌍시옷","ㅉ":"쌍지읒",
 "ㅏ":"아","ㅑ":"야","ㅓ":"어","ㅕ":"여","ㅗ":"오","ㅛ":"요","ㅜ":"우","ㅠ":"유","ㅡ":"으","ㅣ":"이","ㅐ":"애","ㅒ":"얘","ㅔ":"에","ㅖ":"예","ㅘ":"와","ㅙ":"왜","ㅚ":"외","ㅝ":"워","ㅞ":"웨","ㅟ":"위","ㅢ":"의"};
window.JAMO_SAY=JAMO_SAY;
window.sayText=s=>s.length===1&&JAMO_SAY[s]?JAMO_SAY[s]:s;
window.say=(s,opt)=>TTS.speak(sayText(s),opt);
window.sayBtn=function(text,cls="",label){
  return h("button",{class:"say "+cls,title:"🔊 "+text,"aria-label":"▶ "+text,onclick:e=>{ e.stopPropagation(); TTS.speak(sayText(text),{btn:e.currentTarget}); }},label||"🔊");
};
document.addEventListener("click",e=>{ const b=e.target.closest("[data-say]"); if(b){ e.preventDefault(); TTS.speak(sayText(b.getAttribute("data-say")),{btn:b}); } });
/* rich text: <k>한국어</k> becomes a clickable Korean chip */
window.rich=function(html){ return String(html).replace(/<k>(.*?)<\/k>/g,(m,s)=>`<span class="kchip" data-say="${s.replace(/"/g,"&quot;")}">${s}</span>`); };

/* ---------- writer box + modal ---------- */
window.writerBox=function(ch,size=150,opt={}){
  const wrap=h("div",{class:"wchar"}), box=h("div",{class:"hw-box"}), msg=h("div",{class:"wmsg"});
  const w=HangulWriter.create(box,ch,{size,start:opt.start||"full",mono:opt.mono});
  const bA=h("button",{class:"wbtn",onclick:()=>{ msg.textContent=""; w.animate(); }},t("animate"));
  const bT=h("button",{class:"wbtn",onclick:()=>{ msg.textContent="✍️ "+t("traceGo"); w.quiz({
      onMistake:(k)=>{ msg.textContent= k==="reversed"? "↩️ "+t("wrongDir") : "✋ "+t("tryAgain"); },
      onCorrect:(n,N)=>{ msg.textContent=`✔ ${n}/${N}`; },
      onComplete:(r)=>{ msg.textContent="🎉 "+t("wellDone")+(r.mistakes?` (${r.mistakes} ✋)`:""); say(ch); opt.onDone&&opt.onDone(r); } }); }},t("trace"));
  const bO=h("button",{class:"wbtn ghost",title:t("outline"),onclick:()=>{ w.toggleOutline(); }},"👁");
  wrap.append(box,h("div",{class:"hw-tools"},bA,bT,h("button",{class:"wbtn ghost",onclick:()=>say(ch)},"🔊"),bO),msg);
  wrap._w=w; return wrap;
};
window.openWriter=function(word,meaning){
  let m=$("#writerModal");
  if(!m){ m=h("div",{class:"modal",id:"writerModal",onclick:e=>{ if(e.target===m) m.classList.remove("on"); }},h("div",{class:"box"})); document.body.append(m); }
  const box=$(".box",m); box.innerHTML="";
  const chars=Array.from(word).filter(c=>isKo(c));
  box.append(h("button",{class:"x",onclick:()=>m.classList.remove("on")},"×"),
    h("h3",null,h("span",{class:"ko big"},word)," ",sayBtn(word)),
    meaning?h("div",{class:"mut"},meaning):null,
    h("div",{class:"hint"},t("writeHelp")),
    h("div",{class:"wchars"},chars.map(c=>writerBox(c,chars.length>3?120:170,{start:"numbers"}))));
  m.classList.add("on");
};
document.addEventListener("keydown",e=>{ if(e.key==="Escape") $$(".modal.on").forEach(m=>m.classList.remove("on")); });

/* ---------- progress ---------- */
window.Scores={ get(k){ return LS.get("score_"+k,null); }, put(k,p){ const b=this.get(k); if(b==null||p>b) LS.set("score_"+k,p); },
  lesson(n,sets){ let s=0,d=0; for(let i=0;i<sets;i++){ const v=this.get(n+"_"+i); if(v!=null){ s+=v; d++; } } return {avg:sets?Math.round(s/sets):0,done:d}; } };

/* ---------- top bar ---------- */
function closeMenus(ex){ $$(".menu.open").forEach(m=>{ if(m!==ex) m.classList.remove("open"); }); }
document.addEventListener("click",()=>closeMenus());
window.buildTopbar=function(opt={}){
  const bar=h("header",{class:"topbar"}), w=h("div",{class:"wrap"});
  w.append(h("a",{class:"brand",href:"index.html"},h("span",{class:"seal"},"한"),h("span",null,h("b",null,"Coreano Básico"),h("small",null,"한국어 첫걸음 · "+t("tagline")))));
  w.append(h("div",{class:"spacer"}));
  const nav=[["index.html","🏠",t("home")],["tabla.html","🔤",t("chart")],["escribir.html","✍️",t("workshop")],["vocabulario.html","📚",t("vocab")]];
  nav.forEach(([href,ic,lbl])=>w.append(h("a",{class:"tbtn"+(location.pathname.endsWith(href)?" on":""),href},ic,h("span",{class:"lbl"},lbl))));
  // voice
  const vm=h("div",{class:"menu"}), vpop=h("div",{class:"menu-pop",onclick:e=>e.stopPropagation()});
  vm.append(h("button",{class:"tbtn",onclick:e=>{ e.stopPropagation(); closeMenus(vm); vm.classList.toggle("open"); }},"🔊",h("span",{class:"lbl"},t("voice"))),vpop);
  window.renderVoiceMenu=function(){
    vpop.innerHTML="";
    const sel=h("select",{onchange:e=>{ TTS.pref=e.target.value; LS.set("voice",TTS.pref); TTS.pick(); }});
    sel.append(h("option",{value:"auto"},t("autoVoice")+(TTS.voices[0]?" — "+TTS.voices[0].name:"")));
    TTS.voices.forEach(v=>sel.append(h("option",{value:v.name},v.name)));
    sel.append(h("option",{value:"online"},t("onlineVoice"))); sel.value=TTS.pref; if(sel.value!==TTS.pref) sel.value="auto";
    const rv=h("b",null,TTS.rate.toFixed(2)+"×");
    vpop.append(h("label",null,t("voiceSel")),sel,h("label",null,t("speed")," ",rv),
      h("input",{type:"range",min:"0.5",max:"1.2",step:"0.05",value:TTS.rate,oninput:e=>{ TTS.rate=+e.target.value; LS.set("rate",TTS.rate); rv.textContent=TTS.rate.toFixed(2)+"×"; }}),
      h("button",{class:"btn sm",onclick:()=>TTS.speak("안녕하세요! 한국어를 배워 봐요.")},t("test")),h("div",{class:"hint"},t("voiceHint")));
  };
  renderVoiceMenu(); w.append(vm);
  bar.append(w); return bar;
};
window.footer=()=>h("footer",{class:"foot"},h("div",{class:"wrap"},
  h("p",null,"© 다인에듀 Dain Edu · ",h("a",{href:"https://www.dainedu.net",target:"_blank",rel:"noopener"},"dainedu.net")," · ",t("footNote"))));
})();
