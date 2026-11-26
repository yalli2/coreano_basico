window.LESSONS=window.LESSONS||{};
LESSONS[13]={block:"B",icon:"⏰",ko:"몇 시예요?",
title:"Números nativos, contadores y la hora",
video:{src:"video/leccion13.mp4"},
subtitle:"<k>하나 둘 셋</k>… para contar cosas, personas, edad y horas.",
goals:["Cuento de 1 a 10 con números nativos.","Uso contadores: <k>개</k>, <k>명</k>, <k>잔</k>, <k>살</k>.","Digo la hora: <k>세 시 반</k>."],
sections:[
{skill:"gram",h:"Números nativos + contador",
 body:"Se usan para <b>contar cosas y personas, la edad y las horas</b>. Ante un contador, 1-4 y 20 se acortan: <k>한</k>, <k>두</k>, <k>세</k>, <k>네</k>, <k>스무</k>.",
 widgets:[{type:"table",cols:["1","2","3","4","5","6","7","8","9","10"],rows:[["하나 (한)","둘 (두)","셋 (세)","넷 (네)","다섯","여섯","일곱","여덟","아홉","열"]]},
  {type:"table",cols:["Contador","Para","Ejemplo"],rows:[["개","cosas","사과 두 개 (2 manzanas)"],["명","personas","학생 세 명 (3 estudiantes)"],["잔","vasos, tazas","커피 한 잔 (1 café)"],["병","botellas","물 네 병 (4 botellas de agua)"],["살","años de edad","스무 살 (20 años)"]]},
  {type:"tip",icon:"⏰",body:"<b>La hora:</b> hora con número <b>nativo</b> + <k>시</k>; minutos con <b>sino-coreano</b> + <k>분</k>.<br><k>세 시 이십 분</k> = 3:20 · <k>열두 시 반</k> = 12:30 · <k>몇 시예요?</k> = ¿Qué hora es?"}]},
{skill:"listen",h:"Diálogo: en la cafetería",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"점원",ko:"어서 오세요. 몇 분이세요?",rom:"eoseo oseyo. myeot buniseyo?",tr:"Bienvenidos. ¿Cuántas personas son?"},{who:"B",name:"Luis",ko:"두 명이에요.",rom:"du myeongieyo",tr:"Somos dos."},
  {who:"A",name:"점원",ko:"뭐 드릴까요?",rom:"mwo deurilkkayo?",tr:"¿Qué les sirvo?"},{who:"B",name:"Luis",ko:"커피 두 잔하고 케이크 한 개 주세요.",rom:"keopi du janhago keikeu han gae juseyo",tr:"Dos cafés y un pastel, por favor."},
  {who:"A",name:"Luis",ko:"지금 몇 시예요?",rom:"jigeum myeot siyeyo?",tr:"¿Qué hora es ahora?"},{who:"B",name:"Ana",ko:"세 시 반이에요.",rom:"se si banieyo",tr:"Son las tres y media."}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"하나 둘 셋 넷 다섯",es:"1 2 3 4 5"},{ko:"커피 한 잔 주세요",es:"un café, por favor"},{ko:"두 명이에요",es:"somos dos"},{ko:"지금 몇 시예요?",es:"¿qué hora es?"},{ko:"세 시 반이에요",es:"son las 3:30"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"read",items:[{ko:"한 시",rom:"han si",m:"la una"},{ko:"두 시 십 분",rom:"du si sip bun",m:"2:10"},{ko:"다섯 시 반",rom:"daseot si ban",m:"5:30"},{ko:"열두 시",rom:"yeoldu si",m:"12:00"},{ko:"사과 세 개",rom:"sagwa se gae",m:"3 manzanas"},{ko:"친구 네 명",rom:"chingu ne myeong",m:"4 amigos"},{ko:"물 한 병",rom:"mul han byeong",m:"1 botella de agua"},{ko:"스무 살",rom:"seumu sal",m:"20 años"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"하나둘셋",size:110}]}
],
words:[{ko:"하나",rom:"hana",m:"uno"},{ko:"둘",rom:"dul",m:"dos"},{ko:"셋",rom:"set",m:"tres"},{ko:"넷",rom:"net",m:"cuatro"},{ko:"다섯",rom:"daseot",m:"cinco"},{ko:"여섯",rom:"yeoseot",m:"seis"},{ko:"일곱",rom:"ilgop",m:"siete"},{ko:"여덟",rom:"yeodeol",m:"ocho"},{ko:"아홉",rom:"ahop",m:"nueve"},{ko:"열",rom:"yeol",m:"diez"},{ko:"개",rom:"gae",m:"(contador de cosas)"},{ko:"명",rom:"myeong",m:"(contador de personas)"},{ko:"잔",rom:"jan",m:"vaso, taza"},{ko:"시",rom:"si",m:"hora (en punto)"},{ko:"분",rom:"bun",m:"minuto"},{ko:"반",rom:"ban",m:"media"}],
sets:[
{title:"Números y contadores",items:[
 {type:"mc",q:"«3 manzanas»",opts:["사과 세 개","사과 셋 개","사과 삼 개","사과 세 명"],a:0},{type:"mc",q:"«2 personas»",opts:["두 명","둘 명","이 명","두 개"],a:0},
 {type:"mc",q:"«4:20»",opts:["네 시 이십 분","사 시 스무 분","네 시 스무 분","사 시 이십 분"],a:0},{type:"mc",q:"<k>일곱</k> =",opts:["7","1","9","8"],a:0}]},
{title:"Escuchar",items:[{type:"listen",say:"다섯",opts:["다섯","여섯","여덟","아홉"],a:0},{type:"listen",say:"열 시 반",opts:["10:30","10:00","1:30","11:30"],a:0},{type:"listen",say:"커피 두 잔",opts:["1 café","2 cafés","3 cafés","2 tés"],a:1}]},
{title:"Ordena y dictado",items:[{type:"order",words:["커피","한","잔","주세요."]},{type:"order",words:["지금","몇","시예요?"]},{type:"type",say:"하나",a:"하나"},{type:"type",say:"열",a:"열"}]},
{title:"Hablar",items:[{type:"speak",ko:"지금 몇 시예요?",es:"¿qué hora es?"},{type:"speak",ko:"두 명이에요",es:"somos dos"}]}
]};
