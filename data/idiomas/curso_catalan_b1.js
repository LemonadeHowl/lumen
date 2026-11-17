// Curso de catalán · nivel B1. Mismo formato que curso_catalan.js (cadenas entre comillas dobles).
CURSO.catalan.push({ id: "B1", nombre: "B1 · Elemental", desc: "Entender textos claros sobre temas conocidos, contar experiencias, justificar opiniones y resolver la mayoría de situaciones cotidianas y de trabajo.", u: [
  { id: "cb1-1", t: "Mitjans i comunicació", es: "Medios y comunicación", v: [
    ["la notícia", "la noticia"], ["el diari", "el periódico"], ["la revista", "la revista"], ["l'article", "el artículo"], ["el programa", "el programa"], ["la cadena", "la cadena"], ["la publicitat", "la publicidad"],
    ["la xarxa", "la red"], ["les xarxes socials", "las redes sociales"], ["la pantalla", "la pantalla"], ["el dispositiu", "el dispositivo"], ["el fitxer", "el archivo"], ["baixar", "descargar"], ["penjar", "subir, colgar (a la red)"],
    ["desar", "guardar"], ["esborrar", "borrar"], ["la connexió", "la conexión"], ["localitzable", "localizable"], ["les dades", "los datos"], ["la font", "la fuente"], ["fiable", "fiable"],
    ["l'opinió", "la opinión"], ["informar", "informar"], ["publicar", "publicar"], ["compartir", "compartir"], ["subscriure's", "suscribirse"], ["el titular", "el titular"], ["l'actualitat", "la actualidad"]],
    g: { t: "Los pronombres en y hi", n: `
## en
Sustituye a:
- una cantidad o un nombre sin artículo: Quants diaris llegeixes? – **En** llegeixo dos. · Tens temps? – Sí, **en** tinc.
- un complemento con **de**: Parles de política? – No, no **en** parlo. · Vinc de la redacció. → **En** vinc.
> Es imprescindible y no existe en castellano. «¿Tienes hermanos? – Sí, tengo dos» = «Sí, **en** tinc dos».

## hi
Sustituye a:
- un lugar (con a, en, dins…): Vas a la biblioteca? – Sí, **hi** vaig.
- un complemento con **a, en, amb** de cosas: Penses en les vacances? – Sí, **hi** penso. · Hi estic d'acord.
- en el verbo **haver-hi** (haber impersonal): **Hi** ha, **hi** havia, **hi** haurà.
También acompaña a verbos de percepción y estado: No **hi** veig. (No veo.) · No **hi** sent. (No oye.)

## Formas
$ en: davant del verbo «en / n'» · detrás «-ne / 'n»: en vull, n'he llegit, vull comprar-ne, compra'n
$ hi: siempre «hi» (y «-hi» detrás): hi vaig, vull anar-hi
`, e: [
      mc(2, "Completa: «Quantes notícies has llegit? – ___ he llegit cinc.»", ["N'", "Les", "Hi", "En"], "Cantidad + vocal: n'."),
      mc(2, "Completa: «Vas a la redacció? – Sí, ___ vaig ara.»", ["hi", "en", "la", "ho"], "Lugar: hi."),
      mc(2, "Completa: «Tens germans? – Sí, ___ tinc dos.»", ["en", "els", "hi", "los"], "Cantidad: en."),
      mc(2, "Completa: «Parles d'aquest tema amb ells? – No, no ___ parlo mai.»", ["en", "hi", "el", "ho"], "parlar de → en."),
      tx(2, "Completa: «Vull comprar___.» (en, detrás del infinitivo)", ["-ne", "ne"], "Detrás del infinitivo: comprar-ne."),
      mc(2, "Completa: «Penses en el viatge? – Sí, ___ penso sovint.»", ["hi", "en", "el", "ho"], "pensar en + cosa → hi."),
      mc(2, "«No hi veig» significa…", ["No veo (bien)", "No lo veo allí", "No veo a nadie", "No hay nada que ver"], "hi con verbos de percepción."),
      tx(2, "Completa: «Vull anar-___ demà.» (a la platja)", ["hi"], "Lugar detrás del infinitivo: anar-hi.")] },
    d: { t: "Les notícies, abans i ara", l: [
      ["Text", "El meu avi, que enguany farà vuitanta anys, llegeix cada matí el diari que el carter li deixa a la porta. És un ritual al qual no vol renunciar.", "Mi abuelo, que este año cumplirá ochenta, lee cada mañana el periódico que el cartero le deja en la puerta. Es un ritual al que no quiere renunciar."],
      ["Text", "Jo, en canvi, m'informo amb el mòbil. Les notícies que llegeixo em vénen de les aplicacions i de les xarxes, i sovint són els amics els qui me n'envien.", "Yo, en cambio, me informo con el móvil. Las noticias que leo me llegan de las aplicaciones y de las redes, y a menudo son los amigos quienes me las envían."],
      ["Text", "És pràctic, però hi ha un problema: no tot el que circula per la xarxa és cert. Hi ha webs de les quals ningú no coneix les fonts i titulars que només volen cridar l'atenció.", "Es práctico, pero hay un problema: no todo lo que circula por la red es cierto. Hay webs cuyas fuentes nadie conoce y titulares que solo quieren llamar la atención."],
      ["Text", "L'avi diu que només es refia dels periodistes dels quals coneix el nom. Crec que no li falta raó. Per això m'he subscrit a un setmanari que llegeixo amb calma els diumenges, en paper.", "El abuelo dice que solo se fía de los periodistas cuyo nombre conoce. Creo que no le falta razón. Por eso me he suscrito a un semanario que leo con calma los domingos, en papel."]],
      q: [
        mc(2, "Com s'informa l'avi?", ["Llegeix el diari.", "Mira la televisió.", "Fa servir aplicacions.", "Escolta la ràdio."], "«…llegeix cada matí el diari…»"),
        mc(2, "D'on li arriben les notícies a la narradora?", ["De les aplicacions i les xarxes", "Del diari en paper", "De la televisió", "De l'avi"], "«…de les aplicacions i de les xarxes…»"),
        mc(2, "Quin problema té la xarxa, segons el text?", ["No tot és cert.", "És cara.", "És lenta.", "Hi ha poques notícies."], "«…no tot el que circula per la xarxa és cert.»"),
        mc(2, "Què ha fet la narradora?", ["S'ha subscrit a un setmanari.", "Ha venut el mòbil.", "Ha obert un blog.", "Ha esborrat les aplicacions."], "«…m'he subscrit a un setmanari…»")] },
    w: { c: "Explica cómo te informas tú: qué medios usas, cuáles te parecen fiables y por qué. Seis o siete frases con «en» y «hi».", m: "M'informo sobretot amb pòdcasts, que escolto quan vaig a la feina: n'escolto almenys dos cada dia. També llegeixo un diari digital, però no en llegeixo més de tres articles. A les xarxes socials hi entro només per distreure'm. Quan un amic m'envia una notícia estranya, la comprovo abans de compartir-la. Fonts fiables, n'hi ha, però s'han de buscar. Hi penso sovint, en aquest tema." } },

  { id: "cb1-2", t: "Medi ambient i natura", es: "Medio ambiente y naturaleza", v: [
    ["el medi ambient", "el medio ambiente"], ["la protecció", "la protección"], ["el canvi climàtic", "el cambio climático"], ["l'escalfament", "el calentamiento"], ["la contaminació", "la contaminación"], ["els residus", "los residuos"], ["la paperera", "la papelera"],
    ["la recollida selectiva", "la recogida selectiva"], ["reciclar", "reciclar"], ["l'envàs", "el envase"], ["el plàstic", "el plástico"], ["l'energia", "la energía"], ["l'electricitat", "la electricidad"], ["renovable", "renovable"],
    ["l'aerogenerador", "el aerogenerador"], ["la placa solar", "la placa solar"], ["estalviar", "ahorrar"], ["consumir", "consumir"], ["malbaratar", "derrochar"], ["el trànsit", "el tráfico"], ["el transport públic", "el transporte público"],
    ["el cotxe elèctric", "el coche eléctrico"], ["l'espècie", "la especie"], ["extingir-se", "extinguirse"], ["protegir", "proteger"], ["sostenible", "sostenible"], ["el planeta", "el planeta"], ["la sequera", "la sequía"]],
    g: { t: "El subjuntivo presente", n: `
## Cómo se forma
Raíz + **-i, -is, -i, -em, -eu, -in** (para casi todos los verbos):
| parlar: parli, parlis, parli, parlem, parleu, parlin
| perdre: perdi, perdis, perdi, perdem, perdeu, perdin
| servir: serveixi, serveixis, serveixi, servim, serviu, serveixin
Irregulares (la raíz suele coincidir con la primera persona del presente):
| ser: sigui · tenir: tingui · fer: faci · anar: vagi · poder: pugui · voler: vulgui · venir: vingui · dir: digui · saber: sàpiga · haver: hagi
> «nosaltres» y «vosaltres» coinciden con el presente: que parlem, que parleu.

## Cuándo se usa
Igual que en castellano, tras **que** cuando la principal expresa:
- **Voluntad o deseo**: Vull que vinguis. · Espero que vagi bé.
- **Sentimiento**: M'alegro que siguis aquí. · Em fa por que sigui tard.
- **Necesidad o juicio**: Cal que reduïm els residus. · És important que…
- **Duda u opinión negativa**: No crec que sigui veritat. · Dubto que…
Y tras **perquè** (para que), **encara que** (aunque, hipotético), **abans que**, **sense que**, **quan** (futuro).

## Diferencias con el castellano
- Muy pocas: el catalán sigue casi las mismas reglas.
- Opinión afirmativa con indicativo, como en castellano: Crec que **és** veritat.
- Cuidado con las formas: «que sigui» (no «que sea»), «que vagi», «que faci».
`, e: [
      mc(2, "Completa: «Cal que ___ menys energia.» (nosaltres)", ["consumim", "consumeixin", "consumíem", "consumir"], "nosaltres: igual que el presente."),
      mc(2, "Completa: «Vull que ___ amb mi.» (tu)", ["vinguis", "véns", "vindràs", "venir"], "Voluntad: subjuntivo; venir → vingui-."),
      mc(2, "Completa: «Crec que això ___ una bona idea.»", ["és", "sigui", "fos", "serà estat"], "Opinión afirmativa: indicativo."),
      mc(2, "Completa: «No crec que això ___ suficient.»", ["sigui", "és", "serà", "era"], "Opinión negativa: subjuntivo."),
      tx(2, "Subjuntivo de «fer»: «Espero que ___ bon temps.»", ["faci"], "fer → faci."),
      mc(2, "Completa: «T'ho explico perquè ho ___.»", ["entenguis", "entens", "entendràs", "entenies"], "perquè = para que + subjuntivo."),
      mc(2, "Completa: «M'alegro que ___ aquí.» (tu)", ["siguis", "ets", "seràs", "fossis estat"], "Sentimiento: sigui-."),
      tx(2, "Subjuntivo de «poder»: «Cal que tothom ___ venir.»", ["pugui"], "poder → pugui.")] },
    d: { t: "Una ciutat més verda", l: [
      ["Text", "A Vitoria-Gasteiz fa anys que es treballa pel medi ambient. La ciutat ha creat un anell verd de parcs i camins al voltant del centre perquè tothom pugui passejar a prop de la natura.", "En Vitoria-Gasteiz hace años que se trabaja por el medio ambiente. La ciudad ha creado un anillo verde de parques y caminos alrededor del centro para que todos puedan pasear cerca de la naturaleza."],
      ["Text", "Molts edificis nous estan tan ben aïllats que gairebé no necessiten calefacció, i una part de l'electricitat ve de plaques solars instal·lades a les teulades.", "Muchos edificios nuevos están tan bien aislados que casi no necesitan calefacción, y una parte de la electricidad viene de placas solares instaladas en los tejados."],
      ["Text", "L'Ajuntament també vol que els veïns canviïn d'hàbits: ha creat carrils bici i ha reorganitzat el transport públic perquè sigui més ràpid que el cotxe.", "El ayuntamiento también quiere que los vecinos cambien de hábitos: ha creado carriles bici y ha reorganizado el transporte público para que sea más rápido que el coche."],
      ["Text", "Tot i això, hi ha crítiques. Els lloguers han pujat molt i algunes famílies tenen por que els barris verds es tornin massa cars. Caldria, diuen, que l'ecologia fos a l'abast de tothom.", "Aun así, hay críticas. Los alquileres han subido mucho y algunas familias temen que los barrios verdes se vuelvan demasiado caros. Haría falta, dicen, que la ecología estuviera al alcance de todos."]],
      q: [
        mc(2, "Què ha creat la ciutat al voltant del centre?", ["Un anell verd de parcs", "Una autopista", "Una central elèctrica", "Un aeroport"], "«…un anell verd de parcs i camins…»"),
        mc(2, "D'on ve una part de l'electricitat?", ["De plaques solars", "Del carbó", "D'aerogeneradors", "De l'estranger"], "«…de plaques solars…»"),
        mc(2, "Per què s'ha reorganitzat el transport públic?", ["Perquè sigui més ràpid que el cotxe", "Per estalviar diners", "Perquè hi havia poca gent", "Per fer més carrils bici"], "«…perquè sigui més ràpid que el cotxe.»"),
        mc(2, "Què temen algunes famílies?", ["Que els barris es tornin massa cars", "El soroll", "Que desapareguin els parcs", "Que s'espatllin les plaques"], "«…tenen por que els barris verds es tornin massa cars.»")] },
    w: { c: "Describe qué habría que hacer en tu ciudad por el medio ambiente. Seis frases con «cal que», «vull que», «perquè» (+ subjuntivo) y «no crec que».", m: "A la meva ciutat cal que reduïm el trànsit al centre. Voldria que l'Ajuntament fes més carrils bici perquè els nens puguin anar a l'escola amb bicicleta. És important que el transport públic sigui més barat. Molta gent encara no separa els residus, i no crec que sigui per mandra: falten contenidors. També m'agradaria que es plantessin més arbres. Espero que les coses canviïn aviat." } },

  { id: "cb1-3", t: "Estudis i futur", es: "Estudios y futuro", v: [
    ["els estudis", "los estudios"], ["la universitat", "la universidad"], ["l'assignatura", "la asignatura"], ["el títol", "el título"], ["el batxillerat", "el bachillerato"], ["la nota", "la nota"], ["l'examen", "el examen"],
    ["aprovar", "aprobar"], ["suspendre", "suspender"], ["la beca", "la beca"], ["el cicle formatiu", "el ciclo formativo"], ["la formació contínua", "la formación continua"], ["els coneixements", "los conocimientos"], ["la competència", "la competencia, la habilidad"],
    ["la matrícula", "la matrícula"], ["el termini", "el plazo"], ["l'objectiu", "el objetivo"], ["el projecte", "el proyecto"], ["tenir intenció de", "tener intención de"], ["triar", "elegir"], ["la tria", "la elección"],
    ["el futur", "el futuro"], ["el somni", "el sueño (anhelo)"], ["assolir", "alcanzar, lograr"], ["renunciar", "renunciar"], ["esforçar-se", "esforzarse"], ["el repte", "el reto"], ["l'oportunitat", "la oportunidad"]],
    g: { t: "El subjuntivo imperfecto y las condiciones irreales", n: `
## El imperfet de subjuntiu
$ -ar: parlés, parlessis, parlés, parléssim, parléssiu, parlessin
$ -re / -er / -ir: perdés · dormís · servís
Irregulares: **ser**: fos, fossis, fos, fóssim, fóssiu, fossin · **tenir**: tingués · **fer**: fes · **anar**: anés · **poder**: pogués · **voler**: volgués · **haver**: hagués
Se usa cuando la principal está en pasado o en condicional: Volia que vinguessis. · M'agradaria que fos més fàcil.
> En valenciano se usan formas en -ara: parlara, fora, tinguera. Las dos son correctas.

## Tres tipos de condición
- **Real**: si + presente → presente o futuro. Si estudies, aprovaràs.
- **Posible o irreal ahora**: **si + imperfet de subjuntiu → condicional**. Si tingués una beca, aniria a l'estranger.
- (Sobre el pasado, si + plusquamperfet de subjuntiu → condicional perfet, en B2.)
> Igual que en castellano: «si tuviera, iría». Nunca condicional tras «si».

## La finalidad
- Mismo sujeto: **per** + infinitivo → Treballo els vespres per pagar-me els estudis.
- Sujetos distintos: **perquè** + subjuntivo → T'ho explico perquè ho entenguis.
> «per a» se usa delante de un nombre (destino): Aquest llibre és per a tu.
`, e: [
      mc(2, "Completa: «Si ___ més temps, aprendria japonès.»", ["tingués", "tindria", "tinc", "tindré"], "si + imperfet de subjuntiu → condicional."),
      mc(2, "Completa: «Si estudies, ___ l'examen.»", ["aprovaràs", "aprovaries", "aprovessis", "hagis aprovat"], "Condición real: futuro."),
      mc(2, "¿Qué frase es correcta?", ["Si pogués, canviaria de feina.", "Si podria, canviaria de feina.", "Si pogués, canviava de feina.", "Si puc, canviaria de feina."], "Imperfet de subjuntiu tras si; condicional en la otra parte."),
      mc(2, "Completa: «Volia que tu ___ amb mi.»", ["vinguessis", "vinguis", "véns", "vindràs"], "Principal en pasado → imperfet de subjuntiu."),
      tx(2, "Imperfet de subjuntiu de «ser»: «Si jo ___ tu, triaria medicina.»", ["fos"], "si jo fos."),
      mc(2, "Completa: «Faig pràctiques ___ tenir més experiència.»", ["per", "perquè", "per a", "que"], "Mismo sujeto: per + infinitivo."),
      mc(2, "Completa: «T'ho explico ___ ho entenguis.»", ["perquè", "per", "per a", "com que"], "Sujetos distintos: perquè + subjuntivo."),
      tx(2, "Condicional de «anar»: «Si tingués una beca, ___ a l'estranger.»", ["aniria"], "anar → aniria.")] },
    d: { t: "Després del batxillerat", l: [
      ["Elena", "Ja saps què faràs després del batxillerat?", "¿Ya sabes qué harás después del bachillerato?"],
      ["David", "Tinc intenció de treballar un any a l'estranger per millorar l'anglès.", "Tengo intención de trabajar un año en el extranjero para mejorar el inglés."],
      ["Elena", "I després?", "¿Y después?"],
      ["David", "Després voldria estudiar enginyeria. Si em donen una beca, aniré a Terrassa.", "Después querría estudiar ingeniería. Si me dan una beca, iré a Terrassa."],
      ["Elena", "Quina sort. Jo encara no he triat. Els meus pares voldrien que estudiés dret.", "Qué suerte. Yo todavía no he elegido. Mis padres querrían que estudiara derecho."],
      ["David", "I a tu, t'agradaria?", "¿Y a ti te gustaría?"],
      ["Elena", "No gaire. Si pogués, faria una escola de fotografia.", "No mucho. Si pudiera, iría a una escuela de fotografía."],
      ["David", "Doncs n'hauries de parlar amb ells perquè entenguin el teu projecte.", "Pues deberías hablar de ello con ellos para que entiendan tu proyecto."],
      ["Elena", "Tens raó. Si no dic res, me'n penediré. Els en parlaré aquest cap de setmana.", "Tienes razón. Si no digo nada, me arrepentiré. Les hablaré de ello este fin de semana."]],
      q: [
        mc(2, "Per què vol anar a l'estranger en David?", ["Per millorar l'anglès", "Per fer turisme", "Per estudiar-hi", "Per veure la família"], "«…per millorar l'anglès.»"),
        mc(2, "Què vol estudiar en David?", ["Enginyeria", "Dret", "Medicina", "Fotografia"], "«…voldria estudiar enginyeria.»"),
        mc(2, "Què voldrien els pares de l'Elena?", ["Que estudiés dret", "Que fos fotògrafa", "Que anés a l'estranger", "Que treballés"], "«…voldrien que estudiés dret.»"),
        mc(2, "Què farà l'Elena aquest cap de setmana?", ["Parlarà amb els pares.", "Enviarà la matrícula.", "Anirà a Terrassa.", "Farà un examen."], "«Els en parlaré aquest cap de setmana.»")] },
    w: { c: "Escribe sobre tus planes y tus sueños: qué harás seguro, qué harías si pudieras y para qué. Siete frases con «si» + presente, «si» + imperfet de subjuntiu y «per / perquè».", m: "L'any que ve continuaré estudiant català per fer l'examen del nivell B2. Si l'aprovo, buscaré feina a Girona. Estudio una mica cada dia per avançar a poc a poc. Si tingués més temps, faria també un curs de conversa. I si pogués triar, viuria sis mesos a Mallorca. En parlo sovint amb la meva família perquè entengui el meu projecte. Si no ho provo, me'n penediré." } },

  { id: "cb1-4", t: "Records i biografies", es: "Recuerdos y biografías", v: [
    ["la infància", "la infancia"], ["la joventut", "la juventud"], ["créixer", "crecer"], ["néixer", "nacer"], ["educar", "educar"], ["la generació", "la generación"], ["l'esdeveniment", "el acontecimiento"],
    ["la vellesa", "la vejez"], ["enamorar-se", "enamorarse"], ["casar-se", "casarse"], ["separar-se", "separarse"], ["el divorci", "el divorcio"], ["morir", "morir"], ["la mort", "la muerte"],
    ["emigrar", "emigrar"], ["la terra natal", "la tierra natal"], ["l'enyorança", "la añoranza"], ["la guerra", "la guerra"], ["la pau", "la paz"], ["aleshores", "entonces"], ["antigament", "antiguamente"],
    ["de sobte", "de repente"], ["finalment", "finalmente"], ["mentrestant", "mientras tanto"], ["el destí", "el destino"], ["orgullós", "orgulloso"], ["recordar", "recordar, acordarse de"], ["explicar", "contar, explicar"]],
    g: { t: "El plusquamperfet, el passat simple y el tiempo", n: `
## El plusquamperfet
Lo que había ocurrido antes de otro hecho pasado: **havia, havies, havia, havíem, havíeu, havien** + participio.
| Quan vaig arribar, el tren ja havia sortit.

## Los tiempos del relato
- **Perifràstic** (o perfet según el momento): los hechos → Va conèixer el meu avi el 1962.
- **Imperfet**: el decorado y las costumbres → Vivien sis persones en una habitació.
- **Plusquamperfet**: lo anterior → Havia deixat el poble dos anys abans.

## El passat simple: saber leerlo
Es la forma sintética del pasado, propia de la literatura y de algunos textos formales. Equivale al perifràstic:
$ -ar: parlà, parlaren (= va parlar, van parlar) · -re / -ir: perdé, dormí
Irregulares frecuentes: fou (va ser) · fugué / fou · tingué (va tenir) · féu (va fer) · nasqué (va néixer) · morí (va morir) · visqué (va viure) · digué (va dir)
| Ramon Llull nasqué a Mallorca cap al 1232.  =  Ramon Llull va néixer a Mallorca cap al 1232.

## Situar en el tiempo
| fa (hace): Va arribar fa deu anys.
| des de / des que (desde): Viu aquí des del 2015. · Des que va arribar, treballa aquí.
| fa … que + presente (hace … que): Fa deu anys que viu aquí.
| durant (durante) · d'aquí a (dentro de): Es jubilarà d'aquí a dos anys.
`, e: [
      mc(2, "Completa: «Quan vaig arribar, la pel·lícula ja ___ començat.»", ["havia", "ha", "va", "hauria"], "Anterior a otro pasado: plusquamperfet."),
      mc(2, "Completa: «Estava cansada perquè ___ treballat tota la nit.»", ["havia", "va", "ha", "haurà"], "La causa es anterior: havia treballat."),
      mc(2, "«Nasqué a Mallorca» equivale a…", ["Va néixer a Mallorca.", "Neix a Mallorca.", "Naixerà a Mallorca.", "Havia nascut a Mallorca després."], "Passat simple = perifràstic."),
      mc(2, "«Fou un gran escriptor» equivale a…", ["Va ser un gran escriptor.", "Fa un gran escriptor.", "Serà un gran escriptor.", "Seria un gran escriptor."], "fou = va ser."),
      mc(2, "Completa: «___ cinc anys que visc a Lleida.»", ["Fa", "Des de", "Durant", "D'aquí a"], "Fa … que + presente."),
      tx(2, "Completa: «Va arribar a Catalunya ___ deu anys.» (hace)", ["fa"], "fa + duración."),
      mc(2, "Completa: «Marxaré ___ dues setmanes.» (dentro de)", ["d'aquí a", "fa", "des de", "durant"], "d'aquí a = dentro de."),
      tx(2, "Completa: «Viu a Reus ___ del 2015.» (desde)", ["des"], "des de + fecha.")] },
    d: { t: "La vida de la meva àvia", l: [
      ["Text", "La meva àvia Maria va néixer el 1940 en un poblet de Jaén. Quan tenia cinc anys, la seva família va haver d'emigrar i es va instal·lar a Terrassa.", "Mi abuela María nació en 1940 en un pueblecito de Jaén. Cuando tenía cinco años, su familia tuvo que emigrar y se instaló en Terrassa."],
      ["Text", "Els primers anys van ser durs. Vivien sis persones en una sola habitació i, quan feia fred, dormien tots a la cuina.", "Los primeros años fueron duros. Vivían seis personas en una sola habitación y, cuando hacía frío, dormían todos en la cocina."],
      ["Text", "Als catorze anys, la Maria va començar a treballar en una fàbrica tèxtil. Ja hi havia treballat la seva mare, que li havia ensenyat a cosir de petita.", "A los catorce años, María empezó a trabajar en una fábrica textil. Ya había trabajado allí su madre, que le había enseñado a coser de pequeña."],
      ["Text", "Va conèixer el meu avi el 1962, en un ball de festa major. Es van casar un any després i van obrir una botiga petita, que van portar durant quaranta anys.", "Conoció a mi abuelo en 1962, en un baile de la fiesta mayor. Se casaron un año después y abrieron una tiendecita que llevaron durante cuarenta años."],
      ["Text", "Avui té més de vuitanta anys. Quan explica aquella època, sempre diu: «No teníem gairebé res, però érem junts». I parla un català perfecte, que va aprendre de gran.", "Hoy tiene más de ochenta años. Cuando cuenta aquella época, siempre dice: «No teníamos casi nada, pero estábamos juntos». Y habla un catalán perfecto, que aprendió de mayor."]],
      q: [
        mc(2, "Quan va emigrar la família?", ["Quan la Maria tenia cinc anys", "Quan tenia catorze anys", "El 1962", "Després del casament"], "«Quan tenia cinc anys…»"),
        mc(2, "On va començar a treballar la Maria?", ["En una fàbrica tèxtil", "En una botiga", "En una escola", "En un hospital"], "«…en una fàbrica tèxtil.»"),
        mc(2, "Qui li havia ensenyat a cosir?", ["La seva mare", "El seu marit", "Una veïna", "La seva àvia"], "«…que li havia ensenyat a cosir de petita.»"),
        mc(2, "Quant de temps van portar la botiga?", ["Quaranta anys", "Un any", "Catorze anys", "Vint anys"], "«…durant quaranta anys.»")] },
    w: { c: "Escribe la biografía breve de un familiar o de alguien a quien admires (siete u ocho frases). Combina perifràstic, imperfet y plusquamperfet, y usa «fa», «durant» y «des de».", m: "El meu pare va néixer el 1965 a Granada. Als divuit anys se'n va anar a Barcelona per estudiar arquitectura. No havia sortit mai de la seva ciutat i al principi tenia molta enyorança. Els vespres treballava en un restaurant: allà va conèixer la meva mare. Es van casar el 1992 i es van instal·lar a València. El meu pare va dirigir un despatx petit durant trenta anys. Es va jubilar fa dos anys. Des d'aleshores, pinta cada dia." } },

  { id: "cb1-5", t: "Societat i convivència", es: "Sociedad y convivencia", v: [
    ["la societat", "la sociedad"], ["el ciutadà", "el ciudadano"], ["el govern", "el gobierno"], ["la llei", "la ley"], ["les eleccions", "las elecciones"], ["votar", "votar"], ["el partit", "el partido"],
    ["la democràcia", "la democracia"], ["la llibertat", "la libertad"], ["la justícia", "la justicia"], ["la igualtat", "la igualdad"], ["el dret", "el derecho"], ["el deure", "el deber"], ["els impostos", "los impuestos"],
    ["la pobresa", "la pobreza"], ["la riquesa", "la riqueza"], ["pobre", "pobre"], ["ric", "rico"], ["el voluntariat", "el voluntariado"], ["implicar-se", "implicarse"], ["donar suport", "apoyar"],
    ["la tolerància", "la tolerancia"], ["el prejudici", "el prejuicio"], ["el respecte", "el respeto"], ["la responsabilitat", "la responsabilidad"], ["exigir", "exigir"], ["queixar-se", "quejarse"], ["la manifestació", "la manifestación"]],
    g: { t: "El estilo indirecto y la expresión de la opinión", n: `
## El estilo indirecto con el verbo en presente
- Afirmación → **que**: «Hi estic d'acord.» → Diu **que** hi està d'acord.
- Pregunta de sí o no → **si**: «Votes?» → Em pregunta **si** voto.
- Otras preguntas conservan el interrogativo: Em pregunta **on** visc, **per què** marxo.
- Orden → **que** + subjuntivo: «Signeu aquí.» → Ens diu **que** signem.

## Con el verbo introductor en pasado
Los tiempos retroceden, como en castellano:
$ presente → imperfet: «Estic cansat.» → Va dir que estava cansat.
$ perfet / perifràstic → plusquamperfet: «He votat.» → Va dir que havia votat.
$ futuro → condicional: «Vindré.» → Va dir que vindria.
$ orden → imperfet de subjuntiu: «Vine!» → Em va dir que vingués.
Marcadores: avui → aquell dia · demà → l'endemà · ahir → el dia abans.

## Dar la opinión
- Con indicativo: Crec que · Penso que · Em sembla que · Al meu parer · Per mi → Crec que és injust.
- Con subjuntivo: No crec que · No em sembla que → No crec que sigui just.
| Hi estic d'acord. · No hi estic gens d'acord. · Tens raó, però… · Depèn.
> «Estar d'acord» lleva «hi»: Hi estic d'acord (amb tu).
`, e: [
      mc(2, "Estilo indirecto: «Hi estic d'acord.» → Diu ___", ["que hi està d'acord.", "que hi estic d'acord.", "si hi està d'acord.", "d'estar-hi d'acord."], "que + verbo adaptado."),
      mc(2, "Estilo indirecto: «Vens a la manifestació?» → Em pregunta ___", ["si vinc a la manifestació.", "que vinc a la manifestació.", "de venir a la manifestació.", "on vinc a la manifestació."], "Pregunta de sí o no: si."),
      mc(2, "Estilo indirecto: «Signeu la petició.» → Ens demana ___", ["que signem la petició.", "de signar la petició que.", "si signem la petició.", "signeu la petició."], "Orden: que + subjuntivo."),
      mc(2, "En pasado: «Vindré demà.» → Va dir ___", ["que vindria l'endemà.", "que vindrà demà.", "que venia el dia abans.", "que havia vingut demà."], "futuro → condicional; demà → l'endemà."),
      tx(2, "En pasado: «He votat.» → Va dir que ___ votat.", ["havia"], "perfet → plusquamperfet."),
      mc(2, "En pasado: «Vine!» → Em va dir que ___.", ["vingués", "vinc", "vindria", "venia"], "Orden en pasado: imperfet de subjuntiu."),
      mc(2, "Completa: «No crec que aquesta llei ___ justa.»", ["sigui", "és", "serà", "era"], "Opinión negativa: subjuntivo."),
      tx(2, "Completa: «___ estic d'acord amb tu.»", ["Hi"], "estar d'acord lleva hi.")] },
    d: { t: "Salvem el casal de joves!", l: [
      ["Jana", "Ho has sentit? L'alcalde ha anunciat que el casal de joves tancaria al juny.", "¿Te has enterado? El alcalde ha anunciado que el centro juvenil cerraría en junio."],
      ["Fèlix", "De debò? I ha explicat per què?", "¿En serio? ¿Y ha explicado por qué?"],
      ["Jana", "Ha dit que l'Ajuntament no tenia diners i que havia d'estalviar.", "Ha dicho que el ayuntamiento no tenía dinero y que tenía que ahorrar."],
      ["Fèlix", "No crec que sigui el motiu real. Acaben de construir un aparcament que ha costat milions.", "No creo que sea el motivo real. Acaban de construir un aparcamiento que ha costado millones."],
      ["Jana", "Hi estic d'acord. Ahir vaig preguntar a la directora què pensava fer.", "Estoy de acuerdo. Ayer le pregunté a la directora qué pensaba hacer."],
      ["Fèlix", "I què et va respondre?", "¿Y qué te respondió?"],
      ["Jana", "Que havia escrit al ple municipal, però que ningú no li havia contestat.", "Que había escrito al pleno, pero que nadie le había contestado."],
      ["Fèlix", "Doncs cal que ens hi impliquem. Al meu parer, una recollida de signatures seria un bon començament.", "Pues tenemos que implicarnos. En mi opinión, una recogida de firmas sería un buen comienzo."],
      ["Jana", "Bona idea. Justament em va demanar que l'ajudéssim dissabte.", "Buena idea. Precisamente me pidió que la ayudáramos el sábado."],
      ["Fèlix", "Digues-li que hi seré.", "Dile que estaré."]],
      q: [
        mc(2, "Què ha anunciat l'alcalde?", ["El tancament del casal de joves", "Un aparcament nou", "Unes eleccions", "Uns impostos nous"], "«…el casal de joves tancaria al juny.»"),
        mc(2, "Quin motiu ha donat?", ["L'Ajuntament ha d'estalviar.", "Els joves ja no hi van.", "L'edifici és vell.", "La directora ha plegat."], "«…no tenia diners i … havia d'estalviar.»"),
        mc(2, "Què ha fet la directora?", ["Ha escrit al ple municipal.", "Ha organitzat una manifestació.", "Ha dimitit.", "S'ha reunit amb l'alcalde."], "«…havia escrit al ple municipal…»"),
        mc(2, "Què proposa en Fèlix?", ["Una recollida de signatures", "Una vaga", "Una festa", "Un article al diari"], "«…una recollida de signatures…»")] },
    w: { c: "Cuenta una conversación o una noticia reciente en estilo indirecto (qué dijo cada uno, qué preguntó) y da tu opinión. Siete frases, con el verbo introductor en pasado.", m: "Ahir la meva veïna em va dir que l'Ajuntament volia tancar la biblioteca del barri. Em va explicar que l'edifici costava massa. Li vaig preguntar si havien consultat els veïns. Em va respondre que no ens havien preguntat res. Va afegir que la setmana següent hi hauria una reunió i em va demanar que hi anés. Al meu parer, és una decisió equivocada. No crec que es pugui estalviar en cultura." } },

  { id: "cb1-6", t: "Consum i diners", es: "Consumo y dinero", v: [
    ["el compte corrent", "la cuenta corriente"], ["els diners en efectiu", "el dinero en efectivo"], ["la transferència", "la transferencia"], ["treure diners", "sacar dinero"], ["la factura", "la factura"], ["les despeses", "los gastos"], ["el deute", "la deuda"],
    ["el préstec", "el préstamo"], ["els interessos", "los intereses"], ["gastar", "gastar"], ["permetre's", "permitirse"], ["la despesa", "el gasto"], ["els ingressos", "los ingresos"], ["l'assegurança", "el seguro"],
    ["signar", "firmar"], ["la garantia", "la garantía"], ["la reclamació", "la reclamación"], ["el consumidor", "el consumidor"], ["la mercaderia", "la mercancía"], ["lliurar", "entregar"], ["el lliurament", "la entrega"],
    ["la comanda", "el pedido"], ["encarregar", "encargar"], ["el descompte", "el descuento"], ["la qualitat", "la calidad"], ["el servei d'atenció al client", "la atención al cliente"], ["el reemborsament", "el reembolso"], ["el canvi", "el cambio (dinero)"]],
    g: { t: "Combinaciones de pronombres, pasiva y «es» impersonal", n: `
## Combinar dos pronombres
El orden es: **indirecto + directo**, o pronombre + **en / hi**:
| Em dones el llibre? – Sí, **te'l** dono.
| Has donat les claus a la Marta? – Sí, **les hi** he donades.
| Me'n dones dos? – Sí, **te'n** dono dos.
Combinaciones más frecuentes:
$ me'l, te'l, se'l, ens el, us el · me la, te la · me'ls, te'ls · me'n, te'n, se'n, ens en
$ li + el / la / els / les → **l'hi, la hi, els hi, les hi** · li + en → **li'n**
> «Se lo doy» (a él) se dice **l'hi** dono, no «se'l dono» (castellanismo).

## La pasiva y el «es» impersonal
La pasiva con **ser** + participio existe, sobre todo en textos formales: El paquet va ser enviat ahir.
Lo más natural es **es** + verbo, que concuerda con el sujeto:
| Es venen bicicletes. · Aquí es paga en efectiu. · S'ha enviat la factura.

## El gerundio
$ -ar → -ant (pagant) · -re / -er → -ent (perdent, fent) · -ir → -int (dormint)
| He trobat el descompte comparant preus.
| Estic esperant el paquet des de fa tres setmanes.
> «Estic + gerundi» es correcto. Pero el gerundio de posterioridad («Va caure, trencant-se el braç») se considera incorrecto: mejor «Va caure i es va trencar el braç».
`, e: [
      mc(2, "Completa: «Em dones el llibre? – Sí, ___ dono.»", ["te'l", "t'el", "el te", "et el"], "et + el → te'l."),
      mc(2, "Completa: «Has donat la clau al veí? – Sí, ___ he donada.»", ["la hi", "se la", "li la", "l'hi"], "li + la → la hi."),
      mc(2, "«Se lo doy (el libro, a él)» en catalán es…", ["L'hi dono.", "Se'l dono.", "Li el dono.", "Se lo dono."], "li + el → l'hi."),
      mc(2, "Completa: «En aquesta botiga ___ productes de proximitat.»", ["es venen", "es ven", "venen es", "es venut"], "Es + verbo concordado con el plural."),
      tx(2, "Gerundio de «fer».", ["fent"], "fer → fent."),
      mc(2, "Completa: «___ esperant el reemborsament des de fa un mes.» (jo)", ["Estic", "Sóc", "He", "Vaig"], "estar + gerundio."),
      mc(2, "Completa: «Me'n dones tres? – Sí, ___ dono tres.»", ["te'n", "t'en", "en te", "te les"], "et + en → te'n."),
      tx(2, "Completa: «___ ha enviat la factura per correu.» (impersonal)", ["S'"], "es + ha → s'ha.")] },
    d: { t: "La reclamació", l: [
      ["Atenció al client", "TecnoMercat, atenció al client, bon dia. En què la puc ajudar?", "TecnoMercat, atención al cliente, buenos días. ¿En qué puedo ayudarla?"],
      ["Sra. Ortega", "Bon dia. Truco per una comanda. Vaig encarregar un portàtil fa tres setmanes i encara l'estic esperant.", "Buenos días. Llamo por un pedido. Encargué un portátil hace tres semanas y todavía lo estoy esperando."],
      ["Atenció al client", "Ho sento. Té el número de la comanda?", "Lo siento. ¿Tiene el número del pedido?"],
      ["Sra. Ortega", "Sí, és el 4471. Al vostre web diu que la mercaderia es lliura en cinc dies.", "Sí, es el 4471. En vuestra web dice que la mercancía se entrega en cinco días."],
      ["Atenció al client", "Veig el problema: per un error, el paquet es va enviar a una adreça equivocada.", "Veo el problema: por un error, el paquete se envió a una dirección equivocada."],
      ["Sra. Ortega", "I ara què? La factura ja l'he pagada.", "¿Y ahora qué? La factura ya la he pagado."],
      ["Atenció al client", "Demà li enviarem un aparell nou. Per disculpar-nos, li fem un descompte del deu per cent.", "Mañana le enviaremos un aparato nuevo. Para disculparnos, le hacemos un descuento del diez por ciento."],
      ["Sra. Ortega", "D'acord. Però si divendres no l'he rebut, demanaré el reemborsament.", "De acuerdo. Pero si el viernes no lo he recibido, pediré el reembolso."],
      ["Atenció al client", "Ho entenc perfectament. Me n'ocupo personalment.", "Lo entiendo perfectamente. Me ocupo personalmente."]],
      q: [
        mc(2, "Per què truca la senyora Ortega?", ["No ha rebut la comanda.", "El portàtil està espatllat.", "El preu és massa alt.", "El web no funciona."], "«…encara l'estic esperant.»"),
        mc(2, "Per què no ha arribat el paquet?", ["Es va enviar a una adreça equivocada.", "La factura no estava pagada.", "El producte estava esgotat.", "La botiga era tancada."], "«…a una adreça equivocada.»"),
        mc(2, "Què li ofereixen per disculpar-se?", ["Un descompte del deu per cent", "Un segon portàtil", "El reemborsament complet", "Un val de compra"], "«…un descompte del deu per cent.»"),
        mc(2, "Què farà si divendres no ha rebut res?", ["Demanarà el reemborsament.", "Tornarà a trucar.", "Anirà a la botiga.", "Farà una altra comanda."], "«…demanaré el reemborsament.»")] },
    w: { c: "Compraste algo por internet y llegó roto o no llegó. Escribe una reclamación formal de unas 80 palabras: qué pediste, cuál es el problema y qué solución exiges.", m: "Benvolguts senyors,\nel 3 de març vaig encarregar una cafetera al vostre web (comanda núm. 2210). Malauradament, l'aparell va arribar malmès: el dipòsit està trencat i no el puc fer servir. Per aquest motiu, us demano que me n'envieu una de nova en el termini d'una setmana o que em retorneu l'import. Adjunto les fotos del desperfecte. Resto a l'espera de la vostra resposta.\nAtentament,\nAna Ruiz" } },
] });
