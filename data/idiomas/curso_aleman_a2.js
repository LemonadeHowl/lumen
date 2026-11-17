// Curso de alemán · nivel A2. Mismo formato que curso_aleman.js (ver la cabecera de ese archivo).
CURSO.aleman.push({ id: 'A2', nombre: 'A2 · Plataforma', desc: 'Contar lo que pasó, describir tu entorno, dar razones y desenvolverte en compras, trabajo, salud e invitaciones.', u: [
  { id: 'a2-1', t: 'Reisen und Urlaub', es: 'Viajes y vacaciones', v: [
    ['die Reise', 'el viaje'], ['der Flug', 'el vuelo'], ['der Flughafen', 'el aeropuerto'], ['das Flugzeug', 'el avión'], ['der Zug', 'el tren'], ['die Fahrkarte', 'el billete'], ['der Koffer', 'la maleta'],
    ['das Gepäck', 'el equipaje'], ['der Reisepass', 'el pasaporte'], ['die Unterkunft', 'el alojamiento'], ['das Hotel', 'el hotel'], ['die Ferienwohnung', 'el apartamento turístico'], ['buchen', 'reservar'], ['packen', 'hacer la maleta'],
    ['abfahren', 'salir, partir'], ['ankommen', 'llegar'], ['umsteigen', 'hacer transbordo'], ['verpassen', 'perder (un tren, un vuelo)'], ['die Verspätung', 'el retraso'], ['der Strand', 'la playa'], ['die Sehenswürdigkeit', 'el lugar de interés'],
    ['besichtigen', 'visitar (un lugar)'], ['der Ausflug', 'la excursión'], ['das Ausland', 'el extranjero'], ['unterwegs', 'de camino, de viaje'], ['anstrengend', 'agotador'], ['erholsam', 'relajante'], ['die Erinnerung', 'el recuerdo']],
    g: { t: 'War, hatte y los modales en pasado; participios con prefijo', n: `
## El pasado corto: war, hatte
Con «sein», «haben» y los modales, el alemán prefiere el Präteritum incluso al hablar.
| sein: ich war, du warst, er war, wir waren, ihr wart, sie waren
| haben: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten

## Los modales en pasado
Pierden la diéresis y añaden -te:
| können: ich konnte · müssen: ich musste · wollen: ich wollte · dürfen: ich durfte · sollen: ich sollte
| Wir wollten ans Meer fahren, aber wir mussten zu Hause bleiben.
> Las formas de «ich» y «er/sie/es» son iguales: ich konnte, er konnte.

## El participio de los verbos separables
El «ge» se coloca entre el prefijo y el verbo:
| ankommen: angekommen · abfahren: abgefahren · umsteigen: umgestiegen · einkaufen: eingekauft
Los verbos con prefijo inseparable (be-, ver-, er-, ent-, ge-) no llevan «ge»:
| besichtigen: besichtigt · verpassen: verpasst · erzählen: erzählt
> Truco: si el acento cae en el prefijo (ANkommen), es separable y lleva «ge» en medio.
`, e: [
      mc(1, 'Completa: «Letztes Jahr ___ wir in Italien.»', ['waren', 'war', 'wart', 'hatten'], 'wir waren.'),
      mc(1, 'Completa: «Ich ___ kein Geld für ein Hotel.»', ['hatte', 'war', 'hatten', 'hast'], 'ich hatte: pasado de haben.'),
      mc(1, '¿Cuál es el pasado de «ich kann»?', ['ich konnte', 'ich könnte', 'ich kannte', 'ich gekonnt'], 'Sin diéresis y con -te: konnte. «könnte» es condicional y «kannte» viene de kennen.'),
      tx(1, 'Completa con «müssen» en pasado: «Wir ___ den Zug nehmen, weil das Auto kaputt war.»', ['mussten'], 'wir mussten.'),
      mc(1, '¿Cuál es el participio de «ankommen»?', ['angekommen', 'geankommen', 'ankommt', 'angekommt'], 'Separable: an + ge + kommen.'),
      mc(1, '¿Cuál es el participio de «verpassen»?', ['verpasst', 'geverpasst', 'vergepasst', 'verpassen'], 'Con ver- no hay ge-.'),
      mc(1, 'Completa: «Der Zug ist pünktlich ___.»', ['abgefahren', 'geabfahren', 'abfahren', 'abgefahrt'], 'ab + ge + fahren; es irregular y termina en -en.'),
      tx(1, 'Escribe en alemán: «Yo quería reservar un vuelo.»', ['Ich wollte einen Flug buchen'], 'Modal en pasado en segunda posición, infinitivo al final.')] },
    d: { t: 'Eine Reise mit Hindernissen', l: [
      ['Mia', 'Wie war eure Reise nach Wien?', '¿Qué tal vuestro viaje a Viena?'],
      ['Tom', 'Schön, aber die Hinfahrt war anstrengend. Unser Zug hatte zwei Stunden Verspätung.', 'Bien, pero la ida fue agotadora. Nuestro tren tenía dos horas de retraso.'],
      ['Mia', 'Oh nein! Habt ihr den Anschluss verpasst?', '¡Oh, no! ¿Perdisteis el enlace?'],
      ['Tom', 'Ja. Wir mussten in München umsteigen und konnten erst am Abend weiterfahren.', 'Sí. Tuvimos que hacer transbordo en Múnich y no pudimos seguir hasta la tarde.'],
      ['Mia', 'Und wann seid ihr angekommen?', '¿Y cuándo llegasteis?'],
      ['Tom', 'Um Mitternacht. Zum Glück war das Hotel direkt am Bahnhof.', 'A medianoche. Por suerte el hotel estaba justo al lado de la estación.'],
      ['Mia', 'Was habt ihr in Wien gemacht?', '¿Qué hicisteis en Viena?'],
      ['Tom', 'Wir haben das Schloss Schönbrunn besichtigt und einen Ausflug an die Donau gemacht.', 'Visitamos el palacio de Schönbrunn e hicimos una excursión al Danubio.'],
      ['Mia', 'Das klingt erholsam.', 'Suena relajante.'],
      ['Tom', 'War es auch. Nächstes Mal wollen wir aber fliegen!', 'Lo fue. ¡Pero la próxima vez queremos ir en avión!']],
      q: [
        mc(1, 'Warum war die Hinfahrt anstrengend?', ['Der Zug hatte Verspätung.', 'Das Hotel war schlecht.', 'Das Wetter war kalt.', 'Der Flug war teuer.'], '«Unser Zug hatte zwei Stunden Verspätung.»'),
        mc(1, 'Wo mussten sie umsteigen?', ['In München', 'In Wien', 'In Berlin', 'In Salzburg'], '«Wir mussten in München umsteigen.»'),
        mc(1, 'Wann sind sie angekommen?', ['Um Mitternacht', 'Am Nachmittag', 'Am Morgen', 'Um acht Uhr'], '«Um Mitternacht.»'),
        mc(1, 'Was haben sie in Wien besichtigt?', ['Ein Schloss', 'Ein Museum', 'Eine Kirche', 'Einen Flughafen'], '«Wir haben das Schloss Schönbrunn besichtigt.»')] },
    w: { c: 'Cuenta un viaje que hayas hecho: adónde fuiste, cómo viajaste, qué problema hubo y qué visitaste. Usa «war», «hatte» y algún modal en pasado.', m: 'Im Sommer war ich mit meiner Schwester in Lissabon. Wir sind geflogen, aber das Flugzeug hatte Verspätung und wir mussten drei Stunden warten. Die Stadt war wunderschön. Wir haben die Altstadt besichtigt und einen Ausflug ans Meer gemacht. Ich wollte noch länger bleiben!' } },

  { id: 'a2-2', t: 'Wohnen und Umziehen', es: 'La vivienda y la mudanza', v: [
    ['der Umzug', 'la mudanza'], ['umziehen', 'mudarse'], ['einziehen', 'instalarse en una vivienda'], ['die Miete', 'el alquiler'], ['der Vermieter', 'el casero'], ['der Nachbar', 'el vecino'], ['das Erdgeschoss', 'la planta baja'],
    ['der Stock', 'el piso, la planta'], ['der Aufzug', 'el ascensor'], ['der Keller', 'el sótano'], ['der Balkon', 'el balcón'], ['der Flur', 'el pasillo'], ['die Wand', 'la pared'], ['die Decke', 'el techo'],
    ['der Boden', 'el suelo'], ['das Regal', 'la estantería'], ['der Schrank', 'el armario'], ['der Teppich', 'la alfombra'], ['die Lampe', 'la lámpara'], ['der Spiegel', 'el espejo'], ['das Sofa', 'el sofá'],
    ['stellen', 'poner (de pie)'], ['legen', 'poner (tumbado)'], ['hängen', 'colgar; estar colgado'], ['stehen', 'estar (de pie)'], ['liegen', 'estar (tumbado)'], ['gemütlich', 'acogedor'], ['hell', 'luminoso']],
    g: { t: 'Preposiciones con acusativo o dativo', n: `
## Nueve preposiciones con dos casos
**in, an, auf, über, unter, vor, hinter, neben, zwischen** llevan acusativo o dativo según la pregunta:
- **Wohin?** (¿adónde?, movimiento hacia un sitio) → **acusativo**
- **Wo?** (¿dónde?, posición sin cambio de lugar) → **dativo**
| Ich stelle die Lampe auf den Tisch.     La pongo sobre la mesa. (wohin → acusativo)
| Die Lampe steht auf dem Tisch.          Está sobre la mesa. (wo → dativo)

## Recordatorio de los artículos
$ Acusativo: den · die · das · die      Dativo: dem · der · dem · den (+n)
Contracciones frecuentes: in + das = ins · in + dem = im · an + das = ans · an + dem = am

## Parejas de verbos
Unos indican la acción de colocar (con acusativo) y otros el resultado (con dativo):
| stellen → stehen     de pie, en vertical: botellas, muebles
| legen → liegen       tumbado, en horizontal: libros, alfombras
| hängen → hängen      colgado: cuadros, lámparas
| Ich lege das Buch auf das Sofa. → Das Buch liegt auf dem Sofa.
| Wir hängen das Bild an die Wand. → Das Bild hängt an der Wand.
> «an» indica contacto lateral o vertical (pared, orilla); «auf», encima de una superficie horizontal.
`, e: [
      mc(1, 'Completa: «Ich stelle das Regal neben ___ Tür.»', ['die', 'der', 'dem', 'den'], 'Wohin? → acusativo; «Tür» es femenino: die.'),
      mc(1, 'Completa: «Das Regal steht neben ___ Tür.»', ['der', 'die', 'den', 'das'], 'Wo? → dativo femenino: der.'),
      mc(1, 'Completa: «Der Teppich liegt auf ___ Boden.»', ['dem', 'den', 'der', 'das'], 'Posición → dativo masculino: dem.'),
      mc(1, 'Completa: «Wir hängen den Spiegel an ___ Wand.»', ['die', 'der', 'dem', 'den'], 'Acción de colgar → acusativo femenino: die.'),
      mc(1, '¿Qué pregunta pide dativo con estas preposiciones?', ['Wo?', 'Wohin?', 'Wen?', 'Was?'], 'Wo? = posición = dativo.'),
      tx(1, 'Completa con la contracción de in + das: «Wir gehen ___ Kino.»', ['ins'], 'Movimiento hacia un lugar → acusativo: in das = ins.'),
      mc(1, 'Completa: «Die Bücher ___ auf dem Tisch.»', ['liegen', 'legen', 'stellen', 'setzen'], 'Resultado, en horizontal y con dativo: liegen.'),
      mc(1, 'Completa: «Kannst du die Flasche in den Kühlschrank ___?»', ['stellen', 'stehen', 'liegen', 'sitzen'], 'Acción de colocar algo de pie, con acusativo: stellen.')] },
    d: { t: 'Der Umzug', l: [
      ['Sara', 'So, das ist die neue Wohnung. Wohin kommt das Sofa?', 'Bueno, este es el piso nuevo. ¿Dónde va el sofá?'],
      ['Ben', 'Stellen wir es an die Wand, unter das Fenster.', 'Pongámoslo contra la pared, debajo de la ventana.'],
      ['Sara', 'Gut. Und das Regal?', 'Vale. ¿Y la estantería?'],
      ['Ben', 'Das Regal steht schon im Flur. Ich finde es dort praktisch.', 'La estantería ya está en el pasillo. Me parece práctica ahí.'],
      ['Sara', 'Einverstanden. Den Teppich legen wir vor das Sofa.', 'De acuerdo. La alfombra la ponemos delante del sofá.'],
      ['Ben', 'Wo ist eigentlich die Lampe?', 'Por cierto, ¿dónde está la lámpara?'],
      ['Sara', 'Sie liegt noch im Auto, zwischen den Kartons.', 'Sigue en el coche, entre las cajas.'],
      ['Ben', 'Ich hole sie. Hängen wir sie über den Tisch?', 'Voy a por ella. ¿La colgamos encima de la mesa?'],
      ['Sara', 'Ja, dann ist es abends schön hell und gemütlich.', 'Sí, así por la noche habrá buena luz y será acogedor.']],
      q: [
        mc(1, 'Wohin stellen sie das Sofa?', ['Unter das Fenster', 'In den Flur', 'Vor die Tür', 'Auf den Balkon'], '«…an die Wand, unter das Fenster.»'),
        mc(1, 'Wo steht das Regal?', ['Im Flur', 'Im Auto', 'Im Keller', 'Neben dem Sofa'], '«Das Regal steht schon im Flur.»'),
        mc(1, 'Wo liegt die Lampe?', ['Im Auto', 'Auf dem Tisch', 'Im Flur', 'Unter dem Fenster'], '«Sie liegt noch im Auto.»'),
        mc(1, 'Wohin hängen sie die Lampe?', ['Über den Tisch', 'An die Wand', 'Über das Sofa', 'In den Flur'], '«Hängen wir sie über den Tisch?» – «Ja…»')] },
    w: { c: 'Describe tu salón o tu habitación en cinco frases: qué muebles hay y dónde están. Usa preposiciones con dativo.', m: 'Mein Zimmer ist klein, aber gemütlich. Das Bett steht an der Wand, neben dem Fenster. Auf dem Schreibtisch liegen viele Bücher. Über dem Bett hängt ein Bild von meiner Familie. Vor dem Schrank liegt ein blauer Teppich.' } },

  { id: 'a2-3', t: 'Arbeit und Beruf', es: 'El trabajo y la profesión', v: [
    ['der Beruf', 'la profesión'], ['die Stelle', 'el puesto de trabajo'], ['die Firma', 'la empresa'], ['der Chef', 'el jefe'], ['der Kollege', 'el compañero de trabajo'], ['die Bewerbung', 'la solicitud de empleo'], ['sich bewerben', 'solicitar un empleo'],
    ['der Lebenslauf', 'el currículum'], ['das Vorstellungsgespräch', 'la entrevista de trabajo'], ['das Gehalt', 'el sueldo'], ['verdienen', 'ganar (dinero)'], ['die Arbeitszeit', 'el horario laboral'], ['die Überstunde', 'la hora extra'], ['die Ausbildung', 'la formación profesional'],
    ['die Erfahrung', 'la experiencia'], ['die Besprechung', 'la reunión'], ['die Aufgabe', 'la tarea'], ['erledigen', 'despachar, dejar hecho'], ['kündigen', 'dimitir; despedir'], ['arbeitslos', 'en paro'], ['selbstständig', 'autónomo'],
    ['die Teilzeit', 'la jornada parcial'], ['die Vollzeit', 'la jornada completa'], ['der Feierabend', 'el fin de la jornada'], ['die Pause', 'el descanso'], ['stressig', 'estresante'], ['zufrieden', 'satisfecho'], ['der Erfolg', 'el éxito']],
    g: { t: 'Oraciones subordinadas con weil, dass y wenn', n: `
## El verbo, al final
En las oraciones introducidas por **weil** (porque), **dass** (que) y **wenn** (si, cuando), el verbo conjugado va **al final**. Siempre se separan con coma.
| Ich lerne Deutsch, weil ich in Wien arbeiten möchte.
| Ich glaube, dass die Stelle interessant ist.
| Wenn ich Zeit habe, schreibe ich die Bewerbung.

## Detalles del orden
- Con verbo modal o Perfekt, el verbo conjugado va detrás del infinitivo o del participio: «…, weil ich heute lange arbeiten **muss**.» · «…, dass er gekündigt **hat**.»
- Los verbos separables se vuelven a unir: «…, wenn der Zug pünktlich **ankommt**.»
- Si la subordinada va primero, la principal empieza por el verbo: «Wenn ich Zeit habe, **schreibe** ich…»

## weil y denn
Los dos significan «porque», pero «denn» no cambia el orden:
| Ich bleibe zu Hause, weil ich krank bin.
| Ich bleibe zu Hause, denn ich bin krank.
> «wenn» expresa una condición o algo que se repite; para preguntar «cuándo» se usa «wann».
`, e: [
      mc(1, 'Completa: «Ich bin müde, weil ich viel ___.»', ['gearbeitet habe', 'habe gearbeitet', 'arbeiten habe', 'habe arbeiten'], 'En la subordinada el verbo conjugado (habe) va al final, detrás del participio.'),
      mc(1, '¿Qué frase es correcta?', ['Ich glaube, dass er heute kommt.', 'Ich glaube, dass er kommt heute.', 'Ich glaube, dass kommt er heute.', 'Ich glaube dass, er heute kommt.'], 'Coma antes de «dass» y verbo al final.'),
      mc(1, 'Completa: «___ es morgen regnet, bleiben wir zu Hause.»', ['Wenn', 'Wann', 'Dass', 'Denn'], 'Condición: wenn. «wann» solo pregunta por el momento.'),
      mc(1, '¿Qué frase es correcta?', ['Sie bleibt zu Hause, denn sie ist krank.', 'Sie bleibt zu Hause, denn sie krank ist.', 'Sie bleibt zu Hause, weil sie ist krank.', 'Sie bleibt zu Hause, weil ist sie krank.'], '«denn» mantiene el orden normal; «weil» manda el verbo al final.'),
      tx(1, 'Ordena la subordinada (er / hat / gekündigt): «Sie sagt, dass ___.»', ['er gekündigt hat'], 'Sujeto, participio y el verbo conjugado al final.'),
      mc(1, '¿Cómo continúa? «Wenn ich Zeit habe, …»', ['rufe ich dich an.', 'ich rufe dich an.', 'ich dich anrufe.', 'anrufe ich dich.'], 'Tras la subordinada, la principal empieza por el verbo; «anrufen» se separa.'),
      mc(1, 'Completa: «Ich weiß nicht, ___ das Gespräch beginnt.»', ['wann', 'wenn', 'denn', 'weil'], 'Pregunta indirecta por el momento: wann.'),
      tx(1, 'Completa con «porque»: «Sie ist zufrieden, ___ sie gut verdient.»', ['weil', 'da'], 'El verbo está al final, así que es «weil» (no «denn»).')] },
    d: { t: 'Das Vorstellungsgespräch', l: [
      ['Frau Lang', 'Guten Tag, Herr Navarro. Warum möchten Sie bei uns arbeiten?', 'Buenos días, señor Navarro. ¿Por qué quiere trabajar con nosotros?'],
      ['Herr Navarro', 'Weil Ihre Firma international arbeitet und ich meine Sprachkenntnisse nutzen möchte.', 'Porque su empresa trabaja a nivel internacional y quiero aprovechar mis conocimientos de idiomas.'],
      ['Frau Lang', 'Ich sehe im Lebenslauf, dass Sie drei Jahre in Madrid gearbeitet haben.', 'Veo en el currículum que ha trabajado tres años en Madrid.'],
      ['Herr Navarro', 'Ja, als Informatiker. Ich habe dort viel Erfahrung gesammelt.', 'Sí, como informático. Allí adquirí mucha experiencia.'],
      ['Frau Lang', 'Die Stelle ist in Vollzeit. Ist das ein Problem?', 'El puesto es a jornada completa. ¿Es un problema?'],
      ['Herr Navarro', 'Nein. Wenn es nötig ist, mache ich auch Überstunden.', 'No. Si hace falta, también hago horas extra.'],
      ['Frau Lang', 'Gut. Haben Sie noch Fragen?', 'Bien. ¿Tiene alguna pregunta?'],
      ['Herr Navarro', 'Ja. Ich möchte wissen, wann ich anfangen kann.', 'Sí. Me gustaría saber cuándo puedo empezar.'],
      ['Frau Lang', 'Wenn alles klappt, schon am ersten Mai.', 'Si todo sale bien, ya el uno de mayo.']],
      q: [
        mc(1, 'Warum möchte Herr Navarro dort arbeiten?', ['Weil die Firma international arbeitet.', 'Weil das Gehalt hoch ist.', 'Weil er in der Nähe wohnt.', 'Weil er arbeitslos ist.'], '«Weil Ihre Firma international arbeitet…»'),
        mc(1, 'Wie lange hat er in Madrid gearbeitet?', ['Drei Jahre', 'Ein Jahr', 'Fünf Jahre', 'Drei Monate'], '«…dass Sie drei Jahre in Madrid gearbeitet haben.»'),
        mc(1, 'Was ist er von Beruf?', ['Informatiker', 'Lehrer', 'Arzt', 'Verkäufer'], '«Ja, als Informatiker.»'),
        mc(1, 'Wann kann er vielleicht anfangen?', ['Am ersten Mai', 'Sofort', 'Im Sommer', 'Nächstes Jahr'], '«Wenn alles klappt, schon am ersten Mai.»')] },
    w: { c: 'Explica en cinco frases a qué te dedicas o qué estudias, qué te gusta de ello y por qué. Usa «weil», «dass» y «wenn».', m: 'Ich arbeite als Krankenpfleger in einem Krankenhaus. Ich mag meinen Beruf, weil ich Menschen helfen kann. Manchmal ist die Arbeit stressig, weil wir viele Überstunden machen. Ich finde, dass meine Kollegen sehr nett sind. Wenn ich Feierabend habe, gehe ich gern schwimmen.' } },

  { id: 'a2-4', t: 'Einkaufen und Kleidung', es: 'Las compras y la ropa', v: [
    ['die Kleidung', 'la ropa'], ['die Hose', 'el pantalón'], ['das Hemd', 'la camisa'], ['die Bluse', 'la blusa'], ['der Rock', 'la falda'], ['das Kleid', 'el vestido'], ['der Pullover', 'el jersey'],
    ['die Jacke', 'la chaqueta'], ['der Mantel', 'el abrigo'], ['der Schuh', 'el zapato'], ['die Größe', 'la talla'], ['die Farbe', 'el color'], ['anprobieren', 'probarse'], ['passen', 'quedar bien (de talla)'],
    ['gut stehen', 'sentar bien'], ['die Umkleidekabine', 'el probador'], ['der Preis', 'el precio'], ['das Angebot', 'la oferta'], ['günstig', 'barato, a buen precio'], ['teuer', 'caro'], ['die Kasse', 'la caja'],
    ['bar', 'en efectivo'], ['die Quittung', 'el recibo'], ['umtauschen', 'cambiar (un artículo)'], ['eng', 'estrecho'], ['weit', 'ancho, holgado'], ['bequem', 'cómodo'], ['modisch', 'a la moda']],
    g: { t: 'La declinación del adjetivo y la comparación', n: `
## El adjetivo delante del sustantivo
Detrás de «sein» el adjetivo no cambia: «Die Jacke ist **rot**.» Delante de un sustantivo recibe una terminación.

## Con artículo determinado (der, die, das)
$ Nominativo: der rote Rock · die rote Jacke · das rote Kleid · die roten Schuhe
$ Acusativo: den roten Rock · die rote Jacke · das rote Kleid · die roten Schuhe
$ Dativo: dem roten Rock · der roten Jacke · dem roten Kleid · den roten Schuhen
> Regla rápida: **-e** en las cinco formas del singular donde el artículo es der, die o das sin cambiar (nominativo, y acusativo de die y das); **-en** en todo lo demás.

## Con artículo indeterminado (ein, kein, mein)
Como «ein» no muestra el género, lo muestra el adjetivo:
$ Nominativo: ein roter Rock · eine rote Jacke · ein rotes Kleid
$ Acusativo: einen roten Rock · eine rote Jacke · ein rotes Kleid
$ Dativo: einem roten Rock · einer roten Jacke · einem roten Kleid

## Comparar
- Comparativo: adjetivo + **-er** + **als** → billig: billiger als · klein: kleiner als
- Superlativo: **am** + adjetivo + **-sten** → am billigsten · am kleinsten
- Muchos monosílabos toman diéresis: groß: größer, am größten · alt: älter · jung: jünger · kurz: kürzer
- Irregulares: gut: besser, am besten · viel: mehr, am meisten · gern: lieber, am liebsten · teuer: teurer
| Die blaue Hose ist bequemer als die schwarze, aber die graue ist am bequemsten.
> Igualdad: «so … wie» → Der Rock ist so teuer wie das Kleid.
`, e: [
      mc(1, 'Completa: «Ich suche einen ___ Mantel.»', ['warmen', 'warmer', 'warme', 'warmes'], 'Acusativo masculino: einen warmen.'),
      mc(1, 'Completa: «Das ist ein ___ Kleid.»', ['schönes', 'schöne', 'schöner', 'schönen'], 'Neutro con «ein»: el adjetivo marca el género con -es.'),
      mc(1, 'Completa: «Die ___ Jacke gefällt mir.»', ['blaue', 'blauen', 'blauer', 'blaues'], 'Nominativo femenino con artículo determinado: -e.'),
      mc(1, 'Completa: «Er trägt eine Hose mit einem ___ Hemd.»', ['weißen', 'weißes', 'weißer', 'weiße'], '«mit» pide dativo, y en dativo el adjetivo siempre acaba en -en.'),
      tx(1, 'Escribe el comparativo de «gut».', ['besser'], 'gut, besser, am besten.'),
      mc(1, 'Completa: «Diese Schuhe sind ___ als die anderen.»', ['bequemer', 'bequem', 'am bequemsten', 'mehr bequem'], 'Comparativo: -er + als. En alemán no se usa «mehr» para comparar adjetivos.'),
      mc(1, '¿Cuál es el superlativo de «teuer»?', ['am teuersten', 'am teuerste', 'teurer', 'am meisten teuer'], 'am + adjetivo + -sten.'),
      tx(1, 'Completa: «Der Rock ist so teuer ___ das Kleid.»', ['wie'], 'Igualdad: so … wie.')] },
    d: { t: 'Im Kaufhaus', l: [
      ['Verkäuferin', 'Guten Tag. Kann ich Ihnen helfen?', 'Buenos días. ¿Puedo ayudarle?'],
      ['Kundin', 'Ja, ich suche eine warme Jacke für den Winter.', 'Sí, busco una chaqueta de abrigo para el invierno.'],
      ['Verkäuferin', 'Welche Größe haben Sie?', '¿Qué talla tiene?'],
      ['Kundin', 'Größe 38. Haben Sie diese graue Jacke auch in Blau?', 'La 38. ¿Tienen esta chaqueta gris también en azul?'],
      ['Verkäuferin', 'Leider nicht, aber wir haben ein ähnliches Modell in Dunkelblau. Es ist sogar günstiger.', 'Por desgracia no, pero tenemos un modelo parecido en azul oscuro. Incluso es más barato.'],
      ['Kundin', 'Darf ich es anprobieren?', '¿Puedo probármelo?'],
      ['Verkäuferin', 'Natürlich. Die Umkleidekabinen sind dort hinten.', 'Claro. Los probadores están allí al fondo.'],
      ['Kundin', 'Die Jacke passt gut, aber die Ärmel sind ein bisschen zu lang.', 'La chaqueta me queda bien, pero las mangas son un poco largas.'],
      ['Verkäuferin', 'Dann probieren Sie die kleinere Größe. Sie können die Jacke auch innerhalb von zwei Wochen umtauschen.', 'Entonces pruebe la talla más pequeña. También puede cambiar la chaqueta en un plazo de dos semanas.'],
      ['Kundin', 'Gut, ich nehme sie. Kann ich mit Karte zahlen?', 'Bien, me la llevo. ¿Puedo pagar con tarjeta?']],
      q: [
        mc(1, 'Was sucht die Kundin?', ['Eine warme Jacke', 'Einen Mantel', 'Ein Kleid', 'Schuhe'], '«…ich suche eine warme Jacke für den Winter.»'),
        mc(1, 'Welche Farbe hat das ähnliche Modell?', ['Dunkelblau', 'Grau', 'Schwarz', 'Rot'], '«…ein ähnliches Modell in Dunkelblau.»'),
        mc(1, 'Was ist das Problem mit der Jacke?', ['Die Ärmel sind zu lang.', 'Sie ist zu teuer.', 'Sie ist zu eng.', 'Die Farbe gefällt ihr nicht.'], '«…die Ärmel sind ein bisschen zu lang.»'),
        mc(1, 'Wie lange kann man die Jacke umtauschen?', ['Zwei Wochen', 'Zwei Tage', 'Einen Monat', 'Gar nicht'], '«…innerhalb von zwei Wochen umtauschen.»')] },
    w: { c: 'Describe qué ropa llevas hoy y compara dos prendas tuyas (cuál es más cómoda, más cara…). Cinco frases con adjetivos delante del sustantivo.', m: 'Heute trage ich eine schwarze Hose und einen grauen Pullover. Dazu habe ich meine alten, bequemen Schuhe an. Mein neuer Mantel ist wärmer als meine Jacke, aber er war auch teurer. Am liebsten trage ich ein weites Hemd. Mein blaues Hemd steht mir am besten.' } },

  { id: 'a2-5', t: 'Sport und Gesundheit', es: 'El deporte y la salud', v: [
    ['sich waschen', 'lavarse'], ['sich duschen', 'ducharse'], ['sich anziehen', 'vestirse'], ['sich ausruhen', 'descansar'], ['sich beeilen', 'darse prisa'], ['sich fühlen', 'sentirse'], ['sich freuen', 'alegrarse'],
    ['sich ärgern', 'enfadarse'], ['sich erinnern', 'acordarse'], ['sich interessieren', 'interesarse'], ['sich treffen', 'quedar, reunirse'], ['sich bewegen', 'moverse'], ['sich erkälten', 'resfriarse'], ['sich entspannen', 'relajarse'],
    ['das Training', 'el entrenamiento'], ['der Verein', 'el club, la asociación'], ['die Mannschaft', 'el equipo'], ['joggen', 'salir a correr'], ['die Bewegung', 'el movimiento, el ejercicio'], ['die Ernährung', 'la alimentación'], ['das Gewicht', 'el peso'],
    ['abnehmen', 'adelgazar'], ['zunehmen', 'engordar'], ['fit', 'en forma'], ['regelmäßig', 'con regularidad'], ['die Gewohnheit', 'la costumbre'], ['der Stress', 'el estrés'], ['die Gesundheit', 'la salud']],
    g: { t: 'Verbos reflexivos y pronombres en dativo', n: `
## Verbos reflexivos
El sujeto hace la acción sobre sí mismo. El pronombre reflexivo va normalmente en acusativo:
$ ich … mich · du … dich · er/sie/es … sich · wir … uns · ihr … euch · sie/Sie … sich
| Ich dusche mich jeden Morgen.      Me ducho cada mañana.
| Wir treffen uns um acht.           Quedamos a las ocho.
Si la frase ya tiene otro objeto en acusativo, el reflexivo pasa a dativo (solo cambian ich y du: **mir**, **dir**):
| Ich wasche mich. → Ich wasche mir die Hände.
> Muchos reflexivos llevan una preposición fija: sich freuen **auf** (algo que va a llegar) o **über** (algo que ya está), sich interessieren **für**, sich erinnern **an**, sich ärgern **über**.

## Los pronombres personales en dativo
$ mir · dir · ihm / ihr / ihm · uns · euch · ihnen / Ihnen
Se usan con los verbos que rigen dativo —helfen, gefallen, gehören, danken, schmecken, passen, wehtun— y para la persona que recibe algo:
| Der Sport gefällt mir.            Me gusta el deporte.
| Kannst du ihm helfen?             ¿Puedes ayudarle?
| Ich gebe dir das Buch.            Te doy el libro.

## Orden de dos objetos
La persona (dativo) va antes que la cosa (acusativo); pero si la cosa es un pronombre, pasa delante:
| Ich gebe meinem Bruder den Ball. → Ich gebe ihn meinem Bruder. → Ich gebe ihn ihm.
`, e: [
      mc(1, 'Completa: «Ich fühle ___ heute nicht gut.»', ['mich', 'mir', 'sich', 'dich'], 'Reflexivo en acusativo de «ich»: mich.'),
      mc(1, 'Completa: «Wir treffen ___ vor dem Kino.»', ['uns', 'euch', 'sich', 'wir'], 'wir … uns.'),
      mc(1, 'Completa: «Ich wasche ___ die Haare.»', ['mir', 'mich', 'sich', 'mein'], 'Ya hay un acusativo (die Haare), así que el reflexivo va en dativo: mir.'),
      mc(1, 'Completa: «Er interessiert sich ___ Fußball.»', ['für', 'an', 'über', 'auf'], 'sich interessieren für.'),
      mc(1, 'Completa (a ella): «Das Training gefällt ___ sehr.»', ['ihr', 'sie', 'ihm', 'ihnen'], '«gefallen» rige dativo; femenino singular: ihr.'),
      tx(1, 'Completa (a mí): «Kannst du ___ helfen?»', ['mir'], '«helfen» rige dativo: mir.'),
      mc(1, 'Completa (aún no ha llegado): «Ich freue mich ___ das Wochenende.»', ['auf', 'über', 'für', 'an'], 'sich freuen auf: ilusión por algo futuro.'),
      mc(1, '¿Qué frase es correcta?', ['Ich gebe es dir.', 'Ich gebe dir es.', 'Ich gebe es dich.', 'Ich gebe du es.'], 'Si la cosa es un pronombre, el acusativo va delante del dativo.')] },
    d: { t: 'Ein neuer Anfang', l: [
      ['Text', 'Seit Januar hat Paul sein Leben verändert. Früher hat er sich kaum bewegt und sich oft müde gefühlt.', 'Desde enero Paul ha cambiado de vida. Antes apenas se movía y a menudo se sentía cansado.'],
      ['Text', 'Sein Arzt hat ihm gesagt, dass er mehr Sport machen und sich gesünder ernähren soll.', 'Su médico le dijo que hiciera más deporte y comiera más sano.'],
      ['Text', 'Jetzt steht Paul früher auf und joggt dreimal pro Woche im Park. Am Wochenende trifft er sich mit Freunden zum Schwimmen.', 'Ahora Paul se levanta antes y sale a correr tres veces por semana por el parque. Los fines de semana queda con amigos para nadar.'],
      ['Text', 'Am Anfang hat er sich oft geärgert, weil das Training so anstrengend war. Aber seine Schwester hat ihm geholfen und ist mit ihm gelaufen.', 'Al principio se enfadaba a menudo porque el entrenamiento era muy duro. Pero su hermana le ayudó y corría con él.'],
      ['Text', 'Inzwischen hat er fünf Kilo abgenommen. Er fühlt sich fit und freut sich schon auf seinen ersten Stadtlauf im Mai.', 'Entretanto ha adelgazado cinco kilos. Se siente en forma y ya tiene ganas de su primera carrera urbana en mayo.']],
      q: [
        mc(1, 'Wie hat sich Paul früher gefühlt?', ['Oft müde', 'Sehr fit', 'Gesund', 'Glücklich'], '«…und sich oft müde gefühlt.»'),
        mc(1, 'Wie oft joggt er jetzt?', ['Dreimal pro Woche', 'Jeden Tag', 'Einmal pro Woche', 'Nur am Wochenende'], '«…joggt dreimal pro Woche im Park.»'),
        mc(1, 'Wer hat ihm am Anfang geholfen?', ['Seine Schwester', 'Sein Arzt', 'Seine Freunde', 'Ein Trainer'], '«Aber seine Schwester hat ihm geholfen…»'),
        mc(1, 'Worauf freut er sich?', ['Auf einen Stadtlauf', 'Auf den Urlaub', 'Auf das Schwimmen', 'Auf den Januar'], '«…freut sich schon auf seinen ersten Stadtlauf im Mai.»')] },
    w: { c: 'Describe tu rutina de un día normal y qué haces para cuidarte. Usa al menos cuatro verbos reflexivos.', m: 'Ich stehe um sieben Uhr auf, dusche mich und ziehe mich an. Dann beeile ich mich, weil mein Bus um acht fährt. Nach der Arbeit ruhe ich mich ein bisschen aus. Zweimal pro Woche treffe ich mich mit einer Freundin zum Joggen. Danach fühle ich mich immer besser.' } },

  { id: 'a2-6', t: 'Feste und Einladungen', es: 'Fiestas e invitaciones', v: [
    ['das Fest', 'la fiesta'], ['die Feier', 'la celebración'], ['feiern', 'celebrar'], ['der Geburtstag', 'el cumpleaños'], ['die Hochzeit', 'la boda'], ['die Einladung', 'la invitación'], ['einladen', 'invitar'],
    ['der Gast', 'el invitado'], ['das Geschenk', 'el regalo'], ['schenken', 'regalar'], ['mitbringen', 'traer, llevar consigo'], ['gratulieren', 'felicitar'], ['der Glückwunsch', 'la felicitación'], ['die Überraschung', 'la sorpresa'],
    ['die Kerze', 'la vela'], ['die Torte', 'la tarta'], ['anstoßen', 'brindar'], ['zusagen', 'aceptar (una invitación)'], ['absagen', 'cancelar, declinar'], ['vorbereiten', 'preparar'], ['dekorieren', 'decorar'],
    ['die Stimmung', 'el ambiente'], ['Weihnachten', 'Navidad'], ['Silvester', 'Nochevieja'], ['Ostern', 'Pascua'], ['der Feiertag', 'el día festivo'], ['das Feuerwerk', 'los fuegos artificiales'], ['Herzlichen Glückwunsch!', '¡felicidades!']],
    g: { t: 'Cortesía con könnte, hätte y würde; el verbo werden', n: `
## Pedir y proponer con educación
Para sonar cortés se usan estas formas, que equivalen al condicional español:
| hätte (tendría) · wäre (sería, estaría) · könnte (podría) · würde + infinitivo (haría…)
$ ich hätte · du hättest · er hätte · wir hätten · ihr hättet · sie hätten
$ ich könnte · du könntest · er könnte · wir könnten · ihr könntet · sie könnten
$ ich würde · du würdest · er würde · wir würden · ihr würdet · sie würden
| Könnten Sie mir helfen?                  ¿Podría ayudarme?
| Ich hätte gern ein Stück Torte.          Querría un trozo de tarta.
| Würdest du bitte den Salat mitbringen?   ¿Traerías la ensalada, por favor?
| Wir könnten zusammen feiern.             Podríamos celebrarlo juntos.
> Para dar un consejo: «Du solltest…» (deberías) y «An deiner Stelle würde ich…» (yo en tu lugar…).

## werden: tres usos
$ ich werde · du wirst · er wird · wir werden · ihr werdet · sie werden
- Cambio («hacerse, cumplir, ponerse»): Sie wird morgen dreißig. · Es wird kalt.
- Futuro, con el infinitivo al final: Wir werden eine große Party machen.
- Suposición: Er wird wohl noch im Büro sein.
> Para el futuro basta casi siempre el presente con una expresión de tiempo: «Morgen feiern wir.»

## Aceptar y rechazar una invitación
| Vielen Dank für die Einladung, ich komme gern.
| Leider kann ich nicht kommen, weil ich arbeiten muss. Vielleicht ein anderes Mal?
`, e: [
      mc(1, '¿Cuál es la forma más cortés?', ['Könnten Sie mir bitte helfen?', 'Helfen Sie mir!', 'Sie müssen mir helfen.', 'Ich will Hilfe.'], '«könnten» + «bitte» es la petición educada.'),
      mc(1, 'Completa: «Ich ___ gern einen Kaffee.»', ['hätte', 'habe', 'würde', 'wäre'], '«Ich hätte gern…» es la fórmula para pedir.'),
      mc(1, 'Completa: «___ du bitte das Fenster schließen?»', ['Würdest', 'Wirst', 'Hättest', 'Wärst'], 'würde + infinitivo: ¿cerrarías…?'),
      tx(1, 'Completa con «werden»: «Meine Oma ___ morgen achtzig.»', ['wird'], 'er/sie/es wird: cumple.'),
      mc(1, 'Completa (un consejo): «Du ___ mehr schlafen.»', ['solltest', 'sollst du', 'würdest', 'hättest'], '«Du solltest…» = deberías.'),
      mc(1, 'Completa (una propuesta): «Wir ___ am Samstag grillen. Was meinst du?»', ['könnten', 'konnten', 'gekonnt', 'können haben'], '«könnten» con diéresis propone; «konnten» sin ella es pasado.'),
      mc(1, '«Es wird dunkel» significa…', ['Está oscureciendo', 'Estaba oscuro', 'Sería oscuro', 'Hay que apagar la luz'], '«werden» + adjetivo expresa un cambio.'),
      tx(1, 'Completa el futuro: «Ich ___ im Sommer nach Berlin fahren.»', ['werde'], 'ich werde + infinitivo al final.')] },
    d: { t: 'Die Einladung', l: [
      ['Nina', 'Hallo, Leo! Ich werde am Samstag dreißig und mache eine Party. Hättest du Lust zu kommen?', '¡Hola, Leo! El sábado cumplo treinta y hago una fiesta. ¿Te apetecería venir?'],
      ['Leo', 'Sehr gern! Wo feierst du denn?', '¡Encantado! ¿Y dónde lo celebras?'],
      ['Nina', 'Bei mir im Garten, ab sieben Uhr. Es gibt Musik und ein Feuerwerk.', 'En mi jardín, a partir de las siete. Habrá música y fuegos artificiales.'],
      ['Leo', 'Toll. Soll ich etwas mitbringen?', 'Genial. ¿Llevo algo?'],
      ['Nina', 'Könntest du vielleicht einen Salat machen? Die Torte bringt meine Mutter mit.', '¿Podrías hacer una ensalada? La tarta la trae mi madre.'],
      ['Leo', 'Kein Problem. Dürfte ich auch meine Freundin mitbringen?', 'Sin problema. ¿Podría llevar también a mi novia?'],
      ['Nina', 'Natürlich! Ich würde mich freuen, sie kennenzulernen.', '¡Claro! Me alegraría conocerla.'],
      ['Leo', 'Wunderbar. Was wünschst du dir eigentlich?', 'Estupendo. Por cierto, ¿qué te gustaría que te regalaran?'],
      ['Nina', 'Nichts Besonderes. Ein gutes Buch wäre schön.', 'Nada especial. Un buen libro estaría bien.']],
      q: [
        mc(1, 'Wie alt wird Nina?', ['Dreißig', 'Zwanzig', 'Vierzig', 'Achtzehn'], '«Ich werde am Samstag dreißig.»'),
        mc(1, 'Wo findet die Party statt?', ['Im Garten', 'In einem Restaurant', 'Im Park', 'Bei Leo'], '«Bei mir im Garten.»'),
        mc(1, 'Was soll Leo mitbringen?', ['Einen Salat', 'Die Torte', 'Getränke', 'Musik'], '«Könntest du vielleicht einen Salat machen?»'),
        mc(1, 'Was wünscht sich Nina?', ['Ein Buch', 'Blumen', 'Eine Torte', 'Eine Reise'], '«Ein gutes Buch wäre schön.»')] },
    w: { c: 'Un amigo te invita a su boda, pero ese día no puedes. Escríbele: agradece la invitación, explica por qué no puedes ir y propón veros otro día.', m: 'Lieber Markus,\nvielen Dank für die Einladung zu eurer Hochzeit! Ich würde sehr gern kommen, aber leider muss ich an diesem Wochenende arbeiten. Das tut mir wirklich leid. Könnten wir uns vielleicht im Juli treffen? Dann würde ich euch zum Essen einladen. Ich wünsche euch ein wunderschönes Fest!\nHerzliche Grüße\nAna' } },
] });
