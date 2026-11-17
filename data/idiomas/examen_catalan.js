// Modelos de examen de catalán con la estructura oficial de los certificados de la Generalitat de Catalunya
// (llengua.gencat.cat, «Estructura i descripció de les proves»):
//   A1 (nivell inicial): comprensió oral (3 exercicis), comprensió lectora (3), expressió escrita (1 tasca), expressió oral (3). Apte: 65/100.
//   A2 (nivell bàsic): adequació a la situació comunicativa (15 situacions, 3 respostes), comprensió oral (20 ítems),
//                      comprensió lectora (4 exercicis, 20 ítems), expressió oral (conversa + 4 situacions). Sense expressió escrita.
//   B1 (nivell elemental): comprensió lectora (4 textos), expressió escrita (carta personal de 150 paraules amb 5 punts),
//                          comprensió oral (part A: text llarg amb V/F; part B: 5 textos breus), gramàtica i vocabulari, expressió oral.
//   B2 (nivell intermedi): comprensió lectora (3 exercicis), expressió escrita (text informal obligatori + text formal a triar),
//                          comprensió oral (3 parts), gramàtica i vocabulari (ortografia, transformació, elecció, derivació),
//                          expressió oral (exposició d'un minut, arribar a un acord, conversa).
// Per ser apte cal un 60 % a l'expressió oral i un 60 % a la resta (A2, B1, B2). Textos i preguntes propis de Lumen.
(function () {
  const { mc, oir, libre, oral } = EX;
  const vf = (tx, q, ok, e) => ({ t: 'mc', tx, q, o: ['Vertader', 'Fals'], r: ok ? 0 : 1, e });
  const campo = (q, a, e) => ({ t: 'in', q, a, e });

  EX.add('catalan', 'A1', { titulo: 'Certificat de nivell inicial (A1)', corto: 'La prueba oficial nueva de nivel inicial: comprensión oral y lectora, un texto guiado y conversación.',
    desc: 'Reproduce la estructura de la prueba oficial de nivel inicial (A1) de la Generalitat, que empieza a administrarse en 2026: comprensión oral (3 ejercicios, 20 minutos), comprensión lectora (3 ejercicios, 25 minutos), expresión escrita (1 tarea, 25 minutos) y expresión oral (3 tareas, 10 minutos). Se aprueba con 65 puntos sobre 100.',
    partes: [
      { k: 'oral', n: 'Comprensió oral', d: 'Ejercicio 1: relacionar diálogos con su contexto. Ejercicio 2: entender diálogos sencillos. Ejercicio 3: avisos, anuncios y mensajes de voz.',
        t: { D1: "— Bon dia, una barra de pa i dos croissants, si us plau. — Aquí té. Són tres euros amb deu.",
          D2: "— Perdoni, on és l'estació? — Tot recte i després la segona a l'esquerra.",
          D3: "— Doctora, em fa mal el cap i tinc febre des d'ahir. — Obri la boca, si us plau.",
          D4: "— Hola, Marta! Com estàs? — Molt bé! Mira, et presento el meu germà, en Jordi.",
          M1: "Hola, sóc la Júlia. Sóc al bar de l'estació amb en Tomàs. Aquest vespre anem al cinema a les nou. La pel·lícula és al cinema Verdi, al carrer Gran. Vols venir? Truca'm. Fins ara!",
          A1: "Benvolguts clients, el supermercat tancarà d'aquí a quinze minuts. Us preguem que aneu cap a les caixes. Demà, diumenge, obrirem de nou del matí a dues del migdia. Gràcies." },
        q: [
          oir(mc('D1', 'Exercici 1 · Diàleg 1 · On són?', ['En un forn', 'En una farmàcia', 'En un banc'], 0, 'Pa i croissants: una panadería.')),
          oir(mc('D2', 'Exercici 1 · Diàleg 2 · Què vol la persona?', ['Saber on és l\'estació', 'Comprar un bitllet', 'Agafar un taxi'], 0, '«Perdoni, on és l\'estació?»')),
          oir(mc('D3', 'Exercici 1 · Diàleg 3 · On són?', ['Al metge', 'A l\'escola', 'En un restaurant'], 0, '«Doctora, em fa mal el cap…»')),
          oir(mc('D4', 'Exercici 1 · Diàleg 4 · Què fa la Marta?', ['Presenta el seu germà', 'Demana un cafè', 'Pregunta l\'hora'], 0, '«…et presento el meu germà».')),
          oir(mc('M1', 'Exercici 2 · On és la Júlia?', ['Al cinema', 'Al bar de l\'estació', 'A casa'], 1, '«Sóc al bar de l\'estació…»')),
          oir(mc('M1', 'Exercici 2 · A quina hora és la pel·lícula?', ['A les vuit', 'A les nou', 'A les deu'], 1, '«…a les nou».')),
          oir(mc('M1', 'Exercici 2 · On és el cinema?', ['Al carrer Gran', 'A la plaça', 'Al costat de l\'estació'], 0, '«…al carrer Gran».')),
          oir(mc('A1', 'Exercici 3 · Quan tanca el supermercat?', ['D\'aquí a cinc minuts', 'D\'aquí a quinze minuts', 'D\'aquí a una hora'], 1, '«…d\'aquí a quinze minuts».')),
          oir(mc('A1', 'Exercici 3 · Demà el supermercat obre…', ['tot el dia.', 'només al matí.', 'només a la tarda.'], 1, 'Del matí a dues del migdia.'))] },
      { k: 'lectora', n: 'Comprensió lectora', d: 'Ejercicio 1: un mensaje. Ejercicio 2: un cartel. Ejercicio 3: un anuncio.',
        t: { L1: "Hola, Marta!\nAquest cap de setmana me'n vaig a la platja amb la meva família. Marxem divendres al vespre amb cotxe i tornem diumenge. Ve també el gos! Em pots regar les plantes dissabte? Les claus les té la veïna, la senyora Puig, al primer pis.\nGràcies i fins dilluns!\nLluc",
          L2: "BIBLIOTECA MUNICIPAL\nHorari\nDimarts, dijous i divendres: de 10 a 18 h\nDimecres i dissabte: de 9 a 13 h\nTancat dilluns i diumenge\n\nEs poden agafar en préstec 5 llibres durant 3 setmanes.\nCarnet gratuït.\nNo es pot menjar ni beure a les sales.",
          L3: "ES LLOGA\nPis de 2 habitacions, 60 m², al centre.\nCuina equipada, balcó gran, segon pis amb ascensor.\nA prop del metro i de les botigues.\nPreu: 750 euros al mes.\nLliure a partir de l'1 de setembre.\nNo s'accepten animals.\nTel. 645 781 290 (a partir de les 17 h)" },
        q: [
          mc('L1', 'Exercici 1 · On va en Lluc aquest cap de setmana?', ['A la muntanya', 'A la platja', 'A Barcelona'], 1, '«…me\'n vaig a la platja…»'),
          mc('L1', 'Exercici 1 · Què ha de fer la Marta?', ['Regar les plantes', 'Cuidar el gos', 'Anar a comprar'], 0, '«Em pots regar les plantes…»'),
          mc('L1', 'Exercici 1 · Qui té les claus?', ['La veïna', 'La mare d\'en Lluc', 'La Marta'], 0, '«Les claus les té la veïna…»'),
          vf('L2', 'Exercici 2 · La biblioteca obre els dilluns.', false, '«Tancat dilluns i diumenge».'),
          vf('L2', 'Exercici 2 · El dissabte obre al matí.', true, 'Dissabte de 9 a 13 h.'),
          vf('L2', 'Exercici 2 · El carnet és gratuït.', true, '«Carnet gratuït.»'),
          mc('L3', 'Exercici 3 · Què té el pis?', ['Un jardí', 'Un balcó', 'Un garatge'], 1, '«…balcó gran».'),
          mc('L3', 'Exercici 3 · Quant costa al mes?', ['650 euros', '750 euros', '60 euros'], 1, '«Preu: 750 euros al mes.»'),
          mc('L3', 'Exercici 3 · Quan es pot trucar?', ['Al matí', 'A partir de les 17 h', 'Només el cap de setmana'], 1, '«(a partir de les 17 h)».')] },
      { k: 'escrita', n: 'Expressió escrita', d: 'Una tarea: rellenar un formulario y escribir un texto breve guiado. El formulario se corrige; el texto se compara con un modelo.', q: [
        campo('Formulari d\'inscripció a un curs de català. «Nacionalitat: …» (por ejemplo, española)', ['espanyola', 'espanyol', 'Espanyola', 'Espanyol'], 'espanyol, espanyola.'),
        campo('Formulari. «Llengua materna: …» (el castellano)', ['castellà', 'el castellà', 'Castellà', 'espanyol'], 'el castellà.'),
        campo('Formulari. «Dies que pots venir: dilluns i …» (miércoles)', ['dimecres', 'Dimecres'], 'dimecres = miércoles.'),
        libre("Escriu un missatge curt (unes 30 paraules) a un amic: on ets de vacances, quin temps fa i què fas.",
          "Hola, Pere!\nSóc a Tarragona amb la meva germana. Fa sol i molta calor. L'hotel és petit, però és a prop de la platja. Al matí anem a la platja i a la tarda visitem la ciutat. Fins aviat!\nMarta",
          'Responde a los tres puntos con frases sencillas, saluda y despídete.')] },
      { k: 'expressio', n: 'Expressió oral', d: 'Tres tareas: hablar de ti, intercambiar información y una situación práctica. Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Tasca 1 · Presenta't: com et dius, d'on ets, on vius, què fas i què t'agrada fer.",
          "Hola! Em dic Marta Ruiz. Sóc de Saragossa, però visc a Lleida des de fa un any. Treballo en un banc. M'agrada llegir, anar en bicicleta i passejar amb els amics. Estudio català perquè el necessito per a la feina.",
          'Frases cortas y claras. Si no entiendes: «Ho pot repetir, si us plau?»'),
        oral("Tasca 2 · Pregunta a l'examinador sobre aquests temes: esport, cap de setmana, menjar, vacances.",
          "Vostè fa esport? — Què fa el cap de setmana? — Quin menjar li agrada més? — On va de vacances aquest estiu?",
          'Una pregunta por tema. Puedes tutear o tratar de vostè, pero sin mezclar.'),
        oral("Tasca 3 · Ets al mercat. Compra fruita i verdura per a un sopar, pregunta els preus i paga. L'examinador és el venedor.",
          "Bon dia! — Voldria un quilo de tomàquets, si us plau. — Quant valen les pomes? — Dos euros el quilo? D'acord, en vull un quilo. — Té maduixes? — Doncs una safata. — Quant és? — Aquí té deu euros. — Gràcies, adéu!",
          'Saluda, pide con «voldria», pregunta precios con «quant val / quant valen», paga y despídete.')] }] });

  EX.add('catalan', 'A2', { titulo: 'Certificat de nivell bàsic (A2)', corto: 'La prueba oficial de nivel básico: adecuación a la situación, comprensión oral y lectora, y conversación.',
    desc: 'Reproduce la estructura del certificado de nivel básico (A2) de la Generalitat: adecuación a la situación comunicativa (15 minutos), comprensión oral (30 minutos), comprensión lectora (45 minutos) y expresión oral (15 minutos). Este nivel no tiene prueba escrita. Se aprueba con un 60 % en la expresión oral y un 60 % en el resto.',
    partes: [
      { k: 'adequacio', n: 'Adequació a la situació comunicativa', d: 'Escuchas una frase o una situación y eliges la respuesta adecuada entre tres. En el examen hay 15.',
        t: { S1: "Moltes gràcies per tot!", S2: "Que et pots afanyar? Fa deu minuts que t'espero!", S3: "Perdoni, sap on és la parada de l'autobús?", S4: "Avui és el meu aniversari.",
          S5: "Et ve de gust venir a sopar dissabte?", S6: "Ui, perdona, t'he trepitjat!", S7: "Quant val aquesta jaqueta?", S8: "Bon profit!" },
        q: [
          oir(mc('S1', 'Situació 1 · Respon:', ['De res!', 'Igualment!', 'Bon dia!'], 0, '«De res» responde a «gràcies».')),
          oir(mc('S2', 'Situació 2 · Respon:', ['Ho sento, ja vinc!', 'Molt de gust.', 'Per molts anys!'], 0, 'Te disculpas porque llegas tarde.')),
          oir(mc('S3', 'Situació 3 · Respon:', ['Sí, és just a la cantonada.', 'Són les tres.', 'No, gràcies.'], 0, 'Indicas dónde está.')),
          oir(mc('S4', 'Situació 4 · Respon:', ['Per molts anys!', 'Bon viatge!', 'Que et milloris!'], 0, 'Felicitación de cumpleaños.')),
          oir(mc('S5', 'Situació 5 · Respon:', ['I tant! A quina hora?', 'Sí, sóc jo.', 'No en tinc.'], 0, 'Aceptas la invitación.')),
          oir(mc('S6', 'Situació 6 · Respon:', ['No passa res.', 'De res.', 'Endavant.'], 0, 'Quitas importancia a la disculpa.')),
          oir(mc('S7', 'Situació 7 · Respon:', ['Quaranta-cinc euros.', 'La talla 40.', 'És de cotó.'], 0, 'Te preguntan el precio.')),
          oir(mc('S8', 'Situació 8 · Respon:', ['Igualment!', 'De res!', 'Fins demà!'], 0, '«Bon profit» se responde con «Igualment».'))] },
      { k: 'oral', n: 'Comprensió oral', d: 'Textos breves (anuncios, mensajes, una noticia) y cinco minidiálogos. En el examen hay 20 ítems.',
        t: { T1: "Atenció, si us plau. El tren regional amb destinació a Lleida sortirà amb un retard aproximat de vint-i-cinc minuts per la via tres. Disculpin les molèsties.",
          T2: "Bon dia, senyora Ferrer. Li truquem del Centre d'Atenció Primària. La seva visita de dijous a les dues queda anul·lada perquè la doctora està de baixa. Li podem oferir divendres a les deu o dilluns a dos quarts de cinc. Si us plau, truqui'ns abans de dimecres al vespre.",
          T3: "I ara, una bona notícia per als ciclistes: a partir de l'1 de juny, l'Ajuntament de Girona posarà dues-centes bicicletes elèctriques més a disposició dels ciutadans. La primera mitja hora costarà un euro, i els usuaris del transport públic pagaran la meitat.",
          M1: "— Què prendràs? — Un tallat. I tu? — Jo, una aigua amb gas.",
          M2: "— A quina hora surt l'autobús de Vic? — A tres quarts de deu.",
          M3: "— Has vist les meves claus? — Són sobre la taula del menjador.",
          M4: "— Com ha anat l'entrevista? — Molt bé! Començo dilluns.",
          M5: "— Ens veiem a la plaça? — Millor davant del cinema, que hi ha menys gent." },
        q: [
          oir(mc('T1', 'Text 1 · El tren va a…', ['Lleida', 'Girona', 'Tarragona'], 0, '«…amb destinació a Lleida».')),
          oir(mc('T1', 'Text 1 · El tren surt…', ['puntual.', 'amb uns 25 minuts de retard.', 'demà.'], 1, '«…retard aproximat de vint-i-cinc minuts».')),
          oir(mc('T2', 'Text 2 · Per què s\'anul·la la visita?', ['La doctora està de baixa.', 'El centre és tancat.', 'La senyora és de vacances.'], 0, '«…perquè la doctora està de baixa».')),
          oir(mc('T2', 'Text 2 · Quina altra hora li ofereixen dilluns?', ['A les 4:30', 'A les 5:30', 'A les 10'], 0, 'Dos quarts de cinc = 4:30.')),
          oir(vf('T3', 'Text 3 · Hi haurà més bicicletes elèctriques a partir del juny.', true, '«…a partir de l\'1 de juny…»')),
          oir(vf('T3', 'Text 3 · La primera mitja hora és gratuïta.', false, 'Cuesta un euro.')),
          oir(mc('M1', 'Minidiàleg 1 · Què prendrà la segona persona?', ['Un tallat', 'Una aigua amb gas', 'Un te'], 1, '«Jo, una aigua amb gas.»')),
          oir(mc('M2', 'Minidiàleg 2 · A quina hora surt l\'autobús?', ['A les 9:45', 'A les 10:45', 'A les 3:10'], 0, 'Tres quarts de deu = 9:45.')),
          oir(mc('M3', 'Minidiàleg 3 · On són les claus?', ['Sobre la taula del menjador', 'A la cuina', 'Al cotxe'], 0, '«Són sobre la taula del menjador.»')),
          oir(mc('M4', 'Minidiàleg 4 · Com ha anat l\'entrevista?', ['Bé: comença dilluns.', 'Malament.', 'Encara no ho sap.'], 0, '«Molt bé! Començo dilluns.»')),
          oir(mc('M5', 'Minidiàleg 5 · On queden?', ['Davant del cinema', 'A la plaça', 'A l\'estació'], 0, '«Millor davant del cinema…»'))] },
      { k: 'lectora', n: 'Comprensió lectora', d: 'Cuatro ejercicios con textos breves: un anuncio para una persona, un correo, unas instrucciones y una noticia. En el examen hay 20 ítems.',
        t: { E1: "Busques una activitat per al teu fill de 10 anys, els dimecres a la tarda. Li agraden els animals i la natura.\n\nA  Taller de pintura – de 8 a 12 anys – dissabtes de 10 a 12 h.\nB  Club natura «Petits exploradors» – descobrim ocells i insectes al bosc – dimecres de 17 a 19 h – de 9 a 13 anys.\nC  Curs de natació – dimecres de 17 a 18 h – a partir de 6 anys.\nD  Granja escola – visita i cura dels animals – diumenge al matí – per a tota la família.",
          E2: "De: Sofia Mas\nA: Departament de màrqueting\nAssumpte: Reunió de dijous\n\nBon dia a tothom,\nla reunió de dijous vinent es farà a la sala 204, al segon pis, i no a la sala de sempre, que és en obres. Començarà a dos quarts de deu en lloc de les nou. Porteu les vostres idees per a la campanya d'estiu. Hi serà també la directora. Confirmeu l'assistència abans de dimarts.\nSalutacions,\nSofia",
          E3: "LLOGUER DE BICICLETES – INSTRUCCIONS\n1. Trieu una bicicleta a l'estació.\n2. A la pantalla, seleccioneu «Lloguer curt» o «Abonament».\n3. Pagueu amb targeta. Es bloquegen 150 € de fiança, però no se us cobren.\n4. Retorneu la bicicleta a qualsevol estació.\nAtenció: després de 24 hores, es cobra una penalització de 10 €.",
          E4: "UN HORT AL TERRAT\nFa dos anys que els veïns d'un edifici del barri de Gràcia, a Barcelona, cultiven verdures al terrat. La idea va ser d'una jubilada, la Roser, que volia «fer barri». Avui hi participen una trentena de persones. Cadascú hi va quan vol, però tothom ha de regar com a mínim un cop per setmana. Les verdures es reparteixen entre els participants. El projecte ha tingut tant d'èxit que l'Ajuntament vol ajudar altres edificis a fer el mateix." },
        q: [
          mc('E1', 'Exercici 1 · Quina activitat tries per al teu fill?', ['Anunci A', 'Anunci B', 'Anunci C', 'Anunci D'], 1, 'Naturaleza, miércoles por la tarde, 9-13 años: B.'),
          mc('E2', 'Exercici 2 · Per què canvia la sala de la reunió?', ['La de sempre és en obres.', 'Hi ha més gent.', 'Ho demana la directora.'], 0, '«…que és en obres».'),
          mc('E2', 'Exercici 2 · A quina hora comença?', ['A les 9', 'A les 9:30', 'A les 10:30'], 1, 'Dos quarts de deu = 9:30.'),
          mc('E2', 'Exercici 2 · Què cal fer abans de dimarts?', ['Confirmar l\'assistència', 'Enviar un document', 'Reservar la sala'], 0, '«Confirmeu l\'assistència abans de dimarts.»'),
          vf('E3', 'Exercici 3 · Es pot pagar en efectiu.', false, '«Pagueu amb targeta.»'),
          vf('E3', 'Exercici 3 · Els 150 € de fiança es cobren.', false, '«…però no se us cobren».'),
          vf('E3', 'Exercici 3 · Es pot tornar la bicicleta a una altra estació.', true, '«…a qualsevol estació».'),
          mc('E4', 'Exercici 4 · On és l\'hort?', ['En un parc', 'Al terrat d\'un edifici', 'Davant de l\'Ajuntament'], 1, '«…al terrat».'),
          mc('E4', 'Exercici 4 · Per què va tenir la idea la Roser?', ['Per guanyar diners', 'Per «fer barri»', 'Per menjar més barat'], 1, '«…volia fer barri».'),
          mc('E4', 'Exercici 4 · Què vol fer l\'Ajuntament?', ['Tancar l\'hort', 'Ajudar altres edificis', 'Vendre les verdures'], 1, '«…ajudar altres edificis a fer el mateix».')] },
      { k: 'expressio', n: 'Expressió oral', d: 'Primera parte: conversación sobre temas cercanos. Segunda parte: reaccionar a cuatro situaciones cotidianas. Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Part 1 · Conversa. Parla de les teves últimes vacances: on vas anar, què vas fer, què et va agradar i què no.",
          "L'estiu passat vaig anar deu dies a Menorca amb la meva família. Vam llogar una caseta a prop del mar. Al matí anàvem a la platja i a la tarda visitàvem els pobles. Un dia vam fer una excursió amb barca a unes cales precioses. M'hi van agradar molt el menjar i els paisatges. En canvi, feia massa calor i hi havia molta gent. Però hi vull tornar.",
          'Perifràstic para los hechos, imperfet para describir; da tu opinión.'),
        oral("Part 2 · Situacions. Reacciona a cada situació: 1) Arribes tard a una reunió. 2) Vols canviar una cita amb el metge. 3) Un company et convida a sopar i no pots. 4) Demanes informació en una oficina de turisme.",
          "1) Perdoneu el retard, hi havia molt de trànsit. — 2) Bon dia, voldria canviar la visita de dijous. Em podria donar una altra hora? — 3) Moltes gràcies, però aquest dissabte no puc, tinc un compromís. Ho deixem per un altre dia? — 4) Bon dia, em podria donar un plànol de la ciutat i informació sobre els museus?",
          'Respuestas breves, educadas y adecuadas a cada situación.')] }] });

  EX.add('catalan', 'B1', { titulo: 'Certificat de nivell elemental (B1)', corto: 'Las cinco áreas oficiales del nivel elemental: lectura, carta personal, comprensión oral, gramática y vocabulario, y conversación.',
    desc: 'Reproduce la estructura del certificado de nivel elemental (B1) de la Generalitat: comprensión lectora (1 hora), expresión escrita (una carta personal de 150 palabras con cinco puntos, 30 minutos), comprensión oral (40 minutos), gramática y vocabulario (40 minutos) y expresión oral (15 minutos). Se aprueba con un 60 % en la expresión oral y un 60 % en el resto.',
    partes: [
      { k: 'lectora', n: 'Comprensió lectora', d: 'Cuatro textos (noticia, reportaje breve, carta, artículo de opinión) con preguntas de verdadero o falso, opción múltiple y emparejar. En el examen hay 20 ítems.',
        t: { P1: "Les biblioteques ja no són el que eren\n\nDurant molt de temps, a la biblioteca s'hi anava a buscar un llibre i se'n sortia en silenci. Avui aquests espais canvien. A Sabadell, la nova biblioteca ofereix tallers de cuina, classes d'informàtica per a gent gran i fins i tot un espai on reparar petits aparells amb l'ajuda de voluntaris.\n\nEl canvi respon a nous hàbits. Amb internet, els préstecs de llibres han baixat gairebé un vint per cent en deu anys. En canvi, cada vegada hi va més gent: molts estudiants hi van a estudiar perquè a casa no tenen espai, i moltes famílies hi passen la tarda del dissabte.\n\n«Una biblioteca ha de ser un lloc viu, no un museu», explica la directora. Admet, però, que les noves activitats creen problemes: alguns lectors es queixen del soroll. Per això s'han reservat dues plantes per a la lectura i l'estudi en silenci.",
          O1: "La teva amiga Nadia vol fer una estada d'anglès aquest estiu. Té tres setmanes de vacances al juliol, un pressupost màxim de 1.500 euros (allotjament inclòs), vol viure amb una família i fer esport.\n\nA  Londres – curs intensiu (30 h setmanals) – mínim 4 setmanes – residència – 1.900 €.\nB  Dublín – curs (20 h) + esports a la tarda – 2 o 3 setmanes al juliol o a l'agost – família d'acollida – 1.350 € tres setmanes.\nC  Edimburg – curs (15 h) + visites culturals – 3 setmanes a l'agost – família d'acollida – 1.200 €.\nD  Malta – curs (20 h) + submarinisme – 3 setmanes al juliol – hotel de tres estrelles – 1.450 €." },
        q: [
          mc('P1', 'Text 1 · De què tracta l\'article?', ['Del tancament de les biblioteques', 'De la transformació de les biblioteques', 'De la lectura entre els joves', 'De la història del llibre'], 1, '«Avui aquests espais canvien.»'),
          vf('P1', 'Text 1 · A la biblioteca es poden reparar petits aparells.', true, '«…un espai on reparar petits aparells…»'),
          vf('P1', 'Text 1 · Els préstecs de llibres han augmentat.', false, 'Han bajado casi un 20 %.'),
          mc('P1', 'Text 1 · Per què hi van molts estudiants?', ['Per agafar llibres', 'Perquè a casa no tenen espai', 'Pels tallers de cuina', 'Perquè és gratuït'], 1, '«…perquè a casa no tenen espai».'),
          mc('P1', 'Text 1 · Quin problema creen les noves activitats?', ['El soroll', 'El preu', 'La manca de voluntaris', 'L\'horari'], 0, '«…es queixen del soroll».'),
          mc('P1', 'Text 1 · Quina solució s\'ha trobat?', ['Plantes reservades al silenci', 'Prohibir els tallers', 'Tancar el dissabte', 'Fer pagar l\'entrada'], 0, '«…dues plantes per a la lectura i l\'estudi en silenci».'),
          mc('O1', 'Text 2 · Quina estada li convé més a la Nadia?', ['Londres (A)', 'Dublín (B)', 'Edimburg (C)', 'Malta (D)'], 1, 'Julio, tres semanas, familia, deporte y 1.350 €.'),
          mc('O1', 'Text 2 · Per què no li convé Malta?', ['És massa cara.', 'S\'allotja en un hotel.', 'És a l\'agost.', 'No hi ha esport.'], 1, 'Nadia quiere vivir en familia.')] },
      { k: 'escrita', n: 'Expressió escrita', d: 'Una carta personal de unas 150 palabras con un propósito, un destinatario y cinco puntos de contenido. Se compara con un modelo.', q: [
        libre("Fa dues setmanes que t'has traslladat a una altra ciutat per feina. Escriu una carta (unes 150 paraules) a un amic o una amiga en què:\n– li expliquis per què t'has traslladat;\n– li descriguis el pis i el barri;\n– li expliquis com et va a la feina;\n– li diguis què trobes a faltar;\n– el / la convidis a venir a veure't.",
          "Estimada Laura,\nper fi tinc una estona per escriure't! Com ja saps, fa dues setmanes que visc a Girona, perquè m'han ofert una feina en una empresa d'informàtica.\nHe llogat un pis petit al barri vell. És molt lluminós i té un balcó des d'on es veu el riu. El barri és tranquil i ple de cafeteries i botigues petites.\nLa feina m'agrada molt: els companys són simpàtics i aprenc moltes coses noves, tot i que de vegades acabo una mica tard.\nEl que més trobo a faltar ets tu i els nostres sopars dels divendres. També enyoro el mar, perquè aquí queda una mica lluny.\nPer què no véns un cap de setmana del mes que ve? Et puc ensenyar la ciutat i podríem anar d'excursió a la Costa Brava. Digue'm alguna cosa!\nUna abraçada molt forta,\nAna",
          'Comprueba que aparecen los cinco puntos, con saludo, párrafos ordenados y despedida, y unas 150 palabras.')] },
      { k: 'oral', n: 'Comprensió oral', d: 'Parte A: un texto de unos cuatro minutos (una entrevista) con preguntas de verdadero o falso. Parte B: cinco textos breves con una pregunta cada uno.',
        t: { E1: "— Bon dia, Lucía García. Fa tres anys que va obrir a Manresa una botiga sense envasos. Com va néixer la idea? — Quan va néixer la meva filla, em vaig adonar que el cubell de les escombraries s'omplia en dos dies, sobretot de plàstic. Buscava una botiga on comprar a granel, però al meu barri no n'hi havia cap. — I la va obrir vostè. — Exacte. Era comptable, i la gestió no em feia por. El més difícil va ser trobar productors de proximitat. — Qui són els seus clients? — Al principi, sobretot famílies joves. Ara també vénen moltes persones grans, que valoren poder comprar quantitats petites. — I els preus? — Sovint són més baixos que al supermercat, perquè no es paga l'envàs. Això sí, cal portar els pots de casa. — Quins projectes té? — Obrir una segona botiga l'any que ve i fer tallers per aprendre a fer productes de neteja.",
          B1: "Avís als passatgers: el vol 2340 amb destinació a Palma sortirà per la porta 14 en lloc de la porta 9.",
          B2: "Demà farà sol a tot el país, però a la tarda hi haurà xàfecs a la muntanya. Les temperatures baixaran una mica.",
          B3: "— Vols que anem al cine aquest vespre? — Avui no puc, he d'acabar un informe. Què et sembla demà?",
          B4: "El museu d'art amplia l'horari a l'estiu: de dimarts a diumenge obrirà fins a les nou del vespre. Els dilluns continuarà tancat.",
          B5: "Bon dia, truco per l'anunci del pis. Encara està disponible? M'agradaria veure'l aquesta setmana." },
        q: [
          oir(vf('E1', 'Part A · La idea va sorgir quan va néixer la filla de la Lucía.', true, '«Quan va néixer la meva filla…»')),
          oir(vf('E1', 'Part A · Al seu barri ja hi havia una botiga a granel.', false, '«…al meu barri no n\'hi havia cap».')),
          oir(vf('E1', 'Part A · Abans treballava de comptable.', true, '«Era comptable…»')),
          oir(vf('E1', 'Part A · El més difícil va ser trobar clients.', false, 'Lo más difícil fue encontrar productores de proximidad.')),
          oir(vf('E1', 'Part A · Les persones grans valoren poder comprar poca quantitat.', true, '«…poder comprar quantitats petites».')),
          oir(vf('E1', 'Part A · Els preus solen ser més alts que al supermercat.', false, 'Suelen ser más bajos.')),
          oir(vf('E1', 'Part A · Els clients han de portar els pots de casa.', true, '«…cal portar els pots de casa».')),
          oir(vf('E1', 'Part A · Vol obrir una segona botiga.', true, '«Obrir una segona botiga l\'any que ve…»')),
          oir(mc('B1', 'Part B · Text 1 · Què canvia?', ['La porta d\'embarcament', 'L\'hora del vol', 'La destinació', 'La companyia'], 0, 'De la puerta 9 a la 14.')),
          oir(mc('B2', 'Part B · Text 2 · Quin temps farà a la tarda a la muntanya?', ['Xàfecs', 'Sol', 'Neu', 'Vent fort'], 0, '«…hi haurà xàfecs a la muntanya».')),
          oir(mc('B3', 'Part B · Text 3 · Què proposa la segona persona?', ['Anar-hi demà', 'Anar-hi avui', 'No anar-hi mai', 'Anar al teatre'], 0, '«Què et sembla demà?»')),
          oir(mc('B4', 'Part B · Text 4 · Quin dia tanca el museu?', ['Dilluns', 'Diumenge', 'Dimarts', 'Cap'], 0, '«Els dilluns continuarà tancat.»')),
          oir(mc('B5', 'Part B · Text 5 · Per què truca la persona?', ['Per veure un pis', 'Per vendre un pis', 'Per queixar-se', 'Per reservar un hotel'], 0, '«…m\'agradaria veure\'l aquesta setmana».'))] },
      { k: 'gramatica', n: 'Gramàtica i vocabulari', d: 'Primera parte: transformar frases y rellenar huecos (verbos, pronombres, preposiciones). Segunda parte: huecos de vocabulario.', q: [
        campo('Transformació · Substitueix «el llibre» per un pronom: «Dono el llibre a la Marta.» → «___ dono a la Marta.»', ['El', 'el'], 'Objeto directo masculino: el.'),
        campo('Transformació · Passa al perifràstic: «Demà anem al cinema.» → «Ahir ___ anar al cinema.»', ['vam'], 'nosaltres vam + infinitivo.'),
        campo('Transformació · Substitueix «a Girona»: «Vaig a Girona demà.» → «___ vaig demà.»', ['Hi', 'hi'], 'Lugar: hi.'),
        campo('Transformació · Substitueix «pomes»: «Vull tres pomes.» → «___ vull tres.»', ['En', 'en'], 'Cantidad: en.'),
        mc(null, 'Omple el buit · «Espero que demà ___ bon temps.»', ['faci', 'fa', 'farà', 'feia'], 0, 'esperar que + subjuntivo.'),
        mc(null, 'Omple el buit · «Si ___ temps, aniria més sovint al gimnàs.»', ['tingués', 'tindria', 'tinc', 'tenia'], 0, 'si + imperfet de subjuntiu.'),
        mc(null, 'Omple el buit · «L\'empresa ___ treballo és a Terrassa.»', ['on', 'que', 'qui', 'la que'], 0, 'Lugar: on (o «en què»).'),
        mc(null, 'Omple el buit · «___ estudiar català, vaig a classes al vespre.»', ['Per', 'Per a', 'Perquè', 'Que'], 0, 'Finalidad con infinitivo: per.'),
        mc(null, 'Vocabulari · «Per pagar, necessito treure diners del ___.»', ['caixer', 'calaix', 'cistell', 'cartell'], 0, 'el caixer automàtic.'),
        mc(null, 'Vocabulari · «M\'han ___ de la feina i ara sóc a l\'atur.»', ['acomiadat', 'despedit', 'acabat', 'tret'], 0, 'despedir (de un trabajo) = acomiadar.'),
        mc(null, 'Vocabulari · «Plou molt: agafa el ___.»', ['paraigua', 'paraigües', 'para-sol', 'impermeable de sol'], 0, 'el paraigua.')] },
      { k: 'expressio', n: 'Expressió oral', d: 'Primera parte: conversación con el examinador sobre temas de interés general. Segunda parte: reaccionar a cinco situaciones cotidianas.', q: [
        oral("Part 1 · Conversa. Quins avantatges i inconvenients té viure en una ciutat gran o en un poble? On preferiries viure i per què?",
          "Jo he viscut a tots dos llocs, així que hi puc comparar. La ciutat té molts avantatges: hi ha més feina, més transport públic i més activitats culturals. En canvi, és sorollosa, els pisos són caríssims i tot va molt de pressa. Al poble la vida és més tranquil·la i la gent es coneix, però de vegades falten serveis, com metges o escoles. Si pogués triar, viuria en un poble a prop d'una ciutat, amb un bon tren, per tenir el millor de cada lloc.",
          'Explica, compara, da tu opinión y justifícala.'),
        oral("Part 2 · Situacions. 1) Truques a un restaurant per reservar taula per a sis. 2) A la botiga, el producte que has comprat no funciona. 3) Arribes tard a classe i et disculpes. 4) Proposes a un company fer junts un treball. 5) Demanes a un veí que abaixi la música.",
          "1) Bon vespre, voldria reservar una taula per a sis persones per dissabte a les nou. — 2) Bon dia, vaig comprar aquesta torradora fa tres dies i no funciona. La podria canviar? — 3) Perdoneu el retard, el tren ha arribat tard. — 4) Què et semblaria si féssim el treball junts? Podríem quedar dimarts a la biblioteca. — 5) Perdona, et sabria greu abaixar una mica la música? Demà m'he de llevar molt d'hora.",
          'Fórmulas de cortesía: voldria, podria, et sabria greu…, què et semblaria si…')] }] });

  EX.add('catalan', 'B2', { titulo: 'Certificat de nivell intermedi (B2)', corto: 'Las cinco áreas oficiales del nivel intermedio: lectura, dos textos (informal y formal), comprensión oral, gramática y vocabulario, y expresión oral en pareja.',
    desc: 'Reproduce la estructura del certificado de nivel intermedio (B2) de la Generalitat: comprensión lectora (1 hora), expresión escrita (texto informal obligatorio y texto formal a elegir, 1 h 30 min), comprensión oral (1 hora), gramática y vocabulario (1 hora) y expresión oral (en pareja, 30 minutos). Se aprueba con un 60 % en la expresión oral y un 60 % en el resto.',
    partes: [
      { k: 'lectora', n: 'Comprensió lectora', d: 'Tres ejercicios con textos no especializados: un artículo informativo, un texto de opinión y una tarea de emparejar. En el examen hay 21 ítems.',
        t: { A1: "La setmana de quatre dies funciona… amb condicions\n\nFa un any que una seixantena d'empreses catalanes proven la setmana de quatre dies sense reduir el sou. Els primers resultats són encoratjadors: les baixes han baixat gairebé un vint per cent i la majoria de treballadors diuen que estan menys cansats. Encara més sorprenent: la productivitat no ha disminuït en tres de cada quatre empreses.\n\nAquest èxit s'explica sobretot per una reorganització de la feina: reunions més curtes, menys correus i prioritats clares per a cada equip.\n\nEl model, però, té límits. En els sectors en què el servei s'ha de garantir cada dia, com la sanitat o el comerç, ha calgut contractar més personal, i els costos han augmentat. A més, alguns treballadors han viscut malament les jornades de nou hores, sobretot els pares d'infants petits.\n\nEls autors de l'estudi no volen presentar la setmana curta com una solució universal. Recomanen adaptar-la a cada ofici i deixar triar els treballadors.",
          T1: "Prou de culpabilitzar qui viatja\n\nJa no es poden comptar els articles que conviden a renunciar a l'avió. No nego l'impacte del transport aeri en el clima; el que discuteixo és que la solució passi sobretot pel sentiment de culpa individual.\n\nEn primer lloc, aquesta moral afecta sobretot qui viatja poc: el directiu que agafa l'avió cada setmana per feina no se sent al·ludit, mentre que la família que viatja un cop cada tres anys per veure els parents a l'estranger se n'hauria d'avergonyir. En segon lloc, l'alternativa que es proposa, el tren, sovint és més cara i, per a moltes destinacions, simplement no existeix.\n\nEn comptes de fer sermons, les institucions haurien d'actuar on la seva acció és eficaç: gravar el querosè, fer assequibles els trens nocturns i regular els vols de negocis. Són decisions polítiques, no tries dels consumidors." },
        q: [
          mc('A1', 'Exercici 1 · Quin és el resultat principal de la prova?', ['Els treballadors rendeixen menys.', 'Els resultats són encoratjadors.', 'Les empreses ho han deixat córrer.', 'Els sous han baixat.'], 1, '«Els primers resultats són encoratjadors.»'),
          vf('A1', 'Exercici 1 · Els treballadors cobren menys.', false, '«…sense reduir el sou».'),
          mc('A1', 'Exercici 1 · A què es deu l\'èxit?', ['A una reorganització de la feina', 'A noves contractacions', 'A sous més alts', 'A més teletreball'], 0, 'Segundo párrafo.'),
          mc('A1', 'Exercici 1 · Per què han augmentat els costos en alguns sectors?', ['Ha calgut contractar més personal.', 'S\'ha comprat material.', 'Han pujat els sous.', 'Hi ha hagut vagues.'], 0, 'Sanidad y comercio.'),
          mc('A1', 'Exercici 1 · Què recomanen els autors?', ['Adaptar-la a cada ofici i deixar triar', 'Estendre-la a tothom', 'Tornar als cinc dies', 'Reduir el sou'], 0, 'Último párrafo.'),
          mc('T1', 'Exercici 2 · Quina és la tesi de l\'autor?', ['Cal prohibir l\'avió per a les vacances.', 'La solució és política, no individual.', 'L\'avió no contamina.', 'El tren és sempre més barat.'], 1, 'Pide medidas políticas en lugar de culpa individual.'),
          vf('T1', 'Exercici 2 · L\'autor nega que l\'avió afecti el clima.', false, '«No nego l\'impacte…»'),
          mc('T1', 'Exercici 2 · Qui pateix més la culpabilització, segons l\'autor?', ['Qui viatja per feina', 'Qui viatja poc', 'Les companyies aèries', 'Els governs'], 1, 'La familia que viaja una vez cada tres años.'),
          mc('T1', 'Exercici 2 · Quina mesura proposa?', ['Gravar el querosè', 'Prohibir els vols interiors', 'Limitar els viatges per persona', 'Apujar el preu del tren'], 0, '«…gravar el querosè…»'),
          mc('T1', 'Exercici 2 · Quin to té el text?', ['Neutre i descriptiu', 'Argumentatiu i polèmic', 'Humorístic', 'Poètic'], 1, 'Es una tribuna de opinión.')] },
      { k: 'escrita', n: 'Expressió escrita', d: 'Dos textos: uno informal obligatorio y uno formal (en el examen se elige entre tres). Se comparan con un modelo.', q: [
        libre("Tasca 1 (informal, obligatòria) · Un amic teu està pensant a deixar la feina per fer la volta al món durant un any i et demana consell. Escriu-li un missatge (unes 150 paraules) en què li donis la teva opinió, amb avantatges, riscos i algun consell pràctic.",
          "Hola, Jordi!\nQuina notícia! He estat pensant en el que em vas dir i, sincerament, crec que hauries de fer-ho. Un viatge així és una oportunitat que no es repeteix: coneixeràs altres cultures, aprendràs llengües i tornaràs amb una altra mirada sobre moltes coses.\nAra bé, no t'ho prenguis a la lleugera. Abans de plegar, parla amb la teva empresa: potser et poden donar una excedència i així no perds la feina. A més, fes un pressupost realista i guarda'n una part per a imprevistos, que sempre n'hi ha.\nUn altre consell: no vulguis veure-ho tot. És millor passar més temps en pocs llocs que anar sempre corrent.\nI si et fa por tornar i no trobar feina, pensa que l'experiència també compta al currículum.\nSigui com sigui, et donaré suport. Tant de bo m'enviïs moltes fotos!\nUna abraçada,\nAna",
          'Registro informal coherente, opinión clara, ventajas, riesgos y consejos, con conectores variados (ara bé, a més, sigui com sigui).'),
        libre("Tasca 2 (formal) · L'Ajuntament de la teva ciutat vol tancar la biblioteca del barri per estalviar. Escriu una carta a l'alcalde o l'alcaldessa (unes 200 paraules) en què exposis la teva opinió, donis arguments i proposis alternatives.",
          "Benvolguda alcaldessa,\nUs escric com a veïna del barri de Sant Pere per expressar-vos la meva preocupació per la proposta de tancar la biblioteca municipal.\nEntenc que l'Ajuntament hagi de reduir despeses; tanmateix, considero que tancar un equipament cultural seria una decisió equivocada. En primer lloc, la biblioteca és l'únic espai públic del barri on els estudiants poden treballar en silenci, ja que molts no disposen d'un lloc adequat a casa. En segon lloc, ofereix activitats gratuïtes per a gent gran i per a infants que contribueixen a la cohesió del barri. Finalment, segons les dades del mateix Ajuntament, el nombre de visitants ha augmentat els darrers anys.\nPer tot això, us proposo que s'estudiïn altres alternatives: reduir l'horari d'obertura en lloc de tancar, compartir l'edifici amb altres serveis municipals o buscar el suport d'entitats del barri.\nResto a la vostra disposició per a qualsevol aclariment i confio que reconsidereu la proposta.\nAtentament,\nAna Ruiz",
          'Registro formal (vós o vostè, sin mezclar), estructura de carta, argumentos ordenados (en primer lloc, en segon lloc, finalment) y propuestas.')] },
      { k: 'oral', n: 'Comprensió oral', d: 'Tres partes con textos de distinta extensión: una entrevista, varias noticias y una conferencia breve. En el examen hay 15 ítems.',
        t: { I1: "— Bon dia, Marc Albà. Vostè és sociòleg i ha publicat un estudi sobre els joves que deixen les ciutats per anar a viure a pobles. És un fenomen nou? — No del tot. Des dels anys setanta sempre hi ha hagut gent de ciutat que somiava amb la natura. La novetat és el perfil: són persones d'uns trenta anys, amb estudis universitaris, que mantenen la feina gràcies al teletreball. — Com acullen els pobles aquests nous veïns? — En general, bé, perquè porten infants i fan viure les botigues. Però també hi ha tensions per l'habitatge: l'arribada de gent amb sous alts fa pujar els preus. — I els trasllats funcionen? — Més o menys. Gairebé un terç de les persones que hem entrevistat ha tornat a la ciutat al cap de tres anys. El motiu principal no és l'avorriment, sinó la manca de serveis: no hi ha metge, tanquen l'escola, suprimeixen trens.",
          N1: "Segons un estudi publicat ahir, els catalans passen de mitjana quatre hores i mitja al dia davant d'una pantalla fora de la feina. Entre els menors de vint-i-cinc anys, però, el temps davant del televisor s'ha reduït a la meitat en deu anys.",
          N2: "A partir del mes vinent, els restaurants de Barcelona hauran d'oferir gratuïtament als clients la possibilitat d'endur-se el menjar que els hagi sobrat en un envàs reutilitzable.",
          C1: "Bon dia a tothom. Avui us parlaré del bilingüisme en els infants. Durant molt de temps es va creure que créixer amb dues llengües era un desavantatge. Aquesta idea es basava en estudis poc rigorosos. Avui sabem que els infants bilingües a vegades comencen a parlar una mica més tard, però recuperen el retard ràpidament i, a més, sembla que tenen més facilitat per canviar d'una tasca a una altra. El consell per a les famílies és senzill: parleu als vostres fills en la llengua en què us sentiu més còmodes." },
        q: [
          oir(mc('I1', 'Part 1 · Què és nou en aquest fenomen?', ['El desig de natura', 'El perfil de les persones', 'El nombre de pobles', 'El preu de les cases'], 1, 'Treintañeros con estudios que teletrabajan.')),
          oir(mc('I1', 'Part 1 · Per què els pobles acullen bé els nous veïns?', ['Porten infants i fan viure les botigues.', 'Paguen més impostos.', 'Creen empreses.', 'Són famosos.'], 0, '«…porten infants i fan viure les botigues».')),
          oir(mc('I1', 'Part 1 · Quina tensió s\'esmenta?', ['La pujada del preu de l\'habitatge', 'El soroll', 'El trànsit', 'La llengua'], 0, '«…fa pujar els preus».')),
          oir(mc('I1', 'Part 1 · Quina proporció ha tornat a la ciutat?', ['Gairebé un terç', 'La meitat', 'Un de cada deu', 'Cap'], 0, '«Gairebé un terç…»')),
          oir(mc('I1', 'Part 1 · Per què han tornat?', ['Per la manca de serveis', 'Per avorriment', 'Per la feina', 'Pel clima'], 0, '«…la manca de serveis».')),
          oir(vf('N1', 'Part 2 · Notícia 1 · Els joves miren la televisió la meitat que fa deu anys.', true, '«…s\'ha reduït a la meitat en deu anys».')),
          oir(vf('N2', 'Part 2 · Notícia 2 · Els clients hauran de pagar l\'envàs.', false, '«…gratuïtament».')),
          oir(mc('C1', 'Part 3 · Què es creia abans del bilingüisme?', ['Que era un desavantatge', 'Que feia més intel·ligents', 'Que era impossible', 'Que només servia per viatjar'], 0, '«…era un desavantatge».')),
          oir(mc('C1', 'Part 3 · Què passa amb els infants bilingües?', ['Recuperen ràpidament el retard inicial.', 'Mai no parlen bé cap llengua.', 'Parlen sempre abans.', 'Confonen les llengües tota la vida.'], 0, '«…recuperen el retard ràpidament».')),
          oir(mc('C1', 'Part 3 · Quin consell dóna a les famílies?', ['Parlar en la llengua en què se sentin més còmodes', 'Parlar només en català', 'Esperar abans d\'ensenyar una segona llengua', 'Apuntar-los a classes'], 0, 'El consejo final.'))] },
      { k: 'gramatica', n: 'Gramàtica i vocabulari', d: 'Ortografía (grafías y acentos), transformación de frases, elección múltiple en un texto y derivación de palabras.', q: [
        campo('Ortografia · Escriu correctament: «inteligent» →', ['intel·ligent'], 'Ela geminada.'),
        campo('Ortografia · Escriu amb l\'accent correcte: «tambe» →', ['també'], 'Aguda acabada en vocal: también lleva tilde (é cerrada).'),
        campo('Transformació · Passa a estil indirecte: «Vindré demà.» → «Va dir que ___ l\'endemà.»', ['vindria'], 'futuro → condicional.'),
        campo('Transformació · Substitueix «la carta» i «al director»: «Vaig donar la carta al director.» → «___ vaig donar.»', ['La hi', 'la hi'], 'li + la → la hi.'),
        mc(null, 'Elecció · «___ la pluja, el concert es va fer igualment.»', ['Malgrat', 'A pesar de', 'Encara que', 'Tot i que'], 0, 'Con un nombre: malgrat.'),
        mc(null, 'Elecció · «Si ho ___ sabut, t\'hauria avisat.»', ['hagués', 'hauria', 'havia', 'hagi'], 0, 'si + plusquamperfet de subjuntiu.'),
        mc(null, 'Elecció · «___ revisar totes les dades abans de publicar-les.»', ['Cal', 'Hi ha que', 'Té que', 'S\'ha que'], 0, 'Impersonal: cal.'),
        mc(null, 'Elecció · «No crec que l\'Ajuntament ___ raó.»', ['tingui', 'té', 'tindrà', 'tenia'], 0, 'Opinión negativa: subjuntivo.'),
        campo('Derivació · Forma el substantiu de «desenvolupar»: «el ___»', ['desenvolupament'], '-ment.'),
        campo('Derivació · Forma el contrari de «previsible»: «___»', ['imprevisible'], 'Prefijo im- delante de p.')] },
      { k: 'expressio', n: 'Expressió oral', d: 'En pareja. Parte 1: hablar sobre un tema durante un minuto. Parte 2: llegar a un acuerdo a partir de una tarea. Parte 3: conversación. Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Part 1 · Parla durant un minut sobre aquest tema: «La importància d'aprendre llengües avui dia».",
          "Avui dia aprendre llengües és més important que mai. D'una banda, obre portes a la feina: moltes empreses treballen amb altres països i valoren molt els idiomes. De l'altra, permet conèixer altres cultures des de dins, no només com a turistes. A més, diversos estudis indiquen que parlar diverses llengües ajuda a mantenir el cervell actiu. Personalment, aprendre català m'ha permès integrar-me molt millor a la meva ciutat i fer amics nous. Per això crec que val la pena l'esforç, encara que costi temps.",
          'Introducción, dos o tres ideas con conectores, un ejemplo personal y cierre, en un minuto.'),
        oral("Part 2 · Arribeu a un acord. Organitzeu el sopar de final de curs de la vostra classe: heu de decidir el lloc, el pressupost per persona i una activitat. El teu company (l'examinador) prefereix un restaurant car al centre; tu, una opció més econòmica.",
          "Entenc que un restaurant al centre sigui més còmode, però potser és massa car per a alguns companys. — Tens raó que el lloc és important, no ho nego. Ara bé, si posem un pressupost de vint-i-cinc euros, hi pot venir tothom. — Què et semblaria si féssim el sopar en una masia als afores i hi anéssim en autocar? Seria més barat i podríem fer un karaoke. — D'acord, doncs: la masia, vint-i-cinc euros per persona i karaoke. Ho proposem a la classe?",
          'Concede lo razonable, rebate, propone y cierra con un acuerdo explícito.'),
        oral("Part 3 · Conversa. Creus que les xarxes socials ens acosten o ens allunyen dels altres? Doneu la vostra opinió i reaccioneu a la del company.",
          "Jo crec que depèn de com les fem servir. És cert que permeten mantenir el contacte amb amics que viuen lluny, i això és molt positiu. Però també és veritat que de vegades estem amb gent i cadascú mira el seu mòbil. — Hi estic d'acord en part, però no crec que la culpa sigui de les xarxes, sinó de nosaltres. — Exactament: cal aprendre a desconnectar. Jo, per exemple, no faig servir el mòbil durant els àpats.",
          'Opina, reacciona a lo que dice el otro (hi estic d\'acord en part, però…) y aporta ejemplos.')] }] });

  // Muchas opciones se han escrito con la correcta en primer lugar: se reparten las posiciones de forma fija (siempre igual en cada carga)
  // y se vuelven a poner las letras a), b), c)…
  const L = 'abcdefghij';
  Object.values(EXAMEN.catalan).forEach((X) => X.partes.forEach((pt) => pt.q.forEach((q, i) => {
    if (q.t !== 'mc' || !/^a\)  /.test(q.o[0])) return;
    const limpio = q.o.map((x) => x.replace(/^[a-j]\)  /, '')), n = limpio.length, k = (i * 2 + 1) % n;
    const rot = limpio.slice(n - k).concat(limpio.slice(0, n - k));
    q.o = rot.map((x, j) => L[j] + ')  ' + x); q.r = (q.r + k) % n;
  })));
})();
