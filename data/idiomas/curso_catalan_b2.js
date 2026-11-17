// Curso de catalán · nivel B2. Mismo formato que curso_catalan.js (cadenas entre comillas dobles).
CURSO.catalan.push({ id: "B2", nombre: "B2 · Intermedi", desc: "Entender textos complejos, argumentar con matices, cambiar de registro, evitar castellanismos y conversar con fluidez sobre temas de actualidad.", u: [
  { id: "cb2-1", t: "El món laboral", es: "El mundo laboral", v: [
    ["la digitalització", "la digitalización"], ["l'automatització", "la automatización"], ["el mercat laboral", "el mercado laboral"], ["la manca", "la falta, la escasez"], ["l'atur", "el paro"], ["el treballador", "el trabajador"], ["l'empresari", "el empresario"],
    ["el sindicat", "el sindicato"], ["el conveni col·lectiu", "el convenio colectivo"], ["la vaga", "la huelga"], ["conciliar", "conciliar"], ["la flexibilitat", "la flexibilidad"], ["el teletreball", "el teletrabajo"], ["el rendiment", "el rendimiento"],
    ["la pressió", "la presión"], ["la càrrega de feina", "la carga de trabajo"], ["l'acomiadament", "el despido"], ["el contracte temporal", "el contrato temporal"], ["el contracte indefinit", "el contrato indefinido"], ["l'ascens", "el ascenso"], ["el directiu", "el directivo"],
    ["emprendre", "emprender"], ["la competència", "la competencia"], ["la qualificació", "la cualificación"], ["formar-se", "formarse"], ["la jubilació", "la jubilación"], ["contractar", "contratar"], ["la precarietat", "la precariedad"]],
    g: { t: "Concesión y oposición", n: `
## La concesión
- Con **indicativo** (hecho real): **encara que, tot i que, malgrat que, si bé** → Tot i que està qualificat, no troba feina.
- Con **subjuntivo** (hipótesis o hecho que no importa): **encara que, per més que, per molt que** → Encara que plogui, hi anirem.
- Con nombre o infinitivo: **malgrat** + nombre · **tot i** + nombre o infinitivo → Malgrat la crisi… · Tot i tenir experiència, no el van contractar.
- Con gerundio: **tot** + gerundio → Tot sabent-ho, no va dir res.
- Adverbios: **tanmateix, però, no obstant això, així i tot** → Està qualificat. Tanmateix, no troba feina.
> «A pesar de» se dice **malgrat** o **tot i**, no «a pesar de» (castellanismo).

## La oposición
| mentre que (mientras que) · en canvi (en cambio) · al contrari · a diferència de
| Ella teletreballa, mentre que el seu marit va a l'oficina.

## Argumentar con matices
| És cert que… però · D'una banda… de l'altra · Sigui com sigui · Ara bé · No és que + subjuntivo
| És cert que el teletreball és còmode, però aïlla.
`, e: [
      mc(3, "Completa: «___ està molt qualificat, és a l'atur.» (hecho real)", ["Tot i que", "Per més que", "Malgrat", "Tot i"], "Hecho real con verbo conjugado: tot i que + indicativo."),
      mc(3, "Completa: «___ la crisi, l'empresa ha crescut.»", ["Malgrat", "Tot i que", "Encara que", "Per més que"], "Con nombre: malgrat."),
      mc(3, "Completa: «___ tenir experiència, no el van contractar.»", ["Tot i", "Tot i que", "Malgrat que", "Encara"], "tot i + infinitivo."),
      mc(3, "Completa: «Per més que ___, no troba feina.»", ["busqui", "busca", "buscarà", "buscava"], "per més que + subjuntivo."),
      tx(3, "Completa: «Està qualificat. ___, no troba feina.» (sin embargo)", ["Tanmateix", "No obstant això", "Així i tot"], "Adverbio concesivo."),
      mc(3, "¿Cómo se dice «a pesar de la lluvia» en buen catalán?", ["malgrat la pluja", "a pesar de la pluja", "a pesar la pluja", "malgrat de la pluja"], "malgrat + nombre."),
      mc(3, "Completa: «Ella teletreballa, ___ el seu marit va a l'oficina.»", ["mentre que", "malgrat", "tot i", "per més que"], "Contraste: mentre que."),
      tx(3, "Completa: «És ___ que el teletreball és còmode, però aïlla.»", ["cert"], "És cert que… però.")] },
    d: { t: "Treballar on i quan es vulgui?", l: [
      ["Text", "El món laboral canvia més de pressa que mai. La digitalització i la manca de personal qualificat obliguen les empreses a replantejar-se els seus hàbits. Tanmateix, no totes hi estan disposades.", "El mundo laboral cambia más deprisa que nunca. La digitalización y la falta de personal cualificado obligan a las empresas a replantearse sus hábitos. Sin embargo, no todas están dispuestas."],
      ["Text", "Avui molts treballadors no només demanen un bon sou, sinó també horaris flexibles. Mentre que els seus pares acceptaven passar deu hores al dia a l'oficina, els joves titulats es neguen a sacrificar la vida privada.", "Hoy muchos trabajadores no solo piden un buen sueldo, sino también horarios flexibles. Mientras que sus padres aceptaban pasar diez horas diarias en la oficina, los jóvenes titulados se niegan a sacrificar su vida privada."],
      ["Text", "Per més avantatges que tingui, el teletreball també comporta riscos. És cert que s'estalvia el trajecte; ara bé, la frontera entre feina i lleure es difumina. Tot i que la majoria de teletreballadors se'n declaren satisfets, un de cada tres admet que treballa més que abans.", "Por muchas ventajas que tenga, el teletrabajo también conlleva riesgos. Es cierto que se ahorra el trayecto; ahora bien, la frontera entre trabajo y ocio se difumina. Aunque la mayoría de los teletrabajadores se declaran satisfechos, uno de cada tres admite que trabaja más que antes."],
      ["Text", "Malgrat aquestes dificultats, pocs voldrien tornar enrere. Els experts recomanen, doncs, normes clares: encara que cadascú organitzi la seva jornada, ningú no hauria d'estar localitzable sempre.", "A pesar de estas dificultades, pocos querrían volver atrás. Por eso los expertos recomiendan normas claras: aunque cada uno organice su jornada, nadie debería estar siempre localizable."]],
      q: [
        mc(3, "Què obliga les empreses a canviar?", ["La digitalització i la manca de personal qualificat", "Les vagues", "La pujada de sous", "La jubilació dels directius"], "Primer párrafo."),
        mc(3, "En què es diferencien els joves titulats dels seus pares?", ["Es neguen a sacrificar la vida privada.", "Volen guanyar molt més.", "Prefereixen l'oficina.", "Canvien poc d'empresa."], "«…es neguen a sacrificar la vida privada.»"),
        mc(3, "Què admet un de cada tres teletreballadors?", ["Que treballa més que abans", "Que guanya menys", "Que enyora l'oficina", "Que ha perdut companys"], "«…treballa més que abans.»"),
        mc(3, "Què recomanen els experts?", ["Normes clares sobre la disponibilitat", "Tornar tots a l'oficina", "Jornades més llargues", "Més control"], "«…ningú no hauria d'estar localitzable sempre.»")] },
    w: { c: "¿Teletrabajo sí o no? Escribe una opinión argumentada de unas 150 palabras con ventajas, inconvenientes y tu conclusión. Usa al menos cinco conectores de concesión u oposición.", m: "Al meu parer, el teletreball no és ni una solució miraculosa ni un perill. És cert que permet estalviar temps i diners, ja que desapareix el trajecte; ara bé, molts treballadors pateixen la manca de contacte amb els companys. Tot i que a casa sovint ens concentrem més, no tothom disposa d'un espai tranquil. Per més que alguns es fixin un horari, acaben responent correus al vespre. Mentre que els directius valoren aquesta llibertat, les persones que acaben d'entrar necessiten acompanyament. Malgrat aquests límits, no voldria tornar enrere. Defenso, doncs, un model mixt: encara que cadascú organitzi la setmana, dos dies a l'oficina són imprescindibles. Sigui com sigui, la flexibilitat no ha de significar estar sempre disponible." } },

  { id: "cb2-2", t: "Ciència i tecnologia", es: "Ciencia y tecnología", v: [
    ["la recerca", "la investigación"], ["l'investigador", "el investigador"], ["la ciència", "la ciencia"], ["l'estudi", "el estudio"], ["el resultat", "el resultado"], ["l'experiment", "el experimento"], ["l'anàlisi", "el análisis"],
    ["examinar", "examinar"], ["demostrar", "demostrar"], ["la prova", "la prueba"], ["el descobriment", "el descubrimiento"], ["l'invent", "el invento"], ["desenvolupar", "desarrollar"], ["el progrés", "el progreso"],
    ["la intel·ligència artificial", "la inteligencia artificial"], ["processar", "procesar"], ["mesurar", "medir"], ["el mètode", "el método"], ["la hipòtesi", "la hipótesis"], ["confirmar", "confirmar"], ["refutar", "refutar"],
    ["la causa", "la causa"], ["l'efecte", "el efecto"], ["la conseqüència", "la consecuencia"], ["el risc", "el riesgo"], ["l'avantatge", "la ventaja"], ["el programari", "el software"], ["preveure", "prever"]],
    g: { t: "Impersonales, pasiva, perífrasis de obligación y nominalización", n: `
## Formas impersonales
| es + verbo (concordado): Es processen les dades en poques hores.
| hom (formal) / la gent / un: Hom diu que… (se dice que…)
| ser + participio (pasiva, formal): Les dades van ser analitzades pels investigadors.

## Las perífrasis de obligación
| haver de + infinitivo (obligación personal): He d'enviar l'informe.
| caldre (impersonal: hacer falta): Cal revisar les dades. · Cal que ho revisem.
| s'ha de + infinitivo (impersonal): S'ha de verificar cada resultat.
> Evita «tenir que» y «hi ha que» (castellanismos). Lo correcto: «he de», «cal», «s'ha de».

## Adjetivos en -ble
Indican posibilidad pasiva: previsible, comprensible, evitable, inevitable, incomprensible, realitzable.

## La nominalización
Los textos formales y los titulares convierten verbos en nombres:
| Els preus augmenten. → L'augment dels preus.
| Els investigadors han descobert una vacuna. → Descoberta d'una vacuna.
Sufijos frecuentes:
$ -ció / -sió (femenino): crear → la creació · decidir → la decisió
$ -ment (masculino): desenvolupar → el desenvolupament
$ sin sufijo: augmentar → l'augment · descobrir → el descobriment o la descoberta
> Ojo a los géneros distintos del castellano: **l'anàlisi** (femenino), **la dent**, **el senyal**, **la suor**, **el costum**, **les postres**.
`, e: [
      mc(3, "Completa: «___ revisar les dades abans de publicar-les.» (hace falta)", ["Cal", "Hi ha que", "Té que", "Hem que"], "Impersonal correcto: cal + infinitivo."),
      mc(3, "¿Cuál es la forma correcta de «tengo que»?", ["He de", "Tinc que", "Tinc de que", "Hi ha que"], "Obligación personal: haver de."),
      mc(3, "Completa: «En aquest laboratori ___ fàrmacs nous.»", ["es desenvolupen", "es desenvolupa", "desenvolupen es", "es desenvolupats"], "es + verbo concordado con el plural."),
      mc(3, "Completa (se puede prever): «Les conseqüències eren ___.»", ["previsibles", "previstes", "preveients", "prevebles"], "preveure → previsible."),
      tx(3, "Nominaliza: «desenvolupar» → «el ___»", ["desenvolupament"], "-ment."),
      mc(3, "Nominaliza: «Els preus augmenten.»", ["L'augment dels preus", "L'augmentació dels preus", "L'augmentament dels preus", "Els preus augmentant"], "augmentar → l'augment."),
      mc(3, "¿Qué género tiene «anàlisi» en catalán?", ["Femenino: l'anàlisi és llarga", "Masculino: l'anàlisi és llarg", "Neutro", "Depende del contexto"], "En catalán, l'anàlisi es femenino."),
      tx(3, "Completa (impersonal): «___ ha de verificar cada resultat.»", ["S'"], "s'ha de + infinitivo.")] },
    d: { t: "Màquines que aprenen", l: [
      ["Text", "La intel·ligència artificial s'ha imposat en la recerca. Quantitats enormes de dades, que abans requerien anys de feina, avui es processen en poques hores.", "La inteligencia artificial se ha impuesto en la investigación. Enormes cantidades de datos, que antes requerían años de trabajo, hoy se procesan en pocas horas."],
      ["Text", "En medicina, per exemple, alguns tumors ja són detectats en radiografies per programes específics, sovint abans que per l'ull humà. També el desenvolupament de fàrmacs nous es podria accelerar.", "En medicina, por ejemplo, algunos tumores ya son detectados en radiografías por programas específicos, a menudo antes que por el ojo humano. También el desarrollo de nuevos fármacos podría acelerarse."],
      ["Text", "Però aquesta tecnologia té límits. La manera com un programa arriba al resultat sovint és incomprensible, fins i tot per als especialistes. Els errors de les dades es detecten amb dificultat i les seves conseqüències no sempre són previsibles.", "Pero esta tecnología tiene límites. La manera en que un programa llega al resultado a menudo es incomprensible, incluso para los especialistas. Los errores de los datos se detectan con dificultad y sus consecuencias no siempre son previsibles."],
      ["Text", "Per això molts investigadors demanen que les decisions importants no es deixin només en mans de les màquines. Segons ells, la responsabilitat no es pot delegar: ha de continuar sent humana.", "Por eso muchos investigadores piden que las decisiones importantes no se dejen solo en manos de las máquinas. Según ellos, la responsabilidad no se puede delegar: debe seguir siendo humana."]],
      q: [
        mc(3, "Què ha canviat en l'anàlisi de dades?", ["És molt més ràpida.", "És més cara.", "Només la fan persones.", "Ja no cal."], "«…avui es processen en poques hores.»"),
        mc(3, "Quin exemple de medicina dóna el text?", ["Programes que detecten tumors en radiografies", "Robots que operen sols", "Ordinadors que substitueixen infermers", "Fàrmacs més barats"], "Segundo párrafo."),
        mc(3, "Quin problema s'esmenta?", ["No sempre s'entén com s'obté el resultat.", "Els programes són lents.", "Falten dades.", "És massa cara."], "«…sovint és incomprensible…»"),
        mc(3, "Què demanen molts investigadors?", ["Que la responsabilitat continuï sent humana", "Que s'aturi la recerca", "Que decideixin les màquines", "Que es recullin més dades"], "Último párrafo.")] },
    w: { c: "Elige un avance tecnológico y escribe unas 150 palabras: qué permite, qué riesgos tiene y qué habría que regular. Usa formas impersonales, «cal» o «s'ha de», un adjetivo en -ble y tres nominalizaciones.", m: "El cotxe autònom podria transformar la nostra vida quotidiana. Avui dia moltes funcions ja són gestionades per programari, i la major part dels accidents, causats per errors humans, serien evitables. A més, el desenvolupament d'aquests vehicles permetria a la gent gran continuar sent autònoma. Tanmateix, no se n'han de menysprear els riscos. Cap sistema no és infal·lible i la reacció d'un programa en una situació perillosa és imprevisible. Tampoc no es resol fàcilment la qüestió de la responsabilitat en cas d'accident. Per això, abans de la posada en circulació d'aquests cotxes, cal aprovar lleis precises. Les dades s'haurien de registrar i ser controlades per organismes independents. Sense aquesta transparència, la confiança de la ciutadania no s'aconseguirà." } },

  { id: "cb2-3", t: "Mitjans i opinió pública", es: "Medios y opinión pública", v: [
    ["la llibertat de premsa", "la libertad de prensa"], ["la censura", "la censura"], ["la cobertura mediàtica", "la cobertura mediática"], ["la redacció", "la redacción"], ["el comunicat", "el comunicado"], ["la declaració", "la declaración"], ["la roda de premsa", "la rueda de prensa"],
    ["el portaveu", "el portavoz"], ["afirmar", "afirmar"], ["remarcar", "subrayar"], ["declarar", "declarar"], ["anunciar", "anunciar"], ["negar", "negar"], ["admetre", "admitir"],
    ["insinuar", "insinuar"], ["criticar", "criticar"], ["el rumor", "el rumor"], ["la notícia falsa", "el bulo"], ["el fet", "el hecho"], ["l'afirmació", "la afirmación"], ["creïble", "creíble"],
    ["suposat", "supuesto"], ["pel que sembla", "por lo visto"], ["l'editorial", "el editorial"], ["l'enquesta", "la encuesta"], ["la majoria", "la mayoría"], ["la minoria", "la minoría"], ["influir en", "influir en"]],
    g: { t: "Subjuntivo perfecto y pluscuamperfecto, correlación de tiempos y condicional de rumor", n: `
## Los cuatro tiempos del subjuntivo
$ present: que sigui · perfet: que hagi estat, que hagi fet
$ imperfet: que fos · plusquamperfet: que hagués estat, que hagués fet
| hagi, hagis, hagi, hàgim, hàgiu, hagin · hagués, haguessis, hagués, haguéssim, haguéssiu, haguessin

## La correlación de tiempos
- Principal en **presente** o futuro:
| simultáneo → present: No crec que sigui veritat.
| anterior → perfet: No crec que hagi mentit.
- Principal en **pasado** o condicional:
| simultáneo → imperfet: No creia que fos veritat.
| anterior → plusquamperfet: No creia que hagués mentit.
| Voldria que els periodistes comprovessin les fonts.

## Subjuntivo en relativas
| És el millor reportatge que he vist mai.        (en catalán, tras superlativo, lo normal es indicativo)
| Busco un diari que sigui independent de debò.   (algo buscado y desconocido: subjuntivo)

## Juicios impersonales
| És important / normal / una llàstima / escandalós que + subjuntivo
| És essencial que la ciutadania sàpiga la veritat.

## El condicional de rumor
La prensa usa el condicional para distanciarse de la información no confirmada:
| L'alcalde hauria dimitit.         Al parecer, el alcalde ha dimitido.
| Segons fonts properes, hi hauria deu ferits.
`, e: [
      mc(3, "Completa: «No crec que ahir l'alcalde ___.»", ["hagi mentit", "ha mentit", "mentís", "hagués mentit"], "Principal en presente + anterior: perfet de subjuntiu."),
      mc(3, "Completa: «No creia que la notícia ___ certa.»", ["fos", "sigui", "és", "serà"], "Principal en pasado + simultáneo: imperfet."),
      mc(3, "Completa: «Pensava que tu no ___ llegit l'article.»", ["havies", "hagis", "has", "hauries"], "Opinión afirmativa en pasado: indicativo (plusquamperfet)."),
      mc(3, "«L'alcalde hauria dimitit» significa…", ["Al parecer, el alcalde ha dimitido", "El alcalde dimitiría si pudiera", "El alcalde debería dimitir", "El alcalde había dimitido"], "Condicional de rumor."),
      tx(3, "Completa con «saber»: «És essencial que la ciutadania ___ la veritat.»", ["sàpiga"], "saber → sàpiga."),
      mc(3, "Completa: «Voldria que els periodistes ___ les fonts.»", ["comprovessin", "comprovin", "comproven", "comprovarien"], "Condicional en la principal: imperfet de subjuntiu."),
      mc(3, "Completa: «Busco un diari que ___ independent de debò.»", ["sigui", "és", "serà", "era"], "Algo buscado y desconocido: subjuntivo."),
      tx(3, "Subjuntivo perfecto de «fer» (ell): «Dubto que ho ___ fet.»", ["hagi"], "hagi fet.")] },
    d: { t: "L'alcalde nega les acusacions", l: [
      ["Text", "L'alcalde de Vilanova va rebutjar ahir, en una roda de premsa, les acusacions segons les quals hauria afavorit uns amics en la construcció del nou estadi. «Lamento que s'hagin publicat aquests rumors sense cap verificació», va declarar.", "El alcalde de Vilanova rechazó ayer, en una rueda de prensa, las acusaciones según las cuales habría favorecido a unos amigos en la construcción del nuevo estadio. «Lamento que se hayan publicado estos rumores sin ninguna verificación», declaró."],
      ["Text", "Segons un diari local, l'obra s'hauria adjudicat sense concurs a una empresa el propietari de la qual seria amic de l'alcalde. Els costos haurien augmentat un quaranta per cent.", "Según un diario local, la obra se habría adjudicado sin concurso a una empresa cuyo propietario sería amigo del alcalde. Los costes habrían aumentado un cuarenta por ciento."],
      ["Text", "L'alcalde va afirmar que totes les decisions les havia pres el ple municipal i que ell no havia participat en la votació. Tanmateix, va admetre que es trobava amb l'empresari «de tant en tant, al gimnàs».", "El alcalde afirmó que todas las decisiones las había tomado el pleno y que él no había participado en la votación. Sin embargo, admitió que se encontraba con el empresario «de vez en cuando, en el gimnasio»."],
      ["Text", "L'oposició dubta que aquestes explicacions siguin suficients. La seva portaveu exigeix que s'obri una investigació independent: «És fonamental que la ciutadania sàpiga com es gasten els seus diners». L'alcalde va anunciar que faria públics tots els documents.", "La oposición duda de que estas explicaciones sean suficientes. Su portavoz exige que se abra una investigación independiente: «Es fundamental que la ciudadanía sepa cómo se gasta su dinero». El alcalde anunció que haría públicos todos los documentos."]],
      q: [
        mc(3, "De què acusen l'alcalde?", ["D'haver afavorit uns amics", "D'haver robat diners", "D'haver aturat l'estadi", "D'haver censurat la premsa"], "«…hauria afavorit uns amics…»"),
        mc(3, "Què diu l'alcalde sobre la votació?", ["Que no hi va participar.", "Que hi va votar en contra.", "Que no es va fer.", "Que va ser secreta."], "«…ell no havia participat en la votació.»"),
        mc(3, "Coneix l'alcalde l'empresari?", ["Sí, s'hi troba de tant en tant al gimnàs.", "No, gens.", "Sí, són parents.", "No ho vol dir."], "«…de tant en tant, al gimnàs.»"),
        mc(3, "Què exigeix l'oposició?", ["Una investigació independent", "La dimissió del ple", "L'enderroc de l'estadi", "Eleccions noves"], "«…que s'obri una investigació independent.»")] },
    w: { c: "Escribe un comentario de unas 150 palabras sobre una noticia dudosa o polémica: qué se cuenta, qué no está confirmado y qué opinas. Usa el condicional de rumor, el subjuntivo perfecto o pluscuamperfecto y al menos tres expresiones de juicio o duda.", m: "Segons alguns webs, una gran empresa farmacèutica hauria amagat els resultats d'un estudi sobre un dels seus medicaments. Tres investigadors haurien estat acomiadats després d'avisar-ne la direcció. De moment no hi ha res confirmat: és possible que la informació sigui certa, però també pot ser que s'hagi deformat. Dubto que els periodistes hagin tingut accés als documents originals. Em sembla que cal prudència. Dit això, és escandalós que l'empresa es negui a respondre les preguntes. No crec que el silenci sigui una bona estratègia. És fonamental que una autoritat independent pugui examinar el cas: és l'única manera de recuperar la confiança. Mentrestant, em sap greu que tanta gent hagi compartit la notícia sense comprovar-la." } },

  { id: "cb2-4", t: "Salut i benestar emocional", es: "Salud y bienestar emocional", v: [
    ["el benestar emocional", "el bienestar emocional"], ["l'esgotament", "el agotamiento"], ["la sobrecàrrega", "la sobrecarga"], ["la recuperació", "la recuperación"], ["l'insomni", "el insomnio"], ["l'addicció", "la adicción"], ["dependent", "dependiente"],
    ["el tractament", "el tratamiento"], ["la teràpia", "la terapia"], ["la prevenció", "la prevención"], ["l'efecte secundari", "el efecto secundario"], ["el sistema immunitari", "el sistema inmunitario"], ["la inflamació", "la inflamación"], ["crònic", "crónico"],
    ["el diagnòstic", "el diagnóstico"], ["els símptomes", "los síntomas"], ["alleujar", "aliviar"], ["guarir-se", "curarse"], ["prevenir", "prevenir"], ["la baixa", "la baja médica"], ["la consciència plena", "la atención plena"],
    ["l'equilibri", "el equilibrio"], ["la resistència", "la resistencia"], ["la repercussió", "la repercusión"], ["perjudicar", "perjudicar"], ["afavorir", "favorecer"], ["l'actitud", "la actitud"], ["la malaltia", "la enfermedad"]],
    g: { t: "Condiciones sobre el pasado: lamentos y reproches", n: `
## El condicional perfet
Dos formas, las dos correctas:
$ hauria fet, hauries fet, hauria fet… (condicional de haver + participio)
$ hagués fet, haguessis fet, hagués fet… (también se usa en la oración principal)

## La hipótesis sobre el pasado
**si + plusquamperfet de subjuntiu → condicional perfet**:
| Si hagués anat abans al metge, m'hauria guarit abans.
| Si no s'hagués posat malalta, hauria marxat de viatge.
Condición pasada con consecuencia presente:
| Si hagués dormit més, ara estaria en forma.
> Nunca condicional tras «si»: «si hauria sabut» es incorrecto. Se dice «si hagués sabut».

## Lamentarse
| Hauria hagut de descansar.          Tendría que haber descansado.
| Hauria pogut demanar ajuda.         Podría haber pedido ayuda.
| M'hauria agradat tenir més temps.
| Tant de bo hagués escoltat el metge!     ¡Ojalá hubiera hecho caso al médico!

## Reprochar
| M'ho hauries pogut dir!             ¡Me lo podrías haber dicho!
| Ho hauríeu d'haver parlat abans.

## com si
Siempre con imperfet o plusquamperfet de subjuntiu:
| Treballa com si no estigués malalt.     Va fer com si no ho hagués sentit.
`, e: [
      mc(3, "Completa: «Si ho hagués sabut, ___ abans.»", ["hauria vingut", "vindria", "havia vingut", "hagi vingut"], "si + plusquamperfet → condicional perfet."),
      mc(3, "Completa: «Si ___ el tractament, s'hauria guarit.»", ["hagués seguit", "hauria seguit", "ha seguit", "seguiria"], "Tras «si», plusquamperfet de subjuntiu."),
      mc(3, "«Tendría que haber descansado» se dice…", ["Hauria hagut de descansar.", "Hauria tingut que descansar.", "Havia de descansar.", "Haurà hagut de descansar."], "haver de en condicional perfet."),
      mc(3, "«M'ho hauries pogut dir!» expresa…", ["Un reproche", "Un permiso", "Una promesa", "Una orden"], "Condicional perfet de poder."),
      tx(3, "Completa: «Si hagués dormit més, ara ___ en forma.»", ["estaria"], "Consecuencia presente: condicional simple."),
      mc(3, "Completa: «Es comporta com si ho ___ tot.»", ["sabés", "sap", "sabria", "sàpiga"], "com si + imperfet de subjuntiu."),
      mc(3, "¿Qué frase es correcta?", ["Si hagués tingut temps, hauria fet esport.", "Si hauria tingut temps, hauria fet esport.", "Si hagués tingut temps, havia fet esport.", "Si he tingut temps, hauria fet esport."], "Nunca condicional tras «si»."),
      tx(3, "Completa: «Tant de bo ___ escoltat el metge!» (jo)", ["hagués"], "tant de bo + plusquamperfet de subjuntiu.")] },
    d: { t: "M'hauria d'haver aturat abans", l: [
      ["Periodista", "Clara, fa dos anys vas tenir una síndrome d'esgotament. Com va començar?", "Clara, hace dos años tuviste un síndrome de agotamiento. ¿Cómo empezó?"],
      ["Clara", "Amb insomni. Dormia quatre hores per nit i treballava com si res.", "Con insomnio. Dormía cuatro horas por noche y trabajaba como si nada."],
      ["Periodista", "No vas anar al metge?", "¿No fuiste al médico?"],
      ["Clara", "No, i és el que més em sap greu. Si hagués anat al metge amb els primers símptomes, no hauria estat vuit mesos de baixa.", "No, y es lo que más lamento. Si hubiera ido al médico con los primeros síntomas, no habría estado ocho meses de baja."],
      ["Periodista", "La gent del teu voltant se'n va adonar?", "¿Tu entorno se dio cuenta?"],
      ["Clara", "El meu marit em deia que hauria d'afluixar. Però jo pensava que l'empresa no podia funcionar sense mi.", "Mi marido me decía que debería aflojar. Pero yo pensaba que la empresa no podía funcionar sin mí."],
      ["Periodista", "I l'empresa?", "¿Y la empresa?"],
      ["Clara", "La meva responsable m'hauria pogut reduir la feina. No ho va fer, però és que jo mai no li havia dit que estava esgotada.", "Mi responsable me podría haber reducido el trabajo. No lo hizo, pero es que yo nunca le había dicho que estaba agotada."],
      ["Periodista", "Què faries diferent avui?", "¿Qué harías hoy de otra manera?"],
      ["Clara", "N'hauria parlat abans. Ara treballo al vuitanta per cent i he après a dir que no.", "Habría hablado antes. Ahora trabajo al ochenta por ciento y he aprendido a decir que no."]],
      q: [
        mc(3, "Quin va ser el primer símptoma?", ["L'insomni", "Mal d'esquena", "Febre", "Pèrdua de pes"], "«Amb insomni.»"),
        mc(3, "Què és el que més li sap greu?", ["No haver anat al metge abans", "Haver canviat d'empresa", "Haver agafat la baixa", "Haver parlat amb la responsable"], "«No, i és el que més em sap greu.»"),
        mc(3, "Quant de temps va estar de baixa?", ["Vuit mesos", "Dos anys", "Quatre setmanes", "Dos mesos"], "«…vuit mesos de baixa.»"),
        mc(3, "Per què la responsable no va canviar res?", ["La Clara no li havia dit que estava esgotada.", "La volia acomiadar.", "Faltava personal.", "Estava de vacances."], "«…jo mai no li havia dit que estava esgotada.»")] },
    w: { c: "Piensa en un periodo en que te exigiste demasiado. Escribe unas 150 palabras: qué pasó, qué habrías debido hacer, qué habría pasado si… y qué haces ahora de otro modo.", m: "Fa tres anys vaig preparar unes oposicions mentre treballava a jornada completa. Dormia poc, ja no veia els amics i feia com si tot anés bé. Resultat: em vaig posar malalta una setmana abans de l'examen. Ara ho veig clar: m'hauria d'haver organitzat d'una altra manera. Si hagués demanat una reducció de jornada, hauria pogut estudiar sense esgotar-me. També hauria hagut d'escoltar la meva germana, que em repetia que fes pauses. Si hagués dormit més, segurament hauria memoritzat millor. El que més em sap greu és no haver parlat de les meves dificultats amb la meva responsable: ho hauria entès. Avui no cometria el mateix error. Planifico les setmanes, faig esport i sempre em reservo un vespre lliure. Si no hagués viscut aquella experiència, no coneixeria els meus límits." } },

  { id: "cb2-5", t: "Migracions i globalització", es: "Migración y globalización", v: [
    ["la globalització", "la globalización"], ["la immigració", "la inmigración"], ["l'emigració", "la emigración"], ["el refugiat", "el refugiado"], ["fugir", "huir"], ["l'asil", "el asilo"], ["la integració", "la integración"],
    ["integrar-se", "integrarse"], ["la nacionalitat", "la nacionalidad"], ["el permís de residència", "el permiso de residencia"], ["l'oficina d'estrangeria", "la oficina de extranjería"], ["el tràmit", "el trámite"], ["presentar una sol·licitud", "presentar una solicitud"], ["l'origen", "el origen"],
    ["la diversitat", "la diversidad"], ["la discriminació", "la discriminación"], ["l'acollida", "la acogida"], ["la igualtat d'oportunitats", "la igualdad de oportunidades"], ["la prosperitat", "la prosperidad"], ["el comerç", "el comercio"], ["la frontera", "la frontera"],
    ["la dependència", "la dependencia"], ["la cohesió", "la cohesión"], ["el malentès", "el malentendido"], ["adaptar-se", "adaptarse"], ["la pertinença", "la pertenencia"], ["penedir-se", "arrepentirse"], ["enyorar", "añorar, echar de menos"]],
    g: { t: "Expresar el tiempo: antes, después y a la vez", n: `
## Después
- Mismo sujeto: **després de** + infinitivo (simple o compuesto) → Després d'arribar / Després d'haver arribat, va demanar asil.
- Sujetos distintos: **després que** + indicativo o subjuntivo → Després que ella marxés, ell es va quedar.
- **un cop** + participio: Un cop acabats els estudis, va marxar a Berlín.

## Antes
- Mismo sujeto: **abans de** + infinitivo → Abans de marxar, va vendre la casa.
- Sujetos distintos: **abans que** + subjuntivo → Parla-hi abans que marxi.
- **fins que** + subjuntivo (futuro) o indicativo (pasado): T'esperaré fins que tornis. · Va esperar fins que va arribar.

## A la vez
| mentre (mientras) · alhora (a la vez) · en + infinitivo (al): En arribar, va trucar a la seva mare.
> «Al llegar» se dice **en arribar** (no «al arribar», castellanismo).

## El futuro compuesto
**hauré, hauràs, haurà…** + participio: acción futura terminada antes que otra, o suposición sobre el pasado.
| Quan hagi obtingut el permís, buscaré feina.     (con «quan» se usa subjuntivo perfecto)
| Ja haurà marxat.       Ya se habrá ido.

## enyorar y trobar a faltar
Se construyen como en castellano «echar de menos», con el que echa de menos como sujeto:
| Enyoro la meva família. · Trobo a faltar el mar.
`, e: [
      mc(3, "Completa: «Quan ___ el títol, buscaré feina.»", ["hagi obtingut", "hauré obtingut", "obtindria", "havia obtingut"], "quan + subjuntivo perfecto con idea de futuro."),
      mc(3, "Completa: «___ arribar, va trucar a la seva mare.» (al llegar)", ["En", "Al", "A l'", "Quan"], "en + infinitivo = al + infinitivo."),
      mc(3, "Completa: «___ marxar, va vendre la casa.» (antes de)", ["Abans de", "Abans que", "Després que", "Fins que"], "Mismo sujeto: abans de + infinitivo."),
      mc(3, "Completa: «Truca-li abans que ___.»", ["marxi", "marxa", "marxarà", "ha marxat"], "abans que + subjuntivo."),
      tx(3, "Completa: «___ acabats els estudis, va marxar a Berlín.» (una vez)", ["Un cop"], "un cop + participio."),
      mc(3, "¿Cómo se dice «echo de menos el mar»?", ["Trobo a faltar el mar.", "Em falta el mar a mi.", "Echo de menys el mar.", "Trobo de menys el mar."], "trobar a faltar / enyorar."),
      mc(3, "«Ja haurà marxat» significa…", ["Ya se habrá ido", "Ya se había ido", "Ya se fue", "Ya se irá"], "Futuro compuesto de suposición."),
      tx(3, "Completa: «T'esperaré fins que ___.» (tornar, tú)", ["tornis"], "fins que + subjuntivo en futuro.")] },
    d: { t: "Deu anys després", l: [
      ["Periodista", "Senyora Demir, va arribar d'Esmirna a Barcelona fa deu anys. Ho tornaria a fer?", "Señora Demir, llegó de Esmirna a Barcelona hace diez años. ¿Lo volvería a hacer?"],
      ["Sra. Demir", "Sí, però d'una altra manera. Abans de marxar hauria d'haver après català i castellà.", "Sí, pero de otra manera. Antes de irme tendría que haber aprendido catalán y castellano."],
      ["Periodista", "Els inicis van ser difícils?", "¿Los inicios fueron difíciles?"],
      ["Sra. Demir", "Molt. En arribar, vaig passar setmanes a l'oficina d'estrangeria sense entendre gairebé res. Una veïna em va ajudar fins que vaig obtenir el permís de residència.", "Mucho. Al llegar, pasé semanas en la oficina de extranjería sin entender casi nada. Una vecina me ayudó hasta que obtuve el permiso de residencia."],
      ["Periodista", "Li van reconèixer el títol d'enginyera?", "¿Le reconocieron el título de ingeniera?"],
      ["Sra. Demir", "Només al cap de dos anys. Mentre esperava, treballava en un bar i anava a classes de català al vespre.", "Solo al cabo de dos años. Mientras esperaba, trabajaba en un bar e iba a clases de catalán por la noche."],
      ["Periodista", "Va pensar a tornar?", "¿Pensó en volver?"],
      ["Sra. Demir", "És clar. Però un cop vaig trobar feina del meu sector, tot va canviar.", "Claro. Pero una vez encontré trabajo de mi sector, todo cambió."],
      ["Periodista", "Què troba més a faltar?", "¿Qué echa más de menos?"],
      ["Sra. Demir", "El mar d'Esmirna i la meva mare. Però quan hagi obtingut la nacionalitat, em sentiré a casa als dos països.", "El mar de Esmirna y a mi madre. Pero cuando haya obtenido la nacionalidad, me sentiré en casa en los dos países."]],
      q: [
        mc(3, "Què hauria d'haver fet abans de marxar?", ["Aprendre català i castellà", "Buscar pis", "Traduir el títol", "Estalviar"], "«…hauria d'haver après català i castellà.»"),
        mc(3, "Qui la va ajudar amb els tràmits?", ["Una veïna", "Una funcionària", "La seva mare", "Una companya"], "«Una veïna em va ajudar…»"),
        mc(3, "Què feia mentre esperava el reconeixement del títol?", ["Treballava en un bar i estudiava català.", "Era a l'atur.", "Estudiava a la universitat.", "Havia tornat a Esmirna."], "«…treballava en un bar i anava a classes de català…»"),
        mc(3, "Què ho va canviar tot?", ["Trobar feina del seu sector", "El casament", "La nacionalitat", "Un trasllat"], "«…un cop vaig trobar feina del meu sector…»")] },
    w: { c: "Cuenta la historia de alguien que se fue a vivir a otro país en unas 150 palabras. Ordena los hechos con «abans de», «després d'haver», «en + infinitivo», «un cop» y «quan + subjuntivo».", m: "La meva tia Lucía va marxar de Sevilla als vint-i-cinc anys. Abans de marxar, havia treballat tres anys d'infermera. Després d'haver obtingut una beca, es va instal·lar a Brussel·les. Els primers mesos van ser durs: mentre anava a classes de francès al matí, a la tarda feia neteges. En rebre l'homologació del títol, per fi va poder exercir la seva professió. Un cop va tenir un contracte estable, la va anar a trobar la seva parella. Com que havia crescut en una família nombrosa, patia molt la solitud; trobava molt a faltar la seva mare. Avui dirigeix un servei de pediatria. Diu sovint que tornarà a Espanya quan s'hagi jubilat. Però quan neixin els néts, em sembla que canviarà d'idea." } },

  { id: "cb2-6", t: "Llengua i cultura", es: "Lengua y cultura", v: [
    ["la llengua materna", "la lengua materna"], ["la llengua estrangera", "la lengua extranjera"], ["el plurilingüisme", "el plurilingüismo"], ["el dialecte", "el dialecto"], ["la pronúncia", "la pronunciación"], ["l'accent", "el acento"], ["el lèxic", "el léxico"],
    ["l'expressió", "la expresión"], ["la frase feta", "la frase hecha"], ["el refrany", "el refrán"], ["el significat", "el significado"], ["traduir", "traducir"], ["fer d'intèrpret", "hacer de intérprete"], ["expressar-se", "expresarse"],
    ["amb fluïdesa", "con fluidez"], ["la cortesia", "la cortesía"], ["tutejar", "tutear"], ["tractar de vostè", "tratar de usted"], ["el to", "el tono"], ["la gesticulació", "la gesticulación"], ["el tòpic", "el tópico"],
    ["el costum", "la costumbre"], ["la novel·la", "la novela"], ["la poesia", "la poesía"], ["l'obra de teatre", "la obra de teatro"], ["la representació", "la representación"], ["l'obra", "la obra"], ["el castellanisme", "el castellanismo"]],
    g: { t: "Castellanismos, ortografía y registros", n: `
## Castellanismos frecuentes y su forma correcta
| bueno → bé, doncs, molt bé · vale → d'acord, entesos · pues → doncs · o sigui → és a dir
| tenir que → haver de · hi ha que → cal · a pesar de → malgrat, tot i · al + infinitivo → en + infinitivo
| enterar-se → assabentar-se · apuntar (anotar) → anotar · llevar (traer) → portar · tonteria → bestiesa, ximpleria
| despedir-se → acomiadar-se · disfrutar → gaudir, passar-s'ho bé · buscar (ir a recoger) → anar a buscar, recollir
> El catalán acepta que haya diferencias dialectales (valenciano, balear, central, noroccidental); un castellanismo no es una variante dialectal.

## Ortografía que más cuesta a los hispanohablantes
- **La ela geminada**: col·legi, intel·ligent, il·lusió, pel·lícula (dos eles separadas por un punto volado).
- **Accent obert i tancat**: à (sempre oberta), è / é, ò / ó, í, ú: cafè, què, també, francès, sóc / soc.
- **ny** y **ix**: Catalunya, peix, caixa.
- **ç** delante de a, o, u y al final: plaça, començar, braç.
- **g / j** y **tg / tj**: mengem, platja, viatge.

## Los registros
$ Coloquial: Què fas? · No ho sé, tio. · Va, anem! · Quin rotllo!
$ Estándar: Què fas? · No ho sé. · Anem?
$ Formal: Què té previst fer? · No sabria dir-li. · Si li sembla bé, podem començar.
En cartas formales: **Benvolgut senyor / Benvolguda senyora**, … **Atentament** / **Cordialment**.

## Frases hechas
| fer el ronso (remolonear) · ploure a bots i barrals (llover a cántaros) · anar de bòlit (ir de cabeza)
| fer-ne cinc cèntims (resumir algo) · ser un tros de pa (ser buenísima persona) · tocar el dos (largarse)
`, e: [
      mc(3, "¿Cuál es la forma correcta de «vale»?", ["D'acord", "Val", "Vale", "Valga"], "Castellanismo: vale → d'acord, entesos."),
      mc(3, "¿Cómo se escribe correctamente?", ["intel·ligent", "inteligent", "intel.ligent", "intelligent"], "Ela geminada con punto volado."),
      mc(3, "Sustituye el castellanismo: «Bueno, ens veiem demà.»", ["Bé, ens veiem demà.", "Vale, ens veiem demà.", "Pues, ens veiem demà.", "O sigui, ens veiem demà."], "bueno → bé / doncs."),
      mc(3, "«Plou a bots i barrals» significa…", ["Llueve a cántaros", "Llueve un poco", "Hace buen tiempo", "Hay barriles por la calle"], "Frase hecha."),
      tx(3, "Forma correcta de «enterar-se»:", ["assabentar-se"], "Castellanismo: enterar-se → assabentar-se."),
      mc(3, "Despedida adecuada en una carta formal:", ["Atentament,", "Un petó,", "Adéu, tio,", "Fins ara!"], "Atentament / Cordialment."),
      mc(3, "«Fer-ne cinc cèntims» significa…", ["Resumir algo brevemente", "Ganar poco dinero", "Pagar a medias", "Hacer cinco cosas a la vez"], "Frase hecha muy usada."),
      tx(3, "Escribe correctamente: «pelicula» →", ["pel·lícula"], "Ela geminada y tilde.")] },
    d: { t: "Tu o vostè?", l: [
      ["Marc", "Escolta, Laia, et puc fer una pregunta? A la feina, ens hem de tutejar o tractar de vostè?", "Oye, Laia, ¿te puedo hacer una pregunta? En el trabajo, ¿nos tenemos que tutear o tratar de usted?"],
      ["Laia", "Bona pregunta! A Catalunya es tuteja molt, però depèn de l'empresa.", "¡Buena pregunta! En Cataluña se tutea mucho, pero depende de la empresa."],
      ["Marc", "Ahir vaig tractar de vostè el director nou i va riure.", "Ayer traté de usted al nuevo director y se rió."],
      ["Laia", "És normal. Aquí, a la majoria d'oficines, es tuteja tothom, fins i tot el director. El vostè queda per a la gent gran o per a situacions molt formals.", "Es normal. Aquí, en la mayoría de oficinas, se tutea a todo el mundo, incluso al director. El usted queda para la gente mayor o para situaciones muy formales."],
      ["Marc", "I amb els clients?", "¿Y con los clientes?"],
      ["Laia", "Amb els clients, millor començar de vostè i esperar que et proposin el tu.", "Con los clientes, mejor empezar de usted y esperar a que te propongan el tú."],
      ["Marc", "I una altra cosa: la meva companya diu que «vale» no és català.", "Y otra cosa: mi compañera dice que «vale» no es catalán."],
      ["Laia", "Té raó, és un castellanisme. Al carrer el sentiràs molt, però a la feina queda millor dir «d'acord» o «entesos».", "Tiene razón, es un castellanismo. En la calle lo oirás mucho, pero en el trabajo queda mejor decir «d'acord» o «entesos»."],
      ["Marc", "Entesos, doncs!", "¡Entendido, pues!"]],
      q: [
        mc(3, "Què va fer en Marc ahir?", ["Va tractar de vostè el director.", "Va criticar el director.", "Va tutejar un client.", "Va plegar."], "«Ahir vaig tractar de vostè el director nou…»"),
        mc(3, "Què diu la Laia sobre les oficines catalanes?", ["Que s'hi tuteja tothom, fins i tot el director", "Que tothom es tracta de vostè", "Que el director és sever", "Que en Marc serà acomiadat"], "«…es tuteja tothom, fins i tot el director.»"),
        mc(3, "Com s'ha de tractar els clients, segons la Laia?", ["De vostè al principi", "Sempre de tu", "Amb el nom de pila", "No importa"], "«…millor començar de vostè…»"),
        mc(3, "Què diu la Laia sobre «vale»?", ["Que és un castellanisme", "Que és molt formal", "Que és valencià", "Que és incorrecte en tots els casos i ningú no el diu"], "«…és un castellanisme.»")] },
    w: { c: "Escribe el mismo mensaje dos veces (unas 70 palabras cada uno): cancelas una cita porque estás enfermo. Primero a un amigo, en registro coloquial; después a un cliente o a tu jefe, en registro formal. Evita castellanismos.", m: "A un amic:\nEi, Tomàs! Ho sento, aquest vespre no puc venir: estic fet pols i tinc febre. He anat de bòlit tota la setmana i ja no puc més. Ho deixem per dissabte? Demà et truco. Va, passa-ho bé i records a la colla!\n\nA un client:\nBenvolgut senyor Bosch,\nlamento haver d'anul·lar la reunió d'aquest vespre per motius de salut. Li prego que m'excusi les molèsties. Li aniria bé dissabte al matí? Demà em posaré en contacte amb vostè per fixar una nova data.\nAtentament,\nAna Ruiz" } },
] });
