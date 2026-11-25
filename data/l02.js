window.LESSONS=window.LESSONS||{};
LESSONS[2]={block:"A",icon:"🅰️",ko:"기본 모음",
title:"Las 10 vocales básicas",
subtitle:"<k>ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ</k> y sus parejas con «y».",
goals:["Leo y pronuncio las 10 vocales básicas.","Distingo <k>어</k>/<k>오</k> y <k>으</k>/<k>우</k>.","Escribo las vocales con el orden correcto."],
sections:[
{skill:"gram",h:"Las vocales",
 body:"• Una sílaba que empieza por vocal lleva <k>ㅇ</k> muda: <k>ㅏ</k> → <k>아</k>.<br>• Vocal <b>vertical</b> (ㅏ ㅓ ㅣ) → a la <b>derecha</b>. Vocal <b>horizontal</b> (ㅗ ㅜ ㅡ) → <b>debajo</b>.<br>• Dos rayitas = sonido con <b>«y»</b>: <k>ㅏ</k> a → <k>ㅑ</k> ya.",
 widgets:[{type:"table",cols:["","ㅏ","ㅓ","ㅗ","ㅜ","ㅡ","ㅣ"],rows:[["Sonido","a","eo","o","u","eu","i"],["Con «y»","ㅑ ya","ㅕ yeo","ㅛ yo","ㅠ yu","—","—"]]},
  {type:"tip",kind:"es",icon:"⚠️",body:"Sonidos nuevos para hispanohablantes:<br><k>ㅓ</k> = una «o» muy abierta, sin redondear labios 😮 · <k>ㅡ</k> = una «u» sonriendo 😬"}]},
{skill:"listen",h:"Escucha las diferencias",
 widgets:[{type:"jamo",items:[
  {j:"ㅏ",name:"아",rom:"a",tip:"Como «casa».",ex:[{ko:"아이",m:"niño"}]},
  {j:"ㅓ",name:"어",rom:"eo",tip:"«o» abierta, boca relajada.",ex:[{ko:"어디",m:"¿dónde?"}]},
  {j:"ㅗ",name:"오",rom:"o",tip:"«o» con labios redondos.",ex:[{ko:"오이",m:"pepino"}]},
  {j:"ㅜ",name:"우",rom:"u",tip:"Como «uva».",ex:[{ko:"우유",m:"leche"}]},
  {j:"ㅡ",name:"으",rom:"eu",tip:"«u» sonriendo.",ex:[{ko:"그",m:"ese"}]},
  {j:"ㅣ",name:"이",rom:"i",tip:"Como «isla».",ex:[{ko:"이",m:"dos"}]}]},
  {type:"contrast",sets:[[{ko:"오",lab:"o"},{ko:"어",lab:"eo"}],[{ko:"우",lab:"u"},{ko:"으",lab:"eu"}],[{ko:"야",lab:"ya"},{ko:"여",lab:"yeo"},{ko:"요",lab:"yo"},{ko:"유",lab:"yu"}]]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"아이",es:"niño"},{ko:"오이",es:"pepino"},{ko:"우유",es:"leche"},{ko:"여우",es:"zorro"},{ko:"이유",es:"razón"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"read",items:[{ko:"아이",rom:"ai",m:"niño"},{ko:"오이",rom:"oi",m:"pepino"},{ko:"우유",rom:"uyu",m:"leche"},{ko:"여우",rom:"yeou",m:"zorro"},{ko:"이유",rom:"iyu",m:"razón"},{ko:"여유",rom:"yeoyu",m:"tiempo libre"},{ko:"요요",rom:"yoyo",m:"yoyó"},{ko:"아야",rom:"aya",m:"¡ay!"}]}]},
{skill:"write",h:"Escribe",
 body:"Primero la línea larga, luego la rayita (de arriba abajo, de izquierda a derecha).",
 widgets:[{type:"writers",chars:"ㅏㅓㅗㅜㅡㅣㅑㅕㅛㅠ",size:100},{type:"writers",chars:"아이우유",size:120}]}
],
words:[{ko:"아이",rom:"ai",m:"niño/a"},{ko:"오이",rom:"oi",m:"pepino"},{ko:"우유",rom:"uyu",m:"leche"},{ko:"여우",rom:"yeou",m:"zorro"},{ko:"이유",rom:"iyu",m:"razón"},{ko:"여유",rom:"yeoyu",m:"tiempo libre"},{ko:"오",rom:"o",m:"cinco"},{ko:"이",rom:"i",m:"dos; diente"}],
sets:[
{title:"Escuchar",items:[
 {type:"listen",say:"어",opts:["어","오","우","으"],a:0},{type:"listen",say:"으",opts:["우","으","이","어"],a:1},{type:"listen",say:"여",opts:["야","여","요","유"],a:1},
 {type:"listen",say:"오이",opts:["오이","아이","여우","우유"],a:0},{type:"listen",say:"여우",opts:["여유","여우","요요","이유"],a:1}]},
{title:"Dictado",items:[
 {type:"type",say:"아이",a:"아이"},{type:"type",say:"우유",a:"우유"},{type:"type",say:"오이",a:"오이"},{type:"type",say:"여우",a:"여우"}]},
{title:"Hablar",items:[{type:"speak",ko:"우유",es:"leche"},{type:"speak",ko:"아이",es:"niño"},{type:"speak",ko:"여우",es:"zorro"}]},
{title:"Escribir",items:[{type:"draw",ch:"ㅏ"},{type:"draw",ch:"ㅓ"},{type:"draw",ch:"ㅗ"},{type:"draw",ch:"우"}]}
]};
