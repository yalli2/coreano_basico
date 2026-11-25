/* Hangul tools: on-screen keyboard composer (IME) and Spanish → Hangul transcription */
(function(){
"use strict";
const HW=window.HangulWriter;
const CHO=HW.CHO, JUNG=HW.JUNG, JONG=HW.JONG;
const VCOMB={"ㅗㅏ":"ㅘ","ㅗㅐ":"ㅙ","ㅗㅣ":"ㅚ","ㅜㅓ":"ㅝ","ㅜㅔ":"ㅞ","ㅜㅣ":"ㅟ","ㅡㅣ":"ㅢ"};
const TCOMB={"ㄱㅅ":"ㄳ","ㄴㅈ":"ㄵ","ㄴㅎ":"ㄶ","ㄹㄱ":"ㄺ","ㄹㅁ":"ㄻ","ㄹㅂ":"ㄼ","ㄹㅅ":"ㄽ","ㄹㅌ":"ㄾ","ㄹㅍ":"ㄿ","ㄹㅎ":"ㅀ","ㅂㅅ":"ㅄ"};
const TSPLIT={}; for(const k in TCOMB) TSPLIT[TCOMB[k]]=[k[0],k[1]];
const isV=j=>JUNG.includes(j);
function syl(l,v,t){ return String.fromCharCode(0xAC00+CHO.indexOf(l)*588+JUNG.indexOf(v)*28+(t?JONG.indexOf(t):0)); }
/* compose a stream of jamo (2-beolsik logic) */
function compose(js){
  let out="", L=null, V=null, T=null;
  const flush=()=>{ if(L&&V) out+=syl(L,V,T); else if(L) out+=L; else if(V) out+=V; L=V=T=null; };
  for(const j of js){
    if(j===" "||j==="\n"||/[^ㄱ-ㆎ]/.test(j)){ flush(); out+=j; continue; }
    if(!isV(j)){
      if(L&&V&&!T){ if(JONG.includes(j)) T=j; else { flush(); L=j; } }
      else if(L&&V&&T){ if(TCOMB[T+j]) T=TCOMB[T+j]; else { flush(); L=j; } }
      else { flush(); L=j; }
    } else {
      if(L&&!V) V=j;
      else if(L&&V&&!T){ if(VCOMB[V+j]) V=VCOMB[V+j]; else { flush(); V=j; } }
      else if(L&&V&&T){ let mv; if(TSPLIT[T]){ mv=TSPLIT[T][1]; T=TSPLIT[T][0]; } else { mv=T; T=null; }
        if(CHO.includes(mv)){ flush(); L=mv; V=j; } else { flush(); V=j; } }
      else if(!L&&V){ if(VCOMB[V+j]) V=VCOMB[V+j]; else { flush(); V=j; } }
      else { flush(); V=j; }
    }
  }
  flush(); return out;
}
window.HangulIME={compose};

/* on-screen keyboard bound to an output element; returns {el, get(), clear()} */
const ROWS=[["ㅂ","ㅈ","ㄷ","ㄱ","ㅅ","ㅛ","ㅕ","ㅑ","ㅐ","ㅔ"],["ㅁ","ㄴ","ㅇ","ㄹ","ㅎ","ㅗ","ㅓ","ㅏ","ㅣ"],["⇧","ㅋ","ㅌ","ㅊ","ㅍ","ㅠ","ㅜ","ㅡ","⌫"]];
const SHIFT={"ㅂ":"ㅃ","ㅈ":"ㅉ","ㄷ":"ㄸ","ㄱ":"ㄲ","ㅅ":"ㅆ","ㅐ":"ㅒ","ㅔ":"ㅖ"};
window.koKeyboard=function(onChange){
  let js=[], shift=false;
  const el=h("div",{class:"kokb"});
  const render=()=>{ el.innerHTML="";
    ROWS.forEach(r=>el.append(h("div",{class:"kr"},r.map(k=>{ const lab=shift&&SHIFT[k]?SHIFT[k]:k;
      return h("button",{type:"button",class:"kk"+(k==="⇧"?" fn"+(shift?" on":""):"")+(k==="⌫"?" fn":"")+(isV(lab)?" v":""),onclick:e=>{ e.preventDefault();
        if(k==="⇧"){ shift=!shift; render(); return; }
        if(k==="⌫"){ js.pop(); }
        else { js.push(lab); if(shift){ shift=false; render(); } }
        onChange(compose(js)); }},lab); }))));
    el.append(h("div",{class:"kr"},h("button",{type:"button",class:"kk fn wide",onclick:e=>{e.preventDefault(); js.push(" "); onChange(compose(js));}},t("space")),
      h("button",{type:"button",class:"kk fn",onclick:e=>{e.preventDefault(); js=[]; onChange("");}},t("clear"))));
  };
  render();
  return {el, get:()=>compose(js), clear(){ js=[]; onChange(""); }, set(s){ js=Array.from(s); }};
};

/* ---------- Spanish → Hangul (Korean standard for Spanish loanwords, simplified) ---------- */
const SPECIAL={"méxico":"멕시코","mexico":"멕시코","españa":"에스파냐","espana":"에스파냐","jesús":"헤수스","josé":"호세","jose":"호세","xavier":"하비에르","ximena":"히메나","oaxaca":"오아하카","texas":"텍사스","sol":"솔"};
const ONSET={B:"ㅂ",K:"ㅋ",S:"ㅅ",CH:"ㅊ",D:"ㄷ",F:"ㅍ",H:"ㅎ",G:"ㄱ",L:"ㄹ",M:"ㅁ",N:"ㄴ",P:"ㅍ",R:"ㄹ",T:"ㅌ",NY:"ㄴ",Y:"ㅇ",W:"ㅇ",Z:"ㅅ"};
const PLAINV={a:"ㅏ",e:"ㅔ",i:"ㅣ",o:"ㅗ",u:"ㅜ"}, YV={a:"ㅑ",e:"ㅖ",i:"ㅣ",o:"ㅛ",u:"ㅠ"}, WV={a:"ㅘ",e:"ㅞ",i:"ㅟ",o:"ㅝ",u:"ㅜ"};
function phonemes(w){
  const s=w.toLowerCase().replace(/[áàâ]/g,"a").replace(/[éèê]/g,"e").replace(/[íìî]/g,"i").replace(/[óòô]/g,"o").replace(/[úùû]/g,"u");
  const P=[]; const vow=c=>"aeiouü".includes(c);
  for(let i=0;i<s.length;i++){ const c=s[i], n=s[i+1]||"", n2=s[i+2]||"";
    if(vow(c)){
      if(c==="ü"){ P.push({v:"u",glideW:true}); continue; }
      // i / u before another vowel = glide in some contexts
      if((c==="i")&&vow(n)&&n!=="i"){ const prev=P[P.length-1]; if(!prev||prev.v){ P.push({c:"Y"}); continue; } }
      if((c==="u")&&vow(n)&&n!=="u"){ const prev=P[P.length-1]; if(prev&&(prev.c==="G"||prev.c==="K")){ P.push({w:true}); continue; } }
      P.push({v:c}); continue; }
    if(c==="c"&&n==="h"){ P.push({c:"CH"}); i++; continue; }
    if(c==="l"&&n==="l"){ P.push({c:"Y"}); i++; continue; }
    if(c==="r"&&n==="r"){ P.push({c:"R"}); i++; continue; }
    if(c==="q"&&n==="u"){ P.push({c:"K"}); i++; continue; }
    if(c==="g"&&n==="u"&&(n2==="e"||n2==="i")){ P.push({c:"G"}); i++; continue; }
    if(c==="g"&&n==="ü"){ P.push({c:"G"}); P.push({w:true}); i++; continue; }
    if(c==="c"){ P.push({c:(n==="e"||n==="i")?"S":"K"}); continue; }
    if(c==="g"){ P.push({c:(n==="e"||n==="i")?"H":"G"}); continue; }
    if(c==="h") continue;
    if(c==="x"){ if(i===0) P.push({c:"H"}); else { P.push({c:"K"}); P.push({c:"S"}); } continue; }
    if(c==="y"){ if(vow(n)) P.push({c:"Y"}); else P.push({v:"i"}); continue; }
    if(c==="ñ"){ P.push({c:"NY"}); continue; }
    const m={b:"B",v:"B",d:"D",f:"F",j:"H",k:"K",l:"L",m:"M",n:"N",p:"P",r:"R",s:"S",t:"T",w:"W",z:"S"}[c];
    if(m) P.push({c:m});
  }
  // merge glides into the next vowel
  const Q=[]; for(let i=0;i<P.length;i++){ const p=P[i];
    if(p.w){ const nx=P[i+1]; if(nx&&nx.v){ Q.push({v:nx.v,g:"W"}); i++; } continue; }
    if(p.c==="W"||p.c==="Y"||p.c==="NY"){ const nx=P[i+1]; if(nx&&nx.v){ if(p.c==="NY") Q.push({c:"N"}); else Q.push({c:"Y0"}); Q.push({v:nx.v,g:p.c==="W"?"W":"Y"}); i++; continue; } if(p.c==="NY"){ Q.push({c:"N"}); continue; } if(p.c==="Y"){ Q.push({v:"i"}); continue; } }
    Q.push(p); }
  return Q;
}
function esToHangul(word){
  const lw=word.toLowerCase(); if(SPECIAL[lw]) return SPECIAL[lw];
  const Q=phonemes(word); const syls=[]; // {l,v,t}
  for(let i=0;i<Q.length;i++){ const p=Q[i];
    if(p.v){ // vowel without onset
      const V=p.g==="W"?WV[p.v]:p.g==="Y"?YV[p.v]:PLAINV[p.v]; syls.push({l:"ㅇ",v:V,t:null}); continue; }
    const nx=Q[i+1];
    if(p.c==="Y0"){ const V=YV[nx.v]; syls.push({l:"ㅇ",v:V,t:null}); i++; continue; }
    if(nx&&nx.v){ // onset
      const L=ONSET[p.c]; let V=nx.g==="W"?WV[nx.v]:nx.g==="Y"?YV[nx.v]:PLAINV[nx.v];
      if(p.c==="L"&&syls.length&&!syls[syls.length-1].t){ syls[syls.length-1].t="ㄹ"; }
      syls.push({l:L,v:V,t:null}); i++; continue; }
    // coda
    const prev=syls[syls.length-1], prevOpen=prev&&!prev.t&&prev.v!=="ㅡ";
    const nextIsC=nx&&nx.c;
    if(prevOpen && p.c==="N"){ prev.t="ㄴ"; continue; }
    if(prevOpen && p.c==="L"){ prev.t="ㄹ"; continue; }
    if(prevOpen && p.c==="M"){ prev.t="ㅁ"; continue; }
    if(prevOpen && p.c==="K" && nextIsC){ prev.t="ㄱ"; continue; }
    if(prevOpen && p.c==="P" && nextIsC){ prev.t="ㅂ"; continue; }
    if(p.c==="L"){ syls.push({l:"ㄹ",v:"ㅡ",t:null}); continue; }
    syls.push({l:ONSET[p.c]||"ㅇ",v:"ㅡ",t:null});
  }
  return syls.map(s=>syl(s.l,s.v,s.t)).join("");
}
window.esToHangul=s=>s.trim().split(/\s+/).filter(Boolean).map(esToHangul).join(" ");
})();
