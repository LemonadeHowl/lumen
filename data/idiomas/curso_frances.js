// Curso de francés por niveles (Marco Común Europeo). Mismo formato que curso_aleman.js:
//   v: vocabulario [francés, español] · g: gramática {t, n: apuntes, e: ejercicios}
//   d: diálogo o texto {t, l: [[quién, francés, español], …], q: preguntas} · w: tarea de escritura {c: consigna, m: modelo}
// Todas las cadenas van entre comillas dobles porque el francés está lleno de apóstrofos.
window.CURSO = window.CURSO || {};
CURSO.frances = [
  { id: "A1", nombre: "A1 · Acceso", desc: "Presentarse, hacer preguntas sencillas y desenvolverse en situaciones cotidianas muy básicas.", u: [
    { id: "fa1-1", t: "Se présenter", es: "Presentarse", v: [
      ["bonjour", "buenos días, hola"], ["bonsoir", "buenas tardes, buenas noches"], ["salut", "hola; adiós (informal)"], ["au revoir", "adiós"], ["à bientôt", "hasta pronto"], ["merci", "gracias"], ["s'il vous plaît", "por favor (de usted)"],
      ["je", "yo"], ["tu", "tú"], ["vous", "usted; vosotros"], ["le nom", "el apellido, el nombre"], ["le prénom", "el nombre de pila"], ["s'appeler", "llamarse"], ["habiter", "vivir (residir)"],
      ["parler", "hablar"], ["le pays", "el país"], ["la ville", "la ciudad"], ["la langue", "el idioma"], ["le français", "el francés"], ["l'espagnol", "el español"], ["espagnol", "español (nacionalidad)"],
      ["comment", "cómo"], ["où", "dónde"], ["oui", "sí"], ["non", "no"], ["enchanté", "encantado"], ["un peu", "un poco"], ["et", "y"]],
      g: { t: "Pronombres sujeto, être y verbos en -er", n: `
## Los pronombres sujeto
- **je** (yo), **tu** (tú), **il / elle** (él / ella), **on** (se; nosotros, al hablar)
- **nous** (nosotros), **vous** (vosotros; usted, ustedes), **ils / elles** (ellos / ellas)
> En francés el pronombre es obligatorio: «Je parle espagnol», nunca solo «Parle espagnol». Delante de vocal, «je» se convierte en «j'»: j'habite.

## tu y vous
**tu** es informal (amigos, familia, niños). **vous** sirve para tratar de usted a una persona y para hablar a varias. Ante la duda, «vous».

## El verbo être (ser, estar)
| je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont

## Los verbos en -er
Son la mayoría y todos se conjugan igual. Se quita -er y se añade:
$ je -e · tu -es · il / elle -e · nous -ons · vous -ez · ils / elles -ent
| parler: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent
| habiter: j'habite, tu habites, elle habite, nous habitons, vous habitez, elles habitent
> Las terminaciones -e, -es y -ent no se pronuncian: «parle», «parles» y «parlent» suenan igual.

## s'appeler
| je m'appelle · tu t'appelles · il s'appelle · nous nous appelons · vous vous appelez · ils s'appellent

## Preguntar
| Comment tu t'appelles ? / Comment vous appelez-vous ?     ¿Cómo te llamas? / ¿Cómo se llama usted?
| Tu habites où ? / Où habitez-vous ?                        ¿Dónde vives? / ¿Dónde vive usted?
`, e: [
        mc(1, "Completa: «Je ___ espagnole.»", ["suis", "es", "est", "êtes"], "je suis."),
        mc(1, "Completa: «Vous ___ français ?»", ["parlez", "parles", "parlent", "parlons"], "Con «vous» la terminación es -ez."),
        mc(1, "Completa: «Nous ___ à Lyon.»", ["habitons", "habitez", "habitent", "habite"], "Con «nous» la terminación es -ons."),
        mc(1, "¿Qué forma de «être» va con «ils»?", ["sont", "sommes", "êtes", "est"], "ils sont."),
        tx(1, "Escribe en francés: «Me llamo Ana.»", ["Je m'appelle Ana"], "je m'appelle."),
        mc(1, "¿Cómo se pregunta a un desconocido adulto cómo se llama?", ["Comment vous appelez-vous ?", "Comment tu t'appelles ?", "Comment il s'appelle ?", "Comment je m'appelle ?"], "Con desconocidos se usa «vous»."),
        mc(1, "Delante de vocal, «je» se escribe…", ["j'", "je", "j", "jé"], "j'habite, j'aime."),
        tx(1, "Completa con «parler»: «Tu ___ espagnol ?»", ["parles"], "tu parles (la -s no se pronuncia).")] },
      d: { t: "Au cours de français", l: [
        ["Léa", "Bonjour ! Je m'appelle Léa. Et toi, comment tu t'appelles ?", "¡Hola! Me llamo Léa. Y tú, ¿cómo te llamas?"],
        ["Pablo", "Salut, Léa. Moi, c'est Pablo.", "Hola, Léa. Yo soy Pablo."],
        ["Léa", "Tu es italien ?", "¿Eres italiano?"],
        ["Pablo", "Non, je suis espagnol. J'habite à Valence. Et toi ?", "No, soy español. Vivo en Valencia. ¿Y tú?"],
        ["Léa", "Je suis belge, mais j'habite à Paris.", "Soy belga, pero vivo en París."],
        ["Pablo", "Tu parles espagnol ?", "¿Hablas español?"],
        ["Léa", "Non, je parle français et un peu anglais.", "No, hablo francés y un poco de inglés."],
        ["Pablo", "Pas de problème. J'apprends le français !", "No hay problema. ¡Estoy aprendiendo francés!"]],
        q: [
          mc(1, "Pablo est…", ["espagnol", "italien", "belge", "français"], "«Non, je suis espagnol.»"),
          mc(1, "Où habite Léa ?", ["À Paris", "À Valence", "En Belgique", "À Lyon"], "«…mais j'habite à Paris.»"),
          mc(1, "Léa parle espagnol ?", ["Non", "Oui", "Un peu", "Très bien"], "«Non, je parle français et un peu anglais.»"),
          mc(1, "Qu'est-ce que Pablo apprend ?", ["Le français", "L'anglais", "L'espagnol", "L'italien"], "«J'apprends le français !»")] },
      w: { c: "Preséntate en tres o cuatro frases: cómo te llamas, de dónde eres, dónde vives y qué idiomas hablas.", m: "Bonjour ! Je m'appelle Marta. Je suis espagnole et j'habite à Séville. Je parle espagnol et un peu français." } },

    { id: "fa1-2", t: "La famille et les nombres", es: "La familia y los números", v: [
      ["la famille", "la familia"], ["le père", "el padre"], ["la mère", "la madre"], ["les parents", "los padres"], ["le frère", "el hermano"], ["la sœur", "la hermana"], ["le fils", "el hijo"],
      ["la fille", "la hija; la chica"], ["un enfant", "un niño, un hijo"], ["le mari", "el marido"], ["la femme", "la mujer, la esposa"], ["le grand-père", "el abuelo"], ["la grand-mère", "la abuela"], ["un ami", "un amigo"],
      ["un an", "un año"], ["un", "uno"], ["deux", "dos"], ["trois", "tres"], ["quatre", "cuatro"], ["cinq", "cinco"], ["dix", "diez"],
      ["vingt", "veinte"], ["trente", "treinta"], ["soixante", "sesenta"], ["cent", "cien"], ["jeune", "joven"], ["vieux", "viejo"], ["avoir", "tener"]],
      g: { t: "El verbo avoir y los posesivos", n: `
## El verbo avoir (tener)
| j'ai · tu as · il / elle / on a · nous avons · vous avez · ils / elles ont
La edad se dice con «avoir»: **J'ai trente ans.** (Tengo treinta años.)
> No confundas «ils ont» (tienen, suena «ilsón» con s sonora) con «ils sont» (son, con s sorda).

## Los posesivos
Concuerdan con lo poseído, no con el poseedor:
$ mon, ton, son + masculino singular: mon père, ton frère, son mari
$ ma, ta, sa + femenino singular: ma mère, ta sœur, sa femme
$ mes, tes, ses + plural: mes parents, tes enfants, ses amis
$ notre, votre, leur (singular) · nos, vos, leurs (plural)
> Delante de un femenino que empieza por vocal se usa mon, ton, son: **mon amie**, ton école.
«son / sa / ses» valen tanto para «de él» como para «de ella»: sa mère = su madre (de él o de ella).

## El plural
Normalmente se añade una **-s** que no se pronuncia: un frère, deux frères. El artículo es lo que se oye: le / les, mon / mes.

## Los números difíciles
| 70 soixante-dix · 71 soixante et onze · 80 quatre-vingts · 90 quatre-vingt-dix · 99 quatre-vingt-dix-neuf
`, e: [
        mc(1, "Completa: «J'___ deux frères.»", ["ai", "as", "a", "ont"], "j'ai."),
        mc(1, "Completa: «Ils ___ trois enfants.»", ["ont", "sont", "avons", "a"], "ils ont: tienen."),
        mc(1, "Completa: «C'est ___ mère.»", ["ma", "mon", "mes", "me"], "«mère» es femenino singular: ma."),
        mc(1, "Completa: «Voici Julie, c'est ___ amie.»", ["mon", "ma", "mes", "moi"], "Femenino que empieza por vocal: mon amie."),
        tx(1, "Escribe en francés: «Tengo veinte años.»", ["J'ai vingt ans"], "La edad se dice con avoir."),
        mc(1, "¿Cómo se dice 80 en Francia?", ["quatre-vingts", "huitante", "octante", "soixante-vingt"], "Cuatro veintes: quatre-vingts."),
        mc(1, "Completa: «Paul et Marie habitent avec ___ parents.»", ["leurs", "ses", "leur", "sa"], "Varios poseedores y varios poseídos: leurs."),
        tx(1, "Completa con «avoir»: «Vous ___ des enfants ?»", ["avez"], "vous avez.")] },
      d: { t: "Une photo de famille", l: [
        ["Inès", "Qu'est-ce que tu regardes, Marc ?", "¿Qué miras, Marc?"],
        ["Marc", "Une photo de ma famille. Regarde : voici mes parents.", "Una foto de mi familia. Mira: estos son mis padres."],
        ["Inès", "Et la fille, c'est ta sœur ?", "Y la chica, ¿es tu hermana?"],
        ["Marc", "Oui, c'est Chloé. Elle a dix-neuf ans et elle habite à Nantes.", "Sí, es Chloé. Tiene diecinueve años y vive en Nantes."],
        ["Inès", "Tu as aussi un frère ?", "¿Tienes también un hermano?"],
        ["Marc", "Non, mais j'ai un chien ! Et toi, tu as des frères et sœurs ?", "No, ¡pero tengo un perro! Y tú, ¿tienes hermanos?"],
        ["Inès", "J'ai deux frères. Ils ont trente et trente-quatre ans.", "Tengo dos hermanos. Tienen treinta y treinta y cuatro años."],
        ["Marc", "Ils habitent ici ?", "¿Viven aquí?"],
        ["Inès", "Non, ils habitent en Espagne avec leurs enfants.", "No, viven en España con sus hijos."]],
        q: [
          mc(1, "Qui est Chloé ?", ["La sœur de Marc", "La mère de Marc", "L'amie d'Inès", "La fille de Marc"], "«Oui, c'est Chloé» responde a «c'est ta sœur ?»."),
          mc(1, "Quel âge a Chloé ?", ["Dix-neuf ans", "Neuf ans", "Trente ans", "Vingt-neuf ans"], "«Elle a dix-neuf ans.»"),
          mc(1, "Combien de frères a Inès ?", ["Deux", "Un", "Trois", "Zéro"], "«J'ai deux frères.»"),
          mc(1, "Où habitent les frères d'Inès ?", ["En Espagne", "À Nantes", "En France", "À Paris"], "«…ils habitent en Espagne avec leurs enfants.»")] },
      w: { c: "Describe a tu familia en cuatro o cinco frases: quiénes son, cómo se llaman y cuántos años tienen.", m: "Dans ma famille, nous sommes quatre. Mon père s'appelle Luis et il a soixante ans. Ma mère s'appelle Carmen. J'ai une sœur, Laura. Elle a vingt-cinq ans et elle habite à Madrid." } },

    { id: "fa1-3", t: "Manger et boire", es: "Comer y beber", v: [
      ["le pain", "el pan"], ["le fromage", "el queso"], ["la viande", "la carne"], ["le poisson", "el pescado"], ["le poulet", "el pollo"], ["un œuf", "un huevo"], ["les légumes", "las verduras"],
      ["le fruit", "la fruta"], ["la pomme", "la manzana"], ["le riz", "el arroz"], ["les pâtes", "la pasta"], ["le sucre", "el azúcar"], ["le sel", "la sal"], ["de l'eau", "agua"],
      ["le lait", "la leche"], ["le café", "el café"], ["le thé", "el té"], ["le vin", "el vino"], ["le jus", "el zumo"], ["le petit-déjeuner", "el desayuno"], ["le déjeuner", "la comida (mediodía)"],
      ["le dîner", "la cena"], ["manger", "comer"], ["boire", "beber"], ["prendre", "tomar, coger"], ["avoir faim", "tener hambre"], ["avoir soif", "tener sed"], ["l'addition", "la cuenta"]],
      g: { t: "Los artículos y la negación", n: `
## El artículo determinado
$ le (masculino) · la (femenino) · l' (ante vocal o h muda) · les (plural)
Se usa para lo conocido y para hablar en general: **J'aime le fromage.** (Me gusta el queso.)

## El artículo indeterminado
$ un (masculino) · une (femenino) · des (plural)
| Je voudrais un café et une pomme.      Il y a des fruits.
> En francés «des» es obligatorio donde el español no pone nada: «Tengo amigos» = J'ai **des** amis.

## El partitivo: una cantidad sin precisar
$ du (masculino) · de la (femenino) · de l' (ante vocal) · des (plural)
| Je mange du pain.       Elle boit de l'eau.       Tu veux de la viande ?
En español no existe: «Como pan» = Je mange **du** pain.

## La negación
**ne** + verbo + **pas**. Delante de vocal, «ne» se convierte en «n'».
| Je ne mange pas.        Il n'habite pas ici.
Tras una negación, un / une / des y du / de la pasan a **de** (d'):
| J'ai un frère. → Je n'ai pas de frère.
| Je bois du café. → Je ne bois pas de café.
> Con los verbos de gusto (aimer, adorer, détester) se mantiene el artículo determinado: Je n'aime pas le poisson.

## Los verbos prendre y boire
| prendre: je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent
| boire: je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent
`, e: [
        mc(1, "Completa: «Je mange ___ pain.»", ["du", "le", "de", "un"], "Cantidad sin precisar, masculino: du."),
        mc(1, "Completa: «Elle boit ___ eau.»", ["de l'", "du", "de la", "des"], "Ante vocal: de l'."),
        mc(1, "Completa: «J'aime ___ fromage.»", ["le", "du", "un", "de"], "Con los verbos de gusto, artículo determinado."),
        mc(1, "Pon en negativo: «Je bois du café.»", ["Je ne bois pas de café.", "Je ne bois pas du café.", "Je bois ne pas de café.", "Je ne pas bois de café."], "ne … pas, y «du» pasa a «de»."),
        tx(1, "Completa: «Il ___ habite pas à Paris.»", ["n'"], "Ante vocal o h muda, ne → n'."),
        mc(1, "Completa: «Nous ___ un dessert.»", ["prenons", "prennent", "prenez", "prends"], "nous prenons."),
        mc(1, "«Tengo amigos en Francia» se dice…", ["J'ai des amis en France.", "J'ai amis en France.", "J'ai les amis en France.", "J'ai de amis en France."], "El plural indeterminado necesita «des»."),
        tx(1, "Completa con «boire»: «Vous ___ du vin ?»", ["buvez"], "vous buvez.")] },
      d: { t: "Au restaurant", l: [
        ["Serveur", "Bonjour, messieurs-dames. Vous avez choisi ?", "Buenos días, señores. ¿Han elegido?"],
        ["Cliente", "Oui. Je voudrais le poulet avec des légumes, s'il vous plaît.", "Sí. Querría el pollo con verduras, por favor."],
        ["Client", "Et pour moi, le poisson avec du riz.", "Y para mí, el pescado con arroz."],
        ["Serveur", "Très bien. Et comme boisson ?", "Muy bien. ¿Y para beber?"],
        ["Cliente", "Une carafe d'eau et un verre de vin rouge.", "Una jarra de agua y una copa de vino tinto."],
        ["Client", "Moi, je ne bois pas de vin. Un jus de pomme, s'il vous plaît.", "Yo no bebo vino. Un zumo de manzana, por favor."],
        ["Serveur", "Vous prenez un dessert ?", "¿Toman postre?"],
        ["Cliente", "Non merci, mais deux cafés et l'addition, s'il vous plaît.", "No, gracias, pero dos cafés y la cuenta, por favor."]],
        q: [
          mc(1, "Qu'est-ce que la cliente mange ?", ["Du poulet avec des légumes", "Du poisson avec du riz", "Des pâtes", "Une salade"], "«Je voudrais le poulet avec des légumes.»"),
          mc(1, "Qui ne boit pas de vin ?", ["Le client", "La cliente", "Le serveur", "Personne"], "«Moi, je ne bois pas de vin.»"),
          mc(1, "Ils prennent un dessert ?", ["Non", "Oui, deux", "Oui, un", "Seulement la cliente"], "«Non merci…»"),
          mc(1, "Qu'est-ce qu'ils demandent à la fin ?", ["Deux cafés et l'addition", "Un thé", "Du pain", "Une carafe de vin"], "«…deux cafés et l'addition, s'il vous plaît.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué comes y bebes en el desayuno y en la cena, y algo que no te gusta.", m: "Le matin, je prends du café avec du lait et je mange du pain avec du fromage. Je ne mange pas de viande le matin. Le soir, je mange souvent des légumes et du poisson. Je bois de l'eau. Je n'aime pas le thé." } },

    { id: "fa1-4", t: "Le quotidien et l'heure", es: "El día a día y la hora", v: [
      ["le matin", "la mañana"], ["l'après-midi", "la tarde"], ["le soir", "la tarde-noche"], ["la nuit", "la noche"], ["aujourd'hui", "hoy"], ["demain", "mañana"], ["la semaine", "la semana"],
      ["lundi", "lunes"], ["mardi", "martes"], ["mercredi", "miércoles"], ["jeudi", "jueves"], ["vendredi", "viernes"], ["samedi", "sábado"], ["dimanche", "domingo"],
      ["l'heure", "la hora"], ["se lever", "levantarse"], ["se doucher", "ducharse"], ["s'habiller", "vestirse"], ["se coucher", "acostarse"], ["travailler", "trabajar"], ["commencer", "empezar"],
      ["finir", "terminar"], ["aller", "ir"], ["faire", "hacer"], ["tôt", "temprano"], ["tard", "tarde"], ["toujours", "siempre"], ["souvent", "a menudo"]],
      g: { t: "Verbos pronominales, aller y faire, la hora", n: `
## Los verbos pronominales
Llevan un pronombre que cambia con la persona, como «levantarse»:
| se lever: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent
Delante de vocal: je **m'**habille, tu **t'**habilles, elle **s'**habille.
En negativo, «ne» va delante del pronombre: Je **ne** me lève **pas** tôt.

## Dos verbos irregulares imprescindibles
| aller (ir): je vais, tu vas, il va, nous allons, vous allez, ils vont
| faire (hacer): je fais, tu fais, il fait, nous faisons, vous faites, ils font

## La hora
| Quelle heure est-il ?  –  Il est huit heures.         ¿Qué hora es? – Son las ocho.
| 8 h 15: huit heures et quart · 8 h 30: huit heures et demie · 8 h 45: neuf heures moins le quart
| 12 h: midi · 0 h: minuit
Para decir a qué hora se hace algo se usa **à**: Je commence à neuf heures.

## Los momentos del día y la semana
- Sin preposición: **le matin**, **le soir** (por la mañana, por la noche).
- **lundi** = este lunes; **le lundi** = todos los lunes.
> Los adverbios de frecuencia van detrás del verbo: Je me lève **toujours** à sept heures.
`, e: [
        mc(1, "Completa: «Je ___ lève à sept heures.»", ["me", "se", "te", "m'"], "je me lève."),
        mc(1, "Completa: «Elle ___ habille vite.»", ["s'", "se", "m'", "t'"], "Ante vocal o h muda: s'habille."),
        mc(1, "Completa: «Nous ___ au travail en bus.»", ["allons", "allez", "vont", "va"], "nous allons."),
        mc(1, "Completa: «Qu'est-ce que vous ___ le week-end ?»", ["faites", "faisez", "font", "faisons"], "Irregular: vous faites."),
        tx(1, "Escribe con letras la hora 8 h 30: «Il est huit heures et ___.»", ["demie"], "et demie = y media."),
        mc(1, "«Le lundi, je travaille» significa…", ["Todos los lunes trabajo", "Este lunes trabajo", "El lunes pasado trabajé", "Solo un lunes trabajo"], "Con artículo indica costumbre."),
        mc(1, "Pon en negativo: «Je me couche tard.»", ["Je ne me couche pas tard.", "Je me ne couche pas tard.", "Je ne couche me pas tard.", "Je me couche ne pas tard."], "ne + pronombre + verbo + pas."),
        tx(1, "Completa con «aller»: «Ils ___ à l'école.»", ["vont"], "ils vont.")] },
      d: { t: "Une journée de Camille", l: [
        ["Text", "Camille est infirmière à Bordeaux. Elle se lève tôt, à six heures.", "Camille es enfermera en Burdeos. Se levanta temprano, a las seis."],
        ["Text", "Elle se douche, elle s'habille et elle prend un café. Elle ne mange pas le matin.", "Se ducha, se viste y se toma un café. No come por la mañana."],
        ["Text", "À sept heures moins le quart, elle va à l'hôpital à vélo. Elle commence à sept heures.", "A las siete menos cuarto va al hospital en bici. Empieza a las siete."],
        ["Text", "À midi, elle déjeune avec ses collègues. Elle finit à quinze heures.", "A mediodía come con sus compañeros. Termina a las tres de la tarde."],
        ["Text", "L'après-midi, elle fait du sport ou elle va au marché. Le mardi, elle a un cours d'espagnol.", "Por la tarde hace deporte o va al mercado. Los martes tiene clase de español."],
        ["Text", "Le soir, elle regarde un film et elle se couche à dix heures.", "Por la noche ve una película y se acuesta a las diez."]],
        q: [
          mc(1, "À quelle heure Camille se lève-t-elle ?", ["À six heures", "À sept heures", "À dix heures", "À midi"], "«Elle se lève tôt, à six heures.»"),
          mc(1, "Comment va-t-elle à l'hôpital ?", ["À vélo", "En bus", "En voiture", "À pied"], "«…elle va à l'hôpital à vélo.»"),
          mc(1, "Qu'est-ce qu'elle fait le mardi ?", ["Elle a un cours d'espagnol.", "Elle fait du sport.", "Elle va au marché.", "Elle ne travaille pas."], "«Le mardi, elle a un cours d'espagnol.»"),
          mc(1, "À quelle heure se couche-t-elle ?", ["À dix heures", "À minuit", "À neuf heures", "À onze heures"], "«…elle se couche à dix heures.»")] },
      w: { c: "Describe un día normal tuyo en cinco frases, con horas y al menos tres verbos pronominales.", m: "Je me lève à sept heures et demie. Je me douche et je prends le petit-déjeuner. Je commence le travail à neuf heures et je finis à dix-sept heures. Le soir, je fais du sport ou je regarde une série. Je me couche à onze heures." } },

    { id: "fa1-5", t: "Le logement", es: "La vivienda", v: [
      ["la maison", "la casa"], ["un appartement", "un piso"], ["la pièce", "la habitación (cualquier cuarto)"], ["la chambre", "el dormitorio"], ["le salon", "el salón"], ["la cuisine", "la cocina"], ["la salle de bains", "el cuarto de baño"],
      ["les toilettes", "el aseo"], ["le jardin", "el jardín"], ["la porte", "la puerta"], ["la fenêtre", "la ventana"], ["le lit", "la cama"], ["la table", "la mesa"], ["la chaise", "la silla"],
      ["le canapé", "el sofá"], ["une armoire", "un armario"], ["le loyer", "el alquiler"], ["grand", "grande"], ["petit", "pequeño"], ["beau", "bonito"], ["nouveau", "nuevo"],
      ["calme", "tranquilo"], ["cher", "caro"], ["dans", "en, dentro de"], ["sur", "sobre, encima de"], ["sous", "debajo de"], ["à côté de", "al lado de"], ["il y a", "hay"]],
      g: { t: "Il y a, las preposiciones de lugar y los adjetivos", n: `
## Il y a
Significa «hay» y no cambia nunca: **Il y a une table. Il y a deux chambres.**
En negativo: **Il n'y a pas de** jardin.

## Preposiciones de lugar
| dans (dentro de) · sur (encima de) · sous (debajo de) · devant (delante de) · derrière (detrás de) · entre (entre)
| à côté de (al lado de) · en face de (enfrente de) · près de (cerca de) · loin de (lejos de)
Las que terminan en «de» se contraen con el artículo: de + le = **du**, de + les = **des**.
| à côté du lit · en face de la fenêtre · près des toilettes

## El adjetivo: concordancia
El femenino añade normalmente **-e** y el plural, **-s**:
| petit, petite, petits, petites · grand, grande, grands, grandes
Si ya acaba en -e no cambia en femenino: calme, jeune. La -e final hace que se pronuncie la consonante: petit (sin t) / petite (con t).
Algunos son irregulares:
| beau, belle · nouveau, nouvelle · vieux, vieille · blanc, blanche · cher, chère

## El adjetivo: posición
La mayoría va **detrás** del sustantivo: un appartement calme, une table blanche.
Unos pocos, cortos y muy frecuentes, van **delante**: petit, grand, beau, nouveau, vieux, bon, mauvais, jeune, joli.
| une grande cuisine · un petit jardin · un bel appartement
> Delante de un masculino que empieza por vocal: beau → bel, nouveau → nouvel, vieux → vieil.
`, e: [
        mc(1, "Completa: «Dans le salon, ___ un canapé.»", ["il y a", "il a", "c'est", "il est"], "il y a = hay."),
        mc(1, "Completa: «La chaise est à côté ___ lit.»", ["du", "de le", "de la", "des"], "de + le = du."),
        mc(1, "Completa: «C'est une ___ cuisine.»", ["grande", "grand", "grands", "grandes"], "Femenino singular: grande, y va delante."),
        mc(1, "¿Qué frase es correcta?", ["J'ai un appartement calme.", "J'ai un calme appartement.", "J'ai une appartement calme.", "J'ai un appartement calmes."], "La mayoría de los adjetivos va detrás."),
        tx(1, "Escribe el femenino de «beau».", ["belle"], "beau, belle."),
        mc(1, "Pon en negativo: «Il y a un jardin.»", ["Il n'y a pas de jardin.", "Il n'y a pas un jardin.", "Il y n'a pas de jardin.", "Il y a ne pas de jardin."], "n' + y a + pas + de."),
        mc(1, "Completa: «C'est un ___ appartement.»", ["bel", "beau", "belle", "beaux"], "Masculino que empieza por vocal: bel."),
        tx(1, "Completa: «Le chat est ___ la table.» (debajo de)", ["sous"], "sous = debajo de.")] },
      d: { t: "Le nouvel appartement", l: [
        ["Hugo", "Alors, il est comment, ton nouvel appartement ?", "Bueno, ¿qué tal es tu piso nuevo?"],
        ["Sarah", "Il est petit, mais très calme. Il y a deux pièces : un salon et une chambre.", "Es pequeño, pero muy tranquilo. Tiene dos habitaciones: un salón y un dormitorio."],
        ["Hugo", "Et la cuisine ?", "¿Y la cocina?"],
        ["Sarah", "Elle est dans le salon. Il y a une grande fenêtre, c'est très lumineux.", "Está en el salón. Hay una ventana grande; es muy luminoso."],
        ["Hugo", "Tu as un jardin ?", "¿Tienes jardín?"],
        ["Sarah", "Non, il n'y a pas de jardin, mais il y a un petit balcon.", "No, no hay jardín, pero hay un balconcito."],
        ["Hugo", "Et le loyer, il est cher ?", "Y el alquiler, ¿es caro?"],
        ["Sarah", "Six cents euros. Pour le centre-ville, ce n'est pas cher !", "Seiscientos euros. Para estar en el centro, ¡no es caro!"],
        ["Hugo", "Et tu es près du travail ?", "¿Y estás cerca del trabajo?"],
        ["Sarah", "Oui, juste en face de la gare, à dix minutes à pied.", "Sí, justo enfrente de la estación, a diez minutos andando."]],
        q: [
          mc(1, "Combien de pièces y a-t-il ?", ["Deux", "Une", "Trois", "Quatre"], "«Il y a deux pièces.»"),
          mc(1, "Où est la cuisine ?", ["Dans le salon", "Dans la chambre", "Sur le balcon", "À côté de la salle de bains"], "«Elle est dans le salon.»"),
          mc(1, "Il y a un jardin ?", ["Non, mais il y a un balcon.", "Oui, un grand jardin.", "Oui, un petit jardin.", "Non, et pas de balcon."], "«…il n'y a pas de jardin, mais il y a un petit balcon.»"),
          mc(1, "Où se trouve l'appartement ?", ["En face de la gare", "Loin du centre", "À côté d'un parc", "Près de la mer"], "«…juste en face de la gare.»")] },
      w: { c: "Describe tu casa o tu habitación en cinco frases: qué cuartos y muebles hay, cómo son y dónde están.", m: "J'habite dans un petit appartement au centre-ville. Il y a trois pièces : un salon, une chambre et une cuisine. Dans le salon, il y a un grand canapé et une table blanche. Ma chambre est calme. Il n'y a pas de jardin, mais il y a un beau balcon." } },

    { id: "fa1-6", t: "En ville", es: "En la ciudad", v: [
      ["la rue", "la calle"], ["la place", "la plaza"], ["la gare", "la estación de tren"], ["un arrêt", "una parada"], ["le métro", "el metro"], ["le bus", "el autobús"], ["le train", "el tren"],
      ["la voiture", "el coche"], ["le vélo", "la bici"], ["à pied", "andando"], ["le billet", "el billete"], ["la banque", "el banco"], ["la poste", "correos"], ["la pharmacie", "la farmacia"],
      ["la boulangerie", "la panadería"], ["le supermarché", "el supermercado"], ["le musée", "el museo"], ["une église", "una iglesia"], ["le pont", "el puente"], ["tout droit", "todo recto"], ["à gauche", "a la izquierda"],
      ["à droite", "a la derecha"], ["tourner", "girar"], ["traverser", "cruzar"], ["continuer", "seguir"], ["près", "cerca"], ["loin", "lejos"], ["excusez-moi", "disculpe"]],
      g: { t: "À y de con artículo, el imperativo", n: `
## Las contracciones con «à»
$ à + le = au · à + les = aux · à + la = à la · à + l' = à l'
| Je vais au musée, à la gare, à l'église, aux toilettes.

## Las contracciones con «de»
$ de + le = du · de + les = des · de + la = de la · de + l' = de l'
| Je viens du supermarché, de la banque, de l'école.

## Ciudades y países
- Ciudades: **à** → à Paris, à Madrid.
- Países femeninos (acaban en -e): **en** → en France, en Espagne, en Italie.
- Países masculinos: **au** → au Portugal, au Maroc, au Canada.
- Países en plural: **aux** → aux États-Unis.

## Los medios de transporte
**en** si se va dentro: en bus, en métro, en train, en voiture. **à** si no: à pied, à vélo.

## El imperativo
Para dar indicaciones, órdenes o consejos. Es el presente sin sujeto:
$ tu → Tourne ! · vous → Tournez ! · nous → Tournons !
En los verbos en -er, la forma de «tu» pierde la -s: tu tournes → **Tourne !**
| Continuez tout droit, puis tournez à gauche.      Traverse la place.
Negativo: **Ne tournez pas** à droite.
> Irregulares: aller → va, allez · être → sois, soyez · avoir → aie, ayez.
`, e: [
        mc(1, "Completa: «Je vais ___ musée.»", ["au", "à le", "à la", "aux"], "à + le = au."),
        mc(1, "Completa: «Elle habite ___ France.»", ["en", "à", "au", "aux"], "País femenino: en."),
        mc(1, "Completa: «Nous allons ___ Portugal.»", ["au", "en", "à", "aux"], "País masculino: au."),
        mc(1, "Completa: «Je viens ___ supermarché.»", ["du", "de le", "de la", "des"], "de + le = du."),
        tx(1, "Escribe el imperativo de «tourner» para «tu».", ["Tourne", "Tourne !"], "Sin la -s: Tourne !"),
        mc(1, "¿Cómo se dice «Sigan todo recto»?", ["Continuez tout droit.", "Vous continuez tout droit ?", "Continuer tout droit.", "Continues tout droit."], "Imperativo de vous: continuez."),
        mc(1, "Completa: «Je vais au travail ___ vélo.»", ["à", "en", "au", "dans"], "à vélo, à pied; en bus, en train."),
        tx(1, "Completa: «Il parle ___ enfants.» (à + les)", ["aux"], "à + les = aux.")] },
      d: { t: "Pour aller à la gare ?", l: [
        ["Touriste", "Excusez-moi, madame. Pour aller à la gare, s'il vous plaît ?", "Disculpe, señora. ¿Para ir a la estación, por favor?"],
        ["Dame", "C'est simple. Continuez tout droit jusqu'à la place.", "Es fácil. Siga todo recto hasta la plaza."],
        ["Touriste", "D'accord. Et après ?", "De acuerdo. ¿Y luego?"],
        ["Dame", "À la place, tournez à gauche et traversez le pont.", "En la plaza, gire a la izquierda y cruce el puente."],
        ["Touriste", "C'est loin ?", "¿Está lejos?"],
        ["Dame", "Non, c'est à dix minutes à pied. La gare est en face de la poste.", "No, está a diez minutos andando. La estación está enfrente de correos."],
        ["Touriste", "Il y a un bus ?", "¿Hay autobús?"],
        ["Dame", "Oui, le bus numéro 4. L'arrêt est juste à côté de la pharmacie.", "Sí, el autobús número 4. La parada está justo al lado de la farmacia."],
        ["Touriste", "Merci beaucoup, madame !", "¡Muchas gracias, señora!"],
        ["Dame", "Je vous en prie. Bonne journée !", "No hay de qué. ¡Buen día!"]],
        q: [
          mc(1, "Où va le touriste ?", ["À la gare", "À la poste", "Au musée", "À la pharmacie"], "«Pour aller à la gare, s'il vous plaît ?»"),
          mc(1, "Que doit-il faire à la place ?", ["Tourner à gauche", "Tourner à droite", "Continuer tout droit", "Prendre le métro"], "«À la place, tournez à gauche…»"),
          mc(1, "La gare est…", ["en face de la poste.", "à côté de la pharmacie.", "sur la place.", "sous le pont."], "«La gare est en face de la poste.»"),
          mc(1, "Combien de temps faut-il à pied ?", ["Dix minutes", "Cinq minutes", "Vingt minutes", "Une heure"], "«…c'est à dix minutes à pied.»"),
          mc(1, "Quel bus va à la gare ?", ["Le numéro 4", "Le numéro 14", "Le numéro 10", "Il n'y a pas de bus."], "«Oui, le bus numéro 4.»")] },
      w: { c: "Un turista te pregunta cómo llegar a la farmacia. Escríbele las indicaciones en tres o cuatro frases.", m: "Continuez tout droit jusqu'à la banque. Ensuite, tournez à droite et traversez la place. La pharmacie est à côté de la boulangerie. Ce n'est pas loin : cinq minutes à pied." } },

    { id: "fa1-7", t: "La santé et les rendez-vous", es: "La salud y las citas", v: [
      ["le médecin", "el médico"], ["le rendez-vous", "la cita"], ["le cabinet", "la consulta"], ["un hôpital", "un hospital"], ["malade", "enfermo"], ["en forme", "en forma"], ["la tête", "la cabeza"],
      ["le ventre", "la barriga"], ["le dos", "la espalda"], ["la gorge", "la garganta"], ["la jambe", "la pierna"], ["le bras", "el brazo"], ["la main", "la mano"], ["le pied", "el pie"],
      ["avoir mal", "tener dolor"], ["la fièvre", "la fiebre"], ["le rhume", "el resfriado"], ["la toux", "la tos"], ["le médicament", "el medicamento"], ["le comprimé", "la pastilla"], ["une ordonnance", "una receta"],
      ["rester", "quedarse"], ["avoir besoin de", "necesitar"], ["aider", "ayudar"], ["fatigué", "cansado"], ["pouvoir", "poder"], ["devoir", "deber, tener que"], ["vouloir", "querer"]],
      g: { t: "Pouvoir, vouloir, devoir e il faut", n: `
## Tres verbos que acompañan a otro
Van seguidos de un infinitivo:
| pouvoir (poder): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent
| vouloir (querer): je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent
| devoir (tener que): je dois, tu dois, il doit, nous devons, vous devez, ils doivent
| Je dois rester au lit.      Vous pouvez m'aider ?      Elle veut voir un médecin.
En negativo, ne … pas rodea al verbo conjugado: Je **ne** peux **pas** venir.

## Il faut
Es impersonal: significa «hay que» y no cambia. Va seguido de infinitivo.
| Il faut boire beaucoup d'eau.      Il ne faut pas fumer ici.
> «Il ne faut pas» es una prohibición (no se debe), no «no hace falta».

## Pedir con educación: je voudrais
«Je veux» suena brusco. Para pedir se dice **je voudrais** (querría):
| Je voudrais un rendez-vous, s'il vous plaît.

## Decir qué duele
**avoir mal à** + parte del cuerpo, con las contracciones de «à»:
| J'ai mal à la tête, au ventre, à l'épaule, aux pieds.
`, e: [
        mc(1, "Completa: «Je ne ___ pas travailler aujourd'hui, je suis malade.»", ["peux", "peut", "pouvez", "peuvent"], "je peux."),
        mc(1, "Completa: «Vous ___ boire beaucoup d'eau.»", ["devez", "dois", "doivent", "devons"], "vous devez."),
        mc(1, "¿Qué frase es correcta?", ["Je dois aller chez le médecin.", "Je dois vais chez le médecin.", "Je dois à aller chez le médecin.", "Je dois allé chez le médecin."], "Tras devoir, infinitivo sin preposición."),
        mc(1, "«Il ne faut pas fumer ici» significa…", ["Aquí no se debe fumar", "Aquí no hace falta fumar", "Aquí no quiero fumar", "Aquí no fuma nadie"], "«Il ne faut pas» prohíbe."),
        tx(1, "Completa: «J'ai mal ___ ventre.»", ["au"], "à + le = au."),
        mc(1, "Para pedir una cita con educación se dice…", ["Je voudrais un rendez-vous.", "Je veux un rendez-vous.", "Je dois un rendez-vous.", "Je peux un rendez-vous."], "«Je voudrais» es la forma cortés."),
        tx(1, "Completa con «vouloir»: «Ils ___ voir le médecin.»", ["veulent"], "ils veulent."),
        mc(1, "Completa: «J'ai mal ___ tête.»", ["à la", "au", "à le", "aux"], "«tête» es femenino: à la.")] },
      d: { t: "Chez le médecin", l: [
        ["Médecin", "Bonjour, monsieur Soler. Qu'est-ce qui ne va pas ?", "Buenos días, señor Soler. ¿Qué le pasa?"],
        ["M. Soler", "Bonjour, docteur. J'ai mal à la gorge depuis trois jours et je tousse beaucoup.", "Buenos días, doctora. Me duele la garganta desde hace tres días y toso mucho."],
        ["Médecin", "Vous avez de la fièvre ?", "¿Tiene fiebre?"],
        ["M. Soler", "Oui, un peu. Et j'ai mal à la tête.", "Sí, un poco. Y me duele la cabeza."],
        ["Médecin", "C'est un gros rhume. Vous devez rester au lit et il faut boire beaucoup.", "Es un buen resfriado. Tiene que quedarse en cama y hay que beber mucho."],
        ["M. Soler", "Je peux travailler demain ?", "¿Puedo trabajar mañana?"],
        ["Médecin", "Non, vous ne pouvez pas travailler cette semaine. Voici une ordonnance.", "No, esta semana no puede trabajar. Aquí tiene una receta."],
        ["M. Soler", "Merci, docteur. Où est la pharmacie la plus proche ?", "Gracias, doctora. ¿Dónde está la farmacia más cercana?"],
        ["Médecin", "Juste à côté du cabinet. Bon rétablissement !", "Justo al lado de la consulta. ¡Que se mejore!"]],
        q: [
          mc(1, "Où M. Soler a-t-il mal ?", ["À la gorge et à la tête", "Au ventre", "Au dos", "À la jambe"], "«J'ai mal à la gorge…» y «j'ai mal à la tête.»"),
          mc(1, "Qu'est-ce qu'il doit faire ?", ["Rester au lit et boire beaucoup", "Faire du sport", "Aller à l'hôpital", "Travailler moins"], "«Vous devez rester au lit et il faut boire beaucoup.»"),
          mc(1, "Il peut travailler cette semaine ?", ["Non", "Oui", "Seulement demain", "Seulement le matin"], "«…vous ne pouvez pas travailler cette semaine.»"),
          mc(1, "Où est la pharmacie ?", ["À côté du cabinet", "En face de la gare", "À l'hôpital", "Loin d'ici"], "«Juste à côté du cabinet.»")] },
      w: { c: "Estás enfermo y no puedes ir a clase. Escribe un mensaje a tu profesora: qué te pasa, qué tienes que hacer y cuándo puedes volver.", m: "Bonjour Madame Morel,\nje suis malade. J'ai de la fièvre et j'ai mal à la tête. Je dois rester au lit aujourd'hui et je ne peux pas venir au cours. Je peux revenir lundi.\nCordialement,\nMarta" } },

    { id: "fa1-8", t: "Les loisirs et le week-end", es: "El ocio y el fin de semana", v: [
      ["le week-end", "el fin de semana"], ["hier", "ayer"], ["la semaine dernière", "la semana pasada"], ["le temps libre", "el tiempo libre"], ["le sport", "el deporte"], ["jouer au football", "jugar al fútbol"], ["nager", "nadar"],
      ["faire une randonnée", "hacer una ruta de senderismo"], ["danser", "bailar"], ["lire", "leer"], ["le livre", "el libro"], ["le film", "la película"], ["le cinéma", "el cine"], ["la musique", "la música"],
      ["le concert", "el concierto"], ["rencontrer", "conocer, encontrarse con"], ["rendre visite à", "visitar (a alguien)"], ["voyager", "viajar"], ["les vacances", "las vacaciones"], ["la mer", "el mar"], ["la montagne", "la montaña"],
      ["sortir", "salir"], ["rentrer", "volver a casa"], ["voir", "ver"], ["ennuyeux", "aburrido"], ["génial", "genial"], ["ensemble", "juntos"], ["avec", "con"]],
      g: { t: "El passé composé y el futuro próximo", n: `
## El passé composé
Es el pasado más usado al hablar: equivale a «he hecho» y a «hice».
Se forma con el presente de **avoir** o **être** + el **participio**.
| J'ai regardé un film.          Vi una película.
| Nous sommes allés à la mer.    Fuimos al mar.

## El participio
- Verbos en -er → **-é**: parler: parlé · manger: mangé · aller: allé
- Verbos en -ir → **-i**: finir: fini · dormir: dormi · sortir: sorti
- Irregulares frecuentes: avoir: eu · être: été · faire: fait · voir: vu · lire: lu · prendre: pris · boire: bu · venir: venu · pouvoir: pu

## ¿avoir o être?
Casi todos llevan **avoir**. Llevan **être**:
- unos quince verbos de movimiento o cambio: aller, venir, arriver, partir, entrer, sortir, monter, descendre, rester, rentrer, tomber, naître, mourir…
- todos los verbos pronominales: je me suis levé.
Con «être», el participio concuerda con el sujeto: il est allé, elle est allé**e**, ils sont allé**s**, elles sont allé**es**.

## La negación
ne … pas rodea al auxiliar: Je **n'**ai **pas** vu le film. · Elle **n'**est **pas** sortie.

## El futuro próximo
**aller** en presente + infinitivo: lo que va a pasar pronto.
| Je vais voir un concert samedi.      Nous allons partir en vacances.
`, e: [
        mc(1, "Completa: «Hier, j'___ regardé un film.»", ["ai", "suis", "a", "es"], "«regarder» lleva avoir: j'ai regardé."),
        mc(1, "Completa: «Nous ___ allés à Marseille.»", ["sommes", "avons", "êtes", "ont"], "«aller» lleva être."),
        mc(1, "¿Cuál es el participio de «faire»?", ["fait", "faité", "fais", "fairé"], "Irregular: fait."),
        mc(1, "Completa: «Elle est ___ à huit heures.»", ["sortie", "sorti", "sortis", "sorté"], "Con être concuerda: femenino → sortie."),
        tx(1, "Escribe el participio de «manger».", ["mangé"], "-er → -é."),
        mc(1, "Pon en negativo: «J'ai vu le film.»", ["Je n'ai pas vu le film.", "Je n'ai vu pas le film.", "Je ne pas ai vu le film.", "J'ai ne pas vu le film."], "ne … pas rodea al auxiliar."),
        mc(1, "«Je vais voyager en juillet» expresa…", ["Un plan de futuro", "Una costumbre", "Algo pasado", "Una orden"], "aller + infinitivo = futuro próximo."),
        tx(1, "Completa: «Ils ___ restés à la maison.»", ["sont"], "«rester» lleva être.")] },
      d: { t: "C'était comment, ton week-end ?", l: [
        ["Jules", "Salut, Carla ! Tu as passé un bon week-end ?", "¡Hola, Carla! ¿Has pasado un buen fin de semana?"],
        ["Carla", "Oui, super ! Samedi, je suis allée à la montagne avec des amis.", "Sí, ¡genial! El sábado fui a la montaña con unos amigos."],
        ["Jules", "Génial ! Qu'est-ce que vous avez fait ?", "¡Qué bien! ¿Qué hicisteis?"],
        ["Carla", "Nous avons fait une randonnée de quatre heures et nous avons pique-niqué.", "Hicimos una ruta de cuatro horas y comimos de pícnic."],
        ["Jules", "Et dimanche ?", "¿Y el domingo?"],
        ["Carla", "Dimanche, je suis restée à la maison et j'ai lu un livre. Et toi ?", "El domingo me quedé en casa y leí un libro. ¿Y tú?"],
        ["Jules", "Moi, j'ai travaillé samedi. Mais le soir, je suis sorti : j'ai vu un film au cinéma.", "Yo trabajé el sábado. Pero por la noche salí: vi una película en el cine."],
        ["Carla", "Il était bien ?", "¿Estuvo bien?"],
        ["Jules", "Non, un peu ennuyeux. Le week-end prochain, je vais aller à un concert.", "No, un poco aburrida. El próximo fin de semana voy a ir a un concierto."]],
        q: [
          mc(1, "Où Carla est-elle allée samedi ?", ["À la montagne", "À la mer", "Au cinéma", "À Paris"], "«…je suis allée à la montagne avec des amis.»"),
          mc(1, "Qu'est-ce que Carla a fait dimanche ?", ["Elle a lu un livre.", "Elle a fait une randonnée.", "Elle a travaillé.", "Elle est allée au cinéma."], "«…je suis restée à la maison et j'ai lu un livre.»"),
          mc(1, "Qu'est-ce que Jules a fait samedi ?", ["Il a travaillé.", "Il a pique-niqué.", "Il est resté à la maison.", "Il a lu."], "«Moi, j'ai travaillé samedi.»"),
          mc(1, "Comment était le film ?", ["Un peu ennuyeux", "Génial", "Très drôle", "Trop long"], "«Non, un peu ennuyeux.»")] },
      w: { c: "Cuenta en cuatro o cinco frases qué hiciste el fin de semana pasado y qué vas a hacer el próximo.", m: "Samedi, j'ai dormi tard. Ensuite, je suis allée en ville et j'ai rencontré une amie. Nous avons bu un café. Dimanche, je suis restée à la maison et j'ai regardé un film. Le week-end prochain, je vais rendre visite à mes parents." } },
  ] },
];
