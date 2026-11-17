// Curso de italiano · nivel A2. Mismo formato que curso_italiano.js (cadenas entre comillas dobles).
CURSO.italiano.push({ id: "A2", nombre: "A2 · Plataforma", desc: "Contar lo que pasó, describir tu entorno, comparar, hacer planes y desenvolverte en compras, trabajo, salud e invitaciones.", u: [
  { id: "ia2-1", t: "Viaggi e vacanze", es: "Viajes y vacaciones", v: [
    ["il viaggio", "el viaje"], ["il volo", "el vuelo"], ["l'aeroporto", "el aeropuerto"], ["l'aereo", "el avión"], ["la valigia", "la maleta"], ["i bagagli", "el equipaje"], ["il passaporto", "el pasaporte"],
    ["l'alloggio", "el alojamiento"], ["l'albergo", "el hotel"], ["l'agriturismo", "la casa rural"], ["prenotare", "reservar"], ["fare la valigia", "hacer la maleta"], ["partire", "salir, irse"], ["arrivare", "llegar"],
    ["la coincidenza", "el enlace, el transbordo"], ["perdere", "perder"], ["il ritardo", "el retraso"], ["la spiaggia", "la playa"], ["visitare", "visitar"], ["la gita", "la excursión"], ["all'estero", "en el extranjero"],
    ["il soggiorno", "la estancia"], ["faticoso", "agotador"], ["rilassante", "relajante"], ["il ricordo", "el recuerdo"], ["il paesaggio", "el paisaje"], ["la guida", "el guía, la guía"], ["la cartina", "el mapa"]],
    g: { t: "El imperfetto y el passato prossimo", n: `
## Cómo se forma el imperfetto
Se quita -re al infinitivo y se añade:
$ -vo · -vi · -va · -vamo · -vate · -vano
| parlare: parlavo, parlavi, parlava, parlavamo, parlavate, parlavano
| avere: avevo · dormire: dormivo
Irregulares: **essere**: ero, eri, era, eravamo, eravate, erano · **fare**: facevo · **bere**: bevevo · **dire**: dicevo

## Para qué sirve cada tiempo
- **Imperfetto**: descripciones, costumbres, lo que estaba pasando → Faceva caldo. · Da bambino andavo sempre al mare.
- **Passato prossimo**: hechos terminados que hacen avanzar la historia → Abbiamo visitato Firenze. · Il treno è arrivato a mezzanotte.
| Pioveva quando siamo arrivati.         Llovía cuando llegamos.
| Ero stanca, quindi sono rimasta in albergo.
> Coincide casi siempre con el español: «llovía» → pioveva; «llegamos» → siamo arrivati.

## Palabras que orientan
- Con imperfetto: di solito, sempre, ogni estate, da bambino, mentre.
- Con passato prossimo: ieri, una volta, all'improvviso, la settimana scorsa, nel 2019.
| Mentre leggevo, è squillato il telefono.
`, e: [
      mc(1, "¿Cuál es el imperfetto de «io parlo»?", ["io parlavo", "io ho parlato", "io parlai", "io parlerò"], "parla- + -vo."),
      mc(1, "Completa: «Quando ___ piccolo, abitavo a Bari.»", ["ero", "sono stato", "sono", "stato"], "Descripción de una etapa: imperfetto de essere."),
      mc(1, "Completa: «Ieri ___ il museo.»", ["abbiamo visitato", "visitavamo", "visitiamo", "visitare"], "Hecho terminado con «ieri»: passato prossimo."),
      mc(1, "Completa: «___ quando siamo arrivati.»", ["Pioveva", "È piovuto", "Piove", "Pioverà"], "El decorado va en imperfetto."),
      tx(1, "Escribe el imperfetto de «fare» para «noi».", ["facevamo"], "Irregular: face- + -vamo."),
      mc(1, "Completa: «Ogni estate ___ al mare.»", ["andavamo", "siamo andati", "andiamo andati", "andremo"], "Costumbre del pasado: imperfetto."),
      mc(1, "Completa: «Mentre leggevo, il telefono ___.»", ["è squillato", "squillava", "squilla", "squillare"], "Acción que interrumpe: passato prossimo."),
      tx(1, "Completa con «avere» en imperfetto: «L'aereo ___ due ore di ritardo.»", ["aveva"], "aveva.")] },
    d: { t: "Un viaggio pieno di sorprese", l: [
      ["Mia", "Allora, com'è andato il viaggio a Lisbona?", "Bueno, ¿qué tal el viaje a Lisboa?"],
      ["Tom", "Benissimo, ma la partenza è stata difficile. Il nostro aereo aveva tre ore di ritardo.", "Muy bien, pero la salida fue difícil. Nuestro avión tenía tres horas de retraso."],
      ["Mia", "Oh no! Avete perso la coincidenza?", "¡Oh, no! ¿Perdisteis el enlace?"],
      ["Tom", "Sì. Abbiamo dovuto aspettare a Madrid e siamo arrivati a mezzanotte.", "Sí. Tuvimos que esperar en Madrid y llegamos a medianoche."],
      ["Mia", "E l'albergo?", "¿Y el hotel?"],
      ["Tom", "Per fortuna era vicino all'aeroporto e la reception era ancora aperta.", "Por suerte estaba cerca del aeropuerto y la recepción seguía abierta."],
      ["Mia", "Che cosa avete fatto là?", "¿Qué hicisteis allí?"],
      ["Tom", "Abbiamo visitato il centro storico e abbiamo fatto una gita al mare. Faceva bellissimo.", "Visitamos el casco antiguo e hicimos una excursión al mar. Hacía un tiempo estupendo."],
      ["Mia", "Sembra rilassante.", "Parece relajante."],
      ["Tom", "Sì! La prossima volta però vogliamo andare in treno.", "¡Sí! Pero la próxima vez queremos ir en tren."]],
      q: [
        mc(1, "Perché la partenza è stata difficile?", ["L'aereo aveva ritardo.", "L'albergo era chiuso.", "Pioveva.", "Il volo era caro."], "«Il nostro aereo aveva tre ore di ritardo.»"),
        mc(1, "Dove hanno dovuto aspettare?", ["A Madrid", "A Lisbona", "A Roma", "A Porto"], "«Abbiamo dovuto aspettare a Madrid.»"),
        mc(1, "Quando sono arrivati?", ["A mezzanotte", "Il pomeriggio", "La mattina", "Alle otto"], "«…siamo arrivati a mezzanotte.»"),
        mc(1, "Che tempo faceva?", ["Faceva bellissimo.", "Pioveva.", "Faceva freddo.", "Nevicava."], "«Faceva bellissimo.»")] },
    w: { c: "Cuenta un viaje que hayas hecho: adónde fuiste, cómo era el lugar, qué problema hubo y qué visitaste. Combina imperfetto y passato prossimo.", m: "L'estate scorsa sono andata a Lisbona con mia sorella. Abbiamo preso l'aereo, ma aveva ritardo e abbiamo aspettato tre ore. La città era bellissima e faceva caldo. Abbiamo visitato il centro storico e abbiamo fatto una gita al mare. Volevo restare più a lungo!" } },

  { id: "ia2-2", t: "Il trasloco", es: "La mudanza", v: [
    ["il trasloco", "la mudanza"], ["traslocare", "mudarse"], ["trasferirsi", "trasladarse"], ["il proprietario", "el propietario"], ["l'inquilino", "el inquilino"], ["il vicino di casa", "el vecino"], ["il piano terra", "la planta baja"],
    ["il piano", "el piso, la planta"], ["l'ascensore", "el ascensor"], ["la cantina", "el sótano, el trastero"], ["il corridoio", "el pasillo"], ["il muro", "la pared"], ["il soffitto", "el techo"], ["il pavimento", "el suelo"],
    ["lo scaffale", "la estantería"], ["la scrivania", "el escritorio"], ["il tappeto", "la alfombra"], ["la lampada", "la lámpara"], ["lo specchio", "el espejo"], ["il mobile", "el mueble"], ["lo scatolone", "la caja de cartón"],
    ["sistemare", "colocar, ordenar"], ["prestare", "prestar"], ["portare", "llevar, traer"], ["mostrare", "mostrar"], ["montare", "montar"], ["luminoso", "luminoso"], ["comodo", "cómodo"]],
    g: { t: "Pronombres de objeto directo e indirecto", n: `
## Pronombres de objeto directo
$ mi · ti · lo / la · ci · vi · li / le
| Vedi lo specchio? – Sì, lo vedo.      Porto gli scatoloni. → Li porto.
Ante vocal o h: **l'**ho visto, **l'**ho vista (solo lo y la).

## Pronombres de objeto indirecto
$ mi · ti · gli (a él) / le (a ella) / Le (a usted) · ci · vi · gli (a ellos)
| Telefono a Paolo. → Gli telefono.      Scrivo a Giulia. → Le scrivo.
Verbos frecuentes con «a»: telefonare, scrivere, rispondere, dare, prestare, regalare, piacere.

## Dónde se colocan
- Delante del verbo conjugado: Lo prendo. · Non lo prendo.
- Con infinitivo, detrás y unidos: Devo sistemarlo. (o: Lo devo sistemare.)
- En imperativo de tu, detrás y unidos: Prendilo! Dammi la lampada!

## Concordancia en el passato prossimo
Con **lo, la, li, le** delante, el participio concuerda:
| Ho comprato la lampada. → L'ho comprat**a**.
| Ho portato gli scatoloni. → Li ho portat**i**.
> Con los indirectos no concuerda: Le ho telefonato.
`, e: [
      mc(1, "Sustituye: «Porto i libri.» → «___ porto.»", ["Li", "Le", "Gli", "Lo"], "Directo masculino plural: li."),
      mc(1, "Sustituye: «Telefono a mia madre.» → «___ telefono.»", ["Le", "La", "Gli", "Li"], "Indirecto femenino: le."),
      mc(1, "Sustituye: «Scrivo a Marco.» → «___ scrivo.»", ["Gli", "Lo", "Le", "Li"], "Indirecto masculino: gli."),
      mc(1, "Completa: «Devo ___ entro stasera.» (sistemare + lo)", ["sistemarlo", "lo sistemare", "sistemare lo", "sistemarli lo"], "Con infinitivo: unido detrás."),
      tx(1, "Sustituye «la lampada»: «Ho comprato la lampada.» → «L'ho ___.»", ["comprata"], "Concuerda con «la»: comprata."),
      mc(1, "Pon en negativo: «Lo prendo.»", ["Non lo prendo.", "Lo non prendo.", "Non prendo lo.", "Lo prendo non."], "non + pronombre + verbo."),
      mc(1, "Imperativo: «Dai la lampada a me!» →", ["Dammi la lampada!", "Mi dai la lampada!", "Dami la lampada!", "Da' me la lampada!"], "Da' + mi → dammi."),
      tx(1, "Sustituye «gli scatoloni»: «___ ho portati in cantina.»", ["Li"], "li + concordancia en -i.")] },
    d: { t: "Il giorno del trasloco", l: [
      ["Sara", "Ecco il nuovo appartamento. Dove mettiamo il divano?", "Este es el piso nuevo. ¿Dónde ponemos el sofá?"],
      ["Ben", "Lo mettiamo contro il muro, sotto la finestra.", "Lo ponemos contra la pared, debajo de la ventana."],
      ["Sara", "Va bene. E gli scaffali?", "Vale. ¿Y las estanterías?"],
      ["Ben", "Li ho già montati nel corridoio.", "Ya las he montado en el pasillo."],
      ["Sara", "Perfetto. Hai visto la lampada?", "Perfecto. ¿Has visto la lámpara?"],
      ["Ben", "È ancora in macchina, tra gli scatoloni. Vado a prenderla.", "Sigue en el coche, entre las cajas. Voy a por ella."],
      ["Sara", "E le chiavi della cantina? Il proprietario te le ha date?", "¿Y las llaves del trastero? ¿Te las ha dado el casero?"],
      ["Ben", "No, non ancora. Gli telefono stasera.", "No, todavía no. Le llamo esta noche."],
      ["Sara", "A proposito, i vicini ci hanno prestato la loro scala.", "Por cierto, los vecinos nos han prestado su escalera."],
      ["Ben", "Che gentili! Domani gli portiamo una torta.", "¡Qué amables! Mañana les llevamos una tarta."]],
      q: [
        mc(1, "Dove mettono il divano?", ["Sotto la finestra", "Nel corridoio", "Davanti alla porta", "Sul balcone"], "«…sotto la finestra.»"),
        mc(1, "Dove sono gli scaffali?", ["Nel corridoio", "In macchina", "In cantina", "Accanto al divano"], "«Li ho già montati nel corridoio.»"),
        mc(1, "Dov'è la lampada?", ["In macchina", "Sul tavolo", "Nel corridoio", "Sotto la finestra"], "«È ancora in macchina.»"),
        mc(1, "Che cosa hanno prestato i vicini?", ["Una scala", "Una torta", "Le chiavi", "Una lampada"], "«…ci hanno prestato la loro scala.»")] },
    w: { c: "Acabas de mudarte. Escribe a un amigo cinco frases: cómo es el piso, quién te ha ayudado, qué te han prestado y a quién vas a invitar. Usa pronombres.", m: "Sabato mi sono trasferita in un appartamento al secondo piano. È piccolo, ma lo trovo molto luminoso. Mio fratello mi ha aiutata: gli ho offerto una bella cena. I vicini sono simpatici, mi hanno prestato degli attrezzi e li ho già restituiti. Questo fine settimana voglio invitarli a prendere un caffè." } },

  { id: "ia2-3", t: "Il lavoro", es: "El trabajo", v: [
    ["il mestiere", "el oficio"], ["il posto di lavoro", "el puesto de trabajo"], ["l'azienda", "la empresa"], ["il capo", "el jefe"], ["il collega", "el compañero de trabajo"], ["la candidatura", "la candidatura"], ["candidarsi", "presentarse a un puesto"],
    ["il curriculum", "el currículum"], ["il colloquio", "la entrevista"], ["lo stipendio", "el sueldo"], ["guadagnare", "ganar"], ["l'orario", "el horario"], ["gli straordinari", "las horas extra"], ["la formazione", "la formación"],
    ["l'esperienza", "la experiencia"], ["la riunione", "la reunión"], ["il compito", "la tarea"], ["lo stage", "las prácticas"], ["licenziarsi", "dimitir"], ["licenziare", "despedir"], ["disoccupato", "en paro"],
    ["part-time", "a tiempo parcial"], ["a tempo pieno", "a tiempo completo"], ["le ferie", "las vacaciones (del trabajo)"], ["la pausa", "el descanso"], ["stressante", "estresante"], ["soddisfatto", "satisfecho"], ["il successo", "el éxito"]],
    g: { t: "Los relativos che y cui; causa y consecuencia", n: `
## che
Sirve para sujeto y objeto directo, para personas y cosas, y no cambia nunca:
| È un collega che parla tre lingue.          (sujeto)
| È il lavoro che voglio fare.                (objeto)

## cui
Tras una preposición se usa **cui**:
| L'azienda in cui lavoro è a Torino.         La empresa en la que trabajo…
| La collega con cui esco è simpatica.
| Il motivo per cui ho cambiato lavoro…
**dove** puede sustituir a «in cui» con lugares: L'azienda dove lavoro.
> Error típico: «L'azienda che lavoro». Con preposición siempre «in cui».

## La causa
| perché (porque): Cerco un altro lavoro perché voglio guadagnare di più.
| siccome / dato che (como, puesto que), al principio: Siccome ero malato, sono rimasto a casa.
| a causa di (por culpa de) · grazie a (gracias a)
| Sono in ritardo a causa del traffico.      Ho trovato lo stage grazie a un'amica.

## La consecuencia
| quindi · perciò · allora (así que, por tanto)
| Parlo tedesco, quindi lavoro con i clienti di Berlino.
`, e: [
      mc(1, "Completa: «È un'azienda ___ assume molto.»", ["che", "cui", "dove", "quale"], "Sujeto: che."),
      mc(1, "Completa: «L'ufficio in ___ lavoro è al terzo piano.»", ["cui", "che", "quale", "dove"], "Tras preposición: cui."),
      mc(1, "Completa: «La collega con ___ parlo è di Napoli.»", ["cui", "che", "chi", "la quale che"], "con + cui."),
      mc(1, "Completa: «Il lavoro ___ preferisco è l'infermiere.»", ["che", "cui", "in cui", "di cui"], "Objeto directo: che."),
      tx(1, "Completa: «___ pioveva, ho preso l'autobus.» (como)", ["Siccome", "Dato che"], "siccome al principio da la causa."),
      mc(1, "Completa: «Sono stanco ___ ho fatto gli straordinari.»", ["perché", "quindi", "allora", "a causa di"], "Causa con verbo: perché."),
      mc(1, "Completa: «Il treno era in ritardo ___ neve.»", ["a causa della", "perché la", "grazie alla", "quindi la"], "Causa negativa + nombre: a causa di."),
      tx(1, "Completa: «Domani ho un colloquio, ___ preparo il curriculum.» (así que)", ["quindi", "perciò", "allora"], "Consecuencia.")] },
    d: { t: "Il colloquio di lavoro", l: [
      ["Sig.ra Lanza", "Buongiorno, signor Navarro. Perché vuole lavorare da noi?", "Buenos días, señor Navarro. ¿Por qué quiere trabajar con nosotros?"],
      ["Sig. Navarro", "Perché la vostra azienda lavora con l'America Latina e vorrei usare le mie lingue.", "Porque su empresa trabaja con América Latina y me gustaría usar mis idiomas."],
      ["Sig.ra Lanza", "Vedo nel curriculum che ha lavorato tre anni a Madrid.", "Veo en el currículum que ha trabajado tres años en Madrid."],
      ["Sig. Navarro", "Sì, come informatico. È un'esperienza che mi ha insegnato molto.", "Sí, como informático. Es una experiencia que me enseñó mucho."],
      ["Sig.ra Lanza", "Il posto che offriamo è a tempo pieno. È un problema?", "El puesto que ofrecemos es a tiempo completo. ¿Es un problema?"],
      ["Sig. Navarro", "Per niente. Posso fare anche gli straordinari, se è necessario.", "En absoluto. También puedo hacer horas extra si hace falta."],
      ["Sig.ra Lanza", "Benissimo. Ha delle domande?", "Muy bien. ¿Tiene alguna pregunta?"],
      ["Sig. Navarro", "Sì. Vorrei sapere quando potrei cominciare.", "Sí. Me gustaría saber cuándo podría empezar."],
      ["Sig.ra Lanza", "Se va tutto bene, il primo maggio.", "Si todo va bien, el uno de mayo."]],
      q: [
        mc(1, "Perché il signor Navarro vuole questo lavoro?", ["Perché vuole usare le sue lingue.", "Perché lo stipendio è alto.", "Perché abita vicino.", "Perché è disoccupato."], "«…vorrei usare le mie lingue.»"),
        mc(1, "Per quanto tempo ha lavorato a Madrid?", ["Tre anni", "Un anno", "Cinque anni", "Tre mesi"], "«…ha lavorato tre anni a Madrid.»"),
        mc(1, "Che lavoro fa?", ["L'informatico", "L'insegnante", "Il medico", "Il commesso"], "«Sì, come informatico.»"),
        mc(1, "Quando può forse cominciare?", ["Il primo maggio", "Subito", "In estate", "L'anno prossimo"], "«…il primo maggio.»")] },
    w: { c: "Explica en cinco frases a qué te dedicas o qué estudias, qué te gusta de ello y por qué. Usa «che», «in cui», «perché» y «quindi».", m: "Lavoro come infermiere in un ospedale che si trova nel centro di Valencia. È un lavoro che mi piace molto perché posso aiutare le persone. Il reparto in cui lavoro a volte è stressante. Facciamo spesso gli straordinari, quindi la sera sono stanco. Ma i miei colleghi sono molto simpatici." } },

  { id: "ia2-4", t: "Fare acquisti", es: "Ir de compras", v: [
    ["i vestiti", "la ropa"], ["i pantaloni", "el pantalón"], ["la camicia", "la camisa"], ["la camicetta", "la blusa"], ["la gonna", "la falda"], ["il vestito", "el vestido; el traje"], ["il maglione", "el jersey"],
    ["la giacca", "la chaqueta"], ["il cappotto", "el abrigo"], ["la scarpa", "el zapato"], ["la taglia", "la talla"], ["il numero", "el número (de zapato)"], ["il colore", "el color"], ["provare", "probar(se)"],
    ["stare bene", "sentar bien"], ["il camerino", "el probador"], ["il prezzo", "el precio"], ["i saldi", "las rebajas"], ["economico", "barato"], ["la cassa", "la caja"], ["in contanti", "en efectivo"],
    ["lo scontrino", "el tique"], ["cambiare", "cambiar"], ["il rimborso", "el reembolso"], ["stretto", "estrecho"], ["largo", "ancho"], ["alla moda", "a la moda"], ["leggero", "ligero"]],
    g: { t: "Comparativo, superlativo y questo / quello", n: `
## El comparativo
$ più … di / che (más … que) · meno … di / che (menos … que) · così … come / tanto … quanto (tan … como)
- **di** delante de un nombre o pronombre: Questa giacca è più cara **del** cappotto.
- **che** entre dos adjetivos, verbos o con preposición: È più elegante **che** comodo. · Mi piace più leggere **che** guardare la TV.
Irregulares: buono → **migliore** (o più buono) · cattivo → **peggiore** · bene → **meglio** · male → **peggio**.

## El superlativo
- Relativo: **il / la più** + adjetivo + **di**: È la giacca più cara del negozio.
- Absoluto: **-issimo**: caro → carissimo · bello → bellissimo · lungo → lunghissimo.
> Muy típico del italiano: «È bellissimo!», «Grazie mille, gentilissimo!».

## questo y quello
**questo** (este) se forma como un adjetivo normal: questo, questa, questi, queste.
**quello** (ese, aquel) delante del sustantivo cambia como el artículo:
| quel maglione · quello zaino · quell'abito · quei pantaloni · quegli stivali · quella gonna · quelle scarpe
Como pronombre: quello, quella, quelli, quelle → Preferisco quella.
`, e: [
      mc(1, "Completa: «Questo vestito è più caro ___ gonna.»", ["della", "che la", "di la", "come la"], "Delante de nombre: di + la = della."),
      mc(1, "Completa: «È più elegante ___ comodo.»", ["che", "di", "del", "come"], "Entre dos adjetivos: che."),
      mc(1, "Completa: «Questo negozio è ___ dell'altro.»", ["migliore", "più bene", "meglio", "più migliore"], "Adjetivo: migliore."),
      mc(1, "Completa: «Questa giacca ti sta ___.»", ["meglio", "migliore", "più buono", "più bene"], "Adverbio: meglio."),
      tx(1, "Superlativo absoluto de «caro» (masculino).", ["carissimo"], "-issimo."),
      mc(1, "Completa: «Mi piacciono ___ scarpe rosse.»", ["quelle", "quei", "quegli", "quella"], "Femenino plural: quelle."),
      mc(1, "Completa: «___ zaino è troppo grande.»", ["Quello", "Quel", "Quell'", "Quei"], "Ante z: quello."),
      tx(1, "Completa: «È il cappotto più caro ___ negozio.»", ["del"], "Superlativo relativo: di + il = del.")] },
    d: { t: "In un negozio", l: [
      ["Commessa", "Buongiorno, signora. Posso aiutarla?", "Buenos días, señora. ¿Puedo ayudarla?"],
      ["Cliente", "Sì, cerco una giacca calda per l'inverno.", "Sí, busco una chaqueta de abrigo para el invierno."],
      ["Commessa", "Che taglia porta?", "¿Qué talla usa?"],
      ["Cliente", "La 42. Avete quella giacca grigia anche in blu?", "La 42. ¿Tienen esa chaqueta gris también en azul?"],
      ["Commessa", "No, mi dispiace, ma abbiamo questo modello in blu scuro. È meno caro dell'altro.", "No, lo siento, pero tenemos este modelo en azul oscuro. Es más barato que el otro."],
      ["Cliente", "Posso provarlo?", "¿Puedo probármelo?"],
      ["Commessa", "Certo. I camerini sono in fondo.", "Claro. Los probadores están al fondo."],
      ["Cliente", "Mi sta bene, ma le maniche sono un po' troppo lunghe.", "Me queda bien, pero las mangas son un poco largas."],
      ["Commessa", "Provi la taglia più piccola. E può cambiarla entro quindici giorni con lo scontrino.", "Pruebe la talla más pequeña. Y puede cambiarla en un plazo de quince días con el tique."],
      ["Cliente", "Va bene, la prendo. Posso pagare con la carta?", "Vale, me la llevo. ¿Puedo pagar con tarjeta?"]],
      q: [
        mc(1, "Che cosa cerca la cliente?", ["Una giacca calda", "Un cappotto", "Un vestito", "Delle scarpe"], "«…cerco una giacca calda per l'inverno.»"),
        mc(1, "Di che colore è l'altro modello?", ["Blu scuro", "Grigio", "Nero", "Rosso"], "«…questo modello in blu scuro.»"),
        mc(1, "Qual è il problema della giacca?", ["Le maniche sono troppo lunghe.", "È troppo cara.", "È troppo stretta.", "Il colore non le piace."], "«…le maniche sono un po' troppo lunghe.»"),
        mc(1, "Entro quanto tempo si può cambiare?", ["Quindici giorni", "Due giorni", "Un mese", "Non si può."], "«…entro quindici giorni.»")] },
    w: { c: "Describe qué ropa llevas hoy y compara dos prendas tuyas. Cinco frases con comparativos, un superlativo y «quello».", m: "Oggi porto dei pantaloni neri e un maglione grigio. Questo maglione è più caldo della mia giacca, ma è meno elegante. Le mie scarpe nuove sono comode come quelle vecchie. Il mio cappotto blu è il capo più caro del mio armadio. È anche quello che mi sta meglio." } },

  { id: "ia2-5", t: "Sport e salute", es: "Deporte y salud", v: [
    ["allenarsi", "entrenar"], ["riposarsi", "descansar"], ["sbrigarsi", "darse prisa"], ["sentirsi", "sentirse"], ["rilassarsi", "relajarse"], ["farsi male", "hacerse daño"], ["la camminata", "la caminata"],
    ["l'allenamento", "el entrenamiento"], ["la palestra", "el gimnasio"], ["la squadra", "el equipo"], ["correre", "correr"], ["la corsa", "la carrera"], ["camminare", "caminar"], ["il nuoto", "la natación"],
    ["la dieta", "la dieta"], ["l'alimentazione", "la alimentación"], ["il peso", "el peso"], ["dimagrire", "adelgazar"], ["ingrassare", "engordar"], ["in buona salute", "con buena salud"], ["regolarmente", "con regularidad"],
    ["l'abitudine", "la costumbre"], ["lo stress", "el estrés"], ["il sonno", "el sueño"], ["la forma", "la forma física"], ["smettere di", "dejar de"], ["cominciare a", "empezar a"], ["il benessere", "el bienestar"]],
    g: { t: "El futuro y las condiciones con se", n: `
## Cómo se forma el futuro
Infinitivo sin la -e final; los verbos en -are cambian la a por **e**:
$ -ò · -ai · -à · -emo · -ete · -anno
| parlare: parlerò, parlerai, parlerà, parleremo, parlerete, parleranno
| prendere: prenderò · dormire: dormirò

## Raíces irregulares
| essere: sarò · avere: avrò · andare: andrò · fare: farò · venire: verrò · vedere: vedrò
| potere: potrò · dovere: dovrò · volere: vorrò · sapere: saprò · bere: berrò · stare: starò

## Usos
- Planes y previsiones: L'anno prossimo farò una maratona.
- Suposiciones sobre el presente: Che ore sono? – Saranno le otto. (Serán las ocho.)
> Para planes cercanos y seguros, el italiano usa mucho el presente: Domani vado in palestra.

## Condiciones reales con se
A diferencia del español, tras **se** se puede usar el **futuro** cuando se habla del futuro, y también tras **quando**:
| Se ti allenerai regolarmente, ti sentirai meglio.      (también: Se ti alleni…)
| Quando avrò tempo, mi iscriverò in palestra.            Cuando tenga tiempo…
> El español pone presente o subjuntivo («si entrenas», «cuando tenga»); el italiano prefiere futuro en ambos lados.
`, e: [
      mc(1, "¿Cuál es el futuro de «io parlo»?", ["io parlerò", "io parlarò", "io parlerei", "io parlavo"], "-are → -erò."),
      mc(1, "Completa: «Domani noi ___ in piscina.»", ["andremo", "anderemo", "andiamo andati", "andremmo"], "Raíz irregular: andr-."),
      mc(1, "Completa: «Se ___ sport, ti sentirai meglio.»", ["farai", "faresti", "facevi", "fatto"], "En italiano se admite futuro tras «se»."),
      mc(1, "Completa: «Quando ___ tempo, mi iscriverò in palestra.»", ["avrò", "abbia", "ho avuto", "avevo"], "Tras «quando» con idea de futuro: futuro."),
      tx(1, "Escribe el futuro de «essere» para «io».", ["sarò"], "Raíz sar-."),
      mc(1, "«Saranno le otto» significa…", ["Serán las ocho (supongo)", "Eran las ocho", "Fueron las ocho", "Son las ocho en punto"], "Futuro de suposición."),
      mc(1, "Completa: «Lei ___ una dieta dopo le vacanze.»", ["farà", "fará", "farè", "fara'"], "fare → far-: farà."),
      tx(1, "Completa con «potere»: «___ venire sabato?» (tú, futuro)", ["Potrai"], "Raíz potr- + -ai.")] },
    d: { t: "Una nuova vita", l: [
      ["Text", "Da gennaio Paolo ha cambiato vita. Prima non faceva sport e si sentiva spesso stanco.", "Desde enero Paolo ha cambiado de vida. Antes no hacía deporte y a menudo se sentía cansado."],
      ["Text", "Il suo medico gli ha detto: «Se continuerà così, avrà problemi di salute».", "Su médico le dijo: «Si sigue así, tendrá problemas de salud»."],
      ["Text", "Adesso Paolo si alza prima e corre tre volte alla settimana nel parco. Il fine settimana va in piscina con gli amici.", "Ahora Paolo se levanta antes y corre tres veces por semana por el parque. Los fines de semana va a la piscina con sus amigos."],
      ["Text", "All'inizio era difficile. Ma sua sorella l'ha aiutato: correva con lui ogni mattina.", "Al principio era difícil. Pero su hermana le ayudó: corría con él todas las mañanas."],
      ["Text", "Oggi ha perso cinque chili e dorme meglio. A maggio parteciperà alla sua prima corsa di dieci chilometri.", "Hoy ha perdido cinco kilos y duerme mejor. En mayo participará en su primera carrera de diez kilómetros."],
      ["Text", "«Quando avrò finito questa corsa», dice, «mi iscriverò a una squadra».", "«Cuando haya terminado esta carrera —dice—, me apuntaré a un equipo»."]],
      q: [
        mc(1, "Come si sentiva Paolo prima?", ["Spesso stanco", "Molto in forma", "Stressato ma sportivo", "Felice"], "«…si sentiva spesso stanco.»"),
        mc(1, "Quante volte alla settimana corre?", ["Tre volte", "Ogni giorno", "Una volta", "Solo il fine settimana"], "«…corre tre volte alla settimana.»"),
        mc(1, "Chi l'ha aiutato all'inizio?", ["Sua sorella", "Il suo medico", "I suoi amici", "Un allenatore"], "«…sua sorella l'ha aiutato.»"),
        mc(1, "Che cosa farà a maggio?", ["Parteciperà a una corsa.", "Andrà in vacanza.", "Si iscriverà in piscina.", "Comincerà una dieta."], "«A maggio parteciperà alla sua prima corsa…»")] },
    w: { c: "Escribe tus propósitos para cuidarte este año: qué harás, cuándo y con qué condiciones. Cinco frases con futuro, «se» y «quando».", m: "Quest'anno farò più sport. Mi iscriverò in piscina e andrò a nuotare due volte alla settimana. Se avrò tempo, camminerò anche la domenica. Mangerò meno dolci e dormirò di più. Quando sarò in forma, parteciperò a una piccola corsa." } },

  { id: "ia2-6", t: "Feste e inviti", es: "Fiestas e invitaciones", v: [
    ["la festa", "la fiesta"], ["festeggiare", "celebrar"], ["il compleanno", "el cumpleaños"], ["il matrimonio", "la boda"], ["l'invito", "la invitación"], ["invitare", "invitar"], ["l'ospite", "el invitado"],
    ["il regalo", "el regalo"], ["regalare", "regalar"], ["compiere gli anni", "cumplir años"], ["fare gli auguri", "felicitar"], ["gli auguri", "las felicitaciones"], ["la sorpresa", "la sorpresa"], ["la candelina", "la velita"],
    ["la torta", "la tarta"], ["brindare", "brindar"], ["accettare", "aceptar"], ["rifiutare", "rechazar"], ["disdire", "cancelar"], ["preparare", "preparar"], ["addobbare", "decorar"],
    ["l'atmosfera", "el ambiente"], ["Natale", "Navidad"], ["Capodanno", "Año Nuevo"], ["Pasqua", "Pascua"], ["Ferragosto", "el 15 de agosto"], ["i fuochi d'artificio", "los fuegos artificiales"], ["Buon compleanno!", "¡feliz cumpleaños!"]],
    g: { t: "El condicional: cortesía, deseos, consejos y propuestas", n: `
## Cómo se forma
La misma raíz que el futuro + las terminaciones:
$ -ei · -esti · -ebbe · -emmo · -este · -ebbero
| parlare: parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero
| essere: sarei · avere: avrei · andare: andrei · fare: farei · potere: potrei · volere: vorrei · dovere: dovrei
> Ojo a la doble m de «noi»: parleremmo (condicional) frente a parleremo (futuro).

## Para qué sirve
- **Cortesía**: Vorrei una torta. · Potrebbe aiutarmi? · Mi direbbe l'ora?
- **Deseo**: Mi piacerebbe fare una grande festa.
- **Consejo**: Dovresti invitarlo. · Al posto tuo, rifiuterei.
- **Propuesta**: Potremmo festeggiare insieme. · Che ne diresti di venire a cena?

## Invitar, aceptar y rechazar
| Sei libero sabato? Ti va di venire a cena?
| Volentieri! · Con piacere! · Che bella idea, ci sarò.
| Mi dispiace, non posso: lavoro. · Magari un'altra volta?

## Felicitar
| Buon compleanno! · Tanti auguri! · Buon Natale! · Felice anno nuovo! · Congratulazioni! · Auguri e figli maschi (tradicional en las bodas)
`, e: [
      mc(1, "¿Cuál es la forma más cortés?", ["Potrebbe aiutarmi, per favore?", "Mi aiuti!", "Deve aiutarmi.", "Voglio aiuto."], "Condicional de potere."),
      mc(1, "Completa: «___ un caffè, per favore.»", ["Vorrei", "Voglio", "Vorrò", "Volevo"], "«Vorrei» para pedir."),
      mc(1, "Completa (un consejo): «___ riposarti.»", ["Dovresti", "Devi te", "Dovrai", "Dovevi"], "Dovresti = deberías."),
      tx(1, "Escribe el condicional de «piacere» en la frase: «Mi ___ fare una festa.»", ["piacerebbe"], "piacer- + -ebbe."),
      mc(1, "Completa (propuesta): «___ andare al ristorante sabato.»", ["Potremmo", "Potremo", "Potevamo", "Possiamo stati"], "Condicional con doble m."),
      mc(1, "¿Cuál es el condicional de «noi parliamo»?", ["parleremmo", "parleremo", "parlavamo", "parlassimo"], "Doble m en el condicional."),
      mc(1, "«Ti va di venire?» significa…", ["¿Te apetece venir?", "¿Te vas a venir?", "¿Vas a venir?", "¿Te vas?"], "andare a qualcuno = apetecer."),
      tx(1, "Completa con «essere» en condicional: «___ bello vederti.»", ["Sarebbe"], "sar- + -ebbe.")] },
    d: { t: "L'invito", l: [
      ["Nina", "Ciao, Leo! Sabato festeggio i miei trent'anni. Ti va di venire?", "¡Hola, Leo! El sábado celebro mis treinta años. ¿Te apetece venir?"],
      ["Leo", "Volentieri! Dove la fai?", "¡Encantado! ¿Dónde la haces?"],
      ["Nina", "A casa mia, in giardino, dalle sette. Ci saranno musica e fuochi d'artificio.", "En mi casa, en el jardín, desde las siete. Habrá música y fuegos artificiales."],
      ["Leo", "Fantastico. Potrei portare qualcosa?", "Fantástico. ¿Podría llevar algo?"],
      ["Nina", "Potresti fare un'insalata? La torta la porta mia madre.", "¿Podrías hacer una ensalada? La tarta la trae mi madre."],
      ["Leo", "Nessun problema. Potrei portare anche la mia ragazza?", "Sin problema. ¿Podría llevar también a mi novia?"],
      ["Nina", "Certo! Mi piacerebbe molto conoscerla.", "¡Claro! Me encantaría conocerla."],
      ["Leo", "Perfetto. E come regalo, che cosa ti farebbe piacere?", "Perfecto. ¿Y de regalo, qué te haría ilusión?"],
      ["Nina", "Niente di speciale. Un bel libro sarebbe perfetto.", "Nada especial. Un buen libro sería perfecto."]],
      q: [
        mc(1, "Quanti anni compie Nina?", ["Trenta", "Venti", "Quaranta", "Diciotto"], "«…i miei trent'anni.»"),
        mc(1, "Dove si fa la festa?", ["Nel giardino di Nina", "Al ristorante", "In un parco", "A casa di Leo"], "«A casa mia, in giardino.»"),
        mc(1, "Che cosa deve portare Leo?", ["Un'insalata", "La torta", "Le bevande", "La musica"], "«Potresti fare un'insalata?»"),
        mc(1, "Che cosa farebbe piacere a Nina?", ["Un libro", "Dei fiori", "Una torta", "Un viaggio"], "«Un bel libro sarebbe perfetto.»")] },
    w: { c: "Un amigo te invita a su boda, pero ese día no puedes. Escríbele: agradece la invitación, explica por qué no puedes ir y propón veros otro día.", m: "Caro Marco,\ngrazie mille per l'invito! Mi piacerebbe tantissimo venire al vostro matrimonio, ma quel fine settimana devo lavorare. Mi dispiace davvero. Potremmo vederci a luglio? Vi inviterei a cena, te e Giulia. Vi auguro una festa bellissima. Congratulazioni!\nUn abbraccio,\nAna" } },
] });
