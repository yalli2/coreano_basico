window.LESSONS=window.LESSONS||{};
LESSONS[12]={block:"B",icon:"💰",ko:"얼마예요?",
title:"Números sino-coreanos y compras",
video:{src:"video/leccion12.mp4"},
subtitle:"<k>일 이 삼</k>… precios en <k>원</k>, teléfonos y <k>주세요</k>.",
goals:["Cuento con números sino-coreanos.","Pregunto precios: <k>얼마예요?</k>","Pido cosas: <k>N 주세요</k>."],
sections:[
{skill:"gram",h:"Números sino-coreanos",
 body:"Se usan para <b>precios, teléfonos, fechas, minutos y pisos</b>. Se construyen como un juego: <k>십일</k> = 10+1 = 11, <k>이십</k> = 2×10 = 20.",
 widgets:[{type:"table",cols:["1","2","3","4","5","6","7","8","9","10"],rows:[["일","이","삼","사","오","육","칠","팔","구","십"]]},
  {type:"table",cols:["100","1.000","10.000","0 (teléfono)"],rows:[["백","천","만","공"]]},
  {type:"tip",icon:"💡",body:"• 10.000 = <k>만</k> (no «diez mil»): 50.000 = <k>오만</k>.<br>• 100 y 1.000 sin «uno»: <k>백</k>, <k>천</k> (no 일백).<br>• <b>N + 주세요</b> = «deme N, por favor»: <k>이거 주세요</k>."}]},
{skill:"listen",h:"Diálogo: en la tienda",
 widgets:[{type:"dialog",lines:[
  {who:"A",name:"Sofía",ko:"이거 얼마예요?",rom:"igeo eolmayeyo?",tr:"¿Cuánto cuesta esto?"},{who:"B",name:"점원",ko:"삼천 원이에요.",rom:"samcheon wonieyo",tr:"Son 3.000 wones."},
  {who:"A",name:"Sofía",ko:"그럼 저 우산은 얼마예요?",rom:"geureom jeo usaneun eolmayeyo?",tr:"Entonces, ¿cuánto cuesta aquel paraguas?"},{who:"B",name:"점원",ko:"만 오천 원이에요.",rom:"man ocheon wonieyo",tr:"Son 15.000 wones."},
  {who:"A",name:"Sofía",ko:"이거 주세요.",rom:"igeo juseyo",tr:"Deme esto, por favor."},{who:"B",name:"점원",ko:"네, 감사합니다.",rom:"ne, gamsahamnida",tr:"Sí, gracias."}]}]},
{skill:"speak",h:"Habla",
 widgets:[{type:"speak",items:[{ko:"일 이 삼 사 오",es:"1 2 3 4 5"},{ko:"이거 얼마예요?",es:"¿cuánto cuesta esto?"},{ko:"오천 원이에요",es:"son 5.000 wones"},{ko:"커피 주세요",es:"un café, por favor"},{ko:"공일공",es:"010 (teléfono)"}]}]},
{skill:"read",h:"Lee los precios",
 widgets:[{type:"read",items:[{ko:"천 원",rom:"cheon won",m:"1.000 ₩"},{ko:"이천오백 원",rom:"icheon-obaek won",m:"2.500 ₩"},{ko:"만 원",rom:"man won",m:"10.000 ₩"},{ko:"삼만 원",rom:"samman won",m:"30.000 ₩"},{ko:"십오",rom:"sibo",m:"15"},{ko:"이십삼",rom:"isipsam",m:"23"},{ko:"구십구",rom:"gusipgu",m:"99"},{ko:"백",rom:"baek",m:"100"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"일이삼십",size:100}]}
],
words:[{ko:"일",rom:"il",m:"uno"},{ko:"이",rom:"i",m:"dos"},{ko:"삼",rom:"sam",m:"tres"},{ko:"사",rom:"sa",m:"cuatro"},{ko:"오",rom:"o",m:"cinco"},{ko:"육",rom:"yuk",m:"seis"},{ko:"칠",rom:"chil",m:"siete"},{ko:"팔",rom:"pal",m:"ocho"},{ko:"구",rom:"gu",m:"nueve"},{ko:"십",rom:"sip",m:"diez"},{ko:"백",rom:"baek",m:"cien"},{ko:"천",rom:"cheon",m:"mil"},{ko:"만",rom:"man",m:"diez mil"},{ko:"원",rom:"won",m:"won (moneda)"},{ko:"얼마예요?",rom:"eolmayeyo",m:"¿cuánto cuesta?"},{ko:"주세요",rom:"juseyo",m:"deme, por favor"}],
sets:[
{title:"Números",items:[
 {type:"mc",q:"<k>이십오</k> =",opts:["25","52","205","15"],a:0},{type:"mc",q:"«14» =",opts:["십사","사십","일사","십일사"],a:0},
 {type:"mc",q:"«10.000 wones» =",opts:["만 원","십천 원","일만 원","천 원"],a:0},{type:"mc",q:"<k>삼천오백 원</k> =",opts:["3.500 ₩","35.000 ₩","350 ₩","3.050 ₩"],a:0}]},
{title:"Escuchar",items:[{type:"listen",say:"칠",opts:["일","칠","팔","육"],a:1},{type:"listen",say:"사만 원",opts:["4.000 ₩","40.000 ₩","400 ₩","14.000 ₩"],a:1},{type:"listen",say:"이거 주세요",opts:["이거 주세요","이거 얼마예요?","커피 주세요","감사합니다"],a:0}]},
{title:"Ordena y dictado",items:[{type:"order",words:["이거","얼마예요?"]},{type:"order",words:["커피","주세요."]},{type:"type",say:"삼",a:"삼"},{type:"type",say:"만 원",a:["만 원","만원"]}]},
{title:"Hablar",items:[{type:"speak",ko:"이거 얼마예요?",es:"¿cuánto cuesta esto?"},{type:"speak",ko:"이거 주세요",es:"deme esto"}]}
]};
