// Curso de francés · nivel B1. Mismo formato que curso_frances.js (cadenas entre comillas dobles).
CURSO.frances.push({ id: "B1", nombre: "B1 · Umbral", desc: "Entender textos claros sobre temas conocidos, contar experiencias, justificar opiniones y resolver la mayoría de situaciones de un viaje o del trabajo.", u: [
  { id: "fb1-1", t: "Médias et communication", es: "Medios y comunicación", v: [
    ["une information", "una información, una noticia"], ["le journal", "el periódico; el telediario"], ["le magazine", "la revista"], ["un article", "un artículo"], ["une émission", "un programa (de radio o televisión)"], ["la chaîne", "la cadena"], ["la publicité", "la publicidad"],
    ["le réseau", "la red"], ["les réseaux sociaux", "las redes sociales"], ["un écran", "una pantalla"], ["un appareil", "un aparato"], ["le fichier", "el archivo"], ["télécharger", "descargar"], ["mettre en ligne", "subir, publicar en la red"],
    ["enregistrer", "guardar; grabar"], ["supprimer", "borrar"], ["la connexion", "la conexión"], ["joignable", "localizable"], ["les données", "los datos"], ["la source", "la fuente"], ["fiable", "fiable"],
    ["un avis", "una opinión"], ["informer", "informar"], ["publier", "publicar"], ["partager", "compartir"], ["s'abonner à", "suscribirse a"], ["le titre", "el titular"], ["l'actualité", "la actualidad"]],
    g: { t: "Los relativos dont, ce qui, ce que y lequel", n: `
## dont
Sustituye a un complemento introducido por **de**. Equivale a «del que, de la que, cuyo».
| Je parle d'un film. → Le film **dont** je parle est italien.
| J'ai besoin de ce fichier. → C'est le fichier **dont** j'ai besoin.
| J'aime les articles de cette journaliste. → C'est une journaliste **dont** j'aime les articles. (cuyos artículos)
Verbos y expresiones con «de»: parler de, avoir besoin de, avoir envie de, se souvenir de, s'occuper de, être content de, rêver de.

## ce qui, ce que, ce dont
Equivalen a «lo que». Se elige igual que qui, que y dont:
| Ce qui m'intéresse, c'est l'actualité.           (sujeto)
| Je ne comprends pas ce que tu dis.               (objeto directo)
| Voilà ce dont j'avais besoin.                    (con un verbo que lleva «de»)

## Preposición + lequel
Tras una preposición, para cosas: **lequel, laquelle, lesquels, lesquelles**.
| C'est l'émission pendant laquelle il a annoncé la nouvelle.
| Les raisons pour lesquelles il est parti sont inconnues.
Con «à» y «de» se contraen: **auquel**, à laquelle, **auxquels**, **auxquelles** · **duquel**, de laquelle, **desquels**.
| C'est un sujet auquel je m'intéresse.
Para personas se prefiere preposición + **qui**: La collègue avec qui je travaille.

## Destacar un elemento
| C'est … qui (sujeto): C'est ma grand-mère qui lit le journal tous les matins.
| C'est … que (lo demás): C'est sur mon téléphone que je lis les informations.
| Ce qui me plaît, c'est… · Ce que je préfère, c'est…
`, e: [
      mc(2, "Completa: «C'est le journal ___ je t'ai parlé.»", ["dont", "que", "qui", "où"], "parler de → dont."),
      mc(2, "Completa: «___ m'énerve, c'est la publicité.»", ["Ce qui", "Ce que", "Ce dont", "Qui"], "Sujeto de «énerve»: ce qui."),
      mc(2, "Completa: «Je ne sais pas ___ il veut.»", ["ce qu'", "ce qui", "ce dont", "quoi"], "Objeto directo de «veut»: ce que → ce qu'."),
      mc(2, "Completa: «C'est un sujet ___ je m'intéresse.»", ["auquel", "dont", "que", "duquel"], "s'intéresser à → à + lequel = auquel."),
      mc(2, "Completa: «C'est une chaîne ___ j'aime les émissions.»", ["dont", "que", "qui", "laquelle"], "Posesión (cuyos programas): dont."),
      tx(2, "Completa: «Voilà ___ dont j'ai besoin.»", ["ce"], "ce dont = aquello de lo que."),
      mc(2, "Completa: «La collègue avec ___ je travaille est très sympa.»", ["qui", "que", "dont", "lequel"], "Preposición + persona: qui."),
      tx(2, "Completa: «C'est mon frère ___ m'a envoyé cet article.»", ["qui"], "Mise en relief del sujeto: c'est … qui.")] },
    d: { t: "Les informations, hier et aujourd'hui", l: [
      ["Text", "Mon grand-père, qui aura quatre-vingts ans cette année, lit tous les matins le journal que le facteur dépose devant sa porte. C'est un rituel auquel il ne veut pas renoncer.", "Mi abuelo, que cumplirá ochenta años este año, lee cada mañana el periódico que el cartero le deja en la puerta. Es un ritual al que no quiere renunciar."],
      ["Text", "Moi, c'est sur mon téléphone que je m'informe. Les nouvelles que je lis viennent d'applications et des réseaux sociaux, et ce sont souvent des amis qui m'envoient des articles.", "Yo me informo en el móvil. Las noticias que leo vienen de aplicaciones y de las redes sociales, y a menudo son amigos quienes me mandan artículos."],
      ["Text", "C'est pratique, mais il y a un problème : tout ce qui circule en ligne n'est pas vrai. Il existe des sites dont personne ne connaît les sources et des titres dont le seul but est d'attirer l'attention.", "Es práctico, pero hay un problema: no todo lo que circula en línea es verdad. Existen páginas cuyas fuentes nadie conoce y titulares cuyo único objetivo es llamar la atención."],
      ["Text", "Mon grand-père dit qu'il ne fait confiance qu'aux journalistes dont il connaît le nom. Je trouve qu'il n'a pas tort. C'est pourquoi je me suis abonnée à un hebdomadaire que je lis tranquillement le dimanche, sur papier.", "Mi abuelo dice que solo se fía de los periodistas cuyo nombre conoce. Creo que no le falta razón. Por eso me he suscrito a un semanario que leo tranquilamente los domingos, en papel."]],
      q: [
        mc(2, "Comment le grand-père s'informe-t-il ?", ["Il lit le journal.", "Il regarde la télévision.", "Il utilise des applications.", "Il écoute la radio."], "«…lit tous les matins le journal…»"),
        mc(2, "D'où viennent les nouvelles que lit la narratrice ?", ["D'applications et des réseaux sociaux", "Du journal papier", "De la télévision", "De son grand-père"], "«…viennent d'applications et des réseaux sociaux…»"),
        mc(2, "Quel est le problème d'Internet selon le texte ?", ["Tout n'est pas vrai.", "C'est trop cher.", "C'est trop lent.", "Il n'y a pas assez d'informations."], "«…tout ce qui circule en ligne n'est pas vrai.»"),
        mc(2, "Qu'a fait la narratrice ?", ["Elle s'est abonnée à un hebdomadaire.", "Elle a vendu son téléphone.", "Elle a créé un blog.", "Elle a supprimé ses applications."], "«…je me suis abonnée à un hebdomadaire…»")] },
    w: { c: "Explica cómo te informas tú: qué medios usas, cuáles te parecen fiables y por qué. Seis o siete frases con «dont», «ce qui / ce que» y una frase con «c'est … qui / que».", m: "Je m'informe surtout grâce aux podcasts que j'écoute en allant au travail. Je lis aussi un journal dont j'apprécie les articles de fond. Ce qui me dérange sur les réseaux sociaux, c'est que n'importe qui peut écrire n'importe quoi. Une source à laquelle je fais confiance cite toujours ses auteurs. Les nouvelles que mes amis m'envoient, je les vérifie d'abord. C'est le titre qui attire, mais c'est l'article qu'il faut lire. Voilà ce que j'ai appris." } },

  { id: "fb1-2", t: "Environnement et nature", es: "Medio ambiente y naturaleza", v: [
    ["l'environnement", "el medio ambiente"], ["la protection", "la protección"], ["le changement climatique", "el cambio climático"], ["le réchauffement", "el calentamiento"], ["la pollution", "la contaminación"], ["les déchets", "los residuos"], ["la poubelle", "el cubo de basura"],
    ["trier", "separar (residuos)"], ["recycler", "reciclar"], ["un emballage", "un envase"], ["le plastique", "el plástico"], ["l'énergie", "la energía"], ["l'électricité", "la electricidad"], ["renouvelable", "renovable"],
    ["une éolienne", "un aerogenerador"], ["le panneau solaire", "el panel solar"], ["économiser", "ahorrar"], ["consommer", "consumir"], ["gaspiller", "derrochar"], ["la circulation", "el tráfico"], ["les transports en commun", "el transporte público"],
    ["la voiture électrique", "el coche eléctrico"], ["une espèce", "una especie"], ["disparaître", "desaparecer"], ["protéger", "proteger"], ["durable", "sostenible"], ["la planète", "el planeta"], ["la sécheresse", "la sequía"]],
    g: { t: "El subjuntivo presente", n: `
## Cómo se forma
Raíz de la tercera persona del plural del presente (ils) + **-e, -es, -e, -ions, -iez, -ent**.
| parler (ils parlent): que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent
| finir (ils finissent): que je finisse · prendre (ils prennent): que je prenne, que nous prenions
«nous» y «vous» coinciden con el imperfecto: que nous prenions, que vous veniez.

## Irregulares
| être: sois, sois, soit, soyons, soyez, soient · avoir: aie, aies, ait, ayons, ayez, aient
| aller: aille · faire: fasse · pouvoir: puisse · savoir: sache · vouloir: veuille · il faut: qu'il faille

## Cuándo se usa
Tras **que**, cuando la primera parte expresa:
- **Obligación o necesidad**: Il faut que nous réduisions nos déchets. · Il est important que…
- **Voluntad o deseo**: Je veux que tu viennes. · J'aimerais que la ville fasse plus.
- **Sentimiento**: Je suis content que tu sois là. · J'ai peur qu'il soit trop tard.
- **Duda**: Je doute que ce soit suffisant. · Je ne pense pas que ce soit vrai.
Y tras ciertas conjunciones: **pour que** (para que), **bien que** (aunque), **avant que** (antes de que), **à condition que** (a condición de que), **sans que** (sin que).

## Cuándo no
- Con certeza u opinión afirmativa, indicativo: Je pense que c'**est** vrai. · Je suis sûr qu'il **viendra**.
- **espérer que** + indicativo: J'espère que tu **vas** bien.
- Si el sujeto es el mismo, infinitivo: Je veux **partir**. (pero: Je veux que **tu partes**.)
> Coincide casi siempre con el subjuntivo español. Dos diferencias: «espérer que» y «quand» + futuro no lo llevan.
`, e: [
      mc(2, "Completa: «Il faut que nous ___ moins d'énergie.»", ["consommions", "consommons", "consommerons", "consommer"], "Il faut que + subjuntivo; nous → -ions."),
      mc(2, "Completa: «Je veux que tu ___ avec moi.»", ["viennes", "viens", "viendras", "venir"], "Voluntad + sujetos distintos: subjuntivo."),
      mc(2, "Completa: «Je pense que c'___ une bonne idée.»", ["est", "soit", "sera été", "être"], "Opinión afirmativa: indicativo."),
      mc(2, "Completa: «Bien qu'il ___ froid, nous irons à vélo.»", ["fasse", "fait", "fera", "faisait"], "bien que + subjuntivo."),
      tx(2, "Escribe el subjuntivo de «être»: «Je suis content que tu ___ là.»", ["sois"], "que tu sois."),
      mc(2, "Completa: «J'espère que vous ___ bien.»", ["allez", "alliez", "aillez", "irez été"], "espérer que + indicativo."),
      mc(2, "¿Qué frase es correcta?", ["Je veux partir tôt.", "Je veux que je parte tôt.", "Je veux que partir tôt.", "Je veux de partir tôt."], "Mismo sujeto: infinitivo."),
      tx(2, "Completa con «pouvoir»: «Je t'explique pour que tu ___ comprendre.»", ["puisses"], "pour que + subjuntivo: que tu puisses.")] },
    d: { t: "Une ville plus verte", l: [
      ["Text", "À Grenoble, on agit depuis longtemps pour l'environnement. Dans les années deux mille, la ville a construit un quartier entier où presque aucune voiture ne circule.", "En Grenoble se actúa desde hace tiempo por el medio ambiente. En los años dos mil, la ciudad construyó un barrio entero por el que apenas circulan coches."],
      ["Text", "Les immeubles sont si bien isolés qu'il faut très peu d'énergie pour les chauffer. Une grande partie de l'électricité est produite par des panneaux solaires installés sur les toits.", "Los edificios están tan bien aislados que hace falta muy poca energía para calentarlos. Gran parte de la electricidad la producen paneles solares instalados en los tejados."],
      ["Text", "La mairie veut aussi que les habitants changent leurs habitudes : pour que chacun puisse se déplacer sans voiture, elle a créé de nouvelles pistes cyclables et prolongé les lignes de tramway.", "El ayuntamiento quiere además que los vecinos cambien de costumbres: para que todo el mundo pueda desplazarse sin coche, ha creado nuevos carriles bici y ha prolongado las líneas de tranvía."],
      ["Text", "Bien que le projet soit un succès, il y a des critiques. Les loyers ont beaucoup augmenté et certaines familles craignent que le quartier devienne trop cher pour elles. Il faudrait, disent-elles, que l'écologie soit accessible à tous.", "Aunque el proyecto es un éxito, hay críticas. Los alquileres han subido mucho y algunas familias temen que el barrio se vuelva demasiado caro para ellas. Haría falta, dicen, que la ecología estuviera al alcance de todos."]],
      q: [
        mc(2, "Qu'est-ce que la ville a construit ?", ["Un quartier presque sans voitures", "Une nouvelle autoroute", "Une centrale électrique", "Un aéroport"], "«…un quartier entier où presque aucune voiture ne circule.»"),
        mc(2, "D'où vient une grande partie de l'électricité ?", ["Des panneaux solaires", "Du charbon", "Des éoliennes", "De l'étranger"], "«…produite par des panneaux solaires installés sur les toits.»"),
        mc(2, "Qu'a fait la mairie pour les déplacements ?", ["Elle a créé des pistes cyclables et prolongé le tramway.", "Elle a interdit les vélos.", "Elle a construit des parkings.", "Elle a rendu le bus payant."], "«…de nouvelles pistes cyclables et prolongé les lignes de tramway.»"),
        mc(2, "Que craignent certaines familles ?", ["Que le quartier devienne trop cher", "Qu'il y ait trop de bruit", "Que le tramway disparaisse", "Que les panneaux solaires tombent en panne"], "«…craignent que le quartier devienne trop cher pour elles.»")] },
    w: { c: "Describe qué habría que hacer en tu ciudad por el medio ambiente. Seis frases con «il faut que», «je voudrais que», «pour que» y «bien que».", m: "Dans ma ville, il faut que nous réduisions la circulation au centre. Je voudrais que la mairie crée plus de pistes cyclables pour que les enfants puissent aller à l'école à vélo. Il est important que les transports en commun soient moins chers. Bien que le tri des déchets soit obligatoire, beaucoup de gens ne le font pas. J'aimerais aussi qu'on plante plus d'arbres. J'espère que les choses changeront bientôt." } },

  { id: "fb1-3", t: "Études et avenir", es: "Estudios y futuro", v: [
    ["les études", "los estudios"], ["une université", "una universidad"], ["la matière", "la asignatura"], ["le diplôme", "el título"], ["le baccalauréat", "el examen final de bachillerato"], ["la note", "la nota"], ["un examen", "un examen"],
    ["réussir", "aprobar; lograr"], ["échouer", "suspender; fracasar"], ["la bourse", "la beca"], ["un apprentissage", "una formación en alternancia"], ["la formation continue", "la formación continua"], ["les connaissances", "los conocimientos"], ["la compétence", "la competencia, la habilidad"],
    ["le dossier", "el expediente, la solicitud"], ["la date limite", "la fecha límite"], ["le but", "el objetivo"], ["le projet", "el proyecto, el plan"], ["avoir l'intention de", "tener intención de"], ["choisir", "elegir"], ["le choix", "la elección"],
    ["l'avenir", "el futuro"], ["le rêve", "el sueño"], ["atteindre", "alcanzar"], ["abandonner", "abandonar"], ["faire des efforts", "esforzarse"], ["le défi", "el reto"], ["une occasion", "una oportunidad"]],
    g: { t: "La hipótesis con si y la expresión de la finalidad", n: `
## Tres tipos de condición
- **Posible**: si + presente → futuro. Si je réussis l'examen, j'irai à l'université.
- **Poco probable o irreal ahora**: si + imperfecto → condicional. Si j'avais une bourse, je partirais à l'étranger.
- (La hipótesis sobre el pasado, si + pluscuamperfecto → condicional pasado, se ve en B2.)
> Regla de oro: detrás de «si» no va nunca ni futuro ni condicional. «Si j'aurais» es el error más conocido del francés.

## El condicional, recordatorio
Raíz del futuro + -ais, -ais, -ait, -ions, -iez, -aient:
| je partirais · tu ferais · il serait · nous aurions · vous iriez · ils pourraient

## Otras formas de plantear una hipótesis
| au cas où + condicional: Au cas où tu changerais d'avis, appelle-moi.
| à condition de + infinitivo / à condition que + subjuntivo
| sinon (si no): Dépêche-toi, sinon tu rateras l'inscription.

## La finalidad
- Mismo sujeto: **pour / afin de** + infinitivo → Je travaille le soir pour payer mes études.
- Sujetos distintos: **pour que / afin que** + subjuntivo → Je t'envoie le dossier pour que tu le lises.
- **de peur de** + infinitivo / **de peur que** + subjuntivo: por miedo a (que).
| Il révise tous les jours afin de réussir.      Elle parle lentement afin que tout le monde comprenne.
`, e: [
      mc(2, "Completa: «Si j'___ plus de temps, j'apprendrais le japonais.»", ["avais", "aurais", "ai", "aurai"], "si + imperfecto → condicional."),
      mc(2, "Completa: «Si tu révises, tu ___ ton examen.»", ["réussiras", "réussirais", "réussissais", "réussisses"], "Condición posible: si + presente → futuro."),
      mc(2, "¿Qué frase es correcta?", ["Si je pouvais, je changerais de métier.", "Si je pourrais, je changerais de métier.", "Si je pouvais, je changeais de métier.", "Si je peux, je changerais de métier."], "Tras «si», imperfecto; en la otra parte, condicional."),
      mc(2, "Completa: «Je fais un stage ___ avoir plus d'expérience.»", ["pour", "pour que", "afin que", "de peur que"], "Mismo sujeto: pour + infinitivo."),
      mc(2, "Completa: «Je t'explique ___ tu comprennes.»", ["pour que", "pour", "afin de", "parce que"], "Sujetos distintos: pour que + subjuntivo."),
      tx(2, "Completa con «être»: «Si j'___ toi, je choisirais la médecine.»", ["étais"], "si + imperfecto: si j'étais toi."),
      mc(2, "Completa: «Au cas où tu ___ besoin d'aide, appelle-moi.»", ["aurais", "auras", "as eu", "aies"], "au cas où + condicional."),
      tx(2, "Completa con «partir»: «Si j'avais une bourse, je ___ à l'étranger.»", ["partirais"], "Condicional: partir- + -ais.")] },
    d: { t: "Après le bac", l: [
      ["Elena", "Tu sais déjà ce que tu feras après le bac ?", "¿Sabes ya qué harás después del bachillerato?"],
      ["David", "J'ai l'intention de travailler un an à l'étranger pour améliorer mon anglais.", "Tengo intención de trabajar un año en el extranjero para mejorar mi inglés."],
      ["Elena", "Et ensuite ?", "¿Y después?"],
      ["David", "Ensuite, je voudrais faire des études d'ingénieur. Si j'obtiens une bourse, j'irai à Toulouse.", "Después me gustaría estudiar Ingeniería. Si consigo una beca, iré a Toulouse."],
      ["Elena", "Tu as de la chance. Moi, je n'ai pas encore choisi. Mes parents voudraient que je fasse du droit.", "Tienes suerte. Yo todavía no he elegido. A mis padres les gustaría que estudiara Derecho."],
      ["David", "Et toi, ça te plairait ?", "Y a ti, ¿te gustaría?"],
      ["Elena", "Pas vraiment. Si je pouvais, je ferais une école de photographie.", "No mucho. Si pudiera, iría a una escuela de fotografía."],
      ["David", "Alors, tu devrais leur parler pour qu'ils comprennent ton projet.", "Entonces deberías hablar con ellos para que entiendan tu plan."],
      ["Elena", "Tu as raison. Si je ne dis rien, je le regretterai. Je leur parlerai ce week-end.", "Tienes razón. Si no digo nada, me arrepentiré. Hablaré con ellos este fin de semana."]],
      q: [
        mc(2, "Pourquoi David veut-il partir à l'étranger ?", ["Pour améliorer son anglais", "Pour faire du tourisme", "Pour y faire ses études", "Pour rejoindre sa famille"], "«…pour améliorer mon anglais.»"),
        mc(2, "Quelles études David veut-il faire ?", ["Des études d'ingénieur", "Du droit", "De la médecine", "De la photographie"], "«…je voudrais faire des études d'ingénieur.»"),
        mc(2, "Que souhaitent les parents d'Elena ?", ["Qu'elle fasse du droit", "Qu'elle devienne photographe", "Qu'elle parte à l'étranger", "Qu'elle travaille tout de suite"], "«Mes parents voudraient que je fasse du droit.»"),
        mc(2, "Que fera Elena ce week-end ?", ["Elle parlera à ses parents.", "Elle enverra son dossier.", "Elle partira à Toulouse.", "Elle passera un examen."], "«Je leur parlerai ce week-end.»")] },
    w: { c: "Escribe sobre tus planes y tus sueños: qué harás seguro, qué harías si pudieras y para qué. Siete frases con «si» + presente, «si» + imperfecto y «pour (que)».", m: "L'année prochaine, je continuerai à apprendre le français pour passer le DELF B2. Si je réussis l'examen, je chercherai un stage à Lyon. J'étudie un peu chaque jour afin de progresser régulièrement. Si j'avais plus de temps, je suivrais aussi un cours de conversation. Et si je pouvais choisir, je vivrais six mois à Montréal. J'en parle souvent à ma famille pour qu'elle comprenne mon projet. Si je ne tente rien, je le regretterai." } },

  { id: "fb1-4", t: "Souvenirs et biographies", es: "Recuerdos y biografías", v: [
    ["l'enfance", "la infancia"], ["la jeunesse", "la juventud"], ["grandir", "crecer, criarse"], ["naître", "nacer"], ["élever", "criar, educar"], ["la génération", "la generación"], ["un événement", "un acontecimiento"],
    ["vivre", "vivir"], ["tomber amoureux", "enamorarse"], ["se marier", "casarse"], ["se séparer", "separarse"], ["le divorce", "el divorcio"], ["mourir", "morir"], ["la mort", "la muerte"],
    ["émigrer", "emigrar"], ["le pays natal", "la tierra natal"], ["le mal du pays", "la morriña"], ["la guerre", "la guerra"], ["la paix", "la paz"], ["à l'époque", "en aquella época"], ["autrefois", "antiguamente"],
    ["soudain", "de repente"], ["finalement", "finalmente"], ["entre-temps", "entretanto"], ["le destin", "el destino"], ["fier", "orgulloso"], ["se souvenir de", "acordarse de"], ["raconter", "contar"]],
    g: { t: "El pluscuamperfecto, la concordancia del participio y el tiempo", n: `
## El pluscuamperfecto
Lo que ya había ocurrido antes de otro hecho pasado: **avoir / être** en imperfecto + participio.
| j'avais fini · tu avais vu · elle était partie · nous étions arrivés · ils s'étaient mariés
| Quand je suis arrivé, le train était déjà parti.      Cuando llegué, el tren ya había salido.

## Los tres tiempos del relato
- **Passé composé**: los hechos → Elle a rencontré mon grand-père en 1962.
- **Imperfecto**: el decorado y las costumbres → Ils habitaient à six dans une pièce.
- **Pluscuamperfecto**: lo anterior → Elle avait quitté son village deux ans plus tôt.

## La concordancia del participio
- Con **être**: con el sujeto → Elle est né**e** en 1940. · Ils se sont marié**s**.
- Con **avoir**: no concuerda con el sujeto, pero sí con el objeto directo si va **delante** del verbo:
| J'ai pris des photos. → Les photos que j'ai pris**es**. · Je les ai pris**es**.
| Cette histoire, ma grand-mère me l'a raconté**e** cent fois.

## Situar en el tiempo
| il y a + duración (hace): Elle est arrivée il y a dix ans.
| depuis + duración o fecha (desde, desde hace; la acción continúa): Elle vit ici depuis dix ans.
| pendant + duración (durante): Elle a travaillé pendant quarante ans.
| en + duración (tiempo que se tarda) o año: Elle a tout appris en six mois. · en 1962
| dans + duración (dentro de): Elle prendra sa retraite dans deux ans.
> Con «depuis» el francés usa el presente, como el español: «Vivo aquí desde hace diez años» = J'habite ici depuis dix ans.
`, e: [
      mc(2, "Completa: «Quand je suis arrivé, le film ___ déjà ___.»", ["avait … commencé", "a … commencé", "était … commencé", "avait … commencer"], "Anterior a otro pasado: pluscuamperfecto; «commencer» lleva avoir."),
      mc(2, "Completa: «Elle était fatiguée parce qu'elle ___ toute la nuit.»", ["avait travaillé", "a travaillé", "travaillait eu", "aura travaillé"], "La causa es anterior: pluscuamperfecto."),
      mc(2, "Completa: «Les lettres que j'ai ___ sont sur la table.»", ["écrites", "écrit", "écrits", "écrite"], "El objeto directo (les lettres, femenino plural) va delante: concuerda."),
      mc(2, "Completa: «Ils se sont ___ en 1962.»", ["mariés", "marié", "mariées", "marier"], "Pronominal con être: concuerda con el sujeto."),
      mc(2, "Completa: «J'habite à Lyon ___ cinq ans.» (y sigo viviendo allí)", ["depuis", "il y a", "pendant", "dans"], "La acción continúa: depuis + presente."),
      tx(2, "Completa: «Elle est arrivée en France ___ dix ans.» (hace)", ["il y a"], "il y a + duración = hace."),
      mc(2, "Completa: «Il a écrit son livre ___ trois mois.» (tardó tres meses)", ["en", "dans", "depuis", "il y a"], "Tiempo empleado en hacer algo: en."),
      tx(2, "Completa: «Je pars ___ deux semaines.» (dentro de)", ["dans"], "dans + duración = dentro de.")] },
    d: { t: "La vie de ma grand-mère", l: [
      ["Text", "Ma grand-mère Marthe est née en 1940 dans un petit village de Bretagne. Quand elle avait cinq ans, sa famille a dû quitter la région et s'est installée à Lyon.", "Mi abuela Marthe nació en 1940 en un pueblecito de Bretaña. Cuando tenía cinco años, su familia tuvo que dejar la región y se instaló en Lyon."],
      ["Text", "Les premières années ont été dures. Ils habitaient à six dans une seule pièce et, quand il faisait froid, tout le monde dormait dans la cuisine.", "Los primeros años fueron duros. Vivían seis en una sola habitación y, cuando hacía frío, todos dormían en la cocina."],
      ["Text", "À quatorze ans, Marthe a commencé un apprentissage de couturière. Elle avait toujours aimé coudre : sa mère lui avait appris quand elle était petite.", "A los catorce, Marthe empezó a formarse como modista. Siempre le había gustado coser: su madre le había enseñado de pequeña."],
      ["Text", "Elle a rencontré mon grand-père en 1962, dans un bal. Ils se sont mariés un an plus tard et ont ouvert une petite boutique qu'ils ont tenue pendant quarante ans.", "Conoció a mi abuelo en 1962, en un baile. Se casaron un año después y abrieron una tiendecita que llevaron durante cuarenta años."],
      ["Text", "Aujourd'hui, elle a plus de quatre-vingts ans. Quand elle raconte cette époque, elle dit toujours : « Nous n'avions pas grand-chose, mais nous étions ensemble. »", "Hoy tiene más de ochenta años. Cuando cuenta aquella época siempre dice: «No teníamos gran cosa, pero estábamos juntos»."]],
      q: [
        mc(2, "Quand la famille a-t-elle quitté la Bretagne ?", ["Quand Marthe avait cinq ans", "Quand Marthe avait quatorze ans", "En 1962", "Après le mariage"], "«Quand elle avait cinq ans, sa famille a dû quitter la région…»"),
        mc(2, "Quel métier Marthe a-t-elle appris ?", ["Couturière", "Vendeuse", "Cuisinière", "Institutrice"], "«…un apprentissage de couturière.»"),
        mc(2, "Qui lui avait appris à coudre ?", ["Sa mère", "Son mari", "Une voisine", "Sa patronne"], "«…sa mère lui avait appris quand elle était petite.»"),
        mc(2, "Pendant combien de temps ont-ils tenu la boutique ?", ["Quarante ans", "Un an", "Quatorze ans", "Vingt ans"], "«…qu'ils ont tenue pendant quarante ans.»")] },
    w: { c: "Escribe la biografía breve de un familiar o de alguien a quien admires (siete u ocho frases). Combina passé composé, imperfecto y pluscuamperfecto, y usa «il y a», «pendant» y «depuis».", m: "Mon père est né en 1965 à Grenade. À dix-huit ans, il est parti à Barcelone pour faire des études d'architecture. Il n'avait jamais quitté sa ville et, au début, il avait le mal du pays. Le soir, il travaillait dans un restaurant : c'est là qu'il a rencontré ma mère. Ils se sont mariés en 1992 et se sont installés à Valence. Mon père a dirigé un petit cabinet pendant trente ans. Il a pris sa retraite il y a deux ans. Depuis, il peint tous les jours." } },

  { id: "fb1-5", t: "Société et vie en commun", es: "Sociedad y convivencia", v: [
    ["la société", "la sociedad"], ["le citoyen", "el ciudadano"], ["le gouvernement", "el gobierno"], ["la loi", "la ley"], ["une élection", "unas elecciones"], ["voter", "votar"], ["le parti", "el partido"],
    ["la démocratie", "la democracia"], ["la liberté", "la libertad"], ["la justice", "la justicia"], ["l'égalité", "la igualdad"], ["le droit", "el derecho"], ["le devoir", "el deber"], ["l'impôt", "el impuesto"],
    ["la pauvreté", "la pobreza"], ["la richesse", "la riqueza"], ["pauvre", "pobre"], ["riche", "rico"], ["le bénévolat", "el voluntariado"], ["s'engager", "comprometerse, implicarse"], ["soutenir", "apoyar"],
    ["la tolérance", "la tolerancia"], ["le préjugé", "el prejuicio"], ["le respect", "el respeto"], ["la responsabilité", "la responsabilidad"], ["exiger", "exigir"], ["se plaindre", "quejarse"], ["la manifestation", "la manifestación"]],
    g: { t: "El estilo indirecto y la expresión de la opinión", n: `
## El estilo indirecto en presente
- Afirmación → **que**: « Je suis d'accord. » → Il dit **qu'**il est d'accord.
- Pregunta de sí o no → **si**: « Tu votes ? » → Elle demande **si** je vote.
- «Qu'est-ce que…?» → **ce que**: « Qu'est-ce que tu penses ? » → Il demande **ce que** je pense.
- Otras preguntas conservan su interrogativo: Il demande **où** j'habite, **pourquoi** je pars.
- Orden → **de** + infinitivo: « Signez ici. » → Il nous demande **de** signer.
Los pronombres y posesivos se adaptan: « Mon quartier… » → Elle dit que **son** quartier…

## Con el verbo introductor en pasado
Los tiempos retroceden:
$ presente → imperfecto: « Je suis fatigué. » → Il a dit qu'il **était** fatigué.
$ passé composé → pluscuamperfecto: « J'ai voté. » → Il a dit qu'il **avait voté**.
$ futuro → condicional: « Je viendrai. » → Il a dit qu'il **viendrait**.
El imperfecto y el condicional no cambian. Los marcadores de tiempo sí:
| aujourd'hui → ce jour-là · demain → le lendemain · hier → la veille · la semaine prochaine → la semaine suivante

## Dar la opinión
- Afirmativa, con indicativo: Je pense que · Je crois que · Je trouve que · À mon avis · Selon moi → Je pense que c'**est** injuste.
- Negativa o de duda, con subjuntivo: Je ne pense pas que ce **soit** juste. · Je doute qu'il **ait** raison.
| Je suis d'accord avec toi. · Je ne suis pas du tout d'accord. · Tu as raison, mais… · Ça dépend.
`, e: [
      mc(2, "Estilo indirecto: «Je suis d'accord.» → Elle dit ___", ["qu'elle est d'accord.", "que je suis d'accord.", "si elle est d'accord.", "d'être d'accord."], "que + el pronombre adaptado."),
      mc(2, "Estilo indirecto: «Tu viens à la manifestation ?» → Il demande ___", ["si je viens à la manifestation.", "que je viens à la manifestation.", "est-ce que je viens à la manifestation.", "ce que je viens à la manifestation."], "Pregunta de sí o no: si."),
      mc(2, "Estilo indirecto: «Qu'est-ce que vous voulez ?» → Il demande ___", ["ce que nous voulons.", "qu'est-ce que nous voulons.", "que nous voulons.", "si nous voulons."], "qu'est-ce que → ce que."),
      mc(2, "Estilo indirecto: «Signez la pétition.» → Elle nous demande ___", ["de signer la pétition.", "que signer la pétition.", "si signer la pétition.", "signez la pétition."], "Orden: de + infinitivo."),
      mc(2, "En pasado: «Je viendrai demain.» → Il a dit ___", ["qu'il viendrait le lendemain.", "qu'il viendra demain.", "qu'il venait la veille.", "qu'il était venu demain."], "futuro → condicional; demain → le lendemain."),
      tx(2, "En pasado: «J'ai voté.» → Elle a dit qu'elle ___ voté.", ["avait"], "passé composé → pluscuamperfecto."),
      mc(2, "Completa: «Je ne pense pas que ce ___ une bonne loi.»", ["soit", "est", "sera", "était"], "Opinión negativa: subjuntivo."),
      tx(2, "Completa con «être»: «Je trouve que c'___ injuste.»", ["est"], "Opinión afirmativa: indicativo.")] },
    d: { t: "Sauvons la maison des jeunes !", l: [
      ["Jana", "Tu as entendu ? Le maire a annoncé que la maison des jeunes fermerait en juin.", "¿Te has enterado? El alcalde ha anunciado que la casa de la juventud cerrará en junio."],
      ["Félix", "C'est vrai ? Il a expliqué pourquoi ?", "¿De verdad? ¿Ha explicado por qué?"],
      ["Jana", "Il a dit que la ville n'avait plus d'argent et qu'elle devait faire des économies.", "Ha dicho que el ayuntamiento ya no tenía dinero y que debía ahorrar."],
      ["Félix", "Je ne crois pas que ce soit la vraie raison. Ils viennent de construire un parking qui a coûté des millions.", "No creo que esa sea la verdadera razón. Acaban de construir un aparcamiento que ha costado millones."],
      ["Jana", "Je suis d'accord. Hier, j'ai demandé à la directrice ce qu'elle comptait faire.", "Estoy de acuerdo. Ayer le pregunté a la directora qué pensaba hacer."],
      ["Félix", "Et qu'est-ce qu'elle a répondu ?", "¿Y qué contestó?"],
      ["Jana", "Qu'elle avait écrit au conseil municipal, mais que personne ne lui avait répondu.", "Que había escrito al pleno, pero que nadie le había respondido."],
      ["Félix", "Alors, il faut qu'on s'engage. À mon avis, une pétition serait un bon début.", "Entonces tenemos que implicarnos. En mi opinión, una recogida de firmas sería un buen comienzo."],
      ["Jana", "Bonne idée. Elle m'a justement demandé si nous pouvions l'aider samedi.", "Buena idea. Precisamente me preguntó si podíamos ayudarla el sábado."],
      ["Félix", "Dis-lui que je viendrai.", "Dile que iré."]],
      q: [
        mc(2, "Qu'a annoncé le maire ?", ["La fermeture de la maison des jeunes", "La construction d'un parking", "Une nouvelle élection", "Une hausse des impôts"], "«…la maison des jeunes fermerait en juin.»"),
        mc(2, "Quelle raison le maire a-t-il donnée ?", ["La ville doit faire des économies.", "Les jeunes n'y vont plus.", "Le bâtiment est trop vieux.", "La directrice a démissionné."], "«…elle devait faire des économies.»"),
        mc(2, "Qu'a fait la directrice ?", ["Elle a écrit au conseil municipal.", "Elle a organisé une manifestation.", "Elle a quitté son poste.", "Elle a rencontré le maire."], "«…elle avait écrit au conseil municipal…»"),
        mc(2, "Que propose Félix ?", ["Une pétition", "Une grève", "Une fête", "Un article dans le journal"], "«…une pétition serait un bon début.»")] },
    w: { c: "Cuenta una conversación o una noticia reciente en estilo indirecto (qué dijo cada uno, qué preguntó) y da tu opinión. Siete frases, con el verbo introductor en pasado.", m: "Hier, ma voisine m'a dit que la mairie voulait fermer la bibliothèque du quartier. Elle m'a expliqué que le bâtiment coûtait trop cher. Je lui ai demandé si les habitants avaient été consultés. Elle a répondu que personne ne leur avait rien demandé. Elle a ajouté qu'une réunion aurait lieu la semaine suivante et elle m'a demandé de venir. À mon avis, c'est une mauvaise décision. Je ne pense pas qu'on puisse économiser sur la culture." } },

  { id: "fb1-6", t: "Consommation et argent", es: "Consumo y dinero", v: [
    ["le compte", "la cuenta"], ["l'argent liquide", "el dinero en efectivo"], ["le virement", "la transferencia"], ["retirer", "sacar (dinero)"], ["la facture", "la factura"], ["les frais", "los gastos, las comisiones"], ["la dette", "la deuda"],
    ["le prêt", "el préstamo"], ["les intérêts", "los intereses"], ["dépenser", "gastar"], ["avoir les moyens de", "poder permitirse"], ["la dépense", "el gasto"], ["le revenu", "los ingresos"], ["une assurance", "un seguro"],
    ["le contrat", "el contrato"], ["signer", "firmar"], ["la garantie", "la garantía"], ["la réclamation", "la reclamación"], ["le consommateur", "el consumidor"], ["la marchandise", "la mercancía"], ["livrer", "entregar"],
    ["la livraison", "la entrega"], ["commander", "pedir, encargar"], ["la réduction", "el descuento"], ["la qualité", "la calidad"], ["le service client", "la atención al cliente"], ["le remboursement", "el reembolso"], ["épargner", "ahorrar (dinero)"]],
    g: { t: "Los pronombres en e y, la voz pasiva y el gerundio", n: `
## El pronombre en
Sustituye a **de** + algo, y a las cantidades:
| Tu as des frais ? – Oui, j'en ai.                 (des frais)
| Combien de cartes as-tu ? – J'en ai deux.         (la cantidad se repite)
| Je m'occupe de la réclamation. → Je m'en occupe.  (verbo + de)
| Tu viens de la banque ? – Oui, j'en viens.        (procedencia)

## El pronombre y
Sustituye a un **lugar** o a **à** + cosa:
| Tu vas à la banque ? – Oui, j'y vais.
| Je pense à ma commande. → J'y pense.              (penser à, répondre à, s'intéresser à)
> Para personas no se usan: Je pense **à elle**. · Je parle **de lui**.
Se colocan como los demás pronombres: Je n'**en** veux pas. · J'**y** suis allé. · Je vais **m'en** occuper.

## La voz pasiva
**être** (en el tiempo que toque) + participio, que concuerda con el sujeto. El agente va con **par**.
| On livre la marchandise demain. → La marchandise est livrée demain.
| Un employé a signé le contrat. → Le contrat a été signé par un employé.
| La facture sera envoyée par courriel.
El francés la evita a menudo con «on»: **On** a envoyé la facture.

## El gerundio
**en** + participio presente (raíz de «nous» + **-ant**): en comparant, en payant, en faisant.
Indica simultaneidad, manera o condición, siempre con el mismo sujeto:
| J'ai trouvé cette réduction en comparant les prix.        (cómo)
| Elle téléphone au service client en cherchant sa facture. (a la vez)
| En payant par virement, vous éviterez les frais.          (si paga…)
Irregulares: être → étant · avoir → ayant · savoir → sachant.
`, e: [
      mc(2, "Sustituye: «J'ai trois cartes.» → «J'___ ai trois.»", ["en", "y", "les", "leur"], "Cantidad: en."),
      mc(2, "Sustituye: «Je vais à la banque.» → «J'___ vais.»", ["y", "en", "la", "lui"], "Lugar: y."),
      mc(2, "Sustituye: «Je m'occupe de la réclamation.» → «Je ___ occupe.»", ["m'en", "m'y", "me la", "me lui"], "s'occuper de → en."),
      mc(2, "Pasa a pasiva: «On a livré le colis.»", ["Le colis a été livré.", "Le colis a livré.", "Le colis est été livré.", "Le colis était livrer."], "être en passé composé (a été) + participio."),
      tx(2, "Forma el gerundio de «comparer»: «en ___»", ["comparant"], "Raíz de «nous comparons» + -ant."),
      mc(2, "Completa: «La facture sera envoyée ___ le service client.»", ["par", "pour", "de", "à"], "El agente de la pasiva: par."),
      mc(2, "«En payant aujourd'hui, vous aurez une réduction» significa…", ["Si paga hoy, tendrá un descuento", "Aunque pague hoy, tendrá un descuento", "Antes de pagar hoy, tendrá un descuento", "Sin pagar hoy, tendrá un descuento"], "El gerundio puede expresar condición."),
      tx(2, "Sustituye: «Je pense à ma commande.» → «J'___ pense.»", ["y"], "penser à + cosa → y.")] },
    d: { t: "La réclamation", l: [
      ["Service client", "Technimarché, service client, bonjour. Que puis-je faire pour vous ?", "Technimarché, atención al cliente, buenos días. ¿En qué puedo ayudarle?"],
      ["Mme Ortega", "Bonjour. J'appelle au sujet d'une commande. J'ai commandé un ordinateur portable il y a trois semaines et je ne l'ai toujours pas reçu.", "Buenos días. Llamo por un pedido. Encargué un portátil hace tres semanas y todavía no lo he recibido."],
      ["Service client", "Je suis désolé. Vous avez le numéro de la commande ?", "Lo siento. ¿Tiene el número del pedido?"],
      ["Mme Ortega", "Oui, c'est le 4471. Sur votre site, il est écrit que la marchandise est livrée en cinq jours.", "Sí, es el 4471. En su página pone que la mercancía se entrega en cinco días."],
      ["Service client", "Je vois le problème : à cause d'une erreur, le colis a été envoyé à une mauvaise adresse.", "Veo el problema: por un error, el paquete se envió a una dirección equivocada."],
      ["Mme Ortega", "Et maintenant ? La facture, je l'ai déjà payée.", "¿Y ahora? La factura ya la he pagado."],
      ["Service client", "Un nouvel appareil vous sera expédié demain. Pour nous excuser, nous vous offrons une réduction de dix pour cent.", "Mañana se le enviará un aparato nuevo. Para disculparnos, le ofrecemos un descuento del diez por ciento."],
      ["Mme Ortega", "Très bien. Mais si je ne l'ai pas vendredi, je demanderai le remboursement.", "Muy bien. Pero si el viernes no lo tengo, pediré el reembolso."],
      ["Service client", "Je comprends tout à fait. Je m'en occupe personnellement.", "Lo entiendo perfectamente. Me ocupo personalmente."]],
      q: [
        mc(2, "Pourquoi Mme Ortega appelle-t-elle ?", ["Elle n'a pas reçu sa commande.", "L'ordinateur est cassé.", "Le prix est trop élevé.", "Le site ne fonctionne pas."], "«…je ne l'ai toujours pas reçu.»"),
        mc(2, "Pourquoi le colis n'est-il pas arrivé ?", ["Il a été envoyé à une mauvaise adresse.", "La facture n'était pas payée.", "L'ordinateur n'était plus en stock.", "Le magasin était fermé."], "«…le colis a été envoyé à une mauvaise adresse.»"),
        mc(2, "Que propose le service client pour s'excuser ?", ["Une réduction de dix pour cent", "Un deuxième ordinateur", "Le remboursement complet", "Un bon d'achat"], "«…une réduction de dix pour cent.»"),
        mc(2, "Que fera Mme Ortega si elle n'a rien vendredi ?", ["Elle demandera le remboursement.", "Elle rappellera.", "Elle ira au magasin.", "Elle passera une autre commande."], "«…je demanderai le remboursement.»")] },
    w: { c: "Compraste algo por internet y llegó roto o no llegó. Escribe una reclamación formal de unas 80 palabras: qué pediste, cuál es el problema y qué solución exiges.", m: "Madame, Monsieur,\nle 3 mars, j'ai commandé une cafetière sur votre site (commande n° 2210). Malheureusement, l'appareil a été endommagé pendant la livraison : le réservoir est cassé et je ne peux pas l'utiliser. Je vous demande donc de m'en envoyer un nouveau dans un délai d'une semaine ou de me rembourser. Vous trouverez les photos en pièce jointe. En attendant votre réponse, je vous prie d'agréer mes salutations distinguées.\nAna Ruiz" } },
] });
