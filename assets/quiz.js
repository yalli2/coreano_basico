/* Quiz engine: mc · listen · type (on-screen Korean keyboard) · build · draw · order */
(function(){
"use strict";
const norm=s=>String(s).normalize("NFC").replace(/[\s.,!?¿¡~·'’"-]/g,"").toLowerCase();
const KEYS="ABCDEF";

function buildItem(it,idx){
  const box=h("div",{class:"q","data-type":it.type}), st={val:null,done:false};
  box._st=st; box._it=it;
  const tname=it.type==="type"&&it.say?"tDict":({mc:"tMC",listen:"tListen",type:"tType",build:"tBuild",draw:"tDraw",order:"tOrder",speak:"tSpeak"}[it.type]);
  const qtext=it.q?L(it.q):it.type==="type"&&it.say?"Escucha y escribe lo que oyes.":({listen:t("listenPick"),build:t("buildQ"),draw:t("drawQ"),order:t("orderQ")}[it.type]||"");
  box.append(h("div",{class:"qt"},h("span",{class:"qn"},idx+1),h("div",{class:"txt",html:rich(qtext)}),it.say&&it.type==="mc"?sayBtn(it.say):null,h("span",{class:"tag"},t(tname))));

  if(it.type==="listen"||it.type==="build"||(it.type==="type"&&it.say)){
    box.append(h("div",{class:"listen"},sayBtn(it.say,"lg"),h("button",{class:"btn ghost sm",onclick:()=>TTS.speak(sayText(it.say),{rate:.55})},t("slow"))));
  }
  if(it.type==="mc"||it.type==="listen"){
    const opts=h("div",{class:"opts"+(it.opts.every(o=>isKo(L(o))&&L(o).length<=4)?" big":"")});
    const order=it.fixed?it.opts.map((_,i)=>i):shuffle(it.opts.map((_,i)=>i));
    order.forEach(i=>{ const o=it.opts[i]; const lab=L(o);
      const b=h("button",{class:"opt",onclick:()=>{ if(st.done) return; $$(".opt",opts).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); st.val=i; if(isKo(lab)&&it.type==="mc"&&it.sayOpts) say(lab); }},
        h("span",{class:"k"},KEYS[opts.children.length]),h("span",{class:isKo(lab)?"ko":"",html:rich(lab)}));
      b._i=i; opts.append(b); });
    box.append(opts);
  }
  if(it.type==="type"){
    const out=h("div",{class:"typeout ko"},h("span",{class:"ph"},t("typeHere")));
    const kb=koKeyboard(s=>{ st.val=s; out.innerHTML=""; out.append(s?h("span",null,s):h("span",{class:"ph"},t("typeHere"))); });
    box.append(out,kb.el);
  }
  if(it.type==="build"){
    const [l,v,tt]=HangulWriter.decompose(it.say); const sel={l:null,v:null,t:""};
    const res=h("div",{class:"bres ko"},"?");
    const upd=()=>{ if(sel.l&&sel.v){ const s=String.fromCharCode(0xAC00+HangulWriter.CHO.indexOf(sel.l)*588+HangulWriter.JUNG.indexOf(sel.v)*28+HangulWriter.JONG.indexOf(sel.t)); res.textContent=s; st.val=s; } };
    const row=(pool,key,label)=>h("div",{class:"brow"},h("b",null,label),pool.map(j=>{ const b=h("button",{class:"jb ko",onclick:()=>{ if(st.done) return; sel[key]=j; $$(".jb",b.parentNode).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); upd(); }},j||"∅"); return b; }));
    const pl=shuffle(Array.from(new Set([l,...(it.pl||"ㄱㄴㄷㅂㅅㅈ").split("")]))).slice(0,6);
    const pv=shuffle(Array.from(new Set([v,...(it.pv||"ㅏㅓㅗㅜㅡㅣ").split("")]))).slice(0,6);
    box.append(h("div",{class:"build"},row(pl.includes(l)?pl:[l,...pl.slice(1)],"l",t("initial")),row(pv.includes(v)?pv:[v,...pv.slice(1)],"v",t("vowelL")),
      it.fin?row(Array.from(new Set(["",tt,...it.fin.split("")])),"t",t("final")):null,res));
  }
  if(it.type==="draw"){
    const wrap=h("div",{class:"qdraw"}), msg=h("div",{class:"wmsg"});
    const hb=h("div",{class:"hw-box"}); wrap.append(h("div",{class:"ko huge"},it.ch,sayBtn(it.ch)),hb,msg);
    const w=HangulWriter.create(hb,it.ch,{size:180}); w.hide();
    const go=()=>w.quiz({onMistake:k=>{ msg.textContent=k==="reversed"?"↩️ "+t("wrongDir"):"✋ "+t("tryAgain"); },onCorrect:(n,N)=>msg.textContent=`✔ ${n}/${N}`,
      onComplete:r=>{ st.val=r.mistakes; msg.textContent="🎉 "+t("wellDone"); }});
    go(); wrap.append(h("button",{class:"btn ghost sm",onclick:()=>{ w.animate(()=>setTimeout(()=>{ w.hide(); go(); },500)); }},t("animate")));
    box.append(wrap);
  }
  if(it.type==="speak"){
    const res=h("div",{class:"sres"});
    const mic=h("button",{class:"mic",onclick:async()=>{ if(st.done) return;
      if(!(window.SpeechRecognition||window.webkitSpeechRecognition)){ st.val=100; res.textContent="✔"; return; }
      mic.classList.add("rec"); res.textContent="🎙 …";
      try{ const alts=await listenOnce(); let best=0,heard=alts[0]; alts.forEach(a=>{ const v=window.similKo(it.ko,a); if(v>best){best=v;heard=a;} }); st.val=Math.max(st.val||0,best);
        res.innerHTML=""; res.append(h("b",{class:"ko"},heard),` ${best}%`); res.className="sres "+(best>=85?"hi":best>=60?"mid":"lo"); }
      catch(e){ res.textContent="🔁 "+(e==="not-allowed"?"Permite el micrófono":"No te oí, inténtalo otra vez"); }
      mic.classList.remove("rec"); }},"🎙");
    box.append(h("div",{class:"spq"},h("div",{class:"ko sk"},it.ko),it.es?h("div",{class:"ses"},it.es):null,h("div",{class:"sbt"},sayBtn(it.ko),mic),res));
  }
  if(it.type==="order"){
    const chosen=h("div",{class:"ord-ans ko"}), pool=h("div",{class:"ord-pool"}); const picked=[];
    const redraw=()=>{ chosen.innerHTML=""; picked.forEach((w,i)=>chosen.append(h("button",{class:"chip ko",onclick:()=>{ if(st.done) return; picked.splice(i,1); redraw(); }},w))); st.val=picked.join(" ");
      pool.innerHTML=""; const rem=it.words.slice(); picked.forEach(p=>{ const k=rem.indexOf(p); if(k>=0) rem.splice(k,1); });
      shuffleOnce.filter(w=>{ const k=rem.indexOf(w); if(k>=0){ rem.splice(k,1); return true; } return false; }).forEach(w=>pool.append(h("button",{class:"chip ko",onclick:()=>{ if(st.done) return; picked.push(w); redraw(); }},w))); };
    const shuffleOnce=shuffle(it.words); redraw();
    box.append(chosen,pool);
  }
  box.append(h("div",{class:"fb"}));
  return box;
}
function grade(box){
  const it=box._it, st=box._st; let ok=false, ans="";
  if(it.type==="mc"||it.type==="listen"){ ok=st.val===it.a; ans=L(it.opts[it.a]);
    $$(".opt",box).forEach(b=>{ const i=b._i; if(i===it.a) b.classList.add("good"); else if(i===st.val) b.classList.add("bad"); }); }
  else if(it.type==="type"){ const acc=[].concat(it.a); ok=st.val!=null && acc.some(a=>norm(a)===norm(st.val)); ans=acc[0]; }
  else if(it.type==="build"){ ok=st.val===it.say; ans=it.say; }
  else if(it.type==="draw"){ ok=st.val!=null && st.val<=3; ans=it.ch; }
  else if(it.type==="speak"){ ok=(st.val||0)>=70; ans=it.ko; }
  else if(it.type==="order"){ ok=norm(st.val||"")===norm(it.words.join(" ")); ans=it.words.join(" "); }
  st.done=true; box.classList.add(ok?"ok":"no");
  const fb=$(".fb",box); fb.innerHTML="";
  fb.append(ok?h("span",null,"✅ "+t("correct")):h("span",null,"❌ "+t("wrong")+" ",h("b",{class:isKo(ans)?"ko":""},ans),isKo(ans)?sayBtn(ans):null));
  if(it.ex) fb.append(h("div",{class:"ex",html:rich(L(it.ex))}));
  return ok;
}
window.renderSet=function(set,key){
  const wrap=h("div",{class:"qset"}), list=h("div",{class:"qlist"}), bar=h("div",{class:"qbar"});
  const items=set.shuffle===false?set.items:set.items;
  const draw=()=>{ list.innerHTML=""; items.forEach((it,i)=>list.append(buildItem(it,i))); bar.innerHTML=""; bar.append(btn); };
  const btn=h("button",{class:"btn",onclick:()=>{
    const qs=$$(".q",list); let c=0; qs.forEach(q=>{ if(grade(q)) c++; });
    const pct=Math.round(c/qs.length*100); Scores.put(key,pct);
    bar.innerHTML=""; bar.append(h("div",{class:"score "+(pct>=80?"hi":pct>=50?"mid":"lo")},t("score")+": ",h("b",null,`${c}/${qs.length} · ${pct}%`)),
      h("button",{class:"btn ghost",onclick:draw},t("retry")));
    document.dispatchEvent(new Event("scorechange")); bar.scrollIntoView({behavior:"smooth",block:"center"});
  }},t("check"));
  draw(); wrap.append(list,bar); return wrap;
};
})();
