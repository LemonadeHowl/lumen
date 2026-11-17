// Curso de italiano · nivel B1. Mismo formato que curso_italiano.js (cadenas entre comillas dobles).
CURSO.italiano.push({ id: "B1", nombre: "B1 · Umbral", desc: "Entender textos claros sobre temas conocidos, contar experiencias, justificar opiniones y resolver la mayoría de situaciones de un viaje o del trabajo.", u: [
  { id: "ib1-1", t: "Media e comunicazione", es: "Medios y comunicación", v: [
    ["la notizia", "la noticia"], ["il giornale", "el periódico"], ["la rivista", "la revista"], ["l'articolo", "el artículo"], ["la trasmissione", "el programa (de radio o televisión)"], ["il canale", "el canal"], ["la pubblicità", "la publicidad"],
    ["la rete", "la red"], ["i social", "las redes sociales"], ["lo schermo", "la pantalla"], ["il dispositivo", "el dispositivo"], ["il file", "el archivo"], ["scaricare", "descargar"], ["caricare", "subir (un archivo)"],
    ["salvare", "guardar"], ["cancellare", "borrar"], ["la connessione", "la conexión"], ["raggiungibile", "localizable"], ["i dati", "los datos"], ["la fonte", "la fuente"], ["affidabile", "fiable"],
    ["l'opinione", "la opinión"], ["informare", "informar"], ["pubblicare", "publicar"], ["condividere", "compartir"], ["abbonarsi a", "suscribirse a"], ["il titolo", "el titular"], ["l'attualità", "la actualidad"]],
    g: { t: "Pronombres combinados y ci y ne", n: `
## ne
Sustituye a **di** + algo y a las cantidades:
| Quanti giornali leggi? – Ne leggo due.        (la cantidad se repite)
| Parliamo di questo articolo? – Sì, ne parliamo.
Con el passato prossimo y una cantidad, el participio concuerda: Di articoli, ne ho lett**i** tre.

## ci
Sustituye a un **lugar** o a **a** + cosa:
| Vai in biblioteca? – Sì, ci vado.
| Pensi alle vacanze? – Sì, ci penso spesso.     (pensare a, credere a, riuscire a)
Expresión: **ci vuole / ci vogliono** (hace falta, se tarda): Ci vogliono due ore.

## Los pronombres combinados
Cuando van juntos un indirecto y un directo (o ne), el indirecto va primero y cambia su -i por **-e**:
$ me lo · te lo · glielo · ce lo · ve lo · glielo
$ me ne · te ne · gliene · ce ne · ve ne · gliene
| Mi mandi l'articolo? – Sì, te lo mando.
| Hai dato il link a Paolo? – Sì, gliel'ho dato.
**gli** y **le** se convierten ambos en **glie-** y se escriben unidos: glielo, gliela, glieli, gliele, gliene.
> Con infinitivo o imperativo, se unen al final: Devo mandarglielo. · Mandamelo!
`, e: [
      mc(2, "Completa: «Quante notizie hai letto? – ___ ho lette cinque.»", ["Ne", "Le", "Ci", "Li"], "Cantidad: ne."),
      mc(2, "Completa: «Vai in redazione? – Sì, ___ vado adesso.»", ["ci", "ne", "lo", "vi ne"], "Lugar: ci."),
      mc(2, "Completa: «Mi presti il giornale? – Sì, ___ presto.»", ["te lo", "ti lo", "lo ti", "telo"], "ti + lo → te lo."),
      mc(2, "Completa: «Hai mandato la foto a Marco? – Sì, ___ ho mandata.»", ["gliel'", "gli l'", "le l'", "lo gli"], "gli + la → gliela → gliel' ante h."),
      tx(2, "Completa: «Quanto tempo ci ___ per arrivare?» (hace falta, singular)", ["vuole"], "ci vuole + singular."),
      mc(2, "Completa: «Pensi spesso a quel viaggio? – Sì, ___ penso spesso.»", ["ci", "ne", "lo", "gli"], "pensare a + cosa → ci."),
      mc(2, "Completa: «Devo ___ subito.» (dar a ella + lo)", ["darglielo", "darlelo", "dargli lo", "le darlo"], "Con infinitivo, unido detrás: glielo."),
      tx(2, "Completa: «Parli di politica con i tuoi? – No, non ___ parlo mai.»", ["ne"], "parlare di → ne.")] },
    d: { t: "Le notizie, ieri e oggi", l: [
      ["Text", "Mio nonno, che quest'anno compirà ottant'anni, legge ogni mattina il giornale che il postino gli lascia davanti alla porta. È un rito a cui non vuole rinunciare.", "Mi abuelo, que este año cumplirá ochenta, lee cada mañana el periódico que el cartero le deja en la puerta. Es un ritual al que no quiere renunciar."],
      ["Text", "Io, invece, mi informo sul telefono. Le notizie che leggo arrivano dalle app e dai social, e spesso sono gli amici a mandarmi gli articoli.", "Yo, en cambio, me informo en el móvil. Las noticias que leo llegan de las aplicaciones y de las redes, y a menudo son los amigos quienes me mandan los artículos."],
      ["Text", "È comodo, ma c'è un problema: non tutto quello che circola in rete è vero. Ci sono siti di cui nessuno conosce le fonti e titoli che servono solo ad attirare l'attenzione.", "Es cómodo, pero hay un problema: no todo lo que circula por la red es verdad. Hay páginas cuyas fuentes nadie conoce y titulares que solo sirven para llamar la atención."],
      ["Text", "Il nonno dice che si fida solo dei giornalisti di cui conosce il nome. Secondo me non ha tutti i torti. Per questo mi sono abbonata a un settimanale che leggo con calma la domenica, su carta.", "El abuelo dice que solo se fía de los periodistas cuyo nombre conoce. Creo que no le falta razón. Por eso me he suscrito a un semanario que leo con calma los domingos, en papel."]],
      q: [
        mc(2, "Come si informa il nonno?", ["Legge il giornale.", "Guarda la televisione.", "Usa le app.", "Ascolta la radio."], "«…legge ogni mattina il giornale…»"),
        mc(2, "Da dove arrivano le notizie della narratrice?", ["Dalle app e dai social", "Dal giornale di carta", "Dalla televisione", "Dal nonno"], "«…arrivano dalle app e dai social…»"),
        mc(2, "Qual è il problema della rete secondo il testo?", ["Non tutto è vero.", "Costa troppo.", "È lenta.", "Ci sono poche notizie."], "«…non tutto quello che circola in rete è vero.»"),
        mc(2, "Che cosa ha fatto la narratrice?", ["Si è abbonata a un settimanale.", "Ha venduto il telefono.", "Ha aperto un blog.", "Ha cancellato le app."], "«…mi sono abbonata a un settimanale…»")] },
    w: { c: "Explica cómo te informas tú: qué medios usas, cuáles te parecen fiables y por qué. Seis o siete frases con «ne», «ci» y algún pronombre combinado.", m: "Mi informo soprattutto con i podcast, che ascolto andando al lavoro: ne ascolto almeno due al giorno. Leggo anche un quotidiano online, ma non ne leggo mai più di tre articoli. Sui social ci vado solo per divertirmi. Quando un amico mi manda una notizia strana, prima di condividerla la controllo. Se è falsa, glielo dico subito. Di fonti affidabili ce ne sono, ma bisogna cercarle." } },

  { id: "ib1-2", t: "Ambiente e natura", es: "Medio ambiente y naturaleza", v: [
    ["l'ambiente", "el medio ambiente"], ["la tutela", "la protección"], ["il cambiamento climatico", "el cambio climático"], ["il riscaldamento globale", "el calentamiento global"], ["l'inquinamento", "la contaminación"], ["i rifiuti", "los residuos"], ["il cestino", "la papelera"],
    ["la raccolta differenziata", "la recogida selectiva"], ["riciclare", "reciclar"], ["l'imballaggio", "el envase"], ["la plastica", "el plástico"], ["l'energia", "la energía"], ["la corrente", "la electricidad"], ["rinnovabile", "renovable"],
    ["la pala eolica", "el aerogenerador"], ["il pannello solare", "el panel solar"], ["risparmiare", "ahorrar"], ["consumare", "consumir"], ["sprecare", "derrochar"], ["il traffico", "el tráfico"], ["i mezzi pubblici", "el transporte público"],
    ["l'auto elettrica", "el coche eléctrico"], ["la specie", "la especie"], ["estinguersi", "extinguirse"], ["proteggere", "proteger"], ["sostenibile", "sostenible"], ["il pianeta", "el planeta"], ["la siccità", "la sequía"]],
    g: { t: "El congiuntivo presente", n: `
## Cómo se forma
$ -are: che io parli, tu parli, lui parli, noi parliamo, voi parliate, loro parlino
$ -ere / -ire: che io prenda, tu prenda, lui prenda, noi prendiamo, voi prendiate, loro prendano
Las tres personas del singular son iguales; por eso se suele poner el pronombre: «che io sia», «che tu sia».

## Irregulares
| essere: sia, sia, sia, siamo, siate, siano · avere: abbia, abbia, abbia, abbiamo, abbiate, abbiano
| andare: vada · fare: faccia · potere: possa · volere: voglia · dovere: debba · venire: venga · stare: stia · dare: dia · sapere: sappia

## Cuándo se usa
Tras **che**, cuando la principal expresa:
- **Opinión**: penso che, credo che, mi sembra che → Penso che sia una buona idea.
- **Voluntad o deseo**: voglio che, spero che, preferisco che → Spero che tu venga.
- **Sentimiento**: sono contento che, ho paura che → Ho paura che sia troppo tardi.
- **Duda o necesidad**: non so se, dubito che, bisogna che, è importante che.
Y tras **benché / sebbene** (aunque), **affinché** (para que), **prima che** (antes de que), **a meno che** (a menos que), **purché** (con tal de que).

## Diferencias con el español
- **Opinión afirmativa**: el italiano usa congiuntivo («Credo che sia vero») donde el español pone indicativo («Creo que es verdad»).
- **sperare che** + congiuntivo, como en español.
- Con certeza se usa indicativo: So che è vero. · È sicuro che verrà.
`, e: [
      mc(2, "Completa: «Penso che questa ___ una buona soluzione.»", ["sia", "è", "sarà stata", "essere"], "Opinión → congiuntivo."),
      mc(2, "Completa: «Bisogna che noi ___ meno energia.»", ["consumiamo", "consumamo", "consumiate", "consumano"], "noi: igual que el presente."),
      mc(2, "Completa: «Spero che tu ___ alla manifestazione.»", ["venga", "vieni", "verrai", "venire"], "sperare che + congiuntivo."),
      mc(2, "Completa: «So che la città ___ molto per l'ambiente.»", ["fa", "faccia", "facesse", "fare"], "Certeza → indicativo."),
      tx(2, "Congiuntivo de «avere»: «Credo che loro ___ ragione.»", ["abbiano"], "che loro abbiano."),
      mc(2, "Completa: «Benché ___ freddo, andiamo in bici.»", ["faccia", "fa", "farà", "faceva"], "benché + congiuntivo."),
      mc(2, "«Credo que es verdad» en italiano es…", ["Credo che sia vero.", "Credo che è vero.", "Credo che sarebbe vero.", "Credo essere vero."], "En italiano, opinión + congiuntivo."),
      tx(2, "Congiuntivo de «potere»: «Lo spiego affinché tutti ___ capire.»", ["possano"], "che loro possano.")] },
    d: { t: "Una città più verde", l: [
      ["Text", "A Bolzano si lavora da molto tempo per l'ambiente. Negli anni Duemila la città ha costruito un intero quartiere in cui quasi non circolano auto.", "En Bolzano se trabaja desde hace mucho por el medio ambiente. En los años dos mil la ciudad construyó un barrio entero por el que casi no circulan coches."],
      ["Text", "Gli edifici sono così ben isolati che serve pochissima energia per riscaldarli. Gran parte della corrente è prodotta da pannelli solari installati sui tetti.", "Los edificios están tan bien aislados que hace falta poquísima energía para calentarlos. Gran parte de la electricidad la producen paneles solares instalados en los tejados."],
      ["Text", "Il Comune vuole anche che gli abitanti cambino abitudini: affinché tutti possano spostarsi senza macchina, ha creato nuove piste ciclabili e ha prolungato le linee degli autobus.", "El ayuntamiento quiere además que los vecinos cambien de costumbres: para que todos puedan moverse sin coche, ha creado nuevos carriles bici y ha prolongado las líneas de autobús."],
      ["Text", "Benché il progetto sia un successo, ci sono critiche. Gli affitti sono aumentati molto e alcune famiglie temono che il quartiere diventi troppo caro per loro. Bisognerebbe, dicono, che l'ecologia fosse accessibile a tutti.", "Aunque el proyecto es un éxito, hay críticas. Los alquileres han subido mucho y algunas familias temen que el barrio se vuelva demasiado caro para ellas. Haría falta, dicen, que la ecología fuera accesible para todos."]],
      q: [
        mc(2, "Che cosa ha costruito la città?", ["Un quartiere quasi senza auto", "Un'autostrada", "Una centrale elettrica", "Un aeroporto"], "«…un intero quartiere in cui quasi non circolano auto.»"),
        mc(2, "Da dove viene gran parte della corrente?", ["Da pannelli solari", "Dal carbone", "Da pale eoliche", "Dall'estero"], "«…prodotta da pannelli solari…»"),
        mc(2, "Che cosa ha fatto il Comune per gli spostamenti?", ["Piste ciclabili e più autobus", "Ha vietato le bici", "Ha costruito parcheggi", "Ha aumentato i biglietti"], "«…nuove piste ciclabili e … le linee degli autobus.»"),
        mc(2, "Che cosa temono alcune famiglie?", ["Che il quartiere diventi troppo caro", "Il rumore", "Che gli autobus spariscano", "Che i pannelli si rompano"], "«…temono che il quartiere diventi troppo caro…»")] },
    w: { c: "Describe qué habría que hacer en tu ciudad por el medio ambiente. Seis frases con «penso che», «bisogna che», «affinché» y «benché».", m: "Nella mia città penso che il traffico in centro sia un problema serio. Bisogna che il Comune crei più piste ciclabili affinché i ragazzi possano andare a scuola in bici. È importante che i mezzi pubblici costino meno. Benché la raccolta differenziata sia obbligatoria, molta gente non la fa. Vorrei anche che piantassero più alberi. Spero che le cose cambino presto." } },

  { id: "ib1-3", t: "Studi e futuro", es: "Estudios y futuro", v: [
    ["gli studi", "los estudios"], ["l'università", "la universidad"], ["la materia", "la asignatura"], ["la laurea", "la licenciatura, el título universitario"], ["la maturità", "el examen final del bachillerato"], ["il voto", "la nota"], ["l'esame", "el examen"],
    ["superare", "aprobar"], ["essere bocciato", "suspender"], ["la borsa di studio", "la beca"], ["il tirocinio", "las prácticas"], ["l'aggiornamento", "la actualización profesional"], ["le conoscenze", "los conocimientos"], ["la competenza", "la competencia, la habilidad"],
    ["la domanda", "la solicitud"], ["la scadenza", "el plazo"], ["lo scopo", "el objetivo"], ["il progetto", "el plan, el proyecto"], ["avere intenzione di", "tener intención de"], ["scegliere", "elegir"], ["la scelta", "la elección"],
    ["il futuro", "el futuro"], ["il sogno", "el sueño"], ["raggiungere", "alcanzar"], ["rinunciare", "renunciar"], ["impegnarsi", "esforzarse, comprometerse"], ["la sfida", "el reto"], ["l'occasione", "la oportunidad"]],
    g: { t: "El congiuntivo imperfetto y el periodo ipotetico", n: `
## El congiuntivo imperfetto
Raíz del imperfetto + **-ssi, -ssi, -sse, -ssimo, -ste, -ssero**:
| parlare: parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero
| avere: avessi · fare: facessi · dire: dicessi · bere: bevessi
| essere: fossi, fossi, fosse, fossimo, foste, fossero · dare: dessi · stare: stessi
Se usa cuando la principal está en pasado o en condicional: Volevo che tu venissi. · Vorrei che fosse più facile.

## Tres tipos de condición
- **Real**: se + presente (o futuro) → presente o futuro. Se studi, superi l'esame.
- **Posible o irreal en el presente**: **se + congiuntivo imperfetto → condizionale**. Se avessi una borsa di studio, andrei all'estero.
- (La hipótesis sobre el pasado, se + congiuntivo trapassato → condizionale passato, se ve en B2.)
> Coincide con el español: «si tuviera… iría». Error típico: «se avrei» (como «si tendría»). Tras «se» nunca va condicional.

## La finalidad
- Mismo sujeto: **per** + infinitivo → Lavoro la sera per pagarmi gli studi.
- Sujetos distintos: **perché / affinché** + congiuntivo → Ti spiego tutto perché tu capisca.
`, e: [
      mc(2, "Completa: «Se ___ più tempo, imparerei il giapponese.»", ["avessi", "avrei", "ho", "avrò"], "se + congiuntivo imperfetto → condizionale."),
      mc(2, "Completa: «Se studi, ___ l'esame.»", ["supererai", "supereresti", "superassi", "abbia superato"], "Condición real: futuro."),
      mc(2, "¿Qué frase es correcta?", ["Se potessi, cambierei lavoro.", "Se potrei, cambierei lavoro.", "Se potessi, cambiavo lavoro.", "Se posso, cambierei lavoro."], "se + congiuntivo imperfetto; condizionale en la otra parte."),
      mc(2, "Completa: «Volevo che tu ___ con me.»", ["venissi", "venga", "vieni", "verrai"], "Principal en pasado → congiuntivo imperfetto."),
      tx(2, "Congiuntivo imperfetto de «essere»: «Se io ___ in te, sceglierei medicina.»", ["fossi"], "se io fossi."),
      mc(2, "Completa: «Faccio uno stage ___ avere più esperienza.»", ["per", "perché", "affinché", "che"], "Mismo sujeto: per + infinitivo."),
      mc(2, "Completa: «Ti spiego tutto ___ tu capisca.»", ["perché", "per", "così", "siccome"], "Sujetos distintos: perché + congiuntivo."),
      tx(2, "Condizionale de «partire»: «Se avessi una borsa, ___ all'estero.»", ["partirei"], "partir- + -ei.")] },
    d: { t: "Dopo la maturità", l: [
      ["Elena", "Sai già che cosa farai dopo la maturità?", "¿Sabes ya qué harás después del bachillerato?"],
      ["Davide", "Ho intenzione di lavorare un anno all'estero per migliorare il mio inglese.", "Tengo intención de trabajar un año en el extranjero para mejorar mi inglés."],
      ["Elena", "E poi?", "¿Y después?"],
      ["Davide", "Poi vorrei studiare ingegneria. Se vincerò una borsa di studio, andrò a Torino.", "Después me gustaría estudiar ingeniería. Si consigo una beca, iré a Turín."],
      ["Elena", "Che fortuna. Io non ho ancora scelto. I miei genitori vorrebbero che studiassi giurisprudenza.", "Qué suerte. Yo todavía no he elegido. A mis padres les gustaría que estudiara Derecho."],
      ["Davide", "E a te piacerebbe?", "¿Y a ti te gustaría?"],
      ["Elena", "Non proprio. Se potessi, farei una scuola di fotografia.", "No mucho. Si pudiera, iría a una escuela de fotografía."],
      ["Davide", "Allora dovresti parlargliene perché capiscano il tuo progetto.", "Entonces deberías hablarles de ello para que entiendan tu plan."],
      ["Elena", "Hai ragione. Se non dico niente, me ne pentirò. Gliene parlerò questo fine settimana.", "Tienes razón. Si no digo nada, me arrepentiré. Se lo diré este fin de semana."]],
      q: [
        mc(2, "Perché Davide vuole andare all'estero?", ["Per migliorare l'inglese", "Per fare turismo", "Per studiare lì", "Per raggiungere la famiglia"], "«…per migliorare il mio inglese.»"),
        mc(2, "Che cosa vuole studiare Davide?", ["Ingegneria", "Giurisprudenza", "Medicina", "Fotografia"], "«…vorrei studiare ingegneria.»"),
        mc(2, "Che cosa vorrebbero i genitori di Elena?", ["Che studiasse giurisprudenza", "Che diventasse fotografa", "Che andasse all'estero", "Che lavorasse subito"], "«…vorrebbero che studiassi giurisprudenza.»"),
        mc(2, "Che cosa farà Elena questo fine settimana?", ["Parlerà con i genitori.", "Manderà la domanda.", "Andrà a Torino.", "Farà un esame."], "«Gliene parlerò questo fine settimana.»")] },
    w: { c: "Escribe sobre tus planes y tus sueños: qué harás seguro, qué harías si pudieras y para qué. Siete frases con «se» + presente o futuro, «se» + congiuntivo imperfetto y «per / perché».", m: "L'anno prossimo continuerò a studiare l'italiano per preparare un esame di livello B2. Se lo supererò, cercherò un tirocinio a Bologna. Studio un po' ogni giorno per fare progressi costanti. Se avessi più tempo, frequenterei anche un corso di conversazione. E se potessi scegliere, vivrei sei mesi a Napoli. Ne parlo spesso con la mia famiglia perché capisca il mio progetto. Se non ci provo, me ne pentirò." } },

  { id: "ib1-4", t: "Ricordi e biografie", es: "Recuerdos y biografías", v: [
    ["l'infanzia", "la infancia"], ["la giovinezza", "la juventud"], ["crescere", "crecer, criarse"], ["nascere", "nacer"], ["educare", "educar"], ["la generazione", "la generación"], ["l'avvenimento", "el acontecimiento"],
    ["vivere", "vivir"], ["innamorarsi", "enamorarse"], ["sposarsi", "casarse"], ["separarsi", "separarse"], ["il divorzio", "el divorcio"], ["morire", "morir"], ["la morte", "la muerte"],
    ["emigrare", "emigrar"], ["la terra natale", "la tierra natal"], ["la nostalgia", "la nostalgia, la morriña"], ["la guerra", "la guerra"], ["la pace", "la paz"], ["a quei tempi", "en aquella época"], ["una volta", "antes, antiguamente; una vez"],
    ["all'improvviso", "de repente"], ["alla fine", "al final"], ["nel frattempo", "entretanto"], ["il destino", "el destino"], ["orgoglioso", "orgulloso"], ["ricordarsi di", "acordarse de"], ["raccontare", "contar"]],
    g: { t: "El trapassato prossimo y el passato remoto", n: `
## El trapassato prossimo
Lo que había ocurrido antes de otro hecho pasado: **avere / essere** en imperfetto + participio.
| avevo finito · avevi visto · era partita · eravamo arrivati · si erano sposati
| Quando sono arrivato, il treno era già partito.

## Los tiempos del relato
- **Passato prossimo**: los hechos (al hablar) → Ha conosciuto mio nonno nel 1962.
- **Imperfetto**: el decorado y las costumbres → Abitavano in sei in una stanza.
- **Trapassato prossimo**: lo anterior → Aveva lasciato il paese due anni prima.

## El passato remoto: saber leerlo
Es el pasado de las novelas, las biografías y la historia. En el sur de Italia también se usa al hablar.
$ -are: parlò, parlarono · -ere: credé (credette), crederono · -ire: dormì, dormirono
Irregulares frecuentes (sobre todo en tercera persona):
| essere: fu, furono · avere: ebbe, ebbero · fare: fece, fecero · nascere: nacque · vivere: visse · venire: venne
| vedere: vide · dire: disse · prendere: prese · scrivere: scrisse · decidere: decise · morire: morì
| Dante nacque a Firenze nel 1265 e morì a Ravenna nel 1321.
> Si ves «fu», piensa en «è stato»; si ves «fece», en «ha fatto».

## Situar en el tiempo
| fa (hace): È arrivata dieci anni fa.
| da (desde, desde hace; la acción continúa, con presente): Vive qui da dieci anni.
| per (durante): Ha lavorato per quarant'anni.
| in (tiempo que se tarda): Ha imparato la lingua in sei mesi.
| tra / fra (dentro de): Andrà in pensione tra due anni.
`, e: [
      mc(2, "Completa: «Quando sono arrivato, il film ___ già ___.»", ["era … cominciato", "è … cominciato", "aveva … cominciare", "fu … cominciato"], "Anterior a otro pasado: trapassato; «cominciare» (sin objeto) lleva essere."),
      mc(2, "Completa: «Era stanca perché ___ tutta la notte.»", ["aveva lavorato", "ha lavorato", "lavorava avuto", "avrà lavorato"], "La causa es anterior: trapassato."),
      mc(2, "«Garibaldi nacque a Nizza» equivale a…", ["Garibaldi è nato a Nizza.", "Garibaldi nasce a Nizza.", "Garibaldi nascerà a Nizza.", "Garibaldi era nato a Nizza dopo."], "«nacque» es passato remoto de nascere."),
      mc(2, "«Fece un lungo viaggio» equivale a…", ["Ha fatto un lungo viaggio.", "Fa un lungo viaggio.", "Farà un lungo viaggio.", "Ha finito un lungo viaggio."], "fece = ha fatto."),
      mc(2, "Completa: «Abito a Bologna ___ cinque anni.» (y sigo)", ["da", "fa", "per", "tra"], "Acción que continúa: da + presente."),
      tx(2, "Completa: «È arrivata in Italia dieci anni ___.» (hace)", ["fa"], "fa va detrás de la cantidad."),
      mc(2, "Completa: «Partirò ___ due settimane.» (dentro de)", ["tra", "da", "fa", "per"], "tra / fra = dentro de."),
      tx(2, "Passato remoto de «essere» (lui): «La guerra ___ lunga.»", ["fu"], "essere → fu.")] },
    d: { t: "La vita di mia nonna", l: [
      ["Text", "Mia nonna Marta è nata nel 1940 in un piccolo paese della Calabria. Quando aveva cinque anni, la sua famiglia è dovuta emigrare e si è trasferita a Torino.", "Mi abuela Marta nació en 1940 en un pueblecito de Calabria. Cuando tenía cinco años, su familia tuvo que emigrar y se trasladó a Turín."],
      ["Text", "I primi anni sono stati duri. Abitavano in sei in una sola stanza e, quando faceva freddo, dormivano tutti in cucina.", "Los primeros años fueron duros. Vivían seis en una sola habitación y, cuando hacía frío, dormían todos en la cocina."],
      ["Text", "A quattordici anni Marta ha cominciato a lavorare come sarta. Le era sempre piaciuto cucire: gliel'aveva insegnato sua madre quando era piccola.", "A los catorce años Marta empezó a trabajar como modista. Siempre le había gustado coser: se lo había enseñado su madre de pequeña."],
      ["Text", "Ha conosciuto mio nonno nel 1962, a una festa da ballo. Si sono sposati un anno dopo e hanno aperto una piccola bottega, che hanno gestito per quarant'anni.", "Conoció a mi abuelo en 1962, en un baile. Se casaron un año después y abrieron una tiendecita que llevaron durante cuarenta años."],
      ["Text", "Oggi ha più di ottant'anni. Quando racconta quei tempi, dice sempre: «Non avevamo quasi niente, ma eravamo insieme».", "Hoy tiene más de ochenta años. Cuando cuenta aquella época siempre dice: «No teníamos casi nada, pero estábamos juntos»."]],
      q: [
        mc(2, "Quando la famiglia ha lasciato la Calabria?", ["Quando Marta aveva cinque anni", "Quando Marta aveva quattordici anni", "Nel 1962", "Dopo il matrimonio"], "«Quando aveva cinque anni…»"),
        mc(2, "Che mestiere ha fatto Marta?", ["La sarta", "La commessa", "La cuoca", "La maestra"], "«…a lavorare come sarta.»"),
        mc(2, "Chi le aveva insegnato a cucire?", ["Sua madre", "Suo marito", "Una vicina", "La sua padrona"], "«…gliel'aveva insegnato sua madre…»"),
        mc(2, "Per quanto tempo hanno gestito la bottega?", ["Quarant'anni", "Un anno", "Quattordici anni", "Vent'anni"], "«…per quarant'anni.»")] },
    w: { c: "Escribe la biografía breve de un familiar o de alguien a quien admires (siete u ocho frases). Combina passato prossimo, imperfetto y trapassato, y usa «fa», «per» y «da».", m: "Mio padre è nato nel 1965 a Granada. A diciotto anni è partito per Barcellona per studiare architettura. Non aveva mai lasciato la sua città e all'inizio sentiva molto la nostalgia. La sera lavorava in un ristorante: è lì che ha conosciuto mia madre. Si sono sposati nel 1992 e si sono trasferiti a Valencia. Mio padre ha diretto un piccolo studio per trent'anni. È andato in pensione due anni fa. Da allora dipinge ogni giorno." } },

  { id: "ib1-5", t: "Società e convivenza", es: "Sociedad y convivencia", v: [
    ["la società", "la sociedad"], ["il cittadino", "el ciudadano"], ["il governo", "el gobierno"], ["la legge", "la ley"], ["le elezioni", "las elecciones"], ["votare", "votar"], ["il partito", "el partido"],
    ["la democrazia", "la democracia"], ["la libertà", "la libertad"], ["la giustizia", "la justicia"], ["l'uguaglianza", "la igualdad"], ["il diritto", "el derecho"], ["il dovere", "el deber"], ["le tasse", "los impuestos"],
    ["la povertà", "la pobreza"], ["la ricchezza", "la riqueza"], ["povero", "pobre"], ["ricco", "rico"], ["il volontariato", "el voluntariado"], ["impegnarsi in", "implicarse en"], ["sostenere", "apoyar"],
    ["la tolleranza", "la tolerancia"], ["il pregiudizio", "el prejuicio"], ["il rispetto", "el respeto"], ["la responsabilità", "la responsabilidad"], ["pretendere", "exigir"], ["lamentarsi", "quejarse"], ["la manifestazione", "la manifestación"]],
    g: { t: "El discorso indiretto y la expresión de la opinión", n: `
## El estilo indirecto con el verbo en presente
- Afirmación → **che**: «Sono d'accordo.» → Dice **che** è d'accordo.
- Pregunta de sí o no → **se**: «Voti?» → Mi chiede **se** voto.
- Otras preguntas conservan su interrogativo: Mi chiede **dove** abito, **perché** parto.
- Orden → **di** + infinitivo: «Firmate qui.» → Ci chiede **di** firmare.

## Con el verbo introductor en pasado
Los tiempos retroceden:
$ presente → imperfetto: «Sono stanco.» → Ha detto che era stanco.
$ passato prossimo → trapassato: «Ho votato.» → Ha detto che aveva votato.
$ futuro → condizionale passato: «Verrò.» → Ha detto che **sarebbe venuto**.
> Diferencia con el español: el futuro en el pasado es condicional **compuesto** («ha detto che sarebbe venuto»), donde el español dice «dijo que vendría».
Los marcadores también cambian: oggi → quel giorno · domani → il giorno dopo · ieri → il giorno prima.

## Dar la opinión
- Con congiuntivo: Penso che, Credo che, Mi sembra che, Non credo che → Penso che sia ingiusto.
- Con indicativo: Secondo me, Per me, A mio parere → Secondo me è ingiusto.
| Sono d'accordo con te. · Non sono per niente d'accordo. · Hai ragione, però… · Dipende.
`, e: [
      mc(2, "Estilo indirecto: «Sono d'accordo.» → Dice ___", ["che è d'accordo.", "che sono d'accordo.", "se è d'accordo.", "di essere d'accordo che."], "che + el verbo en 3.ª persona."),
      mc(2, "Estilo indirecto: «Vieni alla manifestazione?» → Mi chiede ___", ["se vengo alla manifestazione.", "che vengo alla manifestazione.", "di vengo alla manifestazione.", "dove vengo alla manifestazione."], "Pregunta de sí o no: se."),
      mc(2, "Estilo indirecto: «Firmate la petizione.» → Ci chiede ___", ["di firmare la petizione.", "che firmare la petizione.", "se firmare la petizione.", "firmate la petizione."], "Orden: di + infinitivo."),
      mc(2, "En pasado: «Verrò domani.» → Ha detto ___", ["che sarebbe venuto il giorno dopo.", "che verrebbe domani.", "che verrà domani.", "che veniva il giorno prima."], "futuro → condizionale passato; domani → il giorno dopo."),
      tx(2, "En pasado: «Ho votato.» → Ha detto che ___ votato.", ["aveva"], "passato prossimo → trapassato."),
      mc(2, "Completa: «Secondo me questa legge ___ ingiusta.»", ["è", "sia", "sarebbe stata", "fosse"], "«Secondo me» + indicativo."),
      mc(2, "Completa: «Penso che questa legge ___ ingiusta.»", ["sia", "è", "sarà", "era"], "«Penso che» + congiuntivo."),
      tx(2, "En pasado: «Sono stanco.» → Ha detto che ___ stanco.", ["era"], "presente → imperfetto.")] },
    d: { t: "Salviamo il centro giovani!", l: [
      ["Giada", "Hai sentito? Il sindaco ha annunciato che il centro giovani avrebbe chiuso a giugno.", "¿Te has enterado? El alcalde ha anunciado que el centro juvenil cerraría en junio."],
      ["Fabio", "Davvero? E ha spiegato perché?", "¿De verdad? ¿Y ha explicado por qué?"],
      ["Giada", "Ha detto che il Comune non aveva più soldi e che doveva risparmiare.", "Ha dicho que el ayuntamiento ya no tenía dinero y que tenía que ahorrar."],
      ["Fabio", "Non credo che sia il vero motivo. Hanno appena costruito un parcheggio che è costato milioni.", "No creo que sea el verdadero motivo. Acaban de construir un aparcamiento que ha costado millones."],
      ["Giada", "Sono d'accordo. Ieri ho chiesto alla direttrice che cosa pensasse di fare.", "Estoy de acuerdo. Ayer le pregunté a la directora qué pensaba hacer."],
      ["Fabio", "E che cosa ti ha risposto?", "¿Y qué te contestó?"],
      ["Giada", "Che aveva scritto al consiglio comunale, ma che nessuno le aveva risposto.", "Que había escrito al pleno, pero que nadie le había respondido."],
      ["Fabio", "Allora bisogna che ci impegniamo. Secondo me una petizione sarebbe un buon inizio.", "Entonces tenemos que implicarnos. En mi opinión, una recogida de firmas sería un buen comienzo."],
      ["Giada", "Buona idea. Proprio lei mi ha chiesto se potevamo aiutarla sabato.", "Buena idea. Precisamente ella me preguntó si podíamos ayudarla el sábado."],
      ["Fabio", "Dille che ci sarò.", "Dile que estaré."]],
      q: [
        mc(2, "Che cosa ha annunciato il sindaco?", ["La chiusura del centro giovani", "Un nuovo parcheggio", "Le elezioni", "Nuove tasse"], "«…il centro giovani avrebbe chiuso a giugno.»"),
        mc(2, "Quale motivo ha dato il sindaco?", ["Il Comune deve risparmiare.", "I giovani non ci vanno più.", "L'edificio è vecchio.", "La direttrice si è licenziata."], "«…il Comune non aveva più soldi…»"),
        mc(2, "Che cosa ha fatto la direttrice?", ["Ha scritto al consiglio comunale.", "Ha organizzato una manifestazione.", "Si è dimessa.", "Ha incontrato il sindaco."], "«…aveva scritto al consiglio comunale…»"),
        mc(2, "Che cosa propone Fabio?", ["Una petizione", "Uno sciopero", "Una festa", "Un articolo sul giornale"], "«…una petizione sarebbe un buon inizio.»")] },
    w: { c: "Cuenta una conversación o una noticia reciente en estilo indirecto (qué dijo cada uno, qué preguntó) y da tu opinión. Siete frases, con el verbo introductor en pasado.", m: "Ieri la mia vicina mi ha detto che il Comune voleva chiudere la biblioteca del quartiere. Mi ha spiegato che l'edificio costava troppo. Le ho chiesto se avessero consultato gli abitanti. Mi ha risposto che nessuno aveva chiesto niente a nessuno. Ha aggiunto che ci sarebbe stata una riunione la settimana dopo e mi ha chiesto di andarci. Secondo me è una decisione sbagliata. Non credo che si possa risparmiare sulla cultura." } },

  { id: "ib1-6", t: "Consumi e denaro", es: "Consumo y dinero", v: [
    ["il conto corrente", "la cuenta corriente"], ["i contanti", "el efectivo"], ["il bonifico", "la transferencia"], ["prelevare", "sacar (dinero)"], ["la bolletta", "la factura (luz, agua…)"], ["le spese", "los gastos"], ["il debito", "la deuda"],
    ["il prestito", "el préstamo"], ["gli interessi", "los intereses"], ["spendere", "gastar"], ["permettersi", "permitirse"], ["la spesa", "el gasto; la compra"], ["il reddito", "los ingresos"], ["l'assicurazione", "el seguro"],
    ["il contratto", "el contrato"], ["firmare", "firmar"], ["la garanzia", "la garantía"], ["il reclamo", "la reclamación"], ["il consumatore", "el consumidor"], ["la merce", "la mercancía"], ["consegnare", "entregar"],
    ["la consegna", "la entrega"], ["ordinare", "pedir, encargar"], ["lo sconto", "el descuento"], ["la qualità", "la calidad"], ["il servizio clienti", "la atención al cliente"], ["la fattura", "la factura"], ["il resto", "el cambio (dinero)"]],
    g: { t: "La voz pasiva, el si impersonal y el gerundio", n: `
## La voz pasiva
**essere** (en el tiempo que toque) + participio concordado; el agente va con **da**:
| Il pacco è stato consegnato dal corriere.
| La fattura sarà inviata per email.
Con **venire** en lugar de essere (solo tiempos simples) se insiste en la acción: Il pacco viene consegnato domani.
Con **andare** + participio expresa obligación: La fattura va pagata entro venerdì. (= deve essere pagata)

## El si impersonal y pasivo
Muy frecuente en italiano, equivale al «se» español:
| Qui si paga in contanti.         Aquí se paga en efectivo.
| Si vendono biciclette usate.     Se venden bicis usadas. (el verbo concuerda con lo vendido)
En tiempos compuestos lleva **essere**: Si è speso troppo.

## El gerundio
$ -are → -ando: pagando · -ere / -ire → -endo: prendendo, partendo
Irregulares: fare → facendo · dire → dicendo · bere → bevendo.
Indica modo, causa o simultaneidad, con el mismo sujeto:
| Ho trovato lo sconto confrontando i prezzi.
| Pagando con bonifico, eviterà le spese.
**stare + gerundio** (acción en curso): Sto aspettando il pacco da tre settimane.
`, e: [
      mc(2, "Pasa a pasiva: «Il corriere ha consegnato il pacco.»", ["Il pacco è stato consegnato dal corriere.", "Il pacco ha consegnato dal corriere.", "Il pacco è consegnato del corriere.", "Il pacco era consegnare dal corriere."], "essere + participio; agente con da."),
      mc(2, "«La bolletta va pagata entro lunedì» significa…", ["La factura debe pagarse antes del lunes", "La factura se pagó el lunes", "La factura va a pagarse el lunes", "La factura está pagada"], "andare + participio = obligación."),
      mc(2, "Completa: «In questo negozio ___ molti prodotti locali.»", ["si vendono", "si vende", "vendono si", "si venduti"], "Si + verbo concordado con el plural."),
      mc(2, "Completa: «Ho risparmiato ___ in bicicletta.»", ["andando", "andato", "andare", "andavo"], "Gerundio de modo."),
      tx(2, "Gerundio de «fare».", ["facendo"], "Irregular: facendo."),
      mc(2, "Completa: «___ aspettando il rimborso da un mese.»", ["Sto", "Sono", "Ho", "Vado"], "stare + gerundio."),
      mc(2, "Completa: «Il contratto ___ firmato ieri.»", ["è stato", "ha stato", "è venuto stato", "va stato"], "Passato prossimo pasivo: è stato + participio."),
      tx(2, "Gerundio de «pagare».", ["pagando"], "-are → -ando.")] },
    d: { t: "Il reclamo", l: [
      ["Servizio clienti", "TecnoMarket, servizio clienti, buongiorno. Come posso aiutarla?", "TecnoMarket, atención al cliente, buenos días. ¿En qué puedo ayudarle?"],
      ["Sig.ra Ortega", "Buongiorno. Chiamo per un ordine. Ho ordinato un portatile tre settimane fa e lo sto ancora aspettando.", "Buenos días. Llamo por un pedido. Encargué un portátil hace tres semanas y sigo esperándolo."],
      ["Servizio clienti", "Mi dispiace. Ha il numero dell'ordine?", "Lo siento. ¿Tiene el número del pedido?"],
      ["Sig.ra Ortega", "Sì, è il 4471. Sul vostro sito c'è scritto che la merce viene consegnata in cinque giorni.", "Sí, es el 4471. En su página pone que la mercancía se entrega en cinco días."],
      ["Servizio clienti", "Vedo il problema: a causa di un errore il pacco è stato spedito a un indirizzo sbagliato.", "Veo el problema: por un error el paquete se envió a una dirección equivocada."],
      ["Sig.ra Ortega", "E adesso? La fattura l'ho già pagata.", "¿Y ahora? La factura ya la he pagado."],
      ["Servizio clienti", "Domani le sarà spedito un nuovo apparecchio. Per scusarci, le offriamo uno sconto del dieci per cento.", "Mañana se le enviará un aparato nuevo. Para disculparnos, le ofrecemos un descuento del diez por ciento."],
      ["Sig.ra Ortega", "Va bene. Ma se venerdì non l'ho ricevuto, chiederò il rimborso.", "De acuerdo. Pero si el viernes no lo he recibido, pediré el reembolso."],
      ["Servizio clienti", "La capisco perfettamente. Me ne occupo personalmente.", "La entiendo perfectamente. Me ocupo personalmente."]],
      q: [
        mc(2, "Perché chiama la signora Ortega?", ["Non ha ricevuto l'ordine.", "Il portatile è rotto.", "Il prezzo è alto.", "Il sito non funziona."], "«…lo sto ancora aspettando.»"),
        mc(2, "Perché il pacco non è arrivato?", ["È stato spedito a un indirizzo sbagliato.", "La fattura non era pagata.", "Il prodotto era esaurito.", "Il negozio era chiuso."], "«…a un indirizzo sbagliato.»"),
        mc(2, "Che cosa offrono per scusarsi?", ["Uno sconto del dieci per cento", "Un secondo portatile", "Il rimborso completo", "Un buono acquisto"], "«…uno sconto del dieci per cento.»"),
        mc(2, "Che cosa farà se venerdì non ha niente?", ["Chiederà il rimborso.", "Richiamerà.", "Andrà in negozio.", "Farà un altro ordine."], "«…chiederò il rimborso.»")] },
    w: { c: "Compraste algo por internet y llegó roto o no llegó. Escribe una reclamación formal de unas 80 palabras: qué pediste, cuál es el problema y qué solución exiges.", m: "Gentili Signori,\nil 3 marzo ho ordinato una macchina da caffè sul vostro sito (ordine n. 2210). Purtroppo l'apparecchio è stato danneggiato durante la consegna: il serbatoio è rotto e non posso usarlo. Vi chiedo quindi di inviarmene uno nuovo entro una settimana o di rimborsarmi l'importo. In allegato trovate le foto del danno. In attesa di una vostra risposta, porgo distinti saluti.\nAna Ruiz" } },
] });
