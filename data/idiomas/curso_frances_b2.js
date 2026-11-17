// Curso de francés · nivel B2. Mismo formato que curso_frances.js (cadenas entre comillas dobles).
CURSO.frances.push({ id: "B2", nombre: "B2 · Avanzado", desc: "Entender textos complejos, argumentar con matices, cambiar de registro y conversar con fluidez sobre temas de actualidad.", u: [
  { id: "fb2-1", t: "Le monde du travail", es: "El mundo laboral", v: [
    ["la numérisation", "la digitalización"], ["l'automatisation", "la automatización"], ["le marché du travail", "el mercado laboral"], ["la pénurie", "la escasez"], ["le chômage", "el desempleo"], ["le salarié", "el asalariado"], ["l'employeur", "el empleador"],
    ["le syndicat", "el sindicato"], ["la convention collective", "el convenio colectivo"], ["la grève", "la huelga"], ["concilier", "conciliar"], ["la flexibilité", "la flexibilidad"], ["le télétravail", "el teletrabajo"], ["le rendement", "el rendimiento"],
    ["la pression", "la presión"], ["la charge de travail", "la carga de trabajo"], ["le licenciement", "el despido"], ["le CDD", "el contrato temporal"], ["le CDI", "el contrato indefinido"], ["la promotion", "el ascenso"], ["le cadre", "el directivo, el mando"],
    ["créer une entreprise", "fundar una empresa"], ["la concurrence", "la competencia"], ["la qualification", "la cualificación"], ["se former", "formarse"], ["la retraite", "la jubilación"], ["embaucher", "contratar"], ["le recrutement", "la selección de personal"]],
    g: { t: "Oposición y concesión", n: `
## Dos ideas distintas
- **Oposición**: dos hechos que contrastan. «Ella trabaja en casa; él, en cambio, va a la oficina.»
- **Concesión**: un hecho que debería impedir otro, pero no lo impide. «Aunque gana poco, le gusta su trabajo.»

## Expresar la oposición
| alors que / tandis que + indicativo (mientras que): Elle télétravaille, alors que son mari va au bureau.
| en revanche / par contre (en cambio): Le salaire est bas ; en revanche, les horaires sont souples.
| au contraire (al contrario) · contrairement à + nombre (a diferencia de)

## Expresar la concesión
- Con **subjuntivo**: **bien que**, **quoique** → Bien qu'il soit qualifié, il ne trouve pas de poste.
- Con **indicativo**: **même si** → Même s'il est qualifié, il ne trouve pas de poste.
- Adverbios, con el verbo detrás del sujeto como siempre: **pourtant, cependant, néanmoins, toutefois** → Il est qualifié. Pourtant, il ne trouve pas de poste.
- Con un nombre: **malgré** → Malgré ses diplômes, il ne trouve pas de poste. («malgré que» se evita.)
- **avoir beau** + infinitivo (por mucho que): Il a beau chercher, il ne trouve rien.
- **quand même / tout de même** (aun así), tras el verbo: Il gagne peu, mais il reste quand même.
- **certes … mais** (es cierto que… pero), muy útil para argumentar: Certes, le télétravail est pratique, mais il isole.

## Otras expresiones útiles
| quoi qu'il en soit (sea como sea) · or (ahora bien) · en dépit de (pese a) · il n'empêche que (eso no quita que)
> «bien que» nunca lleva indicativo, y «même si» nunca lleva subjuntivo: es el fallo más frecuente en el examen.
`, e: [
      mc(3, "Completa: «___ il soit très qualifié, il est au chômage.»", ["Bien qu'", "Même s'", "Pourtant", "Malgré"], "Con subjuntivo (soit): bien que."),
      mc(3, "Completa: «___ il est très qualifié, il est au chômage.»", ["Même s'", "Bien qu'", "Quoiqu'", "Malgré"], "Con indicativo (est): même si."),
      mc(3, "Completa: «___ ses diplômes, il n'a pas été embauché.»", ["Malgré", "Bien que", "Même si", "Pourtant"], "Delante de un nombre: malgré."),
      mc(3, "Completa: «Elle travaille à la maison, ___ son mari va au bureau.»", ["alors que", "bien que", "malgré", "pourtant"], "Contraste entre dos hechos: alors que + indicativo."),
      tx(3, "Completa: «Il a ___ chercher, il ne trouve pas d'emploi.»", ["beau"], "avoir beau + infinitivo = por mucho que."),
      mc(3, "¿Qué frase es correcta?", ["Il gagne peu. Pourtant, il aime son métier.", "Il gagne peu. Pourtant qu'il aime son métier.", "Il gagne peu, pourtant qu'il aime son métier.", "Pourtant il gagne peu, il aime son métier."], "«pourtant» es un adverbio: no introduce subordinada."),
      mc(3, "Completa: «Le salaire est bas ; ___, les horaires sont très souples.»", ["en revanche", "bien que", "malgré", "même si"], "Oposición entre dos aspectos: en revanche."),
      tx(3, "Completa: «___, le télétravail est pratique, mais il isole.» (es cierto que)", ["Certes"], "certes … mais.")] },
    d: { t: "Travailler où et quand on veut ?", l: [
      ["Text", "Le monde du travail change plus vite que jamais. La numérisation et la pénurie de personnel qualifié obligent les entreprises à revoir leurs habitudes. Pourtant, toutes ne sont pas prêtes à le faire.", "El mundo laboral cambia más deprisa que nunca. La digitalización y la escasez de personal cualificado obligan a las empresas a revisar sus costumbres. Sin embargo, no todas están dispuestas a hacerlo."],
      ["Text", "Aujourd'hui, beaucoup de salariés ne demandent pas seulement un bon salaire : ils veulent aussi des horaires souples. Alors que leurs parents acceptaient de passer dix heures par jour au bureau, les jeunes diplômés refusent de sacrifier leur vie privée.", "Hoy muchos asalariados no piden solo un buen sueldo: quieren también horarios flexibles. Mientras que sus padres aceptaban pasar diez horas diarias en la oficina, los jóvenes titulados se niegan a sacrificar su vida privada."],
      ["Text", "Le télétravail a beau présenter de nombreux avantages, il comporte aussi des risques. Certes, on gagne le temps du trajet ; en revanche, la frontière entre travail et loisirs devient floue. Bien que la plupart des télétravailleurs se disent satisfaits, un sur trois reconnaît travailler plus qu'avant.", "Por muchas ventajas que tenga el teletrabajo, también conlleva riesgos. Es cierto que se gana el tiempo del trayecto; en cambio, la frontera entre trabajo y ocio se vuelve borrosa. Aunque la mayoría de los teletrabajadores se declaran satisfechos, uno de cada tres reconoce que trabaja más que antes."],
      ["Text", "Malgré ces difficultés, peu de salariés voudraient revenir en arrière. Les spécialistes recommandent donc des règles claires : même si chacun organise sa journée librement, personne ne devrait être joignable en permanence. Quoi qu'il en soit, la flexibilité ne doit pas devenir une disponibilité sans limites.", "A pesar de estas dificultades, pocos asalariados querrían volver atrás. Por eso los especialistas recomiendan reglas claras: aunque cada uno organice su jornada libremente, nadie debería estar localizable de forma permanente. Sea como sea, la flexibilidad no debe convertirse en una disponibilidad sin límites."]],
      q: [
        mc(3, "Qu'est-ce qui oblige les entreprises à changer ?", ["La numérisation et le manque de personnel qualifié", "Les grèves et le chômage", "La hausse des salaires", "Le départ à la retraite des cadres"], "«La numérisation et la pénurie de personnel qualifié…»"),
        mc(3, "En quoi les jeunes diplômés sont-ils différents de leurs parents ?", ["Ils refusent de sacrifier leur vie privée.", "Ils veulent gagner beaucoup plus.", "Ils préfèrent travailler au bureau.", "Ils changent rarement d'entreprise."], "«…les jeunes diplômés refusent de sacrifier leur vie privée.»"),
        mc(3, "Que reconnaît un télétravailleur sur trois ?", ["Il travaille plus qu'avant.", "Il gagne moins qu'avant.", "Il regrette le bureau.", "Il a perdu contact avec ses collègues."], "«…un sur trois reconnaît travailler plus qu'avant.»"),
        mc(3, "Que recommandent les spécialistes ?", ["Des règles claires sur la disponibilité", "Le retour de tous au bureau", "Des journées plus longues", "Davantage de contrôle par les cadres"], "«…personne ne devrait être joignable en permanence.»")] },
    w: { c: "¿Teletrabajo sí o no? Escribe una opinión argumentada de unas 150 palabras con ventajas, inconvenientes y tu conclusión. Usa al menos cinco conectores de oposición y concesión.", m: "À mon avis, le télétravail n'est ni une solution miracle ni un danger. Certes, il permet de gagner du temps et de l'argent, puisque le trajet disparaît ; en revanche, beaucoup de salariés souffrent du manque de contact avec leurs collègues. Bien qu'on se concentre souvent mieux chez soi, tout le monde ne dispose pas d'un endroit calme pour travailler. Certains ont beau fixer des horaires, ils finissent par répondre à leurs courriels le soir. Alors que les cadres apprécient cette liberté, les jeunes recrues ont besoin d'être accompagnées. Malgré ces limites, je ne voudrais pas revenir en arrière. Je défends donc un modèle mixte : même si chacun organise sa semaine, deux jours au bureau restent indispensables. Quoi qu'il en soit, la flexibilité ne doit jamais signifier une disponibilité permanente." } },

  { id: "fb2-2", t: "Sciences et technologies", es: "Ciencia y tecnología", v: [
    ["la recherche", "la investigación"], ["le chercheur", "el investigador"], ["la science", "la ciencia"], ["une étude", "un estudio"], ["le résultat", "el resultado"], ["une expérience", "un experimento"], ["une analyse", "un análisis"],
    ["examiner", "examinar"], ["prouver", "demostrar"], ["la preuve", "la prueba"], ["une découverte", "un descubrimiento"], ["une invention", "un invento"], ["mettre au point", "desarrollar, poner a punto"], ["le progrès", "el progreso"],
    ["l'intelligence artificielle", "la inteligencia artificial"], ["traiter", "procesar, tratar"], ["mesurer", "medir"], ["la méthode", "el método"], ["une hypothèse", "una hipótesis"], ["confirmer", "confirmar"], ["réfuter", "refutar"],
    ["la cause", "la causa"], ["un effet", "un efecto"], ["la conséquence", "la consecuencia"], ["le risque", "el riesgo"], ["un atout", "una ventaja, una baza"], ["le logiciel", "el programa informático"], ["prévoir", "prever"]],
    g: { t: "La pasiva, sus alternativas y la nominalización", n: `
## La pasiva en todos los tiempos
**être** en el tiempo que corresponda + participio concordado:
$ est analysé · a été analysé · sera analysé · serait analysé · doit être analysé · vient d'être analysé
El agente va con **par**; con verbos de sentimiento o descripción, con **de**: aimé de tous, entouré d'arbres, connu de tous.
> Solo puede ser sujeto de la pasiva un objeto directo: «On a répondu à la question» no admite pasiva.

## Alternativas, muy francesas
- **on**: On a découvert un nouveau vaccin.
- **Forma pronominal con sentido pasivo**: Ce médicament se prend le matin. · Les données se traitent en quelques heures. · Ça ne se dit pas.
- **se faire + infinitivo**: el sujeto sufre o encarga la acción → Il s'est fait opérer. · Elle s'est fait voler son ordinateur. (El participio «fait» no concuerda.)
- **se laisser + infinitivo**: Il s'est laissé convaincre.
- **Adjetivos en -able / -ible** (que se puede): faisable, prévisible, incompréhensible, inévitable.

## La nominalización
Los titulares y los textos formales convierten el verbo en nombre:
| Les chercheurs ont découvert un vaccin. → Découverte d'un vaccin.
| Les prix augmentent. → L'augmentation des prix.
Sufijos frecuentes:
$ -tion / -sion (femenino): créer → la création · -ment (masculino): développer → le développement
$ -age (masculino): recycler → le recyclage · -ure (femenino): ouvrir → l'ouverture
Sin sufijo o irregulares: essayer → l'essai · mettre au point → la mise au point · prouver → la preuve · choisir → le choix.
> Nominalizar sube el registro en la producción escrita: «parce que les prix augmentent» → «en raison de l'augmentation des prix».
`, e: [
      mc(3, "Pasa a pasiva: «Les chercheurs analyseront les données.»", ["Les données seront analysées par les chercheurs.", "Les données seront analysé par les chercheurs.", "Les données ont été analysées par les chercheurs.", "Les données seraient analyser par les chercheurs."], "être en futuro + participio concordado (femenino plural)."),
      mc(3, "«Ce médicament se prend le matin» equivale a…", ["Ce médicament doit être pris le matin.", "Ce médicament prend le matin.", "Quelqu'un a pris ce médicament.", "Ce médicament s'est fait prendre."], "Forma pronominal con sentido pasivo."),
      mc(3, "Completa: «Elle s'est ___ voler son téléphone.»", ["fait", "faite", "faites", "faire"], "En «se faire + infinitivo», «fait» no concuerda."),
      mc(3, "Completa (se puede prever): «Les conséquences étaient ___.»", ["prévisibles", "prévues", "prévoyantes", "prévoyables"], "prévoir → prévisible."),
      tx(3, "Nominaliza: «développer» → «le ___»", ["développement"], "Sufijo -ment, masculino."),
      mc(3, "Nominaliza: «Les prix augmentent.»", ["L'augmentation des prix", "L'augmentement des prix", "Les prix en augmentant", "L'augmentage des prix"], "augmenter → l'augmentation."),
      mc(3, "¿Qué frase NO admite pasiva?", ["On a répondu à la question.", "On a découvert un vaccin.", "On a publié l'étude.", "On a confirmé l'hypothèse."], "«répondre à» lleva objeto indirecto."),
      tx(3, "Nominaliza: «découvrir» → «la ___»", ["découverte"], "découvrir → la découverte.")] },
    d: { t: "Des machines qui apprennent", l: [
      ["Text", "L'intelligence artificielle s'est imposée dans la recherche. D'énormes quantités de données, qu'on mettait autrefois des années à analyser, se traitent désormais en quelques heures.", "La inteligencia artificial se ha impuesto en la investigación. Enormes cantidades de datos que antes se tardaba años en analizar se procesan ahora en pocas horas."],
      ["Text", "En médecine, par exemple, certaines tumeurs sont maintenant repérées sur les radiographies par des logiciels, souvent plus tôt que par l'œil humain. La mise au point de nouveaux médicaments pourrait elle aussi être accélérée.", "En medicina, por ejemplo, ciertos tumores son ya detectados en las radiografías por programas, a menudo antes que por el ojo humano. El desarrollo de nuevos medicamentos también podría acelerarse."],
      ["Text", "Mais cette technologie a ses limites. La manière dont un programme parvient à son résultat est souvent incompréhensible, même pour les spécialistes. Les erreurs contenues dans les données se détectent difficilement et leurs conséquences ne sont pas toujours prévisibles.", "Pero esta tecnología tiene sus límites. La manera en que un programa llega a su resultado es a menudo incomprensible, incluso para los especialistas. Los errores contenidos en los datos se detectan con dificultad y sus consecuencias no siempre son previsibles."],
      ["Text", "C'est pourquoi de nombreux chercheurs demandent que les décisions importantes ne soient pas laissées aux seules machines. Selon eux, la responsabilité ne se délègue pas : elle doit rester humaine.", "Por eso muchos investigadores piden que las decisiones importantes no se dejen solo en manos de las máquinas. Según ellos, la responsabilidad no se delega: debe seguir siendo humana."]],
      q: [
        mc(3, "Qu'est-ce qui a changé dans l'analyse des données ?", ["Elle est beaucoup plus rapide.", "Elle coûte plus cher.", "Elle est faite uniquement par des humains.", "Elle n'est plus nécessaire."], "«…se traitent désormais en quelques heures.»"),
        mc(3, "Quel exemple médical le texte donne-t-il ?", ["Des logiciels repèrent des tumeurs sur des radiographies.", "Des robots opèrent sans médecin.", "Les ordinateurs remplacent les infirmiers.", "Les médicaments coûtent moins cher."], "«…certaines tumeurs sont maintenant repérées … par des logiciels…»"),
        mc(3, "Quel problème est mentionné ?", ["On ne comprend pas toujours comment le résultat est obtenu.", "Les programmes sont trop lents.", "Il manque des données.", "La technologie est trop chère."], "«…est souvent incompréhensible, même pour les spécialistes.»"),
        mc(3, "Que demandent de nombreux chercheurs ?", ["Que l'humain garde la responsabilité des décisions", "Que la recherche soit arrêtée", "Que les machines décident seules", "Que l'on collecte plus de données"], "«…la responsabilité … doit rester humaine.»")] },
    w: { c: "Elige un avance tecnológico (inteligencia artificial, coche autónomo, edición genética…) y escribe unas 150 palabras: qué permite, qué riesgos tiene y qué habría que regular. Usa la pasiva, al menos dos alternativas y tres nominalizaciones.", m: "La voiture autonome pourrait transformer notre quotidien. Aujourd'hui déjà, de nombreuses fonctions sont assurées par des logiciels, et la plupart des accidents, qui sont causés par des erreurs humaines, seraient évitables. De plus, le développement de ces véhicules permettrait aux personnes âgées de rester mobiles. Néanmoins, les risques ne doivent pas être sous-estimés. Aucun système n'est infaillible et la réaction d'un programme dans une situation dangereuse reste imprévisible. La question de la responsabilité en cas d'accident ne se règle pas facilement non plus. C'est pourquoi des lois précises doivent être votées avant la mise en circulation de ces voitures. Les données devraient être enregistrées et contrôlées par des organismes indépendants. Sans cette transparence, la confiance du public ne s'obtiendra pas." } },

  { id: "fb2-3", t: "Médias et opinion", es: "Medios y opinión", v: [
    ["la liberté de la presse", "la libertad de prensa"], ["la censure", "la censura"], ["la couverture médiatique", "la cobertura mediática"], ["la rédaction", "la redacción"], ["la dépêche", "el teletipo, la noticia de agencia"], ["une déclaration", "una declaración"], ["la conférence de presse", "la rueda de prensa"],
    ["le porte-parole", "el portavoz"], ["affirmer", "afirmar"], ["souligner", "subrayar"], ["déclarer", "declarar"], ["annoncer", "anunciar"], ["nier", "negar"], ["admettre", "admitir"],
    ["laisser entendre", "dar a entender"], ["critiquer", "criticar"], ["la rumeur", "el rumor"], ["l'infox", "el bulo"], ["le fait", "el hecho"], ["une affirmation", "una afirmación"], ["crédible", "creíble"],
    ["soi-disant", "supuestamente; supuesto"], ["apparemment", "por lo visto"], ["un éditorial", "un editorial"], ["le sondage", "la encuesta"], ["la majorité", "la mayoría"], ["la minorité", "la minoría"], ["influencer", "influir en"]],
    g: { t: "Subjuntivo avanzado y condicional periodístico", n: `
## El subjuntivo pasado
**avoir / être** en subjuntivo + participio. Expresa una acción anterior a la de la oración principal.
| que j'aie fini · que tu aies vu · qu'elle soit partie · que nous ayons compris · qu'ils se soient trompés
| Je regrette qu'il ait menti.      Je doute qu'ils aient lu l'article.

## ¿Indicativo o subjuntivo?
La certeza pide indicativo; la duda, la posibilidad o el juicio, subjuntivo:
$ il est certain / évident / probable que + indicativo · il est possible / peu probable / douteux que + subjuntivo
$ il me semble que + indicativo · il semble que + subjuntivo
$ je pense / je crois que + indicativo · je ne pense pas que / pensez-vous que + subjuntivo
$ espérer que + indicativo · souhaiter que + subjuntivo
$ après que + indicativo · avant que + subjuntivo

## Subjuntivo en las relativas
- Tras un superlativo o «le seul, le premier, le dernier»: C'est le meilleur article que j'**aie lu**. · C'est la seule journaliste qui **ait osé** le dire.
- Cuando se busca algo que no se sabe si existe: Je cherche un journal qui **soit** vraiment indépendant.

## Juicios impersonales
| Il est essentiel / important / normal / dommage / scandaleux que + subjuntivo
| Il est essentiel que les citoyens sachent la vérité.

## El condicional de la información no confirmada
La prensa usa el condicional para tomar distancia de lo que cuenta:
| Le ministre aurait démissionné.          Al parecer, el ministro ha dimitido.
| Selon nos sources, il y aurait dix blessés.
| L'entreprise serait en difficulté.
> En español se dice «habría dimitido» o «al parecer»; en francés basta el condicional.
`, e: [
      mc(3, "Completa: «Je regrette qu'il ___ hier.»", ["ait menti", "a menti", "mente", "avait menti"], "Sentimiento + acción anterior: subjuntivo pasado."),
      mc(3, "Completa: «Il est probable que le ministre ___ demain.»", ["démissionnera", "ait démissionné", "soit démissionné", "démissionner"], "«Il est probable que» pide indicativo."),
      mc(3, "Completa: «Il est possible que la rumeur ___ fausse.»", ["soit", "est", "sera", "serait"], "«Il est possible que» pide subjuntivo."),
      mc(3, "Completa: «C'est le meilleur reportage que j'___ cette année.»", ["aie vu", "ai vu", "avais vu", "aurai vu"], "Tras un superlativo, subjuntivo."),
      mc(3, "«Le maire aurait démissionné» significa…", ["Al parecer, el alcalde ha dimitido", "El alcalde dimitiría si pudiera", "El alcalde debería dimitir", "El alcalde había dimitido"], "Condicional de información no confirmada."),
      tx(3, "Completa con «être»: «Il semble que la situation ___ grave.»", ["soit"], "«Il semble que» + subjuntivo (pero «il me semble que» + indicativo)."),
      mc(3, "Completa (no sabes si existe): «Je cherche un journal qui ___ vraiment indépendant.»", ["soit", "est", "sera", "était"], "Se busca algo que no se sabe si existe: subjuntivo."),
      tx(3, "Completa con «savoir»: «Il est essentiel que les citoyens ___ la vérité.»", ["sachent"], "savoir → qu'ils sachent.")] },
    d: { t: "Le maire rejette les accusations", l: [
      ["Text", "Le maire de Villeneuve a rejeté hier, lors d'une conférence de presse, les accusations selon lesquelles il aurait favorisé des amis lors de la construction du nouveau stade. « Je regrette que de telles rumeurs aient été publiées sans vérification », a-t-il déclaré.", "El alcalde de Villeneuve rechazó ayer, en una rueda de prensa, las acusaciones según las cuales habría favorecido a amigos en la construcción del nuevo estadio. «Lamento que se hayan publicado tales rumores sin verificarlos», declaró."],
      ["Text", "D'après un journal local, le chantier aurait été attribué sans appel d'offres à une entreprise dont le patron serait un proche du maire. Les coûts auraient augmenté de quarante pour cent.", "Según un periódico local, la obra se habría adjudicado sin concurso a una empresa cuyo jefe sería allegado del alcalde. Los costes habrían aumentado un cuarenta por ciento."],
      ["Text", "Le maire a affirmé que toutes les décisions avaient été prises par le conseil municipal et qu'il n'avait pas participé au vote. Il a toutefois admis qu'il rencontrait le chef d'entreprise « de temps en temps, au club de sport ».", "El alcalde afirmó que todas las decisiones las había tomado el pleno y que él no había participado en la votación. Admitió, no obstante, que se veía con el empresario «de vez en cuando, en el club deportivo»."],
      ["Text", "L'opposition doute que ces explications soient suffisantes. Sa porte-parole exige qu'une enquête indépendante soit ouverte : « Il est essentiel que les citoyens sachent comment leur argent est dépensé. » Le maire a annoncé qu'il rendrait publics tous les documents.", "La oposición duda de que esas explicaciones sean suficientes. Su portavoz exige que se abra una investigación independiente: «Es esencial que los ciudadanos sepan cómo se gasta su dinero». El alcalde anunció que haría públicos todos los documentos."]],
      q: [
        mc(3, "De quoi le maire est-il accusé ?", ["D'avoir favorisé des amis", "D'avoir volé de l'argent", "D'avoir empêché la construction du stade", "D'avoir censuré la presse"], "«…il aurait favorisé des amis…»"),
        mc(3, "Que dit le maire à propos du vote ?", ["Il n'y a pas participé.", "Il a voté contre.", "Il n'a jamais eu lieu.", "Il était secret."], "«…il n'avait pas participé au vote.»"),
        mc(3, "Le maire connaît-il personnellement le chef d'entreprise ?", ["Oui, ils se voient parfois au club de sport.", "Non, pas du tout.", "Oui, ils sont de la même famille.", "Il refuse de répondre."], "«…il rencontrait le chef d'entreprise de temps en temps, au club de sport.»"),
        mc(3, "Qu'exige l'opposition ?", ["Une enquête indépendante", "La démission du conseil municipal", "La démolition du stade", "De nouvelles élections"], "«…exige qu'une enquête indépendante soit ouverte.»")] },
    w: { c: "Escribe un comentario de unas 150 palabras sobre una noticia dudosa o polémica (real o inventada): qué se cuenta, qué no está confirmado y qué opinas. Usa el condicional periodístico, el subjuntivo pasado y al menos tres expresiones de juicio o duda.", m: "Selon plusieurs sites, un grand groupe pharmaceutique aurait caché les résultats d'une étude sur l'un de ses médicaments. Trois chercheurs auraient été licenciés après avoir alerté leur direction. Pour l'instant, rien n'est confirmé : il est possible que l'information soit exacte, mais il se peut aussi qu'elle ait été déformée. Je doute que les journalistes aient eu accès aux documents originaux. Il me semble que la prudence s'impose. Cela dit, il est scandaleux que l'entreprise refuse de répondre aux questions. Je ne pense pas que le silence soit une bonne stratégie. Il est essentiel qu'une autorité indépendante puisse examiner le dossier. C'est le seul moyen qui permette de rétablir la confiance. En attendant, je regrette que tant de gens aient déjà partagé cette nouvelle sans la vérifier." } },

  { id: "fb2-4", t: "Santé et psychologie", es: "Salud y psicología", v: [
    ["le bien-être", "el bienestar"], ["l'épuisement", "el agotamiento"], ["le surmenage", "el exceso de trabajo"], ["la récupération", "la recuperación"], ["l'insomnie", "el insomnio"], ["une addiction", "una adicción"], ["dépendant", "dependiente"],
    ["le traitement", "el tratamiento"], ["la thérapie", "la terapia"], ["la prévention", "la prevención"], ["un effet secondaire", "un efecto secundario"], ["le système immunitaire", "el sistema inmunitario"], ["une inflammation", "una inflamación"], ["chronique", "crónico"],
    ["le diagnostic", "el diagnóstico"], ["les symptômes", "los síntomas"], ["soulager", "aliviar"], ["guérir", "curar, curarse"], ["prévenir", "prevenir; avisar"], ["la mutuelle", "el seguro médico complementario"], ["la pleine conscience", "la atención plena"],
    ["l'équilibre", "el equilibrio"], ["l'endurance", "la resistencia"], ["une répercussion", "una repercusión"], ["nuire à", "perjudicar"], ["favoriser", "fomentar, favorecer"], ["un état d'esprit", "una actitud mental"], ["l'arrêt maladie", "la baja médica"]],
    g: { t: "El condicional pasado: hipótesis, reproches y arrepentimiento", n: `
## Cómo se forma
**avoir / être** en condicional + participio:
| j'aurais fait · tu aurais vu · elle serait venue · nous aurions pu · ils se seraient reposés

## La hipótesis sobre el pasado
**si** + pluscuamperfecto → condicional pasado. Habla de algo que no ocurrió.
| Si j'avais consulté plus tôt, j'aurais guéri plus vite.     Si hubiera ido antes al médico, me habría curado antes.
| Si elle n'était pas tombée malade, elle serait partie en voyage.
Condición pasada con consecuencia presente (condicional presente):
| Si j'avais mieux dormi, je serais en forme aujourd'hui.
> Como siempre, tras «si» no va condicional: «si j'aurais su» es incorrecto. Se dice «si j'avais su».

## Arrepentirse
| J'aurais dû me reposer.            Tendría que haber descansado.
| J'aurais pu demander de l'aide.    Podría haber pedido ayuda.
| J'aurais aimé / voulu avoir plus de temps.
| Si seulement j'avais écouté mon médecin !
También con **regretter de** + infinitivo pasado: Je regrette de ne pas avoir consulté plus tôt.

## Reprochar
| Tu aurais pu me prévenir !         ¡Podrías haberme avisado!
| Vous auriez dû en parler avant.
| Il n'aurait pas fallu attendre.

## comme si
Siempre con imperfecto (simultáneo) o pluscuamperfecto (anterior), nunca con condicional:
| Il travaille comme s'il n'était pas malade.      Elle a fait comme si elle n'avait rien entendu.
`, e: [
      mc(3, "Completa: «Si j'avais su, je ___ plus tôt.»", ["serais venu", "viendrais eu", "étais venu", "serai venu"], "si + pluscuamperfecto → condicional pasado; «venir» lleva être."),
      mc(3, "Completa: «Si elle ___ son traitement, elle aurait guéri.»", ["avait suivi", "aurait suivi", "a suivi", "suivrait"], "Tras «si», pluscuamperfecto."),
      mc(3, "«Tendría que haber descansado» se dice…", ["J'aurais dû me reposer.", "Je devrais me reposer.", "J'avais dû me reposer.", "J'aurai dû me reposer."], "Condicional pasado de devoir + infinitivo."),
      mc(3, "«Tu aurais pu me prévenir !» expresa…", ["Un reproche", "Un permiso", "Una promesa", "Una orden"], "Condicional pasado de pouvoir: reproche."),
      tx(3, "Completa con «être»: «Si j'avais mieux dormi, je ___ en forme aujourd'hui.»", ["serais"], "Consecuencia presente: condicional presente."),
      mc(3, "Completa: «Il fait comme s'il ___ tout.»", ["savait", "saurait", "sache", "saura"], "comme si + imperfecto."),
      mc(3, "¿Qué frase es correcta?", ["Si j'avais eu le temps, j'aurais fait du sport.", "Si j'aurais eu le temps, j'aurais fait du sport.", "Si j'avais eu le temps, j'avais fait du sport.", "Si j'ai eu le temps, j'aurais fait du sport."], "Nunca condicional tras «si»."),
      tx(3, "Completa: «Je regrette de ne pas ___ consulté plus tôt.»", ["avoir"], "Infinitivo pasado: avoir + participio.")] },
    d: { t: "J'aurais dû m'arrêter plus tôt", l: [
      ["Journaliste", "Claire, vous avez fait un burn-out il y a deux ans. Comment cela a-t-il commencé ?", "Claire, hace dos años sufrió un burn-out. ¿Cómo empezó?"],
      ["Claire", "Par de l'insomnie. Je dormais quatre heures par nuit et je travaillais comme si de rien n'était.", "Con insomnio. Dormía cuatro horas por noche y trabajaba como si nada."],
      ["Journaliste", "Vous n'avez pas consulté ?", "¿No fue al médico?"],
      ["Claire", "Non, et c'est mon grand regret. Si j'avais vu un médecin dès les premiers symptômes, je n'aurais pas été arrêtée huit mois.", "No, y es lo que más lamento. Si hubiera visto a un médico con los primeros síntomas, no habría estado ocho meses de baja."],
      ["Journaliste", "Votre entourage avait remarqué quelque chose ?", "¿Su entorno había notado algo?"],
      ["Claire", "Mon mari me disait que j'aurais dû lever le pied. Mais je pensais que l'entreprise ne pourrait pas fonctionner sans moi.", "Mi marido me decía que debería haber bajado el ritmo. Pero yo pensaba que la empresa no podría funcionar sin mí."],
      ["Journaliste", "Et votre employeur ?", "¿Y su empresa?"],
      ["Claire", "Ma responsable aurait pu réduire ma charge de travail. Elle ne l'a pas fait, mais je ne lui avais jamais dit que j'étais épuisée.", "Mi responsable podría haber reducido mi carga de trabajo. No lo hizo, pero yo nunca le había dicho que estaba agotada."],
      ["Journaliste", "Que feriez-vous différemment aujourd'hui ?", "¿Qué haría hoy de otra manera?"],
      ["Claire", "J'aurais parlé plus tôt. Aujourd'hui, je travaille à quatre-vingts pour cent et j'ai appris à dire non.", "Habría hablado antes. Hoy trabajo al ochenta por ciento y he aprendido a decir que no."]],
      q: [
        mc(3, "Quel a été le premier symptôme de Claire ?", ["L'insomnie", "Des maux de dos", "La fièvre", "Une perte de poids"], "«Par de l'insomnie.»"),
        mc(3, "Que regrette-t-elle le plus ?", ["De ne pas avoir consulté un médecin plus tôt", "D'avoir changé d'entreprise", "D'avoir pris un arrêt maladie", "D'avoir parlé à sa responsable"], "«Non, et c'est mon grand regret.»"),
        mc(3, "Combien de temps a duré son arrêt ?", ["Huit mois", "Deux ans", "Quatre semaines", "Deux mois"], "«…je n'aurais pas été arrêtée huit mois.»"),
        mc(3, "Pourquoi sa responsable n'a-t-elle rien changé ?", ["Claire ne lui avait pas dit qu'elle était épuisée.", "Elle voulait la licencier.", "L'entreprise manquait de personnel.", "Elle était en congé."], "«…je ne lui avais jamais dit que j'étais épuisée.»")] },
    w: { c: "Piensa en un periodo en que te exigiste demasiado (estudios, trabajo, deporte). Escribe unas 150 palabras: qué pasó, qué habrías debido hacer, qué habría pasado si… y qué haces ahora de otro modo.", m: "Il y a trois ans, j'ai préparé un concours tout en travaillant à temps plein. Je dormais peu, je ne voyais plus mes amis et je faisais comme si tout allait bien. Résultat : je suis tombée malade une semaine avant l'épreuve. Avec le recul, j'aurais dû m'organiser autrement. Si j'avais demandé un temps partiel, j'aurais pu réviser sans m'épuiser. J'aurais aussi dû écouter ma sœur, qui me répétait de faire des pauses. Si j'avais mieux dormi, j'aurais sûrement mieux mémorisé. Je regrette surtout de ne pas avoir parlé de mes difficultés à ma responsable : elle aurait compris. Aujourd'hui, je ne ferais plus la même erreur. Je planifie mes semaines, je fais du sport et je garde toujours une soirée libre. Si je n'avais pas vécu cela, je ne connaîtrais pas mes limites." } },

  { id: "fb2-5", t: "Migrations et mondialisation", es: "Migración y globalización", v: [
    ["la mondialisation", "la globalización"], ["l'immigration", "la inmigración"], ["l'émigration", "la emigración"], ["le réfugié", "el refugiado"], ["fuir", "huir"], ["l'asile", "el asilo"], ["l'intégration", "la integración"],
    ["s'intégrer", "integrarse"], ["la nationalité", "la nacionalidad"], ["le titre de séjour", "el permiso de residencia"], ["la préfecture", "la prefectura (oficina de extranjería)"], ["la demande", "la solicitud"], ["faire une demande", "presentar una solicitud"], ["l'origine", "el origen"],
    ["la diversité", "la diversidad"], ["la discrimination", "la discriminación"], ["défavoriser", "perjudicar, discriminar"], ["l'égalité des chances", "la igualdad de oportunidades"], ["la prospérité", "la prosperidad"], ["le commerce", "el comercio"], ["la frontière", "la frontera"],
    ["la dépendance", "la dependencia"], ["la cohésion", "la cohesión"], ["un malentendu", "un malentendido"], ["s'adapter", "adaptarse"], ["l'appartenance", "la pertenencia"], ["regretter", "arrepentirse de; echar de menos"], ["manquer", "faltar; echar de menos"]],
    g: { t: "Antes, después y a la vez: la expresión del tiempo", n: `
## El futuro anterior
**avoir / être** en futuro + participio. Una acción futura que estará terminada antes que otra.
| Quand j'aurai obtenu mon titre de séjour, je chercherai un emploi.
| Dès que tu seras arrivé, appelle-moi.
Con **quand, lorsque, dès que, aussitôt que, une fois que, après que** se usa indicativo (futuro o futuro anterior), no subjuntivo como en español.

## Después: el infinitivo pasado
**après avoir / après être** + participio, cuando el sujeto es el mismo:
| Après avoir quitté son pays, elle a vécu deux ans à Marseille.
| Après être arrivés, ils ont fait une demande d'asile.      (el participio concuerda con être)
| Après s'être installée, elle a repris ses études.

## Antes
- Mismo sujeto: **avant de** + infinitivo → Avant de partir, il a vendu sa maison.
- Sujetos distintos: **avant que** + subjuntivo (a menudo con un «ne» que no niega) → Parle-lui avant qu'il **ne** parte.
- **jusqu'à ce que** + subjuntivo (hasta que): J'attendrai jusqu'à ce que tu reviennes.

## A la vez
| pendant que (mientras) · tandis que / alors que (mientras que) · au moment où (en el momento en que)
| Pendant qu'elle suivait des cours de français, elle travaillait dans un café.
El gerundio también indica simultaneidad: Elle a appris la langue **en travaillant**.

## El participio compuesto
**ayant / étant** + participio: resume una acción anterior, en estilo escrito.
| Ayant appris le français, il a trouvé rapidement un emploi.     Habiendo aprendido francés, …
> «manquer» funciona al revés que en español: **Ma famille me manque** = Echo de menos a mi familia.
`, e: [
      mc(3, "Completa: «Quand j'___ mon diplôme, je chercherai du travail.»", ["aurai obtenu", "aie obtenu", "obtiendrais", "avais obtenu"], "Acción futura anterior a otra: futuro anterior, en indicativo."),
      mc(3, "Completa: «Après ___ son pays, elle a vécu à Lyon.»", ["avoir quitté", "quitter", "avoir quitter", "être quitté"], "après + infinitivo pasado; «quitter» lleva avoir."),
      mc(3, "Completa: «Après ___, ils ont cherché un logement.»", ["être arrivés", "avoir arrivé", "être arrivé", "arriver"], "«arriver» lleva être y el participio concuerda (ils)."),
      mc(3, "Completa: «Appelle-moi avant que je ne ___.»", ["parte", "pars", "partirai", "suis parti"], "avant que + subjuntivo."),
      tx(3, "Completa: «___ de partir, il a vendu sa maison.» (antes)", ["Avant"], "Mismo sujeto: avant de + infinitivo."),
      mc(3, "«Mon pays me manque» significa…", ["Echo de menos mi país", "Mi país me echa de menos", "Me falta un país", "Mi país me defrauda"], "El sujeto de «manquer» es lo que se echa de menos."),
      mc(3, "Completa: «___ appris la langue, il s'est vite intégré.»", ["Ayant", "Étant", "Avoir", "En"], "Participio compuesto con avoir: ayant appris."),
      tx(3, "Completa con «être» en futuro: «Dès que tu ___ arrivé, appelle-moi.»", ["seras"], "Futuro anterior: tu seras arrivé.")] },
    d: { t: "Dix ans après", l: [
      ["Journaliste", "Madame Demir, vous êtes arrivée d'Izmir à Lyon il y a dix ans. Si c'était à refaire, vous le referiez ?", "Señora Demir, llegó usted de Esmirna a Lyon hace diez años. Si tuviera que volver a hacerlo, ¿lo haría?"],
      ["Mme Demir", "Oui, mais autrement. Avant de partir, j'aurais dû apprendre le français.", "Sí, pero de otro modo. Antes de irme tendría que haber aprendido francés."],
      ["Journaliste", "Les débuts ont été difficiles ?", "¿Fueron difíciles los comienzos?"],
      ["Mme Demir", "Très. Après être arrivée, j'ai passé des semaines à la préfecture sans presque rien comprendre. Une voisine m'a aidée jusqu'à ce que j'obtienne mon titre de séjour.", "Mucho. Después de llegar pasé semanas en la prefectura sin entender casi nada. Una vecina me ayudó hasta que conseguí el permiso de residencia."],
      ["Journaliste", "Votre diplôme d'ingénieure a-t-il été reconnu ?", "¿Le reconocieron el título de ingeniera?"],
      ["Mme Demir", "Seulement au bout de deux ans. Pendant que j'attendais, je travaillais dans un café et je suivais des cours du soir.", "Solo al cabo de dos años. Mientras esperaba, trabajaba en una cafetería e iba a clases nocturnas."],
      ["Journaliste", "Vous avez pensé à repartir ?", "¿Pensó en volver?"],
      ["Mme Demir", "Bien sûr. Mais une fois que j'ai trouvé un poste dans mon domaine, tout a changé.", "Claro. Pero una vez que encontré un puesto en mi campo, todo cambió."],
      ["Journaliste", "Qu'est-ce qui vous manque le plus ?", "¿Qué es lo que más echa de menos?"],
      ["Mme Demir", "La mer et ma mère. Mais quand j'aurai obtenu la nationalité, je me sentirai chez moi dans les deux pays.", "El mar y a mi madre. Pero cuando haya obtenido la nacionalidad, me sentiré en casa en los dos países."]],
      q: [
        mc(3, "Qu'aurait-elle dû faire avant de partir ?", ["Apprendre le français", "Chercher un logement", "Faire traduire son diplôme", "Économiser de l'argent"], "«Avant de partir, j'aurais dû apprendre le français.»"),
        mc(3, "Qui l'a aidée dans ses démarches ?", ["Une voisine", "Une employée de la préfecture", "Sa mère", "Une collègue"], "«Une voisine m'a aidée…»"),
        mc(3, "Que faisait-elle en attendant la reconnaissance de son diplôme ?", ["Elle travaillait dans un café et suivait des cours du soir.", "Elle était au chômage.", "Elle étudiait à l'université.", "Elle était rentrée à Izmir."], "«…je travaillais dans un café et je suivais des cours du soir.»"),
        mc(3, "Qu'est-ce qui a tout changé ?", ["Un poste dans son domaine", "Son mariage", "La nationalité française", "Un déménagement"], "«…une fois que j'ai trouvé un poste dans mon domaine, tout a changé.»")] },
    w: { c: "Cuenta la historia de alguien que se fue a vivir a otro país (tú, un familiar o un personaje inventado) en unas 150 palabras. Ordena los hechos con «avant de», «après avoir / être», «pendant que», «une fois que» y un futuro anterior.", m: "Ma tante Lucía a quitté Séville à vingt-cinq ans. Avant de partir, elle avait travaillé trois ans comme infirmière. Après avoir obtenu une bourse, elle s'est installée à Bruxelles. Les premiers mois ont été durs : pendant qu'elle suivait des cours de français le matin, elle faisait des ménages l'après-midi. Après s'être inscrite à l'ordre des infirmiers, elle a enfin pu exercer son métier. Une fois qu'elle a eu un contrat stable, elle a fait venir son compagnon. Ayant grandi dans une grande famille, elle souffrait beaucoup de la solitude ; sa mère lui manquait terriblement. Aujourd'hui, elle dirige un service de pédiatrie. Elle dit souvent qu'elle rentrera en Espagne quand elle aura pris sa retraite. Mais dès que ses petits-enfants seront nés, je crois qu'elle changera d'avis." } },

  { id: "fb2-6", t: "Langue et culture", es: "Lengua y cultura", v: [
    ["la langue maternelle", "la lengua materna"], ["la langue étrangère", "la lengua extranjera"], ["le plurilinguisme", "el plurilingüismo"], ["un accent", "un acento"], ["la prononciation", "la pronunciación"], ["le vocabulaire", "el vocabulario"], ["une expression", "una expresión"],
    ["une tournure", "un giro (lingüístico)"], ["un proverbe", "un refrán"], ["le sens", "el sentido, el significado"], ["traduire", "traducir"], ["interpréter", "interpretar"], ["s'exprimer", "expresarse"], ["couramment", "con fluidez"],
    ["la politesse", "la cortesía"], ["tutoyer", "tutear"], ["vouvoyer", "tratar de usted"], ["le ton", "el tono"], ["le langage corporel", "el lenguaje corporal"], ["un cliché", "un cliché"], ["la coutume", "la costumbre"],
    ["le roman", "la novela"], ["la poésie", "la poesía"], ["la pièce de théâtre", "la obra de teatro"], ["la représentation", "la representación"], ["une œuvre", "una obra"], ["contemporain", "contemporáneo"], ["l'argot", "la jerga, el argot"]],
    g: { t: "Los registros de lengua y el passé simple", n: `
## Tres registros
El francés cambia mucho según la situación. Saber reconocerlos, y no mezclarlos, es propio del nivel B2.
$ Familiar (amigos): T'as vu ce film ? · Je sais pas. · On y va ?
$ Estándar (uso general): Tu as vu ce film ? · Je ne sais pas. · Est-ce qu'on y va ?
$ Culto (escritos, discursos): Avez-vous vu ce film ? · Je l'ignore. · Y allons-nous ?

## Rasgos del registro familiar
- Se suprime **ne**: J'ai pas le temps. · C'est pas grave.
- **on** en lugar de «nous»; **ça** en lugar de «cela».
- Se acortan las palabras: t'as, y a (il y a), le resto, le ciné, sympa, l'appart.
- Pregunta solo con entonación o con el interrogativo al final: Tu fais quoi ? · Tu pars quand ?
- Vocabulario propio:
| le boulot (le travail) · bosser (travailler) · le fric (l'argent) · la bouffe (la nourriture) · un pote (un ami)
| un bouquin (un livre) · une bagnole (une voiture) · marrant (drôle) · nul (très mauvais) · en avoir marre (estar harto)

## Rasgos del registro culto
- Inversión del sujeto: Pourriez-vous… ? · Peut-être viendra-t-il. · Sans doute a-t-elle raison.
- **ne** sin valor negativo tras avant que, craindre que, à moins que: Je crains qu'il **ne** soit trop tard.
- Léxico preciso: un ouvrage (un livre), demeurer (rester), néanmoins, cependant, afin de.

## El passé simple: saber leerlo
Es el pasado de las novelas, los cuentos y la historia. No se usa al hablar: basta con reconocerlo. Equivale al passé composé.
$ verbos en -er: il parla · ils parlèrent
$ verbos en -ir y muchos en -re: il finit · ils finirent · il prit · ils prirent · il vit · il dit
$ en -u: il voulut · ils voulurent · il put · il lut · il vécut
$ irregulares: être → il fut, ils furent · avoir → il eut, ils eurent · faire → il fit · venir → il vint, ils vinrent · naître → il naquit
| Elle ouvrit la porte, regarda autour d'elle et sortit.      = Elle a ouvert la porte, a regardé autour d'elle et est sortie.
> Casi solo aparece en tercera persona. Si ves «fut», piensa en «a été»; si ves «fit», en «a fait».
`, e: [
      mc(3, "¿Qué frase es de registro familiar?", ["J'ai pas le temps, je bosse.", "Je n'ai pas le temps, je travaille.", "Le temps me manque, car je travaille.", "Je ne dispose pas du temps nécessaire."], "Sin «ne» y con «bosser»."),
      mc(3, "¿Qué significa «le boulot»?", ["El trabajo", "El dinero", "El coche", "La comida"], "le boulot = le travail."),
      mc(3, "¿Cuál es la pregunta más formal?", ["Pourriez-vous m'indiquer la gare ?", "Tu peux me dire où est la gare ?", "Elle est où, la gare ?", "C'est où la gare ?"], "Inversión + condicional + vous."),
      mc(3, "«Il fut élu en 1981» equivale a…", ["Il a été élu en 1981.", "Il fait élu en 1981.", "Il avait élu en 1981.", "Il sera élu en 1981."], "«fut» es el passé simple de être."),
      mc(3, "«Ils vinrent le lendemain» equivale a…", ["Ils sont venus le lendemain.", "Ils ont vu le lendemain.", "Ils viendront le lendemain.", "Ils ont vaincu le lendemain."], "«vinrent» es el passé simple de venir."),
      tx(3, "Pasa al registro estándar: «un bouquin» → «un ___»", ["livre"], "un bouquin = un livre."),
      mc(3, "En «Je crains qu'il ne soit trop tard», el «ne»…", ["no niega: es propio del registro culto", "niega el verbo", "es un error", "sustituye a «pas»"], "Es el «ne» expletivo."),
      mc(3, "«J'en ai marre» significa…", ["Estoy harto", "Tengo mucho", "Me da igual", "Estoy de acuerdo"], "en avoir marre = estar harto (familiar).")] },
    d: { t: "Tu ou vous ?", l: [
      ["Marco", "Dis, Camille, je peux te poser une question ? On dit « tu » ou « vous » au travail ?", "Oye, Camille, ¿puedo hacerte una pregunta? ¿En el trabajo se dice «tu» o «vous»?"],
      ["Camille", "Ah, bonne question ! Même nous, les Français, on n'est pas toujours sûrs.", "¡Ah, buena pregunta! Ni siquiera los franceses estamos siempre seguros."],
      ["Marco", "Hier, j'ai tutoyé mon nouveau directeur. Il m'a regardé bizarrement.", "Ayer tuteé a mi nuevo director. Me miró raro."],
      ["Camille", "Aïe. Il n'a pas dû apprécier. Dans ta boîte, on se vouvoie encore, apparemment.", "Ay. No le habrá hecho gracia. En tu empresa todavía se tratan de usted, por lo visto."],
      ["Marco", "Mais les collègues se tutoient tous !", "¡Pero si los compañeros se tutean todos!"],
      ["Camille", "Entre eux, oui. Avec un supérieur, on attend qu'il le propose. C'est une règle que personne n'a écrite, mais que tout le monde connaît.", "Entre ellos, sí. Con un superior se espera a que él lo proponga. Es una regla que nadie ha escrito, pero que todo el mundo conoce."],
      ["Marco", "Il a dû me trouver très impoli.", "Me habrá tomado por un maleducado."],
      ["Camille", "Mais non, t'inquiète pas. Il a bien vu que tu n'es pas français. Excuse-toi simplement.", "Que no, no te preocupes. Ya habrá visto que no eres francés. Simplemente discúlpate."],
      ["Marco", "Et qu'est-ce que je lui dis ?", "¿Y qué le digo?"],
      ["Camille", "Quelque chose comme : « Je vous prie de m'excuser, je ne voulais pas vous manquer de respect. » Et surtout, pas de « salut » ni de « ça va » !", "Algo como: «Le ruego que me disculpe, no quería faltarle al respeto». Y sobre todo, ¡nada de «salut» ni de «ça va»!"]],
      q: [
        mc(3, "Qu'a fait Marco hier ?", ["Il a tutoyé son directeur.", "Il a critiqué son directeur.", "Il a vouvoyé un collègue.", "Il a démissionné."], "«Hier, j'ai tutoyé mon nouveau directeur.»"),
        mc(3, "Que suppose Camille à propos de l'entreprise de Marco ?", ["Qu'on s'y vouvoie encore", "Que tout le monde s'y tutoie", "Que le directeur est très sévère", "Que Marco va être licencié"], "«Dans ta boîte, on se vouvoie encore, apparemment.»"),
        mc(3, "Quelle est la règle non écrite ?", ["On attend que le supérieur propose le tutoiement.", "On vouvoie tous les collègues.", "On tutoie seulement les personnes âgées.", "On demande le premier jour."], "«Avec un supérieur, on attend qu'il le propose.»"),
        mc(3, "Que conseille Camille ?", ["De s'excuser simplement", "De continuer à tutoyer le directeur", "De changer d'entreprise", "De ne rien dire"], "«Excuse-toi simplement.»")] },
    w: { c: "Escribe el mismo mensaje dos veces (unas 70 palabras cada uno): cancelas una cita porque estás enfermo. Primero a un amigo, en registro familiar; después a un cliente o a tu jefe, en registro formal.", m: "À un ami :\nSalut Tom ! Désolé, je peux pas venir ce soir, je suis crevé et j'ai de la fièvre. J'ai bossé toute la semaine et là, j'en peux plus. On remet ça à samedi ? Je t'appelle demain. Allez, bonne soirée et passe le bonjour aux potes !\n\nÀ un client :\nMonsieur,\nje suis au regret de devoir annuler notre rendez-vous de ce soir pour raison de santé. Je vous prie de bien vouloir m'en excuser. Seriez-vous disponible samedi matin ? Je me permettrai de vous rappeler demain afin de convenir d'une nouvelle date. Je vous prie d'agréer, Monsieur, mes salutations distinguées.\nAna Ruiz" } },
] });
