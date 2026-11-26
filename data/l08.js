window.LESSONS=window.LESSONS||{};
LESSONS[8]={block:"A",icon:"🪧",ko:"읽고 쓰기",
title:"¡A leer y escribir!",
video:{src:"video/leccion8.mp4"},
subtitle:"Palabras extranjeras, carteles de la calle, países y tu nombre en hangul.",
goals:["Leo préstamos como <k>커피</k> o <k>컴퓨터</k>.","Entiendo carteles: <k>입구</k>, <k>출구</k>, <k>화장실</k>.","Escribo mi nombre y mi país en coreano."],
sections:[
{skill:"gram",h:"Claves para leer palabras extranjeras",
 body:"• No hay «f»: se usa <k>ㅍ</k> → <k>커피</k> (café).<br>• No hay «v»: se usa <k>ㅂ</k> → <k>비자</k> (visa).<br>• Consonante sin vocal → se añade <k>ㅡ</k>: <k>버스</k> «bus», <k>스페인</k> «Spain».<br>• «r» y «l» → <k>ㄹ</k>.",
 widgets:[{type:"tip",icon:"🖐",body:"<b>Letra a mano:</b> los coreanos escriben <k>ㅈ</k> y <k>ㅊ</k> a veces con forma de «ス», y el trazo de arriba de <k>ㅎ</k> y <k>ㅊ</k> puede ser horizontal o inclinado. ¡Todas las formas son correctas!"}]},
{skill:"read",h:"Préstamos (외래어)",
 widgets:[{type:"read",items:[{ko:"커피",rom:"keopi",m:"café"},{ko:"버스",rom:"beoseu",m:"autobús"},{ko:"택시",rom:"taeksi",m:"taxi"},{ko:"호텔",rom:"hotel",m:"hotel"},{ko:"컴퓨터",rom:"keompyuteo",m:"computadora"},{ko:"인터넷",rom:"inteonet",m:"internet"},{ko:"아이스크림",rom:"aiseukeurim",m:"helado"},{ko:"초콜릿",rom:"chokollit",m:"chocolate"},{ko:"카메라",rom:"kamera",m:"cámara"},{ko:"텔레비전",rom:"tellebijeon",m:"televisión"},{ko:"축구",rom:"chukgu",m:"fútbol"},{ko:"케이팝",rom:"keipap",m:"K-pop"}]}]},
{skill:"read",h:"Países y ciudades",
 widgets:[{type:"read",items:[{ko:"멕시코",rom:"meksiko",m:"México"},{ko:"스페인",rom:"seupein",m:"España"},{ko:"아르헨티나",rom:"areuhentina",m:"Argentina"},{ko:"콜롬비아",rom:"kollombia",m:"Colombia"},{ko:"칠레",rom:"chille",m:"Chile"},{ko:"페루",rom:"peru",m:"Perú"},{ko:"서울",rom:"seoul",m:"Seúl"},{ko:"부산",rom:"busan",m:"Busan"},{ko:"마드리드",rom:"madeurideu",m:"Madrid"},{ko:"멕시코시티",rom:"meksikositi",m:"Ciudad de México"}]}]},
{skill:"read",h:"Carteles de la calle",
 widgets:[{type:"read",items:[{ko:"입구",rom:"ipgu",m:"entrada"},{ko:"출구",rom:"chulgu",m:"salida"},{ko:"화장실",rom:"hwajangsil",m:"baño"},{ko:"남자",rom:"namja",m:"hombre"},{ko:"여자",rom:"yeoja",m:"mujer"},{ko:"지하철",rom:"jihacheol",m:"metro"},{ko:"당기세요",rom:"danggiseyo",m:"jale / tire"},{ko:"미세요",rom:"miseyo",m:"empuje"},{ko:"편의점",rom:"pyeonuijeom",m:"tienda 24 h"},{ko:"영업 중",rom:"yeongeop jung",m:"abierto"}]}]},
{skill:"listen",h:"Escucha y encuentra",
 body:"Pulsa 🎲 y elige lo que oíste.",
 widgets:[{type:"contrast",sets:[[{ko:"입구",lab:"entrada"},{ko:"출구",lab:"salida"}],[{ko:"버스",lab:"bus"},{ko:"택시",lab:"taxi"},{ko:"지하철",lab:"metro"}],[{ko:"멕시코",lab:"México"},{ko:"스페인",lab:"España"},{ko:"칠레",lab:"Chile"}]]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"커피 주세요",es:"un café, por favor"},{ko:"화장실",es:"baño"},{ko:"멕시코",es:"México"},{ko:"스페인",es:"España"},{ko:"아이스크림",es:"helado"}]}]},
{skill:"write",h:"Escribe tu nombre",
 widgets:[{type:"namebox"}]}
],
words:[{ko:"커피",rom:"keopi",m:"café"},{ko:"버스",rom:"beoseu",m:"autobús"},{ko:"택시",rom:"taeksi",m:"taxi"},{ko:"호텔",rom:"hotel",m:"hotel"},{ko:"컴퓨터",rom:"keompyuteo",m:"computadora"},{ko:"화장실",rom:"hwajangsil",m:"baño"},{ko:"입구",rom:"ipgu",m:"entrada"},{ko:"출구",rom:"chulgu",m:"salida"},{ko:"지하철",rom:"jihacheol",m:"metro"},{ko:"멕시코",rom:"meksiko",m:"México"},{ko:"스페인",rom:"seupein",m:"España"},{ko:"서울",rom:"seoul",m:"Seúl"}],
sets:[
{title:"Leer",items:[
 {type:"mc",q:"<k>컴퓨터</k> =",opts:["computadora","cámara","camiseta","cuaderno"],a:0},{type:"mc",q:"<k>출구</k> =",opts:["salida","entrada","baño","metro"],a:0},
 {type:"mc",q:"<k>화장실</k> =",opts:["baño","hotel","tienda","farmacia"],a:0},{type:"mc",q:"¿Cuál es «Colombia»?",opts:["콜롬비아","칠레","페루","멕시코"],a:0},
 {type:"mc",q:"¿Cómo se escribe «café» en coreano?",opts:["커피","카페","코피","커페"],a:0}]},
{title:"Escuchar y dictado",items:[{type:"listen",say:"지하철",opts:["지하철","화장실","편의점","택시"],a:0},{type:"type",say:"버스",a:"버스"},{type:"type",say:"호텔",a:"호텔"},{type:"type",say:"멕시코",a:"멕시코"}]},
{title:"Hablar",items:[{type:"speak",ko:"커피 주세요",es:"un café, por favor"},{type:"speak",ko:"화장실",es:"baño"}]}
]};
