// Curso de italiano · nivel B2. Mismo formato que curso_italiano.js (cadenas entre comillas dobles).
CURSO.italiano.push({ id: "B2", nombre: "B2 · Avanzado", desc: "Entender textos complejos, argumentar con matices, cambiar de registro y conversar con fluidez sobre temas de actualidad.", u: [
  { id: "ib2-1", t: "Il mondo del lavoro", es: "El mundo laboral", v: [
    ["la digitalizzazione", "la digitalización"], ["l'automazione", "la automatización"], ["il mercato del lavoro", "el mercado laboral"], ["la carenza", "la escasez"], ["la disoccupazione", "el desempleo"], ["il dipendente", "el empleado"], ["il datore di lavoro", "el empleador"],
    ["il sindacato", "el sindicato"], ["il contratto collettivo", "el convenio colectivo"], ["lo sciopero", "la huelga"], ["conciliare", "conciliar"], ["la flessibilità", "la flexibilidad"], ["lo smart working", "el teletrabajo"], ["il rendimento", "el rendimiento"],
    ["la pressione", "la presión"], ["il carico di lavoro", "la carga de trabajo"], ["il licenziamento", "el despido"], ["il contratto a termine", "el contrato temporal"], ["il contratto a tempo indeterminato", "el contrato indefinido"], ["la promozione", "el ascenso"], ["il dirigente", "el directivo"],
    ["avviare un'impresa", "poner en marcha una empresa"], ["la concorrenza", "la competencia"], ["la qualifica", "la cualificación"], ["formarsi", "formarse"], ["la pensione", "la jubilación, la pensión"], ["assumere", "contratar"], ["il precariato", "la precariedad laboral"]],
    g: { t: "Concesión y oposición", n: `
## Expresar la concesión
- Con **congiuntivo**: **benché, sebbene, nonostante, malgrado** (+ verbo) → Benché sia qualificato, non trova lavoro.
- Con **indicativo**: **anche se** → Anche se è qualificato, non trova lavoro.
- Con un nombre: **nonostante / malgrado** + nombre → Nonostante la laurea, non trova lavoro.
- Con gerundio: **pur** + gerundio → Pur essendo qualificato, non trova lavoro.
- Adverbios: **eppure, tuttavia, comunque, ciononostante** → È qualificato. Eppure non trova lavoro.
- **per quanto** + congiuntivo (por mucho que): Per quanto cerchi, non trova niente.
> «benché» nunca con indicativo y «anche se» nunca con congiuntivo: es el error más frecuente.

## Expresar la oposición
| mentre (mientras que): Lei lavora da casa, mentre suo marito va in ufficio.
| invece / al contrario (en cambio): Lo stipendio è basso; l'orario, invece, è flessibile.
| a differenza di (a diferencia de)

## Argumentar con matices
| È vero che… però · Certo… ma · D'altra parte · In ogni caso · Resta il fatto che · Non è detto che + congiuntivo
| È vero che lo smart working è comodo, però isola.
`, e: [
      mc(3, "Completa: «___ sia molto qualificato, è disoccupato.»", ["Benché", "Anche se", "Eppure", "Nonostante la"], "Con congiuntivo: benché."),
      mc(3, "Completa: «___ è molto qualificato, è disoccupato.»", ["Anche se", "Benché", "Sebbene", "Malgrado"], "Con indicativo: anche se."),
      mc(3, "Completa: «___ la laurea, non l'hanno assunto.»", ["Nonostante", "Benché", "Anche se", "Pur"], "Con un nombre: nonostante."),
      mc(3, "Completa: «___ essendo stanco, ha finito il lavoro.»", ["Pur", "Benché", "Anche", "Eppure"], "pur + gerundio."),
      tx(3, "Completa: «Per quanto ___, non trova un posto.» (cercare, lui)", ["cerchi"], "per quanto + congiuntivo."),
      mc(3, "¿Qué frase es correcta?", ["Guadagna poco. Eppure ama il suo lavoro.", "Guadagna poco. Eppure che ama il suo lavoro.", "Eppure guadagna poco, ama il suo lavoro che.", "Guadagna poco, eppure ami il suo lavoro."], "«eppure» es un adverbio, no introduce subordinada."),
      mc(3, "Completa: «Lei lavora da casa, ___ suo marito va in ufficio.»", ["mentre", "benché", "nonostante", "pur"], "Contraste entre dos hechos: mentre."),
      tx(3, "Completa: «È ___ che lo smart working è comodo, però isola.»", ["vero"], "È vero che… però.")] },
    d: { t: "Lavorare dove e quando si vuole?", l: [
      ["Text", "Il mondo del lavoro cambia più velocemente che mai. La digitalizzazione e la carenza di personale qualificato costringono le aziende a ripensare le proprie abitudini. Eppure non tutte sono pronte a farlo.", "El mundo laboral cambia más deprisa que nunca. La digitalización y la escasez de personal cualificado obligan a las empresas a replantearse sus costumbres. Sin embargo, no todas están dispuestas a hacerlo."],
      ["Text", "Oggi molti dipendenti non chiedono soltanto uno stipendio dignitoso, ma anche orari flessibili. Mentre i loro genitori accettavano di passare dieci ore al giorno in ufficio, i giovani laureati si rifiutano di sacrificare la vita privata.", "Hoy muchos empleados no piden solo un sueldo digno, sino también horarios flexibles. Mientras que sus padres aceptaban pasar diez horas diarias en la oficina, los jóvenes titulados se niegan a sacrificar su vida privada."],
      ["Text", "Per quanti vantaggi offra, lo smart working comporta anche dei rischi. È vero che si risparmia il tempo del tragitto; d'altra parte, il confine tra lavoro e tempo libero diventa sfumato. Benché la maggior parte di chi lavora da casa si dica soddisfatta, uno su tre ammette di lavorare più di prima.", "Por muchas ventajas que ofrezca, el teletrabajo conlleva también riesgos. Es cierto que se ahorra el tiempo del trayecto; por otro lado, la frontera entre trabajo y tiempo libre se difumina. Aunque la mayoría de quienes trabajan desde casa se declaran satisfechos, uno de cada tres admite que trabaja más que antes."],
      ["Text", "Nonostante queste difficoltà, pochi vorrebbero tornare indietro. Gli esperti consigliano quindi regole chiare: anche se ognuno organizza la propria giornata, nessuno dovrebbe essere raggiungibile sempre. In ogni caso, la flessibilità non deve trasformarsi in disponibilità illimitata.", "A pesar de estas dificultades, pocos querrían volver atrás. Por eso los expertos aconsejan reglas claras: aunque cada uno organice su jornada, nadie debería estar siempre localizable. En cualquier caso, la flexibilidad no debe convertirse en disponibilidad ilimitada."]],
      q: [
        mc(3, "Che cosa costringe le aziende a cambiare?", ["La digitalizzazione e la carenza di personale", "Gli scioperi", "L'aumento degli stipendi", "La pensione dei dirigenti"], "«La digitalizzazione e la carenza di personale qualificato…»"),
        mc(3, "In che cosa i giovani laureati sono diversi dai genitori?", ["Rifiutano di sacrificare la vita privata.", "Vogliono guadagnare molto di più.", "Preferiscono l'ufficio.", "Cambiano raramente azienda."], "«…si rifiutano di sacrificare la vita privata.»"),
        mc(3, "Che cosa ammette uno su tre?", ["Di lavorare più di prima", "Di guadagnare meno", "Di rimpiangere l'ufficio", "Di aver perso i colleghi"], "«…ammette di lavorare più di prima.»"),
        mc(3, "Che cosa consigliano gli esperti?", ["Regole chiare sulla reperibilità", "Il ritorno di tutti in ufficio", "Giornate più lunghe", "Più controllo"], "«…nessuno dovrebbe essere raggiungibile sempre.»")] },
    w: { c: "¿Teletrabajo sí o no? Escribe una opinión argumentada de unas 150 palabras con ventajas, inconvenientes y tu conclusión. Usa al menos cinco conectores de concesión u oposición.", m: "A mio parere lo smart working non è né una soluzione miracolosa né un pericolo. È vero che permette di risparmiare tempo e denaro, dato che il tragitto scompare; d'altra parte, molti dipendenti soffrono la mancanza di contatto con i colleghi. Benché a casa ci si concentri spesso meglio, non tutti dispongono di uno spazio tranquillo. Per quanto alcuni fissino degli orari, finiscono per rispondere alle email la sera. Mentre i dirigenti apprezzano questa libertà, i neoassunti hanno bisogno di essere seguiti. Nonostante questi limiti, non vorrei tornare indietro. Difendo quindi un modello misto: anche se ognuno organizza la propria settimana, due giorni in ufficio restano indispensabili. In ogni caso, la flessibilità non deve mai significare essere sempre reperibili." } },

  { id: "ib2-2", t: "Scienza e tecnologia", es: "Ciencia y tecnología", v: [
    ["la ricerca", "la investigación"], ["il ricercatore", "el investigador"], ["la scienza", "la ciencia"], ["lo studio", "el estudio"], ["il risultato", "el resultado"], ["l'esperimento", "el experimento"], ["l'analisi", "el análisis"],
    ["esaminare", "examinar"], ["dimostrare", "demostrar"], ["la prova", "la prueba"], ["la scoperta", "el descubrimiento"], ["l'invenzione", "el invento"], ["mettere a punto", "poner a punto"], ["il progresso", "el progreso"],
    ["l'intelligenza artificiale", "la inteligencia artificial"], ["elaborare", "procesar, elaborar"], ["misurare", "medir"], ["il metodo", "el método"], ["l'ipotesi", "la hipótesis"], ["confermare", "confirmar"], ["smentire", "desmentir, refutar"],
    ["la causa", "la causa"], ["l'effetto", "el efecto"], ["la conseguenza", "la consecuencia"], ["il rischio", "el riesgo"], ["il vantaggio", "la ventaja"], ["il software", "el programa informático"], ["prevedere", "prever"]],
    g: { t: "Pasiva avanzada, si passivante y nominalización", n: `
## La pasiva en todos los tiempos
$ essere + participio: è analizzato · è stato analizzato · sarà analizzato · sarebbe analizzato
$ venire + participio (solo tiempos simples, insiste en la acción): viene analizzato · verrà analizzato
$ andare + participio (obligación): va analizzato · andrebbe analizzato
$ con modal: deve essere analizzato · può essere analizzato
El agente con **da**: I dati sono stati elaborati dai ricercatori.

## El si passivante
Equivale a una pasiva sin agente y es lo más natural en italiano:
| Si analizzano i dati in poche ore.       Los datos se analizan en pocas horas.
| Si è scoperto un nuovo vaccino.          Se ha descubierto una nueva vacuna.
En tiempos compuestos el participio concuerda: Si sono raccolti molti dati.

## Adjetivos en -bile
Indican posibilidad pasiva: prevedibile, realizzabile, comprensibile, evitabile, inevitabile, incomprensibile.

## La nominalización
Los titulares y los textos formales convierten verbos en nombres:
| I prezzi aumentano. → L'aumento dei prezzi.
| I ricercatori hanno scoperto un vaccino. → Scoperta di un vaccino.
Sufijos frecuentes:
$ -zione / -sione (femenino): creare → la creazione · decidere → la decisione
$ -mento (masculino): sviluppare → lo sviluppo, cambiare → il cambiamento
$ sin sufijo: arrivare → l'arrivo · ridurre → la riduzione · scoprire → la scoperta
> Nominalizar sube el registro: «perché i prezzi aumentano» → «a causa dell'aumento dei prezzi».
`, e: [
      mc(3, "Pasa a pasiva: «I ricercatori analizzeranno i dati.»", ["I dati saranno analizzati dai ricercatori.", "I dati saranno analizzato dai ricercatori.", "I dati sono stati analizzati dai ricercatori.", "I dati sarebbero analizzare dai ricercatori."], "essere en futuro + participio concordado."),
      mc(3, "«Questi dati vanno verificati» significa…", ["Estos datos deben verificarse", "Estos datos se van a verificar", "Estos datos están verificados", "Estos datos se verificaron"], "andare + participio = obligación."),
      mc(3, "Completa: «In questo laboratorio ___ nuovi farmaci.»", ["si sviluppano", "si sviluppa", "sviluppano si", "si sviluppati"], "Si passivante concordado con el plural."),
      mc(3, "Completa (se puede prever): «Le conseguenze erano ___.»", ["prevedibili", "previste", "prevedenti", "prevedevoli"], "prevedere → prevedibile."),
      tx(3, "Nominaliza: «sviluppare» → «lo ___»", ["sviluppo"], "Sin sufijo: lo sviluppo."),
      mc(3, "Nominaliza: «I prezzi aumentano.»", ["L'aumento dei prezzi", "L'aumentazione dei prezzi", "L'aumentamento dei prezzi", "I prezzi aumentando"], "aumentare → l'aumento."),
      mc(3, "Completa: «Il risultato ___ verificato domani.» (insiste en la acción)", ["verrà", "andrà", "sarebbe stato", "viene stato"], "venire + participio en futuro."),
      tx(3, "Nominaliza: «scoprire» → «la ___»", ["scoperta"], "scoprire → la scoperta.")] },
    d: { t: "Macchine che imparano", l: [
      ["Text", "L'intelligenza artificiale si è imposta nella ricerca. Enormi quantità di dati, che un tempo richiedevano anni di lavoro, oggi si elaborano in poche ore.", "La inteligencia artificial se ha impuesto en la investigación. Enormes cantidades de datos que antes requerían años de trabajo hoy se procesan en pocas horas."],
      ["Text", "In medicina, per esempio, alcuni tumori vengono ormai individuati sulle radiografie da appositi programmi, spesso prima che dall'occhio umano. Anche lo sviluppo di nuovi farmaci potrebbe essere accelerato.", "En medicina, por ejemplo, algunos tumores son ya detectados en las radiografías por programas específicos, a menudo antes que por el ojo humano. También el desarrollo de nuevos fármacos podría acelerarse."],
      ["Text", "Ma questa tecnologia ha i suoi limiti. Il modo in cui un programma arriva al risultato è spesso incomprensibile, perfino per gli specialisti. Gli errori contenuti nei dati si individuano con difficoltà e le loro conseguenze non sono sempre prevedibili.", "Pero esta tecnología tiene sus límites. La manera en que un programa llega al resultado es a menudo incomprensible, incluso para los especialistas. Los errores contenidos en los datos se detectan con dificultad y sus consecuencias no siempre son previsibles."],
      ["Text", "Per questo molti ricercatori chiedono che le decisioni importanti non vengano lasciate alle sole macchine. Secondo loro, la responsabilità non si delega: deve restare umana.", "Por eso muchos investigadores piden que las decisiones importantes no se dejen solo en manos de las máquinas. Según ellos, la responsabilidad no se delega: debe seguir siendo humana."]],
      q: [
        mc(3, "Che cosa è cambiato nell'analisi dei dati?", ["È molto più veloce.", "Costa di più.", "La fanno solo le persone.", "Non è più necessaria."], "«…oggi si elaborano in poche ore.»"),
        mc(3, "Quale esempio medico fa il testo?", ["Programmi che individuano tumori sulle radiografie", "Robot che operano da soli", "Computer che sostituiscono gli infermieri", "Farmaci più economici"], "«…alcuni tumori vengono ormai individuati … da appositi programmi…»"),
        mc(3, "Quale problema viene citato?", ["Non sempre si capisce come si ottiene il risultato.", "I programmi sono lenti.", "Mancano i dati.", "La tecnologia è troppo cara."], "«…è spesso incomprensibile, perfino per gli specialisti.»"),
        mc(3, "Che cosa chiedono molti ricercatori?", ["Che l'uomo mantenga la responsabilità", "Che la ricerca si fermi", "Che decidano le macchine", "Che si raccolgano più dati"], "«…la responsabilità … deve restare umana.»")] },
    w: { c: "Elige un avance tecnológico y escribe unas 150 palabras: qué permite, qué riesgos tiene y qué habría que regular. Usa la pasiva, el «si» pasivo, un adjetivo en -bile y tres nominalizaciones.", m: "L'auto a guida autonoma potrebbe trasformare la nostra vita quotidiana. Già oggi molte funzioni vengono gestite da software, e la maggior parte degli incidenti, che sono causati da errori umani, sarebbe evitabile. Inoltre, lo sviluppo di questi veicoli permetterebbe agli anziani di restare autonomi. Tuttavia, i rischi non vanno sottovalutati. Nessun sistema è infallibile e la reazione di un programma in una situazione pericolosa resta imprevedibile. Nemmeno la questione della responsabilità in caso di incidente si risolve facilmente. Per questo, prima della messa in circolazione di queste auto, devono essere approvate leggi precise. I dati andrebbero registrati e controllati da enti indipendenti. Senza questa trasparenza, la fiducia dei cittadini non si otterrà." } },

  { id: "ib2-3", t: "Media e opinione pubblica", es: "Medios y opinión pública", v: [
    ["la libertà di stampa", "la libertad de prensa"], ["la censura", "la censura"], ["la copertura mediatica", "la cobertura mediática"], ["la redazione", "la redacción"], ["il comunicato", "el comunicado"], ["la dichiarazione", "la declaración"], ["la conferenza stampa", "la rueda de prensa"],
    ["il portavoce", "el portavoz"], ["affermare", "afirmar"], ["sottolineare", "subrayar"], ["dichiarare", "declarar"], ["annunciare", "anunciar"], ["negare", "negar"], ["ammettere", "admitir"],
    ["lasciare intendere", "dar a entender"], ["criticare", "criticar"], ["la voce", "el rumor; la voz"], ["la bufala", "el bulo"], ["il fatto", "el hecho"], ["l'affermazione", "la afirmación"], ["credibile", "creíble"],
    ["presunto", "presunto"], ["a quanto pare", "por lo visto"], ["l'editoriale", "el editorial"], ["il sondaggio", "la encuesta"], ["la maggioranza", "la mayoría"], ["la minoranza", "la minoría"], ["influenzare", "influir en"]],
    g: { t: "Congiuntivo passato y trapassato, concordancia y condizionale giornalistico", n: `
## Los cuatro tiempos del congiuntivo
$ presente: che sia · passato: che sia stato, che abbia fatto
$ imperfetto: che fosse · trapassato: che fosse stato, che avesse fatto

## La concordancia de tiempos
La principal decide el tiempo del congiuntivo:
- Principal en **presente** o futuro:
| simultáneo → presente: Penso che sia vero.
| anterior → passato: Penso che abbia mentito.
- Principal en **pasado** o condicional:
| simultáneo → imperfetto: Pensavo che fosse vero.
| anterior → trapassato: Pensavo che avesse mentito.
| Vorrei che i giornalisti verificassero le notizie.

## Congiuntivo en relativas y tras superlativos
| È il miglior articolo che io abbia mai letto.
| Cerco un giornale che sia davvero indipendente.

## Juicios impersonales
| È essenziale / importante / normale / un peccato / scandaloso che + congiuntivo
| È essenziale che i cittadini sappiano la verità.

## El condicional de la información no confirmada
La prensa usa el **condizionale** para distanciarse de lo que cuenta:
| Il ministro si sarebbe dimesso.        Al parecer, el ministro ha dimitido.
| Secondo fonti vicine, ci sarebbero dieci feriti.
`, e: [
      mc(3, "Completa: «Penso che ieri il sindaco ___.»", ["abbia mentito", "ha mentito", "mentisse", "avesse mentito"], "Principal en presente + anterior → congiuntivo passato."),
      mc(3, "Completa: «Pensavo che la notizia ___ vera.»", ["fosse", "sia", "è", "sarà"], "Principal en pasado + simultáneo → imperfetto."),
      mc(3, "Completa: «Credevo che tu ___ già ___ l'articolo.»", ["avessi … letto", "abbia … letto", "hai … letto", "avresti … leggere"], "Principal en pasado + anterior → trapassato."),
      mc(3, "Completa: «È il miglior reportage che io ___ mai ___.»", ["abbia … visto", "ho … visto", "avrei … visto", "avevo … vedere"], "Tras superlativo, congiuntivo."),
      mc(3, "«Il sindaco si sarebbe dimesso» significa…", ["Al parecer, el alcalde ha dimitido", "El alcalde dimitiría si pudiera", "El alcalde debería dimitir", "El alcalde había dimitido"], "Condicional periodístico."),
      tx(3, "Completa con «sapere»: «È essenziale che i cittadini ___ la verità.»", ["sappiano"], "sapere → che sappiano."),
      mc(3, "Completa: «Vorrei che i giornalisti ___ le fonti.»", ["verificassero", "verifichino", "verificano", "verificherebbero"], "Condicional en la principal → imperfetto."),
      tx(3, "Completa con «essere»: «Cerco un giornale che ___ davvero indipendente.»", ["sia"], "Algo buscado y no conocido: congiuntivo.")] },
    d: { t: "Il sindaco respinge le accuse", l: [
      ["Text", "Il sindaco di Villanova ha respinto ieri, durante una conferenza stampa, le accuse secondo cui avrebbe favorito alcuni amici nella costruzione del nuovo stadio. «Mi dispiace che simili voci siano state pubblicate senza alcuna verifica», ha dichiarato.", "El alcalde de Villanova rechazó ayer, en una rueda de prensa, las acusaciones según las cuales habría favorecido a algunos amigos en la construcción del nuevo estadio. «Lamento que se hayan publicado tales rumores sin verificación alguna», declaró."],
      ["Text", "Secondo un quotidiano locale, l'appalto sarebbe stato assegnato senza gara a un'impresa il cui titolare sarebbe vicino al sindaco. I costi sarebbero aumentati del quaranta per cento.", "Según un diario local, la obra se habría adjudicado sin concurso a una empresa cuyo titular sería allegado del alcalde. Los costes habrían aumentado un cuarenta por ciento."],
      ["Text", "Il sindaco ha affermato che tutte le decisioni erano state prese dal consiglio comunale e che lui non aveva partecipato al voto. Ha però ammesso di incontrare l'imprenditore «ogni tanto, in palestra».", "El alcalde afirmó que todas las decisiones las había tomado el pleno y que él no había participado en la votación. Admitió, sin embargo, que se ve con el empresario «de vez en cuando, en el gimnasio»."],
      ["Text", "L'opposizione dubita che queste spiegazioni siano sufficienti. La sua portavoce chiede che venga aperta un'indagine indipendente: «È fondamentale che i cittadini sappiano come viene speso il loro denaro». Il sindaco ha annunciato che avrebbe reso pubblici tutti i documenti.", "La oposición duda de que estas explicaciones sean suficientes. Su portavoz pide que se abra una investigación independiente: «Es fundamental que los ciudadanos sepan cómo se gasta su dinero». El alcalde anunció que haría públicos todos los documentos."]],
      q: [
        mc(3, "Di che cosa è accusato il sindaco?", ["Di aver favorito degli amici", "Di aver rubato denaro", "Di aver bloccato lo stadio", "Di aver censurato la stampa"], "«…avrebbe favorito alcuni amici…»"),
        mc(3, "Che cosa dice il sindaco a proposito del voto?", ["Non vi ha partecipato.", "Ha votato contro.", "Non c'è mai stato.", "Era segreto."], "«…lui non aveva partecipato al voto.»"),
        mc(3, "Il sindaco conosce l'imprenditore?", ["Sì, lo incontra ogni tanto in palestra.", "No, per niente.", "Sì, sono parenti.", "Si rifiuta di rispondere."], "«…ogni tanto, in palestra».") ,
        mc(3, "Che cosa chiede l'opposizione?", ["Un'indagine indipendente", "Le dimissioni del consiglio", "La demolizione dello stadio", "Nuove elezioni"], "«…che venga aperta un'indagine indipendente…»")] },
    w: { c: "Escribe un comentario de unas 150 palabras sobre una noticia dudosa o polémica: qué se cuenta, qué no está confirmado y qué opinas. Usa el condicional periodístico, el congiuntivo passato o trapassato y al menos tres expresiones de juicio o duda.", m: "Secondo alcuni siti, una grande casa farmaceutica avrebbe nascosto i risultati di uno studio su uno dei suoi farmaci. Tre ricercatori sarebbero stati licenziati dopo aver avvertito la direzione. Per il momento nulla è confermato: è possibile che la notizia sia esatta, ma è anche possibile che sia stata distorta. Dubito che i giornalisti abbiano avuto accesso ai documenti originali. Mi sembra che serva prudenza. Detto questo, è scandaloso che l'azienda si rifiuti di rispondere alle domande. Non credo che il silenzio sia una buona strategia. È fondamentale che un'autorità indipendente possa esaminare il caso: è l'unico modo che io conosca per ristabilire la fiducia. Nel frattempo mi dispiace che tante persone abbiano già condiviso la notizia senza verificarla." } },

  { id: "ib2-4", t: "Salute e benessere psicologico", es: "Salud y bienestar psicológico", v: [
    ["il benessere psicologico", "el bienestar psicológico"], ["l'esaurimento", "el agotamiento"], ["il sovraccarico", "la sobrecarga"], ["il recupero", "la recuperación"], ["l'insonnia", "el insomnio"], ["la dipendenza", "la adicción, la dependencia"], ["dipendente da", "dependiente de"],
    ["la cura", "el tratamiento"], ["la terapia", "la terapia"], ["la prevenzione", "la prevención"], ["l'effetto collaterale", "el efecto secundario"], ["il sistema immunitario", "el sistema inmunitario"], ["l'infiammazione", "la inflamación"], ["cronico", "crónico"],
    ["la diagnosi", "el diagnóstico"], ["i sintomi", "los síntomas"], ["alleviare", "aliviar"], ["guarire", "curarse, curar"], ["prevenire", "prevenir"], ["la mutua", "la seguridad social (coloquial)"], ["la consapevolezza", "la conciencia, la atención plena"],
    ["l'equilibrio", "el equilibrio"], ["la resistenza", "la resistencia"], ["la ripercussione", "la repercusión"], ["nuocere", "perjudicar"], ["favorire", "favorecer"], ["l'atteggiamento", "la actitud"], ["la malattia", "la enfermedad; la baja"]],
    g: { t: "El periodo ipotetico del pasado: rimpianti y reproches", n: `
## El condizionale passato
**avere / essere** en condicional + participio:
| avrei fatto · avresti visto · sarebbe venuta · avremmo potuto · si sarebbero riposati

## La hipótesis sobre el pasado
**se + congiuntivo trapassato → condizionale passato**: algo que no ocurrió.
| Se fossi andato prima dal medico, sarei guarito prima.
| Se non si fosse ammalata, sarebbe partita.
Condición pasada con consecuencia presente (condizionale presente):
| Se avessi dormito di più, oggi sarei in forma.
> Igual que en español («si hubiera…, habría…»). Al hablar se oye a veces «se lo sapevo, venivo» (imperfetto en las dos partes): es coloquial; en el examen, la forma completa.

## Lamentarse
| Avrei dovuto riposarmi.            Tendría que haber descansado.
| Avrei potuto chiedere aiuto.       Podría haber pedido ayuda.
| Mi sarebbe piaciuto avere più tempo.
| Se solo avessi ascoltato il medico!

## Reprochar
| Avresti potuto avvisarmi!          ¡Podrías haberme avisado!
| Avreste dovuto parlarne prima.

## come se
Siempre con congiuntivo imperfetto o trapassato:
| Lavora come se non fosse malato.      Ha fatto come se non avesse sentito niente.
`, e: [
      mc(3, "Completa: «Se l'avessi saputo, ___ prima.»", ["sarei venuto", "verrei", "ero venuto", "sarò venuto"], "se + trapassato → condizionale passato."),
      mc(3, "Completa: «Se ___ la cura, sarebbe guarita.»", ["avesse seguito", "avrebbe seguito", "ha seguito", "seguirebbe"], "Tras «se», congiuntivo trapassato."),
      mc(3, "«Tendría que haber descansado» se dice…", ["Avrei dovuto riposarmi.", "Dovrei riposarmi.", "Avevo dovuto riposarmi.", "Avrò dovuto riposarmi."], "Condizionale passato de dovere + infinitivo."),
      mc(3, "«Avresti potuto avvisarmi!» expresa…", ["Un reproche", "Un permiso", "Una promesa", "Una orden"], "Condizionale passato de potere: reproche."),
      tx(3, "Completa con «essere»: «Se avessi dormito di più, oggi ___ in forma.»", ["sarei"], "Consecuencia presente: condizionale presente."),
      mc(3, "Completa: «Si comporta come se ___ tutto.»", ["sapesse", "sa", "saprebbe", "sappia"], "come se + congiuntivo imperfetto."),
      mc(3, "¿Qué frase es correcta en registro estándar?", ["Se avessi avuto tempo, avrei fatto sport.", "Se avrei avuto tempo, avrei fatto sport.", "Se avessi avuto tempo, avevo fatto sport.", "Se ho avuto tempo, avrei fatto sport."], "Nunca condicional tras «se»."),
      tx(3, "Completa: «Mi ___ piaciuto avere più tempo.»", ["sarebbe"], "piacere lleva essere: sarebbe piaciuto.")] },
    d: { t: "Avrei dovuto fermarmi prima", l: [
      ["Giornalista", "Chiara, due anni fa ha avuto un burnout. Com'è cominciato?", "Chiara, hace dos años sufrió un burnout. ¿Cómo empezó?"],
      ["Chiara", "Con l'insonnia. Dormivo quattro ore a notte e lavoravo come se niente fosse.", "Con insomnio. Dormía cuatro horas por noche y trabajaba como si nada."],
      ["Giornalista", "Non è andata dal medico?", "¿No fue al médico?"],
      ["Chiara", "No, ed è il mio più grande rimpianto. Se fossi andata dal medico ai primi sintomi, non sarei rimasta in malattia otto mesi.", "No, y es lo que más lamento. Si hubiera ido al médico con los primeros síntomas, no habría estado ocho meses de baja."],
      ["Giornalista", "Chi le stava vicino aveva notato qualcosa?", "¿Su entorno había notado algo?"],
      ["Chiara", "Mio marito mi diceva che avrei dovuto rallentare. Ma io pensavo che l'azienda non potesse funzionare senza di me.", "Mi marido me decía que debería haber bajado el ritmo. Pero yo pensaba que la empresa no podía funcionar sin mí."],
      ["Giornalista", "E il suo datore di lavoro?", "¿Y su empresa?"],
      ["Chiara", "La mia responsabile avrebbe potuto ridurre il mio carico di lavoro. Non l'ha fatto, ma io non le avevo mai detto di essere esausta.", "Mi responsable podría haber reducido mi carga de trabajo. No lo hizo, pero yo nunca le había dicho que estaba agotada."],
      ["Giornalista", "Che cosa farebbe diversamente oggi?", "¿Qué haría hoy de otra manera?"],
      ["Chiara", "Ne avrei parlato prima. Oggi lavoro all'ottanta per cento e ho imparato a dire di no.", "Habría hablado antes. Hoy trabajo al ochenta por ciento y he aprendido a decir que no."]],
      q: [
        mc(3, "Qual è stato il primo sintomo di Chiara?", ["L'insonnia", "Il mal di schiena", "La febbre", "La perdita di peso"], "«Con l'insonnia.»"),
        mc(3, "Che cosa rimpiange di più?", ["Di non essere andata subito dal medico", "Di aver cambiato azienda", "Di essersi messa in malattia", "Di aver parlato con la responsabile"], "«…ed è il mio più grande rimpianto.»"),
        mc(3, "Quanto è durata la malattia?", ["Otto mesi", "Due anni", "Quattro settimane", "Due mesi"], "«…in malattia otto mesi.»"),
        mc(3, "Perché la responsabile non ha cambiato niente?", ["Chiara non le aveva detto di essere esausta.", "Voleva licenziarla.", "Mancava personale.", "Era in ferie."], "«…io non le avevo mai detto di essere esausta.»")] },
    w: { c: "Piensa en un periodo en que te exigiste demasiado. Escribe unas 150 palabras: qué pasó, qué habrías debido hacer, qué habría pasado si… y qué haces ahora de otro modo.", m: "Tre anni fa ho preparato un concorso mentre lavoravo a tempo pieno. Dormivo poco, non vedevo più gli amici e facevo come se tutto andasse bene. Risultato: mi sono ammalata una settimana prima della prova. Con il senno di poi, avrei dovuto organizzarmi diversamente. Se avessi chiesto un part-time, avrei potuto studiare senza esaurirmi. Avrei dovuto anche ascoltare mia sorella, che mi ripeteva di fare delle pause. Se avessi dormito di più, avrei sicuramente memorizzato meglio. Mi dispiace soprattutto di non aver parlato delle mie difficoltà con la mia responsabile: avrebbe capito. Oggi non rifarei lo stesso errore. Pianifico le settimane, faccio sport e tengo sempre una sera libera. Se non avessi vissuto quell'esperienza, non conoscerei i miei limiti." } },

  { id: "ib2-5", t: "Migrazioni e globalizzazione", es: "Migración y globalización", v: [
    ["la globalizzazione", "la globalización"], ["l'immigrazione", "la inmigración"], ["l'emigrazione", "la emigración"], ["il rifugiato", "el refugiado"], ["fuggire", "huir"], ["l'asilo", "el asilo"], ["l'integrazione", "la integración"],
    ["integrarsi", "integrarse"], ["la cittadinanza", "la ciudadanía, la nacionalidad"], ["il permesso di soggiorno", "el permiso de residencia"], ["la questura", "la jefatura de policía (extranjería)"], ["la pratica", "el trámite"], ["presentare domanda", "presentar una solicitud"], ["le origini", "los orígenes"],
    ["la diversità", "la diversidad"], ["la discriminazione", "la discriminación"], ["svantaggiare", "perjudicar"], ["le pari opportunità", "la igualdad de oportunidades"], ["la prosperità", "la prosperidad"], ["il commercio", "el comercio"], ["il confine", "la frontera"],
    ["la dipendenza economica", "la dependencia económica"], ["la coesione", "la cohesión"], ["il malinteso", "el malentendido"], ["adattarsi", "adaptarse"], ["l'appartenenza", "la pertenencia"], ["pentirsi", "arrepentirse"], ["mancare", "faltar; echar de menos"]],
    g: { t: "Expresar el tiempo: futuro anteriore, infinitivo pasado y participio", n: `
## El futuro anteriore
**avere / essere** en futuro + participio: una acción futura terminada antes que otra.
| Quando avrò ottenuto il permesso di soggiorno, cercherò lavoro.
| Appena sarai arrivato, chiamami.
Tras **quando, appena, dopo che** con idea de futuro, futuro o futuro anteriore (no congiuntivo, a diferencia del español).
También expresa suposición sobre el pasado: Sarà già partito. (Ya se habrá ido.)

## Después: dopo + infinitivo pasado
Con el mismo sujeto: **dopo aver / dopo essere** + participio.
| Dopo aver lasciato il suo paese, ha vissuto due anni a Genova.
| Dopo essere arrivati, hanno presentato domanda d'asilo.    (concuerda con essere)

## Antes
- Mismo sujeto: **prima di** + infinitivo → Prima di partire, ha venduto la casa.
- Sujetos distintos: **prima che** + congiuntivo → Parlagli prima che parta.
- **finché (non)** (hasta que): Aspetterò finché non torni.

## A la vez
| mentre (mientras) · nel momento in cui (en el momento en que) · gerundio: Ha imparato la lingua lavorando.

## El participio pasado absoluto
Resume una acción anterior, típico del registro escrito:
| Finiti gli studi, è partita per Berlino.        Terminados los estudios, …
| Arrivata in Italia, ha cercato subito un corso.
> «mancare» funciona como «gustar»: **Mi manca la mia famiglia** = Echo de menos a mi familia. · **Mi mancano** gli amici.
`, e: [
      mc(3, "Completa: «Quando ___ la laurea, cercherò lavoro.»", ["avrò preso", "abbia preso", "prenderei", "avevo preso"], "Acción futura anterior: futuro anteriore."),
      mc(3, "Completa: «Dopo ___ il suo paese, ha vissuto a Genova.»", ["aver lasciato", "lasciare", "aver lasciare", "essere lasciato"], "dopo + infinitivo pasado; «lasciare» lleva avere."),
      mc(3, "Completa: «Dopo ___, hanno cercato casa.»", ["essere arrivati", "aver arrivato", "essere arrivato", "arrivare"], "«arrivare» lleva essere y concuerda."),
      mc(3, "Completa: «Chiamami prima che io ___.»", ["parta", "parto", "partirò", "sono partito"], "prima che + congiuntivo."),
      tx(3, "Completa: «___ di partire, ha venduto la casa.» (antes)", ["Prima"], "Mismo sujeto: prima di + infinitivo."),
      mc(3, "«Mi manca il mio paese» significa…", ["Echo de menos mi país", "Mi país me echa de menos", "Me falta un país", "Mi país me decepciona"], "El sujeto de «mancare» es lo que se echa de menos."),
      mc(3, "«Finiti gli studi, è partita» equivale a…", ["Dopo aver finito gli studi, è partita.", "Prima di finire gli studi, è partita.", "Mentre finiva gli studi, è partita.", "Se finisse gli studi, partirebbe."], "Participio absoluto = después de."),
      tx(3, "Completa con «essere» en futuro: «Appena ___ arrivato, chiamami.» (tú)", ["sarai"], "Futuro anteriore: sarai arrivato.")] },
    d: { t: "Dieci anni dopo", l: [
      ["Giornalista", "Signora Demir, è arrivata da Smirne a Bologna dieci anni fa. Lo rifarebbe?", "Señora Demir, llegó usted de Esmirna a Bolonia hace diez años. ¿Lo volvería a hacer?"],
      ["Sig.ra Demir", "Sì, ma diversamente. Prima di partire avrei dovuto imparare l'italiano.", "Sí, pero de otra manera. Antes de irme tendría que haber aprendido italiano."],
      ["Giornalista", "L'inizio è stato difficile?", "¿El comienzo fue difícil?"],
      ["Sig.ra Demir", "Molto. Dopo essere arrivata, ho passato settimane in questura senza capire quasi niente. Una vicina mi ha aiutata finché non ho ottenuto il permesso di soggiorno.", "Mucho. Después de llegar pasé semanas en la jefatura sin entender casi nada. Una vecina me ayudó hasta que obtuve el permiso de residencia."],
      ["Giornalista", "Il suo titolo di ingegnere è stato riconosciuto?", "¿Le reconocieron el título de ingeniera?"],
      ["Sig.ra Demir", "Solo dopo due anni. Mentre aspettavo, lavoravo in un bar e frequentavo corsi serali.", "Solo al cabo de dos años. Mientras esperaba, trabajaba en un bar e iba a clases nocturnas."],
      ["Giornalista", "Ha pensato di tornare?", "¿Pensó en volver?"],
      ["Sig.ra Demir", "Certo. Ma una volta trovato un posto nel mio settore, è cambiato tutto.", "Claro. Pero una vez encontrado un puesto en mi sector, todo cambió."],
      ["Giornalista", "Che cosa le manca di più?", "¿Qué es lo que más echa de menos?"],
      ["Sig.ra Demir", "Il mare e mia madre. Ma quando avrò ottenuto la cittadinanza, mi sentirò a casa in tutti e due i paesi.", "El mar y a mi madre. Pero cuando haya obtenido la ciudadanía, me sentiré en casa en los dos países."]],
      q: [
        mc(3, "Che cosa avrebbe dovuto fare prima di partire?", ["Imparare l'italiano", "Cercare casa", "Tradurre la laurea", "Risparmiare"], "«Prima di partire avrei dovuto imparare l'italiano.»"),
        mc(3, "Chi l'ha aiutata con le pratiche?", ["Una vicina", "Un'impiegata della questura", "Sua madre", "Una collega"], "«Una vicina mi ha aiutata…»"),
        mc(3, "Che cosa faceva mentre aspettava il riconoscimento del titolo?", ["Lavorava in un bar e frequentava corsi serali.", "Era disoccupata.", "Studiava all'università.", "Era tornata a Smirne."], "«…lavoravo in un bar e frequentavo corsi serali.»"),
        mc(3, "Che cosa ha cambiato tutto?", ["Un posto nel suo settore", "Il matrimonio", "La cittadinanza", "Un trasloco"], "«…una volta trovato un posto nel mio settore…»")] },
    w: { c: "Cuenta la historia de alguien que se fue a vivir a otro país en unas 150 palabras. Ordena los hechos con «prima di», «dopo aver / essere», «mentre», un participio absoluto y un futuro anteriore.", m: "Mia zia Lucía ha lasciato Siviglia a venticinque anni. Prima di partire, aveva lavorato tre anni come infermiera. Dopo aver ottenuto una borsa di studio, si è trasferita a Milano. I primi mesi sono stati duri: mentre frequentava i corsi d'italiano la mattina, il pomeriggio faceva le pulizie. Ottenuto il riconoscimento del titolo, ha finalmente potuto esercitare la sua professione. Una volta firmato un contratto stabile, l'ha raggiunta il suo compagno. Essendo cresciuta in una famiglia numerosa, soffriva molto la solitudine; le mancava terribilmente sua madre. Oggi dirige un reparto di pediatria. Dice spesso che tornerà in Spagna quando sarà andata in pensione. Ma appena saranno nati i nipotini, credo che cambierà idea." } },

  { id: "ib2-6", t: "Lingua e cultura", es: "Lengua y cultura", v: [
    ["la lingua madre", "la lengua materna"], ["la lingua straniera", "la lengua extranjera"], ["il plurilinguismo", "el plurilingüismo"], ["il dialetto", "el dialecto"], ["la pronuncia", "la pronunciación"], ["l'accento", "el acento"], ["il lessico", "el léxico"],
    ["l'espressione", "la expresión"], ["il modo di dire", "la frase hecha"], ["il proverbio", "el refrán"], ["il significato", "el significado"], ["tradurre", "traducir"], ["fare da interprete", "hacer de intérprete"], ["esprimersi", "expresarse"],
    ["correntemente", "con fluidez"], ["la cortesia", "la cortesía"], ["dare del tu", "tutear"], ["dare del Lei", "tratar de usted"], ["il tono", "el tono"], ["la gestualità", "la gestualidad"], ["lo stereotipo", "el estereotipo"],
    ["l'usanza", "la costumbre"], ["il romanzo", "la novela"], ["la poesia", "la poesía"], ["la commedia", "la comedia, la obra de teatro"], ["la rappresentazione", "la representación"], ["l'opera", "la obra; la ópera"], ["il gergo", "la jerga"]],
    g: { t: "Registros, dar del Lei y verbos pronominales idiomáticos", n: `
## Tres registros
$ Coloquial: Che fai stasera? · Boh, non lo so. · Dai, andiamo!
$ Estándar: Che cosa fai stasera? · Non lo so. · Andiamo?
$ Formal: Che cosa intende fare questa sera? · Non saprei dirle. · Vogliamo avviarci?

## Rasgos del registro coloquial
- Interjecciones y muletillas: dai, boh, magari, cioè, tipo, insomma, mica.
- **mica** refuerza la negación: Non è mica facile!
- Vocabulario propio:
| sgobbare (trabajar duro) · i soldi (el dinero) · il tizio (el tipo) · figo / fico (guay)
| un casino (un lío; mucho) · essere fuori di testa (estar loco) · fregarsene (pasar de algo) · averne abbastanza (estar harto)

## Dar del Lei
En italiano el «usted» es **Lei** (tercera persona del singular, femenina incluso para un hombre):
| Come sta? · Si accomodi. · La ringrazio. · Le dispiace se apro la finestra?
Los adjetivos y participios concuerdan con la persona real: «Lei è stato gentile» (a un hombre), «Lei è stata gentile» (a una mujer).
En cartas formales: **Gentile Signora / Egregio Dottore**, … **Distinti saluti / Cordiali saluti**.

## Verbos pronominales idiomáticos
Muy frecuentes en la lengua viva; el sentido no se deduce de sus partes:
| andarsene (irse): Me ne vado. · Se n'è andato.
| farcela (lograrlo): Ce la faccio! · Non ce la faccio più.
| cavarsela (apañárselas): Me la cavo con l'inglese.
| prendersela (enfadarse, ofenderse): Non prendertela!
| metterci (tardar): Ci metto un'ora.
| volerci (hacer falta): Ci vuole pazienza.
| entrarci (tener que ver): Che c'entra?
`, e: [
      mc(3, "¿Qué frase es coloquial?", ["Boh, non lo so, dai.", "Non saprei dirle.", "Non sono in grado di rispondere.", "Mi riservo di verificare."], "«boh» y «dai» son coloquiales."),
      mc(3, "«Non ce la faccio più» significa…", ["Ya no puedo más", "No lo hago más", "No me lo hago", "Ya no lo tengo"], "farcela = lograrlo; en negativo, no poder más."),
      mc(3, "«Me ne vado» significa…", ["Me voy", "Voy a por ello", "Me lo llevo", "No me importa"], "andarsene = irse."),
      mc(3, "Completa con «metterci»: «Quanto ___ per arrivare in centro?» (tú)", ["ci metti", "ti metti", "metti", "ne metti"], "metterci = tardar."),
      mc(3, "A un señor de usted: «Lei è stato molto ___.»", ["gentile", "gentila", "gentili", "gentilmente"], "«gentile» no cambia en singular."),
      tx(3, "Completa: «Non è ___ facile!» (refuerzo coloquial de la negación)", ["mica"], "mica refuerza la negación."),
      mc(3, "«Che c'entra?» significa…", ["¿Qué tiene que ver?", "¿Quién entra?", "¿Qué hay dentro?", "¿Por qué entras?"], "entrarci = tener que ver."),
      mc(3, "Saludo adecuado en una carta formal a un médico:", ["Egregio Dottore,", "Ciao dottore,", "Caro dottorino,", "Ehi dottore,"], "Egregio / Gentile + título.")] },
    d: { t: "Tu o Lei?", l: [
      ["Marco", "Senti, Camilla, posso farti una domanda? Al lavoro si dà del tu o del Lei?", "Oye, Camilla, ¿puedo hacerte una pregunta? En el trabajo, ¿se tutea o se trata de usted?"],
      ["Camilla", "Bella domanda! Neanche noi italiani siamo sempre sicuri.", "¡Buena pregunta! Ni siquiera los italianos estamos siempre seguros."],
      ["Marco", "Ieri ho dato del tu al nuovo direttore. Mi ha guardato in modo strano.", "Ayer tuteé al nuevo director. Me miró de forma rara."],
      ["Camilla", "Ahi. Non gli sarà piaciuto. Nella tua azienda, a quanto pare, ci si dà ancora del Lei.", "Ay. No le habrá gustado. En tu empresa, por lo visto, todavía se tratan de usted."],
      ["Marco", "Ma i colleghi si danno tutti del tu!", "¡Pero si los compañeros se tutean todos!"],
      ["Camilla", "Tra di loro sì. Con un superiore si aspetta che sia lui a proporlo. È una regola che nessuno ha scritto, ma che tutti conoscono.", "Entre ellos sí. Con un superior se espera a que sea él quien lo proponga. Es una regla que nadie ha escrito, pero que todos conocen."],
      ["Marco", "Mi avrà preso per un maleducato.", "Me habrá tomado por un maleducado."],
      ["Camilla", "Ma no, dai, non prendertela. Avrà capito che non sei italiano. Scusati e basta.", "Que no, hombre, no te lo tomes a mal. Se habrá dado cuenta de que no eres italiano. Discúlpate y ya está."],
      ["Marco", "E che cosa gli dico?", "¿Y qué le digo?"],
      ["Camilla", "Qualcosa come: «Mi scusi, non volevo mancarLe di rispetto». E mi raccomando, niente «ciao»!", "Algo como: «Disculpe, no quería faltarle al respeto». Y sobre todo, ¡nada de «ciao»!"]],
      q: [
        mc(3, "Che cosa ha fatto Marco ieri?", ["Ha dato del tu al direttore.", "Ha criticato il direttore.", "Ha dato del Lei a un collega.", "Si è licenziato."], "«…ho dato del tu al nuovo direttore.»"),
        mc(3, "Che cosa suppone Camilla dell'azienda di Marco?", ["Che ci si dia ancora del Lei", "Che tutti si diano del tu", "Che il direttore sia severo", "Che Marco sarà licenziato"], "«…ci si dà ancora del Lei.»"),
        mc(3, "Qual è la regola non scritta?", ["Si aspetta che il superiore proponga il tu.", "Si dà del Lei a tutti i colleghi.", "Si dà del tu solo agli anziani.", "Si chiede il primo giorno."], "«…si aspetta che sia lui a proporlo.»"),
        mc(3, "Che cosa consiglia Camilla?", ["Di scusarsi semplicemente", "Di continuare a dare del tu", "Di cambiare azienda", "Di non dire niente"], "«Scusati e basta.»")] },
    w: { c: "Escribe el mismo mensaje dos veces (unas 70 palabras cada uno): cancelas una cita porque estás enfermo. Primero a un amigo, en registro coloquial; después a un cliente o a tu jefe, en registro formal.", m: "A un amico:\nCiao Tommi! Scusa, stasera non ce la faccio a venire, sono distrutto e ho la febbre. Ho sgobbato tutta la settimana e adesso non ne posso più. Facciamo sabato? Ti chiamo domani. Dai, buona serata e salutami tutti!\n\nA un cliente:\nGentile Dottor Bianchi,\nmi vedo costretta ad annullare il nostro appuntamento di questa sera per motivi di salute. La prego di scusarmi per il disagio. Sarebbe disponibile sabato mattina? Mi permetterò di richiamarLa domani per fissare una nuova data.\nCordiali saluti,\nAna Ruiz" } },
] });
