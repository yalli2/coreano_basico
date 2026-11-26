window.LESSONS=window.LESSONS||{};
LESSONS[16]={block:"B",icon:"🌦",ko:"어제 뭐 했어요?",
title:"El pasado, la negación y el tiempo",
video:{src:"video/leccion16.mp4"},
subtitle:"<k>-았/었어요</k> (pasado), <k>안</k> (no) y el clima.",
goals:["Hablo del pasado: <k>어제 영화를 봤어요</k>.","Niego con <k>안</k>: <k>안 가요</k>.","Describo el tiempo: <k>비가 와요</k>."],
sections:[
{skill:"gram",h:"Gramática",
 body:"<b>Pasado</b>: igual que el presente, pero <k>-아요/어요</k> → <k>-았어요/었어요</k><br>• <k>가요</k> → <k>갔어요</k> · <k>먹어요</k> → <k>먹었어요</k> · <k>해요</k> → <k>했어요</k><br><br><b>Negación</b>: <k>안</k> + verbo: <k>안 가요</k> (no voy), <k>안 먹었어요</k> (no comí).<br>Con <k>하다</k>: <k>공부 안 해요</k>.<br><br><b>그리고</b> = y además (une frases).",
 widgets:[{type:"table",cols:["Presente","Pasado","Español"],rows:[["가요","갔어요","fui"],["봐요","봤어요","vi"],["먹어요","먹었어요","comí"],["마셔요","마셨어요","bebí"],["공부해요","공부했어요","estudié"],["만나요","만났어요","quedé con"]]},
  {type:"table",cols:["Tiempo (날씨)","Español"],rows:[["날씨가 좋아요.","Hace buen tiempo."],["비가 와요.","Llueve."],["눈이 와요.","Nieva."],["더워요.","Hace calor."],["추워요.","Hace frío."]]}]},
{skill:"listen",h:"Diálogo: el lunes por la mañana",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"수진",ko:"주말에 뭐 했어요?",rom:"jumare mwo haesseoyo?",tr:"¿Qué hiciste el fin de semana?"},{who:"B",name:"Pablo",ko:"토요일에 친구를 만났어요. 그리고 같이 영화를 봤어요.",rom:"toyoire chingureul mannasseoyo. geurigo gachi yeonghwareul bwasseoyo",tr:"El sábado vi a un amigo. Y vimos una película juntos."},
  {who:"A",name:"수진",ko:"일요일에는요?",rom:"iryoireneunyo?",tr:"¿Y el domingo?"},{who:"B",name:"Pablo",ko:"비가 왔어요. 그래서 밖에 안 갔어요. 집에서 쉬었어요.",rom:"biga wasseoyo. geuraeseo bakke an gasseoyo. jibeseo swieosseoyo",tr:"Llovió. Así que no salí. Descansé en casa."},
  {who:"A",name:"수진",ko:"아, 그랬어요?",rom:"a, geuraesseoyo?",tr:"Ah, ¿sí?"}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"어제 뭐 했어요?",es:"¿qué hiciste ayer?"},{ko:"영화를 봤어요",es:"vi una película"},{ko:"밥을 안 먹었어요",es:"no comí"},{ko:"비가 와요",es:"llueve"},{ko:"날씨가 좋아요",es:"hace buen tiempo"}]}]},
{skill:"read",h:"Lee: el diario de Pablo",
 body:"<span class='ko' style='font-size:20px;line-height:2'>어제는 날씨가 좋았어요. 아침에 공원에 갔어요. 점심에 친구하고 김밥을 먹었어요. 그리고 카페에서 한국어를 공부했어요. 저녁에는 피곤했어요. 그래서 일찍 잤어요.</span><br><small>Ayer hizo buen tiempo. Por la mañana fui al parque. Al mediodía comí kimbap con un amigo. Y estudié coreano en una cafetería. Por la noche estaba cansado. Así que me dormí temprano.</small>",
 widgets:[{type:"read",items:[{ko:"어제",rom:"eoje",m:"ayer"},{ko:"오늘",rom:"oneul",m:"hoy"},{ko:"내일",rom:"naeil",m:"mañana"},{ko:"주말",rom:"jumal",m:"fin de semana"},{ko:"날씨",rom:"nalssi",m:"tiempo (clima)"},{ko:"비",rom:"bi",m:"lluvia"},{ko:"눈",rom:"nun",m:"nieve; ojo"},{ko:"그래서",rom:"geuraeseo",m:"por eso"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"했어요",size:120}]}
],
words:[{ko:"어제",rom:"eoje",m:"ayer"},{ko:"오늘",rom:"oneul",m:"hoy"},{ko:"내일",rom:"naeil",m:"mañana"},{ko:"주말",rom:"jumal",m:"fin de semana"},{ko:"날씨",rom:"nalssi",m:"tiempo, clima"},{ko:"비",rom:"bi",m:"lluvia"},{ko:"눈",rom:"nun",m:"nieve; ojo"},{ko:"더워요",rom:"deowoyo",m:"hace calor"},{ko:"추워요",rom:"chuwoyo",m:"hace frío"},{ko:"안",rom:"an",m:"no (antes del verbo)"},{ko:"그리고",rom:"geurigo",m:"y, además"},{ko:"그래서",rom:"geuraeseo",m:"por eso"},{ko:"쉬다",rom:"swida",m:"descansar"}],
sets:[
{title:"Pasado y negación",items:[
 {type:"mc",q:"가요 → pasado",opts:["갔어요","가었어요","가했어요","갔요"],a:0},{type:"mc",q:"먹어요 → pasado",opts:["먹었어요","먹았어요","먹했어요","먹어요"],a:0},
 {type:"mc",q:"공부해요 → pasado",opts:["공부했어요","공부하었어요","공부해었어요","공부핬어요"],a:0},{type:"mc",q:"«No voy»",opts:["안 가요","가요 안","안가 요","가지 안"],a:0},{type:"mc",q:"«Llueve»",opts:["비가 와요","눈이 와요","더워요","날씨가 좋아요"],a:0}]},
{title:"Ordena",items:[{type:"order",words:["어제","영화를","봤어요."]},{type:"order",words:["밥을","안","먹었어요."]},{type:"order",words:["주말에","뭐","했어요?"]}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"눈이 와요",opts:["Nieva","Llueve","Hace calor","Hace frío"],a:0},{type:"type",say:"어제",a:"어제"},{type:"type",say:"갔어요",a:"갔어요"}]},
{title:"Hablar",items:[{type:"speak",ko:"어제 뭐 했어요?",es:"¿qué hiciste ayer?"},{type:"speak",ko:"날씨가 좋아요",es:"hace buen tiempo"}]}
]};
