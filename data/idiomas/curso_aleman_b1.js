// Curso de alemán · nivel B1. Mismo formato que curso_aleman.js (ver la cabecera de ese archivo).
CURSO.aleman.push({ id: 'B1', nombre: 'B1 · Umbral', desc: 'Entender textos claros sobre temas conocidos, contar experiencias, justificar opiniones y resolver la mayoría de situaciones de un viaje o del trabajo.', u: [
  { id: 'b1-1', t: 'Medien und Kommunikation', es: 'Medios y comunicación', v: [
    ['die Nachricht', 'la noticia; el mensaje'], ['die Zeitung', 'el periódico'], ['die Zeitschrift', 'la revista'], ['der Artikel', 'el artículo'], ['die Sendung', 'el programa (de radio o televisión)'], ['der Sender', 'la emisora, la cadena'], ['die Werbung', 'la publicidad'],
    ['das Netzwerk', 'la red'], ['soziale Medien', 'redes sociales'], ['der Bildschirm', 'la pantalla'], ['das Gerät', 'el aparato'], ['die Datei', 'el archivo'], ['herunterladen', 'descargar'], ['hochladen', 'subir (un archivo)'],
    ['speichern', 'guardar'], ['löschen', 'borrar'], ['die Verbindung', 'la conexión'], ['erreichbar', 'localizable'], ['der Datenschutz', 'la protección de datos'], ['die Quelle', 'la fuente'], ['zuverlässig', 'fiable'],
    ['die Meinung', 'la opinión'], ['berichten', 'informar'], ['veröffentlichen', 'publicar'], ['teilen', 'compartir'], ['abonnieren', 'suscribirse a'], ['die Schlagzeile', 'el titular'], ['aktuell', 'actual, de actualidad']],
    g: { t: 'Las oraciones de relativo', n: `
## Qué es una oración de relativo
Da información sobre un sustantivo. Va entre comas y el verbo conjugado se coloca al final.
| Das ist der Artikel, der gestern erschienen ist.   Ese es el artículo que salió ayer.

## El pronombre relativo
Tiene casi la misma forma que el artículo determinado. El **género y el número** los toma del sustantivo al que se refiere; el **caso**, de su función dentro de la oración de relativo.
$ Nominativo: der · die · das · die
$ Acusativo: den · die · das · die
$ Dativo: dem · der · dem · denen
$ Genitivo: dessen · deren · dessen · deren
| Der Mann, der dort steht, ist Journalist.          él está allí: sujeto → nominativo
| Der Mann, den ich gestern getroffen habe, …        lo encontré: objeto → acusativo
| Der Mann, dem ich geschrieben habe, …              le escribí: dativo
| Die Frau, deren Blog ich lese, …                   cuyo blog: genitivo

## Con preposición
La preposición va delante del pronombre y decide el caso:
| Das ist die Sendung, über die alle sprechen.
| Die Kollegin, mit der ich arbeite, kommt aus Graz.

## wo y was
- Con lugares se puede usar **wo**: Die Stadt, wo (= in der) ich wohne, …
- Tras alles, etwas, nichts, das y los superlativos neutros se usa **was**: Alles, was er schreibt, ist interessant.
> En español «que» vale para todo; en alemán hay que pensar siempre dos cosas: qué género tiene el sustantivo y qué función hace el pronombre.
`, e: [
      mc(2, 'Completa: «Das ist die Zeitung, ___ ich jeden Tag lese.»', ['die', 'der', 'den', 'das'], 'Femenino y objeto directo de «lese»: acusativo die.'),
      mc(2, 'Completa: «Der Film, ___ wir gestern gesehen haben, war spannend.»', ['den', 'der', 'dem', 'das'], 'Masculino y objeto directo de «gesehen haben»: den.'),
      mc(2, 'Completa: «Die Kollegin, mit ___ ich arbeite, ist sehr nett.»', ['der', 'die', 'dem', 'denen'], '«mit» pide dativo; femenino singular: der.'),
      mc(2, 'Completa: «Die Leute, ___ ich geholfen habe, waren dankbar.»', ['denen', 'die', 'den', 'deren'], '«helfen» rige dativo; plural: denen.'),
      mc(2, 'Completa: «Das ist der Autor, ___ Bücher ich so mag.»', ['dessen', 'deren', 'der', 'den'], 'Posesión (cuyos libros) con antecedente masculino: dessen.'),
      tx(2, 'Completa: «Alles, ___ er sagt, stimmt.»', ['was'], 'Tras «alles» el relativo es «was».'),
      mc(2, '¿Dónde va el verbo conjugado en la oración de relativo?', ['Al final', 'En segunda posición', 'Justo tras el pronombre', 'Delante del pronombre'], 'Es una subordinada: el verbo va al final.'),
      tx(2, 'Completa: «Das ist das Gerät, ___ ich dir empfohlen habe.»', ['das'], 'Neutro y objeto directo: das.')] },
    d: { t: 'Nachrichten früher und heute', l: [
      ['Text', 'Mein Großvater, der dieses Jahr achtzig wird, liest jeden Morgen die Zeitung, die ihm der Bote vor die Tür legt. Für ihn ist das ein Ritual, auf das er nicht verzichten möchte.', 'Mi abuelo, que este año cumple ochenta, lee cada mañana el periódico que el repartidor le deja en la puerta. Para él es un ritual al que no quiere renunciar.'],
      ['Text', 'Ich dagegen informiere mich fast nur über mein Handy. Die Nachrichten, die ich lese, kommen aus Apps und sozialen Medien, und oft sind es Freunde, die mir Artikel schicken.', 'Yo, en cambio, me informo casi solo a través del móvil. Las noticias que leo vienen de aplicaciones y redes sociales, y a menudo son amigos quienes me mandan artículos.'],
      ['Text', 'Das ist praktisch, hat aber einen Nachteil: Nicht alles, was im Netz steht, ist wahr. Es gibt Seiten, deren Quellen niemand kennt, und Schlagzeilen, die nur Aufmerksamkeit suchen.', 'Es práctico, pero tiene una desventaja: no todo lo que hay en la red es verdad. Hay páginas cuyas fuentes nadie conoce y titulares que solo buscan llamar la atención.'],
      ['Text', 'Mein Großvater sagt, dass er nur Journalisten vertraut, deren Namen er kennt. Ich finde, er hat nicht ganz unrecht. Deshalb habe ich jetzt eine Wochenzeitung abonniert, die ich am Sonntag in Ruhe lese – auf Papier.', 'Mi abuelo dice que solo se fía de periodistas cuyos nombres conoce. Creo que no le falta razón. Por eso me he suscrito a un semanario que leo con calma los domingos, en papel.']],
      q: [
        mc(2, 'Wie informiert sich der Großvater?', ['Er liest die Zeitung.', 'Er sieht fern.', 'Er benutzt Apps.', 'Er hört Radio.'], '«…liest jeden Morgen die Zeitung…»'),
        mc(2, 'Woher kommen die Nachrichten, die die erzählende Person liest?', ['Aus Apps und sozialen Medien', 'Aus der Zeitung', 'Aus dem Fernsehen', 'Von ihrem Großvater'], '«…kommen aus Apps und sozialen Medien…»'),
        mc(2, 'Welchen Nachteil hat das Internet laut Text?', ['Nicht alles ist wahr.', 'Es ist zu teuer.', 'Es ist zu langsam.', 'Es gibt zu wenige Nachrichten.'], '«Nicht alles, was im Netz steht, ist wahr.»'),
        mc(2, 'Was hat die erzählende Person jetzt gemacht?', ['Eine Wochenzeitung abonniert', 'Ihr Handy verkauft', 'Einen Blog geschrieben', 'Alle Apps gelöscht'], '«Deshalb habe ich jetzt eine Wochenzeitung abonniert…»')] },
    w: { c: 'Explica cómo te informas tú: qué medios usas, cuáles te parecen fiables y por qué. Seis o siete frases con al menos tres oraciones de relativo.', m: 'Ich informiere mich vor allem über Podcasts, die ich auf dem Weg zur Arbeit höre. Außerdem lese ich eine Zeitung, deren Artikel ich sehr gründlich finde. Soziale Medien, in denen jeder alles schreiben kann, benutze ich nur zur Unterhaltung. Eine Quelle, der ich vertraue, nennt immer ihre Autoren. Nachrichten, die mir Freunde schicken, prüfe ich zuerst. Das Wichtigste, was ich gelernt habe: nie nur die Schlagzeile lesen.' } },

  { id: 'b1-2', t: 'Umwelt und Natur', es: 'Medio ambiente y naturaleza', v: [
    ['die Umwelt', 'el medio ambiente'], ['der Umweltschutz', 'la protección del medio ambiente'], ['der Klimawandel', 'el cambio climático'], ['die Erderwärmung', 'el calentamiento global'], ['die Luftverschmutzung', 'la contaminación del aire'], ['der Müll', 'la basura'], ['der Abfall', 'los residuos'],
    ['trennen', 'separar'], ['wiederverwerten', 'reciclar'], ['die Verpackung', 'el envase'], ['das Plastik', 'el plástico'], ['die Energie', 'la energía'], ['der Strom', 'la electricidad'], ['erneuerbar', 'renovable'],
    ['die Windkraft', 'la energía eólica'], ['die Solaranlage', 'la instalación solar'], ['sparen', 'ahorrar'], ['verbrauchen', 'consumir'], ['verschwenden', 'derrochar'], ['der Verkehr', 'el tráfico'], ['die Abgase', 'los gases de escape'],
    ['das Elektroauto', 'el coche eléctrico'], ['öffentliche Verkehrsmittel', 'el transporte público'], ['die Pflanze', 'la planta'], ['die Tierart', 'la especie animal'], ['aussterben', 'extinguirse'], ['schützen', 'proteger'], ['nachhaltig', 'sostenible']],
    g: { t: 'La voz pasiva', n: `
## Para qué sirve
En la voz pasiva importa la acción, no quién la hace. Es muy frecuente en noticias, instrucciones y textos formales.
| Aktiv: Die Stadt sammelt den Müll.        Passiv: Der Müll wird gesammelt.

## Cómo se forma
**werden** conjugado + **participio** al final. El objeto en acusativo de la frase activa pasa a ser el sujeto.
$ Presente: wird / werden + participio → Das Glas wird recycelt.
$ Präteritum: wurde / wurden + participio → Das Haus wurde 1990 gebaut.
$ Perfekt: ist / sind + participio + worden → Die Anlage ist repariert worden.
$ Con modal: modal + participio + werden → Der Müll muss getrennt werden.

## Quién lo hace
Si se quiere decir, con **von** + dativo (personas, instituciones) o **durch** + acusativo (causa, medio):
| Das Gesetz wurde vom Parlament beschlossen.
| Der Wald wurde durch ein Feuer zerstört.

## Pasiva sin sujeto
Con verbos sin objeto en acusativo se usa «es» o se empieza por otro elemento:
| Es wird viel gearbeitet.  ·  Hier wird nicht geraucht.
> No confundas «Die Tür wird geschlossen» (la están cerrando: acción) con «Die Tür ist geschlossen» (está cerrada: estado).
`, e: [
      mc(2, 'Completa: «In Deutschland ___ der Müll getrennt.»', ['wird', 'ist', 'werden', 'hat'], 'Pasiva de presente, sujeto singular: wird + participio.'),
      mc(2, 'Completa: «Die Solaranlagen ___ letztes Jahr installiert.»', ['wurden', 'wurde', 'werden', 'haben'], 'Pasado y sujeto plural: wurden.'),
      mc(2, 'Pasa a pasiva: «Man spart viel Energie.»', ['Viel Energie wird gespart.', 'Viel Energie ist sparen.', 'Viel Energie wird sparen.', 'Viel Energie hat gespart.'], 'werden + participio; «man» desaparece.'),
      mc(2, 'Completa: «Plastik muss vermieden ___.»', ['werden', 'worden', 'sein', 'wird'], 'Con modal: participio + werden en infinitivo.'),
      mc(2, 'Completa: «Das Gesetz ist schon beschlossen ___.»', ['worden', 'geworden', 'werden', 'wurde'], 'Perfekt de la pasiva: ist + participio + worden (sin ge-).'),
      tx(2, 'Completa con «por»: «Der Park wurde ___ der Stadt gebaut.»', ['von'], 'El agente se introduce con von + dativo.'),
      mc(2, '«Das Fenster ist geöffnet» expresa…', ['Un estado: está abierta', 'Una acción: la están abriendo', 'Un plan de futuro', 'Una orden'], 'sein + participio describe el resultado, no la acción.'),
      tx(2, 'Completa en pasiva de presente: «Hier ___ nicht geraucht.»', ['wird'], 'Pasiva sin sujeto: Hier wird nicht geraucht.')] },
    d: { t: 'Eine Stadt wird grüner', l: [
      ['Text', 'In Freiburg wird seit vielen Jahren viel für die Umwelt getan. Schon in den neunziger Jahren wurde dort ein ganzer Stadtteil gebaut, in dem fast keine Autos fahren.', 'En Friburgo se hace mucho por el medio ambiente desde hace años. Ya en los noventa se construyó allí un barrio entero en el que apenas circulan coches.'],
      ['Text', 'Die Häuser sind so gut isoliert, dass kaum Energie zum Heizen verbraucht wird. Der Strom wird zum großen Teil von Solaranlagen auf den Dächern produziert.', 'Las casas están tan bien aisladas que apenas se consume energía para calentar. La electricidad la producen en gran parte instalaciones solares en los tejados.'],
      ['Text', 'Auch der Verkehr wurde neu organisiert: Mehr als ein Drittel aller Wege wird mit dem Fahrrad zurückgelegt, und die Straßenbahn wurde in den letzten Jahren stark ausgebaut.', 'También se reorganizó el tráfico: más de un tercio de los trayectos se hace en bicicleta, y el tranvía se ha ampliado mucho en los últimos años.'],
      ['Text', 'Trotzdem gibt es Kritik. Die Mieten sind stark gestiegen, und viele Familien können sich die Stadt nicht mehr leisten. Nachhaltigkeit, sagen Kritiker, darf nicht nur für Reiche sein.', 'Aun así hay críticas. Los alquileres han subido mucho y muchas familias ya no pueden permitirse vivir en la ciudad. La sostenibilidad, dicen los críticos, no puede ser solo para ricos.']],
      q: [
        mc(2, 'Was wurde in den neunziger Jahren gebaut?', ['Ein fast autofreier Stadtteil', 'Eine neue Autobahn', 'Ein Kraftwerk', 'Ein Flughafen'], '«…ein ganzer Stadtteil gebaut, in dem fast keine Autos fahren.»'),
        mc(2, 'Woher kommt ein großer Teil des Stroms?', ['Von Solaranlagen', 'Aus Kohle', 'Aus Windkraft', 'Aus dem Ausland'], '«…von Solaranlagen auf den Dächern produziert.»'),
        mc(2, 'Wie wird mehr als ein Drittel der Wege zurückgelegt?', ['Mit dem Fahrrad', 'Mit dem Auto', 'Zu Fuß', 'Mit dem Bus'], '«…wird mit dem Fahrrad zurückgelegt…»'),
        mc(2, 'Was kritisieren manche Leute?', ['Die hohen Mieten', 'Den Lärm', 'Die Straßenbahn', 'Die Solaranlagen'], '«Die Mieten sind stark gestiegen…»')] },
    w: { c: 'Describe qué se hace en tu ciudad por el medio ambiente y qué habría que mejorar. Seis frases, con al menos tres en pasiva.', m: 'In meiner Stadt wird der Müll seit einigen Jahren getrennt. Letztes Jahr wurden viele neue Radwege gebaut, und im Zentrum wurde der Autoverkehr reduziert. Leider wird immer noch zu viel Plastik verbraucht. Meiner Meinung nach müssen die öffentlichen Verkehrsmittel ausgebaut werden. Außerdem sollten mehr Bäume gepflanzt werden, weil es im Sommer sehr heiß wird.' } },

  { id: 'b1-3', t: 'Ausbildung und Zukunft', es: 'Formación y futuro', v: [
    ['das Studium', 'la carrera universitaria'], ['die Hochschule', 'el centro de enseñanza superior'], ['das Fach', 'la asignatura'], ['der Abschluss', 'el título'], ['das Abitur', 'el bachillerato (con examen final)'], ['die Note', 'la nota'], ['die Prüfung', 'el examen'],
    ['bestehen', 'aprobar'], ['durchfallen', 'suspender'], ['das Stipendium', 'la beca'], ['das Praktikum', 'las prácticas'], ['die Weiterbildung', 'la formación continua'], ['die Kenntnisse', 'los conocimientos'], ['die Fähigkeit', 'la capacidad'],
    ['die Voraussetzung', 'el requisito'], ['die Bewerbungsfrist', 'el plazo de solicitud'], ['das Ziel', 'el objetivo'], ['vorhaben', 'tener previsto'], ['sich entscheiden', 'decidirse'], ['die Entscheidung', 'la decisión'], ['die Zukunft', 'el futuro'],
    ['der Traum', 'el sueño'], ['erreichen', 'alcanzar'], ['versuchen', 'intentar'], ['aufgeben', 'abandonar, rendirse'], ['sich bemühen', 'esforzarse'], ['die Herausforderung', 'el reto'], ['die Chance', 'la oportunidad']],
    g: { t: 'Infinitivo con zu, finalidad y futuro', n: `
## El infinitivo con «zu»
Tras muchos verbos, adjetivos y sustantivos, el segundo verbo va en infinitivo con **zu** al final. La coma es opcional pero habitual.
| Ich habe vor, Medizin zu studieren.          Tengo previsto estudiar Medicina.
| Es ist wichtig, früh anzufangen.             Es importante empezar pronto.
| Ich habe keine Lust, heute zu lernen.        No tengo ganas de estudiar hoy.
- En los verbos separables, «zu» se mete en medio: an**zu**fangen, auf**zu**geben.
- Lo piden, entre otros: versuchen, vorhaben, anfangen, aufhören, vergessen, hoffen, sich entscheiden, Lust / Zeit / Angst haben, es ist schwer / möglich / wichtig.
- **Sin zu**: tras los modales, werden y lassen, y con gehen, sehen, hören y bleiben: «Ich gehe einkaufen.»

## La finalidad: um … zu y damit
- Mismo sujeto en las dos partes → **um … zu** + infinitivo: Ich lerne Deutsch, um in Berlin zu studieren.
- Sujetos distintos → **damit** + verbo al final: Ich spreche langsam, damit du mich verstehst.
> «para» + sustantivo es «für» o «zu»: «für die Prüfung», «zum Lernen». «Um … zu» solo va con verbos.

## Otras construcciones con zu
| ohne … zu (sin): Er ging, ohne ein Wort zu sagen.
| statt … zu (en vez de): Statt zu lernen, sieht er fern.

## El futuro con werden
«werden» + infinitivo al final sirve para planes firmes, promesas y pronósticos:
| Ich werde nächstes Jahr mein Studium abschließen.
| Das wirst du schaffen!
> En el día a día, lo más normal es el presente con un complemento de tiempo: «Nächstes Jahr mache ich ein Praktikum.»
`, e: [
      mc(2, 'Completa: «Ich habe vor, im Ausland ___.»', ['zu studieren', 'studieren', 'um studieren', 'studiere'], '«vorhaben» pide infinitivo con zu.'),
      mc(2, 'Completa: «Es ist schwer, früh ___.»', ['aufzustehen', 'zu aufstehen', 'aufstehen zu', 'aufstehen'], 'En los separables, «zu» va entre el prefijo y el verbo.'),
      mc(2, 'Completa: «Ich muss heute ___.»', ['lernen', 'zu lernen', 'um zu lernen', 'gelernt'], 'Tras un verbo modal, infinitivo sin zu.'),
      mc(2, 'Completa: «Sie spart Geld, ___ eine Weltreise zu machen.»', ['um', 'damit', 'für', 'dass'], 'Mismo sujeto y un infinitivo con zu: um … zu.'),
      mc(2, 'Completa: «Ich erkläre es noch einmal, ___ alle es verstehen.»', ['damit', 'um', 'zu', 'ohne'], 'Sujetos distintos (ich / alle): damit + verbo al final.'),
      tx(2, 'Completa con «sin»: «Er hat die Prüfung bestanden, ___ viel zu lernen.»', ['ohne'], 'ohne … zu + infinitivo.'),
      mc(2, '¿Qué frase es correcta?', ['Ich hoffe, die Prüfung zu bestehen.', 'Ich hoffe, die Prüfung bestehen zu.', 'Ich hoffe, zu die Prüfung bestehen.', 'Ich hoffe die Prüfung um zu bestehen.'], '«zu» va justo delante del infinitivo, al final.'),
      tx(2, 'Completa el futuro: «Du ___ das schaffen!»', ['wirst'], 'du wirst + infinitivo.')] },
    d: { t: 'Pläne nach dem Abitur', l: [
      ['Elena', 'Weißt du schon, was du nach dem Abitur machen wirst?', '¿Sabes ya qué vas a hacer después del bachillerato?'],
      ['David', 'Ich habe vor, erst ein Jahr im Ausland zu arbeiten, um mein Englisch zu verbessern.', 'Tengo pensado trabajar primero un año en el extranjero para mejorar mi inglés.'],
      ['Elena', 'Und danach?', '¿Y después?'],
      ['David', 'Dann möchte ich Maschinenbau studieren. Ich hoffe, ein Stipendium zu bekommen.', 'Luego quiero estudiar Ingeniería Mecánica. Espero conseguir una beca.'],
      ['Elena', 'Das klingt gut. Ich habe mich noch nicht entschieden. Meine Eltern möchten, dass ich Jura studiere.', 'Suena bien. Yo todavía no me he decidido. Mis padres quieren que estudie Derecho.'],
      ['David', 'Und du? Hast du Lust dazu?', '¿Y tú? ¿Te apetece?'],
      ['Elena', 'Eigentlich nicht. Ich würde lieber eine Ausbildung als Fotografin machen, statt fünf Jahre in der Bibliothek zu sitzen.', 'La verdad es que no. Preferiría formarme como fotógrafa en lugar de pasarme cinco años sentada en la biblioteca.'],
      ['David', 'Dann solltest du mit ihnen reden, damit sie deinen Wunsch verstehen.', 'Entonces deberías hablar con ellos para que entiendan lo que quieres.'],
      ['Elena', 'Du hast recht. Ich werde es am Wochenende versuchen.', 'Tienes razón. Lo intentaré el fin de semana.']],
      q: [
        mc(2, 'Warum will David ins Ausland gehen?', ['Um sein Englisch zu verbessern', 'Um Urlaub zu machen', 'Um dort zu studieren', 'Um seine Familie zu besuchen'], '«…um mein Englisch zu verbessern.»'),
        mc(2, 'Was möchte David studieren?', ['Maschinenbau', 'Jura', 'Medizin', 'Fotografie'], '«Dann möchte ich Maschinenbau studieren.»'),
        mc(2, 'Was wünschen sich Elenas Eltern?', ['Dass sie Jura studiert', 'Dass sie Fotografin wird', 'Dass sie ins Ausland geht', 'Dass sie sofort arbeitet'], '«Meine Eltern möchten, dass ich Jura studiere.»'),
        mc(2, 'Was wird Elena am Wochenende tun?', ['Mit ihren Eltern reden', 'Sich bewerben', 'Ins Ausland fahren', 'Eine Prüfung schreiben'], 'David se lo aconseja y ella responde: «Ich werde es am Wochenende versuchen.»')] },
    w: { c: 'Escribe sobre tus planes para los próximos años (estudios, trabajo, idiomas): qué tienes previsto, para qué y qué te resulta difícil. Usa «zu», «um … zu» y «damit».', m: 'In den nächsten zwei Jahren habe ich vor, mein Deutsch auf das Niveau B2 zu bringen. Ich lerne jeden Tag ein bisschen, um in Zukunft in Deutschland arbeiten zu können. Es fällt mir schwer, regelmäßig zu sprechen, weil ich wenig Gelegenheit habe. Deshalb suche ich einen Tandempartner, damit wir uns gegenseitig helfen können. Außerdem werde ich im Sommer einen Intensivkurs besuchen. Ich hoffe, danach die Prüfung zu bestehen.' } },

  { id: 'b1-4', t: 'Erinnerungen und Lebensläufe', es: 'Recuerdos y biografías', v: [
    ['die Kindheit', 'la infancia'], ['die Jugend', 'la juventud'], ['aufwachsen', 'criarse'], ['geboren', 'nacido'], ['erziehen', 'educar, criar'], ['die Generation', 'la generación'], ['das Ereignis', 'el acontecimiento'],
    ['das Erlebnis', 'la vivencia'], ['erleben', 'vivir, experimentar'], ['sich verlieben', 'enamorarse'], ['heiraten', 'casarse'], ['sich trennen', 'separarse'], ['die Scheidung', 'el divorcio'], ['sterben', 'morir'],
    ['der Tod', 'la muerte'], ['auswandern', 'emigrar'], ['die Heimat', 'la tierra natal'], ['das Heimweh', 'la morriña'], ['der Krieg', 'la guerra'], ['der Frieden', 'la paz'], ['die Mauer', 'el muro'],
    ['damals', 'entonces, en aquella época'], ['früher', 'antes'], ['plötzlich', 'de repente'], ['schließlich', 'finalmente'], ['inzwischen', 'entretanto'], ['das Schicksal', 'el destino'], ['stolz', 'orgulloso']],
    g: { t: 'El Präteritum y los conectores de tiempo', n: `
## El Präteritum: el pasado de los textos
Al hablar se usa el Perfekt; en relatos, biografías y prensa, el Präteritum.
- Verbos regulares: raíz + **-te** → machen: ich machte, du machtest, er machte, wir machten, ihr machtet, sie machten
- Verbos irregulares: cambia la vocal, y «ich» y «er» no llevan terminación → gehen: ich ging, du gingst, er ging, wir gingen
| kommen: kam · fahren: fuhr · sehen: sah · geben: gab · finden: fand · bleiben: blieb · schreiben: schrieb
| sprechen: sprach · nehmen: nahm · beginnen: begann · sterben: starb · ziehen: zog · wissen: wusste
- Mixtos (cambian la vocal y además llevan -te): denken: dachte · bringen: brachte · kennen: kannte

## als y wenn en pasado
- **als**: un hecho o una etapa única del pasado → Als ich klein war, wohnten wir auf dem Land.
- **wenn**: algo que se repetía (cada vez que) → Wenn mein Opa uns besuchte, brachte er Schokolade mit.
> Para el presente y el futuro siempre es «wenn».

## Antes y después: el Plusquamperfekt
Lo que ocurrió antes de otro hecho pasado se expresa con **hatte / war** + participio.
| Nachdem sie das Studium beendet hatte, zog sie nach Wien.
| Bevor er auswanderte, hatte er alles verkauft.
- **nachdem** (después de que) pide un tiempo anterior al de la oración principal.
- **bevor** (antes de que), **während** (mientras), **bis** (hasta que) y **seit** (desde que) completan los conectores de tiempo.
`, e: [
      mc(2, '¿Cuál es el Präteritum de «er geht»?', ['er ging', 'er gehte', 'er gang', 'er gegangen'], 'Irregular: gehen, ging, gegangen.'),
      mc(2, 'Completa: «___ ich zehn Jahre alt war, zogen wir nach Hamburg.»', ['Als', 'Wenn', 'Wann', 'Nachdem'], 'Etapa única del pasado: als.'),
      mc(2, 'Completa: «Immer ___ es regnete, spielten wir Karten.»', ['wenn', 'als', 'wann', 'bevor'], 'Hecho repetido en el pasado («immer»): wenn.'),
      mc(2, 'Completa: «Nachdem er gegessen ___, ging er spazieren.»', ['hatte', 'hat', 'war', 'habe'], 'Anterior a otro pasado: Plusquamperfekt, y «essen» lleva haben.'),
      tx(2, 'Escribe el Präteritum de «sie kommt».', ['sie kam', 'kam'], 'kommen, kam, gekommen.'),
      mc(2, '¿Cuál es el Präteritum de «ich denke»?', ['ich dachte', 'ich denkte', 'ich dachtete', 'ich dankte'], 'Verbo mixto: cambia la raíz y lleva -te.'),
      mc(2, 'Completa: «Sie lebte in Berlin, ___ die Mauer fiel.»', ['als', 'wenn', 'wann', 'ob'], 'Un acontecimiento único del pasado: als.'),
      tx(2, 'Completa con «antes de que»: «___ sie heiratete, hatte sie zwei Jahre in Paris gelebt.»', ['Bevor'], 'bevor + verbo al final.')] },
    d: { t: 'Das Leben meiner Großmutter', l: [
      ['Text', 'Meine Großmutter Marta wurde 1940 in einem kleinen Dorf in Schlesien geboren. Als sie fünf Jahre alt war, musste ihre Familie die Heimat verlassen und kam nach Bayern.', 'Mi abuela Marta nació en 1940 en un pueblecito de Silesia. Cuando tenía cinco años, su familia tuvo que abandonar su tierra y llegó a Baviera.'],
      ['Text', 'Die ersten Jahre waren hart. Sie wohnten zu sechst in einem Zimmer, und wenn es im Winter kalt wurde, schliefen alle in der Küche.', 'Los primeros años fueron duros. Vivían seis en una habitación y, cuando en invierno hacía frío, dormían todos en la cocina.'],
      ['Text', 'Mit vierzehn begann Marta eine Ausbildung als Schneiderin. Nachdem sie die Prüfung bestanden hatte, zog sie nach München, wo sie meinen Großvater kennenlernte.', 'A los catorce, Marta empezó a formarse como modista. Después de aprobar el examen se mudó a Múnich, donde conoció a mi abuelo.'],
      ['Text', 'Die beiden heirateten 1962 und eröffneten ein kleines Geschäft. Sie arbeiteten viel, aber sie waren stolz auf das, was sie erreicht hatten.', 'Se casaron en 1962 y abrieron una pequeña tienda. Trabajaban mucho, pero estaban orgullosos de lo que habían conseguido.'],
      ['Text', 'Heute ist meine Großmutter über achtzig. Wenn sie von damals erzählt, sagt sie immer: «Wir hatten wenig, aber wir hielten zusammen.»', 'Hoy mi abuela tiene más de ochenta. Cuando habla de aquella época siempre dice: «Teníamos poco, pero nos manteníamos unidos».']],
      q: [
        mc(2, 'Wann musste die Familie die Heimat verlassen?', ['Als Marta fünf Jahre alt war', 'Als Marta vierzehn war', 'Im Jahr 1962', 'Nach der Hochzeit'], '«Als sie fünf Jahre alt war, musste ihre Familie die Heimat verlassen…»'),
        mc(2, 'Welchen Beruf lernte Marta?', ['Schneiderin', 'Verkäuferin', 'Köchin', 'Lehrerin'], '«…eine Ausbildung als Schneiderin.»'),
        mc(2, 'Wo lernte sie ihren Mann kennen?', ['In München', 'In Schlesien', 'In ihrem Dorf', 'In der Schule'], '«…zog sie nach München, wo sie meinen Großvater kennenlernte.»'),
        mc(2, 'Was machten die beiden nach der Hochzeit?', ['Sie eröffneten ein Geschäft.', 'Sie wanderten aus.', 'Sie zogen aufs Land.', 'Sie machten eine Weltreise.'], '«…heirateten 1962 und eröffneten ein kleines Geschäft.»')] },
    w: { c: 'Escribe la biografía breve de un familiar o de alguien a quien admires (siete u ocho frases) en Präteritum. Incluye «als», «nachdem» y «bevor».', m: 'Mein Vater wurde 1965 in Granada geboren. Als er achtzehn war, ging er nach Barcelona, um Architektur zu studieren. Bevor er sein Studium beendete, arbeitete er abends in einem Restaurant. Dort lernte er meine Mutter kennen. Nachdem sie geheiratet hatten, zogen sie nach Valencia. Mein Vater gründete ein kleines Büro und baute viele Schulen. Er arbeitete viel, aber am Wochenende hatte er immer Zeit für uns.' } },

  { id: 'b1-5', t: 'Gesellschaft und Zusammenleben', es: 'Sociedad y convivencia', v: [
    ['die Gesellschaft', 'la sociedad'], ['das Zusammenleben', 'la convivencia'], ['der Bürger', 'el ciudadano'], ['die Regierung', 'el gobierno'], ['das Gesetz', 'la ley'], ['die Wahl', 'la elección'], ['wählen', 'votar; elegir'],
    ['die Partei', 'el partido'], ['die Demokratie', 'la democracia'], ['die Freiheit', 'la libertad'], ['die Gerechtigkeit', 'la justicia'], ['die Gleichberechtigung', 'la igualdad de derechos'], ['das Recht', 'el derecho'], ['die Pflicht', 'el deber'],
    ['die Steuer', 'el impuesto'], ['die Armut', 'la pobreza'], ['der Reichtum', 'la riqueza'], ['arm', 'pobre'], ['reich', 'rico'], ['das Ehrenamt', 'el voluntariado'], ['sich engagieren', 'implicarse'],
    ['unterstützen', 'apoyar'], ['die Toleranz', 'la tolerancia'], ['das Vorurteil', 'el prejuicio'], ['der Respekt', 'el respeto'], ['die Verantwortung', 'la responsabilidad'], ['fordern', 'exigir'], ['sich beschweren', 'quejarse']],
    g: { t: 'El Konjunktiv II: hipótesis y deseos; obwohl y trotzdem', n: `
## Lo irreal: el Konjunktiv II
Sirve para hablar de lo que no es real: hipótesis, deseos, consejos.
- Lo normal es **würde** + infinitivo: Ich würde mehr reisen.
- Con sein, haben, los modales y algunos verbos muy frecuentes se usa la forma propia:
$ sein: wäre · haben: hätte · können: könnte · müssen: müsste · dürfen: dürfte · wollen: wollte · sollen: sollte
$ kommen: käme · gehen: ginge · wissen: wüsste · geben: gäbe (es gäbe) · brauchen: bräuchte

## Condiciones irreales
**Wenn** + Konjunktiv II (verbo al final), y Konjunktiv II también en la principal:
| Wenn ich mehr Zeit hätte, würde ich mich engagieren.     Si tuviera más tiempo, me implicaría.
| Wenn ich Bürgermeisterin wäre, gäbe es mehr Parks.       Si fuera alcaldesa, habría más parques.
Se puede omitir «wenn» empezando por el verbo: «Hätte ich mehr Zeit, würde ich…»

## Deseos
| Wenn ich doch mehr Geld hätte!  ·  Ich wünschte, es gäbe keinen Krieg.
> «doch», «nur» o «bloß» refuerzan el deseo.

## Concesión: obwohl y trotzdem
- **obwohl** (aunque) introduce una subordinada, con el verbo al final: Obwohl er wenig verdient, spendet er viel.
- **trotzdem** (aun así) es un adverbio: ocupa la primera posición y el verbo va justo después: Er verdient wenig. Trotzdem spendet er viel.
- **trotz** + genitivo (a pesar de): Trotz des Regens kamen viele Leute.
`, e: [
      mc(2, 'Completa: «Wenn ich reich ___, würde ich viel spenden.»', ['wäre', 'war', 'würde', 'bin'], 'Condición irreal con sein: wäre.'),
      mc(2, 'Completa: «Wenn wir mehr Zeit ___, könnten wir helfen.»', ['hätten', 'hatten', 'haben', 'würden'], 'Konjunktiv II de haben, con diéresis: hätten.'),
      mc(2, 'Completa: «An deiner Stelle ___ ich wählen gehen.»', ['würde', 'werde', 'wurde', 'wäre'], 'Consejo: würde + infinitivo.'),
      tx(2, 'Completa con «geben»: «Ich wünschte, es ___ weniger Armut.»', ['gäbe'], 'es gibt → es gäbe.'),
      mc(2, 'Completa: «___ er krank war, ging er zur Wahl.»', ['Obwohl', 'Trotzdem', 'Trotz', 'Weil'], 'Subordinada con el verbo al final y sentido de «aunque»: obwohl.'),
      mc(2, '¿Qué frase es correcta?', ['Es regnete. Trotzdem gingen wir hinaus.', 'Es regnete. Trotzdem wir gingen hinaus.', 'Es regnete, trotzdem wir hinaus gingen.', 'Es regnete. Wir trotzdem gingen hinaus.'], 'Tras «trotzdem» va directamente el verbo.'),
      mc(2, '«Hätte ich ein Auto, würde ich dich abholen» equivale a…', ['Wenn ich ein Auto hätte, würde ich dich abholen.', 'Weil ich ein Auto habe, hole ich dich ab.', 'Ich hatte ein Auto und holte dich ab.', 'Obwohl ich ein Auto habe, hole ich dich nicht ab.'], 'Empezar por el verbo sustituye a «wenn».'),
      tx(2, 'Completa con «wissen»: «Wenn ich das ___, würde ich es dir sagen.»', ['wüsste'], 'wissen → wüsste.')] },
    d: { t: 'Wenn ich Bürgermeisterin wäre …', l: [
      ['Jana', 'Hast du gehört? Das Jugendzentrum soll geschlossen werden, weil die Stadt sparen muss.', '¿Te has enterado? Quieren cerrar el centro juvenil porque el ayuntamiento tiene que ahorrar.'],
      ['Felix', 'Wirklich? Obwohl dort jeden Tag so viele Jugendliche hingehen?', '¿De verdad? ¿Aunque vayan tantos jóvenes cada día?'],
      ['Jana', 'Ja. Wenn ich Bürgermeisterin wäre, würde ich woanders sparen.', 'Sí. Si yo fuera alcaldesa, ahorraría en otra parte.'],
      ['Felix', 'Wo denn zum Beispiel?', '¿Dónde, por ejemplo?'],
      ['Jana', 'Ich würde das neue Parkhaus nicht bauen. Es kostet Millionen, und trotzdem sagt die Stadt, dass sie kein Geld hat.', 'No construiría el aparcamiento nuevo. Cuesta millones y aun así el ayuntamiento dice que no tiene dinero.'],
      ['Felix', 'Da hast du recht. Aber was könnten wir tun?', 'Tienes razón. Pero ¿qué podríamos hacer?'],
      ['Jana', 'Wir könnten Unterschriften sammeln. Wenn genug Leute unterschreiben würden, müsste der Stadtrat noch einmal abstimmen.', 'Podríamos recoger firmas. Si firmara suficiente gente, el pleno tendría que volver a votar.'],
      ['Felix', 'Gute Idee. Ich hätte am Samstag Zeit.', 'Buena idea. Yo tendría tiempo el sábado.'],
      ['Jana', 'Super. Es wäre schade, wenn wir es nicht wenigstens versuchen würden.', 'Genial. Sería una pena que no lo intentáramos al menos.']],
      q: [
        mc(2, 'Warum soll das Jugendzentrum geschlossen werden?', ['Weil die Stadt sparen muss', 'Weil niemand hingeht', 'Weil es zu alt ist', 'Weil dort ein Parkhaus gebaut wird'], '«…weil die Stadt sparen muss.»'),
        mc(2, 'Was würde Jana als Bürgermeisterin nicht bauen?', ['Das Parkhaus', 'Das Jugendzentrum', 'Eine Schule', 'Einen Park'], '«Ich würde das neue Parkhaus nicht bauen.»'),
        mc(2, 'Was wollen die beiden tun?', ['Unterschriften sammeln', 'Geld spenden', 'Eine neue Partei gründen', 'Das Zentrum selbst kaufen'], '«Wir könnten Unterschriften sammeln.»'),
        mc(2, 'Wann hätte Felix Zeit?', ['Am Samstag', 'Am Sonntag', 'Morgen', 'Erst nächsten Monat'], '«Ich hätte am Samstag Zeit.»')] },
    w: { c: 'Completa la idea «Si yo fuera alcalde o alcaldesa de mi ciudad…»: qué cambiarías, qué problema habría y por qué lo harías aun así. Siete frases con Konjunktiv II, «obwohl» y «trotzdem».', m: 'Wenn ich Bürgermeister meiner Stadt wäre, würde ich zuerst die Busse kostenlos machen. Dann gäbe es weniger Autos im Zentrum, und die Luft wäre besser. Natürlich wäre das teuer. Trotzdem würde es sich lohnen, weil alle davon profitieren würden. Außerdem würde ich mehr Wohnungen für junge Leute bauen, obwohl viele Nachbarn dagegen wären. Ich hätte auch gern mehr Parks. Wenn die Bürger mitentscheiden könnten, wären sie sicher zufriedener.' } },

  { id: 'b1-6', t: 'Konsum und Geld', es: 'Consumo y dinero', v: [
    ['das Konto', 'la cuenta'], ['das Bargeld', 'el dinero en efectivo'], ['die Überweisung', 'la transferencia'], ['überweisen', 'transferir'], ['abheben', 'sacar dinero'], ['die Rechnung', 'la factura'], ['die Gebühr', 'la tasa, la comisión'],
    ['die Schulden', 'las deudas'], ['der Kredit', 'el crédito'], ['die Zinsen', 'los intereses'], ['ausgeben', 'gastar'], ['sich leisten', 'permitirse'], ['die Ausgabe', 'el gasto'], ['das Einkommen', 'los ingresos'],
    ['die Versicherung', 'el seguro'], ['der Vertrag', 'el contrato'], ['unterschreiben', 'firmar'], ['die Garantie', 'la garantía'], ['die Reklamation', 'la reclamación'], ['der Verbraucher', 'el consumidor'], ['die Ware', 'la mercancía'],
    ['liefern', 'entregar'], ['die Lieferung', 'la entrega'], ['bestellen', 'pedir, encargar'], ['der Rabatt', 'el descuento'], ['die Qualität', 'la calidad'], ['preiswert', 'bien de precio'], ['der Kundendienst', 'la atención al cliente']],
    g: { t: 'El genitivo y los verbos con preposición', n: `
## El genitivo
Expresa pertenencia («de»). En alemán escrito es muy frecuente.
$ masculino: des / eines + -(e)s → der Preis des Computers
$ neutro: des / eines + -(e)s → die Farbe des Autos
$ femenino: der / einer → die Qualität der Ware
$ plural: der → die Rechte der Verbraucher
- Los masculinos y neutros añaden **-s**, o **-es** si son monosílabos o acaban en s, ß o z: des Vertrags, des Hauses.
- Los adjetivos acaban en -en: wegen des schlecht**en** Wetters.
- Con nombres propios basta una -s: Annas Konto.
> Al hablar se sustituye a menudo por «von» + dativo: der Preis von dem Computer.

## Preposiciones con genitivo
| wegen (a causa de) · trotz (a pesar de) · während (durante) · statt (en lugar de) · innerhalb (dentro de) · außerhalb (fuera de)
| Wegen eines Fehlers wurde die Rechnung zweimal bezahlt.
| Innerhalb einer Woche können Sie die Ware zurückschicken.

## Verbos con preposición fija
Muchos verbos exigen una preposición concreta, que hay que aprender con el verbo:
| warten auf (+ acus.) · sich kümmern um · sich beschweren über · denken an · sich freuen auf / über
| teilnehmen an (+ dat.) · abhängen von · sich bedanken bei … für · achten auf · bestehen aus
- Para preguntar por cosas: **wo(r)** + preposición → Worauf wartest du? · Worüber beschwert er sich?
- Para referirse a cosas o anunciar una frase: **da(r)** + preposición → Ich warte darauf. · Ich freue mich darauf, dich zu sehen.
- Con personas, preposición + pronombre: Auf wen wartest du? – Auf ihn.
> Se intercala una «r» cuando la preposición empieza por vocal: worauf, darüber, woran.
`, e: [
      mc(2, 'Completa: «Der Preis ___ Autos ist zu hoch.»', ['des', 'der', 'dem', 'den'], 'Genitivo neutro: des Autos.'),
      mc(2, 'Completa: «Trotz ___ Rabatts war es zu teuer.»', ['des', 'dem', 'der', 'den'], '«trotz» pide genitivo; masculino: des Rabatts.'),
      mc(2, 'Completa: «Während ___ Lieferung wurde die Ware beschädigt.»', ['der', 'des', 'dem', 'die'], '«während» + genitivo femenino: der.'),
      tx(2, 'Completa con «mein» en genitivo: «Das ist das Konto ___ Bruders.»', ['meines'], 'Masculino en genitivo: meines Bruders.'),
      mc(2, 'Completa: «Ich warte seit zwei Wochen ___ meine Bestellung.»', ['auf', 'für', 'an', 'über'], 'warten auf + acusativo.'),
      mc(2, 'Completa: «___ beschweren Sie sich?» – «Über die Rechnung.»', ['Worüber', 'Wofür', 'Darüber', 'Über wen'], 'Pregunta por una cosa: wo + r + über.'),
      mc(2, 'Completa: «Der Kundendienst kümmert sich ___.»', ['darum', 'daran', 'dafür', 'davon'], 'sich kümmern um → darum.'),
      tx(2, 'Completa con von + artículo: «Das hängt ___ Preis ab.»', ['vom', 'von dem'], 'abhängen von + dativo: vom Preis.')] },
    d: { t: 'Die Reklamation', l: [
      ['Kundendienst', 'Technikmarkt, Kundendienst, guten Tag. Was kann ich für Sie tun?', 'Technikmarkt, atención al cliente, buenos días. ¿En qué puedo ayudarle?'],
      ['Frau Ortega', 'Guten Tag. Ich möchte mich über eine Lieferung beschweren. Ich habe vor drei Wochen einen Laptop bestellt und warte immer noch darauf.', 'Buenos días. Quiero quejarme de una entrega. Hace tres semanas encargué un portátil y sigo esperándolo.'],
      ['Kundendienst', 'Das tut mir leid. Könnten Sie mir die Nummer der Bestellung nennen?', 'Lo siento. ¿Podría decirme el número del pedido?'],
      ['Frau Ortega', 'Ja, 4471. Laut Ihrer Internetseite sollte die Ware innerhalb von fünf Tagen geliefert werden.', 'Sí, 4471. Según su página web, la mercancía debía entregarse en cinco días.'],
      ['Kundendienst', 'Ich sehe das Problem: Wegen eines Fehlers im Lager wurde das Paket an eine falsche Adresse geschickt.', 'Veo el problema: por un error en el almacén, el paquete se envió a una dirección equivocada.'],
      ['Frau Ortega', 'Und was passiert jetzt? Die Rechnung habe ich schon bezahlt.', '¿Y ahora qué? La factura ya la he pagado.'],
      ['Kundendienst', 'Wir schicken Ihnen morgen ein neues Gerät. Als Entschuldigung bekommen Sie außerdem einen Rabatt von zehn Prozent.', 'Mañana le enviamos un aparato nuevo. Como disculpa recibirá además un descuento del diez por ciento.'],
      ['Frau Ortega', 'Gut. Aber wenn der Laptop bis Freitag nicht da ist, trete ich vom Vertrag zurück.', 'Bien. Pero si el portátil no ha llegado el viernes, rescindo el contrato.'],
      ['Kundendienst', 'Das verstehe ich. Ich kümmere mich persönlich darum.', 'Lo entiendo. Me ocupo personalmente.']],
      q: [
        mc(2, 'Worüber beschwert sich Frau Ortega?', ['Über eine Lieferung, die nicht angekommen ist', 'Über den Preis', 'Über ein kaputtes Gerät', 'Über die Internetseite'], '«…einen Laptop bestellt und warte immer noch darauf.»'),
        mc(2, 'Warum ist das Paket nicht angekommen?', ['Es wurde an eine falsche Adresse geschickt.', 'Die Rechnung war nicht bezahlt.', 'Der Laptop war ausverkauft.', 'Das Lager war geschlossen.'], '«Wegen eines Fehlers im Lager wurde das Paket an eine falsche Adresse geschickt.»'),
        mc(2, 'Was bekommt Frau Ortega als Entschuldigung?', ['Zehn Prozent Rabatt', 'Einen zweiten Laptop', 'Ihr ganzes Geld zurück', 'Einen Gutschein für Bücher'], '«…einen Rabatt von zehn Prozent.»'),
        mc(2, 'Was will sie tun, wenn der Laptop bis Freitag nicht kommt?', ['Vom Vertrag zurücktreten', 'Noch einmal anrufen', 'Ins Geschäft fahren', 'Eine zweite Bestellung machen'], '«…trete ich vom Vertrag zurück.»')] },
    w: { c: 'Compraste algo por internet y llegó roto o no llegó. Escribe una reclamación formal de unas 80 palabras: qué pediste, cuál es el problema y qué solución exiges.', m: 'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen eine Kaffeemaschine bestellt (Bestellnummer 2210). Leider war das Gerät bei der Lieferung beschädigt: Der Wassertank ist gebrochen. Wegen dieses Schadens kann ich die Maschine nicht benutzen. Ich bitte Sie deshalb, mir innerhalb einer Woche ein neues Gerät zu schicken oder mir den Preis zu erstatten. Die Fotos des Schadens finden Sie im Anhang. Ich warte auf Ihre Antwort.\nMit freundlichen Grüßen\nAna Ruiz' } },
] });
