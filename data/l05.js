window.LESSONS=window.LESSONS||{};
LESSONS[5]={block:"A",icon:"🔗",ko:"이중 모음",
title:"Las vocales compuestas",
video:{src:"video/leccion5.mp4"},
subtitle:"<k>ㅐ ㅔ ㅘ ㅝ ㅚ ㅟ ㅢ</k>… piezas de LEGO con vocales que ya conoces.",
goals:["Leo las 11 vocales compuestas.","Sé que <k>ㅐ</k>=<k>ㅔ</k> («e») y <k>ㅙ</k>=<k>ㅚ</k>=<k>ㅞ</k> («we»).","Pronuncio bien <k>ㅢ</k>."],
sections:[
{skill:"gram",h:"Cómo se forman",
 widgets:[{type:"table",cols:["Suma","Letra","Suena","Ejemplo"],rows:[
  ["ㅏ+ㅣ","ㅐ","e","개 perro"],["ㅓ+ㅣ","ㅔ","e","게 cangrejo"],["ㅑ+ㅣ","ㅒ","ye","얘기 charla"],["ㅕ+ㅣ","ㅖ","ye","시계 reloj"],
  ["ㅗ+ㅏ","ㅘ","wa","사과 manzana"],["ㅗ+ㅐ","ㅙ","we","돼지 cerdo"],["ㅗ+ㅣ","ㅚ","we","회사 empresa"],
  ["ㅜ+ㅓ","ㅝ","wo","뭐 ¿qué?"],["ㅜ+ㅔ","ㅞ","we","웨이터 camarero"],["ㅜ+ㅣ","ㅟ","wi","귀 oreja"],["ㅡ+ㅣ","ㅢ","ui","의자 silla"]]},
  {type:"tip",icon:"💡",body:"• <k>ㅐ</k> y <k>ㅔ</k> hoy suenan igual: «e». <k>ㅙ ㅚ ㅞ</k> también: «we» (como en <i>huevo</i>).<br>• <k>ㅢ</k>: al inicio «ui» (<k>의사</k>), tras consonante «i» (<k>희망</k> [히망]), y como «de» posesivo «e» (<k>나의</k> [나에])."}]},
{skill:"listen",h:"Escucha",
 widgets:[{type:"contrast",sets:[[{ko:"와",lab:"wa"},{ko:"워",lab:"wo"},{ko:"위",lab:"wi"},{ko:"의",lab:"ui"}],[{ko:"애",lab:"e"},{ko:"에",lab:"e"},{ko:"예",lab:"ye"}],[{ko:"왜",lab:"we"},{ko:"외",lab:"we"},{ko:"웨",lab:"we"}]]}]},
{skill:"speak",h:"Pronuncia",
 widgets:[{type:"speak",items:[{ko:"사과",es:"manzana"},{ko:"회사",es:"empresa"},{ko:"뭐예요?",es:"¿qué es?"},{ko:"의사",es:"médico"},{ko:"시계",es:"reloj"}]}]},
{skill:"read",h:"Lee",
 widgets:[{type:"read",items:[{ko:"개",rom:"gae",m:"perro"},{ko:"게",rom:"ge",m:"cangrejo"},{ko:"세계",rom:"segye",m:"mundo"},{ko:"시계",rom:"sigye",m:"reloj"},{ko:"사과",rom:"sagwa",m:"manzana"},{ko:"과자",rom:"gwaja",m:"galleta"},{ko:"돼지",rom:"dwaeji",m:"cerdo"},{ko:"회사",rom:"hoesa",m:"empresa"},{ko:"뭐",rom:"mwo",m:"¿qué?"},{ko:"왜",rom:"wae",m:"¿por qué?"},{ko:"귀",rom:"gwi",m:"oreja"},{ko:"의자",rom:"uija",m:"silla"}]}]},
{skill:"write",h:"Escribe",
 widgets:[{type:"writers",chars:"ㅐㅔㅘㅝㅚㅟㅢ",size:100},{type:"writers",chars:"사과의자",size:120}]}
],
words:[{ko:"개",rom:"gae",m:"perro"},{ko:"게",rom:"ge",m:"cangrejo"},{ko:"세계",rom:"segye",m:"mundo"},{ko:"시계",rom:"sigye",m:"reloj"},{ko:"사과",rom:"sagwa",m:"manzana; disculpa"},{ko:"과자",rom:"gwaja",m:"galleta, snack"},{ko:"돼지",rom:"dwaeji",m:"cerdo"},{ko:"회사",rom:"hoesa",m:"empresa"},{ko:"뭐",rom:"mwo",m:"¿qué?"},{ko:"왜",rom:"wae",m:"¿por qué?"},{ko:"의사",rom:"uisa",m:"médico"},{ko:"의자",rom:"uija",m:"silla"}],
sets:[
{title:"Escuchar",items:[{type:"listen",say:"와",opts:["와","워","위","외"],a:0},{type:"listen",say:"워",opts:["와","워","위","의"],a:1},{type:"listen",say:"의",opts:["위","의","이","으"],a:1},{type:"listen",say:"돼지",opts:["대지","돼지","되지","도지"],a:1}]},
{title:"Comprender",items:[
 {type:"mc",q:"<k>ㅗ</k> + <k>ㅏ</k> = ?",opts:["ㅘ","ㅝ","ㅚ","ㅙ"],a:0},{type:"mc",q:"<k>ㅜ</k> + <k>ㅓ</k> = ?",opts:["ㅝ","ㅘ","ㅞ","ㅟ"],a:0},
 {type:"mc",q:"¿Qué par suena igual hoy?",opts:["ㅐ / ㅔ","ㅏ / ㅓ","ㅗ / ㅜ","ㅡ / ㅣ"],a:0},{type:"mc",q:"<k>희망</k> se pronuncia…",opts:["[히망]","[흐이망]","[해망]","[후이망]"],a:0}]},
{title:"Dictado",items:[{type:"type",say:"사과",a:"사과"},{type:"type",say:"의자",a:"의자"},{type:"type",say:"왜",a:"왜"}]},
{title:"Hablar y escribir",items:[{type:"speak",ko:"회사",es:"empresa"},{type:"speak",ko:"의사",es:"médico"},{type:"draw",ch:"ㅘ"},{type:"draw",ch:"뭐"}]}
]};
