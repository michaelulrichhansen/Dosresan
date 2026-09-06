/* Fiktiva, rena beräkningsövningar. Alla nödvändiga uppgifter anges. */
const questions = [
 {title:'Första dosen',category:'Dos & styrka',text:'Ordinerad dos är 500 mg. Lösningen har styrkan 250 mg/ml. Vilken volym motsvarar dosen?',unit:'ml',answer:2,hint:'Volym = dos ÷ styrka.',solution:'500 ÷ 250 = 2 ml.'},
 {title:'På tablettbrickan',category:'Tabletter',text:'Ordinerad dos är 750 mg. Varje tablett innehåller 250 mg. Hur många tabletter motsvarar dosen?',unit:'tabletter',answer:3,hint:'Dela dosen med mängden i en tablett.',solution:'750 ÷ 250 = 3 tabletter.'},
 {title:'En mindre volym',category:'Dos & styrka',text:'Ordinerad dos är 15 mg. Lösningen har styrkan 10 mg/ml. Vilken volym motsvarar dosen?',unit:'ml',answer:1.5,hint:'Dela 15 med 10. Du kan skriva decimal med komma eller punkt.',solution:'15 ÷ 10 = 1,5 ml.'},
 {title:'Byt enhet',category:'Enhetsomvandling',text:'Ordinerad dos är 0,6 g. Lösningen har styrkan 200 mg/ml. Vilken volym motsvarar dosen?',unit:'ml',answer:3,hint:'Omvandla gram till milligram först: 1 g = 1 000 mg.',solution:'0,6 g = 600 mg. 600 ÷ 200 = 3 ml.'},
 {title:'Hur mycket finns i sprutan?',category:'Läkemedelsmängd',text:'En spruta innehåller 4 ml av en lösning med styrkan 25 mg/ml. Hur stor läkemedelsmängd finns i sprutan?',unit:'mg',answer:100,hint:'Mängd = volym × styrka.',solution:'4 × 25 = 100 mg.'},
 {title:'Anpassa efter vikten',category:'Viktbaserad dos',text:'Den ordinerade dosen är 4 mg/kg och patientens vikt 60 kg. Lösningen har styrkan 40 mg/ml. Vilken volym motsvarar dosen?',unit:'ml',answer:6,hint:'Räkna ut dosen i mg med vikten. Dela sedan med styrkan.',solution:'4 × 60 = 240 mg. 240 ÷ 40 = 6 ml.'},
 {title:'Hitta den nya styrkan',category:'Spädning',text:'200 mg läkemedel späds till en total slutvolym på 50 ml. Vilken blir lösningens styrka?',unit:'mg/ml',answer:4,hint:'Dela läkemedelsmängden med hela slutvolymen.',solution:'200 ÷ 50 = 4 mg/ml.'},
 {title:'Ställ in flödet',category:'Infusion',text:'250 ml ska ges under 2 timmar. Vilken är infusionshastigheten i ml/h?',unit:'ml/h',answer:125,hint:'Dela volymen med tiden i timmar.',solution:'250 ÷ 2 = 125 ml/h.'},
 {title:'Från minuter till timmar',category:'Infusion',text:'100 ml ska ges under 40 minuter. Vilken är infusionshastigheten i ml/h?',unit:'ml/h',answer:150,hint:'Räkna ml per minut och multiplicera sedan med 60.',solution:'100 ÷ 40 × 60 = 150 ml/h.'},
 {title:'Nyckeln till nästa avdelning',category:'Slututmaning',text:'Dosen är 5 mg/kg för en patient som väger 60 kg. En lösning på 100 mg/ml späds genom att 5 ml lösning blandas med 45 ml spädningsvätska (slutvolym 50 ml). Dosen ska ges under 30 minuter. Vilken är infusionshastigheten i ml/h?',unit:'ml/h',answer:60,hint:'Räkna dos → mängd i spädningen → ny styrka → dosens volym → ml/h.',solution:'5 × 60 = 300 mg. 5 × 100 = 500 mg i 50 ml, alltså 10 mg/ml. 300 ÷ 10 = 30 ml. 30 ÷ 0,5 = 60 ml/h.'}
];


function makeQuestion(level, variant=0, room=0) {
 if(!variant) return {...questions[level]};
 const n=(variant-1)%5+3+room, f=v=>String(v).replace('.',',');
 const data=[
 [`Ordinerad dos är ${n*100} mg. Lösningen har styrkan 100 mg/ml. Vilken volym motsvarar dosen?`,n,`${n*100} ÷ 100 = ${n} ml.`],
 [`Ordinerad dos är ${n*50} mg. Varje tablett innehåller 50 mg. Hur många tabletter motsvarar dosen?`,n,`${n*50} ÷ 50 = ${n} tabletter.`],
 [`Ordinerad dos är ${n*10+5} mg. Lösningen har styrkan 10 mg/ml. Vilken volym motsvarar dosen?`,n+.5,`${n*10+5} ÷ 10 = ${f(n+.5)} ml.`],
 [`Ordinerad dos är ${f(n/10)} g. Lösningen har styrkan 100 mg/ml. Vilken volym motsvarar dosen?`,n,`${f(n/10)} g = ${n*100} mg. ${n*100} ÷ 100 = ${n} ml.`],
 [`En spruta innehåller ${n} ml av en lösning med styrkan 20 mg/ml. Hur stor läkemedelsmängd finns i sprutan?`,n*20,`${n} × 20 = ${n*20} mg.`],
 [`Den ordinerade dosen är 2 mg/kg och patientens vikt ${n*10+40} kg. Lösningen har styrkan 20 mg/ml. Vilken volym motsvarar dosen?`,n+4,`2 × ${n*10+40} ÷ 20 = ${n+4} ml.`],
 [`${n*100} mg läkemedel späds till en total slutvolym på 100 ml. Vilken blir lösningens styrka?`,n,`${n*100} ÷ 100 = ${n} mg/ml.`],
 [`${n*100} ml ska ges under 2 timmar. Vilken är infusionshastigheten i ml/h?`,n*50,`${n*100} ÷ 2 = ${n*50} ml/h.`],
 [`${n*50} ml ska ges under 40 minuter. Vilken är infusionshastigheten i ml/h?`,n*75,`${n*50} ÷ 40 × 60 = ${n*75} ml/h.`],
 [`Dosen är 5 mg/kg för en patient som väger ${n*10+40} kg. En lösning på 100 mg/ml späds genom att 5 ml lösning blandas med 45 ml spädningsvätska (slutvolym 50 ml). Dosen ska ges under 30 minuter. Vilken är infusionshastigheten i ml/h?`,n*10+40,`Dosen är ${n*50+200} mg. Ny styrka: 500 ÷ 50 = 10 mg/ml. Volym: ${n*5+20} ml. Hastighet: ${n*5+20} ÷ 0,5 = ${n*10+40} ml/h.`]
 ];
 const [text,answer,solution]=data[level];
 return {...questions[level],text,answer,solution,...(level===2?{hint:'Volym = dos ÷ styrka. Komma eller punkt fungerar som decimaltecken.'}:{})};
}
if(typeof module!=='undefined')module.exports={questions,makeQuestion};

