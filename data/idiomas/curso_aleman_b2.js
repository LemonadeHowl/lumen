// Curso de alemán · nivel B2. Mismo formato que curso_aleman.js (ver la cabecera de ese archivo).
CURSO.aleman.push({ id: 'B2', nombre: 'B2 · Avanzado', desc: 'Entender textos complejos, argumentar con matices, cambiar de registro y conversar con fluidez sobre temas de actualidad.', u: [
  { id: 'b2-1', t: 'Arbeitswelt im Wandel', es: 'El mundo laboral en transformación', v: [
    ['die Digitalisierung', 'la digitalización'], ['die Automatisierung', 'la automatización'], ['der Arbeitsmarkt', 'el mercado laboral'], ['der Fachkräftemangel', 'la escasez de personal cualificado'], ['die Arbeitslosigkeit', 'el desempleo'], ['der Arbeitnehmer', 'el empleado'], ['der Arbeitgeber', 'el empleador'],
    ['die Gewerkschaft', 'el sindicato'], ['der Tarifvertrag', 'el convenio colectivo'], ['der Streik', 'la huelga'], ['die Vereinbarkeit', 'la conciliación'], ['die Flexibilität', 'la flexibilidad'], ['das Homeoffice', 'el teletrabajo'], ['die Leistung', 'el rendimiento'],
    ['der Druck', 'la presión'], ['die Belastung', 'la carga'], ['die Kündigung', 'el despido; la dimisión'], ['befristet', 'temporal (contrato)'], ['unbefristet', 'indefinido (contrato)'], ['die Beförderung', 'el ascenso'], ['die Führungskraft', 'el directivo'],
    ['das Unternehmen', 'la empresa'], ['gründen', 'fundar'], ['der Wettbewerb', 'la competencia'], ['die Qualifikation', 'la cualificación'], ['sich weiterbilden', 'seguir formándose'], ['die Rente', 'la pensión'], ['der Ruhestand', 'la jubilación']],
    g: { t: 'Conectores de dos partes', n: `
## Conectores dobles
Unen dos elementos o dos oraciones y dan precisión al discurso; en el examen B2 se valoran mucho.
| sowohl … als auch              tanto … como
| nicht nur … sondern auch       no solo … sino también
| weder … noch                   ni … ni
| entweder … oder                o … o
| zwar … aber                    es cierto que … pero
| einerseits … andererseits      por un lado … por otro
| je … desto / umso              cuanto más … más

## Orden de palabras
- «sowohl … als auch» y «weder … noch» suelen unir partes de la frase: Sie spricht sowohl Deutsch als auch Polnisch. · Er hat weder Zeit noch Lust.
- Cuando unen oraciones, cuentan como primer elemento y el verbo va detrás: **Entweder** kündige ich, **oder** ich rede mit dem Chef. · **Zwar** ist die Arbeit interessant, **aber** sie ist schlecht bezahlt. · **Einerseits** verdiene ich gut, **andererseits** habe ich kaum Freizeit.
- Tras «oder», «aber» y «sondern» el orden es el normal: no ocupan posición.

## je … desto
«je» + comparativo abre una subordinada (verbo al final); «desto» + comparativo va seguido del verbo:
| Je länger man arbeitet, desto müder wird man.
| Je mehr Erfahrung jemand hat, umso leichter findet er eine Stelle.
> «weder … noch» ya es una negación: no se añade «nicht» ni «kein».
`, e: [
      mc(3, 'Completa: «Sie ist ___ Ingenieurin als auch Managerin.»', ['sowohl', 'weder', 'entweder', 'zwar'], 'sowohl … als auch: tanto … como.'),
      mc(3, 'Completa: «Er hat weder einen Abschluss ___ Berufserfahrung.»', ['noch', 'oder', 'aber', 'als auch'], 'weder … noch: ni … ni.'),
      mc(3, 'Completa: «Zwar ist das Gehalt niedrig, ___ die Arbeit macht Spaß.»', ['aber', 'sondern', 'noch', 'desto'], 'zwar … aber: se concede algo y se contrapone otra cosa.'),
      mc(3, 'Completa: «Je mehr man verdient, ___ mehr Steuern zahlt man.»', ['desto', 'je', 'als', 'so'], 'je + comparativo, desto + comparativo.'),
      mc(3, '¿Qué frase es correcta?', ['Je älter ich werde, desto weniger arbeite ich.', 'Je älter ich werde, desto ich arbeite weniger.', 'Je ich älter werde, desto weniger arbeite ich.', 'Je älter werde ich, desto weniger ich arbeite.'], 'Con «je», verbo al final; tras «desto + comparativo» va el verbo.'),
      tx(3, 'Completa: «Entweder nehmen wir den Zug ___ wir fahren mit dem Auto.»', ['oder'], 'entweder … oder.'),
      mc(3, 'Completa: «Einerseits möchte ich Karriere machen, ___ will ich Zeit für die Familie haben.»', ['andererseits', 'sondern', 'noch', 'als auch'], 'einerseits … andererseits, y el verbo va justo detrás.'),
      tx(3, 'Completa: «Sie arbeitet nicht nur im Büro, ___ auch von zu Hause.»', ['sondern'], 'nicht nur … sondern auch.')] },
    d: { t: 'Arbeiten, wo und wann man will?', l: [
      ['Text', 'Die Arbeitswelt verändert sich schneller als je zuvor. Sowohl die Digitalisierung als auch der Fachkräftemangel zwingen Unternehmen dazu, alte Gewohnheiten zu überdenken.', 'El mundo laboral cambia más deprisa que nunca. Tanto la digitalización como la escasez de personal cualificado obligan a las empresas a replantearse viejas costumbres.'],
      ['Text', 'Viele Beschäftigte wünschen sich heute nicht nur ein gutes Gehalt, sondern auch flexible Arbeitszeiten. Je besser sich Beruf und Privatleben vereinbaren lassen, desto zufriedener sind sie – und desto seltener kündigen sie.', 'Muchos empleados desean hoy no solo un buen sueldo, sino también horarios flexibles. Cuanto mejor se pueden conciliar trabajo y vida privada, más satisfechos están, y menos dimiten.'],
      ['Text', 'Das Homeoffice hat zwar viele Vorteile, aber es bringt auch Risiken mit sich. Einerseits spart man den Weg ins Büro, andererseits verschwimmt die Grenze zwischen Arbeit und Freizeit. Wer zu Hause arbeitet, ist oft weder richtig im Dienst noch richtig im Feierabend.', 'El teletrabajo tiene, es cierto, muchas ventajas, pero también conlleva riesgos. Por un lado se ahorra el trayecto a la oficina; por otro, se difumina la frontera entre trabajo y ocio. Quien trabaja en casa a menudo no está ni del todo de servicio ni del todo libre.'],
      ['Text', 'Fachleute raten deshalb zu klaren Regeln: Entweder legt das Unternehmen Zeiten fest, in denen niemand erreichbar sein muss, oder die Teams vereinbaren das selbst. Entscheidend ist, dass Flexibilität nicht zu ständiger Verfügbarkeit führt.', 'Por eso los expertos aconsejan reglas claras: o la empresa fija horas en las que nadie tiene que estar localizable, o lo acuerdan los propios equipos. Lo decisivo es que la flexibilidad no desemboque en una disponibilidad permanente.']],
      q: [
        mc(3, 'Welche zwei Entwicklungen verändern laut Text die Unternehmen?', ['Digitalisierung und Fachkräftemangel', 'Streiks und Arbeitslosigkeit', 'Höhere Löhne und kürzere Arbeitszeiten', 'Homeoffice und Rente'], '«Sowohl die Digitalisierung als auch der Fachkräftemangel…»'),
        mc(3, 'Was passiert, wenn sich Beruf und Privatleben gut vereinbaren lassen?', ['Die Beschäftigten kündigen seltener.', 'Die Gehälter sinken.', 'Die Beschäftigten arbeiten weniger.', 'Die Unternehmen schließen Büros.'], '«…desto zufriedener sind sie – und desto seltener kündigen sie.»'),
        mc(3, 'Welches Risiko hat das Homeoffice?', ['Arbeit und Freizeit lassen sich schwer trennen.', 'Man verdient weniger.', 'Man verliert schneller seine Stelle.', 'Der Arbeitsweg wird länger.'], '«…verschwimmt die Grenze zwischen Arbeit und Freizeit.»'),
        mc(3, 'Was empfehlen Fachleute?', ['Klare Regeln zur Erreichbarkeit', 'Die Rückkehr ins Büro für alle', 'Längere Arbeitszeiten', 'Mehr Kontrolle durch Vorgesetzte'], '«…Zeiten …, in denen niemand erreichbar sein muss…»')] },
    w: { c: '¿Teletrabajo sí o no? Escribe una opinión argumentada de unas 120 palabras con ventajas, inconvenientes y tu conclusión. Usa al menos cuatro conectores dobles.', m: 'Meiner Ansicht nach ist das Homeoffice weder ein Wundermittel noch eine Gefahr. Einerseits spart man Zeit und Geld, weil der Arbeitsweg entfällt, andererseits fehlt vielen der direkte Kontakt zu den Kollegen. Zwar kann man sich zu Hause oft besser konzentrieren, aber nicht jeder hat dort einen ruhigen Arbeitsplatz. Je länger man allein arbeitet, desto schwieriger wird es außerdem, Arbeit und Freizeit zu trennen. Ich halte deshalb ein gemischtes Modell für die beste Lösung: Man sollte sowohl im Büro als auch zu Hause arbeiten können. Entweder legt das Team feste Bürotage fest, oder jeder entscheidet nach Absprache selbst. So profitieren nicht nur die Beschäftigten, sondern auch die Unternehmen.' } },

  { id: 'b2-2', t: 'Wissenschaft und Technik', es: 'Ciencia y tecnología', v: [
    ['die Forschung', 'la investigación'], ['der Forscher', 'el investigador'], ['die Wissenschaft', 'la ciencia'], ['die Studie', 'el estudio'], ['das Ergebnis', 'el resultado'], ['der Versuch', 'el experimento; el intento'], ['die Untersuchung', 'el análisis, el examen'],
    ['untersuchen', 'investigar, examinar'], ['beweisen', 'demostrar'], ['der Beweis', 'la prueba'], ['die Erkenntnis', 'el hallazgo, el conocimiento'], ['die Entdeckung', 'el descubrimiento'], ['die Erfindung', 'el invento'], ['entwickeln', 'desarrollar'],
    ['der Fortschritt', 'el progreso'], ['die künstliche Intelligenz', 'la inteligencia artificial'], ['die Daten', 'los datos'], ['auswerten', 'evaluar, analizar'], ['messen', 'medir'], ['die Methode', 'el método'], ['die Annahme', 'la suposición, la hipótesis'],
    ['bestätigen', 'confirmar'], ['widerlegen', 'refutar'], ['die Ursache', 'la causa'], ['die Wirkung', 'el efecto'], ['die Folge', 'la consecuencia'], ['das Risiko', 'el riesgo'], ['der Nutzen', 'la utilidad, el beneficio']],
    g: { t: 'La pasiva con modales y sus alternativas', n: `
## La pasiva con verbos modales
Modal conjugado + participio + **werden**:
$ Presente: Die Daten müssen ausgewertet werden.
$ Präteritum: Die Daten mussten ausgewertet werden.
$ Subordinada: …, weil die Daten ausgewertet werden müssen.
$ Konjunktiv II: Das Problem könnte gelöst werden.

## Alternativas a la pasiva
El alemán escrito evita repetir «werden» con estas construcciones, que tienen sentido pasivo:
- **sein + zu + infinitivo** (= können o müssen + pasiva): Das Ergebnis ist kaum zu erklären. · Die Regeln sind zu beachten.
- **sich lassen + infinitivo** (= können + pasiva): Das Problem lässt sich lösen.
- **Adjetivos en -bar** (= können + pasiva): Die Methode ist anwendbar. · Der Fehler war vermeidbar. · erreichbar, machbar, unbezahlbar
- **man** + voz activa: Man kann das Problem lösen.
| Diese Theorie kann nicht bewiesen werden.
| = Diese Theorie ist nicht zu beweisen.
| = Diese Theorie lässt sich nicht beweisen.
| = Diese Theorie ist nicht beweisbar.

## Pasiva de estado
**sein** + participio describe el resultado: Die Studie ist abgeschlossen. · Die Daten sind gespeichert.
> «sein + zu» puede indicar posibilidad u obligación; lo decide el contexto. Con «kaum, leicht, schwer, nicht» suele ser posibilidad; en normas e instrucciones, obligación.
`, e: [
      mc(3, 'Completa: «Die Ergebnisse müssen noch ___.»', ['überprüft werden', 'überprüfen werden', 'überprüft worden', 'werden überprüft'], 'Modal + participio + werden.'),
      mc(3, '«Das Problem lässt sich lösen» significa…', ['Das Problem kann gelöst werden.', 'Das Problem muss gelöst werden.', 'Das Problem wurde gelöst.', 'Jemand lässt das Problem liegen.'], 'sich lassen + infinitivo = können + pasiva.'),
      mc(3, '«Die Regeln sind zu beachten» significa…', ['Die Regeln müssen beachtet werden.', 'Die Regeln wurden beachtet.', 'Die Regeln dürfen nicht beachtet werden.', 'Man hat die Regeln beachtet.'], 'sein + zu en una norma expresa obligación.'),
      mc(3, 'Completa (se podía evitar): «Der Fehler war ___.»', ['vermeidbar', 'vermeidlich', 'vermieden', 'zu vermieden'], 'Raíz del verbo + -bar = que se puede.'),
      tx(3, 'Forma el adjetivo: «Das kann man machen.» → «Das ist ___.»', ['machbar'], 'mach + bar.'),
      mc(3, 'Completa: «…, weil die Daten nicht ___.»', ['ausgewertet werden konnten', 'konnten ausgewertet werden', 'ausgewertet konnten werden', 'werden ausgewertet konnten'], 'En la subordinada: participio + werden + modal conjugado al final.'),
      mc(3, 'Completa: «Diese Wirkung ___ sich leicht erklären.»', ['lässt', 'ist', 'wird', 'kann'], 'sich lassen + infinitivo.'),
      tx(3, 'Completa: «Das Ergebnis ist kaum ___ erklären.»', ['zu'], 'sein + zu + infinitivo.')] },
    d: { t: 'Maschinen, die lernen', l: [
      ['Text', 'Künstliche Intelligenz ist aus der Forschung nicht mehr wegzudenken. Riesige Datenmengen, die früher in Jahren nicht auszuwerten waren, lassen sich heute in wenigen Stunden analysieren.', 'La inteligencia artificial ya es inseparable de la investigación. Enormes cantidades de datos que antes no se podían analizar ni en años se analizan hoy en pocas horas.'],
      ['Text', 'In der Medizin etwa können Tumore auf Röntgenbildern inzwischen von Programmen erkannt werden, oft früher als vom menschlichen Auge. Auch neue Medikamente könnten auf diese Weise schneller entwickelt werden.', 'En medicina, por ejemplo, los tumores ya pueden ser detectados en radiografías por programas, a menudo antes que por el ojo humano. También podrían desarrollarse así más deprisa nuevos medicamentos.'],
      ['Text', 'Doch die Technik hat Grenzen. Wie ein Programm zu seinem Ergebnis kommt, ist selbst für Fachleute häufig kaum nachvollziehbar. Fehler in den Daten sind schwer zu erkennen, und ihre Folgen sind nicht immer vorhersehbar.', 'Pero la técnica tiene límites. Cómo llega un programa a su resultado apenas es comprensible a menudo ni para los especialistas. Los errores en los datos son difíciles de detectar y sus consecuencias no siempre son previsibles.'],
      ['Text', 'Viele Wissenschaftler fordern deshalb, dass wichtige Entscheidungen nicht allein Maschinen überlassen werden dürfen. Die Verantwortung, so ihr Argument, sei nicht übertragbar: Sie müsse beim Menschen bleiben.', 'Por eso muchos científicos exigen que las decisiones importantes no se dejen solo en manos de máquinas. La responsabilidad, argumentan, no es transferible: debe seguir siendo del ser humano.']],
      q: [
        mc(3, 'Was hat sich bei der Auswertung von Daten verändert?', ['Sie geht heute viel schneller.', 'Sie ist teurer geworden.', 'Sie wird nur noch von Menschen gemacht.', 'Sie ist nicht mehr nötig.'], '«…lassen sich heute in wenigen Stunden analysieren.»'),
        mc(3, 'Welches Beispiel aus der Medizin nennt der Text?', ['Programme erkennen Tumore auf Bildern.', 'Roboter operieren ohne Ärzte.', 'Computer ersetzen das Pflegepersonal.', 'Medikamente werden billiger.'], '«…können Tumore auf Röntgenbildern … von Programmen erkannt werden…»'),
        mc(3, 'Welches Problem wird genannt?', ['Man kann oft nicht nachvollziehen, wie ein Ergebnis entsteht.', 'Die Programme sind zu langsam.', 'Es gibt zu wenige Daten.', 'Die Technik ist unbezahlbar.'], '«…ist selbst für Fachleute häufig kaum nachvollziehbar.»'),
        mc(3, 'Was fordern viele Wissenschaftler?', ['Dass der Mensch die Verantwortung behält', 'Dass die Forschung gestoppt wird', 'Dass Maschinen allein entscheiden', 'Dass mehr Daten gesammelt werden'], '«Die Verantwortung … müsse beim Menschen bleiben.»')] },
    w: { c: 'Elige un avance tecnológico (inteligencia artificial, coche autónomo, edición genética…) y escribe unas 120 palabras: qué permite, qué riesgos tiene y qué habría que regular. Usa la pasiva con modales y al menos tres alternativas (sein + zu, sich lassen, -bar).', m: 'Selbstfahrende Autos könnten unseren Alltag stark verändern. Schon heute lassen sich viele Fahrfunktionen automatisch steuern, und die meisten Unfälle, die durch menschliche Fehler entstehen, wären vermeidbar. Außerdem könnten ältere Menschen länger mobil bleiben. Trotzdem sind die Risiken nicht zu unterschätzen. Kein System ist völlig fehlerfrei, und wie ein Programm in einer gefährlichen Situation entscheidet, ist kaum vorhersehbar. Offen ist auch, wer bei einem Unfall verantwortlich gemacht werden kann. Deshalb müssen klare Gesetze beschlossen werden, bevor solche Fahrzeuge überall zugelassen werden. Die Daten der Fahrzeuge sollten gespeichert und von unabhängigen Stellen überprüft werden. Nur so ist das Vertrauen der Menschen zu gewinnen.' } },

  { id: 'b2-3', t: 'Medien und Meinung', es: 'Medios y opinión', v: [
    ['die Pressefreiheit', 'la libertad de prensa'], ['die Zensur', 'la censura'], ['die Berichterstattung', 'la cobertura informativa'], ['die Redaktion', 'la redacción'], ['die Meldung', 'la noticia breve'], ['die Stellungnahme', 'la declaración, la toma de postura'], ['die Pressekonferenz', 'la rueda de prensa'],
    ['der Sprecher', 'el portavoz'], ['behaupten', 'afirmar'], ['betonen', 'subrayar'], ['erklären', 'declarar; explicar'], ['mitteilen', 'comunicar'], ['bestreiten', 'negar'], ['zugeben', 'admitir'],
    ['andeuten', 'insinuar'], ['kritisieren', 'criticar'], ['das Gerücht', 'el rumor'], ['die Falschmeldung', 'el bulo'], ['die Tatsache', 'el hecho'], ['die Behauptung', 'la afirmación'], ['glaubwürdig', 'creíble'],
    ['angeblich', 'supuestamente'], ['offenbar', 'por lo visto'], ['der Kommentar', 'el comentario'], ['die Umfrage', 'la encuesta'], ['die Mehrheit', 'la mayoría'], ['die Minderheit', 'la minoría'], ['beeinflussen', 'influir en']],
    g: { t: 'El Konjunktiv I y el estilo indirecto', n: `
## Para qué sirve el Konjunktiv I
Para reproducir lo que ha dicho otra persona sin hacerlo propio. Es el modo de la prensa: quien escribe marca que solo cita.
| Directo: Der Minister sagt: «Ich habe nichts gewusst.»
| Indirecto: Der Minister sagt, er habe nichts gewusst.

## Formas
Raíz del infinitivo + -e, -est, -e, -en, -et, -en. En la práctica casi solo se usa la tercera persona del singular: raíz + **-e**.
$ haben: er habe · können: er könne · müssen: er müsse · werden: er werde · wissen: er wisse · kommen: er komme · geben: es gebe
$ sein (irregular): ich sei · du seiest · er sei · wir seien · ihr seiet · sie seien

## Cuando coincide con el indicativo
Si la forma es igual que la del presente (sobre todo en plural), se sustituye por el Konjunktiv II:
| «Wir haben keine Zeit.» → Sie sagen, sie **hätten** keine Zeit.
| Die Experten meinen, die Preise **würden** steigen.

## Tiempos
$ Simultáneo: er komme · sie sei krank
$ Pasado: er habe gesagt · sie sei gekommen (cualquier pasado del estilo directo acaba en esta forma)
$ Futuro: er werde kommen

## Otros cambios
- Los pronombres se adaptan: «Ich bin müde.» → Er sagt, **er** sei müde.
- Preguntas: con **ob** si no hay interrogativo, o con el mismo interrogativo, y el verbo al final: Sie fragte, ob er Zeit habe. · Er wollte wissen, wann die Konferenz beginne.
- Órdenes y ruegos: con **sollen**: «Kommen Sie!» → Er sagte, ich solle kommen.
- Se puede usar «dass» (verbo al final) o prescindir de él (verbo en segunda posición).
> Al hablar, casi todo el mundo usa el indicativo o «würde». El Konjunktiv I es sobre todo lengua escrita.
`, e: [
      mc(3, 'Estilo indirecto de «Ich bin unschuldig»: Er sagt, …', ['er sei unschuldig.', 'ich sei unschuldig.', 'er seid unschuldig.', 'er wurde unschuldig.'], 'El pronombre cambia a «er» y sein hace «sei».'),
      mc(3, '¿Cuál es el Konjunktiv I de «er hat»?', ['er habe', 'er hätte', 'er hatte', 'er habt'], 'Raíz hab- + e. «hätte» es Konjunktiv II.'),
      mc(3, 'Estilo indirecto de «Wir haben keine Zeit»: Sie sagen, …', ['sie hätten keine Zeit.', 'sie seien keine Zeit.', 'wir hätten keine Zeit.', 'sie habet keine Zeit.'], '«sie haben» coincidiría con el indicativo, así que se pasa al Konjunktiv II: hätten.'),
      mc(3, 'Estilo indirecto de «Ich habe nichts gewusst»: Sie behauptet, …', ['sie habe nichts gewusst.', 'sie wisse nichts.', 'sie hatte nichts wissen.', 'sie sei nichts gewusst.'], 'Pasado: Konjunktiv I de haben + participio.'),
      mc(3, 'Estilo indirecto de «Kommt der Minister?»: Der Journalist fragt, …', ['ob der Minister komme.', 'dass der Minister komme.', 'kommt der Minister.', 'wenn der Minister komme.'], 'Pregunta sin interrogativo: ob + verbo al final.'),
      tx(3, 'Completa con «werden»: «Der Sprecher erklärte, die Regierung ___ das Gesetz ändern.»', ['werde'], 'Futuro en estilo indirecto: werde + infinitivo.'),
      mc(3, 'Estilo indirecto de «Warten Sie bitte!»: Er sagte, …', ['ich solle warten.', 'ich warte.', 'ich sei warten.', 'ich würde gewartet.'], 'Las órdenes se reproducen con sollen.'),
      tx(3, 'Completa con «geben»: «Die Firma teilte mit, es ___ keine Entlassungen.»', ['gebe'], 'es gibt → es gebe.')] },
    d: { t: 'Bürgermeister weist Vorwürfe zurück', l: [
      ['Text', 'Der Bürgermeister von Neustadt hat gestern auf einer Pressekonferenz die Vorwürfe zurückgewiesen, er habe beim Bau des neuen Stadions Freunde bevorzugt. Die Berichte darüber seien «frei erfunden».', 'El alcalde de Neustadt rechazó ayer en una rueda de prensa las acusaciones de haber favorecido a amigos en la construcción del nuevo estadio. Las informaciones al respecto son, dijo, «pura invención».'],
      ['Text', 'Eine Lokalzeitung hatte berichtet, der Auftrag sei ohne Ausschreibung an eine Firma gegangen, deren Chef mit dem Bürgermeister befreundet sei. Die Kosten seien inzwischen um vierzig Prozent gestiegen.', 'Un periódico local había informado de que el encargo se adjudicó sin concurso a una empresa cuyo jefe es amigo del alcalde. Los costes habrían subido entretanto un cuarenta por ciento.'],
      ['Text', 'Der Bürgermeister erklärte, alle Entscheidungen seien vom Stadtrat getroffen worden. Er selbst habe an der Abstimmung nicht teilgenommen. Auf die Frage, ob er den Firmenchef privat kenne, antwortete er, man treffe sich «gelegentlich beim Sport».', 'El alcalde declaró que todas las decisiones las había tomado el pleno. Él mismo no había participado en la votación. A la pregunta de si conoce personalmente al jefe de la empresa, respondió que se ven «de vez en cuando haciendo deporte».'],
      ['Text', 'Die Opposition fordert nun eine unabhängige Untersuchung. Ihre Sprecherin sagte, die Bürger hätten ein Recht darauf zu erfahren, was mit ihrem Geld geschehe. Der Bürgermeister kündigte an, er werde alle Unterlagen veröffentlichen.', 'La oposición exige ahora una investigación independiente. Su portavoz dijo que los ciudadanos tienen derecho a saber qué pasa con su dinero. El alcalde anunció que publicará toda la documentación.']],
      q: [
        mc(3, 'Was wird dem Bürgermeister vorgeworfen?', ['Er soll Freunde bevorzugt haben.', 'Er soll Geld gestohlen haben.', 'Er soll das Stadion verhindert haben.', 'Er soll die Presse zensiert haben.'], '«…er habe beim Bau des neuen Stadions Freunde bevorzugt.»'),
        mc(3, 'Was sagt der Bürgermeister über die Abstimmung?', ['Er habe nicht daran teilgenommen.', 'Er habe dagegen gestimmt.', 'Sie habe nie stattgefunden.', 'Sie sei geheim gewesen.'], '«Er selbst habe an der Abstimmung nicht teilgenommen.»'),
        mc(3, 'Kennt der Bürgermeister den Firmenchef privat?', ['Ja, sie treffen sich manchmal beim Sport.', 'Nein, überhaupt nicht.', 'Ja, sie sind verwandt.', 'Dazu sagt er nichts.'], '«…man treffe sich gelegentlich beim Sport.»'),
        mc(3, 'Was verlangt die Opposition?', ['Eine unabhängige Untersuchung', 'Den Rücktritt des Stadtrats', 'Den Abriss des Stadions', 'Sofortige Neuwahlen'], '«Die Opposition fordert nun eine unabhängige Untersuchung.»')] },
    w: { c: 'Resume en estilo indirecto (unas 100 palabras) una entrevista o unas declaraciones que hayas leído u oído hace poco, reales o inventadas. Usa el Konjunktiv I y verbos como behaupten, betonen, erklären o mitteilen.', m: 'In einem Interview erklärte die Direktorin eines Krankenhauses, die Situation in der Pflege sei ernst. Es gebe zu wenig Personal, und viele Beschäftigte hätten in den letzten Jahren gekündigt. Sie betonte, das Problem lasse sich nicht allein mit höheren Gehältern lösen. Wichtiger seien verlässliche Dienstpläne und mehr Zeit für die Patienten. Auf die Frage, ob die Politik genug tue, antwortete sie, man habe viel versprochen, aber wenig umgesetzt. Sie kündigte an, ihr Haus werde im nächsten Jahr ein neues Arbeitszeitmodell testen. Die Direktorin teilte außerdem mit, sie wolle mehr Fachkräfte aus dem Ausland einstellen.' } },

  { id: 'b2-4', t: 'Gesundheit und Psyche', es: 'Salud y mente', v: [
    ['das Wohlbefinden', 'el bienestar'], ['die Erschöpfung', 'el agotamiento'], ['die Überforderung', 'la sobrecarga'], ['die Erholung', 'el descanso, la recuperación'], ['die Schlafstörung', 'el trastorno del sueño'], ['die Sucht', 'la adicción'], ['abhängig', 'dependiente'],
    ['die Behandlung', 'el tratamiento'], ['die Therapie', 'la terapia'], ['die Vorsorge', 'la prevención'], ['die Nebenwirkung', 'el efecto secundario'], ['das Immunsystem', 'el sistema inmunitario'], ['die Entzündung', 'la inflamación'], ['chronisch', 'crónico'],
    ['die Diagnose', 'el diagnóstico'], ['der Befund', 'el resultado médico'], ['die Beschwerden', 'las molestias'], ['lindern', 'aliviar'], ['heilen', 'curar'], ['vorbeugen', 'prevenir'], ['die Krankenkasse', 'el seguro médico'],
    ['die Achtsamkeit', 'la atención plena'], ['das Gleichgewicht', 'el equilibrio'], ['die Ausdauer', 'la resistencia'], ['die Auswirkung', 'la repercusión'], ['beeinträchtigen', 'perjudicar'], ['fördern', 'fomentar'], ['die Einstellung', 'la actitud']],
    g: { t: 'Estilo nominal, verbos de apoyo y participios como adjetivo', n: `
## Estilo nominal
Los textos formales prefieren sustantivos donde el habla usa verbos y subordinadas. Reconocerlo es clave para leer en B2; usarlo sube el registro al escribir.
| Verbal: Weil die Preise steigen, sparen viele Leute.
| Nominal: Wegen des Anstiegs der Preise sparen viele Leute.

## De conector a preposición
$ weil → wegen / aufgrund (+ gen.) · obwohl → trotz (+ gen.) · wenn / falls → bei (+ dat.) · nachdem → nach (+ dat.)
$ bevor → vor (+ dat.) · während → während (+ gen.) · um … zu / damit → zu (+ dat.) / für (+ acus.) · indem → durch (+ acus.)
| Obwohl er krank war, arbeitete er. → Trotz seiner Krankheit arbeitete er.
| Wenn man regelmäßig trainiert, … → Bei regelmäßigem Training …
| Indem man sich bewegt, … → Durch Bewegung …

## Verbos de apoyo
Un sustantivo lleva el significado y un verbo «vacío» lo acompaña:
| eine Entscheidung treffen (= entscheiden) · eine Frage stellen (= fragen) · Kritik üben an (= kritisieren)
| in Frage kommen (= möglich sein) · zur Verfügung stehen (= verfügbar sein) · in Anspruch nehmen (= nutzen)
| Einfluss nehmen auf (= beeinflussen) · eine Rolle spielen (= wichtig sein) · zum Ausdruck bringen (= ausdrücken)

## Participios como adjetivo
Una oración de relativo puede comprimirse delante del sustantivo. El participio se declina como un adjetivo.
- **Partizip I** (infinitivo + d): acción simultánea y activa → die **steigenden** Kosten (= die Kosten, die steigen)
- **Partizip II**: acción terminada o pasiva → die **verschriebenen** Medikamente (= die Medikamente, die verschrieben wurden)
- Con complementos, todo se coloca entre el artículo y el sustantivo:
| die von der Ärztin empfohlene Therapie = die Therapie, die von der Ärztin empfohlen wurde
| die seit Jahren unter Stress leidenden Angestellten = die Angestellten, die seit Jahren unter Stress leiden
> Para descifrar estas frases, localiza el artículo y salta hasta el sustantivo; lo que queda en medio es la oración de relativo comprimida.
`, e: [
      mc(3, '«Trotz seiner Krankheit» equivale a…', ['Obwohl er krank war', 'Weil er krank war', 'Wenn er krank ist', 'Nachdem er krank war'], 'trotz ↔ obwohl: concesión.'),
      mc(3, 'Versión nominal de «Weil die Kosten steigen, …»', ['Wegen der steigenden Kosten …', 'Trotz der steigenden Kosten …', 'Bei den steigenden Kosten …', 'Nach den steigenden Kosten …'], 'weil ↔ wegen + genitivo.'),
      mc(3, 'Completa: «Wir müssen bald eine Entscheidung ___.»', ['treffen', 'machen', 'nehmen', 'stellen'], 'eine Entscheidung treffen.'),
      mc(3, 'Completa: «Darf ich Ihnen eine Frage ___?»', ['stellen', 'machen', 'geben', 'treffen'], 'eine Frage stellen.'),
      mc(3, '«die verschriebenen Medikamente» equivale a…', ['die Medikamente, die verschrieben wurden', 'die Medikamente, die verschreiben', 'die Medikamente, die verschrieben haben', 'die Medikamente, die man verschreiben wird'], 'El Partizip II como adjetivo tiene sentido pasivo y terminado.'),
      tx(3, 'Forma el Partizip I: «die Kosten, die steigen» → «die ___ Kosten»', ['steigenden'], 'steigen + d + terminación de adjetivo.'),
      mc(3, '«Bei regelmäßigem Training» equivale a…', ['Wenn man regelmäßig trainiert', 'Obwohl man regelmäßig trainiert', 'Bevor man regelmäßig trainiert', 'Damit man regelmäßig trainiert'], 'bei + dativo ↔ wenn: condición.'),
      mc(3, 'Completa: «Stress spielt dabei eine große ___.»', ['Rolle', 'Frage', 'Entscheidung', 'Verfügung'], 'eine Rolle spielen.')] },
    d: { t: 'Erschöpft, aber nicht krank?', l: [
      ['Text', 'Die Zahl der wegen psychischer Beschwerden krankgeschriebenen Beschäftigten hat sich in den letzten zwanzig Jahren mehr als verdoppelt. Fachleute sehen die Ursache vor allem in der zunehmenden Belastung am Arbeitsplatz.', 'El número de empleados de baja por molestias psíquicas se ha más que duplicado en los últimos veinte años. Los especialistas ven la causa sobre todo en la creciente carga en el puesto de trabajo.'],
      ['Text', 'Bei dauerhafter Überforderung reagiert der Körper zunächst mit Schlafstörungen und Konzentrationsproblemen. Trotz dieser Warnsignale arbeiten viele Betroffene einfach weiter – aus Angst, als schwach zu gelten.', 'Ante una sobrecarga permanente, el cuerpo reacciona primero con trastornos del sueño y problemas de concentración. A pesar de estas señales de alarma, muchos afectados siguen trabajando sin más, por miedo a que los consideren débiles.'],
      ['Text', 'Eine entscheidende Rolle spielt die Erholung. Nach Ansicht von Psychologen reicht ein Urlaub im Jahr nicht aus; wichtiger seien regelmäßige kurze Pausen im Alltag. Auch durch Bewegung an der frischen Luft lasse sich Stress nachweislich abbauen.', 'El descanso desempeña un papel decisivo. En opinión de los psicólogos, unas vacaciones al año no bastan; más importantes son las pausas breves y regulares en el día a día. También el ejercicio al aire libre reduce el estrés de forma demostrada.'],
      ['Text', 'Die Unternehmen stehen ebenfalls in der Verantwortung. Einige stellen ihren Mitarbeitern inzwischen kostenlose Beratung zur Verfügung. Kritiker bemängeln jedoch, solche Angebote würden nur selten in Anspruch genommen, solange sich an der Arbeitsmenge nichts ändere.', 'Las empresas también tienen su parte de responsabilidad. Algunas ponen ya a disposición de sus empleados asesoramiento gratuito. Sin embargo, los críticos objetan que esas ofertas rara vez se aprovechan mientras no cambie el volumen de trabajo.']],
      q: [
        mc(3, 'Wie hat sich die Zahl der Krankschreibungen wegen psychischer Beschwerden entwickelt?', ['Sie hat sich mehr als verdoppelt.', 'Sie ist leicht gesunken.', 'Sie ist gleich geblieben.', 'Sie hat sich halbiert.'], '«…hat sich in den letzten zwanzig Jahren mehr als verdoppelt.»'),
        mc(3, 'Warum arbeiten viele Betroffene trotz der Warnsignale weiter?', ['Aus Angst, als schwach zu gelten', 'Weil sie das Geld brauchen', 'Weil der Arzt es empfiehlt', 'Weil sie die Signale nicht bemerken'], '«…aus Angst, als schwach zu gelten.»'),
        mc(3, 'Was ist laut Psychologen besonders wichtig?', ['Regelmäßige kurze Pausen im Alltag', 'Ein langer Urlaub pro Jahr', 'Mehr Schlaf am Wochenende', 'Ein Wechsel des Arbeitsplatzes'], '«…wichtiger seien regelmäßige kurze Pausen im Alltag.»'),
        mc(3, 'Was bemängeln Kritiker an den Angeboten der Unternehmen?', ['Sie werden selten genutzt, solange die Arbeitsmenge gleich bleibt.', 'Sie sind zu teuer.', 'Sie sind nur für Führungskräfte gedacht.', 'Sie finden in der Freizeit statt.'], '«…würden nur selten in Anspruch genommen, solange sich an der Arbeitsmenge nichts ändere.»')] },
    w: { c: 'Redacta un texto formal de unas 120 palabras sobre cómo prevenir el estrés en el trabajo. Transforma al menos tres subordinadas en construcciones nominales (wegen, trotz, bei, durch…) y usa dos verbos de apoyo.', m: 'Wegen der steigenden Anforderungen im Berufsleben leiden immer mehr Menschen unter Stress. Bei rechtzeitiger Vorsorge lassen sich ernste Erkrankungen jedoch häufig vermeiden. Eine wichtige Rolle spielen dabei regelmäßige Pausen: Durch kurze Unterbrechungen der Arbeit kann sich der Körper erholen. Trotz des Zeitdrucks sollte niemand auf seine Mittagspause verzichten. Auch die Unternehmen müssen Verantwortung übernehmen. Sie sollten ihren Beschäftigten Beratungsangebote zur Verfügung stellen und bei der Planung der Aufgaben auf eine gerechte Verteilung achten. Nach Feierabend sollte niemand mehr erreichbar sein müssen. Wer dauerhaft erschöpft ist, sollte professionelle Hilfe in Anspruch nehmen und rechtzeitig eine Entscheidung über Veränderungen treffen.' } },

  { id: 'b2-5', t: 'Migration und Globalisierung', es: 'Migración y globalización', v: [
    ['die Globalisierung', 'la globalización'], ['die Einwanderung', 'la inmigración'], ['die Auswanderung', 'la emigración'], ['der Flüchtling', 'el refugiado'], ['fliehen', 'huir'], ['das Asyl', 'el asilo'], ['die Integration', 'la integración'],
    ['sich integrieren', 'integrarse'], ['die Staatsangehörigkeit', 'la nacionalidad'], ['die Aufenthaltserlaubnis', 'el permiso de residencia'], ['die Behörde', 'la administración, la autoridad'], ['der Antrag', 'la solicitud'], ['beantragen', 'solicitar'], ['die Herkunft', 'el origen'],
    ['die Vielfalt', 'la diversidad'], ['die Diskriminierung', 'la discriminación'], ['benachteiligen', 'discriminar, perjudicar'], ['die Chancengleichheit', 'la igualdad de oportunidades'], ['der Wohlstand', 'el bienestar económico'], ['der Handel', 'el comercio'], ['die Grenze', 'la frontera'],
    ['die Abhängigkeit', 'la dependencia'], ['der Zusammenhalt', 'la cohesión'], ['das Missverständnis', 'el malentendido'], ['sich anpassen', 'adaptarse'], ['die Zugehörigkeit', 'la pertenencia'], ['bereuen', 'arrepentirse de'], ['vermissen', 'echar de menos']],
    g: { t: 'El Konjunktiv II del pasado y als ob', n: `
## Lo que habría pasado
Para hablar de algo que no ocurrió: **hätte / wäre** + participio.
| Ich hätte mehr gelernt.            Habría estudiado más.
| Wir wären früher gekommen.         Habríamos venido antes.
Solo existe esta forma para todos los pasados.

## Condiciones irreales en pasado
| Wenn ich die Sprache früher gelernt hätte, hätte ich schneller Arbeit gefunden.
| Wäre sie nicht ausgewandert, hätte sie ihren Mann nie kennengelernt.       (sin «wenn», con el verbo en cabeza)
Se puede mezclar una condición pasada con una consecuencia presente:
| Wenn ich damals geblieben wäre, wäre ich heute nicht so glücklich.

## Con verbos modales: reproches y arrepentimiento
**hätte** + infinitivo + modal en infinitivo (doble infinitivo):
| Du hättest mich fragen sollen.                  Tendrías que haberme preguntado.
| Ich hätte den Antrag früher stellen müssen.     Tendría que haber presentado antes la solicitud.
| Das hätte nicht passieren dürfen.               Eso no debería haber pasado.
En una subordinada, «hätte» se coloca **delante** de los dos infinitivos: …, weil ich es hätte wissen müssen.

## Deseos sobre el pasado
| Wenn ich doch nur früher angefangen hätte!  ·  Hätte ich bloß auf dich gehört!

## Comparaciones irreales: als ob
**als ob** + Konjunktiv II con el verbo al final, o **als** + verbo en Konjunktiv II justo después:
| Er spricht, als ob er hier geboren wäre.  =  Er spricht, als wäre er hier geboren.
| Sie tat so, als ob sie nichts gehört hätte.
> «fast» o «beinahe» + Konjunktiv II del pasado significa «por poco»: Ich hätte fast den Zug verpasst.
`, e: [
      mc(3, 'Completa: «Wenn ich das gewusst ___, wäre ich gekommen.»', ['hätte', 'wäre', 'habe', 'würde'], '«wissen» lleva haben: gewusst hätte.'),
      mc(3, 'Completa: «Wenn sie früher losgefahren ___, hätte sie den Termin nicht verpasst.»', ['wäre', 'hätte', 'war', 'würde'], '«losfahren» es de movimiento: lleva sein.'),
      mc(3, '«Tendrías que haberme llamado» se dice…', ['Du hättest mich anrufen sollen.', 'Du solltest mich angerufen haben.', 'Du hättest mich angerufen sollen.', 'Du sollst mich anrufen gehabt.'], 'hätte + infinitivo + modal en infinitivo.'),
      mc(3, 'Completa: «Er tut so, als ob er alles ___.»', ['wüsste', 'weiß', 'gewusst', 'wissen'], 'als ob + Konjunktiv II.'),
      mc(3, '¿Qué frase es correcta?', ['Sie spricht, als wäre sie hier geboren.', 'Sie spricht, als sie wäre hier geboren.', 'Sie spricht, als ob wäre sie hier geboren.', 'Sie spricht, als sie hier geboren wäre.'], 'Con «als» solo, el verbo va inmediatamente después; con «als ob», al final.'),
      tx(3, 'Completa con «hören»: «Hätte ich bloß auf dich ___!»', ['gehört'], 'Deseo sobre el pasado: hätte + participio.'),
      mc(3, 'Completa: «…, weil ich den Antrag früher ___.»', ['hätte stellen müssen', 'stellen müssen hätte', 'stellen hätte müssen', 'hätte gestellt müssen'], 'En la subordinada, «hätte» se adelanta al doble infinitivo.'),
      tx(3, 'Completa (por poco): «Ich ___ fast meinen Pass vergessen.»', ['hätte'], 'fast + Konjunktiv II del pasado.')] },
    d: { t: 'Zehn Jahre später', l: [
      ['Reporterin', 'Frau Demir, Sie sind vor zehn Jahren aus Izmir nach Köln gekommen. Würden Sie es wieder tun?', 'Señora Demir, hace diez años vino usted de Esmirna a Colonia. ¿Volvería a hacerlo?'],
      ['Frau Demir', 'Ja, aber ich würde vieles anders machen. Ich hätte zum Beispiel schon vor der Ausreise Deutsch lernen sollen.', 'Sí, pero haría muchas cosas de otra manera. Por ejemplo, debería haber aprendido alemán ya antes de salir.'],
      ['Reporterin', 'War der Anfang so schwer?', '¿Tan difícil fue el principio?'],
      ['Frau Demir', 'Sehr. Auf den Behörden habe ich fast nichts verstanden. Wenn mir eine Nachbarin nicht geholfen hätte, hätte ich meinen ersten Antrag nie rechtzeitig abgegeben.', 'Mucho. En las oficinas públicas no entendía casi nada. Si no me hubiera ayudado una vecina, nunca habría entregado a tiempo mi primera solicitud.'],
      ['Reporterin', 'Wurde Ihr Diplom als Ingenieurin anerkannt?', '¿Le reconocieron el título de ingeniera?'],
      ['Frau Demir', 'Erst nach zwei Jahren. In dieser Zeit habe ich in einem Café gearbeitet. Manche Gäste behandelten mich, als ob ich nie eine Schule besucht hätte.', 'Solo al cabo de dos años. En ese tiempo trabajé en una cafetería. Algunos clientes me trataban como si nunca hubiera ido a la escuela.'],
      ['Reporterin', 'Haben Sie damals ans Zurückgehen gedacht?', '¿Pensó entonces en volver?'],
      ['Frau Demir', 'Natürlich. Aber wäre ich damals zurückgegangen, hätte ich heute weder meine Stelle noch meine Freunde hier.', 'Claro. Pero si hubiera vuelto entonces, hoy no tendría ni mi puesto ni mis amigos de aquí.'],
      ['Reporterin', 'Was vermissen Sie am meisten?', '¿Qué es lo que más echa de menos?'],
      ['Frau Demir', 'Das Meer und meine Mutter. Inzwischen fühle ich mich aber in beiden Ländern zu Hause.', 'El mar y a mi madre. Pero ahora me siento en casa en los dos países.']],
      q: [
        mc(3, 'Was hätte Frau Demir vor der Ausreise tun sollen?', ['Deutsch lernen', 'Eine Wohnung suchen', 'Ihr Diplom übersetzen lassen', 'Geld sparen'], '«Ich hätte … schon vor der Ausreise Deutsch lernen sollen.»'),
        mc(3, 'Wer hat ihr bei dem ersten Antrag geholfen?', ['Eine Nachbarin', 'Eine Beamtin', 'Ihre Mutter', 'Eine Kollegin'], '«Wenn mir eine Nachbarin nicht geholfen hätte…»'),
        mc(3, 'Wie lange dauerte es, bis ihr Diplom anerkannt wurde?', ['Zwei Jahre', 'Zehn Jahre', 'Ein paar Monate', 'Es wurde nie anerkannt.'], '«Erst nach zwei Jahren.»'),
        mc(3, 'Wie fühlt sie sich heute?', ['In beiden Ländern zu Hause', 'Fremd in Deutschland', 'Nur noch in der Türkei zu Hause', 'Unzufrieden mit ihrer Entscheidung'], '«…fühle ich mich aber in beiden Ländern zu Hause.»')] },
    w: { c: 'Piensa en una decisión importante de tu vida (estudios, trabajo, una mudanza). Escribe unas 120 palabras: qué habría pasado si hubieras decidido otra cosa, qué deberías haber hecho distinto y de qué no te arrepientes.', m: 'Vor acht Jahren habe ich mich entschieden, in meiner Heimatstadt zu bleiben, statt eine Stelle in Lyon anzunehmen. Wenn ich damals gegangen wäre, hätte ich sicher schneller Französisch gelernt und vermutlich mehr verdient. Vielleicht hätte ich aber auch meine Partnerin nie kennengelernt. Manchmal denke ich, ich hätte mutiger sein sollen. Ich hätte wenigstens ein Jahr im Ausland ausprobieren können. Andererseits wäre ich heute nicht selbstständig, wenn ich meinen sicheren Job nie infrage gestellt hätte. Meine Freunde tun oft so, als ob jede Entscheidung endgültig wäre. Das sehe ich anders: Was ich damals verpasst habe, lässt sich nachholen. Bereut habe ich meine Entscheidung jedenfalls nie.' } },

  { id: 'b2-6', t: 'Sprache und Kultur', es: 'Lengua y cultura', v: [
    ['die Muttersprache', 'la lengua materna'], ['die Fremdsprache', 'la lengua extranjera'], ['die Mehrsprachigkeit', 'el multilingüismo'], ['der Dialekt', 'el dialecto'], ['die Aussprache', 'la pronunciación'], ['der Akzent', 'el acento'], ['der Wortschatz', 'el vocabulario'],
    ['der Ausdruck', 'la expresión'], ['die Redewendung', 'la frase hecha'], ['das Sprichwort', 'el refrán'], ['die Bedeutung', 'el significado'], ['übersetzen', 'traducir'], ['dolmetschen', 'interpretar (oralmente)'], ['sich ausdrücken', 'expresarse'],
    ['fließend', 'con fluidez'], ['die Höflichkeit', 'la cortesía'], ['duzen', 'tutear'], ['siezen', 'tratar de usted'], ['der Umgangston', 'el tono, el trato'], ['die Körpersprache', 'el lenguaje corporal'], ['das Klischee', 'el cliché'],
    ['der Brauch', 'la costumbre, la tradición'], ['der Roman', 'la novela'], ['die Dichtung', 'la poesía'], ['das Theaterstück', 'la obra de teatro'], ['die Aufführung', 'la representación'], ['das Werk', 'la obra'], ['zeitgenössisch', 'contemporáneo']],
    g: { t: 'Partículas modales y suposiciones con verbos modales', n: `
## Las partículas modales
Palabras breves y sin acento que no cambian la información, pero sí el tono. Son la marca del alemán hablado natural; van detrás del verbo y de los pronombres.
- **ja**: lo que digo ya lo sabes, o sorpresa → Du kennst ihn ja. · Das ist ja toll!
- **doch**: recordatorio, réplica amable o ruego → Das habe ich dir doch gesagt. · Komm doch mit!
- **mal**: suaviza una petición → Schau mal. · Kannst du mal kurz helfen?
- **eben / halt**: es así y no se puede cambiar → Das ist eben so. · Dann müssen wir halt warten.
- **denn**: interés en una pregunta → Wie heißt du denn? · Was ist denn los?
- **eigentlich**: «por cierto» o «en realidad» → Wo wohnst du eigentlich?
- **wohl**: suposición → Er ist wohl krank.
- **schon**: confianza o concesión → Das klappt schon. · Das stimmt schon, aber…
- **bloß / nur**: advertencia o deseo → Sei bloß vorsichtig! · Wenn er nur käme!
> «Doch» como respuesta contradice una negación: «Kommst du nicht mit?» – «Doch!» (Sí que voy).

## Suposiciones con verbos modales
Los modales expresan también el grado de seguridad de quien habla:
$ muss → casi seguro: Er muss krank sein.
$ dürfte → probable: Sie dürfte schon zu Hause sein.
$ kann / könnte → posible: Das könnte stimmen.
$ kann nicht → imposible: Das kann nicht wahr sein.
Suposiciones sobre el pasado: modal + participio + **haben / sein**:
| Er muss den Zug verpasst haben.        Seguro que ha perdido el tren.
| Sie könnte schon gegangen sein.        Puede que ya se haya ido.

## Lo que dicen otros: sollen y wollen
- **sollen**: se dice, según cuentan → Der Roman soll sehr gut sein. · Er soll ausgewandert sein.
- **wollen**: alguien afirma de sí mismo algo que quizá no sea verdad → Sie will ihn nie getroffen haben.
> El futuro con «werden» + «wohl» también expresa suposición: Er wird wohl im Stau stehen.
`, e: [
      mc(3, '«Er muss krank sein» significa…', ['Seguro que está enfermo', 'Tiene la obligación de estar enfermo', 'Puede que esté enfermo', 'Dicen que está enfermo'], '«müssen» como suposición: casi certeza.'),
      mc(3, '«Der Film soll sehr gut sein» significa…', ['Dicen que la película es muy buena', 'La película tiene que ser buena por obligación', 'Seguro que la película es buena', 'La película quiere ser buena'], '«sollen» reproduce lo que cuentan otros.'),
      mc(3, 'Completa (es casi seguro): «Sie ist nicht da. Sie ___ den Bus verpasst haben.»', ['muss', 'soll', 'will', 'darf'], 'muss + participio + haben: deducción sobre el pasado.'),
      mc(3, '«Kommst du nicht mit?» – «___, natürlich!»', ['Doch', 'Ja', 'Nein', 'Schon'], 'A una pregunta negativa se responde afirmativamente con «doch».'),
      mc(3, 'Completa para suavizar la petición: «Kannst du ___ das Fenster aufmachen?»', ['mal', 'wohl', 'ja', 'eben'], '«mal» quita brusquedad a los ruegos.'),
      mc(3, '«Sie will ihn nie gesehen haben» significa…', ['Ella afirma que nunca lo ha visto', 'Ella no quiere verlo nunca', 'Ella nunca quiso verlo', 'Dicen que ella nunca lo ha visto'], '«wollen» + infinitivo pasado: lo afirma el propio sujeto, y quien habla lo pone en duda.'),
      tx(3, 'Completa (es probable): «Er ___ schon zu Hause sein.»', ['dürfte'], '«dürfte» expresa probabilidad.'),
      mc(3, '¿Qué partícula expresa resignación? «Das ist ___ so.»', ['eben', 'denn', 'mal', 'bloß'], '«eben» o «halt»: es así y no tiene remedio.')] },
    d: { t: 'Du oder Sie?', l: [
      ['Marco', 'Sag mal, Katrin, darf ich dich etwas fragen? Wann sagt man eigentlich «du» und wann «Sie»?', 'Oye, Katrin, ¿puedo preguntarte una cosa? ¿Cuándo se dice en realidad «du» y cuándo «Sie»?'],
      ['Katrin', 'Das ist ja eine gute Frage! Selbst wir Deutschen sind uns da nicht immer sicher.', '¡Pues sí que es buena pregunta! Ni siquiera los alemanes estamos siempre seguros.'],
      ['Marco', 'Gestern habe ich meinen neuen Chef geduzt. Er hat ziemlich komisch geschaut.', 'Ayer tuteé a mi nuevo jefe. Puso una cara bastante rara.'],
      ['Katrin', 'Oje. Er dürfte das nicht gewohnt sein. In deiner Firma siezt man sich wohl noch.', 'Vaya. Probablemente no está acostumbrado. En tu empresa todavía se tratan de usted, supongo.'],
      ['Marco', 'Aber die Kollegen duzen sich doch alle!', '¡Pero si los compañeros se tutean todos!'],
      ['Katrin', 'Untereinander schon. Beim Chef wartet man eben, bis er es anbietet. Das ist halt so eine ungeschriebene Regel.', 'Entre ellos sí. Con el jefe se espera, simplemente, a que él lo ofrezca. Es una de esas reglas no escritas.'],
      ['Marco', 'Er muss mich für sehr unhöflich gehalten haben.', 'Seguro que me ha tomado por un maleducado.'],
      ['Katrin', 'Ach was, er wird schon gemerkt haben, dass du es nicht böse meinst. Entschuldige dich einfach kurz.', 'Qué va, ya se habrá dado cuenta de que no lo haces con mala intención. Discúlpate brevemente y ya está.'],
      ['Marco', 'In Start-ups soll das ja ganz anders sein.', 'Dicen que en las empresas emergentes es totalmente distinto.'],
      ['Katrin', 'Stimmt, dort duzt man sich vom ersten Tag an. Kompliziert, oder?', 'Es verdad, allí se tutean desde el primer día. Complicado, ¿eh?']],
      q: [
        mc(3, 'Was hat Marco gestern gemacht?', ['Er hat seinen Chef geduzt.', 'Er hat seinen Chef kritisiert.', 'Er hat einen Kollegen gesiezt.', 'Er hat gekündigt.'], '«Gestern habe ich meinen neuen Chef geduzt.»'),
        mc(3, 'Was vermutet Katrin über Marcos Firma?', ['Dass man sich dort noch siezt', 'Dass sich dort alle duzen', 'Dass der Chef sehr streng ist', 'Dass Marco entlassen wird'], '«In deiner Firma siezt man sich wohl noch.»'),
        mc(3, 'Welche ungeschriebene Regel nennt Katrin?', ['Man wartet, bis der Chef das Du anbietet.', 'Man siezt alle Kollegen.', 'Man duzt nur ältere Personen.', 'Man fragt am ersten Tag nach.'], '«Beim Chef wartet man eben, bis er es anbietet.»'),
        mc(3, 'Was rät Katrin Marco?', ['Sich kurz zu entschuldigen', 'Den Chef weiter zu duzen', 'Die Firma zu wechseln', 'Nichts zu sagen'], '«Entschuldige dich einfach kurz.»')] },
    w: { c: 'Describe una costumbre o norma de cortesía de un país germanohablante que te sorprenda y compárala con la de tu país. Unas 120 palabras, con suposiciones (dürfte, muss, soll) y alguna partícula modal.', m: 'Was mich in Deutschland überrascht hat, ist die Pünktlichkeit. Wer fünf Minuten zu spät kommt, entschuldigt sich, als wäre etwas Schlimmes passiert. Das dürfte mit dem Respekt vor der Zeit der anderen zu tun haben. In Spanien sieht man das eben lockerer: Eine Verabredung um neun beginnt selten vor Viertel nach. Am Anfang muss ich auf meine deutschen Freunde ziemlich unhöflich gewirkt haben. Eine Freundin sagte einmal: «Du hättest ja wenigstens schreiben können!» Inzwischen habe ich mich angepasst. In der Schweiz soll man sogar noch strenger sein. Kompliziert finde ich das nicht mehr, denn wer die Regel kennt, kann sich darauf verlassen. Und das hat ja auch Vorteile.' } },
] });
