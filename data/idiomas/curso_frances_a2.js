// Curso de francés · nivel A2. Mismo formato que curso_frances.js (cadenas entre comillas dobles).
CURSO.frances.push({ id: "A2", nombre: "A2 · Plataforma", desc: "Contar lo que pasó, describir tu entorno, comparar, hacer planes y desenvolverte en compras, trabajo, salud e invitaciones.", u: [
  { id: "fa2-1", t: "Voyages et vacances", es: "Viajes y vacaciones", v: [
    ["le voyage", "el viaje"], ["le vol", "el vuelo"], ["un aéroport", "un aeropuerto"], ["un avion", "un avión"], ["la valise", "la maleta"], ["les bagages", "el equipaje"], ["le passeport", "el pasaporte"],
    ["un hébergement", "un alojamiento"], ["un hôtel", "un hotel"], ["la location", "el alquiler (vacacional)"], ["réserver", "reservar"], ["faire sa valise", "hacer la maleta"], ["partir", "salir, irse"], ["arriver", "llegar"],
    ["la correspondance", "el transbordo, el enlace"], ["rater", "perder (un tren, un vuelo)"], ["le retard", "el retraso"], ["la plage", "la playa"], ["visiter", "visitar (un lugar)"], ["une excursion", "una excursión"], ["à l'étranger", "en el extranjero"],
    ["le séjour", "la estancia"], ["fatigant", "agotador"], ["reposant", "relajante"], ["le souvenir", "el recuerdo"], ["le paysage", "el paisaje"], ["le guide", "el guía, la guía"], ["la carte", "el mapa"]],
    g: { t: "El imperfecto y el passé composé", n: `
## Cómo se forma el imperfecto
Se toma la forma de «nous» del presente, se quita -ons y se añade:
$ -ais · -ais · -ait · -ions · -iez · -aient
| parler (nous parlons): je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient
| faire (nous faisons): je faisais · avoir (nous avons): j'avais · prendre (nous prenons): je prenais
Solo «être» es irregular: **j'étais**, tu étais, il était, nous étions, vous étiez, ils étaient.
> -ais, -ait y -aient se pronuncian igual.

## Para qué sirve cada tiempo
- **Imperfecto**: el decorado. Descripciones, costumbres, lo que estaba pasando: Il faisait beau. · Quand j'étais petit, nous allions à la mer.
- **Passé composé**: los hechos. Acciones terminadas que hacen avanzar el relato: Nous avons visité Rome. · Le train est arrivé à minuit.
| Il pleuvait quand nous sommes arrivés.      Llovía cuando llegamos.
| J'étais fatiguée, alors je suis restée à l'hôtel.

## Palabras que orientan
- Con imperfecto: d'habitude, tous les jours, souvent, chaque été, avant, quand j'étais petit.
- Con passé composé: hier, un jour, soudain, tout à coup, la semaine dernière, en 2019.
> Coincide casi siempre con el español: «llovía» → il pleuvait; «llegamos» → nous sommes arrivés.
`, e: [
      mc(1, "¿Cuál es el imperfecto de «je parle»?", ["je parlais", "je parlé", "j'ai parlé", "je parlerai"], "Raíz de «nous parlons» + -ais."),
      mc(1, "Completa: «Quand j'___ petit, j'habitais à Lille.»", ["étais", "ai été", "suis", "été"], "Descripción de una etapa: imperfecto de être."),
      mc(1, "Completa: «Hier, nous ___ le musée.»", ["avons visité", "visitions", "visitons", "visiter"], "Hecho terminado con «hier»: passé composé."),
      mc(1, "Completa: «Il ___ quand nous sommes arrivés.»", ["pleuvait", "a plu", "pleut", "pleuvra"], "El decorado va en imperfecto."),
      tx(1, "Escribe el imperfecto de «nous faisons».", ["nous faisions", "faisions"], "fais- + -ions."),
      mc(1, "Completa: «Chaque été, nous ___ à la mer.»", ["allions", "sommes allés", "allons allés", "irons"], "Costumbre del pasado: imperfecto."),
      mc(1, "Completa: «Je lisais quand le téléphone ___.»", ["a sonné", "sonnait", "sonne", "sonner"], "Acción que interrumpe: passé composé."),
      tx(1, "Completa con «avoir» en imperfecto: «L'avion ___ deux heures de retard.»", ["avait"], "il avait.")] },
    d: { t: "Un voyage avec des surprises", l: [
      ["Mia", "Alors, ce voyage à Lisbonne, c'était comment ?", "Bueno, ¿qué tal ese viaje a Lisboa?"],
      ["Tom", "Très bien, mais le départ a été difficile. Notre avion avait trois heures de retard.", "Muy bien, pero la salida fue difícil. Nuestro avión tenía tres horas de retraso."],
      ["Mia", "Oh non ! Vous avez raté la correspondance ?", "¡Oh, no! ¿Perdisteis el enlace?"],
      ["Tom", "Oui. Nous avons dû attendre à Madrid et nous sommes arrivés à minuit.", "Sí. Tuvimos que esperar en Madrid y llegamos a medianoche."],
      ["Mia", "Et l'hôtel ?", "¿Y el hotel?"],
      ["Tom", "Heureusement, il était près de l'aéroport et la réception était encore ouverte.", "Por suerte estaba cerca del aeropuerto y la recepción seguía abierta."],
      ["Mia", "Qu'est-ce que vous avez fait là-bas ?", "¿Qué hicisteis allí?"],
      ["Tom", "Nous avons visité la vieille ville et nous avons fait une excursion à la plage. Il faisait très beau.", "Visitamos el casco antiguo e hicimos una excursión a la playa. Hacía muy buen tiempo."],
      ["Mia", "Ça a l'air reposant.", "Parece relajante."],
      ["Tom", "Oui ! La prochaine fois, nous voulons partir en train.", "¡Sí! La próxima vez queremos ir en tren."]],
      q: [
        mc(1, "Pourquoi le départ a-t-il été difficile ?", ["L'avion avait du retard.", "L'hôtel était fermé.", "Il pleuvait.", "Le vol était trop cher."], "«Notre avion avait trois heures de retard.»"),
        mc(1, "Où ont-ils dû attendre ?", ["À Madrid", "À Lisbonne", "À Paris", "À Porto"], "«Nous avons dû attendre à Madrid.»"),
        mc(1, "Quand sont-ils arrivés ?", ["À minuit", "L'après-midi", "Le matin", "À huit heures"], "«…nous sommes arrivés à minuit.»"),
        mc(1, "Quel temps faisait-il ?", ["Il faisait très beau.", "Il pleuvait.", "Il faisait froid.", "Il neigeait."], "«Il faisait très beau.»")] },
    w: { c: "Cuenta un viaje que hayas hecho: adónde fuiste, cómo era el lugar, qué problema hubo y qué visitaste. Combina imperfecto y passé composé.", m: "L'été dernier, je suis allée à Lisbonne avec ma sœur. Nous avons pris l'avion, mais il avait du retard et nous avons attendu trois heures. La ville était magnifique et il faisait chaud. Nous avons visité la vieille ville et nous avons fait une excursion à la plage. Je voulais rester plus longtemps !" } },

  { id: "fa2-2", t: "Le déménagement", es: "La mudanza", v: [
    ["le déménagement", "la mudanza"], ["déménager", "mudarse"], ["emménager", "instalarse en una vivienda"], ["le propriétaire", "el propietario, el casero"], ["le locataire", "el inquilino"], ["le voisin", "el vecino"], ["le rez-de-chaussée", "la planta baja"],
    ["un étage", "un piso, una planta"], ["un ascenseur", "un ascensor"], ["la cave", "el sótano, el trastero"], ["le couloir", "el pasillo"], ["le mur", "la pared"], ["le plafond", "el techo"], ["le sol", "el suelo"],
    ["une étagère", "una estantería"], ["le placard", "el armario empotrado"], ["le tapis", "la alfombra"], ["la lampe", "la lámpara"], ["le miroir", "el espejo"], ["le meuble", "el mueble"], ["le carton", "la caja de cartón"],
    ["ranger", "ordenar, guardar"], ["prêter", "prestar"], ["emprunter", "pedir prestado"], ["apporter", "traer (algo)"], ["montrer", "enseñar, mostrar"], ["lumineux", "luminoso"], ["confortable", "cómodo"]],
    g: { t: "Los pronombres de objeto directo e indirecto", n: `
## Pronombres de objeto directo (COD)
Sustituyen a algo o a alguien que recibe la acción directamente:
$ me · te · le / la (l') · nous · vous · les
| Tu vois le miroir ? – Oui, je le vois.      Je range les cartons. → Je les range.

## Pronombres de objeto indirecto (COI)
Sustituyen a una persona introducida por **à**:
$ me · te · lui · nous · vous · leur
| Je téléphone à Paul. → Je lui téléphone.      Je parle à mes voisins. → Je leur parle.
«lui» vale para él y para ella. Verbos frecuentes con «à»: parler à, téléphoner à, écrire à, répondre à, demander à, donner à, prêter à, montrer à.
> «leur» pronombre no lleva nunca -s: Je **leur** donne les clés.

## Dónde se colocan
- Delante del verbo conjugado: Je **le** prends. · Je **ne le** prends **pas**.
- En passé composé, delante del auxiliar: Je **l'**ai rangé. · Je **lui** ai téléphoné.
- Con un infinitivo, delante del infinitivo: Je vais **le** ranger. · Tu peux **lui** écrire ?
- En imperativo afirmativo, detrás y con guion: Prends-**le** ! · Donne-**moi** la lampe. (me → moi)

## En resumen
Si el verbo se construye sin preposición, COD (le, la, les). Si lleva «à» + persona, COI (lui, leur).
| J'aide ma voisine. → Je l'aide.      Je réponds à ma voisine. → Je lui réponds.
`, e: [
      mc(1, "Sustituye: «Je range les livres.» → «Je ___ range.»", ["les", "leur", "le", "lui"], "COD plural: les."),
      mc(1, "Sustituye: «Je téléphone à ma mère.» → «Je ___ téléphone.»", ["lui", "la", "le", "leur"], "téléphoner à + persona → lui."),
      mc(1, "Sustituye: «Elle parle à ses voisins.» → «Elle ___ parle.»", ["leur", "les", "leurs", "lui"], "à + varias personas → leur, sin -s."),
      mc(1, "¿Qué frase es correcta?", ["Je vais le ranger.", "Je le vais ranger.", "Je vais ranger le.", "Je vais ranger lui."], "Con infinitivo, el pronombre va delante del infinitivo."),
      tx(1, "Sustituye «le canapé»: «J'ai acheté le canapé.» → «Je ___ acheté.»", ["l'ai"], "Delante del auxiliar, y le → l' ante vocal."),
      mc(1, "Pon en negativo: «Je le prends.»", ["Je ne le prends pas.", "Je le ne prends pas.", "Je ne prends le pas.", "Je ne prends pas le."], "ne + pronombre + verbo + pas."),
      mc(1, "Imperativo: «Donne la lampe à moi.» →", ["Donne-moi la lampe.", "Me donne la lampe.", "Donne-me la lampe.", "Donne la lampe me."], "En imperativo afirmativo va detrás, con guion, y me → moi."),
      tx(1, "Sustituye «à Paul»: «Tu peux écrire à Paul ?» → «Tu peux ___ écrire ?»", ["lui"], "écrire à + persona → lui.")] },
    d: { t: "Le jour du déménagement", l: [
      ["Sara", "Voilà, c'est le nouvel appartement. Où est-ce qu'on met le canapé ?", "Bueno, este es el piso nuevo. ¿Dónde ponemos el sofá?"],
      ["Ben", "On le met contre le mur, sous la fenêtre.", "Lo ponemos contra la pared, debajo de la ventana."],
      ["Sara", "D'accord. Et les étagères ?", "Vale. ¿Y las estanterías?"],
      ["Ben", "Je les ai déjà montées dans le couloir.", "Ya las he montado en el pasillo."],
      ["Sara", "Parfait. Tu as vu la lampe ?", "Perfecto. ¿Has visto la lámpara?"],
      ["Ben", "Elle est encore dans la voiture, entre les cartons. Je vais la chercher.", "Sigue en el coche, entre las cajas. Voy a por ella."],
      ["Sara", "Et les clés de la cave ? Le propriétaire te les a données ?", "¿Y las llaves del trastero? ¿Te las ha dado el casero?"],
      ["Ben", "Non, pas encore. Je lui téléphone ce soir.", "No, todavía no. Le llamo esta noche."],
      ["Sara", "Au fait, les voisins nous ont prêté leur échelle.", "Por cierto, los vecinos nos han prestado su escalera."],
      ["Ben", "C'est gentil ! On leur apportera un gâteau demain.", "¡Qué amables! Mañana les llevaremos un pastel."]],
      q: [
        mc(1, "Où mettent-ils le canapé ?", ["Sous la fenêtre", "Dans le couloir", "Devant la porte", "Sur le balcon"], "«On le met contre le mur, sous la fenêtre.»"),
        mc(1, "Où sont les étagères ?", ["Dans le couloir", "Dans la voiture", "À la cave", "À côté du canapé"], "«Je les ai déjà montées dans le couloir.»"),
        mc(1, "Où est la lampe ?", ["Dans la voiture", "Sur la table", "Dans le couloir", "Sous la fenêtre"], "«Elle est encore dans la voiture.»"),
        mc(1, "Qu'est-ce que les voisins ont prêté ?", ["Une échelle", "Un gâteau", "Les clés", "Une lampe"], "«…les voisins nous ont prêté leur échelle.»")] },
    w: { c: "Acabas de mudarte. Escribe a un amigo cinco frases: cómo es el piso, quién te ha ayudado, qué te han prestado y a quién vas a invitar. Usa pronombres (le, la, les, lui, leur).", m: "J'ai emménagé samedi dans un appartement au deuxième étage. Il est petit, mais je le trouve très lumineux. Mon frère m'a aidé : je lui ai offert un bon dîner. Les voisins sont sympas, ils m'ont prêté des outils et je les ai déjà rendus. Je vais leur proposer de prendre un café ce week-end." } },

  { id: "fa2-3", t: "Le travail", es: "El trabajo", v: [
    ["le métier", "el oficio, la profesión"], ["le poste", "el puesto"], ["une entreprise", "una empresa"], ["le patron", "el jefe"], ["le collègue", "el compañero de trabajo"], ["la candidature", "la candidatura"], ["postuler", "solicitar un puesto"],
    ["le CV", "el currículum"], ["un entretien", "una entrevista"], ["le salaire", "el sueldo"], ["gagner", "ganar"], ["les horaires", "el horario"], ["les heures supplémentaires", "las horas extra"], ["la formation", "la formación"],
    ["une expérience", "una experiencia"], ["la réunion", "la reunión"], ["la tâche", "la tarea"], ["le stage", "las prácticas"], ["démissionner", "dimitir"], ["licencier", "despedir"], ["au chômage", "en paro"],
    ["à temps partiel", "a tiempo parcial"], ["à temps plein", "a tiempo completo"], ["le congé", "el permiso, las vacaciones"], ["la pause", "el descanso"], ["stressant", "estresante"], ["satisfait", "satisfecho"], ["la réussite", "el éxito"]],
    g: { t: "Los relativos qui, que y où; causa y consecuencia", n: `
## Unir dos frases con un relativo
- **qui** es sujeto del verbo que sigue: C'est un collègue **qui** parle trois langues. (él habla)
- **que** (qu') es objeto directo; después viene un sujeto: C'est le poste **que** je voudrais. (yo quiero el puesto)
- **où** indica lugar o momento: L'entreprise **où** je travaille est à Lyon. · Le jour **où** j'ai commencé…
> Truco: tras «qui» viene un verbo; tras «que», un sujeto. «qui» nunca se apostrofa; «que» sí: qu'il, qu'elle.

## Decir la causa
| parce que (porque): Je cherche un autre poste parce que je veux gagner plus.
| comme (como), siempre al principio: Comme j'étais malade, je suis resté chez moi.
| à cause de + nombre (por culpa de) · grâce à + nombre (gracias a)
| Je suis en retard à cause des embouteillages.      J'ai trouvé ce stage grâce à une amie.

## Decir la consecuencia
| donc (por tanto) · alors (entonces, así que) · c'est pourquoi (por eso)
| Je parle allemand, donc je travaille avec les clients de Berlin.

## pourquoi y parce que
Se pregunta con **pourquoi** y se responde con **parce que**:
| Pourquoi voulez-vous ce poste ? – Parce que j'aime le travail en équipe.
`, e: [
      mc(1, "Completa: «C'est une entreprise ___ recrute beaucoup.»", ["qui", "que", "où", "qu'"], "Sujeto de «recrute»: qui."),
      mc(1, "Completa: «Le métier ___ je préfère, c'est infirmier.»", ["que", "qui", "où", "quoi"], "Objeto directo; detrás va el sujeto «je»: que."),
      mc(1, "Completa: «Voici le bureau ___ je travaille.»", ["où", "que", "qui", "quand"], "Lugar: où."),
      mc(1, "Completa: «C'est le collègue ___ elle a rencontré hier.»", ["qu'", "qui", "que", "où"], "que + vocal = qu'."),
      tx(1, "Completa: «___ il pleuvait, j'ai pris le bus.» (como)", ["Comme"], "«Comme» abre la frase y da la causa."),
      mc(1, "Completa: «Je suis fatigué ___ j'ai fait des heures supplémentaires.»", ["parce que", "donc", "alors", "à cause de"], "Causa con verbo: parce que."),
      mc(1, "Completa: «Le train était en retard ___ la neige.»", ["à cause de", "parce que", "grâce à", "donc"], "Causa negativa + nombre: à cause de."),
      tx(1, "Completa: «J'ai un entretien demain, ___ je prépare mon CV.» (por tanto)", ["donc", "alors"], "Consecuencia: donc o alors.")] },
    d: { t: "L'entretien d'embauche", l: [
      ["Mme Lang", "Bonjour, monsieur Navarro. Pourquoi voulez-vous travailler chez nous ?", "Buenos días, señor Navarro. ¿Por qué quiere trabajar con nosotros?"],
      ["M. Navarro", "Parce que votre entreprise travaille avec l'Amérique latine et que je voudrais utiliser mes langues.", "Porque su empresa trabaja con América Latina y me gustaría usar mis idiomas."],
      ["Mme Lang", "Je vois sur votre CV que vous avez travaillé trois ans à Madrid.", "Veo en su currículum que ha trabajado tres años en Madrid."],
      ["M. Navarro", "Oui, comme informaticien. C'est une expérience qui m'a beaucoup appris.", "Sí, como informático. Es una experiencia que me enseñó mucho."],
      ["Mme Lang", "Le poste que nous proposons est à temps plein. C'est un problème ?", "El puesto que ofrecemos es a tiempo completo. ¿Es un problema?"],
      ["M. Navarro", "Pas du tout. Je peux aussi faire des heures supplémentaires si c'est nécessaire.", "En absoluto. También puedo hacer horas extra si hace falta."],
      ["Mme Lang", "Très bien. Vous avez des questions ?", "Muy bien. ¿Tiene alguna pregunta?"],
      ["M. Navarro", "Oui. Je voudrais savoir quand je pourrais commencer.", "Sí. Me gustaría saber cuándo podría empezar."],
      ["Mme Lang", "Si tout va bien, le premier mai.", "Si todo va bien, el uno de mayo."]],
      q: [
        mc(1, "Pourquoi M. Navarro veut-il ce travail ?", ["Parce qu'il veut utiliser ses langues.", "Parce que le salaire est élevé.", "Parce qu'il habite à côté.", "Parce qu'il est au chômage."], "«…je voudrais utiliser mes langues.»"),
        mc(1, "Combien de temps a-t-il travaillé à Madrid ?", ["Trois ans", "Un an", "Cinq ans", "Trois mois"], "«…vous avez travaillé trois ans à Madrid.»"),
        mc(1, "Quel est son métier ?", ["Informaticien", "Professeur", "Médecin", "Vendeur"], "«Oui, comme informaticien.»"),
        mc(1, "Quand peut-il peut-être commencer ?", ["Le premier mai", "Tout de suite", "En été", "L'année prochaine"], "«Si tout va bien, le premier mai.»")] },
    w: { c: "Explica en cinco frases a qué te dedicas o qué estudias, qué te gusta de ello y por qué. Usa «qui», «que», «où», «parce que» y «donc».", m: "Je travaille comme infirmier dans un hôpital qui se trouve au centre de Valence. C'est un métier que j'aime beaucoup parce que je peux aider les gens. Le service où je travaille est parfois stressant. Nous faisons souvent des heures supplémentaires, donc je suis fatigué le soir. Mais mes collègues sont très sympas." } },

  { id: "fa2-4", t: "Les achats et les vêtements", es: "Las compras y la ropa", v: [
    ["les vêtements", "la ropa"], ["le pantalon", "el pantalón"], ["la chemise", "la camisa"], ["le chemisier", "la blusa"], ["la jupe", "la falda"], ["la robe", "el vestido"], ["le pull", "el jersey"],
    ["la veste", "la chaqueta"], ["le manteau", "el abrigo"], ["la chaussure", "el zapato"], ["la taille", "la talla"], ["la pointure", "el número (de zapato)"], ["la couleur", "el color"], ["essayer", "probarse"],
    ["aller bien", "sentar bien"], ["la cabine d'essayage", "el probador"], ["le prix", "el precio"], ["les soldes", "las rebajas"], ["bon marché", "barato"], ["la caisse", "la caja"], ["en espèces", "en efectivo"],
    ["le ticket de caisse", "el tique de compra"], ["échanger", "cambiar (un artículo)"], ["rembourser", "reembolsar"], ["serré", "estrecho, ajustado"], ["large", "ancho, holgado"], ["à la mode", "a la moda"], ["léger", "ligero"]],
    g: { t: "Comparar y señalar: comparativo, superlativo y demostrativos", n: `
## El comparativo con adjetivos y adverbios
$ plus … que (más … que) · moins … que (menos … que) · aussi … que (tan … como)
| Cette veste est plus chère que le manteau.      Ce pull est aussi léger que la chemise.
Irregulares:
| bon → **meilleur** (mejor, adjetivo): Ce magasin est meilleur.
| bien → **mieux** (mejor, adverbio): Cette robe te va mieux.

## Comparar cantidades
$ plus de · moins de · autant de + nombre + que
| Il y a plus de choix ici que dans l'autre magasin.      J'ai autant de pulls que toi.
Con un verbo: Je dépense **plus que** toi. · Elle achète **autant que** moi.

## El superlativo
**le / la / les** + plus (o moins) + adjetivo + **de**:
| C'est la veste la plus chère du magasin.      C'est le moins cher de tous.
| le meilleur prix · la meilleure qualité

## Los demostrativos
$ ce + masculino: ce pantalon · cet + masculino con vocal: cet imperméable · cette + femenino: cette robe · ces + plural: ces chaussures
Para distinguir dos cosas se añade **-ci** (este) o **-là** (ese, aquel): ce pull-ci, cette jupe-là.
Como pronombres: **celui-ci, celle-ci, ceux-ci, celles-ci** (este, esta, estos, estas).
| Vous préférez quelle veste ? – Celle-ci.
`, e: [
      mc(1, "Completa: «Cette robe est ___ chère que la jupe.»", ["plus", "plus de", "meilleur", "autant"], "Con adjetivo: plus … que."),
      mc(1, "Completa: «Ce magasin est ___ que l'autre.»", ["meilleur", "plus bon", "mieux", "plus bien"], "El comparativo de «bon» es «meilleur»."),
      mc(1, "Completa: «Cette veste te va ___ que le manteau.»", ["mieux", "meilleur", "plus bon", "meilleure"], "Con un verbo se usa el adverbio: mieux."),
      mc(1, "Completa: «Il y a ___ clients qu'hier.»", ["plus de", "plus", "aussi", "meilleurs"], "Con un nombre: plus de."),
      tx(1, "Completa: «Ce pull est ___ léger que la chemise.» (tan)", ["aussi"], "aussi … que."),
      mc(1, "Completa: «___ imperméable est trop grand.»", ["Cet", "Ce", "Cette", "Ces"], "Masculino que empieza por vocal: cet."),
      mc(1, "Completa: «C'est le pantalon ___ du magasin.»", ["le moins cher", "moins cher", "le moins de cher", "plus moins cher"], "Superlativo: le moins + adjetivo."),
      tx(1, "Completa: «___ chaussures sont trop serrées.» (estos)", ["Ces"], "Plural: ces.")] },
    d: { t: "Dans une boutique", l: [
      ["Vendeuse", "Bonjour, madame. Je peux vous aider ?", "Buenos días, señora. ¿Puedo ayudarla?"],
      ["Cliente", "Oui, je cherche une veste chaude pour l'hiver.", "Sí, busco una chaqueta de abrigo para el invierno."],
      ["Vendeuse", "Quelle taille faites-vous ?", "¿Qué talla tiene?"],
      ["Cliente", "Du 38. Vous avez cette veste grise en bleu ?", "La 38. ¿Tienen esta chaqueta gris en azul?"],
      ["Vendeuse", "Non, désolée, mais nous avons ce modèle-ci en bleu marine. Il est moins cher que l'autre.", "No, lo siento, pero tenemos este modelo en azul marino. Es más barato que el otro."],
      ["Cliente", "Je peux l'essayer ?", "¿Puedo probármelo?"],
      ["Vendeuse", "Bien sûr. Les cabines d'essayage sont au fond.", "Claro. Los probadores están al fondo."],
      ["Cliente", "Elle me va bien, mais les manches sont un peu trop longues.", "Me queda bien, pero las mangas son un poco largas."],
      ["Vendeuse", "Essayez la taille en dessous. Et vous pouvez l'échanger pendant quinze jours avec le ticket de caisse.", "Pruebe la talla inferior. Y puede cambiarla durante quince días con el tique."],
      ["Cliente", "D'accord, je la prends. Je peux payer par carte ?", "De acuerdo, me la llevo. ¿Puedo pagar con tarjeta?"]],
      q: [
        mc(1, "Que cherche la cliente ?", ["Une veste chaude", "Un manteau", "Une robe", "Des chaussures"], "«…je cherche une veste chaude pour l'hiver.»"),
        mc(1, "De quelle couleur est l'autre modèle ?", ["Bleu marine", "Gris", "Noir", "Rouge"], "«…ce modèle-ci en bleu marine.»"),
        mc(1, "Quel est le problème de la veste ?", ["Les manches sont trop longues.", "Elle est trop chère.", "Elle est trop serrée.", "La couleur ne lui plaît pas."], "«…les manches sont un peu trop longues.»"),
        mc(1, "Pendant combien de temps peut-on l'échanger ?", ["Quinze jours", "Deux jours", "Un mois", "On ne peut pas."], "«…pendant quinze jours avec le ticket de caisse.»")] },
    w: { c: "Describe qué ropa llevas hoy y compara dos prendas tuyas (cuál es más cómoda, más cara…). Cinco frases con comparativos, un superlativo y un demostrativo.", m: "Aujourd'hui, je porte un pantalon noir et un pull gris. Ce pull est plus chaud que ma veste, mais il est moins élégant. Mes nouvelles chaussures sont aussi confortables que les anciennes. Mon manteau bleu est le vêtement le plus cher de mon placard. C'est aussi celui qui me va le mieux." } },

  { id: "fa2-5", t: "Sport et santé", es: "Deporte y salud", v: [
    ["s'entraîner", "entrenar"], ["se reposer", "descansar"], ["se dépêcher", "darse prisa"], ["se sentir", "sentirse"], ["se détendre", "relajarse"], ["se blesser", "lesionarse"], ["se promener", "pasear"],
    ["un entraînement", "un entrenamiento"], ["le club", "el club"], ["une équipe", "un equipo"], ["courir", "correr"], ["la course", "la carrera"], ["marcher", "andar"], ["la natation", "la natación"],
    ["le régime", "la dieta"], ["une alimentation", "una alimentación"], ["le poids", "el peso"], ["maigrir", "adelgazar"], ["grossir", "engordar"], ["en bonne santé", "con buena salud"], ["régulièrement", "con regularidad"],
    ["une habitude", "una costumbre"], ["le stress", "el estrés"], ["le sommeil", "el sueño"], ["la forme", "la forma física"], ["arrêter de", "dejar de"], ["commencer à", "empezar a"], ["bientôt", "pronto"]],
    g: { t: "El futuro simple y las condiciones con si", n: `
## Cómo se forma el futuro simple
Infinitivo + las terminaciones **-ai, -as, -a, -ons, -ez, -ont** (las del presente de «avoir»).
| parler: je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront
| finir: je finirai · dormir: je dormirai
Los verbos en -re pierden la -e: prendre → je prendrai · boire → je boirai.

## Raíces irregulares
Las terminaciones no cambian nunca; solo la raíz:
| être: je serai · avoir: j'aurai · aller: j'irai · faire: je ferai · venir: je viendrai · voir: je verrai
| pouvoir: je pourrai · devoir: je devrai · vouloir: je voudrai · savoir: je saurai · courir: je courrai · il faut: il faudra

## Futuro simple o futuro próximo
- **aller + infinitivo**: algo ya decidido o inmediato → Je vais courir ce soir.
- **Futuro simple**: planes más lejanos, promesas, previsiones → L'année prochaine, je ferai un marathon.

## Condiciones reales: si + presente
Tras «si» va el **presente**, nunca el futuro. En la otra parte, futuro, presente o imperativo.
| Si tu t'entraînes régulièrement, tu te sentiras mieux.
| S'il pleut, je n'irai pas courir.         (si + il = s'il)
| Si tu es fatigué, repose-toi !

## quand + futuro
A diferencia del español, tras «quand» se usa el futuro, no el subjuntivo:
| Quand j'aurai le temps, je m'inscrirai au club.      Cuando tenga tiempo, me apuntaré al club.
`, e: [
      mc(1, "¿Cuál es el futuro de «je parle»?", ["je parlerai", "je parlerais", "je parlais", "je vais parlé"], "Infinitivo + -ai."),
      mc(1, "Completa: «Demain, nous ___ à la piscine.»", ["irons", "allerons", "allons allés", "irions"], "Raíz irregular de aller: ir-."),
      mc(1, "Completa: «Si tu ___ du sport, tu te sentiras mieux.»", ["fais", "feras", "ferais", "as fait"], "Tras «si», presente."),
      mc(1, "Completa: «Quand j'___ le temps, je m'inscrirai au club.»", ["aurai", "ai eu", "aie", "avais"], "Tras «quand» con idea de futuro, futuro."),
      tx(1, "Escribe el futuro de «être» para «je».", ["je serai", "serai"], "Raíz ser-."),
      mc(1, "Completa: «Elle ___ un régime après les vacances.»", ["fera", "faira", "ferai", "fairera"], "faire → fer-: elle fera."),
      mc(1, "¿Cómo se escribe «si + il»?", ["s'il", "si il", "s'i", "sil"], "Solo delante de «il» e «ils»: s'il, s'ils."),
      tx(1, "Completa con «pouvoir»: «Tu ___ venir samedi ?» (futuro)", ["pourras"], "Raíz pourr- + -as.")] },
    d: { t: "Un nouveau départ", l: [
      ["Text", "Depuis janvier, Paul a changé de vie. Avant, il ne faisait pas de sport et il se sentait souvent fatigué.", "Desde enero Paul ha cambiado de vida. Antes no hacía deporte y a menudo se sentía cansado."],
      ["Text", "Son médecin lui a dit : « Si vous continuez comme ça, vous aurez des problèmes de santé. »", "Su médico le dijo: «Si sigue así, tendrá problemas de salud»."],
      ["Text", "Maintenant, Paul se lève plus tôt et il court trois fois par semaine dans le parc. Le week-end, il va à la piscine avec des amis.", "Ahora Paul se levanta antes y corre tres veces por semana por el parque. Los fines de semana va a la piscina con amigos."],
      ["Text", "Au début, c'était difficile. Mais sa sœur l'a aidé : elle courait avec lui tous les matins.", "Al principio era difícil. Pero su hermana le ayudó: corría con él todas las mañanas."],
      ["Text", "Aujourd'hui, il a perdu cinq kilos et il dort mieux. En mai, il participera à sa première course de dix kilomètres.", "Hoy ha perdido cinco kilos y duerme mejor. En mayo participará en su primera carrera de diez kilómetros."],
      ["Text", "« Quand j'aurai fini cette course, dit-il, je m'inscrirai dans un club. »", "«Cuando haya terminado esa carrera —dice—, me apuntaré a un club»."]],
      q: [
        mc(1, "Comment Paul se sentait-il avant ?", ["Souvent fatigué", "Très en forme", "Stressé mais sportif", "Heureux"], "«…il se sentait souvent fatigué.»"),
        mc(1, "Combien de fois par semaine court-il ?", ["Trois fois", "Tous les jours", "Une fois", "Seulement le week-end"], "«…il court trois fois par semaine.»"),
        mc(1, "Qui l'a aidé au début ?", ["Sa sœur", "Son médecin", "Ses amis", "Un entraîneur"], "«Mais sa sœur l'a aidé.»"),
        mc(1, "Que fera-t-il en mai ?", ["Il participera à une course.", "Il partira en vacances.", "Il s'inscrira à la piscine.", "Il commencera un régime."], "«En mai, il participera à sa première course.»")] },
    w: { c: "Escribe tus propósitos para cuidarte este año: qué harás, cuándo y con qué condiciones. Cinco frases con futuro simple, «si» y «quand».", m: "Cette année, je ferai plus de sport. Je m'inscrirai à la piscine et j'irai nager deux fois par semaine. Si j'ai le temps, je marcherai aussi le dimanche. Je mangerai moins de sucre et je dormirai plus. Quand je serai en forme, je participerai à une petite course." } },

  { id: "fa2-6", t: "Fêtes et invitations", es: "Fiestas e invitaciones", v: [
    ["la fête", "la fiesta"], ["fêter", "celebrar"], ["un anniversaire", "un cumpleaños"], ["le mariage", "la boda"], ["une invitation", "una invitación"], ["inviter", "invitar"], ["un invité", "un invitado"],
    ["le cadeau", "el regalo"], ["offrir", "regalar"], ["amener", "llevar (a alguien)"], ["féliciter", "felicitar"], ["les félicitations", "la enhorabuena"], ["la surprise", "la sorpresa"], ["la bougie", "la vela"],
    ["le gâteau", "el pastel"], ["trinquer", "brindar"], ["accepter", "aceptar"], ["refuser", "rechazar"], ["annuler", "cancelar"], ["préparer", "preparar"], ["décorer", "decorar"],
    ["une ambiance", "un ambiente"], ["Noël", "Navidad"], ["le Nouvel An", "el Año Nuevo"], ["Pâques", "Pascua"], ["le jour férié", "el día festivo"], ["le feu d'artifice", "los fuegos artificiales"], ["Joyeux anniversaire !", "¡feliz cumpleaños!"]],
    g: { t: "El condicional: cortesía, deseos, consejos y propuestas", n: `
## Cómo se forma
La raíz del **futuro** + las terminaciones del **imperfecto**: -ais, -ais, -ait, -ions, -iez, -aient.
| aimer: j'aimerais, tu aimerais, il aimerait, nous aimerions, vous aimeriez, ils aimeraient
| être: je serais · avoir: j'aurais · aller: j'irais · faire: je ferais · venir: je viendrais
| pouvoir: je pourrais · vouloir: je voudrais · devoir: je devrais · il faut: il faudrait
> Futuro «je parlerai» y condicional «je parlerais» solo se distinguen por la -s (y apenas al oído).

## Para qué sirve
- **Cortesía**: Je voudrais un gâteau. · Pourriez-vous m'aider ? · Auriez-vous une table pour six ?
- **Deseo**: J'aimerais faire une grande fête. · Ça me ferait plaisir.
- **Consejo**: Tu devrais l'inviter. · À ta place, je refuserais.
- **Propuesta**: On pourrait fêter ça ensemble. · Ça te dirait de venir ?

## Invitar, aceptar y rechazar
| Tu es libre samedi ? Ça te dirait de venir dîner ?
| Avec plaisir ! · Volontiers. · C'est gentil, je viendrai.
| Je suis désolé, je ne peux pas, je travaille. · Une autre fois, peut-être ?

## Felicitar
| Joyeux anniversaire ! · Bonne année ! · Joyeux Noël ! · Félicitations ! · Tous mes vœux de bonheur !
`, e: [
      mc(1, "¿Cuál es la forma más cortés?", ["Pourriez-vous m'aider, s'il vous plaît ?", "Aidez-moi !", "Vous devez m'aider.", "Je veux de l'aide."], "Condicional de pouvoir + s'il vous plaît."),
      mc(1, "Completa: «Je ___ un café, s'il vous plaît.»", ["voudrais", "veux", "voudrai", "voulais"], "«Je voudrais» es la fórmula para pedir."),
      mc(1, "Completa (un consejo): «Tu ___ te reposer.»", ["devrais", "dois toi", "devras", "devais"], "Tu devrais = deberías."),
      tx(1, "Escribe el condicional de «aimer» para «je».", ["j'aimerais", "aimerais"], "aimer- + -ais."),
      mc(1, "Completa (una propuesta): «On ___ aller au restaurant samedi.»", ["pourrait", "pouvait", "pourra eu", "pu"], "On pourrait = podríamos."),
      mc(1, "Completa: «À ta place, j'___ l'invitation.»", ["accepterais", "accepterai", "acceptais", "ai accepté"], "Consejo con «à ta place»: condicional."),
      mc(1, "¿Con qué se forma el condicional?", ["La raíz del futuro y las terminaciones del imperfecto", "La raíz del presente y las terminaciones del futuro", "El infinitivo y las terminaciones del presente", "El auxiliar avoir y el participio"], "Raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient."),
      tx(1, "Completa con «être» en condicional: «Ce ___ sympa de venir.»", ["serait"], "être → ser- + -ait.")] },
    d: { t: "L'invitation", l: [
      ["Nina", "Salut, Léo ! Samedi, je fête mes trente ans. Ça te dirait de venir ?", "¡Hola, Léo! El sábado celebro mis treinta años. ¿Te apetecería venir?"],
      ["Léo", "Avec plaisir ! Tu fais ça où ?", "¡Encantado! ¿Dónde lo haces?"],
      ["Nina", "Chez moi, dans le jardin, à partir de dix-neuf heures. Il y aura de la musique et un feu d'artifice.", "En mi casa, en el jardín, a partir de las siete. Habrá música y fuegos artificiales."],
      ["Léo", "Génial. Je pourrais apporter quelque chose ?", "Genial. ¿Podría llevar algo?"],
      ["Nina", "Tu pourrais faire une salade ? Ma mère s'occupe du gâteau.", "¿Podrías hacer una ensalada? Mi madre se encarga del pastel."],
      ["Léo", "Pas de problème. Est-ce que je pourrais amener ma copine ?", "Sin problema. ¿Podría llevar a mi novia?"],
      ["Nina", "Bien sûr ! J'aimerais beaucoup la rencontrer.", "¡Claro! Me encantaría conocerla."],
      ["Léo", "Parfait. Et comme cadeau, qu'est-ce qui te ferait plaisir ?", "Perfecto. Y de regalo, ¿qué te haría ilusión?"],
      ["Nina", "Rien de spécial. Un bon livre, ce serait parfait.", "Nada especial. Un buen libro sería perfecto."]],
      q: [
        mc(1, "Quel âge va avoir Nina ?", ["Trente ans", "Vingt ans", "Quarante ans", "Dix-huit ans"], "«…je fête mes trente ans.»"),
        mc(1, "Où a lieu la fête ?", ["Dans le jardin de Nina", "Au restaurant", "Dans un parc", "Chez Léo"], "«Chez moi, dans le jardin.»"),
        mc(1, "Que doit apporter Léo ?", ["Une salade", "Le gâteau", "Des boissons", "De la musique"], "«Tu pourrais faire une salade ?»"),
        mc(1, "Qu'est-ce qui ferait plaisir à Nina ?", ["Un livre", "Des fleurs", "Un gâteau", "Un voyage"], "«Un bon livre, ce serait parfait.»")] },
    w: { c: "Un amigo te invita a su boda, pero ese día no puedes. Escríbele: agradece la invitación, explica por qué no puedes ir y propón veros otro día.", m: "Cher Marc,\nmerci beaucoup pour ton invitation ! J'aimerais vraiment venir à ton mariage, mais je dois travailler ce week-end-là. Je suis désolée. On pourrait se voir en juillet ? Je vous inviterais au restaurant, toi et Julie. Je vous souhaite une très belle fête. Toutes mes félicitations !\nJe t'embrasse,\nAna" } },
] });
