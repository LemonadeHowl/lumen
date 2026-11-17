// Modelos de examen de italiano A1 y A2 con la estructura habitual del CILS (Università per Stranieri di Siena), módulo para adultos:
//   Ascolto (3 prove) · Comprensione della lettura (3 prove) · Produzione scritta (2 prove) · Produzione orale (2 prove)
// La estructura se ha reconstruido a partir de la información general del CILS; la web oficial solo ofrece los exámenes completos
// de muestra (sesión de junio de 2017) como descarga. Textos y preguntas propios de Lumen.
(function () {
  const { mc, oir, libre, oral } = EX;
  const vf = (tx, q, ok, e) => ({ t: 'mc', tx, q, o: ['Vero', 'Falso'], r: ok ? 0 : 1, e });
  const campo = (q, a, e) => ({ t: 'in', q, a, e });

  EX.add('italiano', 'A1', { titulo: 'CILS A1', corto: 'Las cuatro pruebas del CILS A1: escucha, lectura, escritura y expresión oral.',
    desc: 'Sigue la estructura habitual del CILS A1 para adultos: escucha (3 pruebas), comprensión de lectura (3 pruebas), producción escrita (formulario y mensaje breve) y producción oral (presentarse y un diálogo). Para aprobar hace falta superar cada prueba por separado.',
    partes: [
      { k: 'ascolto', n: 'Ascolto', d: 'Prova 1: un mensaje en el contestador. Prova 2: un anuncio público. Prova 3: cuatro diálogos breves. En el examen cada texto se oye dos veces.',
        t: { M1: "Ciao, sono Giulia. Sono al bar della stazione con Tommaso. Stasera andiamo al cinema alle nove meno un quarto. Il film è al cinema Odeon, in via Garibaldi. Vieni con noi? Richiamami al tre quattro sette, dodici, trentaquattro, cinquantasei. A dopo!",
          A1: "Gentili clienti, benvenuti al supermercato Coop. Oggi, nel reparto frutta e verdura, le mele costano due euro al chilo. Attenzione: sabato il supermercato chiude alle diciotto. Grazie e buona spesa!",
          D1: "— Scusi, signora, per la posta? — Vada sempre dritto e poi prenda la seconda strada a sinistra.",
          D2: "— Buongiorno, vorrei due cornetti e un cappuccino, per favore. — Ecco a lei. Sono tre euro e dieci.",
          D3: "— Dottore, ho mal di testa e la febbre da ieri. — Apra la bocca, per favore.",
          D4: "— Un biglietto di sola andata per Firenze, per favore. — Prima o seconda classe?" },
        q: [
          oir(mc('M1', 'Prova 1 · Dov\'è Giulia?', ['Al cinema', 'Al bar della stazione', 'A casa'], 1, '«Sono al bar della stazione…»')),
          oir(mc('M1', 'Prova 1 · A che ora è il film?', ['Alle 20:45', 'Alle 21:00', 'Alle 21:15'], 0, 'Le nove meno un quarto = 20:45.')),
          oir(mc('M1', 'Prova 1 · Il cinema è…', ['in via Garibaldi.', 'vicino alla stazione.', 'in piazza.'], 0, '«…cinema Odeon, in via Garibaldi».')),
          oir(mc('M1', 'Prova 1 · Che cosa chiede Giulia?', ['Di richiamarla', 'Di comprare i biglietti', 'Di arrivare presto'], 0, '«Richiamami…»')),
          oir(mc('A1', 'Prova 2 · Dove siamo?', ['In una stazione', 'In un supermercato', 'In un ristorante'], 1, '«…benvenuti al supermercato Coop».')),
          oir(mc('A1', 'Prova 2 · Quanto costano le mele?', ['Un euro al chilo', 'Due euro al chilo', 'Tre euro al chilo'], 1, '«…due euro al chilo».')),
          oir(mc('A1', 'Prova 2 · Sabato il supermercato chiude…', ['alle 16.', 'alle 18.', 'alle 20.'], 1, '«…chiude alle diciotto».')),
          oir(mc('D1', 'Prova 3 · Dialogo 1 · La persona…', ['chiede la strada.', 'compra un francobollo.', 'prende l\'autobus.'], 0, 'Pregunta cómo llegar a correos.')),
          oir(mc('D2', 'Prova 3 · Dialogo 2 · Siamo…', ['al bar.', 'in farmacia.', 'in banca.'], 0, 'Cornetti y cappuccino.')),
          oir(mc('D3', 'Prova 3 · Dialogo 3 · Siamo…', ['dal medico.', 'a scuola.', 'al ristorante.'], 0, '«Dottore, ho mal di testa…»')),
          oir(mc('D4', 'Prova 3 · Dialogo 4 · La persona compra…', ['un biglietto del treno.', 'un biglietto del cinema.', 'un libro.'], 0, '«Un biglietto di sola andata per Firenze».'))] },
      { k: 'lettura', n: 'Comprensione della lettura', d: 'Prova 1: un correo de un amigo. Prova 2: un cartel con horarios. Prova 3: un anuncio de alquiler.',
        t: { L1: "Da: Luca\nA: Marta\nOggetto: Questo fine settimana\n\nCiao Marta!\nQuesto fine settimana vado al mare con la mia famiglia. Partiamo venerdì sera in macchina e torniamo domenica. Viene anche il mio cane! Puoi annaffiare le mie piante sabato? Le chiavi sono dalla mia vicina, la signora Bianchi, al primo piano.\nGrazie mille e a lunedì!\nLuca",
          L2: "BIBLIOTECA COMUNALE\n\nOrario di apertura\nMartedì, giovedì, venerdì: 10–18\nMercoledì e sabato: 9–12\nChiusa il lunedì e la domenica\n\nSi possono prendere in prestito 5 libri per 3 settimane.\nIscrizione gratuita per i minori di 18 anni.\nVietato mangiare e bere nelle sale.",
          L3: "AFFITTASI\nAppartamento di 2 locali, 45 m², in centro.\nCucina abitabile, grande balcone, secondo piano con ascensore.\nVicino alla metro e ai negozi.\nAffitto: 650 euro al mese, spese comprese.\nLibero dal 1° settembre.\nNo animali.\nTel. 345 7812 909 (dopo le 17)" },
        q: [
          mc('L1', 'Prova 1 · Dove va Luca questo fine settimana?', ['In montagna', 'Al mare', 'A Roma'], 1, '«…vado al mare…»'),
          mc('L1', 'Prova 1 · Come viaggia?', ['In treno', 'In macchina', 'In aereo'], 1, '«…in macchina».'),
          mc('L1', 'Prova 1 · Che cosa deve fare Marta?', ['Annaffiare le piante', 'Tenere il cane', 'Fare la spesa'], 0, '«Puoi annaffiare le mie piante…»'),
          mc('L1', 'Prova 1 · Dove sono le chiavi?', ['Dalla vicina', 'Sotto la porta', 'In macchina'], 0, '«Le chiavi sono dalla mia vicina…»'),
          vf('L2', 'Prova 2 · La biblioteca è aperta il lunedì.', false, '«Chiusa il lunedì e la domenica».'),
          vf('L2', 'Prova 2 · Il sabato si può andare la mattina.', true, 'Sabato 9–12.'),
          vf('L2', 'Prova 2 · Si possono prendere in prestito cinque libri.', true, '«…5 libri per 3 settimane».'),
          vf('L2', 'Prova 2 · Nelle sale si può bere un caffè.', false, '«Vietato mangiare e bere…»'),
          mc('L3', 'Prova 3 · L\'appartamento ha…', ['un giardino.', 'un balcone.', 'un garage.'], 1, '«…grande balcone».'),
          mc('L3', 'Prova 3 · L\'affitto è di…', ['450 euro.', '650 euro.', '45 euro.'], 1, '«Affitto: 650 euro al mese».'),
          mc('L3', 'Prova 3 · Quando è libero l\'appartamento?', ['Dal 1° settembre', 'Subito', 'Dal 1° luglio'], 0, '«Libero dal 1° settembre.»'),
          mc('L3', 'Prova 3 · Si può telefonare…', ['la mattina.', 'dopo le 17.', 'solo il fine settimana.'], 1, '«(dopo le 17)».')] },
      { k: 'scritta', n: 'Produzione scritta', d: 'Prova 1: rellenar un formulario. Prova 2: escribir un mensaje breve (unas 30 palabras). El formulario se corrige; el mensaje se compara con un modelo.', q: [
        campo('Prova 1 · Ti iscrivi a un corso d\'italiano a Siena. Modulo: «Nazionalità: …» (tu nacionalidad, por ejemplo «spagnola»)', ['spagnola', 'spagnolo', 'Spagnola', 'Spagnolo'], 'Femenino «spagnola», masculino «spagnolo».'),
        campo('Prova 1 · Modulo: «Lingua madre: …» (el español)', ['spagnolo', 'lo spagnolo', 'Spagnolo'], 'Las lenguas en minúscula: spagnolo.'),
        campo('Prova 1 · Modulo: «Giorni preferiti: lunedì e …» (miércoles)', ['mercoledì', 'mercoledi', 'Mercoledì'], 'mercoledì = miércoles.'),
        campo('Prova 1 · Modulo: «Perché studi l\'italiano? Per il mio …» (trabajo)', ['lavoro', 'Lavoro'], 'il lavoro = el trabajo.'),
        libre("Prova 2 · Sei in vacanza a Napoli. Scrivi una cartolina a un amico italiano: parla del tempo, dell'albergo e di che cosa fai. (circa 30 parole)",
          "Ciao Pietro!\nSono a Napoli con mia sorella. Fa caldo e c'è il sole. Il nostro albergo è piccolo ma carino, vicino al mare. La mattina andiamo in spiaggia e la sera mangiamo la pizza. A presto!\nMarta",
          'Responde a los tres puntos (tiempo, hotel, actividades), con saludo y despedida.')] },
      { k: 'orale', n: 'Produzione orale', d: 'Prova 1: preséntate. Prova 2: diálogo con el examinador en una situación cotidiana. Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Prova 1 · Presentati: come ti chiami, quanti anni hai, di dove sei, dove abiti, che lavoro fai, che cosa ti piace fare nel tempo libero.",
          "Buongiorno! Mi chiamo Marta Ruiz. Ho trentadue anni e sono spagnola. Abito a Valencia, una grande città sul mare. Sono sposata e ho un figlio di cinque anni. Lavoro in banca. Nel tempo libero mi piace andare in bicicletta, leggere e andare al cinema con gli amici.",
          'Frases cortas y completas. Si no entiendes: «Può ripetere, per favore?»'),
        oral("Prova 2 · Sei al mercato. Compri frutta e verdura per una cena. Chiedi i prezzi e paghi. L'esaminatore è il venditore.",
          "Buongiorno! — Vorrei un chilo di pomodori, per favore. — Quanto costano le mele? — Due euro al chilo? Va bene, ne prendo un chilo. — Avete le fragole? — Allora una vaschetta, per favore. — Quant'è? — Ecco dieci euro. — Grazie, buona giornata!",
          'Saluda, pide con «vorrei», pregunta precios con «quanto costa / quanto costano», paga y despídete.')] }] });

  EX.add('italiano', 'A2', { titulo: 'CILS A2', corto: 'Las cuatro pruebas del CILS A2: anuncios y conversaciones, correos y artículos, dos textos y diálogo.',
    desc: 'Sigue la estructura habitual del CILS A2 para adultos: escucha (3 pruebas), comprensión de lectura (3 pruebas), producción escrita (dos textos breves) y producción oral (presentación y diálogo). Para aprobar hace falta superar cada prueba por separado.',
    partes: [
      { k: 'ascolto', n: 'Ascolto', d: 'Prova 1: anuncios públicos y un mensaje. Prova 2: una noticia de radio. Prova 3: una conversación. En el examen cada texto se oye dos veces.',
        t: { A1: "Attenzione, prego. Il treno regionale 8452 per Bologna partirà con un ritardo di circa venticinque minuti dal binario tre. Ci scusiamo per il disagio.",
          A2: "Buongiorno signora Ferri, qui è lo studio del dottor Martini. Il suo appuntamento di giovedì alle quattordici è annullato perché il dottore è malato. Possiamo proporle venerdì alle dieci o lunedì alle sedici e trenta. La preghiamo di richiamarci entro mercoledì sera. Arrivederci.",
          N1: "E ora una buona notizia per chi va in bici: dal primo giugno il Comune di Padova mette a disposizione duecento biciclette elettriche in più. Il noleggio costa un euro per la prima mezz'ora. Chi ha l'abbonamento ai mezzi pubblici paga la metà. Le bici si trovano in quaranta stazioni, soprattutto vicino alle stazioni ferroviarie e all'università.",
          D1: "— Ciao Karim, hai l'aria stanca. — Sì, cerco casa da un mese, è un incubo. — Davvero? Che cosa non va nel tuo monolocale? — È troppo piccolo, e adesso che lavoro da casa mi serve uno studio. — In che zona cerchi? — Vicino al parco, se possibile. Ma gli affitti sono altissimi. — Mia cugina lascia il suo appartamento a luglio. Tre locali, ottocento euro. Vuoi il suo numero? — Sì, grazie mille, Lea!" },
        q: [
          oir(mc('A1', 'Prova 1 · Il treno parte…', ['in orario.', 'con 25 minuti di ritardo.', 'domani.'], 1, '«…con un ritardo di circa venticinque minuti».')),
          oir(mc('A1', 'Prova 1 · Il treno va a…', ['Bologna.', 'Milano.', 'Roma.'], 0, '«…per Bologna».')),
          oir(mc('A2', 'Prova 1 · Perché l\'appuntamento è annullato?', ['Il dottore è malato.', 'Lo studio è chiuso.', 'La signora è in vacanza.'], 0, '«…perché il dottore è malato».')),
          oir(mc('A2', 'Prova 1 · Quale nuovo appuntamento propongono?', ['Giovedì alle 14', 'Venerdì alle 10', 'Mercoledì alle 16:30'], 1, 'Viernes a las 10 o lunes a las 16:30.')),
          oir(mc('N1', 'Prova 2 · Da quando ci saranno più bici?', ['Dal 1° maggio', 'Dal 1° giugno', 'Dal 1° luglio'], 1, '«…dal primo giugno».')),
          oir(mc('N1', 'Prova 2 · Quanto costa la prima mezz\'ora?', ['Un euro', 'Due euro', 'È gratis.'], 0, '«…un euro per la prima mezz\'ora».')),
          oir(mc('N1', 'Prova 2 · Chi paga la metà?', ['Gli studenti', 'Chi ha l\'abbonamento ai mezzi', 'I turisti'], 1, '«Chi ha l\'abbonamento ai mezzi pubblici paga la metà.»')),
          oir(mc('N1', 'Prova 2 · Dove sono soprattutto le stazioni?', ['Vicino alle stazioni e all\'università', 'Nei parchi', 'Nei centri commerciali'], 0, '«…vicino alle stazioni ferroviarie e all\'università».')),
          oir(mc('D1', 'Prova 3 · Che cosa cerca Karim?', ['Un lavoro', 'Una casa', 'Uno studio medico'], 1, '«…cerco casa da un mese».')),
          oir(mc('D1', 'Prova 3 · Perché vuole cambiare casa?', ['Il monolocale è troppo piccolo.', 'L\'affitto è troppo caro.', 'Cambia città.'], 0, '«È troppo piccolo…»')),
          oir(mc('D1', 'Prova 3 · In che zona vorrebbe abitare?', ['Vicino alla stazione', 'Vicino al parco', 'In centro'], 1, '«Vicino al parco…»')),
          oir(mc('D1', 'Prova 3 · L\'appartamento della cugina costa…', ['600 euro.', '800 euro.', '1000 euro.'], 1, '«…ottocento euro».'))] },
      { k: 'lettura', n: 'Comprensione della lettura', d: 'Prova 1: elegir un anuncio según lo que busca una persona. Prova 2: un correo de trabajo. Prova 3: un artículo breve.',
        t: { E1: "Cerchi un'attività per tuo figlio di 10 anni, il mercoledì pomeriggio. Gli piacciono gli animali e la natura.\n\nA  Laboratorio di pittura – 8-12 anni – sabato dalle 10 alle 12.\nB  Club natura «Piccoli esploratori» – alla scoperta di uccelli e insetti nel bosco – mercoledì dalle 14 alle 17 – 9-13 anni.\nC  Corso di nuoto – mercoledì dalle 14 alle 15 – dai 6 anni.\nD  Fattoria didattica – visita e cura degli animali – domenica mattina – per tutta la famiglia.",
          E2: "Da: Sofia Marini\nA: Ufficio marketing\nOggetto: Riunione di giovedì\n\nBuongiorno a tutti,\nla riunione di giovedì prossimo si terrà nella sala 204 al secondo piano, e non nella sala solita, che è in ristrutturazione. Comincerà alle 9:30 invece che alle 9. Vi chiedo di portare le vostre idee per la campagna estiva. Sarà presente anche il direttore. Confermate la vostra presenza entro martedì.\nBuona giornata,\nSofia",
          E4: "UN ORTO SUL TETTO\nDa due anni gli abitanti di un palazzo del quartiere San Salvario, a Torino, coltivano verdure sul tetto del loro edificio. L'idea è di una pensionata, Rosa, 68 anni, che voleva «creare legami tra vicini». Oggi partecipano una trentina di persone. Ognuno viene quando vuole, ma tutti devono innaffiare almeno una volta alla settimana. Le verdure vengono divise tra i partecipanti. Il progetto ha avuto così tanto successo che il Comune vuole aiutare altri palazzi a fare lo stesso." },
        q: [
          mc('E1', 'Prova 1 · Quale attività scegli per tuo figlio?', ['Annuncio A', 'Annuncio B', 'Annuncio C', 'Annuncio D'], 1, 'Naturaleza, miércoles por la tarde, 9-13 años: B.'),
          mc('E2', 'Prova 2 · Perché la riunione cambia sala?', ['La sala solita è in ristrutturazione.', 'Ci sono più partecipanti.', 'Lo chiede il direttore.'], 0, '«…che è in ristrutturazione».'),
          mc('E2', 'Prova 2 · A che ora comincia la riunione?', ['Alle 9', 'Alle 9:30', 'Alle 10'], 1, '«…alle 9:30 invece che alle 9».'),
          mc('E2', 'Prova 2 · Che cosa bisogna portare?', ['Delle idee', 'Un computer', 'Il bilancio'], 0, '«…le vostre idee per la campagna estiva».'),
          mc('E2', 'Prova 2 · Che cosa bisogna fare entro martedì?', ['Confermare la presenza', 'Mandare un documento', 'Prenotare la sala'], 0, '«Confermate la vostra presenza entro martedì.»'),
          mc('E4', 'Prova 3 · Dov\'è l\'orto?', ['In un parco', 'Sul tetto di un palazzo', 'Davanti al Comune'], 1, '«…sul tetto del loro edificio».'),
          mc('E4', 'Prova 3 · Perché Rosa ha avuto questa idea?', ['Per guadagnare', 'Per creare legami tra vicini', 'Per spendere meno'], 1, '«…creare legami tra vicini».'),
          vf('E4', 'Prova 3 · Tutti devono venire ogni giorno.', false, 'Cada uno viene cuando quiere.'),
          vf('E4', 'Prova 3 · Le verdure si dividono tra i partecipanti.', true, '«Le verdure vengono divise tra i partecipanti.»'),
          vf('E4', 'Prova 3 · Il Comune vuole chiudere l\'orto.', false, 'Quiere ayudar a otros edificios a hacer lo mismo.')] },
      { k: 'scritta', n: 'Produzione scritta', d: 'Dos textos breves: contar una experiencia (unas 50 palabras) y responder a una invitación (unas 40 palabras). Se comparan con un modelo.', q: [
        libre("Prova 1 · Hai passato un fine settimana in una città che non conoscevi. Scrivi un'email a un amico italiano: dove sei andato, con chi, che cosa hai fatto e che cosa ti è piaciuto. (circa 50 parole)",
          "Ciao Giulio!\nIl fine settimana scorso sono andata a Bologna con due amiche. Sabato abbiamo visitato il centro storico e abbiamo mangiato le tagliatelle in una trattoria. Domenica faceva bel tempo, quindi siamo salite sulla torre degli Asinelli. Mi è piaciuta molto l'atmosfera della città. Tu ci sei mai stato?\nUn abbraccio,\nMarta",
          'Passato prossimo para los hechos e imperfetto para describir; responde a los cuatro puntos.'),
        libre("Prova 2 · La tua collega Chiara ti scrive: «Sabato sera faccio una festa per il mio nuovo lavoro. Vieni?». Rispondi: ringrazia, di' che non puoi, spiega perché e proponi un'altra data. (circa 40 parole)",
          "Ciao Chiara,\ngrazie mille per l'invito e congratulazioni per il nuovo lavoro! Purtroppo sabato non posso venire, perché arrivano i miei genitori dalla Spagna e devo andarli a prendere all'aeroporto. Mi dispiace! Possiamo pranzare insieme martedì?\nA presto,\nMarta",
          'Agradece, rechaza con una razón (perché…) y propón otra fecha.')] },
      { k: 'orale', n: 'Produzione orale', d: 'Prova 1: habla de ti y de un tema cotidiano. Prova 2: diálogo con el examinador. Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Prova 1 · Parla delle tue ultime vacanze: dove sei andato, che cosa hai fatto, che cosa ti è piaciuto e che cosa no.",
          "L'estate scorsa sono andata dieci giorni in Puglia con la mia famiglia. Abbiamo affittato una casetta vicino al mare. La mattina andavamo in spiaggia e il pomeriggio visitavamo i paesi della costa. Un giorno abbiamo preso la barca per vedere le grotte: era bellissimo. Mi sono piaciuti molto il cibo e i paesaggi. Invece faceva troppo caldo e c'era tanta gente. Ma vorrei tornarci.",
          'Ordena el relato (prima, poi, un giorno, alla fine) y mezcla passato prossimo e imperfetto.'),
        oral("Prova 2 · Sei in Italia e vuoi iscriverti a una palestra. Fai domande all'impiegato su attività, orari e prezzi, poi scegli. L'esaminatore è l'impiegato.",
          "Buongiorno, vorrei qualche informazione sulla palestra. — Che corsi avete? — C'è un corso di nuoto la sera? — A che ora? — E quanto costa l'abbonamento? — C'è uno sconto per un anno? — Va bene. Posso fare una lezione di prova? — Perfetto, mi iscrivo al corso di nuoto del martedì. Che cosa devo portare?",
          'Pregunta con formas variadas, reacciona y termina tomando una decisión.')] }] });
})();
