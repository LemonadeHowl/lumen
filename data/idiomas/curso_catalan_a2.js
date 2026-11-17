// Curso de catalán · nivel A2. Mismo formato que curso_catalan.js (cadenas entre comillas dobles).
CURSO.catalan.push({ id: "A2", nombre: "A2 · Bàsic", desc: "Contar lo que pasó, describir tu entorno, comparar, hacer planes y desenvolverte en compras, trabajo, salud e invitaciones.", u: [
  { id: "ca2-1", t: "Viatges i vacances", es: "Viajes y vacaciones", v: [
    ["el viatge", "el viaje"], ["el vol", "el vuelo"], ["l'aeroport", "el aeropuerto"], ["l'avió", "el avión"], ["la maleta", "la maleta"], ["l'equipatge", "el equipaje"], ["el passaport", "el pasaporte"],
    ["l'allotjament", "el alojamiento"], ["l'hotel", "el hotel"], ["la casa rural", "la casa rural"], ["reservar", "reservar"], ["fer la maleta", "hacer la maleta"], ["marxar", "irse, marcharse"], ["arribar", "llegar"],
    ["l'enllaç", "el enlace"], ["perdre", "perder"], ["el retard", "el retraso"], ["la platja", "la playa"], ["recórrer", "recorrer"], ["l'excursió", "la excursión"], ["a l'estranger", "en el extranjero"],
    ["l'estada", "la estancia"], ["esgotador", "agotador"], ["relaxant", "relajante"], ["el record", "el recuerdo"], ["el paisatge", "el paisaje"], ["el guia", "el guía"], ["el mapa", "el mapa"]],
    g: { t: "El imperfet y el pasado perifrástico", n: `
## Cómo se forma el imperfet
$ -ar: parlava, parlaves, parlava, parlàvem, parlàveu, parlaven
$ -re / -er / -ir: perdia, perdies, perdia, perdíem, perdíeu, perdien · dormia
Irregulares: **ser**: era, eres, era, érem, éreu, eren · **fer**: feia · **dir**: deia · **beure**: bevia · **veure**: veia · **viure**: vivia

## Para qué sirve cada tiempo
- **Imperfet**: descripciones, costumbres, lo que estaba pasando → Feia calor. · De petit anava sempre a la platja.
- **Passat perifràstic**: hechos terminados en un tiempo pasado → Vam visitar Lisboa. · El tren va arribar a mitjanit.
| Plovia quan vam arribar.      Llovía cuando llegamos.
| Estava cansada, així que em vaig quedar a l'hotel.
> El reparto coincide con el castellano: «llovía» → plovia; «llegamos» → vam arribar.

## Palabras que orientan
- Con imperfet: normalment, sempre, cada estiu, de petit, mentre.
- Con perifràstic: ahir, un dia, de sobte, la setmana passada, el 2019.
| Mentre llegia, va sonar el telèfon.
`, e: [
      mc(1, "¿Cuál es el imperfet de «jo parlo»?", ["jo parlava", "jo vaig parlar", "jo parlaré", "jo he parlat"], "parl- + -ava."),
      mc(1, "Completa: «Quan ___ petit, vivia a Reus.»", ["era", "vaig ser", "sóc", "seré"], "Descripción de una etapa: imperfet de ser."),
      mc(1, "Completa: «Ahir ___ visitar el museu.»", ["vam", "visitàvem", "visitem", "hem"], "Hecho terminado con «ahir»: perifràstic."),
      mc(1, "Completa: «___ quan vam arribar.»", ["Plovia", "Va ploure", "Plou", "Plourà"], "El decorado va en imperfet."),
      tx(1, "Imperfet de «fer» para «nosaltres».", ["fèiem"], "Irregular: fèiem."),
      mc(1, "Completa: «Cada estiu ___ a la platja.»", ["anàvem", "vam anar", "anem", "anirem"], "Costumbre del pasado: imperfet."),
      mc(1, "Completa: «Mentre llegia, el telèfon ___.»", ["va sonar", "sonava", "sona", "sonarà"], "Acción que interrumpe: perifràstic."),
      tx(1, "Completa con «tenir» en imperfet: «L'avió ___ dues hores de retard.»", ["tenia"], "tenia.")] },
    d: { t: "Un viatge amb sorpreses", l: [
      ["Mia", "Doncs què, com va anar el viatge a Lisboa?", "Bueno, ¿qué tal el viaje a Lisboa?"],
      ["Tom", "Molt bé, però la sortida va ser complicada. L'avió tenia tres hores de retard.", "Muy bien, pero la salida fue complicada. El avión tenía tres horas de retraso."],
      ["Mia", "Oh, no! Vau perdre l'enllaç?", "¡Oh, no! ¿Perdisteis el enlace?"],
      ["Tom", "Sí. Vam haver d'esperar a Madrid i vam arribar a mitjanit.", "Sí. Tuvimos que esperar en Madrid y llegamos a medianoche."],
      ["Mia", "I l'hotel?", "¿Y el hotel?"],
      ["Tom", "Per sort, era a prop de l'aeroport i la recepció encara era oberta.", "Por suerte estaba cerca del aeropuerto y la recepción seguía abierta."],
      ["Mia", "Què hi vau fer, allà?", "¿Qué hicisteis allí?"],
      ["Tom", "Vam visitar el barri antic i vam fer una excursió a la platja. Feia un temps fantàstic.", "Visitamos el barrio antiguo e hicimos una excursión a la playa. Hacía un tiempo fantástico."],
      ["Mia", "Sembla relaxant.", "Parece relajante."],
      ["Tom", "Sí! Però la propera vegada volem anar-hi amb tren.", "¡Sí! Pero la próxima vez queremos ir en tren."]],
      q: [
        mc(1, "Per què la sortida va ser complicada?", ["L'avió tenia retard.", "L'hotel era tancat.", "Plovia.", "El vol era car."], "«L'avió tenia tres hores de retard.»"),
        mc(1, "On van haver d'esperar?", ["A Madrid", "A Lisboa", "A Barcelona", "A Porto"], "«Vam haver d'esperar a Madrid.»"),
        mc(1, "Quan van arribar?", ["A mitjanit", "A la tarda", "Al matí", "A les vuit"], "«…vam arribar a mitjanit.»"),
        mc(1, "Quin temps feia?", ["Feia un temps fantàstic.", "Plovia.", "Feia fred.", "Nevava."], "«Feia un temps fantàstic.»")] },
    w: { c: "Cuenta un viaje que hayas hecho: adónde fuiste, cómo era el lugar, qué problema hubo y qué visitaste. Combina imperfet y perifràstic.", m: "L'estiu passat vaig anar a Lisboa amb la meva germana. Vam agafar l'avió, però tenia retard i vam esperar tres hores. La ciutat era preciosa i feia calor. Vam visitar el barri antic i vam fer una excursió a la platja. Em volia quedar més dies!" } },

  { id: "ca2-2", t: "La mudança", es: "La mudanza", v: [
    ["la mudança", "la mudanza"], ["traslladar-se", "mudarse, trasladarse"], ["el propietari", "el propietario"], ["el llogater", "el inquilino"], ["el veí", "el vecino"], ["la planta baixa", "la planta baja"], ["el replà", "el rellano"],
    ["l'ascensor", "el ascensor"], ["el traster", "el trastero"], ["el passadís", "el pasillo"], ["la paret", "la pared"], ["el sostre", "el techo"], ["el terra", "el suelo"], ["la prestatgeria", "la estantería"],
    ["l'escriptori", "el escritorio"], ["la catifa", "la alfombra"], ["el llum", "la lámpara, la luz"], ["el mirall", "el espejo"], ["el moble", "el mueble"], ["la capsa", "la caja"], ["endreçar", "ordenar"],
    ["deixar", "prestar; dejar"], ["portar", "llevar, traer"], ["ensenyar", "enseñar, mostrar"], ["muntar", "montar"], ["lluminós", "luminoso"], ["còmode", "cómodo"], ["la clau", "la llave"]],
    g: { t: "Los pronombres débiles de objeto directo e indirecto", n: `
## Objeto directo
Delante del verbo:
$ em · et · el / la · ens · us · els / les
Ante vocal o h: **m', t', l'**.
| Veus el mirall? – Sí, el veig.        Porto les capses. → Les porto.
| L'he vist. (lo he visto)
> Para lo neutro («eso») se usa **ho**: Ho sé. · No ho entenc.

## Objeto indirecto
$ em · et · li (a él / ella / usted) · ens · us · els (a ellos)
| Truco a la Marta. → Li truco.      Escric als veïns. → Els escric.
> «els» sirve a la vez para «los» (directo masculino plural) y «les» (indirecto plural).

## Posición
- Delante del verbo conjugado: El compro. · No el compro.
- Detrás del infinitivo, del gerundio y del imperativo, con guion o apóstrofo:
| Vull comprar-lo. · Porta-ho! · Dona'm la clau! · Deixa-li les claus.
Formas detrás del verbo: **-me, -te, -lo / -la, -nos, -vos, -los / -les, -li, -ho**; tras vocal: **'m, 't, 'l, 'ns, 'ls**.

## Concordancia del participio
Con **la** y **les** delante, el participio concuerda: Les capses? Les he portades.
`, e: [
      mc(1, "Sustituye: «Porto els llibres.» → «___ porto.»", ["Els", "Les", "Li", "El"], "Directo masculino plural: els."),
      mc(1, "Sustituye: «Truco a la meva mare.» → «___ truco.»", ["Li", "La", "L'", "Els"], "Indirecto singular: li."),
      mc(1, "Sustituye: «No sé això.» → «No ___ sé.»", ["ho", "el", "la", "en"], "Lo neutro: ho."),
      mc(1, "¿Qué frase es correcta?", ["Vull muntar-lo.", "Vull lo muntar.", "Vull muntar lo.", "Lo vull muntar-lo."], "Tras infinitivo: con guion, -lo."),
      tx(1, "Imperativo: «Dona la clau a mi!» → «Dona'___ la clau!»", ["m"], "Tras vocal: 'm."),
      mc(1, "Pon en negativo: «El compro.»", ["No el compro.", "El no compro.", "No compro el.", "No lo compro."], "no + pronombre + verbo."),
      mc(1, "Completa: «Les capses? Les he ___.»", ["portades", "portat", "portats", "portada"], "Con «les» delante, concuerda: portades."),
      tx(1, "Sustituye «als veïns»: «___ escric una nota.»", ["Els"], "Indirecto plural: els.")] },
    d: { t: "El dia de la mudança", l: [
      ["Sara", "Doncs aquí tenim el pis nou. On posem el sofà?", "Bueno, aquí tenemos el piso nuevo. ¿Dónde ponemos el sofá?"],
      ["Biel", "El posem contra la paret, sota la finestra.", "Lo ponemos contra la pared, debajo de la ventana."],
      ["Sara", "D'acord. I les prestatgeries?", "De acuerdo. ¿Y las estanterías?"],
      ["Biel", "Ja les he muntades al passadís.", "Ya las he montado en el pasillo."],
      ["Sara", "Perfecte. Has vist el llum?", "Perfecto. ¿Has visto la lámpara?"],
      ["Biel", "Encara és al cotxe, entre les capses. Vaig a buscar-lo.", "Sigue en el coche, entre las cajas. Voy a buscarla."],
      ["Sara", "I les claus del traster? Te les ha donades el propietari?", "¿Y las llaves del trastero? ¿Te las ha dado el propietario?"],
      ["Biel", "No, encara no. Li trucaré aquest vespre.", "No, todavía no. Le llamaré esta noche."],
      ["Sara", "Per cert, els veïns ens han deixat la seva escala.", "Por cierto, los vecinos nos han prestado su escalera."],
      ["Biel", "Que amables! Demà els portarem un pastís.", "¡Qué amables! Mañana les llevaremos un pastel."]],
      q: [
        mc(1, "On posen el sofà?", ["Sota la finestra", "Al passadís", "Davant de la porta", "Al balcó"], "«…sota la finestra.»"),
        mc(1, "On són les prestatgeries?", ["Al passadís", "Al cotxe", "Al traster", "Al costat del sofà"], "«Ja les he muntades al passadís.»"),
        mc(1, "On és el llum?", ["Al cotxe", "Sobre la taula", "Al passadís", "Sota la finestra"], "«Encara és al cotxe.»"),
        mc(1, "Què els han deixat els veïns?", ["Una escala", "Un pastís", "Les claus", "Un llum"], "«…ens han deixat la seva escala.»")] },
    w: { c: "Acabas de mudarte. Escribe a un amigo cinco frases: cómo es el piso, quién te ha ayudado, qué te han prestado y a quién vas a invitar. Usa pronombres débiles.", m: "Dissabte em vaig traslladar a un pis al segon. És petit, però el trobo molt lluminós. El meu germà em va ajudar: li vaig fer un bon sopar. Els veïns són simpàtics, em van deixar unes eines i ja les hi he tornades. Aquest cap de setmana els vull convidar a prendre un cafè." } },

  { id: "ca2-3", t: "La feina", es: "El trabajo", v: [
    ["l'ofici", "el oficio"], ["el lloc de treball", "el puesto de trabajo"], ["l'empresa", "la empresa"], ["el cap", "el jefe"], ["el company de feina", "el compañero de trabajo"], ["la sol·licitud", "la solicitud"], ["presentar-se a", "presentarse a (un puesto)"],
    ["el currículum", "el currículum"], ["l'entrevista", "la entrevista"], ["el sou", "el sueldo"], ["guanyar", "ganar"], ["l'horari", "el horario"], ["les hores extres", "las horas extra"], ["la formació", "la formación"],
    ["l'experiència", "la experiencia"], ["la reunió", "la reunión"], ["la tasca", "la tarea"], ["les pràctiques", "las prácticas"], ["plegar", "dejar el trabajo; salir del trabajo"], ["acomiadar", "despedir"], ["a l'atur", "en el paro"],
    ["a mitja jornada", "a media jornada"], ["a jornada completa", "a jornada completa"], ["el contracte", "el contrato"], ["la pausa", "el descanso"], ["estressant", "estresante"], ["satisfet", "satisfecho"], ["l'èxit", "el éxito"]],
    g: { t: "Los relativos y la causa y la consecuencia", n: `
## que
Sirve para sujeto y objeto directo, personas y cosas:
| És una companya que parla tres llengües.      És la feina que vull.

## Relativo con preposición
Detrás de una preposición, **què** (con tilde) o **el qual / la qual / els quals / les quals**:
| L'empresa en què treballo és a Reus.  =  L'empresa en la qual treballo…
| La companya amb qui surto és de Vic.          (personas: qui)
**on** para lugares: L'oficina on treballo.
> Error típico: «L'empresa que treballo». Con preposición: «en què» o «on».

## La causa
| perquè (porque): Busco una altra feina perquè vull guanyar més.
| com que (como), al principio: Com que estava malalt, em vaig quedar a casa.
| ja que / atès que (ya que) · a causa de · gràcies a
> «perquè» también significa «para que» (con subjuntivo): T'ho explico perquè ho entenguis.

## La consecuencia
| per tant · així que · doncs
| Parlo alemany, per tant treballo amb els clients de Berlín.
`, e: [
      mc(1, "Completa: «És una empresa ___ contracta molta gent.»", ["que", "què", "qui", "on"], "Sujeto: que."),
      mc(1, "Completa: «L'oficina en ___ treballo és al tercer pis.»", ["què", "que", "qui", "on"], "Tras preposición, para cosas: què."),
      mc(1, "Completa: «La companya amb ___ parlo és de Vic.»", ["qui", "que", "què", "la que"], "Tras preposición, para personas: qui."),
      mc(1, "Completa: «La feina ___ prefereixo és la d'infermer.»", ["que", "què", "en què", "on"], "Objeto directo: que."),
      tx(1, "Completa: «___ plovia, vaig agafar l'autobús.» (como)", ["Com que"], "com que al principio."),
      mc(1, "Completa: «Estic cansat ___ he fet hores extres.»", ["perquè", "per tant", "així que", "a causa de"], "Causa con verbo: perquè."),
      mc(1, "Completa: «El tren anava amb retard ___ la neu.»", ["a causa de", "perquè la", "gràcies a", "per tant"], "Causa negativa + nombre: a causa de."),
      tx(1, "Completa: «Demà tinc una entrevista, ___ preparo el currículum.» (por tanto)", ["per tant", "així que", "doncs"], "Consecuencia.")] },
    d: { t: "L'entrevista de feina", l: [
      ["Sra. Vila", "Bon dia, senyor Navarro. Per què vol treballar amb nosaltres?", "Buenos días, señor Navarro. ¿Por qué quiere trabajar con nosotros?"],
      ["Sr. Navarro", "Perquè la seva empresa treballa amb l'Amèrica Llatina i m'agradaria fer servir les meves llengües.", "Porque su empresa trabaja con América Latina y me gustaría usar mis idiomas."],
      ["Sra. Vila", "Veig al currículum que va treballar tres anys a Madrid.", "Veo en el currículum que trabajó tres años en Madrid."],
      ["Sr. Navarro", "Sí, d'informàtic. És una experiència que em va ensenyar molt.", "Sí, de informático. Es una experiencia que me enseñó mucho."],
      ["Sra. Vila", "La feina que oferim és a jornada completa. És un problema?", "El puesto que ofrecemos es a jornada completa. ¿Es un problema?"],
      ["Sr. Navarro", "Gens. També puc fer hores extres si cal.", "En absoluto. También puedo hacer horas extra si hace falta."],
      ["Sra. Vila", "Molt bé. Té alguna pregunta?", "Muy bien. ¿Tiene alguna pregunta?"],
      ["Sr. Navarro", "Sí. M'agradaria saber quan podria començar.", "Sí. Me gustaría saber cuándo podría empezar."],
      ["Sra. Vila", "Si tot va bé, l'u de maig.", "Si todo va bien, el uno de mayo."]],
      q: [
        mc(1, "Per què vol aquesta feina el senyor Navarro?", ["Per fer servir les seves llengües", "Perquè el sou és alt", "Perquè viu a prop", "Perquè és a l'atur"], "«…m'agradaria fer servir les meves llengües.»"),
        mc(1, "Quant de temps va treballar a Madrid?", ["Tres anys", "Un any", "Cinc anys", "Tres mesos"], "«…va treballar tres anys a Madrid.»"),
        mc(1, "Quina feina feia?", ["D'informàtic", "De professor", "De metge", "De dependent"], "«Sí, d'informàtic.»"),
        mc(1, "Quan podria començar?", ["L'u de maig", "Ara mateix", "A l'estiu", "L'any que ve"], "«…l'u de maig.»")] },
    w: { c: "Explica en cinco frases a qué te dedicas o qué estudias, qué te gusta de ello y por qué. Usa «que», «on», «perquè» y «per tant».", m: "Treballo d'infermer en un hospital que és al centre de València. És una feina que m'agrada molt perquè puc ajudar la gent. La planta on treballo de vegades és estressant. Fem sovint hores extres, per tant al vespre estic cansat. Però els meus companys són molt simpàtics." } },

  { id: "ca2-4", t: "Anar a comprar", es: "Ir de compras", v: [
    ["la roba", "la ropa"], ["els pantalons", "el pantalón"], ["la camisa", "la camisa"], ["la brusa", "la blusa"], ["la faldilla", "la falda"], ["el vestit", "el vestido; el traje"], ["el jersei", "el jersey"],
    ["la jaqueta", "la chaqueta"], ["l'abric", "el abrigo"], ["la sabata", "el zapato"], ["la talla", "la talla"], ["el número", "el número (de zapato)"], ["el color", "el color"], ["emprovar-se", "probarse"],
    ["quedar bé", "sentar bien"], ["l'emprovador", "el probador"], ["el preu", "el precio"], ["les rebaixes", "las rebajas"], ["barat", "barato"], ["la caixa", "la caja"], ["en efectiu", "en efectivo"],
    ["el tiquet", "el tique"], ["canviar", "cambiar"], ["el retorn", "la devolución"], ["estret", "estrecho"], ["ample", "ancho"], ["de moda", "de moda"], ["lleuger", "ligero"]],
    g: { t: "Comparar y señalar: comparativo, superlativo y aquest / aquell", n: `
## El comparativo
$ més … que · menys … que · tan … com (tan … como) · tant … com (con nombres: tanta roba com, tants jerseis com)
| Aquesta jaqueta és més cara que l'abric.      Aquest jersei és tan lleuger com la camisa.
Irregulares: bo → **millor** · dolent → **pitjor** · bé → millor · malament → pitjor.

## El superlativo
- Relativo: **el / la més** + adjetivo + **de**: És la jaqueta més cara de la botiga.
- Absoluto: **molt** + adjetivo o **-íssim**: caríssim, boníssim, baratíssim.

## Los demostrativos
El catalán general distingue dos grados:
$ aquest, aquesta, aquests, aquestes (este, esta…)
$ aquell, aquella, aquells, aquelles (ese, aquel…)
Pronombres neutros: **això** (esto, eso), **allò** (aquello).
| Quina jaqueta prefereixes? – Aquesta. · Què és això?
> En valenciano y baleares también existe «eixe» (ese); en el estándar central se usa «aquest» o «aquell».

## Qué tal me queda
| Em queda bé / malament. · Em va petit / gran. · Em queden estrets.
`, e: [
      mc(1, "Completa: «Aquest vestit és més car ___ la faldilla.»", ["que", "de", "com", "del"], "Comparativo: més … que."),
      mc(1, "Completa: «Aquest jersei és ___ lleuger com la camisa.»", ["tan", "tant", "més", "tanta"], "Con adjetivo: tan … com."),
      mc(1, "Completa: «Aquesta botiga és ___ que l'altra.»", ["millor", "més bona", "més bé", "molt millor que"], "bo → millor."),
      mc(1, "Superlativo absoluto de «car» (masculino):", ["caríssim", "carissim", "molt més car", "el més car"], "-íssim, con tilde."),
      tx(1, "Completa: «És l'abric més car ___ la botiga.»", ["de"], "Superlativo relativo: de."),
      mc(1, "Completa: «M'agraden ___ sabates vermelles.» (aquellas)", ["aquelles", "aquells", "aquella", "aquestes"], "Femenino plural lejano: aquelles."),
      mc(1, "¿Cómo se dice «¿Qué es esto?»", ["Què és això?", "Què és aquest?", "Què és allò d'aquí?", "Què és aqueix?"], "Neutro: això."),
      tx(1, "Completa: «Aquests pantalons em ___ estrets.»", ["queden"], "quedar: em queden (plural).")] },
    d: { t: "En una botiga", l: [
      ["Dependenta", "Bon dia. La puc ajudar?", "Buenos días. ¿Puedo ayudarla?"],
      ["Clienta", "Sí, busco una jaqueta d'abric per a l'hivern.", "Sí, busco una chaqueta de abrigo para el invierno."],
      ["Dependenta", "Quina talla fa servir?", "¿Qué talla usa?"],
      ["Clienta", "La 38. Té aquella jaqueta grisa en blau?", "La 38. ¿Tiene aquella chaqueta gris en azul?"],
      ["Dependenta", "No, ho sento, però tenim aquest model en blau marí. És més barat que l'altre.", "No, lo siento, pero tenemos este modelo en azul marino. Es más barato que el otro."],
      ["Clienta", "Me la puc emprovar?", "¿Me la puedo probar?"],
      ["Dependenta", "És clar. Els emprovadors són al fons.", "Claro. Los probadores están al fondo."],
      ["Clienta", "Em queda bé, però les mànigues són una mica massa llargues.", "Me queda bien, pero las mangas son un poco largas."],
      ["Dependenta", "Provi la talla més petita. I la pot canviar durant quinze dies amb el tiquet.", "Pruebe la talla más pequeña. Y puede cambiarla durante quince días con el tique."],
      ["Clienta", "D'acord, me l'emporto. Puc pagar amb targeta?", "De acuerdo, me la llevo. ¿Puedo pagar con tarjeta?"]],
      q: [
        mc(1, "Què busca la clienta?", ["Una jaqueta d'abric", "Un abric", "Un vestit", "Unes sabates"], "«…busco una jaqueta d'abric…»"),
        mc(1, "De quin color és l'altre model?", ["Blau marí", "Gris", "Negre", "Vermell"], "«…aquest model en blau marí.»"),
        mc(1, "Quin problema té la jaqueta?", ["Les mànigues són massa llargues.", "És massa cara.", "És massa estreta.", "No li agrada el color."], "«…les mànigues són una mica massa llargues.»"),
        mc(1, "Quant de temps la pot canviar?", ["Quinze dies", "Dos dies", "Un mes", "No es pot canviar."], "«…durant quinze dies…»")] },
    w: { c: "Describe qué ropa llevas hoy y compara dos prendas tuyas. Cinco frases con comparativos, un superlativo y un demostrativo.", m: "Avui porto uns pantalons negres i un jersei gris. Aquest jersei és més calent que la meva jaqueta, però és menys elegant. Les sabates noves són tan còmodes com les velles. El meu abric blau és la peça més cara de l'armari. També és la que em queda millor." } },

  { id: "ca2-5", t: "Esport i salut", es: "Deporte y salud", v: [
    ["entrenar-se", "entrenar"], ["descansar", "descansar"], ["afanyar-se", "darse prisa"], ["sentir-se", "sentirse"], ["relaxar-se", "relajarse"], ["fer-se mal", "hacerse daño"], ["passejar", "pasear"],
    ["l'entrenament", "el entrenamiento"], ["el gimnàs", "el gimnasio"], ["l'equip", "el equipo"], ["córrer", "correr"], ["la cursa", "la carrera"], ["caminar", "caminar"], ["la natació", "la natación"],
    ["la dieta", "la dieta"], ["l'alimentació", "la alimentación"], ["el pes", "el peso"], ["aprimar-se", "adelgazar"], ["engreixar-se", "engordar"], ["sa", "sano"], ["regularment", "con regularidad"],
    ["l'hàbit", "el hábito"], ["l'estrès", "el estrés"], ["la son", "el sueño (ganas de dormir)"], ["la forma física", "la forma física"], ["deixar de", "dejar de"], ["començar a", "empezar a"], ["el benestar", "el bienestar"]],
    g: { t: "El futuro y las condiciones con si y quan", n: `
## Cómo se forma el futuro
Infinitivo + **-é, -às, -à, -em, -eu, -an**:
| parlar: parlaré, parlaràs, parlarà, parlarem, parlareu, parlaran
| dormir: dormiré · córrer: correré
Raíces irregulares:
| ser: seré · tenir: tindré · anar: aniré · fer: faré · venir: vindré · veure: veuré · poder: podré · voler: voldré · saber: sabré · haver: hauré

## Usos
- Planes, previsiones y promesas: L'any que ve faré una marató.
- Suposiciones: Quina hora és? – Seran les vuit.

## Condiciones reales: si + presente
Como en castellano, tras **si** va el presente:
| Si t'entrenes cada dia, et sentiràs millor.
| Si plou, no aniré a córrer.

## quan + subjuntivo (futuro)
Como en castellano, para el futuro **quan** lleva subjuntivo:
| Quan tingui temps, m'apuntaré al gimnàs.       Cuando tenga tiempo, me apuntaré al gimnasio.
Presente de subjuntivo de algunos verbos: tingui (tenir), sigui (ser), pugui (poder), faci (fer), vagi (anar), vingui (venir).
`, e: [
      mc(1, "¿Cuál es el futuro de «jo parlo»?", ["jo parlaré", "jo parlava", "jo vaig parlar", "jo parlaria"], "Infinitivo + -é."),
      mc(1, "Completa: «Demà ___ a la piscina.» (nosaltres)", ["anirem", "anarem", "vam anar", "aniríem"], "Raíz irregular: anir-."),
      mc(1, "Completa: «Si ___ esport, et sentiràs millor.»", ["fas", "faràs", "faries", "facis"], "Tras «si», presente."),
      mc(1, "Completa: «Quan ___ temps, m'apuntaré al gimnàs.»", ["tingui", "tindré", "tinc", "tenia"], "quan + subjuntivo para el futuro."),
      tx(1, "Futuro de «ser» para «jo».", ["seré"], "Raíz ser- + -é."),
      mc(1, "«Seran les vuit» significa…", ["Serán las ocho (supongo)", "Eran las ocho", "Fueron las ocho", "Son las ocho en punto"], "Futuro de suposición."),
      mc(1, "Completa: «Ella ___ una dieta després de les vacances.»", ["farà", "fera", "fa farà", "feia"], "fer → far-: farà."),
      tx(1, "Completa con «poder» en futuro: «___ venir dissabte?» (tú)", ["Podràs"], "podr- + -às.")] },
    d: { t: "Una vida nova", l: [
      ["Text", "Des del gener, en Pau ha canviat de vida. Abans no feia esport i sovint se sentia cansat.", "Desde enero, Pau ha cambiado de vida. Antes no hacía deporte y a menudo se sentía cansado."],
      ["Text", "El seu metge li va dir: «Si continua així, tindrà problemes de salut».", "Su médico le dijo: «Si sigue así, tendrá problemas de salud»."],
      ["Text", "Ara en Pau es lleva més d'hora i corre tres cops per setmana al parc. Els caps de setmana va a la piscina amb uns amics.", "Ahora Pau se levanta antes y corre tres veces por semana en el parque. Los fines de semana va a la piscina con unos amigos."],
      ["Text", "Al principi era difícil. Però la seva germana el va ajudar: corria amb ell cada matí.", "Al principio era difícil. Pero su hermana le ayudó: corría con él cada mañana."],
      ["Text", "Avui s'ha aprimat cinc quilos i dorm millor. Al maig participarà en la seva primera cursa de deu quilòmetres.", "Hoy ha adelgazado cinco kilos y duerme mejor. En mayo participará en su primera carrera de diez kilómetros."],
      ["Text", "«Quan acabi aquesta cursa», diu, «m'apuntaré a un club».", "«Cuando acabe esta carrera —dice—, me apuntaré a un club»."]],
      q: [
        mc(1, "Com se sentia en Pau abans?", ["Sovint cansat", "Molt en forma", "Estressat però esportista", "Feliç"], "«…sovint se sentia cansat.»"),
        mc(1, "Quants cops per setmana corre?", ["Tres", "Cada dia", "Un", "Només el cap de setmana"], "«…tres cops per setmana…»"),
        mc(1, "Qui el va ajudar al principi?", ["La seva germana", "El metge", "Els amics", "Un entrenador"], "«…la seva germana el va ajudar.»"),
        mc(1, "Què farà al maig?", ["Participarà en una cursa.", "Marxarà de vacances.", "S'apuntarà a la piscina.", "Començarà una dieta."], "«…participarà en la seva primera cursa…»")] },
    w: { c: "Escribe tus propósitos para cuidarte este año: qué harás, cuándo y con qué condiciones. Cinco frases con futuro, «si» y «quan».", m: "Aquest any faré més esport. M'apuntaré a la piscina i aniré a nedar dos cops per setmana. Si tinc temps, també caminaré els diumenges. Menjaré menys dolços i dormiré més. Quan estigui en forma, participaré en una cursa petita." } },

  { id: "ca2-6", t: "Festes i invitacions", es: "Fiestas e invitaciones", v: [
    ["la festa", "la fiesta"], ["celebrar", "celebrar"], ["l'aniversari", "el cumpleaños; el aniversario"], ["el casament", "la boda"], ["la invitació", "la invitación"], ["convidar", "invitar"], ["el convidat", "el invitado"],
    ["el regal", "el regalo"], ["regalar", "regalar"], ["fer anys", "cumplir años"], ["felicitar", "felicitar"], ["les felicitats", "las felicidades"], ["la sorpresa", "la sorpresa"], ["l'espelma", "la vela"],
    ["el pastís", "la tarta"], ["brindar", "brindar"], ["acceptar", "aceptar"], ["refusar", "rechazar"], ["anul·lar", "cancelar"], ["preparar", "preparar"], ["guarnir", "decorar"],
    ["l'ambient", "el ambiente"], ["Nadal", "Navidad"], ["Cap d'Any", "Nochevieja, Año Nuevo"], ["Sant Jordi", "Sant Jordi (23 de abril)"], ["la revetlla", "la verbena"], ["els focs artificials", "los fuegos artificiales"], ["Per molts anys!", "¡feliz cumpleaños!"]],
    g: { t: "El condicional: cortesía, deseos, consejos y propuestas", n: `
## Cómo se forma
Infinitivo (o la raíz irregular del futuro) + **-ia, -ies, -ia, -íem, -íeu, -ien**:
| parlar: parlaria, parlaries, parlaria, parlaríem, parlaríeu, parlarien
| ser: seria · tenir: tindria · anar: aniria · fer: faria · poder: podria · voler: voldria · haver: hauria

## Para qué sirve
- **Cortesía**: Voldria un pastís. · Em podria ajudar? · Li faria res tancar la finestra?
- **Deseo**: M'agradaria fer una gran festa.
- **Consejo**: Hauries de convidar-lo. · Jo, en el teu lloc, ho refusaria.
- **Propuesta**: Podríem celebrar-ho junts. · Què et semblaria venir a sopar?
> «Deberías» se dice **hauries de** + infinitivo (no «deuries», que es arcaico o dialectal).

## Invitar, aceptar y rechazar
| Estàs lliure dissabte? Et ve de gust venir a sopar?
| I tant! · Amb molt de gust! · Quina bona idea, hi seré.
| Ho sento, no puc: treballo. · Potser un altre dia?

## Felicitar
| Per molts anys! · Moltes felicitats! · Bon Nadal! · Bon any! · Enhorabona!
> Sant Jordi (23 de abril): se regalan libros y rosas.
`, e: [
      mc(1, "¿Cuál es la forma más cortés?", ["Em podria ajudar, si us plau?", "Ajuda'm!", "M'has d'ajudar.", "Vull ajuda."], "Condicional de poder."),
      mc(1, "Completa: «___ un cafè, si us plau.»", ["Voldria", "Vull", "Voldré", "Volia"], "voldria para pedir."),
      mc(1, "Completa (un consejo): «___ descansar.»", ["Hauries de", "Deuries", "Tindries que", "Hauràs que"], "Consejo: hauries de + infinitivo."),
      tx(1, "Condicional de «agradar»: «M'___ fer una festa.»", ["agradaria"], "agradar + -ia."),
      mc(1, "Completa (propuesta): «___ anar al restaurant dissabte.»", ["Podríem", "Podem anat", "Podrem", "Podíem"], "Condicional: podríem."),
      mc(1, "«Et ve de gust venir?» significa…", ["¿Te apetece venir?", "¿Te gusta el sabor?", "¿Vas a venir?", "¿Te viene bien el gusto?"], "venir de gust = apetecer."),
      mc(1, "¿Qué se dice en un cumpleaños?", ["Per molts anys!", "Bon profit!", "Bon viatge!", "Salut i força!"], "Per molts anys = feliz cumpleaños."),
      tx(1, "Condicional de «ser»: «___ fantàstic veure't.»", ["Seria"], "ser → seria.")] },
    d: { t: "La invitació", l: [
      ["Núria", "Hola, Lleó! Dissabte celebro els meus trenta anys. Et ve de gust venir?", "¡Hola, Lleó! El sábado celebro mis treinta años. ¿Te apetece venir?"],
      ["Lleó", "I tant! On ho fas?", "¡Claro! ¿Dónde lo haces?"],
      ["Núria", "A casa meva, al jardí, a partir de les set. Hi haurà música i focs artificials.", "En mi casa, en el jardín, a partir de las siete. Habrá música y fuegos artificiales."],
      ["Lleó", "Fantàstic. Podria portar alguna cosa?", "Fantástico. ¿Podría llevar algo?"],
      ["Núria", "Podries fer una amanida? El pastís el porta la meva mare.", "¿Podrías hacer una ensalada? La tarta la trae mi madre."],
      ["Lleó", "Cap problema. Podria venir amb la meva parella?", "Ningún problema. ¿Podría venir con mi pareja?"],
      ["Núria", "És clar! M'agradaria molt conèixer-la.", "¡Claro! Me encantaría conocerla."],
      ["Lleó", "Perfecte. I de regal, què et faria il·lusió?", "Perfecto. Y de regalo, ¿qué te haría ilusión?"],
      ["Núria", "Res d'especial. Un bon llibre seria perfecte.", "Nada especial. Un buen libro sería perfecto."]],
      q: [
        mc(1, "Quants anys fa la Núria?", ["Trenta", "Vint", "Quaranta", "Divuit"], "«…celebro els meus trenta anys.»"),
        mc(1, "On és la festa?", ["Al jardí de la Núria", "En un restaurant", "En un parc", "A casa d'en Lleó"], "«A casa meva, al jardí…»"),
        mc(1, "Què ha de portar en Lleó?", ["Una amanida", "El pastís", "Begudes", "Música"], "«Podries fer una amanida?»"),
        mc(1, "Què li faria il·lusió a la Núria?", ["Un llibre", "Flors", "Un pastís", "Un viatge"], "«Un bon llibre seria perfecte.»")] },
    w: { c: "Un amigo te invita a su boda, pero ese día no puedes. Escríbele: agradece la invitación, explica por qué no puedes ir y propón veros otro día.", m: "Estimat Marc,\nmoltes gràcies per la invitació! M'agradaria moltíssim venir al vostre casament, però aquell cap de setmana he de treballar. Ho sento molt. Podríem veure'ns al juliol? Us convidaria a sopar, a tu i a la Júlia. Us desitjo una festa preciosa. Moltes felicitats!\nUna abraçada,\nAna" } },
] });
