// Curso de catalán por niveles (Marco Común Europeo). Mismo formato que curso_aleman.js:
//   v: vocabulario [catalán, español] · g: gramática {t, n: apuntes, e: ejercicios}
//   d: diálogo o texto {t, l: [[quién, catalán, español], …], q: preguntas} · w: tarea de escritura {c: consigna, m: modelo}
// Las cadenas van entre comillas dobles por los apóstrofos del catalán. Las explicaciones comparan con el castellano.
window.CURSO = window.CURSO || {};
CURSO.catalan = [
  { id: "A1", nombre: "A1 · Inicial", desc: "Presentarse, hacer preguntas sencillas y desenvolverse en situaciones cotidianas muy básicas.", u: [
    { id: "ca1-1", t: "Presentar-se", es: "Presentarse", v: [
      ["hola", "hola"], ["bon dia", "buenos días"], ["bona tarda", "buenas tardes"], ["bona nit", "buenas noches"], ["adéu", "adiós"], ["fins aviat", "hasta pronto"], ["gràcies", "gracias"],
      ["si us plau", "por favor"], ["jo", "yo"], ["tu", "tú"], ["vostè", "usted"], ["el nom", "el nombre"], ["el cognom", "el apellido"], ["dir-se", "llamarse"],
      ["viure", "vivir"], ["parlar", "hablar"], ["el país", "el país"], ["la ciutat", "la ciudad"], ["la llengua", "la lengua"], ["el català", "el catalán"], ["el castellà", "el castellano"],
      ["com", "cómo"], ["on", "dónde"], ["d'on", "de dónde"], ["sí", "sí"], ["no", "no"], ["molt de gust", "encantado"], ["una mica", "un poco"]],
      g: { t: "Pronombres, ser y verbos en -ar", n: `
## Los pronombres personales
- **jo**, **tu**, **ell / ella**, **vostè** (usted)
- **nosaltres**, **vosaltres**, **ells / elles**, **vostès** (ustedes)
> Como en castellano, el pronombre se suele omitir: «Parlo català».

## tu y vostè
**vostè** se usa con desconocidos y en situaciones formales; se conjuga en tercera persona: «Vostè com es diu?». En Cataluña el tuteo es muy frecuente, incluso con desconocidos jóvenes.

## El verbo ser
| jo sóc · tu ets · ell / ella / vostè és · nosaltres som · vosaltres sou · ells / elles / vostès són
> Desde la reforma ortográfica de 2016 también se acepta «soc» sin tilde; las dos formas son correctas.

## Los verbos en -ar
Se quita -ar y se añade:
$ jo -o · tu -es · ell -a · nosaltres -em · vosaltres -eu · ells -en
| parlar: parlo, parles, parla, parlem, parleu, parlen
| treballar: treballo, treballes, treballa, treballem, treballeu, treballen
> Fíjate en «nosaltres parlem» y «vosaltres parleu»: muy distintos del castellano.

## dir-se (llamarse) y viure (vivir)
| em dic, et dius, es diu, ens diem, us dieu, es diuen
| visc, vius, viu, vivim, viviu, viuen

## Preguntar
| Com et dius? / Com es diu?         ¿Cómo te llamas? / ¿Cómo se llama?
| D'on ets? · On vius?               ¿De dónde eres? · ¿Dónde vives?
`, e: [
        mc(1, "Completa: «Jo ___ de Madrid.»", ["sóc", "ets", "és", "som"], "jo sóc (o soc)."),
        mc(1, "Completa: «Vosaltres ___ català?»", ["parleu", "parlem", "parlen", "parles"], "vosaltres -eu."),
        mc(1, "Completa: «Nosaltres ___ a Girona.»", ["vivim", "viviu", "viuen", "visc"], "nosaltres vivim."),
        mc(1, "¿Qué forma de «ser» va con «ells»?", ["són", "som", "sou", "és"], "ells són."),
        tx(1, "Escribe en catalán: «Me llamo Ana.»", ["Em dic Ana"], "em dic."),
        mc(1, "¿Cómo se pregunta a un desconocido mayor cómo se llama?", ["Com es diu?", "Com et dius?", "Com us dieu?", "Com em dic?"], "Con «vostè»: es diu."),
        mc(1, "¿Cuál es la primera persona de «viure»?", ["visc", "viu", "vivo", "vius"], "Irregular: jo visc."),
        tx(1, "Completa con «parlar»: «Tu ___ anglès?»", ["parles"], "tu parles.")] },
      d: { t: "Al curs de català", l: [
        ["Laia", "Hola! Em dic Laia. I tu, com et dius?", "¡Hola! Me llamo Laia. ¿Y tú cómo te llamas?"],
        ["Pablo", "Hola, Laia. Jo sóc en Pablo.", "Hola, Laia. Yo soy Pablo."],
        ["Laia", "Ets italià?", "¿Eres italiano?"],
        ["Pablo", "No, sóc de Sevilla, però ara visc a Barcelona. I tu?", "No, soy de Sevilla, pero ahora vivo en Barcelona. ¿Y tú?"],
        ["Laia", "Jo sóc de Vic, però treballo a Girona.", "Yo soy de Vic, pero trabajo en Girona."],
        ["Pablo", "Parles anglès?", "¿Hablas inglés?"],
        ["Laia", "Sí, una mica. Parlo català, castellà i una mica d'anglès.", "Sí, un poco. Hablo catalán, castellano y un poco de inglés."],
        ["Pablo", "Jo estudio català perquè el necessito per a la feina.", "Yo estudio catalán porque lo necesito para el trabajo."]],
        q: [
          mc(1, "D'on és en Pablo?", ["De Sevilla", "De Barcelona", "D'Itàlia", "De Vic"], "«No, sóc de Sevilla…»"),
          mc(1, "On viu en Pablo ara?", ["A Barcelona", "A Sevilla", "A Girona", "A Vic"], "«…però ara visc a Barcelona.»"),
          mc(1, "On treballa la Laia?", ["A Girona", "A Vic", "A Barcelona", "A Sevilla"], "«…però treballo a Girona.»"),
          mc(1, "Per què estudia català en Pablo?", ["Per a la feina", "Per viatjar", "Per la seva parella", "Per l'escola"], "«…el necessito per a la feina.»")] },
      w: { c: "Preséntate en tres o cuatro frases: cómo te llamas, de dónde eres, dónde vives y qué lenguas hablas.", m: "Hola! Em dic Marta. Sóc de Saragossa i visc a Lleida. Parlo castellà, anglès i una mica de català." } },

    { id: "ca1-2", t: "La família i els números", es: "La familia y los números", v: [
      ["la família", "la familia"], ["el pare", "el padre"], ["la mare", "la madre"], ["els pares", "los padres"], ["el germà", "el hermano"], ["la germana", "la hermana"], ["el fill", "el hijo"],
      ["la filla", "la hija"], ["el nen", "el niño"], ["el marit", "el marido"], ["la dona", "la mujer, la esposa"], ["l'avi", "el abuelo"], ["l'àvia", "la abuela"], ["l'amic", "el amigo"],
      ["l'any", "el año"], ["u", "uno"], ["dos", "dos"], ["tres", "tres"], ["quatre", "cuatro"], ["cinc", "cinco"], ["deu", "diez"],
      ["vint", "veinte"], ["trenta", "treinta"], ["seixanta", "sesenta"], ["cent", "cien"], ["jove", "joven"], ["gran", "grande; mayor"], ["tenir", "tener"]],
      g: { t: "Tenir, los artículos y los posesivos", n: `
## El verbo tenir (tener)
| tinc · tens · té · tenim · teniu · tenen
La edad: **Tinc trenta anys.**

## Los artículos
$ el (el germà) · la (la mare) · l' ante vocal o h (l'avi, l'àvia, l'home) · els · les
> Ante «i» o «u» átonas, el femenino no se apostrofa: **la** universitat, **la** idea.
**El artículo personal**: en catalán coloquial los nombres de persona llevan artículo: **en** Pau, **la** Laia, **l'**Anna. «Això és de la Marta.»

## El plural
Normalmente se añade **-s**: el germà, els germans. Las palabras en -a hacen **-es**: la germana, les germanes.

## Los posesivos
Llevan artículo, como en italiano:
$ el meu, la meva, els meus, les meves (mío)
$ el teu, la teva, els teus, les teves (tuyo)
$ el seu, la seva, els seus, les seves (suyo)
$ el nostre, la nostra, els nostres, les nostres · el vostre… · el seu… (de ellos)
| la meva mare · els meus germans · la seva casa
`, e: [
        mc(1, "Completa: «Jo ___ dos germans.»", ["tinc", "tens", "té", "tenen"], "jo tinc."),
        mc(1, "Completa: «Ells ___ tres fills.»", ["tenen", "teniu", "tenim", "té"], "ells tenen."),
        mc(1, "Completa: «___ avi es diu Joan.»", ["L'", "El", "La", "Els"], "Ante vocal: l'."),
        mc(1, "Completa: «Aquesta és ___ mare.»", ["la meva", "meva", "mi", "la mia"], "En catalán el posesivo lleva artículo: la meva."),
        tx(1, "Escribe en catalán: «Tengo veinte años.»", ["Tinc vint anys"], "La edad con «tenir»."),
        mc(1, "¿Cuál es el plural de «la germana»?", ["les germanes", "les germanas", "els germanes", "la germanes"], "-a → -es."),
        mc(1, "¿Cómo se dice «Esto es de Pau» en catalán coloquial?", ["Això és d'en Pau.", "Això és de Pau en.", "Això és del Pau.", "Això és de la Pau."], "Artículo personal masculino: en; de + en = d'en."),
        tx(1, "Completa con «tenir»: «Vosaltres ___ fills?»", ["teniu"], "vosaltres teniu.")] },
      d: { t: "Una foto de família", l: [
        ["Sara", "Què mires, Marc?", "¿Qué miras, Marc?"],
        ["Marc", "Una foto de la meva família. Mira: aquests són els meus pares.", "Una foto de mi familia. Mira: estos son mis padres."],
        ["Sara", "I la noia és la teva germana?", "¿Y la chica es tu hermana?"],
        ["Marc", "Sí, es diu Clara. Té dinou anys i viu a Tarragona.", "Sí, se llama Clara. Tiene diecinueve años y vive en Tarragona."],
        ["Sara", "També tens un germà?", "¿Tienes también un hermano?"],
        ["Marc", "No, però tinc un gos! I tu, tens germans?", "No, ¡pero tengo un perro! ¿Y tú, tienes hermanos?"],
        ["Sara", "Tinc dos germans. Tenen trenta i trenta-quatre anys.", "Tengo dos hermanos. Tienen treinta y treinta y cuatro años."],
        ["Marc", "Viuen aquí?", "¿Viven aquí?"],
        ["Sara", "No, viuen a Mallorca amb les seves famílies.", "No, viven en Mallorca con sus familias."]],
        q: [
          mc(1, "Qui és la Clara?", ["La germana d'en Marc", "La mare d'en Marc", "L'amiga de la Sara", "La filla d'en Marc"], "«Sí, es diu Clara.»"),
          mc(1, "Quants anys té la Clara?", ["Dinou", "Nou", "Trenta", "Vint-i-nou"], "«Té dinou anys.»"),
          mc(1, "Quants germans té la Sara?", ["Dos", "Un", "Tres", "Cap"], "«Tinc dos germans.»"),
          mc(1, "On viuen els germans de la Sara?", ["A Mallorca", "A Tarragona", "A Barcelona", "A València"], "«…viuen a Mallorca…»")] },
      w: { c: "Describe a tu familia en cuatro o cinco frases: quiénes son, cómo se llaman y cuántos años tienen.", m: "A la meva família som quatre. El meu pare es diu Lluís i té seixanta anys. La meva mare es diu Carme. Tinc una germana, la Laura. Té vint-i-cinc anys i viu a Madrid." } },

    { id: "ca1-3", t: "Menjar i beure", es: "Comer y beber", v: [
      ["el pa", "el pan"], ["el formatge", "el queso"], ["la carn", "la carne"], ["el peix", "el pescado"], ["el pollastre", "el pollo"], ["l'ou", "el huevo"], ["la verdura", "la verdura"],
      ["la fruita", "la fruta"], ["la poma", "la manzana"], ["l'arròs", "el arroz"], ["la pasta", "la pasta"], ["el sucre", "el azúcar"], ["la sal", "la sal"], ["l'aigua", "el agua"],
      ["la llet", "la leche"], ["el cafè", "el café"], ["el te", "el té"], ["el vi", "el vino"], ["el suc", "el zumo"], ["l'esmorzar", "el desayuno"], ["el dinar", "la comida (mediodía)"],
      ["el sopar", "la cena"], ["menjar", "comer"], ["beure", "beber"], ["prendre", "tomar"], ["tenir gana", "tener hambre"], ["tenir set", "tener sed"], ["el compte", "la cuenta"]],
      g: { t: "Verbos en -re e -ir, el indeterminado y la negación", n: `
## Los verbos en -re y -er
| prendre: prenc, prens, pren, prenem, preneu, prenen
| beure: bec, beus, beu, bevem, beveu, beuen
| fer: faig, fas, fa, fem, feu, fan
> La primera persona de muchos verbos en -re acaba en **-c**: prenc, bec, visc, tinc, puc.

## Los verbos en -ir
Dos modelos:
| dormir: dormo, dorms, dorm, dormim, dormiu, dormen
| servir (incoativo, con -eix-): serveixo, serveixes, serveix, servim, serviu, serveixen
La mayoría de verbos en -ir son incoativos: preferir (prefereixo), llegir (llegeixo), patir.

## El artículo indeterminado
$ un · una · uns · unes
| Vull un cafè i una poma.

## La negación
**no** delante del verbo. Se puede reforzar con **pas** (sobre todo en el registro cuidado):
| No menjo carn. · No ho sé pas.
Doble negación como en castellano: No bec **mai** vi. · No menjo **res**. · No ve **ningú**.
> «gens» = nada de, en absoluto: No tinc gens de gana.
`, e: [
        mc(1, "Completa: «Jo ___ un cafè.»", ["prenc", "prens", "pren", "prenen"], "jo prenc."),
        mc(1, "Completa: «Nosaltres ___ aigua.»", ["bevem", "beuem", "bebem", "beuen"], "nosaltres bevem."),
        mc(1, "Completa: «Jo ___ el peix.» (preferir)", ["prefereixo", "prefero", "preferixo", "preferim"], "Verbo incoativo: prefereixo."),
        mc(1, "Completa: «No bec ___ vi.»", ["mai", "no", "res", "gens mai"], "Doble negación: no … mai."),
        tx(1, "Pon en negativo: «Menjo carn.»", ["No menjo carn"], "no + verbo."),
        mc(1, "Completa con «fer»: «Què ___ tu?»", ["fas", "faig", "fa", "feu"], "tu fas."),
        mc(1, "«No tinc gens de gana» significa…", ["No tengo nada de hambre", "No tengo gana de nada", "Tengo poca hambre", "No tengo comida"], "gens de = nada de."),
        tx(1, "Primera persona de «beure»: «Jo ___ llet.»", ["bec"], "jo bec.")] },
      d: { t: "Al restaurant", l: [
        ["Cambrer", "Bon dia. Ja ho tenen?", "Buenos días. ¿Ya lo tienen?"],
        ["Clienta", "Sí. Jo vull el pollastre amb verdures, si us plau.", "Sí. Yo quiero el pollo con verduras, por favor."],
        ["Client", "I per a mi, el peix amb arròs.", "Y para mí, el pescado con arroz."],
        ["Cambrer", "Molt bé. I per beure?", "Muy bien. ¿Y para beber?"],
        ["Clienta", "Una ampolla d'aigua i una copa de vi negre.", "Una botella de agua y una copa de vino tinto."],
        ["Client", "Jo no bec vi. Un suc de poma, si us plau.", "Yo no bebo vino. Un zumo de manzana, por favor."],
        ["Cambrer", "Prendran postres?", "¿Tomarán postre?"],
        ["Clienta", "No, gràcies, però dos cafès i el compte, si us plau.", "No, gracias, pero dos cafés y la cuenta, por favor."]],
        q: [
          mc(1, "Què menja la clienta?", ["Pollastre amb verdures", "Peix amb arròs", "Pasta", "Una amanida"], "«…el pollastre amb verdures.»"),
          mc(1, "Qui no beu vi?", ["El client", "La clienta", "El cambrer", "Ningú"], "«Jo no bec vi.»"),
          mc(1, "Prenen postres?", ["No", "Sí, dues", "Sí, una", "Només la clienta"], "«No, gràcies…»"),
          mc(1, "Què demanen al final?", ["Dos cafès i el compte", "Un te", "Pa", "Una altra ampolla"], "«…dos cafès i el compte.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué comes y bebes en el desayuno y en la cena, y algo que no te gusta.", m: "Al matí prenc un cafè amb llet i menjo pa amb tomàquet. Al migdia dino a la feina. Al vespre sopo peix o verdura. Bec molta aigua. No m'agrada gens el te." } },

    { id: "ca1-4", t: "El dia a dia i l'hora", es: "El día a día y la hora", v: [
      ["el matí", "la mañana"], ["la tarda", "la tarde"], ["el vespre", "la tarde-noche"], ["la nit", "la noche"], ["avui", "hoy"], ["demà", "mañana"], ["la setmana", "la semana"],
      ["dilluns", "lunes"], ["dimarts", "martes"], ["dimecres", "miércoles"], ["dijous", "jueves"], ["divendres", "viernes"], ["dissabte", "sábado"], ["diumenge", "domingo"],
      ["l'hora", "la hora"], ["llevar-se", "levantarse"], ["dutxar-se", "ducharse"], ["vestir-se", "vestirse"], ["anar a dormir", "acostarse"], ["treballar", "trabajar"], ["començar", "empezar"],
      ["acabar", "terminar"], ["anar", "ir"], ["sortir", "salir"], ["d'hora", "temprano"], ["tard", "tarde"], ["sempre", "siempre"], ["sovint", "a menudo"]],
      g: { t: "Verbos reflexivos, anar y la hora en catalán", n: `
## Los verbos reflexivos
| llevar-se: em llevo, et lleves, es lleva, ens llevem, us lleveu, es lleven
Delante de vocal: **m'**afaito, **t'**afaites, **s'**afaita.

## Irregulares imprescindibles
| anar: vaig, vas, va, anem, aneu, van
| sortir: surto, surts, surt, sortim, sortiu, surten
| venir: vinc, vens, ve, venim, veniu, vénen

## La hora: el sistema de los cuartos
El catalán tradicional cuenta los cuartos **hacia la hora siguiente**:
| 8:00 són les vuit
| 8:15 és **un quart de nou** (un cuarto de la novena hora)
| 8:30 són **dos quarts de nou**
| 8:45 són **tres quarts de nou**
| 8:20 és un quart i cinc de nou · 8:40 són dos quarts i deu de nou
También se oye el sistema moderno: «les vuit i quart», «les vuit i mitja».
A qué hora: **a les** vuit, **a la** una.

## Los momentos del día
- **al matí**, **a la tarda**, **al vespre**, **a la nit**.
- **dilluns** = este lunes; **els dilluns** = todos los lunes.
`, e: [
        mc(1, "Completa: «Jo ___ llevo a les set.»", ["em", "es", "et", "ens"], "jo em llevo."),
        mc(1, "Completa: «Nosaltres ___ al cinema.»", ["anem", "aneu", "van", "vaig"], "nosaltres anem."),
        mc(1, "Completa: «Jo ___ de casa a les vuit.»", ["surto", "sorto", "surt", "sortim"], "Irregular: jo surto."),
        mc(1, "¿Qué hora es «dos quarts de nou»?", ["8:30", "9:30", "2:15", "9:15"], "Dos cuartos hacia las nueve: 8:30."),
        mc(1, "¿Cómo se dice 10:45 en el sistema tradicional?", ["Tres quarts d'onze", "Tres quarts de deu", "Un quart d'onze", "Dos quarts d'onze"], "Tres cuartos hacia las once."),
        tx(1, "¿Cómo se dice 7:15 en el sistema tradicional? «És un quart de ___.»", ["vuit"], "Un cuarto hacia las ocho."),
        mc(1, "«Els dimarts treballo» significa…", ["Todos los martes trabajo", "Este martes trabajo", "El martes pasado trabajé", "Solo un martes"], "Con artículo: costumbre."),
        tx(1, "Completa con «anar»: «Ells ___ a l'escola.»", ["van"], "ells van.")] },
      d: { t: "Un dia de la Clara", l: [
        ["Text", "La Clara és infermera a Lleida. Es lleva d'hora, a les sis.", "Clara es enfermera en Lleida. Se levanta temprano, a las seis."],
        ["Text", "Es dutxa, es vesteix i pren un cafè al bar de sota de casa.", "Se ducha, se viste y se toma un café en el bar de debajo de casa."],
        ["Text", "A tres quarts de set va a l'hospital amb bicicleta. Comença a treballar a les set.", "A las siete menos cuarto va al hospital en bicicleta. Empieza a trabajar a las siete."],
        ["Text", "A dos quarts d'una dina amb els companys. Acaba a les tres de la tarda.", "A las doce y media come con los compañeros. Termina a las tres de la tarde."],
        ["Text", "A la tarda va al gimnàs o fa la compra. Els dimarts té classe d'anglès.", "Por la tarde va al gimnasio o hace la compra. Los martes tiene clase de inglés."],
        ["Text", "Al vespre mira una pel·lícula i se'n va a dormir a les deu.", "Por la noche ve una película y se va a dormir a las diez."]],
        q: [
          mc(1, "A quina hora es lleva la Clara?", ["A les sis", "A les set", "A les deu", "A dos quarts d'una"], "«Es lleva d'hora, a les sis.»"),
          mc(1, "A quina hora va a l'hospital?", ["A les 6:45", "A les 7:45", "A les 7:15", "A les 6:15"], "Tres quarts de set = 6:45."),
          mc(1, "A quina hora dina?", ["A les 12:30", "A les 13:30", "A la una", "A les 12:15"], "Dos quarts d'una = 12:30."),
          mc(1, "Què fa els dimarts?", ["Té classe d'anglès.", "Va al gimnàs.", "Fa la compra.", "No treballa."], "«Els dimarts té classe d'anglès.»")] },
      w: { c: "Describe un día normal tuyo en cinco frases, con horas (usa algún cuarto al estilo catalán) y al menos tres verbos reflexivos.", m: "Em llevo a dos quarts de vuit. Em dutxo, em vesteixo i esmorzo. Començo a treballar a les nou i acabo a les cinc. Al vespre vaig al gimnàs o miro una sèrie. Me'n vaig a dormir a les onze." } },

    { id: "ca1-5", t: "L'habitatge", es: "La vivienda", v: [
      ["la casa", "la casa"], ["el pis", "el piso"], ["l'habitació", "la habitación"], ["el dormitori", "el dormitorio"], ["el menjador", "el comedor, el salón"], ["la cuina", "la cocina"], ["el bany", "el baño"],
      ["el jardí", "el jardín"], ["el balcó", "el balcón"], ["la porta", "la puerta"], ["la finestra", "la ventana"], ["el llit", "la cama"], ["la taula", "la mesa"], ["la cadira", "la silla"],
      ["el sofà", "el sofá"], ["l'armari", "el armario"], ["el lloguer", "el alquiler"], ["espaiós", "espacioso"], ["petit", "pequeño"], ["bonic", "bonito"], ["nou", "nuevo"],
      ["tranquil", "tranquilo"], ["car", "caro"], ["dins", "dentro"], ["sobre", "sobre"], ["sota", "debajo"], ["al costat de", "al lado de"], ["hi ha", "hay"]],
      g: { t: "Hi ha, estar, preposiciones de lugar y adjetivos", n: `
## Hi ha
Significa «hay» y no cambia: **Hi ha** una taula. **Hi ha** dues habitacions.
Negativo: **No hi ha** jardí.

## ser y estar
Un error típico de castellanohablantes: en catalán, para la **ubicación** se usa normalmente **ser**:
| On és la cuina? – És al costat del menjador.
**estar** se usa sobre todo para estados pasajeros y para «quedarse»: Estic cansat. · Estaré a casa.

## Preposiciones de lugar
| a (en): Visc a Barcelona. · dins de · sobre · sota · davant de · darrere de · entre
| al costat de · a prop de · lejos: lluny de
Con el artículo: a + el = **al**, de + el = **del**, per + el = **pel**: al costat del llit.

## Los adjetivos
El femenino añade **-a**, a veces con cambios: petit, petita · bonic, bonica · nou, nova · blanc, blanca.
El plural: petits, petites · bonics, boniques · nous, noves.
La mayoría van detrás del sustantivo: un pis tranquil, una cuina gran.
`, e: [
        mc(1, "Completa: «Al menjador ___ un sofà.»", ["hi ha", "ha", "és", "hi és"], "hi ha = hay."),
        mc(1, "Completa: «On ___ el bany?» (ubicación)", ["és", "està", "hi ha", "són"], "Ubicación: ser."),
        mc(1, "Completa: «La cadira és al costat ___ llit.»", ["del", "de el", "de la", "dels"], "de + el = del."),
        mc(1, "Femenino de «bonic»:", ["bonica", "bonice", "bonic", "boniques"], "-c → -ca."),
        tx(1, "Pon en negativo: «Hi ha jardí.»", ["No hi ha jardí"], "no hi ha."),
        mc(1, "Plural de «nova»:", ["noves", "novas", "nous", "nova"], "-a → -es."),
        mc(1, "Completa: «El gat dorm ___ el llit.» (debajo)", ["sota", "sobre", "dins", "davant"], "sota = debajo."),
        tx(1, "Completa: «Visc ___ Girona.»", ["a"], "Ciudad: a.")] },
      d: { t: "El pis nou", l: [
        ["Hugo", "Doncs com és el teu pis nou?", "Bueno, ¿cómo es tu piso nuevo?"],
        ["Sara", "És petit, però molt tranquil. Hi ha dues habitacions: un menjador i un dormitori.", "Es pequeño, pero muy tranquilo. Hay dos habitaciones: un salón y un dormitorio."],
        ["Hugo", "I la cuina?", "¿Y la cocina?"],
        ["Sara", "És al menjador. Hi ha una finestra gran i és molt lluminós.", "Está en el salón. Hay una ventana grande y es muy luminoso."],
        ["Hugo", "Tens jardí?", "¿Tienes jardín?"],
        ["Sara", "No, no hi ha jardí, però hi ha un balcó petit.", "No, no hay jardín, pero hay un balconcito."],
        ["Hugo", "I el lloguer és car?", "¿Y el alquiler es caro?"],
        ["Sara", "Sis-cents euros. Per ser al centre, no és car!", "Seiscientos euros. Para estar en el centro, ¡no es caro!"],
        ["Hugo", "I és a prop de la feina?", "¿Y está cerca del trabajo?"],
        ["Sara", "Sí, just davant de l'estació, a deu minuts a peu.", "Sí, justo delante de la estación, a diez minutos andando."]],
        q: [
          mc(1, "Quantes habitacions hi ha?", ["Dues", "Una", "Tres", "Quatre"], "«Hi ha dues habitacions.»"),
          mc(1, "On és la cuina?", ["Al menjador", "Al dormitori", "Al balcó", "Al costat del bany"], "«És al menjador.»"),
          mc(1, "Hi ha jardí?", ["No, però hi ha un balcó.", "Sí, gran.", "Sí, petit.", "No, ni balcó."], "«…no hi ha jardí, però hi ha un balcó petit.»"),
          mc(1, "On és el pis?", ["Davant de l'estació", "Lluny del centre", "Al costat d'un parc", "A prop del mar"], "«…just davant de l'estació.»")] },
      w: { c: "Describe tu casa o tu habitación en cinco frases: qué cuartos y muebles hay, cómo son y dónde están.", m: "Visc en un pis petit al centre. Hi ha tres habitacions: un menjador, un dormitori i una cuina. Al menjador hi ha un sofà gran i una taula blanca. El meu dormitori és tranquil. No hi ha jardí, però hi ha un balcó bonic." } },

    { id: "ca1-6", t: "A la ciutat", es: "En la ciudad", v: [
      ["el carrer", "la calle"], ["la plaça", "la plaza"], ["l'estació", "la estación"], ["la parada", "la parada"], ["el metro", "el metro"], ["l'autobús", "el autobús"], ["el tren", "el tren"],
      ["el cotxe", "el coche"], ["la bicicleta", "la bici"], ["a peu", "andando"], ["el bitllet", "el billete"], ["el banc", "el banco"], ["correus", "correos"], ["la farmàcia", "la farmacia"],
      ["el forn", "la panadería"], ["el supermercat", "el supermercado"], ["el museu", "el museo"], ["l'església", "la iglesia"], ["el pont", "el puente"], ["tot recte", "todo recto"], ["a l'esquerra", "a la izquierda"],
      ["a la dreta", "a la derecha"], ["girar", "girar"], ["travessar", "cruzar"], ["continuar", "seguir"], ["a prop", "cerca"], ["lluny", "lejos"], ["perdoni", "disculpe"]],
      g: { t: "Preposiciones y el imperativo", n: `
## a, en y amb
- Lugar y destino: **a** → Visc **a** Reus. Vaig **a** Reus. Sóc **a** casa.
- Delante de un artículo indeterminado o de «aquest»: **en** → Treballo **en** un banc. · Visc **en** aquest carrer.
- Transporte: **amb** → amb tren, amb cotxe, amb bicicleta (también «en tren»). Pero: **a peu**.
> Error típico: «Vaig en cotxe» se oye mucho, pero lo recomendado es «amb cotxe».

## Contracciones
$ a + el = al · a + els = als · de + el = del · de + els = dels · per + el = pel · per + els = pels
| Vaig al museu. · Vinc del supermercat. · Passo pel pont.

## El imperativo
De tu:
- -ar → **-a**: gira! travessa! continua!
- -re / -ir → **-e** o **-eix**: beu! dorm! llegeix!
De vostè (el que se usa para dar indicaciones a desconocidos):
- -ar → **-i**: giri, travessi, continuï
- -re / -ir → **-i / -a**: begui, dormi, llegeixi
| Perdoni, per anar a l'estació? – Vagi tot recte i després giri a l'esquerra.
Irregulares: anar → vés (tu), vagi (vostè) · fer → fes, faci · venir → vine, vingui.
Negativo: **no** + subjuntivo → No giris! No giri!
`, e: [
        mc(1, "Completa: «Visc ___ Tarragona.»", ["a", "en", "amb", "al"], "Ciudad: a."),
        mc(1, "Completa: «Treballo ___ un hospital.»", ["en", "a", "amb", "al"], "Ante indeterminado: en."),
        mc(1, "Completa: «Vaig a la feina ___ bicicleta.»", ["amb", "a", "de", "per"], "Transporte: amb."),
        mc(1, "Completa: «Vinc ___ supermercat.»", ["del", "de el", "al", "pel"], "de + el = del."),
        tx(1, "Imperativo de «girar» para «tu».", ["gira"], "-ar → -a."),
        mc(1, "Para decir a un desconocido «Gire a la derecha»:", ["Giri a la dreta.", "Gira a la dreta.", "Gireu a la dreta.", "Girar a la dreta."], "Imperativo de vostè: -i."),
        mc(1, "Imperativo de «anar» para «vostè»:", ["Vagi", "Vés", "Va", "Anés"], "Irregular: vagi."),
        tx(1, "Completa: «Passem ___ pont.» (per + el)", ["pel"], "per + el = pel.")] },
      d: { t: "Per anar a l'estació?", l: [
        ["Turista", "Perdoni, senyora. Per anar a l'estació, si us plau?", "Disculpe, señora. ¿Para ir a la estación, por favor?"],
        ["Senyora", "És fàcil. Vagi tot recte fins a la plaça.", "Es fácil. Siga recto hasta la plaza."],
        ["Turista", "D'acord. I després?", "De acuerdo. ¿Y después?"],
        ["Senyora", "A la plaça, giri a l'esquerra i travessi el pont.", "En la plaza, gire a la izquierda y cruce el puente."],
        ["Turista", "És lluny?", "¿Está lejos?"],
        ["Senyora", "No, és a deu minuts a peu. L'estació és davant de correus.", "No, está a diez minutos andando. La estación está delante de correos."],
        ["Turista", "Hi ha cap autobús?", "¿Hay algún autobús?"],
        ["Senyora", "Sí, el 4. La parada és just al costat de la farmàcia.", "Sí, el 4. La parada está justo al lado de la farmacia."],
        ["Turista", "Moltes gràcies, senyora!", "¡Muchas gracias, señora!"],
        ["Senyora", "De res. Bon dia!", "De nada. ¡Buen día!"]],
        q: [
          mc(1, "On vol anar el turista?", ["A l'estació", "A correus", "Al museu", "A la farmàcia"], "«Per anar a l'estació…»"),
          mc(1, "Què ha de fer a la plaça?", ["Girar a l'esquerra", "Girar a la dreta", "Anar tot recte", "Agafar el metro"], "«…giri a l'esquerra…»"),
          mc(1, "L'estació és…", ["davant de correus.", "al costat de la farmàcia.", "a la plaça.", "sota el pont."], "«…davant de correus.»"),
          mc(1, "Quin autobús hi va?", ["El 4", "El 14", "El 10", "No n'hi ha cap."], "«Sí, el 4.»")] },
      w: { c: "Un turista te pregunta cómo llegar a la farmacia. Escríbele las indicaciones (con «vostè») en tres o cuatro frases.", m: "Vagi tot recte fins al banc. Després giri a la dreta i travessi la plaça. La farmàcia és al costat del forn. No és lluny: cinc minuts a peu." } },

    { id: "ca1-7", t: "La salut i les cites", es: "La salud y las citas", v: [
      ["el metge", "el médico"], ["la cita", "la cita"], ["la consulta", "la consulta"], ["l'hospital", "el hospital"], ["malalt", "enfermo"], ["en forma", "en forma"], ["el cap", "la cabeza"],
      ["la panxa", "la barriga"], ["l'esquena", "la espalda"], ["el coll", "el cuello; la garganta"], ["la cama", "la pierna"], ["el braç", "el brazo"], ["la mà", "la mano"], ["el peu", "el pie"],
      ["fer mal", "doler"], ["la febre", "la fiebre"], ["el refredat", "el resfriado"], ["la tos", "la tos"], ["el medicament", "el medicamento"], ["la pastilla", "la pastilla"], ["la recepta", "la receta"],
      ["quedar-se", "quedarse"], ["necessitar", "necesitar"], ["ajudar", "ayudar"], ["cansat", "cansado"], ["poder", "poder"], ["haver de", "tener que"], ["voler", "querer"]],
      g: { t: "Poder, voler, haver de y em fa mal", n: `
## Los verbos que acompañan a otro
| poder: puc, pots, pot, podem, podeu, poden
| voler: vull, vols, vol, volem, voleu, volen
| haver de (tener que): he de, has de, ha de, hem de, heu de, han de
| Has de quedar-te al llit.      Em pots ajudar?      Vull veure un metge.
> «Tener que» se dice **haver de**, no «tenir que» (castellanismo muy frecuente).

## Pedir con educación
| Voldria una cita, si us plau.      Podria parlar amb el metge?

## Cal
Impersonal, «hay que»: **Cal** beure molta aigua. · **No cal** que vinguis. (No hace falta que vengas.)

## Decir qué duele
Como «gustar»: lo que duele es el sujeto.
| Em fa mal el cap.         Me duele la cabeza.
| Em fan mal els peus.      Me duelen los pies.
| Tinc mal de coll.         Tengo dolor de garganta.
> Ojo: **la cama** es la pierna; la cama (para dormir) es **el llit**.
`, e: [
        mc(1, "Completa: «Avui no ___ treballar, estic malalta.»", ["puc", "pot", "podeu", "poden"], "jo puc."),
        mc(1, "Completa: «Vosaltres ___ beure molta aigua.»", ["heu de", "teniu que", "han de", "hem de"], "Tener que = haver de: heu de."),
        mc(1, "Completa: «Em ___ mal els peus.»", ["fan", "fa", "faig", "feu"], "Sujeto plural: fan."),
        mc(1, "¿Qué significa «la cama» en catalán?", ["La pierna", "La cama (mueble)", "La espalda", "El brazo"], "La cama = la pierna."),
        tx(1, "Completa con «voler»: «Jo ___ veure el metge.»", ["vull"], "jo vull."),
        mc(1, "Para pedir una cita con educación se dice…", ["Voldria una cita.", "Vull una cita.", "He de una cita.", "Tinc que una cita."], "voldria = querría."),
        mc(1, "«No cal que vinguis» significa…", ["No hace falta que vengas", "No puedes venir", "No quiero que vengas", "No vengas nunca"], "no cal = no hace falta."),
        tx(1, "Completa: «Tinc mal de ___.» (garganta)", ["coll"], "mal de coll.")] },
      d: { t: "Al metge", l: [
        ["Metgessa", "Bon dia, senyor Soler. Què li passa?", "Buenos días, señor Soler. ¿Qué le pasa?"],
        ["Sr. Soler", "Bon dia, doctora. Fa tres dies que tinc mal de coll i molta tos.", "Buenos días, doctora. Hace tres días que me duele la garganta y tengo mucha tos."],
        ["Metgessa", "Té febre?", "¿Tiene fiebre?"],
        ["Sr. Soler", "Sí, una mica. I em fa mal el cap.", "Sí, un poco. Y me duele la cabeza."],
        ["Metgessa", "És un refredat fort. S'ha de quedar al llit i cal que begui molt.", "Es un resfriado fuerte. Tiene que quedarse en cama y hay que beber mucho."],
        ["Sr. Soler", "Puc treballar demà?", "¿Puedo trabajar mañana?"],
        ["Metgessa", "No, aquesta setmana no pot treballar. Aquí té la recepta.", "No, esta semana no puede trabajar. Aquí tiene la receta."],
        ["Sr. Soler", "Gràcies, doctora. On és la farmàcia més a prop?", "Gracias, doctora. ¿Dónde está la farmacia más cercana?"],
        ["Metgessa", "Just al costat de la consulta. Que es millori!", "Justo al lado de la consulta. ¡Que se mejore!"]],
        q: [
          mc(1, "Què li fa mal al senyor Soler?", ["El coll i el cap", "La panxa", "L'esquena", "La cama"], "Garganta y cabeza."),
          mc(1, "Què ha de fer?", ["Quedar-se al llit i beure molt", "Fer esport", "Anar a l'hospital", "Treballar menys"], "«S'ha de quedar al llit i cal que begui molt.»"),
          mc(1, "Pot treballar aquesta setmana?", ["No", "Sí", "Només demà", "Només al matí"], "«…aquesta setmana no pot treballar.»"),
          mc(1, "On és la farmàcia?", ["Al costat de la consulta", "Davant de l'estació", "A l'hospital", "Lluny"], "«Just al costat de la consulta.»")] },
      w: { c: "Estás enfermo y no puedes ir a clase. Escribe un mensaje a tu profesora: qué te pasa, qué tienes que hacer y cuándo puedes volver.", m: "Bon dia, senyora Puig:\nestic malalta. Tinc febre i em fa mal el cap. Avui m'he de quedar al llit i no puc venir a classe. Podré tornar dilluns.\nSalutacions,\nMarta" } },

    { id: "ca1-8", t: "El lleure i el cap de setmana", es: "El ocio y el fin de semana", v: [
      ["el cap de setmana", "el fin de semana"], ["ahir", "ayer"], ["la setmana passada", "la semana pasada"], ["el temps lliure", "el tiempo libre"], ["l'esport", "el deporte"], ["jugar a futbol", "jugar al fútbol"], ["nedar", "nadar"],
      ["fer una excursió", "hacer una excursión"], ["ballar", "bailar"], ["llegir", "leer"], ["el llibre", "el libro"], ["la pel·lícula", "la película"], ["el cinema", "el cine"], ["la música", "la música"],
      ["el concert", "el concierto"], ["trobar-se", "quedar, encontrarse"], ["visitar", "visitar"], ["viatjar", "viajar"], ["les vacances", "las vacaciones"], ["el mar", "el mar"], ["la muntanya", "la montaña"],
      ["tornar", "volver"], ["veure", "ver"], ["avorrit", "aburrido"], ["fantàstic", "fantástico"], ["junts", "juntos"], ["amb", "con"], ["passar-ho bé", "pasarlo bien"]],
      g: { t: "El pasado perifrástico y el perfet", n: `
## El passat perifràstic: el pasado más característico
Es el pasado que se usa al hablar de un tiempo ya terminado (ayer, el año pasado). Equivale al «hice» castellano.
Se forma con el presente de **anar** (en formas especiales) + **infinitivo**:
$ jo vaig · tu vas (vares) · ell va · nosaltres vam (vàrem) · vosaltres vau (vàreu) · ells van (varen)
| Ahir vaig anar al cinema.          Ayer fui al cine.
| Dissabte vam fer una excursió.     El sábado hicimos una excursión.
> ¡No es un futuro! «Vaig menjar» significa «comí», no «voy a comer». En catalán el futuro próximo se dice «aniré a menjar» o «menjaré».

## El perfet
**haver** + participio, como «he hecho»: para hoy, esta semana, este año o experiencias.
$ he · has · ha · hem · heu · han
| Avui he treballat molt.      Aquest any hem viatjat poc.
Participios: -ar → **-at** (parlat), -er / -re → **-ut** (begut, vist es irregular), -ir → **-it** (dormit).
Irregulares frecuentes: fer: fet · veure: vist · dir: dit · escriure: escrit · obrir: obert · ser: estat · tenir: tingut · poder: pogut.

## ¿Cuál uso?
- **ahir, l'any passat, el 2019, dilluns passat** → perifràstic: Ahir vaig llegir un llibre.
- **avui, aquesta setmana, mai, ja** → perfet: Avui he llegit un llibre.
`, e: [
        mc(1, "«Ahir vaig anar a la platja» significa…", ["Ayer fui a la playa", "Ayer voy a ir a la playa", "Mañana iré a la playa", "Ayer iba a la playa"], "Perifràstic = pasado."),
        mc(1, "Completa: «Dissabte nosaltres ___ fer una excursió.»", ["vam", "anem", "vaig", "van a"], "nosaltres vam + infinitivo."),
        mc(1, "Completa: «Avui ___ treballat molt.»", ["he", "vaig", "hi", "va"], "Con «avui», perfet: he treballat."),
        mc(1, "¿Cuál es el participio de «fer»?", ["fet", "fat", "fit", "feit"], "Irregular: fet."),
        tx(1, "Escribe en catalán: «Ayer vi una película.» (perifràstic)", ["Ahir vaig veure una pel·lícula"], "vaig + veure."),
        mc(1, "Completa: «L'any passat ells ___ viatjar a Itàlia.»", ["van", "han", "vam", "anaven a"], "ells van + infinitivo."),
        mc(1, "¿Cuál es el participio de «veure»?", ["vist", "veut", "vegut", "veit"], "Irregular: vist."),
        tx(1, "Completa: «Aquesta setmana ___ llegit dos llibres.» (jo)", ["he"], "Perfet con «aquesta setmana».")] },
      d: { t: "Com va anar el cap de setmana?", l: [
        ["Pau", "Hola, Carla! Com va anar el cap de setmana?", "¡Hola, Carla! ¿Qué tal el fin de semana?"],
        ["Carla", "Molt bé! Dissabte vaig anar a la muntanya amb uns amics.", "¡Muy bien! El sábado fui a la montaña con unos amigos."],
        ["Pau", "Que bé! Què vau fer?", "¡Qué bien! ¿Qué hicisteis?"],
        ["Carla", "Vam caminar quatre hores i vam dinar a l'aire lliure.", "Caminamos cuatro horas y comimos al aire libre."],
        ["Pau", "I diumenge?", "¿Y el domingo?"],
        ["Carla", "Diumenge em vaig quedar a casa i vaig llegir un llibre. I tu?", "El domingo me quedé en casa y leí un libro. ¿Y tú?"],
        ["Pau", "Jo dissabte vaig treballar. Però al vespre vaig sortir: vaig veure una pel·lícula al cinema.", "Yo el sábado trabajé. Pero por la noche salí: vi una película en el cine."],
        ["Carla", "Et va agradar?", "¿Te gustó?"],
        ["Pau", "No gaire, era una mica avorrida. Aquest cap de setmana aniré a un concert.", "No mucho, era un poco aburrida. Este fin de semana iré a un concierto."]],
        q: [
          mc(1, "On va anar la Carla dissabte?", ["A la muntanya", "Al mar", "Al cinema", "A Barcelona"], "«…vaig anar a la muntanya…»"),
          mc(1, "Què va fer la Carla diumenge?", ["Va llegir un llibre.", "Va caminar.", "Va treballar.", "Va anar al cinema."], "«…vaig llegir un llibre.»"),
          mc(1, "Què va fer en Pau dissabte?", ["Va treballar.", "Va dinar a l'aire lliure.", "Es va quedar a casa.", "Va llegir."], "«Jo dissabte vaig treballar.»"),
          mc(1, "Com era la pel·lícula?", ["Una mica avorrida", "Fantàstica", "Molt divertida", "Massa llarga"], "«…era una mica avorrida.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué hiciste el fin de semana pasado (con el perifràstic) y qué harás el próximo.", m: "Dissabte vaig dormir fins tard. Després vaig anar al centre i em vaig trobar amb una amiga. Vam prendre un cafè junts. Diumenge em vaig quedar a casa i vaig mirar una pel·lícula. El cap de setmana que ve aniré a veure els meus pares." } },
  ] },
];
