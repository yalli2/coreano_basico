window.LESSONS=window.LESSONS||{};
LESSONS[9]={block:"B",icon:"🙇",ko:"인사",
title:"Saludos y expresiones básicas",
subtitle:"Hola, gracias, perdón, adiós… y las frases de clase.",
goals:["Saludo y me despido correctamente.","Doy las gracias y pido perdón.","Uso frases útiles en clase."],
sections:[
{skill:"gram",h:"Dos estilos de cortesía",
 body:"• <b>-요</b> (해요체): educado y cercano. El más usado: <k>고마워요</k>.<br>• <b>-ㅂ니다/습니다</b> (합니다체): formal (trabajo, noticias): <k>감사합니다</k>.<br>• Al saludar se hace una pequeña <b>reverencia</b> 🙇.",
 widgets:[{type:"table",cols:["Coreano","Español","Cuándo"],rows:[
  ["안녕하세요","Hola / Buenos días","a cualquier hora"],["안녕히 가세요","Adiós (al que se va)","tú te quedas"],["안녕히 계세요","Adiós (al que se queda)","tú te vas"],
  ["감사합니다","Gracias (formal)","—"],["고마워요","Gracias","—"],["죄송합니다","Lo siento (formal)","—"],["미안해요","Perdón","—"],
  ["괜찮아요","No pasa nada / Está bien","—"],["네 / 아니요","Sí / No","—"],["만나서 반가워요","Encantado/a","al conocer a alguien"]]}]},
{skill:"listen",h:"Diálogo: en la puerta",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"민수",ko:"안녕하세요!",rom:"annyeonghaseyo",tr:"¡Hola!"},{who:"B",name:"Ana",ko:"안녕하세요! 만나서 반가워요.",rom:"annyeonghaseyo! mannaseo bangawoyo",tr:"¡Hola! Encantada."},
  {who:"A",name:"민수",ko:"저도 반가워요.",rom:"jeodo bangawoyo",tr:"Igualmente."},{who:"B",name:"Ana",ko:"죄송해요, 늦었어요.",rom:"joesonghaeyo, neujeosseoyo",tr:"Perdón, llegué tarde."},
  {who:"A",name:"민수",ko:"괜찮아요.",rom:"gwaenchanayo",tr:"No pasa nada."},{who:"B",name:"Ana",ko:"감사합니다. 안녕히 계세요!",rom:"gamsahamnida. annyeonghi gyeseyo",tr:"Gracias. ¡Adiós!"},
  {who:"A",name:"민수",ko:"안녕히 가세요!",rom:"annyeonghi gaseyo",tr:"¡Adiós!"}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"안녕하세요",es:"hola"},{ko:"감사합니다",es:"gracias (formal)"},{ko:"죄송합니다",es:"lo siento (formal)"},{ko:"괜찮아요",es:"no pasa nada"},{ko:"만나서 반가워요",es:"encantado/a"},{ko:"안녕히 계세요",es:"adiós (me voy)"}]}]},
{skill:"read",h:"Frases de clase",
 widgets:[{type:"read",items:[{ko:"잘 들으세요",rom:"jal deureuseyo",m:"escuchen bien"},{ko:"따라 하세요",rom:"ttara haseyo",m:"repitan"},{ko:"읽으세요",rom:"ilgeuseyo",m:"lean"},{ko:"쓰세요",rom:"sseuseyo",m:"escriban"},{ko:"알겠어요",rom:"algesseoyo",m:"entendido"},{ko:"모르겠어요",rom:"moreugesseoyo",m:"no entiendo / no sé"},{ko:"다시 한번 말해 주세요",rom:"dasi hanbeon malhae juseyo",m:"¿puede repetirlo?"},{ko:"천천히 말해 주세요",rom:"cheoncheonhi malhae juseyo",m:"más despacio, por favor"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"안녕하세요",size:110}]}
],
words:[{ko:"안녕하세요",rom:"annyeonghaseyo",m:"hola"},{ko:"안녕히 가세요",rom:"annyeonghi gaseyo",m:"adiós (al que se va)"},{ko:"안녕히 계세요",rom:"annyeonghi gyeseyo",m:"adiós (al que se queda)"},{ko:"감사합니다",rom:"gamsahamnida",m:"gracias (formal)"},{ko:"고마워요",rom:"gomawoyo",m:"gracias"},{ko:"죄송합니다",rom:"joesonghamnida",m:"lo siento (formal)"},{ko:"미안해요",rom:"mianhaeyo",m:"perdón"},{ko:"괜찮아요",rom:"gwaenchanayo",m:"está bien"},{ko:"네",rom:"ne",m:"sí"},{ko:"아니요",rom:"aniyo",m:"no"},{ko:"만나서 반가워요",rom:"mannaseo bangawoyo",m:"encantado/a"},{ko:"모르겠어요",rom:"moreugesseoyo",m:"no sé / no entiendo"}],
sets:[
{title:"Situaciones",items:[
 {type:"mc",q:"Te vas de la casa de un amigo. Dices…",opts:["안녕히 계세요","안녕히 가세요","만나서 반가워요","괜찮아요"],a:0},
 {type:"mc",q:"Alguien te pisa y dice <k>죄송합니다</k>. Respondes…",opts:["괜찮아요","감사합니다","안녕하세요","네"],a:0},
 {type:"mc",q:"Conoces a alguien por primera vez:",opts:["만나서 반가워요","안녕히 가세요","미안해요","모르겠어요"],a:0},
 {type:"mc",q:"No entendiste al profesor:",opts:["다시 한번 말해 주세요","감사합니다","따라 하세요","안녕하세요"],a:0}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"감사합니다",opts:["감사합니다","죄송합니다","안녕하세요","괜찮아요"],a:0},{type:"listen",say:"안녕히 가세요",opts:["안녕히 계세요","안녕히 가세요","안녕하세요","만나서 반가워요"],a:1},{type:"type",say:"네",a:"네"},{type:"type",say:"아니요",a:"아니요"}]},
{title:"Hablar",items:[{type:"speak",ko:"안녕하세요",es:"hola"},{type:"speak",ko:"감사합니다",es:"gracias"},{type:"speak",ko:"만나서 반가워요",es:"encantado/a"}]}
]};
