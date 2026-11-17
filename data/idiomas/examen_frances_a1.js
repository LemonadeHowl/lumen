// Modelo de examen de francés A1 con la estructura del DELF A1 «tout public» (France Éducation international):
//   Compréhension de l'oral (20 min, 4 exercices) · Compréhension des écrits (30 min, 4 exercices)
//   Production écrite (30 min, 2 exercices: formulaire + message de 40 mots minimum)
//   Production orale (5 à 7 min, préparation 10 min: entretien dirigé, échange d'informations, dialogue simulé)
// Cada prueba se puntúa sobre 25; se aprueba con 50/100 y un mínimo de 5/25 por prueba. Textos y preguntas propios de Lumen.
(function () {
  const { mc, oir, libre, oral } = EX;
  const vf = (tx, q, ok, e) => ({ t: 'mc', tx, q, o: ['Vrai', 'Faux'], r: ok ? 0 : 1, e });
  const campo = (q, a, e) => ({ t: 'in', q, a, e });
  EX.add('frances', 'A1', { titulo: 'DELF A1', corto: 'Las cuatro pruebas del DELF A1: mensajes, anuncios, formulario y conversación.',
    desc: 'Reproduce la estructura del DELF A1 «tout public»: comprensión oral (4 ejercicios, 20 minutos), comprensión escrita (4 ejercicios, 30 minutos), producción escrita (formulario y mensaje de 40 palabras) y producción oral (entrevista, intercambio de información y diálogo simulado). Cada prueba vale 25 puntos; se aprueba con 50 sobre 100 y al menos 5 en cada prueba.',
    partes: [
      { k: 'oral', n: "Compréhension de l'oral", d: 'Ejercicio 1: mensaje de contestador. Ejercicio 2: anuncio público. Ejercicio 3: un mensaje de un amigo. Ejercicio 4: cuatro situaciones breves. En el examen cada documento se oye dos veces.',
        t: { M1: "Bonjour, c'est Julie. Je suis au café de la gare avec Thomas. On va au cinéma ce soir, à vingt heures trente. Le film est au cinéma Lumière, rue Victor Hugo. Tu viens avec nous ? Rappelle-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit. À tout à l'heure !",
          M2: "Mesdames et messieurs, bienvenue au supermarché Bonprix. Aujourd'hui, au rayon fruits et légumes, les pommes sont à deux euros le kilo. Attention : le magasin ferme exceptionnellement à dix-huit heures ce samedi. Merci et bonnes courses !",
          M3: "Salut Paul, c'est Inès. Samedi, c'est l'anniversaire de ma sœur. On fait une petite fête chez moi à dix-neuf heures. Tu peux apporter des boissons ? Moi, je prépare le gâteau. Mon adresse : douze, rue des Lilas, au troisième étage.",
          S1: "Pardon, madame, la poste, s'il vous plaît ? — C'est tout droit, puis la deuxième rue à gauche.",
          S2: "Bonjour, je voudrais deux croissants et une baguette, s'il vous plaît. — Voilà, ça fait trois euros dix.",
          S3: "Docteur, j'ai mal à la tête et j'ai de la fièvre depuis hier. — Ouvrez la bouche, s'il vous plaît.",
          S4: "Un aller simple pour Lyon, s'il vous plaît. — En première ou en seconde classe ?" },
        q: [
          oir(mc('M1', 'Exercice 1 · Où est Julie ?', ['Au cinéma', 'Au café de la gare', 'Chez elle'], 1, '«Je suis au café de la gare avec Thomas.»')),
          oir(mc('M1', 'Exercice 1 · À quelle heure est le film ?', ['À 20 h', 'À 20 h 30', 'À 21 h 30'], 1, '«…à vingt heures trente.»')),
          oir(mc('M1', 'Exercice 1 · Le cinéma est…', ['rue Victor Hugo.', 'à côté de la gare.', 'place de la Mairie.'], 0, '«…cinéma Lumière, rue Victor Hugo.»')),
          oir(mc('M1', 'Exercice 1 · Qu\'est-ce que Julie demande ?', ['De la rappeler', 'D\'acheter les billets', 'D\'arriver à 20 h'], 0, '«Rappelle-moi…»')),
          oir(mc('M2', 'Exercice 2 · Où est-on ?', ['Dans une gare', 'Dans un supermarché', 'Dans un restaurant'], 1, '«…bienvenue au supermarché Bonprix.»')),
          oir(mc('M2', 'Exercice 2 · Combien coûtent les pommes ?', ['1 € le kilo', '2 € le kilo', '3 € le kilo'], 1, '«…les pommes sont à deux euros le kilo.»')),
          oir(mc('M2', 'Exercice 2 · Samedi, le magasin ferme à…', ['16 heures.', '18 heures.', '20 heures.'], 1, '«…ferme exceptionnellement à dix-huit heures ce samedi.»')),
          oir(mc('M3', 'Exercice 3 · Pourquoi Inès organise-t-elle une fête ?', ['Pour son anniversaire', 'Pour l\'anniversaire de sa sœur', 'Pour un mariage'], 1, '«…c\'est l\'anniversaire de ma sœur.»')),
          oir(mc('M3', 'Exercice 3 · Qu\'est-ce que Paul doit apporter ?', ['Un gâteau', 'Des boissons', 'Un cadeau'], 1, '«Tu peux apporter des boissons ?»')),
          oir(mc('M3', 'Exercice 3 · Inès habite…', ['au premier étage.', 'au deuxième étage.', 'au troisième étage.'], 2, '«…au troisième étage.»')),
          oir(mc('S1', 'Exercice 4 · Situation 1 : la personne…', ['demande son chemin.', 'achète un timbre.', 'prend le bus.'], 0, 'Pregunta cómo llegar a correos.')),
          oir(mc('S2', 'Exercice 4 · Situation 2 : on est…', ['dans une boulangerie.', 'dans une pharmacie.', 'dans une banque.'], 0, 'Croissants y baguette: panadería.')),
          oir(mc('S3', 'Exercice 4 · Situation 3 : on est…', ['chez le médecin.', 'à l\'école.', 'au restaurant.'], 0, '«Docteur, j\'ai mal à la tête…»')),
          oir(mc('S4', 'Exercice 4 · Situation 4 : la personne achète…', ['un billet de train.', 'un billet de cinéma.', 'un livre.'], 0, '«Un aller simple pour Lyon.»'))] },
      { k: 'ecrits', n: 'Compréhension des écrits', d: 'Ejercicio 1: un correo de un amigo. Ejercicio 2: un cartel. Ejercicio 3: un programa de actividades. Ejercicio 4: un anuncio.',
        t: { C1: "De : Lucas\nÀ : Marta\nObjet : Ce week-end\n\nSalut Marta !\nCe week-end, je vais à la mer avec ma famille. On part vendredi soir en voiture et on rentre dimanche. Mon chien vient aussi ! Est-ce que tu peux arroser mes plantes samedi ? La clé est chez ma voisine, madame Petit, au premier étage.\nMerci beaucoup et à lundi !\nLucas",
          C2: "BIBLIOTHÈQUE MUNICIPALE\n\nHoraires d'ouverture\nMardi, jeudi, vendredi : 10 h – 18 h\nMercredi et samedi : 9 h – 12 h\nFermée le lundi et le dimanche\n\nVous pouvez emprunter 5 livres pendant 3 semaines.\nL'inscription est gratuite pour les moins de 18 ans.\nInterdit de manger et de boire dans les salles.",
          C3: "CENTRE SPORTIF « LA FORME »\nProgramme de la semaine\n\nLundi 18 h : yoga (salle 2)\nMercredi 12 h 30 : natation (piscine)\nJeudi 19 h : danse (salle 1)\nSamedi 10 h : randonnée (rendez-vous devant le centre)\n\nPrix : 8 € la séance – 60 € les 10 séances\nRéservation à l'accueil ou au 04 72 15 33 80",
          C4: "À LOUER\nAppartement de 2 pièces, 45 m², au centre-ville.\nCuisine équipée, grand balcon, 2e étage avec ascenseur.\nProche du métro et des commerces.\nLoyer : 650 € par mois, charges comprises.\nLibre le 1er septembre.\nAnimaux interdits.\nContact : M. Bernard – 06 45 78 12 90 (après 17 h)" },
        q: [
          mc('C1', 'Exercice 1 · Où va Lucas ce week-end ?', ['À la montagne', 'À la mer', 'À Paris'], 1, '«…je vais à la mer avec ma famille.»'),
          mc('C1', 'Exercice 1 · Comment voyage-t-il ?', ['En train', 'En voiture', 'En avion'], 1, '«On part vendredi soir en voiture…»'),
          mc('C1', 'Exercice 1 · Qu\'est-ce que Marta doit faire ?', ['Arroser les plantes', 'Garder le chien', 'Faire les courses'], 0, '«…arroser mes plantes samedi ?»'),
          mc('C1', 'Exercice 1 · Où est la clé ?', ['Chez la voisine', 'Sous la porte', 'Dans la voiture'], 0, '«La clé est chez ma voisine…»'),
          vf('C2', 'Exercice 2 · La bibliothèque est ouverte le lundi.', false, '«Fermée le lundi et le dimanche».'),
          vf('C2', 'Exercice 2 · Le samedi, on peut y aller le matin.', true, 'Samedi : 9 h – 12 h.'),
          vf('C2', 'Exercice 2 · On peut emprunter cinq livres.', true, '«Vous pouvez emprunter 5 livres…»'),
          vf('C2', 'Exercice 2 · On peut boire un café dans les salles.', false, '«Interdit de manger et de boire…»'),
          mc('C3', 'Exercice 3 · Quel jour y a-t-il de la danse ?', ['Lundi', 'Jeudi', 'Samedi'], 1, 'Jeudi 19 h : danse.'),
          mc('C3', 'Exercice 3 · Pour la randonnée, on a rendez-vous…', ['à la piscine.', 'devant le centre.', 'dans la salle 2.'], 1, '«…rendez-vous devant le centre».'),
          mc('C3', 'Exercice 3 · Combien coûte une séance ?', ['8 €', '10 €', '60 €'], 0, '«8 € la séance».'),
          mc('C4', 'Exercice 4 · L\'appartement a…', ['un jardin.', 'un balcon.', 'un garage.'], 1, '«…grand balcon».'),
          mc('C4', 'Exercice 4 · Le loyer est de…', ['450 € par mois.', '650 € par mois.', '45 € par mois.'], 1, '«Loyer : 650 € par mois».'),
          mc('C4', 'Exercice 4 · Quand l\'appartement est-il libre ?', ['Le 1er septembre', 'Tout de suite', 'Le 1er juillet'], 0, '«Libre le 1er septembre.»'),
          mc('C4', 'Exercice 4 · On peut appeler M. Bernard…', ['le matin.', 'après 17 h.', 'le week-end seulement.'], 1, '«…(après 17 h)».')] },
      { k: 'production', n: 'Production écrite', d: 'Ejercicio 1: rellenar un formulario de inscripción. Ejercicio 2: escribir un mensaje de al menos 40 palabras. El formulario se corrige; el mensaje se compara con un modelo.', q: [
        campo('Exercice 1 · Vous vous inscrivez à un cours de français à Lyon. Formulaire : « Nationalité : … » (escribe tu nacionalidad en francés, por ejemplo «espagnole»)', ['espagnole', 'espagnol', 'Espagnole', 'Espagnol'], 'En femenino «espagnole», en masculino «espagnol».'),
        campo('Exercice 1 · Formulaire : « Langue maternelle : … » (el español)', ['espagnol', "l'espagnol", 'Espagnol'], 'Los nombres de idioma van en minúscula: espagnol.'),
        campo('Exercice 1 · Formulaire : « Jours préférés : lundi et … » (miércoles)', ['mercredi', 'Mercredi'], 'mercredi = miércoles.'),
        campo('Exercice 1 · Formulaire : « Pourquoi apprenez-vous le français ? Pour mon … » (trabajo)', ['travail', 'Travail'], 'le travail = el trabajo.'),
        libre("Exercice 2 · Vous êtes en vacances à Nice. Vous écrivez une carte postale à un ami français. Vous parlez du temps, de l'hôtel et de vos activités. (40 mots minimum)",
          "Salut Pierre !\nJe suis à Nice avec ma sœur. Il fait très beau et chaud. Notre hôtel est petit mais joli, à côté de la plage. Le matin, nous nageons dans la mer et l'après-midi, nous visitons la vieille ville. Le soir, nous mangeons au restaurant.\nÀ bientôt !\nMarta",
          'Se valora que respondas a los tres puntos (tiempo, hotel, actividades), que saludes y te despidas y que llegues a 40 palabras.')] },
      { k: 'orale', n: 'Production orale', d: 'Partie 1: entrevista dirigida sobre ti. Partie 2: intercambio de información a partir de palabras clave. Partie 3: diálogo simulado (una compra). Dilo en voz alta y compáralo con el modelo.', q: [
        oral("Partie 1 · Entretien dirigé (1 minute environ). L'examinateur vous pose des questions sur vous : votre nom, votre âge, votre pays, votre ville, votre famille, votre métier, vos loisirs. Présentez-vous.",
          "Bonjour ! Je m'appelle Marta Ruiz. J'ai trente-deux ans et je suis espagnole. J'habite à Valence, une grande ville au bord de la mer. Je suis mariée et j'ai un fils de cinq ans. Je travaille dans une banque. Le week-end, j'aime faire du vélo, lire et aller au cinéma avec mes amis.",
          'Frases cortas y completas. Si no entiendes una pregunta: «Pouvez-vous répéter, s\'il vous plaît ?»'),
        oral("Partie 2 · Échange d'informations (2 minutes environ). Vous tirez des cartes avec un mot et vous posez une question à l'examinateur avec chaque mot : « Sport ? » « Week-end ? » « Cuisine ? » « Vacances ? » « Animal ? » « Musique ? »",
          "Vous faites du sport ? — Qu'est-ce que vous faites le week-end ? — Vous aimez faire la cuisine ? — Où allez-vous en vacances cet été ? — Vous avez un animal ? — Quelle musique est-ce que vous écoutez ?",
          'Una pregunta por palabra, con «vous». Varía las formas: est-ce que, qu\'est-ce que, où, quel/quelle.'),
        oral("Partie 3 · Dialogue simulé (2 minutes environ). Vous êtes dans un marché. Vous achetez des fruits et des légumes pour un repas. Vous demandez les prix et vous payez. L'examinateur est le vendeur.",
          "Bonjour monsieur ! — Je voudrais un kilo de tomates, s'il vous plaît. — Combien coûtent les pommes ? — Deux euros le kilo ? D'accord, j'en prends un kilo. — Vous avez des fraises ? — Alors une barquette, s'il vous plaît. — Ça fait combien ? — Voilà dix euros. — Merci, bonne journée !",
          'Saluda, pide con «je voudrais», pregunta precios con «combien», paga y despídete.')] }] });
})();
