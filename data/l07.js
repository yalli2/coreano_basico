window.LESSONS=window.LESSONS||{};
LESSONS[7]={block:"A",icon:"🎶",ko:"발음 규칙",
title:"Reglas de pronunciación",
video:{src:"video/leccion7.mp4"},
subtitle:"Se escribe <k>한국어</k> pero se dice [한구거]. 6 reglas que explican por qué.",
goals:["Aplico el encadenamiento: <k>음악</k> [으막].","Reconozco la nasalización: <k>감사합니다</k> [감사함니다].","Sé que la escritura no cambia, solo la pronunciación."],
sections:[
{skill:"pron",h:"Las 6 reglas esenciales",
 body:"Toca cada ejemplo: lo escrito → [lo que se dice].",
 widgets:[{type:"rules",items:[
  {name:"1. Encadenamiento (연음)",body:"Final + <k>ㅇ</k> → la final salta.",ex:[["한국어","한구거","coreano"],["음악","으막","música"],["읽어요","일거요","leo"]]},
  {name:"2. ㅎ muda",body:"<k>ㅎ</k> + vocal → desaparece.",ex:[["좋아요","조아요","bien / me gusta"],["괜찮아요","괜차나요","está bien"]]},
  {name:"3. Aspiración (격음화)",body:"ㄱ ㄷ ㅂ ㅈ + ㅎ → ㅋ ㅌ ㅍ ㅊ",ex:[["축하","추카","felicidades"],["좋다","조타","ser bueno"]]},
  {name:"4. Tensión (경음화)",body:"Tras [k t p], ㄱ ㄷ ㅂ ㅅ ㅈ → tensas.",ex:[["학교","학꾜","escuela"],["식당","식땅","restaurante"]]},
  {name:"5. Nasalización (비음화)",body:"[k t p] + ㄴ/ㅁ → [ng n m].",ex:[["감사합니다","감사함니다","gracias"],["한국말","한궁말","lengua coreana"],["박물관","방물관","museo"]]},
  {name:"6. Lateral y palatal",body:"ㄴ+ㄹ → [ㄹㄹ] · ㄷ/ㅌ+이 → [지/치]",ex:[["설날","설랄","Año Nuevo lunar"],["같이","가치","juntos"]]}]}]},
{skill:"listen",h:"Escucha frases reales",
 widgets:[{type:"read",items:[{ko:"감사합니다",rom:"[감사함니다]",m:"gracias"},{ko:"괜찮아요",rom:"[괜차나요]",m:"está bien"},{ko:"축하해요",rom:"[추카해요]",m:"¡felicidades!"},{ko:"같이 가요",rom:"[가치 가요]",m:"vamos juntos"},{ko:"한국어 공부",rom:"[한구거 공부]",m:"estudio de coreano"},{ko:"학교에 가요",rom:"[학꾜에 가요]",m:"voy a la escuela"}]}]},
{skill:"speak",h:"Pronuncia como un nativo",
 widgets:[{type:"speak",items:[{ko:"감사합니다",es:"gracias"},{ko:"괜찮아요",es:"está bien"},{ko:"축하해요",es:"felicidades"},{ko:"한국어",es:"coreano"},{ko:"같이 가요",es:"vamos juntos"}]}]},
{skill:"write",h:"Escribe (se escribe igual que siempre)",
 widgets:[{type:"writers",chars:"음악같이",size:120}]}
],
words:[{ko:"음악",rom:"eumak",m:"música"},{ko:"좋아요",rom:"joayo",m:"bien; me gusta"},{ko:"괜찮아요",rom:"gwaenchanayo",m:"está bien"},{ko:"축하해요",rom:"chukahaeyo",m:"¡felicidades!"},{ko:"학교",rom:"hakgyo",m:"escuela"},{ko:"식당",rom:"sikdang",m:"restaurante"},{ko:"감사합니다",rom:"gamsahamnida",m:"gracias"},{ko:"박물관",rom:"bangmulgwan",m:"museo"},{ko:"같이",rom:"gachi",m:"juntos"},{ko:"설날",rom:"seollal",m:"Año Nuevo lunar"}],
sets:[
{title:"¿Cómo se pronuncia?",items:[
 {type:"mc",q:"<k>음악</k>",opts:["[으막]","[음악]","[음낙]","[으마그]"],a:0},{type:"mc",q:"<k>좋아요</k>",opts:["[조아요]","[조하요]","[조타요]","[졷아요]"],a:0},
 {type:"mc",q:"<k>학교</k>",opts:["[학꾜]","[하교]","[하꾜]","[학교]"],a:0},{type:"mc",q:"<k>감사합니다</k>",opts:["[감사함니다]","[감사합니다]","[감사한니다]","[감사하니다]"],a:0},
 {type:"mc",q:"<k>같이</k>",opts:["[가치]","[가티]","[가지]","[같이]"],a:0},{type:"mc",q:"<k>설날</k>",opts:["[설랄]","[선날]","[설날]","[서랄]"],a:0}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"괜찮아요",opts:["괜찮아요","감사합니다","축하해요","좋아요"],a:0},{type:"type",say:"음악",a:"음악"},{type:"type",say:"좋아요",a:"좋아요"}]},
{title:"Hablar",items:[{type:"speak",ko:"감사합니다",es:"gracias"},{type:"speak",ko:"괜찮아요",es:"está bien"}]}
]};
