// Curso de italiano por niveles (Marco Común Europeo). Mismo formato que curso_aleman.js:
//   v: vocabulario [italiano, español] · g: gramática {t, n: apuntes, e: ejercicios}
//   d: diálogo o texto {t, l: [[quién, italiano, español], …], q: preguntas} · w: tarea de escritura {c: consigna, m: modelo}
// Las cadenas van entre comillas dobles por los apóstrofos del italiano.
window.CURSO = window.CURSO || {};
CURSO.italiano = [
  { id: "A1", nombre: "A1 · Acceso", desc: "Presentarse, hacer preguntas sencillas y desenvolverse en situaciones cotidianas muy básicas.", u: [
    { id: "ia1-1", t: "Presentarsi", es: "Presentarse", v: [
      ["ciao", "hola; adiós (informal)"], ["buongiorno", "buenos días"], ["buonasera", "buenas tardes, buenas noches"], ["arrivederci", "adiós"], ["a presto", "hasta pronto"], ["grazie", "gracias"], ["per favore", "por favor"],
      ["io", "yo"], ["tu", "tú"], ["Lei", "usted"], ["il nome", "el nombre"], ["il cognome", "el apellido"], ["chiamarsi", "llamarse"], ["abitare", "vivir (residir)"],
      ["parlare", "hablar"], ["il paese", "el país; el pueblo"], ["la città", "la ciudad"], ["la lingua", "la lengua"], ["l'italiano", "el italiano"], ["lo spagnolo", "el español (idioma)"], ["spagnolo", "español (nacionalidad)"],
      ["come", "cómo"], ["dove", "dónde"], ["sì", "sí"], ["no", "no"], ["piacere", "encantado"], ["un po'", "un poco"], ["e", "y"]],
      g: { t: "Pronombres, essere y verbos en -are", n: `
## Los pronombres sujeto
- **io** (yo), **tu** (tú), **lui / lei** (él / ella), **Lei** (usted)
- **noi** (nosotros), **voi** (vosotros), **loro** (ellos, ellas)
> Como en español, el pronombre se suele omitir: «Parlo italiano». Se usa para contrastar: «Io sono spagnola, lui è italiano».

## tu y Lei
**tu** es informal. Para tratar de usted se usa **Lei** (con mayúscula en lo escrito), que se conjuga como la tercera persona: «Lei come si chiama?»

## El verbo essere (ser, estar)
| io sono · tu sei · lui / lei / Lei è · noi siamo · voi siete · loro sono
> «è» (es) lleva tilde; «e» (y) no.

## Los verbos en -are
Se quita -are y se añade:
$ io -o · tu -i · lui -a · noi -iamo · voi -ate · loro -ano
| parlare: parlo, parli, parla, parliamo, parlate, parlano
| abitare: abito, abiti, abita, abitiamo, abitate, abitano
> El acento de «parlano» cae en la primera sílaba: PAR-la-no, no par-LA-no.

## chiamarsi
| mi chiamo · ti chiami · si chiama · ci chiamiamo · vi chiamate · si chiamano

## Preguntar
| Come ti chiami? / Come si chiama?      ¿Cómo te llamas? / ¿Cómo se llama usted?
| Di dove sei? / Di dov'è?               ¿De dónde eres? / ¿De dónde es usted?
| Dove abiti?                            ¿Dónde vives?
`, e: [
        mc(1, "Completa: «Io ___ spagnola.»", ["sono", "sei", "è", "siamo"], "io sono."),
        mc(1, "Completa: «Voi ___ italiano?»", ["parlate", "parli", "parlano", "parliamo"], "Con «voi» la terminación es -ate."),
        mc(1, "Completa: «Noi ___ a Roma.»", ["abitiamo", "abitate", "abitano", "abita"], "Con «noi», -iamo."),
        mc(1, "¿Qué forma de «essere» va con «loro»?", ["sono", "siamo", "siete", "è"], "loro sono (igual que io sono)."),
        tx(1, "Escribe en italiano: «Me llamo Ana.»", ["Mi chiamo Ana"], "mi chiamo."),
        mc(1, "¿Cómo se pregunta a un desconocido adulto cómo se llama?", ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?", "Come mi chiamo?"], "Con desconocidos se usa «Lei»: si chiama."),
        mc(1, "¿Cuál significa «él es»?", ["è", "e", "è'", "eh"], "«è» con tilde es el verbo."),
        tx(1, "Completa con «parlare»: «Tu ___ spagnolo?»", ["parli"], "tu parli.")] },
      d: { t: "Al corso d'italiano", l: [
        ["Giulia", "Ciao! Mi chiamo Giulia. E tu, come ti chiami?", "¡Hola! Me llamo Giulia. ¿Y tú cómo te llamas?"],
        ["Pablo", "Ciao, Giulia. Io sono Pablo.", "Hola, Giulia. Yo soy Pablo."],
        ["Giulia", "Sei francese?", "¿Eres francés?"],
        ["Pablo", "No, sono spagnolo. Abito a Valencia. E tu?", "No, soy español. Vivo en Valencia. ¿Y tú?"],
        ["Giulia", "Io sono svizzera, ma abito a Milano.", "Yo soy suiza, pero vivo en Milán."],
        ["Pablo", "Parli spagnolo?", "¿Hablas español?"],
        ["Giulia", "No, parlo italiano, tedesco e un po' di inglese.", "No, hablo italiano, alemán y un poco de inglés."],
        ["Pablo", "Non importa. Io studio l'italiano!", "No importa. ¡Yo estudio italiano!"]],
        q: [
          mc(1, "Pablo è…", ["spagnolo", "francese", "svizzero", "italiano"], "«No, sono spagnolo.»"),
          mc(1, "Dove abita Giulia?", ["A Milano", "A Valencia", "In Svizzera", "A Roma"], "«…ma abito a Milano.»"),
          mc(1, "Giulia parla spagnolo?", ["No", "Sì", "Un po'", "Molto bene"], "«No, parlo italiano, tedesco e un po' di inglese.»"),
          mc(1, "Che cosa studia Pablo?", ["L'italiano", "L'inglese", "Il tedesco", "Lo spagnolo"], "«Io studio l'italiano!»")] },
      w: { c: "Preséntate en tres o cuatro frases: cómo te llamas, de dónde eres, dónde vives y qué idiomas hablas.", m: "Ciao! Mi chiamo Marta. Sono spagnola e abito a Siviglia. Parlo spagnolo, inglese e un po' di italiano." } },

    { id: "ia1-2", t: "La famiglia e i numeri", es: "La familia y los números", v: [
      ["la famiglia", "la familia"], ["il padre", "el padre"], ["la madre", "la madre"], ["i genitori", "los padres"], ["il fratello", "el hermano"], ["la sorella", "la hermana"], ["il figlio", "el hijo"],
      ["la figlia", "la hija"], ["il bambino", "el niño"], ["il marito", "el marido"], ["la moglie", "la esposa"], ["il nonno", "el abuelo"], ["la nonna", "la abuela"], ["l'amico", "el amigo"],
      ["l'anno", "el año"], ["uno", "uno"], ["due", "dos"], ["tre", "tres"], ["quattro", "cuatro"], ["cinque", "cinco"], ["dieci", "diez"],
      ["venti", "veinte"], ["trenta", "treinta"], ["sessanta", "sesenta"], ["cento", "cien"], ["giovane", "joven"], ["anziano", "mayor, anciano"], ["avere", "tener"]],
      g: { t: "El verbo avere, el artículo y los posesivos", n: `
## El verbo avere (tener)
| io ho · tu hai · lui / lei ha · noi abbiamo · voi avete · loro hanno
La «h» no se pronuncia: sirve para distinguir «ho» (tengo) de «o» (o), «ha» de «a», «hanno» de «anno».
La edad: **Ho trent'anni.** (Tengo treinta años.)

## El artículo determinado
$ masculino: il (il fratello) · lo ante s+consonante, z, ps, gn (lo zio, lo studente) · l' ante vocal (l'amico)
$ masculino plural: i (i fratelli) · gli (gli zii, gli amici)
$ femenino: la (la sorella) · l' ante vocal (l'amica) · plural: le (le sorelle)

## El plural
- -o → **-i**: il figlio, i figli
- -a → **-e**: la sorella, le sorelle
- -e → **-i**: il padre, i padri · la madre, le madri

## Los posesivos
Llevan artículo y concuerdan con lo poseído:
$ il mio, la mia, i miei, le mie · il tuo, la tua, i tuoi, le tue · il suo, la sua, i suoi, le sue
$ il nostro · il vostro · il loro (invariable)
| la mia casa · i miei amici · il suo libro (de él o de ella)
> Con los familiares en singular y sin adjetivo, el artículo desaparece: **mia madre**, **tuo fratello**. Pero: **i miei** fratelli, **la mia** sorellina, **il loro** padre.
`, e: [
        mc(1, "Completa: «Io ___ due fratelli.»", ["ho", "hai", "ha", "hanno"], "io ho."),
        mc(1, "Completa: «Loro ___ tre figli.»", ["hanno", "anno", "avete", "ha"], "loro hanno (con h)."),
        mc(1, "Completa: «___ zio abita a Napoli.»", ["Lo", "Il", "La", "L'"], "Ante «z»: lo."),
        mc(1, "Completa: «Questa è ___ madre.»", ["mia", "la mia", "mio", "le mie"], "Familiar en singular: sin artículo."),
        tx(1, "Escribe en italiano: «Tengo veinte años.»", ["Ho vent'anni", "Ho venti anni"], "La edad con «avere»; venti + anni → vent'anni."),
        mc(1, "¿Cuál es el plural de «l'amico»?", ["gli amici", "i amici", "le amiche", "gli amico"], "Masculino que empieza por vocal: gli."),
        mc(1, "Completa: «Marco e Anna vivono con ___ genitori.»", ["i loro", "loro", "i suoi", "le loro"], "Varios poseedores: il loro / i loro, siempre con artículo."),
        tx(1, "Completa con «avere»: «Voi ___ figli?»", ["avete"], "voi avete.")] },
      d: { t: "Una foto di famiglia", l: [
        ["Sara", "Che cosa guardi, Marco?", "¿Qué miras, Marco?"],
        ["Marco", "Una foto della mia famiglia. Guarda: questi sono i miei genitori.", "Una foto de mi familia. Mira: estos son mis padres."],
        ["Sara", "E la ragazza è tua sorella?", "¿Y la chica es tu hermana?"],
        ["Marco", "Sì, si chiama Chiara. Ha diciannove anni e abita a Bologna.", "Sí, se llama Chiara. Tiene diecinueve años y vive en Bolonia."],
        ["Sara", "Hai anche un fratello?", "¿Tienes también un hermano?"],
        ["Marco", "No, ma ho un cane! E tu, hai fratelli?", "No, ¡pero tengo un perro! ¿Y tú, tienes hermanos?"],
        ["Sara", "Ho due fratelli. Hanno trenta e trentaquattro anni.", "Tengo dos hermanos. Tienen treinta y treinta y cuatro años."],
        ["Marco", "Abitano qui?", "¿Viven aquí?"],
        ["Sara", "No, abitano in Spagna con le loro famiglie.", "No, viven en España con sus familias."]],
        q: [
          mc(1, "Chi è Chiara?", ["La sorella di Marco", "La madre di Marco", "L'amica di Sara", "La figlia di Marco"], "«Sì, si chiama Chiara.»"),
          mc(1, "Quanti anni ha Chiara?", ["Diciannove", "Nove", "Trenta", "Ventinove"], "«Ha diciannove anni.»"),
          mc(1, "Quanti fratelli ha Sara?", ["Due", "Uno", "Tre", "Nessuno"], "«Ho due fratelli.»"),
          mc(1, "Dove abitano i fratelli di Sara?", ["In Spagna", "A Bologna", "In Italia", "A Milano"], "«…abitano in Spagna…»")] },
      w: { c: "Describe a tu familia en cuatro o cinco frases: quiénes son, cómo se llaman y cuántos años tienen.", m: "Nella mia famiglia siamo in quattro. Mio padre si chiama Luis e ha sessant'anni. Mia madre si chiama Carmen. Ho una sorella, Laura. Ha venticinque anni e abita a Madrid." } },

    { id: "ia1-3", t: "Mangiare e bere", es: "Comer y beber", v: [
      ["il pane", "el pan"], ["il formaggio", "el queso"], ["la carne", "la carne"], ["il pesce", "el pescado"], ["il pollo", "el pollo"], ["l'uovo", "el huevo"], ["la verdura", "la verdura"],
      ["la frutta", "la fruta"], ["la mela", "la manzana"], ["il riso", "el arroz"], ["la pasta", "la pasta"], ["lo zucchero", "el azúcar"], ["il sale", "la sal"], ["l'acqua", "el agua"],
      ["il latte", "la leche"], ["il caffè", "el café"], ["il tè", "el té"], ["il vino", "el vino"], ["il succo", "el zumo"], ["la colazione", "el desayuno"], ["il pranzo", "la comida (mediodía)"],
      ["la cena", "la cena"], ["mangiare", "comer"], ["bere", "beber"], ["prendere", "tomar, coger"], ["avere fame", "tener hambre"], ["avere sete", "tener sed"], ["il conto", "la cuenta"]],
      g: { t: "Verbos en -ere e -ire, el indeterminado y la negación", n: `
## Los verbos en -ere
| prendere: prendo, prendi, prende, prendiamo, prendete, prendono
| leggere: leggo, leggi, legge, leggiamo, leggete, leggono

## Los verbos en -ire
Dos modelos:
| dormire: dormo, dormi, dorme, dormiamo, dormite, dormono
| capire (con -isc-): capisco, capisci, capisce, capiamo, capite, capiscono
Como capire: finire, preferire, pulire.
> Irregular frecuente: **bere**: bevo, bevi, beve, beviamo, bevete, bevono.

## El artículo indeterminado
$ un (masculino): un panino, un amico · uno ante s+consonante y z: uno studente, uno zaino
$ una (femenino): una mela · un' ante vocal: un'amica, un'aranciata

## Una cantidad indeterminada
**del, della, dello, dei, delle…** (di + artículo) equivalen a «algo de» o «unos»:
| Vorrei del pane.      Compro delle mele.
A diferencia del francés, es opcional: «Compro mele» también es correcto.

## La negación
**non** delante del verbo: Non mangio carne. · Non bevo caffè.
Doble negación obligatoria: Non bevo **mai** vino. · Non mangio **niente**.
`, e: [
        mc(1, "Completa: «Io ___ un caffè.»", ["prendo", "prendi", "prende", "prendono"], "-ere: io -o."),
        mc(1, "Completa: «Loro ___ l'italiano.»", ["capiscono", "capono", "capiamo", "capisce"], "capire lleva -isc- en loro."),
        mc(1, "Completa: «Vorrei ___ aranciata.»", ["un'", "un", "una'", "uno"], "Femenino ante vocal: un'."),
        mc(1, "Completa: «C'è ___ studente nuovo.»", ["uno", "un", "una", "un'"], "Ante s+consonante: uno."),
        tx(1, "Pon en negativo: «Mangio carne.»", ["Non mangio carne"], "non + verbo."),
        mc(1, "Completa: «Non bevo ___ alcol.»", ["mai", "non", "nessuno", "niente mai"], "Doble negación: non … mai."),
        mc(1, "Completa con «bere»: «Noi ___ acqua.»", ["beviamo", "beriamo", "bebiamo", "bevono"], "bere → bev-: beviamo."),
        tx(1, "Completa con «dormire»: «Tu ___ molto.»", ["dormi"], "tu dormi.")] },
      d: { t: "Al ristorante", l: [
        ["Cameriere", "Buonasera, signori. Avete scelto?", "Buenas noches, señores. ¿Han elegido?"],
        ["Cliente", "Sì. Io prendo il pollo con le verdure, per favore.", "Sí. Yo tomo el pollo con verduras, por favor."],
        ["Cliente 2", "E per me il pesce con il riso.", "Y para mí el pescado con arroz."],
        ["Cameriere", "Benissimo. E da bere?", "Muy bien. ¿Y para beber?"],
        ["Cliente", "Una bottiglia d'acqua naturale e un bicchiere di vino rosso.", "Una botella de agua sin gas y una copa de vino tinto."],
        ["Cliente 2", "Io non bevo vino. Un succo di mela, per favore.", "Yo no bebo vino. Un zumo de manzana, por favor."],
        ["Cameriere", "Prendete il dolce?", "¿Toman postre?"],
        ["Cliente", "No, grazie, ma due caffè e il conto, per favore.", "No, gracias, pero dos cafés y la cuenta, por favor."]],
        q: [
          mc(1, "Che cosa mangia la prima cliente?", ["Pollo con verdure", "Pesce con riso", "Pasta", "Un'insalata"], "«Io prendo il pollo con le verdure.»"),
          mc(1, "Chi non beve vino?", ["Il secondo cliente", "La prima cliente", "Il cameriere", "Nessuno"], "«Io non bevo vino.»"),
          mc(1, "Prendono il dolce?", ["No", "Sì, due", "Sì, uno", "Solo la cliente"], "«No, grazie…»"),
          mc(1, "Che cosa chiedono alla fine?", ["Due caffè e il conto", "Un tè", "Del pane", "Un'altra bottiglia"], "«…due caffè e il conto.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué comes y bebes en el desayuno y en la cena, y algo que no te gusta.", m: "La mattina prendo un caffè con il latte e mangio pane con marmellata. A pranzo mangio spesso la pasta. La sera preferisco il pesce con le verdure. Bevo molta acqua. Non bevo mai il tè." } },

    { id: "ia1-4", t: "La giornata e l'ora", es: "El día y la hora", v: [
      ["la mattina", "la mañana"], ["il pomeriggio", "la tarde"], ["la sera", "la tarde-noche"], ["la notte", "la noche"], ["oggi", "hoy"], ["domani", "mañana"], ["la settimana", "la semana"],
      ["lunedì", "lunes"], ["martedì", "martes"], ["mercoledì", "miércoles"], ["giovedì", "jueves"], ["venerdì", "viernes"], ["sabato", "sábado"], ["domenica", "domingo"],
      ["l'ora", "la hora"], ["alzarsi", "levantarse"], ["fare la doccia", "ducharse"], ["vestirsi", "vestirse"], ["andare a letto", "acostarse"], ["lavorare", "trabajar"], ["cominciare", "empezar"],
      ["finire", "terminar"], ["andare", "ir"], ["fare", "hacer"], ["presto", "temprano; pronto"], ["tardi", "tarde"], ["sempre", "siempre"], ["spesso", "a menudo"]],
      g: { t: "Verbos reflexivos, andare, fare y la hora", n: `
## Los verbos reflexivos
| alzarsi: mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano
| vestirsi: mi vesto, ti vesti, si veste, ci vestiamo, vi vestite, si vestono
En negativo: Non **mi** alzo presto.

## Irregulares imprescindibles
| andare: vado, vai, va, andiamo, andate, vanno
| fare: faccio, fai, fa, facciamo, fate, fanno
| venire: vengo, vieni, viene, veniamo, venite, vengono
| uscire: esco, esci, esce, usciamo, uscite, escono

## La hora
| Che ora è? / Che ore sono?  –  Sono le otto.  ·  È l'una.  ·  È mezzogiorno.  ·  È mezzanotte.
| 8:15 le otto e un quarto · 8:30 le otto e mezza · 8:45 le nove meno un quarto
A qué hora: **alle** otto, **all'**una, **a** mezzogiorno.

## Los días
- **lunedì** = este lunes; **il lunedì** = todos los lunes.
- Los días no llevan mayúscula y casi todos tienen tilde: lunedì… venerdì.
> Ir a un lugar: **a** casa, **a** scuola, **a** letto; **in** ufficio, **in** banca, **in** palestra.
`, e: [
        mc(1, "Completa: «Io ___ alzo alle sette.»", ["mi", "si", "ti", "ci"], "io mi alzo."),
        mc(1, "Completa: «Noi ___ al cinema.»", ["andiamo", "andate", "vanno", "andamo"], "noi andiamo."),
        mc(1, "Completa: «Che cosa ___ voi il sabato?»", ["fate", "facete", "fanno", "facciamo"], "Irregular: voi fate."),
        mc(1, "Completa: «Comincio a lavorare ___ nove.»", ["alle", "a le", "le", "in"], "a + le = alle."),
        tx(1, "Escribe la hora 8:30: «Sono le otto e ___.»", ["mezza", "mezzo"], "e mezza = y media."),
        mc(1, "«Il lunedì lavoro» significa…", ["Todos los lunes trabajo", "Este lunes trabajo", "El lunes pasado trabajé", "Solo un lunes"], "Con artículo: costumbre."),
        mc(1, "Completa: «Vado ___ ufficio in autobus.»", ["in", "a", "al", "nel"], "in ufficio, in banca."),
        tx(1, "Completa con «andare»: «Loro ___ a scuola.»", ["vanno"], "loro vanno.")] },
      d: { t: "Una giornata di Elena", l: [
        ["Text", "Elena è infermiera a Torino. Si alza presto, alle sei.", "Elena es enfermera en Turín. Se levanta temprano, a las seis."],
        ["Text", "Fa la doccia, si veste e prende un caffè al bar sotto casa.", "Se ducha, se viste y se toma un café en el bar de debajo de casa."],
        ["Text", "Alle sette meno un quarto va in ospedale in bicicletta. Comincia a lavorare alle sette.", "A las siete menos cuarto va al hospital en bici. Empieza a trabajar a las siete."],
        ["Text", "A mezzogiorno pranza con i colleghi. Finisce alle tre del pomeriggio.", "A mediodía come con sus compañeros. Termina a las tres de la tarde."],
        ["Text", "Il pomeriggio va in palestra o fa la spesa. Il martedì ha lezione di spagnolo.", "Por la tarde va al gimnasio o hace la compra. Los martes tiene clase de español."],
        ["Text", "La sera guarda un film e va a letto alle dieci.", "Por la noche ve una película y se acuesta a las diez."]],
        q: [
          mc(1, "A che ora si alza Elena?", ["Alle sei", "Alle sette", "Alle dieci", "A mezzogiorno"], "«Si alza presto, alle sei.»"),
          mc(1, "Come va in ospedale?", ["In bicicletta", "In autobus", "In macchina", "A piedi"], "«…va in ospedale in bicicletta.»"),
          mc(1, "Che cosa fa il martedì?", ["Ha lezione di spagnolo.", "Va in palestra.", "Fa la spesa.", "Non lavora."], "«Il martedì ha lezione di spagnolo.»"),
          mc(1, "A che ora va a letto?", ["Alle dieci", "A mezzanotte", "Alle nove", "Alle undici"], "«…va a letto alle dieci.»")] },
      w: { c: "Describe un día normal tuyo en cinco frases, con horas y al menos tres verbos reflexivos.", m: "Mi alzo alle sette e mezza. Faccio la doccia, mi vesto e faccio colazione. Comincio a lavorare alle nove e finisco alle cinque. La sera vado in palestra o guardo una serie. Vado a letto alle undici." } },

    { id: "ia1-5", t: "La casa", es: "La casa", v: [
      ["la casa", "la casa"], ["l'appartamento", "el piso"], ["la stanza", "la habitación"], ["la camera da letto", "el dormitorio"], ["il soggiorno", "el salón"], ["la cucina", "la cocina"], ["il bagno", "el baño"],
      ["il giardino", "el jardín"], ["il balcone", "el balcón"], ["la porta", "la puerta"], ["la finestra", "la ventana"], ["il letto", "la cama"], ["il tavolo", "la mesa"], ["la sedia", "la silla"],
      ["il divano", "el sofá"], ["l'armadio", "el armario"], ["l'affitto", "el alquiler"], ["grande", "grande"], ["piccolo", "pequeño"], ["bello", "bonito"], ["nuovo", "nuevo"],
      ["tranquillo", "tranquilo"], ["caro", "caro"], ["in", "en"], ["su", "sobre"], ["sotto", "debajo de"], ["accanto a", "al lado de"], ["c'è", "hay (singular)"]],
      g: { t: "C'è, ci sono, preposiciones articuladas y adjetivos", n: `
## C'è y ci sono
**c'è** + singular, **ci sono** + plural: «C'è un divano. Ci sono due camere.»
Negativo: **Non c'è** il giardino. · **Non ci sono** sedie.

## Las preposiciones articuladas
Las preposiciones di, a, da, in, su se unen al artículo:
$ di: del, dello, della, dei, degli, delle
$ a: al, allo, alla, ai, agli, alle
$ da: dal, dallo, dalla, dai, dagli, dalle
$ in: nel, nello, nella, nei, negli, nelle
$ su: sul, sullo, sulla, sui, sugli, sulle
| Il libro è sul tavolo.     Le chiavi sono nella borsa.     La sedia è accanto alla finestra.

## Los adjetivos
Concuerdan con el sustantivo y casi siempre van detrás:
| -o: piccolo, piccola, piccoli, piccole
| -e: grande, grande, grandi, grandi
| un appartamento tranquillo · una cucina grande · delle stanze luminose
**bello** y **buono** delante del sustantivo cambian como el artículo:
| un bel giardino · un bello studio · un bell'appartamento · dei bei mobili · una bella casa
`, e: [
        mc(1, "Completa: «Nel soggiorno ___ due divani.»", ["ci sono", "c'è", "è", "sono"], "Plural: ci sono."),
        mc(1, "Completa: «Il gatto è ___ letto.»", ["sul", "su il", "sullo", "sulla"], "su + il = sul."),
        mc(1, "Completa: «Le chiavi sono ___ borsa.»", ["nella", "nel", "in la", "nello"], "in + la = nella."),
        mc(1, "Completa: «È una cucina ___.»", ["grande", "granda", "grandi", "grando"], "Adjetivo en -e: igual en masculino y femenino singular."),
        tx(1, "Pon en negativo: «C'è il giardino.»", ["Non c'è il giardino"], "non c'è."),
        mc(1, "Completa: «Abbiamo un ___ appartamento.»", ["bell'", "bello", "bel", "bella"], "bello delante de vocal: bell'."),
        mc(1, "Completa: «La sedia è accanto ___ finestra.»", ["alla", "a la", "della", "nella"], "accanto a + la = alla."),
        tx(1, "Completa: «Il cane dorme ___ tavolo.» (debajo de)", ["sotto il", "sotto al"], "sotto + artículo.")] },
      d: { t: "Il nuovo appartamento", l: [
        ["Luca", "Allora, com'è il tuo nuovo appartamento?", "Bueno, ¿qué tal tu piso nuevo?"],
        ["Sara", "È piccolo, ma molto tranquillo. Ci sono due stanze: un soggiorno e una camera.", "Es pequeño, pero muy tranquilo. Hay dos habitaciones: un salón y un dormitorio."],
        ["Luca", "E la cucina?", "¿Y la cocina?"],
        ["Sara", "È nel soggiorno. C'è una grande finestra, è molto luminoso.", "Está en el salón. Hay una ventana grande; es muy luminoso."],
        ["Luca", "Hai un giardino?", "¿Tienes jardín?"],
        ["Sara", "No, non c'è il giardino, ma c'è un piccolo balcone.", "No, no hay jardín, pero hay un balconcito."],
        ["Luca", "E l'affitto è caro?", "¿Y el alquiler es caro?"],
        ["Sara", "Seicento euro. Per il centro non è caro!", "Seiscientos euros. ¡Para el centro no es caro!"],
        ["Luca", "Ed è vicino al lavoro?", "¿Y está cerca del trabajo?"],
        ["Sara", "Sì, proprio davanti alla stazione, a dieci minuti a piedi.", "Sí, justo delante de la estación, a diez minutos andando."]],
        q: [
          mc(1, "Quante stanze ci sono?", ["Due", "Una", "Tre", "Quattro"], "«Ci sono due stanze.»"),
          mc(1, "Dov'è la cucina?", ["Nel soggiorno", "Nella camera", "Sul balcone", "Accanto al bagno"], "«È nel soggiorno.»"),
          mc(1, "C'è un giardino?", ["No, ma c'è un balcone.", "Sì, grande.", "Sì, piccolo.", "No, e neanche un balcone."], "«…non c'è il giardino, ma c'è un piccolo balcone.»"),
          mc(1, "Dove si trova l'appartamento?", ["Davanti alla stazione", "Lontano dal centro", "Accanto a un parco", "Vicino al mare"], "«…proprio davanti alla stazione.»")] },
      w: { c: "Describe tu casa o tu habitación en cinco frases: qué cuartos y muebles hay, cómo son y dónde están.", m: "Abito in un piccolo appartamento in centro. Ci sono tre stanze: un soggiorno, una camera e una cucina. Nel soggiorno c'è un divano grande e un tavolo bianco. La mia camera è tranquilla. Non c'è il giardino, ma c'è un bel balcone." } },

    { id: "ia1-6", t: "In città", es: "En la ciudad", v: [
      ["la strada", "la calle, la carretera"], ["la via", "la calle (en direcciones)"], ["la piazza", "la plaza"], ["la stazione", "la estación"], ["la fermata", "la parada"], ["la metropolitana", "el metro"], ["l'autobus", "el autobús"],
      ["il treno", "el tren"], ["la macchina", "el coche"], ["la bicicletta", "la bici"], ["a piedi", "andando"], ["il biglietto", "el billete"], ["la banca", "el banco"], ["la posta", "correos"],
      ["la farmacia", "la farmacia"], ["il forno", "la panadería"], ["il supermercato", "el supermercado"], ["il museo", "el museo"], ["la chiesa", "la iglesia"], ["il ponte", "el puente"], ["dritto", "recto"],
      ["a sinistra", "a la izquierda"], ["a destra", "a la derecha"], ["girare", "girar"], ["attraversare", "cruzar"], ["vicino", "cerca"], ["lontano", "lejos"], ["scusi", "disculpe"]],
      g: { t: "Preposiciones de lugar y el imperativo", n: `
## ¿a o in?
- **a** + ciudad: a Roma, a Milano. Y en: a casa, a scuola, a teatro.
- **in** + país o región: in Italia, in Spagna, in Toscana. Y en: in banca, in farmacia, in centro, in ufficio.
- **da** + persona: vado **da** Marco (a casa de Marco), **dal** medico (al médico).

## Los medios de transporte
**in** + vehículo: in treno, in macchina, in autobus, in bici. Pero: **a piedi**.

## El imperativo de tu
- -are → **-a**: gira! attraversa!
- -ere / -ire → **-i**: prendi! senti!
Negativo: **non** + infinitivo → Non girare! Non prendere l'autobus!

## El imperativo de Lei (cortesía)
Para dar indicaciones a un desconocido:
- -are → **-i**: giri, attraversi, continui
- -ere / -ire → **-a**: prenda, senta, scusi (de scusare → scusi)
| Scusi, per la stazione? – Vada dritto, poi giri a sinistra e prenda la seconda strada a destra.
> Irregulares: andare → vada · fare → faccia · venire → venga · essere → sia.
`, e: [
        mc(1, "Completa: «Abito ___ Roma.»", ["a", "in", "da", "al"], "Ciudad: a."),
        mc(1, "Completa: «Vado ___ Spagna in estate.»", ["in", "a", "nella", "da"], "País: in."),
        mc(1, "Completa: «Stasera vado ___ Marco.»", ["da", "a", "in", "di"], "A casa de alguien: da."),
        mc(1, "Imperativo de «girare» para «tu»:", ["Gira!", "Giri!", "Girare!", "Girate!"], "-are → -a."),
        tx(1, "Imperativo negativo de «prendere» para «tu»: «Non ___ l'autobus!»", ["prendere"], "Non + infinitivo."),
        mc(1, "Para decir a un desconocido «Gire a la izquierda»:", ["Giri a sinistra.", "Gira a sinistra.", "Girate a sinistra.", "Girare a sinistra."], "Imperativo de Lei: -are → -i."),
        mc(1, "Completa: «Vado al lavoro ___ piedi.»", ["a", "in", "con", "da"], "a piedi."),
        tx(1, "Imperativo de Lei de «andare»: «___ dritto.»", ["Vada"], "Irregular: vada.")] },
      d: { t: "Per la stazione?", l: [
        ["Turista", "Scusi, signora. Per andare alla stazione, per favore?", "Disculpe, señora. ¿Para ir a la estación, por favor?"],
        ["Signora", "È facile. Vada dritto fino alla piazza.", "Es fácil. Siga recto hasta la plaza."],
        ["Turista", "Va bene. E poi?", "Vale. ¿Y luego?"],
        ["Signora", "In piazza giri a sinistra e attraversi il ponte.", "En la plaza gire a la izquierda y cruce el puente."],
        ["Turista", "È lontano?", "¿Está lejos?"],
        ["Signora", "No, sono dieci minuti a piedi. La stazione è davanti alla posta.", "No, son diez minutos andando. La estación está delante de correos."],
        ["Turista", "C'è un autobus?", "¿Hay autobús?"],
        ["Signora", "Sì, il numero 4. La fermata è proprio accanto alla farmacia.", "Sí, el número 4. La parada está justo al lado de la farmacia."],
        ["Turista", "Grazie mille, signora!", "¡Muchísimas gracias, señora!"],
        ["Signora", "Prego. Buona giornata!", "De nada. ¡Buen día!"]],
        q: [
          mc(1, "Dove vuole andare il turista?", ["Alla stazione", "Alla posta", "Al museo", "In farmacia"], "«Per andare alla stazione…»"),
          mc(1, "Che cosa deve fare in piazza?", ["Girare a sinistra", "Girare a destra", "Andare dritto", "Prendere la metro"], "«In piazza giri a sinistra…»"),
          mc(1, "La stazione è…", ["davanti alla posta.", "accanto alla farmacia.", "in piazza.", "sotto il ponte."], "«…davanti alla posta.»"),
          mc(1, "Quale autobus va alla stazione?", ["Il numero 4", "Il numero 14", "Il numero 10", "Non c'è un autobus."], "«Sì, il numero 4.»")] },
      w: { c: "Un turista te pregunta cómo llegar a la farmacia. Escríbele las indicaciones (con «Lei») en tres o cuatro frases.", m: "Vada dritto fino alla banca. Poi giri a destra e attraversi la piazza. La farmacia è accanto al forno. Non è lontano: cinque minuti a piedi." } },

    { id: "ia1-7", t: "La salute e gli appuntamenti", es: "La salud y las citas", v: [
      ["il medico", "el médico"], ["l'appuntamento", "la cita"], ["lo studio medico", "la consulta"], ["l'ospedale", "el hospital"], ["malato", "enfermo"], ["in forma", "en forma"], ["la testa", "la cabeza"],
      ["la pancia", "la barriga"], ["la schiena", "la espalda"], ["la gola", "la garganta"], ["la gamba", "la pierna"], ["il braccio", "el brazo"], ["la mano", "la mano"], ["il piede", "el pie"],
      ["fare male", "doler"], ["la febbre", "la fiebre"], ["il raffreddore", "el resfriado"], ["la tosse", "la tos"], ["la medicina", "el medicamento"], ["la pastiglia", "la pastilla"], ["la ricetta", "la receta"],
      ["restare", "quedarse"], ["avere bisogno di", "necesitar"], ["aiutare", "ayudar"], ["stanco", "cansado"], ["potere", "poder"], ["dovere", "deber, tener que"], ["volere", "querer"]],
      g: { t: "Potere, volere, dovere y mi fa male", n: `
## Los verbos modales
Van seguidos de un infinitivo:
| potere: posso, puoi, può, possiamo, potete, possono
| volere: voglio, vuoi, vuole, vogliamo, volete, vogliono
| dovere: devo, devi, deve, dobbiamo, dovete, devono
| Devo restare a letto.      Può aiutarmi?      Voglio vedere un medico.

## Pedir con educación: vorrei
«Voglio» suena brusco. Para pedir: **vorrei** (querría).
| Vorrei un appuntamento, per favore.

## Bisogna
Impersonal, «hay que»: **Bisogna** bere molta acqua.

## Decir qué duele
Funciona como «gustar» en español: lo que duele es el sujeto.
| Mi fa male la testa.          Me duele la cabeza.
| Mi fanno male i piedi.        Me duelen los pies.
También: **Ho mal di** testa, mal di gola, mal di pancia.
> Plurales irregulares del cuerpo: il braccio → le braccia · la mano → le mani · il dito → le dita · il ginocchio → le ginocchia.
`, e: [
        mc(1, "Completa: «Oggi non ___ lavorare, sono malata.»", ["posso", "può", "potete", "possono"], "io posso."),
        mc(1, "Completa: «Voi ___ bere molta acqua.»", ["dovete", "devi", "devono", "dobbiamo"], "voi dovete."),
        mc(1, "Completa: «Mi ___ male i piedi.»", ["fanno", "fa", "faccio", "fate"], "El sujeto es «i piedi», plural: fanno."),
        mc(1, "Completa: «Ho mal ___ gola.»", ["di", "la", "a", "della"], "avere mal di + parte del cuerpo."),
        tx(1, "Completa con «volere»: «Loro ___ vedere il medico.»", ["vogliono"], "loro vogliono."),
        mc(1, "Para pedir una cita con educación se dice…", ["Vorrei un appuntamento.", "Voglio un appuntamento.", "Devo un appuntamento.", "Posso un appuntamento."], "vorrei = querría."),
        mc(1, "¿Cuál es el plural de «la mano»?", ["le mani", "le mane", "i mani", "le mano"], "Irregular: le mani."),
        tx(1, "Completa: «Mi fa male la ___.» (espalda)", ["schiena"], "la schiena.")] },
      d: { t: "Dal medico", l: [
        ["Medico", "Buongiorno, signor Soler. Che cosa c'è?", "Buenos días, señor Soler. ¿Qué le pasa?"],
        ["Sig. Soler", "Buongiorno, dottoressa. Ho mal di gola da tre giorni e ho molta tosse.", "Buenos días, doctora. Me duele la garganta desde hace tres días y tengo mucha tos."],
        ["Medico", "Ha la febbre?", "¿Tiene fiebre?"],
        ["Sig. Soler", "Sì, un po'. E mi fa male la testa.", "Sí, un poco. Y me duele la cabeza."],
        ["Medico", "È un brutto raffreddore. Deve restare a letto e bisogna bere molto.", "Es un buen resfriado. Tiene que quedarse en cama y hay que beber mucho."],
        ["Sig. Soler", "Posso lavorare domani?", "¿Puedo trabajar mañana?"],
        ["Medico", "No, questa settimana non può lavorare. Ecco la ricetta.", "No, esta semana no puede trabajar. Aquí tiene la receta."],
        ["Sig. Soler", "Grazie, dottoressa. Dov'è la farmacia più vicina?", "Gracias, doctora. ¿Dónde está la farmacia más cercana?"],
        ["Medico", "Proprio accanto allo studio. Si riguardi!", "Justo al lado de la consulta. ¡Cuídese!"]],
        q: [
          mc(1, "Che cosa ha il signor Soler?", ["Mal di gola e mal di testa", "Mal di pancia", "Mal di schiena", "Una gamba rotta"], "Garganta, tos y cabeza."),
          mc(1, "Che cosa deve fare?", ["Restare a letto e bere molto", "Fare sport", "Andare in ospedale", "Lavorare di meno"], "«Deve restare a letto e bisogna bere molto.»"),
          mc(1, "Può lavorare questa settimana?", ["No", "Sì", "Solo domani", "Solo la mattina"], "«…questa settimana non può lavorare.»"),
          mc(1, "Dov'è la farmacia?", ["Accanto allo studio", "Davanti alla stazione", "In ospedale", "Lontano"], "«Proprio accanto allo studio.»")] },
      w: { c: "Estás enfermo y no puedes ir a clase. Escribe un mensaje a tu profesora: qué te pasa, qué tienes que hacer y cuándo puedes volver.", m: "Gentile professoressa Rossi,\nsono malata. Ho la febbre e mi fa male la testa. Oggi devo restare a letto e non posso venire a lezione. Posso tornare lunedì.\nCordiali saluti,\nMarta" } },

    { id: "ia1-8", t: "Il tempo libero e il fine settimana", es: "El tiempo libre y el fin de semana", v: [
      ["il fine settimana", "el fin de semana"], ["ieri", "ayer"], ["la settimana scorsa", "la semana pasada"], ["il tempo libero", "el tiempo libre"], ["lo sport", "el deporte"], ["giocare a calcio", "jugar al fútbol"], ["nuotare", "nadar"],
      ["fare una passeggiata", "dar un paseo"], ["ballare", "bailar"], ["leggere", "leer"], ["il libro", "el libro"], ["il film", "la película"], ["il cinema", "el cine"], ["la musica", "la música"],
      ["il concerto", "el concierto"], ["incontrare", "encontrarse con"], ["andare a trovare", "visitar (a alguien)"], ["viaggiare", "viajar"], ["le vacanze", "las vacaciones"], ["il mare", "el mar"], ["la montagna", "la montaña"],
      ["uscire", "salir"], ["tornare", "volver"], ["vedere", "ver"], ["noioso", "aburrido"], ["bellissimo", "precioso, estupendo"], ["insieme", "juntos"], ["con", "con"]],
      g: { t: "El passato prossimo", n: `
## Para qué sirve
Es el pasado más usado al hablar: equivale a «he hecho» y a «hice».
Se forma con **avere** o **essere** en presente + **participio**.
| Ho visto un film.            Vi una película.
| Siamo andati al mare.        Fuimos al mar.

## El participio
- -are → **-ato**: parlare: parlato · andare: andato
- -ere → **-uto**: avere: avuto · potere: potuto · vendere: venduto
- -ire → **-ito**: dormire: dormito · uscire: uscito
- Irregulares muy frecuentes: fare: fatto · vedere: visto · leggere: letto · scrivere: scritto · prendere: preso · bere: bevuto · essere: stato · venire: venuto · mettere: messo · aprire: aperto · rimanere: rimasto

## ¿avere o essere?
Casi todos llevan **avere**. Llevan **essere**:
- los verbos de movimiento y cambio de estado sin objeto directo: andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire, diventare…
- el verbo **essere** y **stare**: sono stato.
- todos los reflexivos: mi sono alzato.
Con **essere**, el participio concuerda con el sujeto: Marco è andat**o** · Giulia è andat**a** · Siamo andat**i** · Le ragazze sono andat**e**.

## La negación
**non** va delante del auxiliar: Non ho visto il film. · Non sono uscita.
`, e: [
        mc(1, "Completa: «Ieri ___ visto un film.»", ["ho", "sono", "ha", "è"], "«vedere» lleva avere."),
        mc(1, "Completa: «Noi ___ andati a Napoli.»", ["siamo", "abbiamo", "siete", "hanno"], "«andare» lleva essere."),
        mc(1, "¿Cuál es el participio de «fare»?", ["fatto", "fato", "faciuto", "fatuto"], "Irregular: fatto."),
        mc(1, "Completa: «Giulia è ___ alle otto.»", ["uscita", "uscito", "usciti", "uscite"], "Con essere concuerda: femenino → uscita."),
        tx(1, "Escribe el participio de «mangiare».", ["mangiato"], "-are → -ato."),
        mc(1, "Pon en negativo: «Ho letto il libro.»", ["Non ho letto il libro.", "Ho non letto il libro.", "Ho letto non il libro.", "Non letto ho il libro."], "non delante del auxiliar."),
        mc(1, "Completa: «Domenica mi ___ alzata tardi.»", ["sono", "ho", "è", "sei"], "Reflexivo: essere."),
        tx(1, "Escribe el participio de «leggere».", ["letto"], "Irregular: letto.")] },
      d: { t: "Com'è andato il fine settimana?", l: [
        ["Paolo", "Ciao, Carla! Hai passato un bel fine settimana?", "¡Hola, Carla! ¿Has pasado un buen fin de semana?"],
        ["Carla", "Sì, bellissimo! Sabato sono andata in montagna con degli amici.", "¡Sí, estupendo! El sábado fui a la montaña con unos amigos."],
        ["Paolo", "Che bello! Che cosa avete fatto?", "¡Qué bien! ¿Qué hicisteis?"],
        ["Carla", "Abbiamo camminato per quattro ore e abbiamo fatto un picnic.", "Caminamos cuatro horas e hicimos un pícnic."],
        ["Paolo", "E domenica?", "¿Y el domingo?"],
        ["Carla", "Domenica sono rimasta a casa e ho letto un libro. E tu?", "El domingo me quedé en casa y leí un libro. ¿Y tú?"],
        ["Paolo", "Io sabato ho lavorato. Ma la sera sono uscito: ho visto un film al cinema.", "Yo trabajé el sábado. Pero por la noche salí: vi una película en el cine."],
        ["Carla", "Ti è piaciuto?", "¿Te gustó?"],
        ["Paolo", "No, era un po' noioso. Il prossimo fine settimana vado a un concerto.", "No, era un poco aburrida. El próximo fin de semana voy a un concierto."]],
        q: [
          mc(1, "Dov'è andata Carla sabato?", ["In montagna", "Al mare", "Al cinema", "A Roma"], "«…sono andata in montagna con degli amici.»"),
          mc(1, "Che cosa ha fatto Carla domenica?", ["Ha letto un libro.", "Ha camminato.", "Ha lavorato.", "È andata al cinema."], "«…sono rimasta a casa e ho letto un libro.»"),
          mc(1, "Che cosa ha fatto Paolo sabato?", ["Ha lavorato.", "Ha fatto un picnic.", "È rimasto a casa.", "Ha letto."], "«Io sabato ho lavorato.»"),
          mc(1, "Com'era il film?", ["Un po' noioso", "Bellissimo", "Molto divertente", "Troppo lungo"], "«…era un po' noioso.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué hiciste el fin de semana pasado y qué vas a hacer el próximo.", m: "Sabato ho dormito fino a tardi. Poi sono andata in centro e ho incontrato un'amica. Abbiamo preso un caffè insieme. Domenica sono rimasta a casa e ho guardato un film. Il prossimo fine settimana vado a trovare i miei genitori." } },
  ] },
];
