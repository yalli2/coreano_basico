window.LESSONS=window.LESSONS||{};
LESSONS[15]={block:"B",icon:"📍",ko:"어디에 있어요?",
title:"¿Dónde está? 있어요 / 없어요",
video:{src:"video/leccion15.mp4"},
subtitle:"Hay / no hay, ubicación (arriba, abajo, al lado…) y <k>에서</k> (acción en un lugar).",
goals:["Uso <k>이/가 있어요 / 없어요</k>.","Digo dónde está algo: <k>책상 위에 있어요</k>.","Distingo <k>에</k> (estar/ir) y <k>에서</k> (hacer)."],
sections:[
{skill:"gram",h:"Gramática",
 body:"<b>N + 이/가 있어요</b> = hay / tengo N · <b>없어요</b> = no hay / no tengo<br>• Consonante → <b>이</b>: <k>책이 있어요</k> · Vocal → <b>가</b>: <k>의자가 없어요</k><br><br><b>Lugar + 에 있어요</b> = está en…: <k>화장실이 어디에 있어요?</k><br><b>Lugar + 에서 + acción</b> = hacer algo en…: <k>카페에서 공부해요</k>",
 widgets:[{type:"table",cols:["위","아래","앞","뒤","옆","안","밖"],rows:[["arriba","abajo","delante","detrás","al lado","dentro","fuera"]]},
  {type:"table",cols:["Ejemplo","Español"],rows:[["가방이 책상 위에 있어요.","El bolso está sobre el escritorio."],["고양이가 의자 아래에 있어요.","El gato está debajo de la silla."],["은행 옆에 편의점이 있어요.","Al lado del banco hay una tienda."],["시간이 없어요.","No tengo tiempo."]]}]},
{skill:"listen",h:"Diálogo: ¿dónde está el baño?",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"Elena",ko:"저기요, 화장실이 어디에 있어요?",rom:"jeogiyo, hwajangsiri eodie isseoyo?",tr:"Disculpe, ¿dónde está el baño?"},{who:"B",name:"직원",ko:"이 층에는 없어요. 삼 층에 있어요.",rom:"i cheungeneun eopseoyo. sam cheunge isseoyo",tr:"En este piso no hay. Está en el 3.er piso."},
  {who:"A",name:"Elena",ko:"엘리베이터는 어디에 있어요?",rom:"ellibeiteoneun eodie isseoyo?",tr:"¿Y el ascensor dónde está?"},{who:"B",name:"직원",ko:"편의점 옆에 있어요.",rom:"pyeonuijeom yeope isseoyo",tr:"Está al lado de la tienda."},
  {who:"A",name:"Elena",ko:"감사합니다!",rom:"gamsahamnida",tr:"¡Gracias!"}]},
  {type:"tip",icon:"🔢",body:"Los pisos se cuentan con números sino-coreanos + <k>층</k>: <k>일 층</k> (1.º), <k>이 층</k> (2.º), <k>삼 층</k> (3.º)."}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"화장실이 어디에 있어요?",es:"¿dónde está el baño?"},{ko:"시간이 없어요",es:"no tengo tiempo"},{ko:"책상 위에 있어요",es:"está sobre el escritorio"},{ko:"카페에서 공부해요",es:"estudio en la cafetería"}]}]},
{skill:"read",h:"Lee: lugares",
 widgets:[{type:"read",items:[{ko:"집",rom:"jip",m:"casa"},{ko:"학교",rom:"hakgyo",m:"escuela"},{ko:"식당",rom:"sikdang",m:"restaurante"},{ko:"카페",rom:"kape",m:"cafetería"},{ko:"은행",rom:"eunhaeng",m:"banco"},{ko:"병원",rom:"byeongwon",m:"hospital"},{ko:"편의점",rom:"pyeonuijeom",m:"tienda 24 h"},{ko:"도서관",rom:"doseogwan",m:"biblioteca"},{ko:"시장",rom:"sijang",m:"mercado"},{ko:"공원",rom:"gongwon",m:"parque"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"있어요",size:120}]}
],
words:[{ko:"있어요",rom:"isseoyo",m:"hay / tengo / estar"},{ko:"없어요",rom:"eopseoyo",m:"no hay / no tengo"},{ko:"어디",rom:"eodi",m:"dónde"},{ko:"위",rom:"wi",m:"arriba"},{ko:"아래",rom:"arae",m:"abajo"},{ko:"앞",rom:"ap",m:"delante"},{ko:"뒤",rom:"dwi",m:"detrás"},{ko:"옆",rom:"yeop",m:"al lado"},{ko:"안",rom:"an",m:"dentro"},{ko:"집",rom:"jip",m:"casa"},{ko:"은행",rom:"eunhaeng",m:"banco"},{ko:"병원",rom:"byeongwon",m:"hospital"},{ko:"공원",rom:"gongwon",m:"parque"},{ko:"시간",rom:"sigan",m:"tiempo"}],
sets:[
{title:"Gramática",items:[
 {type:"mc",q:"책( ? ) 있어요",opts:["이","가"],a:0,fixed:true},{type:"mc",q:"의자( ? ) 없어요",opts:["이","가"],a:1,fixed:true},
 {type:"mc",q:"카페( ? ) 공부해요",opts:["에서","에"],a:0,fixed:true},{type:"mc",q:"학교( ? ) 가요",opts:["에서","에"],a:1,fixed:true},{type:"mc",q:"<k>옆</k> =",opts:["al lado","detrás","dentro","abajo"],a:0}]},
{title:"Ordena",items:[{type:"order",words:["화장실이","어디에","있어요?"]},{type:"order",words:["가방이","책상","위에","있어요."]}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"은행 옆에 있어요",opts:["está al lado del banco","está detrás del banco","está en el banco","no hay banco"],a:0},{type:"type",say:"집",a:"집"},{type:"type",say:"없어요",a:"없어요"}]},
{title:"Hablar",items:[{type:"speak",ko:"화장실이 어디에 있어요?",es:"¿dónde está el baño?"},{type:"speak",ko:"시간이 없어요",es:"no tengo tiempo"}]}
]};
