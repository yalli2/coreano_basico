window.LESSONS=window.LESSONS||{};
LESSONS[3]={block:"A",icon:"🅱️",ko:"기본 자음",
title:"Las consonantes básicas",
subtitle:"<k>ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ</k>: sonido y posición.",
goals:["Pronuncio 10 consonantes básicas.","Sé que <k>ㄱ ㄷ ㅂ ㅈ</k> se suavizan entre vocales.","Leo palabras como <k>나무</k>, <k>바다</k>, <k>모자</k>."],
sections:[
{skill:"gram",h:"Las 10 consonantes",
 widgets:[{type:"table",cols:["Letra","Nombre","Sonido","Ejemplo"],rows:[
  ["ㄱ","기역","k / g","고기 carne"],["ㄴ","니은","n","나무 árbol"],["ㄷ","디귿","t / d","바다 mar"],["ㄹ","리을","r / l","나라 país"],["ㅁ","미음","m","모자 gorra"],
  ["ㅂ","비읍","p / b","나비 mariposa"],["ㅅ","시옷","s (sh ante i)","사자 león"],["ㅇ","이응","— / ng","아이 niño"],["ㅈ","지읒","ch / j","지도 mapa"],["ㅎ","히읗","h (j suave)","하나 uno"]]},
  {type:"tip",kind:"es",icon:"💡",body:"• <k>ㄱ ㄷ ㅂ ㅈ</k>: al inicio, suaves (k/t/p/ch); entre vocales, sonoras (g/d/b/j): <k>고기</k> «ko-gi».<br>• <k>ㄹ</k>: entre vocales «r» de <i>pero</i>; al final «l»: <k>나라</k>, <k>말</k>.<br>• <k>ㅅ</k> + <k>ㅣ</k> = «shi»: <k>시</k>.<br>• <k>ㅎ</k> siempre suena (como una «j» suave)."}]},
{skill:"listen",h:"Escucha",
 widgets:[{type:"contrast",sets:[[{ko:"가",lab:"ga"},{ko:"나",lab:"na"},{ko:"다",lab:"da"},{ko:"라",lab:"ra"},{ko:"마",lab:"ma"}],[{ko:"바",lab:"ba"},{ko:"사",lab:"sa"},{ko:"아",lab:"a"},{ko:"자",lab:"ja"},{ko:"하",lab:"ha"}],[{ko:"사",lab:"sa"},{ko:"시",lab:"shi"}]]},
  {type:"builder",l:"ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅎ",v:"ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ",t:[""]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"나무",es:"árbol"},{ko:"바다",es:"mar"},{ko:"고기",es:"carne"},{ko:"나라",es:"país"},{ko:"하나",es:"uno"},{ko:"어머니",es:"madre"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"read",items:[{ko:"나무",rom:"namu",m:"árbol"},{ko:"바다",rom:"bada",m:"mar"},{ko:"나비",rom:"nabi",m:"mariposa"},{ko:"모자",rom:"moja",m:"gorra"},{ko:"사자",rom:"saja",m:"león"},{ko:"하마",rom:"hama",m:"hipopótamo"},{ko:"고기",rom:"gogi",m:"carne"},{ko:"다리",rom:"dari",m:"pierna; puente"},{ko:"머리",rom:"meori",m:"cabeza"},{ko:"지도",rom:"jido",m:"mapa"},{ko:"두부",rom:"dubu",m:"tofu"},{ko:"어머니",rom:"eomeoni",m:"madre"}]}]},
{skill:"write",h:"Escribe",
 body:"<k>ㄹ</k> = 3 trazos · <k>ㅁ</k> = 3 · <k>ㅂ</k> = 4 · <k>ㅈ</k> = 2.",
 widgets:[{type:"writers",chars:"ㄱㄴㄷㄹㅁㅂㅅㅈㅎ",size:100},{type:"writers",chars:"나무바다",size:120}]}
],
words:[{ko:"나무",rom:"namu",m:"árbol"},{ko:"바다",rom:"bada",m:"mar"},{ko:"나비",rom:"nabi",m:"mariposa"},{ko:"모자",rom:"moja",m:"gorra"},{ko:"사자",rom:"saja",m:"león"},{ko:"고기",rom:"gogi",m:"carne"},{ko:"다리",rom:"dari",m:"pierna; puente"},{ko:"머리",rom:"meori",m:"cabeza"},{ko:"지도",rom:"jido",m:"mapa"},{ko:"나라",rom:"nara",m:"país"},{ko:"어머니",rom:"eomeoni",m:"madre"},{ko:"하나",rom:"hana",m:"uno"}],
sets:[
{title:"Escuchar",items:[
 {type:"listen",say:"나",opts:["나","다","라","마"],a:0},{type:"listen",say:"러",opts:["로","러","너","더"],a:1},{type:"listen",say:"시",opts:["스","사","시","지"],a:2},
 {type:"listen",say:"나비",opts:["나비","나무","바다","하마"],a:0},{type:"listen",say:"모자",opts:["사자","모자","지도","두부"],a:1}]},
{title:"Construir y dictado",items:[
 {type:"build",say:"마",pl:"ㄱㄴㄷㅁㅂㅅ"},{type:"build",say:"로",pl:"ㄴㄷㄹㅁㅎ"},{type:"build",say:"수",pl:"ㅅㅈㅎㄱ"},
 {type:"type",say:"나무",a:"나무"},{type:"type",say:"바다",a:"바다"},{type:"type",say:"어머니",a:"어머니"}]},
{title:"Hablar",items:[{type:"speak",ko:"나무",es:"árbol"},{type:"speak",ko:"바다",es:"mar"},{type:"speak",ko:"어머니",es:"madre"}]},
{title:"Escribir",items:[{type:"draw",ch:"ㄹ"},{type:"draw",ch:"ㅂ"},{type:"draw",ch:"ㅈ"},{type:"draw",ch:"ㅎ"},{type:"draw",ch:"무"}]}
]};
