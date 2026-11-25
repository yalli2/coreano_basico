window.LESSONS=window.LESSONS||{};
LESSONS[14]={block:"B",icon:"☀️",ko:"뭐 해요?",
title:"Mi día: verbos en presente -아요/어요",
subtitle:"Conjuga verbos y usa <k>을/를</k> (objeto) y <k>에 가요</k> (ir a).",
goals:["Conjugo verbos en presente cortés.","Marco el objeto con <k>을/를</k>.","Digo adónde voy: <k>N에 가요</k>."],
sections:[
{skill:"gram",h:"Gramática",
 body:"El verbo va <b>al final</b>: Sujeto + Objeto + <b>Verbo</b>. Quita <k>다</k> y mira la última vocal:<br>• <b>ㅏ / ㅗ</b> → <b>-아요</b>: <k>가다</k> → <k>가요</k>, <k>보다</k> → <k>봐요</k><br>• <b>otras</b> → <b>-어요</b>: <k>먹다</k> → <k>먹어요</k>, <k>마시다</k> → <k>마셔요</k><br>• <b>하다</b> → <b>해요</b>: <k>공부하다</k> → <k>공부해요</k><br><br><b>을 / 를</b> (objeto): consonante → <b>을</b> <k>밥을</k> · vocal → <b>를</b> <k>커피를</k><br><b>N에 가요</b> = voy a N: <k>학교에 가요</k>",
 widgets:[{type:"table",cols:["Infinitivo","Presente","Español"],rows:[["가다","가요","ir"],["오다","와요","venir"],["보다","봐요","ver"],["먹다","먹어요","comer"],["마시다","마셔요","beber"],["읽다","읽어요","leer"],["자다","자요","dormir"],["만나다","만나요","quedar, ver a alguien"],["공부하다","공부해요","estudiar"],["일하다","일해요","trabajar"],["좋아하다","좋아해요","gustar"]]}]},
{skill:"listen",h:"Diálogo: ¿qué haces?",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"지민",ko:"카를로스 씨, 지금 뭐 해요?",rom:"jigeum mwo haeyo?",tr:"Carlos, ¿qué haces ahora?"},{who:"B",name:"Carlos",ko:"한국어를 공부해요.",rom:"hangugeoreul gongbuhaeyo",tr:"Estudio coreano."},
  {who:"A",name:"지민",ko:"저는 커피를 마셔요. 오후에 뭐 해요?",rom:"jeoneun keopireul masyeoyo. ohue mwo haeyo?",tr:"Yo tomo café. ¿Qué haces por la tarde?"},{who:"B",name:"Carlos",ko:"친구를 만나요. 같이 영화를 봐요.",rom:"chingureul mannayo. gachi yeonghwareul bwayo",tr:"Veo a un amigo. Vemos una película juntos."},
  {who:"A",name:"지민",ko:"저는 도서관에 가요. 책을 읽어요.",rom:"jeoneun doseogwane gayo. chaegeul ilgeoyo",tr:"Yo voy a la biblioteca. Leo un libro."}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"뭐 해요?",es:"¿qué haces?"},{ko:"밥을 먹어요",es:"como (arroz/comida)"},{ko:"커피를 마셔요",es:"bebo café"},{ko:"한국어를 공부해요",es:"estudio coreano"},{ko:"학교에 가요",es:"voy a la escuela"}]}]},
{skill:"read",h:"Lee: el día de Ana",
 body:"<span class='ko' style='font-size:20px;line-height:2'>아나 씨는 아침에 빵을 먹어요. 그리고 학교에 가요. 학교에서 한국어를 공부해요. 저녁에 친구를 만나요. 밤에 책을 읽어요.</span><br><small>Ana come pan por la mañana. Luego va a la escuela. En la escuela estudia coreano. Por la tarde-noche ve a una amiga. Por la noche lee un libro.</small>",
 widgets:[{type:"read",items:[{ko:"아침",rom:"achim",m:"mañana; desayuno"},{ko:"점심",rom:"jeomsim",m:"mediodía; almuerzo"},{ko:"저녁",rom:"jeonyeok",m:"tarde-noche; cena"},{ko:"영화",rom:"yeonghwa",m:"película"},{ko:"친구",rom:"chingu",m:"amigo/a"},{ko:"도서관",rom:"doseogwan",m:"biblioteca"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"먹어요",size:120}]}
],
words:[{ko:"가다",rom:"gada",m:"ir"},{ko:"오다",rom:"oda",m:"venir"},{ko:"보다",rom:"boda",m:"ver"},{ko:"먹다",rom:"meokda",m:"comer"},{ko:"마시다",rom:"masida",m:"beber"},{ko:"읽다",rom:"ikda",m:"leer"},{ko:"자다",rom:"jada",m:"dormir"},{ko:"만나다",rom:"mannada",m:"quedar con"},{ko:"공부하다",rom:"gongbuhada",m:"estudiar"},{ko:"일하다",rom:"ilhada",m:"trabajar"},{ko:"좋아하다",rom:"joahada",m:"gustar"},{ko:"친구",rom:"chingu",m:"amigo/a"},{ko:"영화",rom:"yeonghwa",m:"película"},{ko:"아침",rom:"achim",m:"mañana; desayuno"}],
sets:[
{title:"Conjuga",items:[
 {type:"mc",q:"먹다 →",opts:["먹어요","먹아요","먹해요","먹요"],a:0},{type:"mc",q:"가다 →",opts:["가요","가어요","가아요","가해요"],a:0},
 {type:"mc",q:"공부하다 →",opts:["공부해요","공부하요","공부하어요","공부아요"],a:0},{type:"mc",q:"커피( ? ) 마셔요",opts:["를","을"],a:0,fixed:true},{type:"mc",q:"밥( ? ) 먹어요",opts:["를","을"],a:1,fixed:true}]},
{title:"Ordena",items:[{type:"order",words:["저는","한국어를","공부해요."]},{type:"order",words:["친구를","만나요."]},{type:"order",words:["학교에","가요."]}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"영화를 봐요",opts:["영화를 봐요","책을 읽어요","밥을 먹어요","커피를 마셔요"],a:0},{type:"type",say:"가요",a:"가요"},{type:"type",say:"먹어요",a:"먹어요"}]},
{title:"Hablar",items:[{type:"speak",ko:"한국어를 공부해요",es:"estudio coreano"},{type:"speak",ko:"뭐 해요?",es:"¿qué haces?"}]}
]};
