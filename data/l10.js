window.LESSONS=window.LESSONS||{};
LESSONS[10]={block:"B",icon:"🙋",ko:"자기소개",
title:"Presentarse: 저는 ~이에요",
subtitle:"Nombre, país y profesión con <k>은/는</k> y <k>이에요/예요</k>.",
goals:["Digo mi nombre, nacionalidad y profesión.","Uso <k>은/는</k> (tema) y <k>이에요/예요</k> (ser).","Pregunto: <k>이름이 뭐예요?</k>"],
sections:[
{skill:"gram",h:"Gramática",
 body:"<b>N + 이에요 / 예요</b> = «es / soy N»<br>• Termina en consonante → <b>이에요</b>: <k>학생이에요</k> (soy estudiante).<br>• Termina en vocal → <b>예요</b>: <k>의사예요</k> (soy médico).<br><br><b>N + 은 / 는</b> = tema («en cuanto a…»)<br>• Consonante → <b>은</b>: <k>선생님은</k> · Vocal → <b>는</b>: <k>저는</k> (yo).<br><br>Pregunta = misma forma con <b>?</b> y entonación subiendo: <k>학생이에요?</k>",
 widgets:[{type:"table",cols:["Ejemplo","Español"],rows:[["저는 마리아예요.","Soy María."],["저는 멕시코 사람이에요.","Soy mexicana."],["저는 학생이에요.","Soy estudiante."],["민수 씨는 한국 사람이에요.","Minsu es coreano."],["이름이 뭐예요?","¿Cómo te llamas?"],["어느 나라 사람이에요?","¿De qué país eres?"]]}]},
{skill:"listen",h:"Diálogo: el primer día",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"민수",ko:"안녕하세요. 저는 김민수예요.",rom:"jeoneun gim minsu-yeyo",tr:"Hola. Soy Kim Minsu."},
  {who:"B",name:"María",ko:"안녕하세요. 저는 마리아예요.",rom:"jeoneun maria-yeyo",tr:"Hola. Soy María."},
  {who:"A",name:"민수",ko:"마리아 씨는 어느 나라 사람이에요?",rom:"maria ssineun eoneu nara saramieyo?",tr:"María, ¿de qué país eres?"},
  {who:"B",name:"María",ko:"멕시코 사람이에요. 민수 씨는 학생이에요?",rom:"meksiko saramieyo. minsu ssineun haksaengieyo?",tr:"Soy mexicana. Minsu, ¿eres estudiante?"},
  {who:"A",name:"민수",ko:"아니요, 저는 회사원이에요.",rom:"aniyo, jeoneun hoesawonieyo",tr:"No, soy oficinista."},
  {who:"B",name:"María",ko:"만나서 반가워요!",rom:"mannaseo bangawoyo",tr:"¡Encantada!"}]}]},
{skill:"speak",h:"Preséntate",
 body:"Repite y luego cambia las palabras por las tuyas.",
 widgets:[{type:"speak",items:[{ko:"저는 학생이에요",es:"soy estudiante"},{ko:"저는 멕시코 사람이에요",es:"soy mexicano/a"},{ko:"저는 스페인 사람이에요",es:"soy español/a"},{ko:"이름이 뭐예요?",es:"¿cómo te llamas?"},{ko:"어느 나라 사람이에요?",es:"¿de qué país eres?"}]}]},
{skill:"read",h:"Lee: profesiones y países",
 widgets:[{type:"read",items:[{ko:"학생",rom:"haksaeng",m:"estudiante"},{ko:"선생님",rom:"seonsaengnim",m:"profesor/a"},{ko:"회사원",rom:"hoesawon",m:"oficinista"},{ko:"의사",rom:"uisa",m:"médico"},{ko:"요리사",rom:"yorisa",m:"cocinero/a"},{ko:"가수",rom:"gasu",m:"cantante"},{ko:"한국 사람",rom:"hanguk saram",m:"coreano/a"},{ko:"멕시코 사람",rom:"meksiko saram",m:"mexicano/a"},{ko:"스페인 사람",rom:"seupein saram",m:"español/a"},{ko:"콜롬비아 사람",rom:"kollombia saram",m:"colombiano/a"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"저는학생",size:110}]}
],
words:[{ko:"저",rom:"jeo",m:"yo (humilde)"},{ko:"이름",rom:"ireum",m:"nombre"},{ko:"사람",rom:"saram",m:"persona"},{ko:"나라",rom:"nara",m:"país"},{ko:"어느",rom:"eoneu",m:"¿qué / cuál?"},{ko:"학생",rom:"haksaeng",m:"estudiante"},{ko:"선생님",rom:"seonsaengnim",m:"profesor/a"},{ko:"회사원",rom:"hoesawon",m:"oficinista"},{ko:"의사",rom:"uisa",m:"médico"},{ko:"요리사",rom:"yorisa",m:"cocinero/a"},{ko:"가수",rom:"gasu",m:"cantante"},{ko:"씨",rom:"ssi",m:"Sr./Sra. (tras el nombre)"}],
sets:[
{title:"Gramática",items:[
 {type:"mc",q:"학생 + ( ? )",opts:["이에요","예요"],a:0,fixed:true},{type:"mc",q:"의사 + ( ? )",opts:["이에요","예요"],a:1,fixed:true},
 {type:"mc",q:"저 + ( ? ) 마리아예요.",opts:["는","은"],a:0,fixed:true},{type:"mc",q:"선생님 + ( ? ) 한국 사람이에요.",opts:["는","은"],a:1,fixed:true},
 {type:"mc",q:"«¿De qué país eres?»",opts:["어느 나라 사람이에요?","이름이 뭐예요?","학생이에요?","만나서 반가워요"],a:0}]},
{title:"Ordena la frase",items:[
 {type:"order",words:["저는","멕시코","사람이에요."]},{type:"order",words:["이름이","뭐예요?"]},{type:"order",words:["민수","씨는","회사원이에요."]}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"저는 요리사예요",opts:["저는 요리사예요","저는 의사예요","저는 가수예요","저는 학생이에요"],a:0},{type:"type",say:"학생",a:"학생"},{type:"type",say:"이름",a:"이름"}]},
{title:"Hablar",items:[{type:"speak",ko:"저는 학생이에요",es:"soy estudiante"},{type:"speak",ko:"만나서 반가워요",es:"encantado/a"}]}
]};
