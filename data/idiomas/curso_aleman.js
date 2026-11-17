// Curso de alemán por niveles (Marco Común Europeo). Cada unidad tiene:
//   v: vocabulario [alemán, español] · g: gramática {t: título, n: apuntes, e: ejercicios}
//   d: diálogo o texto {t, l: [[quién, alemán, español], …], q: preguntas de comprensión} · w: tarea de escritura {c: consigna, m: modelo}
// Los ejercicios usan los mismos ayudantes que el banco: mc(nivel, pregunta, [correcta, …], explicación) y tx(nivel, pregunta, respuestas, explicación).
// Para ampliar el curso basta con añadir unidades al nivel correspondiente o un nivel nuevo al final.
window.CURSO = window.CURSO || {};
CURSO.aleman = [
  { id: 'A1', nombre: 'A1 · Acceso', desc: 'Presentarse, hacer preguntas sencillas y desenvolverse en situaciones cotidianas muy básicas.', u: [
    { id: 'a1-1', t: 'Sich vorstellen', es: 'Presentarse', v: [
      ['Hallo', 'hola'], ['Guten Morgen', 'buenos días (por la mañana)'], ['Guten Tag', 'buenos días'], ['Guten Abend', 'buenas tardes'], ['Tschüss', 'adiós (informal)'], ['Auf Wiedersehen', 'adiós (formal)'],
      ['ich', 'yo'], ['du', 'tú'], ['Sie', 'usted'], ['der Name', 'el nombre'], ['heißen', 'llamarse'], ['kommen', 'venir'], ['wohnen', 'vivir (residir)'], ['sprechen', 'hablar'],
      ['das Land', 'el país'], ['die Stadt', 'la ciudad'], ['die Sprache', 'el idioma'], ['Deutsch', 'alemán'], ['Spanisch', 'español'], ['aus', 'de (procedencia)'], ['in', 'en'],
      ['wie', 'cómo'], ['wo', 'dónde'], ['woher', 'de dónde'], ['ja', 'sí'], ['nein', 'no'], ['danke', 'gracias'], ['bitte', 'por favor / de nada']],
      g: { t: 'Pronombres personales y presente', n: `
## Los pronombres personales
- **ich** (yo), **du** (tú), **er / sie / es** (él / ella / ello)
- **wir** (nosotros), **ihr** (vosotros), **sie** (ellos), **Sie** (usted, ustedes)
**Sie** con mayúscula es la forma de cortesía. Se usa con desconocidos y se conjuga como «ellos».
> En alemán el pronombre no se omite: «Ich komme aus Spanien», nunca solo «Komme aus Spanien».

## El presente de los verbos regulares
A la raíz del verbo (el infinitivo sin -en) se le añaden estas terminaciones:
$ ich -e · du -st · er/sie/es -t · wir -en · ihr -t · sie/Sie -en
| kommen: ich komme, du kommst, er kommt, wir kommen, ihr kommt, sie kommen
| wohnen: ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, sie wohnen
Si la raíz acaba en -ß o -s, la forma de «du» solo añade -t: du heißt.

## El verbo sein (ser, estar)
Es irregular y hay que aprenderlo de memoria:
| ich bin · du bist · er/sie/es ist · wir sind · ihr seid · sie/Sie sind

## Preguntas con W
La palabra interrogativa va primero y el verbo, justo después:
| Wie heißt du?          ¿Cómo te llamas?
| Woher kommen Sie?      ¿De dónde es usted?
| Wo wohnst du?          ¿Dónde vives?
> Orden fijo: en una frase alemana normal el verbo conjugado ocupa siempre la segunda posición.
`, e: [
        mc(1, 'Completa: «Ich ___ aus Spanien.»', ['komme', 'kommst', 'kommt', 'kommen'], 'Con «ich» el verbo termina en -e.'),
        mc(1, 'Completa: «Wie ___ du?»', ['heißt', 'heiße', 'heißen', 'heiß'], 'Con «du» se añade -st, pero como la raíz ya acaba en ß solo se añade -t.'),
        mc(1, 'Completa: «Wir ___ in Berlin.»', ['wohnen', 'wohnst', 'wohne', 'wohnt'], 'Con «wir» el verbo queda igual que el infinitivo.'),
        mc(1, '¿Qué forma de «sein» va con «du»?', ['bist', 'bin', 'ist', 'seid'], 'ich bin, du bist, er ist.'),
        tx(1, 'Escribe en alemán: «Yo soy Ana.»', ['Ich bin Ana'], 'ich + bin.'),
        mc(1, '¿Qué pregunta es correcta?', ['Woher kommst du?', 'Woher du kommst?', 'Kommst woher du?', 'Du woher kommst?'], 'Interrogativo, verbo y después el sujeto.'),
        mc(1, 'Para hablar de usted a un desconocido se usa…', ['Sie', 'du', 'ihr', 'er'], '«Sie» con mayúscula, conjugado como la tercera persona del plural.'),
        tx(1, 'Completa con el verbo «sprechen»: «Ich ___ Spanisch.»', ['spreche'], 'ich spreche.')] },
      d: { t: 'Im Sprachkurs', l: [
        ['Lena', 'Hallo! Ich heiße Lena. Wie heißt du?', '¡Hola! Me llamo Lena. ¿Cómo te llamas?'],
        ['Pablo', 'Hallo, Lena. Ich bin Pablo.', 'Hola, Lena. Soy Pablo.'],
        ['Lena', 'Woher kommst du, Pablo?', '¿De dónde eres, Pablo?'],
        ['Pablo', 'Ich komme aus Spanien, aus Valencia. Und du?', 'Soy de España, de Valencia. ¿Y tú?'],
        ['Lena', 'Ich komme aus Österreich, aber ich wohne jetzt in Berlin.', 'Soy de Austria, pero ahora vivo en Berlín.'],
        ['Pablo', 'Sprichst du Spanisch?', '¿Hablas español?'],
        ['Lena', 'Nein, nur Deutsch und ein bisschen Englisch.', 'No, solo alemán y un poco de inglés.'],
        ['Pablo', 'Kein Problem. Ich lerne Deutsch!', 'No hay problema. ¡Estoy aprendiendo alemán!']],
        q: [
          mc(1, 'Woher kommt Pablo?', ['Aus Spanien', 'Aus Österreich', 'Aus Berlin', 'Aus England'], '«Ich komme aus Spanien, aus Valencia.»'),
          mc(1, 'Wo wohnt Lena jetzt?', ['In Berlin', 'In Valencia', 'In Österreich', 'In Wien'], '«…aber ich wohne jetzt in Berlin.»'),
          mc(1, 'Spricht Lena Spanisch?', ['Nein', 'Ja', 'Ein bisschen', 'Sehr gut'], '«Nein, nur Deutsch und ein bisschen Englisch.»'),
          mc(1, 'Was lernt Pablo?', ['Deutsch', 'Englisch', 'Spanisch', 'Französisch'], '«Ich lerne Deutsch!»')] },
      w: { c: 'Preséntate en tres o cuatro frases: cómo te llamas, de dónde eres, dónde vives y qué idiomas hablas.', m: 'Hallo! Ich heiße Marta. Ich komme aus Spanien und wohne in Sevilla. Ich spreche Spanisch und ein bisschen Deutsch.' } },

    { id: 'a1-2', t: 'Familie und Zahlen', es: 'La familia y los números', v: [
      ['die Familie', 'la familia'], ['die Mutter', 'la madre'], ['der Vater', 'el padre'], ['die Eltern', 'los padres'], ['der Bruder', 'el hermano'], ['die Schwester', 'la hermana'],
      ['der Sohn', 'el hijo'], ['die Tochter', 'la hija'], ['das Kind', 'el niño, el hijo'], ['der Mann', 'el hombre, el marido'], ['die Frau', 'la mujer, la esposa'], ['der Freund', 'el amigo'],
      ['haben', 'tener'], ['alt', 'viejo (edad)'], ['das Jahr', 'el año'], ['verheiratet', 'casado'], ['ledig', 'soltero'],
      ['eins', 'uno'], ['zwei', 'dos'], ['drei', 'tres'], ['vier', 'cuatro'], ['fünf', 'cinco'], ['sechs', 'seis'], ['sieben', 'siete'], ['acht', 'ocho'], ['neun', 'nueve'], ['zehn', 'diez'], ['zwanzig', 'veinte']],
      g: { t: 'El verbo haben y los posesivos', n: `
## El verbo haben (tener)
| ich habe · du hast · er/sie/es hat · wir haben · ihr habt · sie/Sie haben
Con haben se dice lo que se tiene: «Ich habe zwei Brüder».
> La edad se expresa con sein, no con haben: «Ich bin 30 Jahre alt» (literalmente, «soy 30 años viejo»).

## Los tres géneros
Todo sustantivo alemán es masculino (**der**), femenino (**die**) o neutro (**das**), y se escribe con mayúscula. El género no coincide con el español, así que cada palabra se aprende con su artículo: der Vater, die Mutter, das Kind.
En plural el artículo es siempre **die**: die Kinder, die Eltern.

## Los posesivos
- **mein** (mi), **dein** (tu), **sein** (su, de él), **ihr** (su, de ella), **unser** (nuestro), **Ihr** (su, de usted)
Con sustantivos femeninos y en plural se les añade una -e:
| mein Vater · mein Kind · meine Mutter · meine Eltern
| dein Bruder · deine Schwester

## Los números del 0 al 20
| 0 null · 1 eins · 2 zwei · 3 drei · 4 vier · 5 fünf · 6 sechs · 7 sieben · 8 acht · 9 neun · 10 zehn
| 11 elf · 12 zwölf · 13 dreizehn · 14 vierzehn · 15 fünfzehn · 16 sechzehn · 17 siebzehn · 18 achtzehn · 19 neunzehn · 20 zwanzig
Del 13 al 19 se forma con la unidad + zehn. Ojo: sechzehn pierde la s y siebzehn pierde el -en.
`, e: [
        mc(1, 'Completa: «Er ___ eine Schwester.»', ['hat', 'habe', 'hast', 'haben'], 'er/sie/es hat.'),
        mc(1, 'Completa: «Das ist ___ Mutter.»', ['meine', 'mein', 'meinen', 'meiner'], '«Mutter» es femenino: meine.'),
        mc(1, 'Completa: «Das ist ___ Bruder.»', ['mein', 'meine', 'meines', 'meiner'], '«Bruder» es masculino: mein.'),
        mc(1, '¿Cómo se dice «Tengo 25 años»?', ['Ich bin 25 Jahre alt', 'Ich habe 25 Jahre', 'Ich habe 25 Jahre alt', 'Ich bin 25 Jahren'], 'La edad se expresa con sein + Jahre alt.'),
        tx(1, 'Escribe con letras el número 12.', ['zwölf'], '11 es elf y 12 es zwölf: son irregulares.'),
        tx(1, 'Escribe con letras el número 17.', ['siebzehn'], 'sieben pierde el -en: siebzehn.'),
        mc(1, '¿Qué artículo lleva «Kind»?', ['das', 'der', 'die', 'den'], 'das Kind es neutro.'),
        mc(1, 'Completa: «Wir ___ zwei Kinder.»', ['haben', 'habt', 'hat', 'habe'], 'wir haben.')] },
      d: { t: 'Meine Familie', l: [
        ['Text', 'Das ist meine Familie. Mein Vater heißt Karl und ist 58 Jahre alt.', 'Esta es mi familia. Mi padre se llama Karl y tiene 58 años.'],
        ['Text', 'Meine Mutter heißt Eva. Sie kommt aus Italien.', 'Mi madre se llama Eva. Es de Italia.'],
        ['Text', 'Ich habe einen Bruder und eine Schwester.', 'Tengo un hermano y una hermana.'],
        ['Text', 'Mein Bruder Tim ist verheiratet und hat zwei Kinder.', 'Mi hermano Tim está casado y tiene dos hijos.'],
        ['Text', 'Meine Schwester Anna ist 19 und wohnt in München.', 'Mi hermana Anna tiene 19 años y vive en Múnich.'],
        ['Text', 'Ich bin ledig und habe keine Kinder.', 'Yo estoy soltero y no tengo hijos.']],
        q: [
          mc(1, 'Wie alt ist der Vater?', ['58', '19', '85', '48'], '«…ist 58 Jahre alt.»'),
          mc(1, 'Woher kommt die Mutter?', ['Aus Italien', 'Aus München', 'Aus Spanien', 'Aus Österreich'], '«Sie kommt aus Italien.»'),
          mc(1, 'Wer hat zwei Kinder?', ['Tim', 'Anna', 'Karl', 'Eva'], '«Mein Bruder Tim … hat zwei Kinder.»'),
          mc(1, 'Wo wohnt Anna?', ['In München', 'In Italien', 'In Berlin', 'Bei den Eltern'], '«…wohnt in München.»'),
          mc(1, 'Richtig oder falsch? Der Erzähler ist verheiratet.', ['Falsch', 'Richtig'], '«Ich bin ledig»: está soltero.')] },
      w: { c: 'Describe a tu familia en cuatro o cinco frases: quiénes son, cómo se llaman y qué edad tienen.', m: 'Meine Familie ist klein. Meine Mutter heißt Carmen und ist 60 Jahre alt. Mein Vater heißt Luis. Ich habe eine Schwester. Sie heißt Laura und wohnt in Madrid.' } },

    { id: 'a1-3', t: 'Essen und Trinken', es: 'Comer y beber', v: [
      ['das Brot', 'el pan'], ['das Wasser', 'el agua'], ['der Kaffee', 'el café'], ['der Tee', 'el té'], ['die Milch', 'la leche'], ['der Saft', 'el zumo'], ['das Bier', 'la cerveza'], ['der Wein', 'el vino'],
      ['der Käse', 'el queso'], ['das Ei', 'el huevo'], ['das Fleisch', 'la carne'], ['der Fisch', 'el pescado'], ['das Gemüse', 'la verdura'], ['das Obst', 'la fruta'], ['der Apfel', 'la manzana'], ['die Kartoffel', 'la patata'],
      ['der Kuchen', 'el pastel'], ['das Frühstück', 'el desayuno'], ['essen', 'comer'], ['trinken', 'beber'], ['kaufen', 'comprar'], ['kosten', 'costar'], ['möchten', 'querer (cortés)'],
      ['der Hunger', 'el hambre'], ['der Durst', 'la sed'], ['lecker', 'rico'], ['die Rechnung', 'la cuenta'], ['der Supermarkt', 'el supermercado']],
      g: { t: 'Artículos y acusativo', n: `
## Artículo determinado e indeterminado
- **der / ein** para el masculino: der Apfel, ein Apfel
- **die / eine** para el femenino: die Kartoffel, eine Kartoffel
- **das / ein** para el neutro: das Brot, ein Brot
El plural no tiene artículo indeterminado: Äpfel (manzanas).

## El acusativo: el objeto directo
Lo que se come, se bebe, se compra o se tiene va en **acusativo**. La buena noticia es que solo cambia el masculino:
$ der → den · ein → einen · (kein → keinen)
| Ich esse den Apfel.          (der Apfel)
| Ich möchte einen Kaffee.     (der Kaffee)
| Ich trinke eine Milch.       (die Milch: no cambia)
| Ich kaufe ein Brot.          (das Brot: no cambia)

## möchten: pedir con educación
| ich möchte · du möchtest · er/sie/es möchte · wir möchten · ihr möchtet · sie/Sie möchten
«Ich möchte…» equivale a «querría…» y es la forma normal de pedir en un bar o una tienda.

## Verbos con cambio de vocal
Algunos verbos cambian la vocal en las formas de du y er/sie/es:
| essen: ich esse, du isst, er isst
| sprechen: ich spreche, du sprichst, er spricht
`, e: [
        mc(1, 'Completa: «Ich möchte ___ Kaffee.»', ['einen', 'ein', 'eine', 'einer'], 'der Kaffee es masculino y va en acusativo: einen.'),
        mc(1, 'Completa: «Ich kaufe ___ Brot.»', ['ein', 'einen', 'eine', 'einem'], 'das Brot es neutro: en acusativo no cambia.'),
        mc(1, 'Completa: «Er ___ einen Apfel.»', ['isst', 'esst', 'esse', 'essen'], 'essen cambia la vocal: du isst, er isst.'),
        mc(1, 'Completa: «Wir trinken ___ Wein.» (el vino)', ['den', 'der', 'das', 'dem'], 'der Wein, en acusativo: den Wein.'),
        tx(1, 'Escribe en alemán: «Querría un té.»', ['Ich möchte einen Tee'], 'der Tee → einen Tee.'),
        mc(1, '¿Qué frase es correcta?', ['Ich habe Hunger.', 'Ich bin Hunger.', 'Ich habe hungrig.', 'Ich bin einen Hunger.'], 'Como en español, el hambre «se tiene»: Hunger haben.'),
        mc(1, 'Completa: «___ kostet das?»', ['Was', 'Wer', 'Wo', 'Woher'], '«Was kostet das?» o «Wie viel kostet das?»'),
        mc(1, 'Completa: «Sie ___ ein Bier.» (ella)', ['möchte', 'möchten', 'möchtest', 'möchtet'], 'er/sie/es möchte, sin -t final.')] },
      d: { t: 'Im Café', l: [
        ['Kellner', 'Guten Tag! Was möchten Sie?', '¡Buenos días! ¿Qué desean?'],
        ['Frau', 'Ich möchte einen Kaffee mit Milch und ein Stück Apfelkuchen, bitte.', 'Querría un café con leche y un trozo de tarta de manzana, por favor.'],
        ['Mann', 'Für mich einen Tee und ein Käsebrot.', 'Para mí un té y un bocadillo de queso.'],
        ['Kellner', 'Gern. Möchten Sie auch Wasser?', 'Con mucho gusto. ¿Quieren también agua?'],
        ['Frau', 'Ja, eine Flasche Wasser, bitte.', 'Sí, una botella de agua, por favor.'],
        ['Kellner', 'Hier, bitte. Guten Appetit!', 'Aquí tienen. ¡Que aproveche!'],
        ['Mann', 'Danke. Der Kuchen ist sehr lecker! Die Rechnung, bitte.', 'Gracias. ¡La tarta está muy rica! La cuenta, por favor.'],
        ['Kellner', 'Das macht zwölf Euro fünfzig.', 'Son doce euros con cincuenta.']],
        q: [
          mc(1, 'Was trinkt die Frau?', ['Einen Kaffee mit Milch', 'Einen Tee', 'Ein Bier', 'Einen Saft'], '«Ich möchte einen Kaffee mit Milch…»'),
          mc(1, 'Was isst der Mann?', ['Ein Käsebrot', 'Einen Apfelkuchen', 'Ein Ei', 'Nichts'], '«Für mich einen Tee und ein Käsebrot.»'),
          mc(1, 'Was bestellen sie noch?', ['Eine Flasche Wasser', 'Einen Wein', 'Zwei Kaffee', 'Ein Brot'], '«Ja, eine Flasche Wasser, bitte.»'),
          mc(1, 'Wie viel kostet alles?', ['12,50 Euro', '20,50 Euro', '12,15 Euro', '2,50 Euro'], '«Das macht zwölf Euro fünfzig.»')] },
      w: { c: 'Estás en una cafetería. Escribe lo que pedirías tú y un acompañante, y pide la cuenta.', m: 'Guten Tag! Ich möchte einen Tee und ein Brot mit Käse, bitte. Und für meine Freundin einen Kaffee. Die Rechnung, bitte.' } },

    { id: 'a1-4', t: 'Alltag und Uhrzeit', es: 'El día a día y la hora', v: [
      ['der Tag', 'el día'], ['die Woche', 'la semana'], ['der Morgen', 'la mañana'], ['der Abend', 'la tarde-noche'], ['die Nacht', 'la noche'], ['heute', 'hoy'], ['morgen', 'mañana'], ['jetzt', 'ahora'],
      ['die Uhr', 'el reloj, la hora'], ['die Stunde', 'la hora (duración)'], ['früh', 'temprano'], ['spät', 'tarde'], ['aufstehen', 'levantarse'], ['arbeiten', 'trabajar'], ['lernen', 'aprender, estudiar'],
      ['schlafen', 'dormir'], ['gehen', 'ir (a pie)'], ['fahren', 'ir (en vehículo)'], ['anfangen', 'empezar'], ['einkaufen', 'hacer la compra'], ['fernsehen', 'ver la tele'], ['die Arbeit', 'el trabajo'],
      ['die Schule', 'la escuela'], ['Montag', 'lunes'], ['Dienstag', 'martes'], ['Mittwoch', 'miércoles'], ['Freitag', 'viernes'], ['das Wochenende', 'el fin de semana']],
      g: { t: 'Orden de la frase y verbos separables', n: `
## El verbo, siempre en segunda posición
En una frase enunciativa el verbo conjugado ocupa el segundo lugar. Si la frase empieza por otra cosa (un día, una hora), el sujeto pasa detrás del verbo:
| Ich arbeite heute.
| Heute arbeite ich.
| Am Montag gehe ich in die Schule.

## Verbos separables
Muchos verbos llevan un prefijo que se separa y se va al **final** de la frase:
| aufstehen → Ich stehe um sieben Uhr auf.
| einkaufen → Wir kaufen am Samstag ein.
| anfangen → Der Kurs fängt um neun an.
| fernsehen → Abends sehe ich fern.
En el diccionario aparecen juntos; al conjugarlos, el prefijo cierra la frase.

## Decir la hora
| Wie spät ist es? / Wie viel Uhr ist es?     ¿Qué hora es?
| Es ist acht Uhr.                            Son las ocho.
| Es ist halb neun.                           Son las ocho y media (¡«media hacia las nueve»!).
| Es ist Viertel nach acht.                   Son las ocho y cuarto.
| Es ist Viertel vor neun.                    Son las nueve menos cuarto.
> «halb neun» no son las nueve y media, sino las ocho y media.

## Preposiciones de tiempo
- **um** + hora: um acht Uhr
- **am** + día o parte del día: am Montag, am Abend (pero: in der Nacht)
- **von … bis**: von neun bis fünf (de nueve a cinco)
`, e: [
        mc(1, '¿Qué frase es correcta?', ['Heute arbeite ich nicht.', 'Heute ich arbeite nicht.', 'Heute nicht ich arbeite.', 'Ich heute arbeite nicht.'], 'El verbo va en segunda posición; el sujeto pasa detrás.'),
        mc(1, 'Completa: «Ich ___ um sieben Uhr ___.» (aufstehen)', ['stehe … auf', 'aufstehe … —', 'stehe auf … —', 'auf … stehe'], 'El prefijo «auf» va al final.'),
        mc(1, '«Es ist halb neun» significa…', ['Las ocho y media', 'Las nueve y media', 'Las nueve menos cuarto', 'Las ocho y cuarto'], 'halb neun = media hora antes de las nueve.'),
        mc(1, 'Completa: «Der Kurs fängt ___ neun Uhr an.»', ['um', 'am', 'in', 'von'], 'Las horas llevan «um».'),
        mc(1, 'Completa: «___ Montag habe ich frei.»', ['Am', 'Um', 'In', 'Im'], 'Los días de la semana llevan «am».'),
        tx(1, 'Escribe en alemán: «Son las diez.»', ['Es ist zehn Uhr'], 'Es ist + hora + Uhr.'),
        mc(1, 'Completa: «Wir kaufen heute ___.» (einkaufen)', ['ein', 'kaufen', 'an', 'auf'], 'einkaufen: wir kaufen … ein.'),
        mc(1, 'Completa: «Er ___ bis acht Uhr.» (schlafen)', ['schläft', 'schlaft', 'schlafen', 'schlafe'], 'schlafen cambia a → ä: du schläfst, er schläft.')] },
      d: { t: 'Mein Tag', l: [
        ['Text', 'Ich stehe um halb sieben auf und frühstücke.', 'Me levanto a las seis y media y desayuno.'],
        ['Text', 'Um acht Uhr fahre ich mit dem Bus zur Arbeit.', 'A las ocho voy en autobús al trabajo.'],
        ['Text', 'Ich arbeite von neun bis fünf Uhr in einem Büro.', 'Trabajo de nueve a cinco en una oficina.'],
        ['Text', 'Am Montag und am Mittwoch lerne ich abends Deutsch.', 'Los lunes y los miércoles estudio alemán por la tarde.'],
        ['Text', 'Der Kurs fängt um sieben Uhr an.', 'El curso empieza a las siete.'],
        ['Text', 'Am Wochenende kaufe ich ein und sehe fern.', 'El fin de semana hago la compra y veo la tele.']],
        q: [
          mc(1, 'Wann steht die Person auf?', ['Um 6:30 Uhr', 'Um 7:30 Uhr', 'Um 7:00 Uhr', 'Um 8:00 Uhr'], '«um halb sieben» son las seis y media.'),
          mc(1, 'Wie fährt sie zur Arbeit?', ['Mit dem Bus', 'Mit dem Auto', 'Mit dem Zug', 'Zu Fuß'], '«…fahre ich mit dem Bus zur Arbeit.»'),
          mc(1, 'Wann lernt sie Deutsch?', ['Am Montag und am Mittwoch', 'Am Wochenende', 'Jeden Tag', 'Am Freitag'], '«Am Montag und am Mittwoch lerne ich abends Deutsch.»'),
          mc(1, 'Was macht sie am Wochenende?', ['Sie kauft ein und sieht fern', 'Sie arbeitet', 'Sie lernt Deutsch', 'Sie schläft bis fünf'], '«Am Wochenende kaufe ich ein und sehe fern.»')] },
      w: { c: 'Describe un día normal tuyo en cuatro o cinco frases, indicando las horas.', m: 'Ich stehe um sieben Uhr auf. Um acht fahre ich zur Arbeit. Ich arbeite von neun bis sechs. Abends lerne ich Deutsch und sehe fern.' } },

    { id: 'a1-5', t: 'Wohnen', es: 'La vivienda', v: [
      ['die Wohnung', 'el piso'], ['das Haus', 'la casa'], ['das Zimmer', 'la habitación'], ['die Küche', 'la cocina'], ['das Bad', 'el baño'], ['das Schlafzimmer', 'el dormitorio'], ['das Wohnzimmer', 'el salón'],
      ['der Balkon', 'el balcón'], ['der Garten', 'el jardín'], ['die Tür', 'la puerta'], ['das Fenster', 'la ventana'], ['der Tisch', 'la mesa'], ['der Stuhl', 'la silla'], ['das Bett', 'la cama'],
      ['der Schrank', 'el armario'], ['die Lampe', 'la lámpara'], ['die Miete', 'el alquiler'], ['groß', 'grande'], ['klein', 'pequeño'], ['hell', 'luminoso'], ['dunkel', 'oscuro'], ['teuer', 'caro'],
      ['billig', 'barato'], ['neu', 'nuevo'], ['alt', 'viejo'], ['schön', 'bonito'], ['suchen', 'buscar'], ['es gibt', 'hay']],
      g: { t: 'La negación: nicht y kein', n: `
## kein: negar un sustantivo
**kein** niega un sustantivo que llevaría «ein» o que no lleva artículo. Se declina igual que ein:
| Ich habe ein Auto.       →  Ich habe kein Auto.
| Das ist eine Küche.      →  Das ist keine Küche.
| Ich habe einen Balkon.   →  Ich habe keinen Balkon.
| Ich habe Zeit.           →  Ich habe keine Zeit.

## nicht: negar todo lo demás
**nicht** niega verbos, adjetivos y sustantivos con artículo determinado. Suele ir al final de la frase o delante de lo que niega:
| Ich arbeite nicht.
| Die Wohnung ist nicht groß.
| Das ist nicht mein Zimmer.
> Regla rápida: si en la frase afirmativa hay «ein» o no hay artículo, usa kein; en los demás casos, nicht.

## es gibt + acusativo
«Es gibt» significa «hay» y no cambia en plural. Lo que hay va en acusativo:
| Es gibt einen Balkon.
| Es gibt keine Garage.
| Es gibt zwei Zimmer.

## Los adjetivos tras sein
Después de sein el adjetivo no cambia, sea cual sea el género:
| Der Tisch ist neu. · Die Lampe ist neu. · Das Bett ist neu.
`, e: [
        mc(1, 'Niega: «Ich habe ein Auto.»', ['Ich habe kein Auto.', 'Ich habe nicht Auto.', 'Ich habe nicht ein Auto.', 'Ich nicht habe ein Auto.'], 'Un sustantivo con «ein» se niega con kein.'),
        mc(1, 'Niega: «Die Wohnung ist groß.»', ['Die Wohnung ist nicht groß.', 'Die Wohnung ist kein groß.', 'Die Wohnung nicht ist groß.', 'Keine Wohnung ist groß.'], 'Los adjetivos se niegan con nicht.'),
        mc(1, 'Completa: «Es gibt ___ Balkon.» (no hay)', ['keinen', 'kein', 'keine', 'nicht'], 'der Balkon, en acusativo: keinen.'),
        mc(1, 'Completa: «Wir haben ___ Garten.» (el jardín, sí tenemos)', ['einen', 'ein', 'eine', 'einem'], 'der Garten → einen Garten.'),
        mc(1, 'Completa: «Ich arbeite heute ___.»', ['nicht', 'kein', 'keine', 'keinen'], 'Los verbos se niegan con nicht.'),
        tx(1, 'Escribe en alemán: «La cocina es pequeña.»', ['Die Küche ist klein'], 'Tras sein el adjetivo no cambia.'),
        mc(1, '¿Qué significa «Die Miete ist teuer»?', ['El alquiler es caro', 'El piso es barato', 'La casa es grande', 'El alquiler es barato'], 'die Miete = el alquiler; teuer = caro.'),
        mc(1, 'Completa: «Ich habe ___ Zeit.» (no tengo tiempo)', ['keine', 'kein', 'nicht', 'keinen'], 'die Zeit es femenino: keine Zeit.')] },
      d: { t: 'Die neue Wohnung', l: [
        ['Jonas', 'Hallo, Mia! Wie ist deine neue Wohnung?', '¡Hola, Mia! ¿Qué tal tu piso nuevo?'],
        ['Mia', 'Sie ist klein, aber sehr schön und hell.', 'Es pequeño, pero muy bonito y luminoso.'],
        ['Jonas', 'Wie viele Zimmer hat sie?', '¿Cuántas habitaciones tiene?'],
        ['Mia', 'Zwei Zimmer, eine Küche und ein Bad. Es gibt auch einen Balkon.', 'Dos habitaciones, una cocina y un baño. También hay un balcón.'],
        ['Jonas', 'Und einen Garten?', '¿Y jardín?'],
        ['Mia', 'Nein, es gibt keinen Garten. Aber der Park ist nicht weit.', 'No, no hay jardín. Pero el parque no está lejos.'],
        ['Jonas', 'Ist die Miete teuer?', '¿Es caro el alquiler?'],
        ['Mia', 'Nein, sie ist nicht teuer: 600 Euro im Monat.', 'No, no es caro: 600 euros al mes.']],
        q: [
          mc(1, 'Wie ist die Wohnung?', ['Klein, aber schön und hell', 'Groß und dunkel', 'Alt und teuer', 'Groß und teuer'], '«Sie ist klein, aber sehr schön und hell.»'),
          mc(1, 'Wie viele Zimmer hat die Wohnung?', ['Zwei', 'Drei', 'Eins', 'Vier'], '«Zwei Zimmer, eine Küche und ein Bad.»'),
          mc(1, 'Richtig oder falsch? Die Wohnung hat einen Garten.', ['Falsch', 'Richtig'], '«Nein, es gibt keinen Garten.»'),
          mc(1, 'Wie viel kostet die Wohnung im Monat?', ['600 Euro', '900 Euro', '500 Euro', '1600 Euro'], '«600 Euro im Monat.»')] },
      w: { c: 'Describe tu casa o tu piso: cómo es, qué habitaciones tiene y qué no tiene.', m: 'Meine Wohnung ist nicht groß, aber sie ist hell. Sie hat drei Zimmer, eine Küche und ein Bad. Es gibt keinen Balkon. Die Miete ist nicht teuer.' } },

    { id: 'a1-6', t: 'In der Stadt', es: 'En la ciudad', v: [
      ['der Bahnhof', 'la estación'], ['die Haltestelle', 'la parada'], ['der Bus', 'el autobús'], ['der Zug', 'el tren'], ['die U-Bahn', 'el metro'], ['das Auto', 'el coche'], ['das Fahrrad', 'la bicicleta'],
      ['die Straße', 'la calle'], ['der Platz', 'la plaza'], ['die Bank', 'el banco'], ['die Post', 'correos'], ['die Apotheke', 'la farmacia'], ['das Krankenhaus', 'el hospital'], ['das Geschäft', 'la tienda'],
      ['die Fahrkarte', 'el billete'], ['links', 'a la izquierda'], ['rechts', 'a la derecha'], ['geradeaus', 'todo recto'], ['weit', 'lejos'], ['nah', 'cerca'], ['die Ecke', 'la esquina'], ['die Ampel', 'el semáforo'],
      ['nehmen', 'coger, tomar'], ['abbiegen', 'girar'], ['umsteigen', 'hacer transbordo'], ['zu Fuß', 'a pie'], ['der Weg', 'el camino'], ['entschuldigen', 'disculpar']],
      g: { t: 'El dativo con preposiciones y el imperativo', n: `
## El dativo
Después de ciertas preposiciones el artículo cambia a **dativo**:
$ der → dem · das → dem · die → der · die (plural) → den
- **mit** (con, en un medio de transporte): mit dem Bus, mit der U-Bahn
- **zu** (hacia, a): zu dem Bahnhof → **zum** Bahnhof; zu der Post → **zur** Post
- **bei** (junto a, en casa de), **von** (de), **nach** (a ciudades y países; después de), **aus** (de)
| Ich fahre mit dem Zug nach Berlin.
| Wie komme ich zum Bahnhof?

## Dónde y adónde
Con **in, an, auf** depende de la pregunta:
- **Wo?** (lugar, sin movimiento) → dativo: Ich bin **in der** Apotheke. · **im** Geschäft (in dem)
- **Wohin?** (movimiento hacia) → acusativo: Ich gehe **in die** Apotheke. · **ins** Geschäft (in das)

## El imperativo con Sie
Para dar indicaciones a un desconocido se pone el verbo primero y después «Sie»:
| Gehen Sie geradeaus.
| Nehmen Sie die U-Bahn.
| Biegen Sie an der Ampel links ab.   (abbiegen es separable)

## Pedir indicaciones
| Entschuldigung, wo ist die Post?
| Wie komme ich zum Krankenhaus?
| Ist das weit von hier?
`, e: [
        mc(1, 'Completa: «Ich fahre mit ___ Bus.»', ['dem', 'der', 'den', 'das'], 'mit pide dativo; der Bus → dem Bus.'),
        mc(1, 'Completa: «Wie komme ich ___ Bahnhof?»', ['zum', 'zur', 'zu', 'nach'], 'zu + dem = zum.'),
        mc(1, 'Completa: «Wie komme ich ___ Post?»', ['zur', 'zum', 'zu', 'in'], 'die Post: zu + der = zur.'),
        mc(1, 'Completa: «Ich bin ___ Apotheke.» (¿dónde?)', ['in der', 'in die', 'in den', 'in das'], 'Lugar sin movimiento: dativo. die → der.'),
        mc(1, 'Completa: «Ich gehe ___ Apotheke.» (¿adónde?)', ['in die', 'in der', 'in dem', 'im'], 'Movimiento hacia: acusativo. die no cambia.'),
        mc(1, '¿Cuál es el imperativo de cortesía de «gehen»?', ['Gehen Sie!', 'Sie gehen!', 'Geht Sie!', 'Gehst Sie!'], 'Verbo en infinitivo + Sie.'),
        tx(1, 'Escribe en alemán: «Voy a Berlín en tren.»', ['Ich fahre mit dem Zug nach Berlin'], 'mit dem Zug (dativo) + nach + ciudad.'),
        mc(1, 'Completa: «Biegen Sie an der Ecke rechts ___.»', ['ab', 'an', 'auf', 'ein'], 'abbiegen es separable: el prefijo va al final.')] },
      d: { t: 'Wie komme ich zum Bahnhof?', l: [
        ['Tourist', 'Entschuldigung, wie komme ich zum Bahnhof?', 'Perdone, ¿cómo llego a la estación?'],
        ['Frau', 'Das ist nicht weit. Gehen Sie hier geradeaus bis zur Ampel.', 'No está lejos. Siga recto por aquí hasta el semáforo.'],
        ['Tourist', 'Und dann?', '¿Y después?'],
        ['Frau', 'Dann biegen Sie links ab. Der Bahnhof ist neben der Post.', 'Después gire a la izquierda. La estación está junto a correos.'],
        ['Tourist', 'Kann ich auch mit dem Bus fahren?', '¿Puedo ir también en autobús?'],
        ['Frau', 'Ja, nehmen Sie die Linie 5. Die Haltestelle ist dort an der Ecke.', 'Sí, coja la línea 5. La parada está allí, en la esquina.'],
        ['Tourist', 'Wie lange dauert es zu Fuß?', '¿Cuánto se tarda a pie?'],
        ['Frau', 'Nur zehn Minuten.', 'Solo diez minutos.'],
        ['Tourist', 'Vielen Dank!', '¡Muchas gracias!']],
        q: [
          mc(1, 'Wohin möchte der Tourist?', ['Zum Bahnhof', 'Zur Post', 'Zum Krankenhaus', 'Zur Bank'], '«…wie komme ich zum Bahnhof?»'),
          mc(1, 'Wo biegt man links ab?', ['An der Ampel', 'An der Haltestelle', 'An der Post', 'Am Platz'], '«…geradeaus bis zur Ampel. Dann biegen Sie links ab.»'),
          mc(1, 'Wo ist der Bahnhof?', ['Neben der Post', 'Neben der Apotheke', 'An der Ecke', 'Weit weg'], '«Der Bahnhof ist neben der Post.»'),
          mc(1, 'Welche Buslinie fährt zum Bahnhof?', ['Die Linie 5', 'Die Linie 10', 'Die Linie 15', 'Keine'], '«…nehmen Sie die Linie 5.»'),
          mc(1, 'Wie lange dauert der Weg zu Fuß?', ['Zehn Minuten', 'Fünf Minuten', 'Eine Stunde', 'Zwanzig Minuten'], '«Nur zehn Minuten.»')] },
      w: { c: 'Un turista te pregunta cómo llegar a la farmacia. Escríbele las indicaciones en tres o cuatro frases.', m: 'Gehen Sie geradeaus bis zum Platz. Dann biegen Sie rechts ab. Die Apotheke ist neben der Bank. Es ist nicht weit, nur fünf Minuten zu Fuß.' } },
    { id: 'a1-7', t: 'Gesundheit und Termine', es: 'La salud y las citas', v: [
      ['der Arzt', 'el médico'], ['die Ärztin', 'la médica'], ['der Termin', 'la cita'], ['die Praxis', 'la consulta'], ['das Krankenhaus', 'el hospital'], ['krank', 'enfermo'], ['gesund', 'sano'],
      ['der Kopf', 'la cabeza'], ['der Bauch', 'la barriga'], ['der Rücken', 'la espalda'], ['der Hals', 'la garganta, el cuello'], ['das Bein', 'la pierna'], ['der Arm', 'el brazo'], ['die Hand', 'la mano'],
      ['der Fuß', 'el pie'], ['die Schmerzen', 'los dolores'], ['das Fieber', 'la fiebre'], ['die Erkältung', 'el resfriado'], ['der Husten', 'la tos'], ['das Medikament', 'el medicamento'], ['die Tablette', 'la pastilla'],
      ['das Rezept', 'la receta'], ['wehtun', 'doler'], ['bleiben', 'quedarse'], ['brauchen', 'necesitar'], ['helfen', 'ayudar'], ['müde', 'cansado'], ['Gute Besserung!', '¡que te mejores!']],
      g: { t: 'Los verbos modales', n: `
## Qué son los verbos modales
Acompañan a otro verbo y matizan su sentido: poder, tener que, querer, tener permiso.
- **können** (poder, saber hacer): ich kann, du kannst, er kann, wir können, ihr könnt, sie können
- **müssen** (tener que): ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen
- **wollen** (querer): ich will, du willst, er will, wir wollen, ihr wollt, sie wollen
- **dürfen** (tener permiso): ich darf, du darfst, er darf, wir dürfen, ihr dürft, sie dürfen
- **sollen** (deber, por encargo o consejo de otro): ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen
> En singular cambia la vocal, y las formas de «ich» y «er» son iguales y sin terminación: ich kann, er kann.

## Dónde va cada verbo
El modal se conjuga y ocupa la segunda posición; el otro verbo va en infinitivo **al final** de la frase.
| Ich muss heute zum Arzt gehen.     Hoy tengo que ir al médico.
| Kannst du mir helfen?              ¿Puedes ayudarme?
| Hier darf man nicht rauchen.       Aquí no se puede fumar.

## möchten: pedir con educación
«Ich möchte» (quisiera) es más cortés que «ich will».
| Ich möchte einen Termin, bitte.    Quisiera una cita, por favor.
> «nicht müssen» significa «no hace falta»; para prohibir se usa «nicht dürfen».
`, e: [
        mc(1, 'Completa: «Ich ___ heute nicht arbeiten, ich bin krank.»', ['kann', 'kannst', 'können', 'könnt'], 'Con «ich» el modal no lleva terminación: ich kann.'),
        mc(1, 'Completa: «Du ___ viel Wasser trinken.»', ['musst', 'muss', 'müssen', 'müsst'], 'du musst.'),
        mc(1, '¿Dónde va el infinitivo en una frase con verbo modal?', ['Al final de la frase', 'En segunda posición', 'Al principio', 'Justo después del sujeto'], 'El modal ocupa la segunda posición y el infinitivo cierra la frase.'),
        mc(1, '¿Qué frase es correcta?', ['Ich muss zum Arzt gehen.', 'Ich muss gehen zum Arzt.', 'Ich gehen muss zum Arzt.', 'Ich muss zum Arzt gehe.'], 'Modal en segunda posición, infinitivo al final.'),
        tx(1, 'Completa con «dürfen»: «Hier ___ man nicht parken.»', ['darf'], '«man» se conjuga como «er»: man darf.'),
        mc(1, '«Du musst nicht kommen» significa…', ['No hace falta que vengas', 'No puedes venir', 'Tienes prohibido venir', 'No quieres venir'], '«nicht müssen» quita la obligación; la prohibición es «nicht dürfen».'),
        tx(1, 'Escribe en alemán: «¿Puedes ayudarme?»', ['Kannst du mir helfen', 'Kannst du mir helfen?'], 'Pregunta: el modal va primero y el infinitivo, al final.'),
        mc(1, 'Para pedir una cita con educación se dice…', ['Ich möchte einen Termin.', 'Ich will einen Termin.', 'Ich muss einen Termin.', 'Ich darf einen Termin.'], '«möchten» es la forma cortés de pedir algo.')] },
      d: { t: 'Bei der Ärztin', l: [
        ['Ärztin', 'Guten Tag, Herr Soler. Was fehlt Ihnen?', 'Buenos días, señor Soler. ¿Qué le pasa?'],
        ['Herr Soler', 'Guten Tag. Ich habe seit drei Tagen Halsschmerzen und Husten.', 'Buenos días. Tengo dolor de garganta y tos desde hace tres días.'],
        ['Ärztin', 'Haben Sie auch Fieber?', '¿Tiene también fiebre?'],
        ['Herr Soler', 'Ja, ein bisschen. Und mein Kopf tut weh.', 'Sí, un poco. Y me duele la cabeza.'],
        ['Ärztin', 'Sie haben eine Erkältung. Sie müssen im Bett bleiben und viel trinken.', 'Tiene un resfriado. Tiene que quedarse en cama y beber mucho.'],
        ['Herr Soler', 'Kann ich morgen arbeiten?', '¿Puedo trabajar mañana?'],
        ['Ärztin', 'Nein, Sie dürfen diese Woche nicht arbeiten. Ich schreibe Ihnen ein Rezept.', 'No, esta semana no puede trabajar. Le hago una receta.'],
        ['Herr Soler', 'Vielen Dank. Wo ist die nächste Apotheke?', 'Muchas gracias. ¿Dónde está la farmacia más cercana?'],
        ['Ärztin', 'Gleich neben der Praxis. Gute Besserung!', 'Justo al lado de la consulta. ¡Que se mejore!']],
        q: [
          mc(1, 'Was hat Herr Soler?', ['Halsschmerzen und Husten', 'Bauchschmerzen', 'Rückenschmerzen', 'Ein kaputtes Bein'], '«Ich habe seit drei Tagen Halsschmerzen und Husten.»'),
          mc(1, 'Was muss er machen?', ['Im Bett bleiben und viel trinken', 'Sport machen', 'Sofort arbeiten', 'Ins Krankenhaus gehen'], '«Sie müssen im Bett bleiben und viel trinken.»'),
          mc(1, 'Darf er diese Woche arbeiten?', ['Nein', 'Ja', 'Nur morgen', 'Nur am Vormittag'], '«Sie dürfen diese Woche nicht arbeiten.»'),
          mc(1, 'Wo ist die Apotheke?', ['Neben der Praxis', 'Am Bahnhof', 'Im Krankenhaus', 'Weit weg'], '«Gleich neben der Praxis.»')] },
      w: { c: 'Estás enfermo y no puedes ir a clase. Escribe un mensaje a tu profesora: qué te pasa, qué tienes que hacer y cuándo puedes volver.', m: 'Liebe Frau Weber,\nich bin krank. Ich habe Fieber und Kopfschmerzen. Ich muss heute im Bett bleiben und kann nicht zum Kurs kommen. Am Montag kann ich wieder kommen.\nViele Grüße\nMarta' } },
    { id: 'a1-8', t: 'Freizeit und Wochenende', es: 'El tiempo libre y el fin de semana', v: [
      ['das Wochenende', 'el fin de semana'], ['gestern', 'ayer'], ['heute', 'hoy'], ['morgen', 'mañana'], ['letzte Woche', 'la semana pasada'], ['die Freizeit', 'el tiempo libre'], ['das Hobby', 'la afición'],
      ['der Sport', 'el deporte'], ['Fußball spielen', 'jugar al fútbol'], ['schwimmen', 'nadar'], ['wandern', 'hacer senderismo'], ['tanzen', 'bailar'], ['lesen', 'leer'], ['das Buch', 'el libro'],
      ['der Film', 'la película'], ['das Kino', 'el cine'], ['die Musik', 'la música'], ['das Konzert', 'el concierto'], ['der Freund', 'el amigo'], ['die Freundin', 'la amiga'], ['treffen', 'quedar con, encontrarse con'],
      ['besuchen', 'visitar'], ['reisen', 'viajar'], ['der Urlaub', 'las vacaciones'], ['das Meer', 'el mar'], ['der Berg', 'la montaña'], ['langweilig', 'aburrido'], ['toll', 'genial']],
      g: { t: 'El pasado: Perfekt, war y hatte', n: `
## Para qué sirve
El Perfekt es el pasado que se usa al hablar. Equivale tanto a «he hecho» como a «hice».

## Cómo se forma
Presente de **haben** o **sein** en segunda posición + **participio** al final.
| Ich habe Fußball gespielt.        Jugué al fútbol.
| Wir sind nach Berlin gefahren.    Fuimos a Berlín.

## El participio
- Verbos regulares: ge + raíz + t → machen: gemacht · spielen: gespielt · kaufen: gekauft
- Verbos irregulares: ge + raíz (a veces cambiada) + en → lesen: gelesen · sehen: gesehen · trinken: getrunken · essen: gegessen · schreiben: geschrieben
- Verbos en -ieren y los que empiezan por be-, ver-, er-: sin ge- → telefonieren: telefoniert · besuchen: besucht

## ¿haben o sein?
La mayoría lleva **haben**. Llevan **sein** los verbos de movimiento de un sitio a otro y de cambio de estado, además de «sein» y «bleiben»:
| gehen: ist gegangen · fahren: ist gefahren · kommen: ist gekommen · fliegen: ist geflogen
| aufstehen: ist aufgestanden · bleiben: ist geblieben · sein: ist gewesen
> Con «sein» y «haben» se prefieren las formas cortas del pasado: ich war (estuve, era), ich hatte (tuve, tenía).
| Gestern war ich müde.      Wir hatten keine Zeit.
`, e: [
        mc(1, 'Completa: «Ich ___ gestern einen Film gesehen.»', ['habe', 'bin', 'hat', 'ist'], '«sehen» lleva haben: ich habe gesehen.'),
        mc(1, 'Completa: «Wir ___ nach Hamburg gefahren.»', ['sind', 'haben', 'seid', 'hat'], '«fahren» es un verbo de movimiento: lleva sein.'),
        mc(1, '¿Cuál es el participio de «machen»?', ['gemacht', 'gemachen', 'macht', 'gemachet'], 'Regular: ge + mach + t.'),
        mc(1, '¿Cuál es el participio de «besuchen»?', ['besucht', 'gebesucht', 'besuchen', 'begesucht'], 'Los verbos con be- no llevan ge-.'),
        tx(1, 'Escribe el participio de «spielen».', ['gespielt'], 'ge + spiel + t.'),
        mc(1, '¿Qué frase es correcta?', ['Ich habe ein Buch gelesen.', 'Ich habe gelesen ein Buch.', 'Ich bin ein Buch gelesen.', 'Ich habe ein Buch gelest.'], 'Auxiliar en segunda posición y participio al final; «lesen» es irregular: gelesen.'),
        tx(1, 'Completa con el pasado de «sein»: «Gestern ___ ich sehr müde.»', ['war'], 'ich war.'),
        mc(1, 'Completa: «Sie ___ zu Hause geblieben.»', ['ist', 'hat', 'bist', 'haben'], '«bleiben» lleva sein, aunque no sea de movimiento.')] },
      d: { t: 'Wie war dein Wochenende?', l: [
        ['Jonas', 'Hallo, Carla! Wie war dein Wochenende?', '¡Hola, Carla! ¿Qué tal tu fin de semana?'],
        ['Carla', 'Sehr schön! Am Samstag bin ich mit Freunden in die Berge gefahren.', '¡Muy bien! El sábado fui a la montaña con unos amigos.'],
        ['Jonas', 'Toll! Was habt ihr dort gemacht?', '¡Genial! ¿Qué hicisteis allí?'],
        ['Carla', 'Wir sind vier Stunden gewandert und haben ein Picknick gemacht.', 'Caminamos cuatro horas e hicimos un pícnic.'],
        ['Jonas', 'Und am Sonntag?', '¿Y el domingo?'],
        ['Carla', 'Am Sonntag war ich müde. Ich bin zu Hause geblieben und habe ein Buch gelesen. Und du?', 'El domingo estaba cansada. Me quedé en casa y leí un libro. ¿Y tú?'],
        ['Jonas', 'Ich habe am Samstag gearbeitet. Aber am Abend bin ich ins Kino gegangen.', 'Yo trabajé el sábado. Pero por la noche fui al cine.'],
        ['Carla', 'Wie war der Film?', '¿Qué tal la película?'],
        ['Jonas', 'Leider ein bisschen langweilig.', 'Por desgracia, un poco aburrida.']],
        q: [
          mc(1, 'Wohin ist Carla am Samstag gefahren?', ['In die Berge', 'Ans Meer', 'Nach Berlin', 'Ins Kino'], '«…bin ich mit Freunden in die Berge gefahren.»'),
          mc(1, 'Was hat Carla am Sonntag gemacht?', ['Sie hat ein Buch gelesen.', 'Sie ist gewandert.', 'Sie hat gearbeitet.', 'Sie ist ins Kino gegangen.'], '«Ich bin zu Hause geblieben und habe ein Buch gelesen.»'),
          mc(1, 'Was hat Jonas am Samstag gemacht?', ['Er hat gearbeitet.', 'Er ist gewandert.', 'Er hat ein Picknick gemacht.', 'Er ist zu Hause geblieben.'], '«Ich habe am Samstag gearbeitet.»'),
          mc(1, 'Wie war der Film?', ['Langweilig', 'Toll', 'Sehr schön', 'Lustig'], '«Leider ein bisschen langweilig.»')] },
      w: { c: 'Cuenta en cuatro o cinco frases qué hiciste el fin de semana pasado. Usa el Perfekt y «war».', m: 'Am Samstag habe ich lange geschlafen. Dann bin ich in die Stadt gegangen und habe eine Freundin getroffen. Wir haben Kaffee getrunken. Am Sonntag war das Wetter schlecht. Ich bin zu Hause geblieben und habe einen Film gesehen.' } },
  ], },
];
