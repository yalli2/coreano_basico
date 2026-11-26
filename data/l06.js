window.LESSONS=window.LESSONS||{};
LESSONS[6]={block:"A",icon:"🧱",ko:"받침",
title:"La consonante final (받침)",
video:{src:"video/leccion6.mp4"},
subtitle:"Muchas letras posibles, solo 7 sonidos. Cierra la sílaba sin añadir vocal.",
goals:["Conozco los 7 sonidos finales.","Distingo <k>반</k>/<k>밤</k>/<k>방</k>.","Leo 받침 dobles: <k>닭</k>, <k>없다</k>."],
sections:[
{skill:"gram",h:"Los 7 sonidos finales",
 body:"El 받침 va <b>debajo</b> del bloque: <k>바</k> + <k>ㅁ</k> = <k>밤</k>. ⚠️ No añadas vocal: <k>밥</k> es «bap», no «ba-pu».",
 widgets:[{type:"table",cols:["Sonido","Letras","Ejemplo"],rows:[
  ["[ㄱ] k","ㄱ ㅋ ㄲ","책 libro · 부엌 [부억]"],["[ㄴ] n","ㄴ","산 montaña"],["[ㄷ] t","ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ","옷 [옫] ropa · 꽃 [꼳]"],["[ㄹ] l","ㄹ","물 agua"],
  ["[ㅁ] m","ㅁ","밤 noche"],["[ㅂ] p","ㅂ ㅍ","밥 arroz · 앞 [압]"],["[ㅇ] ng","ㅇ","방 habitación"]]},
  {type:"tip",icon:"💡",body:"<b>받침 doble</b>: ante consonante se lee <b>una</b>, normalmente la izquierda (<k>없다</k> [업따], <k>앉다</k> [안따]); con <k>ㄺ ㄻ</k> la derecha (<k>닭</k> [닥], <k>삶</k> [삼])."}]},
{skill:"listen",h:"Escucha: solo cambia el final",
 widgets:[{type:"contrast",sets:[[{ko:"박",lab:"[k]"},{ko:"반",lab:"[n]"},{ko:"받",lab:"[t]"},{ko:"발",lab:"[l]"},{ko:"밤",lab:"[m]"},{ko:"밥",lab:"[p]"},{ko:"방",lab:"[ng]"}],[{ko:"감",lab:"[m]"},{ko:"간",lab:"[n]"},{ko:"강",lab:"[ng]"}]]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"밥",es:"arroz, comida"},{ko:"빵",es:"pan"},{ko:"김치",es:"kimchi"},{ko:"사랑",es:"amor"},{ko:"선생님",es:"profesor/a"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"builder",l:"ㄱㄴㄷㅁㅂㅅㅇㅈㅎ",v:"ㅏㅓㅗㅜㅡㅣ",t:["","ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅍ"]},
  {type:"read",items:[{ko:"책",rom:"chaek",m:"libro"},{ko:"산",rom:"san",m:"montaña"},{ko:"문",rom:"mun",m:"puerta"},{ko:"옷",rom:"ot",m:"ropa"},{ko:"꽃",rom:"kkot",m:"flor"},{ko:"물",rom:"mul",m:"agua"},{ko:"밤",rom:"bam",m:"noche"},{ko:"밥",rom:"bap",m:"arroz"},{ko:"방",rom:"bang",m:"habitación"},{ko:"빵",rom:"ppang",m:"pan"},{ko:"닭",rom:"dak",m:"pollo"},{ko:"선생님",rom:"seonsaengnim",m:"profesor/a"}]}]},
{skill:"write",h:"Escribe",
 body:"El 받침 se escribe al final, abajo.",
 widgets:[{type:"writers",chars:"밥책꽃닭",size:120}]}
],
words:[{ko:"책",rom:"chaek",m:"libro"},{ko:"산",rom:"san",m:"montaña"},{ko:"문",rom:"mun",m:"puerta"},{ko:"옷",rom:"ot",m:"ropa"},{ko:"꽃",rom:"kkot",m:"flor"},{ko:"물",rom:"mul",m:"agua"},{ko:"밤",rom:"bam",m:"noche"},{ko:"밥",rom:"bap",m:"arroz; comida"},{ko:"방",rom:"bang",m:"habitación"},{ko:"빵",rom:"ppang",m:"pan"},{ko:"닭",rom:"dak",m:"pollo"},{ko:"김치",rom:"gimchi",m:"kimchi"},{ko:"선생님",rom:"seonsaengnim",m:"profesor/a"}],
sets:[
{title:"Escuchar",items:[{type:"listen",say:"밤",opts:["반","밤","방","밥"],a:1},{type:"listen",say:"방",opts:["반","밤","방","박"],a:2},{type:"listen",say:"강",opts:["간","감","강","갑"],a:2},{type:"listen",say:"책",opts:["채","책","챈","챙"],a:1}]},
{title:"Comprender",items:[{type:"mc",q:"<k>옷</k> se pronuncia…",opts:["[옫]","[오스]","[오]","[옥]"],a:0},{type:"mc",q:"<k>닭</k> se pronuncia…",opts:["[닥]","[달]","[달그]","[다]"],a:0},{type:"mc",q:"¿Cuántos sonidos finales hay?",opts:["7","14","19","27"],a:0}]},
{title:"Construir y dictado",items:[{type:"build",say:"산",pl:"ㅅㅈㅊㅎ",fin:"ㄴㅁㅇ"},{type:"build",say:"강",pl:"ㄱㅋㄲㅎ",fin:"ㄴㅁㅇ"},{type:"type",say:"책",a:"책"},{type:"type",say:"물",a:"물"},{type:"type",say:"사랑",a:"사랑"}]},
{title:"Hablar y escribir",items:[{type:"speak",ko:"김치",es:"kimchi"},{type:"speak",ko:"선생님",es:"profesor/a"},{type:"draw",ch:"밥"},{type:"draw",ch:"꽃"}]}
]};
