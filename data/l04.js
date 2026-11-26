window.LESSONS=window.LESSONS||{};
LESSONS[4]={block:"A",icon:"💨",ko:"격음과 경음",
title:"Aspiradas y tensas",
video:{src:"video/leccion4.mp4"},
subtitle:"<k>가 · 카 · 까</k>: tres sonidos que en español serían uno.",
goals:["Leo <k>ㅋ ㅌ ㅍ ㅊ</k> y <k>ㄲ ㄸ ㅃ ㅆ ㅉ</k>.","Distingo de oído <k>가/카/까</k>.","Pronuncio el soplo y la tensión."],
sections:[
{skill:"gram",h:"Tres tipos de consonantes",
 widgets:[{type:"table",cols:["Tipo","Letras","Cómo"],rows:[
  ["Suave","ㄱ ㄷ ㅂ ㅈ ㅅ","poco aire, relajado"],["Aspirada","ㅋ ㅌ ㅍ ㅊ","¡soplo fuerte! (un trazo más)"],["Tensa","ㄲ ㄸ ㅃ ㅆ ㅉ","sin aire, garganta tensa (letra doble)"]]},
  {type:"tip",kind:"es",icon:"🎁",body:"<b>¡Ventaja hispana!</b> La p, t, k de «papá», «taco», «casa» no tienen soplo: suenan casi como las tensas <k>ㅃ ㄸ ㄲ</k>. Para las aspiradas, <b>exagera el soplo</b> (prueba con una hoja delante de la boca)."}]},
{skill:"listen",h:"Escucha los tríos",
 body:"Toca cada sílaba. Luego pulsa 🎲 y adivina cuál suena.",
 widgets:[{type:"contrast",sets:[
   [{ko:"가",lab:"suave"},{ko:"카",lab:"aspirada"},{ko:"까",lab:"tensa"}],[{ko:"다",lab:"suave"},{ko:"타",lab:"aspirada"},{ko:"따",lab:"tensa"}],
   [{ko:"바",lab:"suave"},{ko:"파",lab:"aspirada"},{ko:"빠",lab:"tensa"}],[{ko:"자",lab:"suave"},{ko:"차",lab:"aspirada"},{ko:"짜",lab:"tensa"}],[{ko:"사",lab:"suave"},{ko:"싸",lab:"tensa"}]]},
  {type:"rules",items:[{name:"Cambia el significado",body:"Solo cambia el aire:",ex:[["불","불","fuego"],["풀","풀","hierba"],["뿔","뿔","cuerno"]]},{name:"Otra serie",body:"",ex:[["달","달","luna"],["탈","탈","máscara"],["딸","딸","hija"]]}]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"커피",es:"café"},{ko:"기차",es:"tren"},{ko:"아빠",es:"papá"},{ko:"토끼",es:"conejo"},{ko:"비싸요",es:"es caro"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"read",items:[{ko:"코",rom:"ko",m:"nariz"},{ko:"커피",rom:"keopi",m:"café"},{ko:"포도",rom:"podo",m:"uvas"},{ko:"피자",rom:"pija",m:"pizza"},{ko:"기차",rom:"gicha",m:"tren"},{ko:"치마",rom:"chima",m:"falda"},{ko:"토끼",rom:"tokki",m:"conejo"},{ko:"아빠",rom:"appa",m:"papá"},{ko:"어깨",rom:"eokkae",m:"hombro"},{ko:"찌개",rom:"jjigae",m:"guiso"},{ko:"싸요",rom:"ssayo",m:"es barato"},{ko:"비싸요",rom:"bissayo",m:"es caro"}]}]},
{skill:"write",h:"Escribe",
 body:"Las aspiradas = forma básica + 1 trazo. Las tensas = la letra repetida.",
 widgets:[{type:"writers",chars:"ㅋㅌㅍㅊㄲㄸㅃㅆㅉ",size:100}]}
],
words:[{ko:"코",rom:"ko",m:"nariz"},{ko:"커피",rom:"keopi",m:"café"},{ko:"포도",rom:"podo",m:"uvas"},{ko:"기차",rom:"gicha",m:"tren"},{ko:"차",rom:"cha",m:"té; coche"},{ko:"토끼",rom:"tokki",m:"conejo"},{ko:"아빠",rom:"appa",m:"papá"},{ko:"딸",rom:"ttal",m:"hija"},{ko:"싸요",rom:"ssayo",m:"es barato"},{ko:"비싸요",rom:"bissayo",m:"es caro"},{ko:"짜요",rom:"jjayo",m:"está salado"},{ko:"찌개",rom:"jjigae",m:"guiso coreano"}],
sets:[
{title:"Escuchar: ¿suave, aspirada o tensa?",items:[
 {type:"listen",say:"카",opts:["가","카","까"],a:1,fixed:true},{type:"listen",say:"따",opts:["다","타","따"],a:2,fixed:true},{type:"listen",say:"바",opts:["바","파","빠"],a:0,fixed:true},
 {type:"listen",say:"차",opts:["자","차","짜"],a:1,fixed:true},{type:"listen",say:"싸",opts:["사","싸"],a:1,fixed:true},{type:"listen",say:"토끼",opts:["토끼","도끼","토기","도기"],a:0}]},
{title:"Dictado",items:[{type:"type",say:"커피",a:"커피"},{type:"type",say:"기차",a:"기차"},{type:"type",say:"아빠",a:"아빠",q:"Escucha y escribe. Pista: ⇧ + ㅂ = ㅃ"}]},
{title:"Hablar",items:[{type:"speak",ko:"커피",es:"café"},{type:"speak",ko:"아빠",es:"papá"},{type:"speak",ko:"비싸요",es:"es caro"}]},
{title:"Escribir",items:[{type:"draw",ch:"ㅋ"},{type:"draw",ch:"ㅌ"},{type:"draw",ch:"ㅍ"},{type:"draw",ch:"ㅊ"}]}
]};
