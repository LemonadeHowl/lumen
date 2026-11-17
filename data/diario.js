// Eventos diarios: palabras del día y datos curiosos. Rotan según la fecha.
// Formato de palabra: [palabra, traducción, frase de ejemplo]
window.WORDS = {
  aleman: [
    ['die Sehnsucht', 'el anhelo, la añoranza', 'Ich habe Sehnsucht nach dem Meer.'],
    ['gemütlich', 'acogedor', 'Das Café ist sehr gemütlich.'],
    ['der Feierabend', 'el final de la jornada de trabajo', 'Endlich Feierabend!'],
    ['unterwegs', 'de camino', 'Ich bin schon unterwegs.'],
    ['das Fernweh', 'las ganas de viajar lejos', 'Im Winter habe ich Fernweh.'],
    ['eigentlich', 'en realidad', 'Eigentlich wollte ich zu Hause bleiben.'],
    ['der Augenblick', 'el instante', 'Einen Augenblick, bitte.'],
    ['genau', 'exacto', 'Genau, das meine ich.'],
  ],
  frances: [
    ['le dépaysement', 'la sensación de estar en un lugar distinto', "J'aime le dépaysement des voyages."],
    ['flâner', 'pasear sin rumbo', 'On a flâné dans les rues de Paris.'],
    ['quand même', 'aun así, de todos modos', 'Il pleut, mais je sors quand même.'],
    ['les retrouvailles', 'el reencuentro', 'Les retrouvailles ont été émouvantes.'],
    ['bouleversant', 'conmovedor', 'Ce film est bouleversant.'],
    ['désormais', 'de ahora en adelante', 'Désormais, je me lève tôt.'],
    ['le coup de foudre', 'el flechazo', "Ça a été le coup de foudre."],
    ['volontiers', 'con mucho gusto', 'Un café ? Volontiers !'],
  ],
  italiano: [
    ['magari', 'ojalá; quizá', 'Magari potessi venire!'],
    ['la passeggiata', 'el paseo', 'Facciamo una passeggiata dopo cena.'],
    ['boh', 'ni idea (coloquial)', 'Dove sono le chiavi? Boh!'],
    ['il dolce far niente', 'el placer de no hacer nada', 'La domenica è per il dolce far niente.'],
    ['allora', 'entonces, bueno', 'Allora, cominciamo?'],
    ['purtroppo', 'por desgracia', 'Purtroppo non posso venire.'],
    ['lo sbaglio', 'el error', 'È stato uno sbaglio.'],
    ['figurati', 'no hay de qué; ¡qué va!', 'Grazie! — Figurati!'],
  ],
  catalan: [
    ['el seny', 'la sensatez, el buen juicio', 'Cal actuar amb seny.'],
    ['la rauxa', 'el arrebato, el impulso', 'Va ser un moment de rauxa.'],
    ["l'enyorança", 'la añoranza', 'Sento enyorança de casa.'],
    ['la xafogor', 'el bochorno', 'Avui fa molta xafogor.'],
    ["l'aixopluc", 'el refugio (de la lluvia)', 'Vam trobar aixopluc sota un pont.'],
    ['tocar el dos', 'largarse', 'És tard, toquem el dos.'],
    ['de seguida', 'enseguida', 'Vinc de seguida.'],
    ['si us plau', 'por favor', 'Un cafè, si us plau.'],
  ],
};

window.FACTS = [
  'Si estiraras el ADN de una sola célula humana, mediría unos 2 metros.',
  'La luz del Sol tarda unos 8 minutos y 20 segundos en llegar a la Tierra.',
  'Un átomo es casi todo vacío: si el núcleo fuera una canica en el centro de un estadio, los electrones estarían por las gradas.',
  'El agua es de las pocas sustancias que se dilatan al congelarse; por eso el hielo flota.',
  'En Venus, un día (una rotación completa) dura más que un año.',
  'Los impulsos nerviosos pueden superar los 100 m/s en los axones con mielina.',
  'Tu corazón late unas 100 000 veces al día.',
  'Tu cuerpo alberga aproximadamente tantas bacterias como células humanas.',
  'Python debe su nombre a los Monty Python, no a la serpiente.',
  'SQL nació en IBM en los años setenta con el nombre SEQUEL.',
  'El catalán, el francés y el italiano descienden del latín; el alemán pertenece a la rama germánica.',
  'Júpiter es tan masivo que el centro de gravedad que comparte con el Sol queda fuera de la superficie solar.',
];
