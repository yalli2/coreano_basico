window.LESSONS=window.LESSONS||{};
LESSONS[11]={block:"B",icon:"👉",ko:"이게 뭐예요?",
title:"¿Qué es esto? 이/그/저",
video:{src:"video/leccion11.mp4"},
subtitle:"Esto, eso, aquello; y la negación <k>이/가 아니에요</k>.",
goals:["Pregunto <k>이게 뭐예요?</k>","Uso <k>이 / 그 / 저</k>.","Niego con <k>N이/가 아니에요</k>."],
sections:[
{skill:"gram",h:"Gramática",
 body:"<b>이</b> (esto, cerca de mí) · <b>그</b> (eso, cerca de ti) · <b>저</b> (aquello, lejos).<br>• <k>이거</k> / <k>그거</k> / <k>저거</k> = esto / eso / aquello.<br>• <k>이게 뭐예요?</k> = ¿Qué es esto?<br><br><b>N + 이/가 아니에요</b> = «no es N»<br>• Consonante → <b>이</b>: <k>책이 아니에요</k> · Vocal → <b>가</b>: <k>의자가 아니에요</k>",
 widgets:[{type:"table",cols:["Ejemplo","Español"],rows:[["이게 뭐예요?","¿Qué es esto?"],["그거는 가방이에요.","Eso es un bolso."],["저거는 시계예요?","¿Aquello es un reloj?"],["아니요, 시계가 아니에요.","No, no es un reloj."],["이 책은 한국어 책이에요.","Este libro es de coreano."]]}]},
{skill:"listen",h:"Diálogo: en la clase",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"Juan",ko:"이게 뭐예요?",rom:"ige mwoyeyo?",tr:"¿Qué es esto?"},{who:"B",name:"지수",ko:"그거는 공책이에요.",rom:"geugeoneun gongchaegieyo",tr:"Eso es un cuaderno."},
  {who:"A",name:"Juan",ko:"저거는 시계예요?",rom:"jeogeoneun sigyeyeyo?",tr:"¿Aquello es un reloj?"},{who:"B",name:"지수",ko:"아니요, 시계가 아니에요. 달력이에요.",rom:"aniyo, sigyega anieyo. dallyeogieyo",tr:"No, no es un reloj. Es un calendario."},
  {who:"A",name:"Juan",ko:"아, 그래요? 고마워요!",rom:"a, geuraeyo? gomawoyo",tr:"Ah, ¿sí? ¡Gracias!"}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"이게 뭐예요?",es:"¿qué es esto?"},{ko:"그거는 책이에요",es:"eso es un libro"},{ko:"의자가 아니에요",es:"no es una silla"},{ko:"저거는 가방이에요",es:"aquello es un bolso"}]}]},
{skill:"read",h:"Lee: objetos",
 widgets:[{type:"read",items:[{ko:"책",rom:"chaek",m:"libro"},{ko:"공책",rom:"gongchaek",m:"cuaderno"},{ko:"볼펜",rom:"bolpen",m:"bolígrafo"},{ko:"연필",rom:"yeonpil",m:"lápiz"},{ko:"가방",rom:"gabang",m:"bolso, mochila"},{ko:"시계",rom:"sigye",m:"reloj"},{ko:"휴대폰",rom:"hyudaepon",m:"celular"},{ko:"우산",rom:"usan",m:"paraguas"},{ko:"의자",rom:"uija",m:"silla"},{ko:"책상",rom:"chaeksang",m:"escritorio"},{ko:"달력",rom:"dallyeok",m:"calendario"},{ko:"지갑",rom:"jigap",m:"cartera"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"책가방",size:120}]}
],
words:[{ko:"이거",rom:"igeo",m:"esto"},{ko:"그거",rom:"geugeo",m:"eso"},{ko:"저거",rom:"jeogeo",m:"aquello"},{ko:"뭐",rom:"mwo",m:"qué"},{ko:"책",rom:"chaek",m:"libro"},{ko:"공책",rom:"gongchaek",m:"cuaderno"},{ko:"볼펜",rom:"bolpen",m:"bolígrafo"},{ko:"가방",rom:"gabang",m:"bolso"},{ko:"휴대폰",rom:"hyudaepon",m:"celular"},{ko:"우산",rom:"usan",m:"paraguas"},{ko:"책상",rom:"chaeksang",m:"escritorio"},{ko:"지갑",rom:"jigap",m:"cartera"}],
sets:[
{title:"Gramática",items:[
 {type:"mc",q:"책 + ( ? ) 아니에요",opts:["이","가"],a:0,fixed:true},{type:"mc",q:"시계 + ( ? ) 아니에요",opts:["이","가"],a:1,fixed:true},
 {type:"mc",q:"El objeto está lejos de los dos:",opts:["저거","이거","그거"],a:0},{type:"mc",q:"«¿Qué es esto?»",opts:["이게 뭐예요?","저는 뭐예요?","이름이 뭐예요?","뭐 해요?"],a:0}]},
{title:"Ordena",items:[{type:"order",words:["이게","뭐예요?"]},{type:"order",words:["그거는","가방이에요."]},{type:"order",words:["의자가","아니에요."]}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"휴대폰",opts:["휴대폰","우산","볼펜","공책"],a:0},{type:"listen",say:"지갑이 아니에요",opts:["지갑이에요","지갑이 아니에요","가방이 아니에요","가방이에요"],a:1},{type:"type",say:"가방",a:"가방"},{type:"type",say:"우산",a:"우산"}]},
{title:"Hablar",items:[{type:"speak",ko:"이게 뭐예요?",es:"¿qué es esto?"},{type:"speak",ko:"책이 아니에요",es:"no es un libro"}]}
]};
