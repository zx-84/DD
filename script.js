const storageKeys = {
  notes: "dd-gm-notes",
  checklist: "dd-checklist",
  resources: "dd-resources",
  journal: "dd-journal",
  slots: "dd-spell-slots",
  players: "dd-players"
};

const oracleEntries = [
  {
    title: "Debut de l’aventure",
    category: "adventure",
    prompts: ["debut aventure", "embuscade", "sentier triboar"],
    answer: "L’ouverture fonctionne mieux si l’embuscade gobeline donne tout de suite un double objectif : survivre puis comprendre ce qui est arrive a Gundren et Sildar.",
    tags: ["ouverture", "rythme", "embuscade"]
  },
  {
    title: "Phandaline",
    category: "adventure",
    prompts: ["phandaline", "ville", "quetes"],
    answer: "Traitez Phandaline comme une plaque tournante vivante. Chaque retour en ville doit faire apparaitre un changement : un PNJ inquiet, une rumeur nouvelle ou une consequence des actions du groupe.",
    tags: ["hub", "quete", "consequences"]
  },
  {
    title: "Glasstaff",
    category: "npcs",
    prompts: ["glasstaff", "iarno", "mantelets rouges"],
    answer: "Glasstaff est Iarno Albrek. Pour renforcer son impact, semez des signes de sa presence avant la confrontation : gardes nerveux, bureau abandonne a la hate, temoins contradictoires.",
    tags: ["PNJ", "antagoniste", "foreshadowing"]
  },
  {
    title: "Sildar Halliver",
    category: "npcs",
    prompts: ["sildar", "halliver", "alliance"],
    answer: "Sildar est un ancrage fiable. Il sert a orienter les joueurs vers Phandaline, a legitimer certaines quetes et a donner un ton chevaleresque a la campagne.",
    tags: ["allie", "mise en route"]
  },
  {
    title: "Nezznar",
    category: "npcs",
    prompts: ["nezznar", "araignee noire", "black spider"],
    answer: "Nezznar gagne en presence s’il agit a distance avant le final : eclaireurs silencieux, lettres interceptees, traces de magie ou temoignages de survivants terrifies.",
    tags: ["final", "pression", "manipulation"]
  },
  {
    title: "Conseil MJ : groupe bloque",
    category: "gm",
    prompts: ["bloque", "puzzle", "indice", "aide"],
    answer: "Si le groupe bloque, donnez un indice sensoriel plutot qu’une solution brute : odeur de fumee, courant d’air, traces de bottes, bruit de mecanisme. Cela preserve la sensation de decouverte.",
    tags: ["indice", "impro", "fluidite"]
  },
  {
    title: "Conseil MJ : repaire des Cragmaw",
    category: "gm",
    prompts: ["cragmaw", "repaire", "gobelins"],
    answer: "Le repaire des Cragmaw devient memorable si vous insistez sur l’eau, le bruit et les angles d’attaque. Les gobelins sont laches mais opportunistes ; ils doivent user du terrain.",
    tags: ["combat", "terrain", "tension"]
  },
  {
    title: "Regle : avantage",
    category: "rules",
    prompts: ["avantage", "desavantage", "regle"],
    answer: "Avec avantage, lancez deux d20 et gardez le meilleur. Avec desavantage, gardez le pire. Une source de chaque s’annule simplement.",
    tags: ["d20", "regles"]
  },
  {
    title: "Regle : repos",
    category: "rules",
    prompts: ["repos", "repos court", "repos long"],
    answer: "Un repos court sert a souffler et recuperer un peu de ressources. Un repos long remet la table en etat pour repartir : points de vie, emplacements de sorts et rythme dramatique.",
    tags: ["ressources", "survie"]
  },
  {
    title: "Magicien niveau 1",
    category: "players",
    prompts: ["magicien", "sorts", "niveau 1"],
    answer: "Pour un magicien debutant, privilegiez Bouclier, Armure de mage, Sommeil, Missile magique et Detection de la magie. Vous couvrez ainsi defense, controle, degats fiables et exploration.",
    tags: ["build", "sorts"]
  },
  {
    title: "Monstres de la mine",
    category: "monsters",
    prompts: ["monstres", "mine", "spectateur", "morts-vivants"],
    answer: "Les monstres de la campagne fonctionnent mieux si chacun a une signature claire : gobelins en harcelement, bugbear en choc brutal, morts-vivants en pression lente, spectateur en scene etrange et memorables.",
    tags: ["bestiaire", "mise en scene"]
  }
];

const checklistSections = [
  {
    title: "Quetes",
    items: [
      "Escorter le chariot jusqu’a Phandaline",
      "Retrouver Gundren Cherchepierre",
      "Sauver Sildar Halliver",
      "Identifier les Mantelets Rouges",
      "Trouver l’acces a la mine"
    ]
  },
  {
    title: "Lieux visites",
    items: [
      "Sentier de la Triboar",
      "Repaire des Cragmaw",
      "Phandaline",
      "Manoir de Tresendar",
      "Chateau Cragmaw",
      "Caverne de la Vague d’Echo"
    ]
  },
  {
    title: "PNJ rencontres",
    items: [
      "Sildar Halliver",
      "Toblen Stonehill",
      "Soeur Garaele",
      "Halia Thornton",
      "Reidoth",
      "Gundren Cherchepierre"
    ]
  },
  {
    title: "Tresors et indices",
    items: [
      "Carte ou piste vers la mine",
      "Preuve contre Glasstaff",
      "Recompense de Phandaline",
      "Objet magique notable",
      "Information sur l’Araignee Noire"
    ]
  },
  {
    title: "Combats",
    items: [
      "Embuscade gobeline",
      "Loups du repaire",
      "Mantelets Rouges",
      "Monstres du chateau",
      "Confrontation finale"
    ]
  },
  {
    title: "Decisions marquantes",
    items: [
      "Alliance avec un PNJ local",
      "Ennemi laisse en fuite",
      "Repos pris dans une zone risquee",
      "Choix moral difficile",
      "Secret du groupe revele"
    ]
  }
];

const spells = [
  { name: "Armure de mage", level: 1, school: "Abjuration", use: "Augmente la survie du magicien avant les affrontements." },
  { name: "Bouclier", level: 1, school: "Abjuration", use: "Reaction defensive tres puissante sur une attaque cle." },
  { name: "Detection de la magie", level: 1, school: "Divination", use: "Excellent pour fouiller reliques, runes et passages suspects." },
  { name: "Missile magique", level: 1, school: "Evocation", use: "Degats garantis si vous devez finir une cible." },
  { name: "Sommeil", level: 1, school: "Enchantement", use: "Controle fort contre petits ennemis ou gardes." },
  { name: "Mains brulantes", level: 1, school: "Evocation", use: "Tres efficace dans les couloirs et embouteillages tactiques." },
  { name: "Deguisement", level: 1, school: "Illusion", use: "Outil social et d’infiltration dans Phandaline ou le chateau." },
  { name: "Image silencieuse", level: 1, school: "Illusion", use: "Ideal pour diversion, leurre ou intimidation visuelle." },
  { name: "Charme-personne", level: 1, school: "Enchantement", use: "Utile pour des scenes sociales ou gagner du temps face a un humanoide." },
  { name: "Compréhension des langues", level: 1, school: "Divination", use: "Aide a dechiffrer inscriptions, journaux et indices anciens." },
  { name: "Graisse", level: 1, school: "Invocation", use: "Controle de terrain simple mais tres efficace dans les couloirs." },
  { name: "Projectile ensorcele", level: 1, school: "Transmutation", use: "Renforce l’arme d’un allie quand le groupe manque de magie offensive." },
  { name: "Serviteur invisible", level: 1, school: "Invocation", use: "Pratique pour les objets dangereux, leviers et petites manipulations a distance." },
  { name: "Onde tonnante", level: 1, school: "Evocation", use: "Repousse les ennemis proches et cree un moment spectaculaire." },
  { name: "Verrou magique", level: 2, school: "Abjuration", use: "Permet de securiser une porte, un coffre ou un point de repos fragile." },
  { name: "Toile d’araignee", level: 2, school: "Invocation", use: "Controle de zone majeur dans les galeries ou ruines." },
  { name: "Invisibilite", level: 2, school: "Illusion", use: "Reconnaissance, fuite ou approche tactique." },
  { name: "Rayon ardent", level: 2, school: "Evocation", use: "Frappe lourde sur cible prioritaire." },
  { name: "Pas brumeux", level: 2, school: "Invocation", use: "Excellent bouton de secours pour se repositionner ou fuir un encerclement." },
  { name: "Suggestion", level: 2, school: "Enchantement", use: "Tres puissant pour des scenes sociales si la formulation reste credible." },
  { name: "Vision dans le noir", level: 2, school: "Transmutation", use: "Utile si le groupe explore des tunnels avec peu de lumiere." },
  { name: "Boule de feu", level: 3, school: "Evocation", use: "Degats de masse devastateurs si votre campagne monte de niveau." },
  { name: "Contresort", level: 3, school: "Abjuration", use: "Indispensable face a un lanceur de sorts adverse important." },
  { name: "Hate", level: 3, school: "Transmutation", use: "Transforme un combattant du groupe en machine offensive pendant une scene cle." },
  { name: "Vol", level: 3, school: "Transmutation", use: "Contourne obstacles, ponts dangereux et differences de hauteur." }
];

const monsters = [
  { name: "Gobelin", role: "Harceleur", trait: "Mobilite, pieges, tirs a couvert.", tip: "Ne reste pas au corps-a-corps s’il peut fuir et sonner l’alarme." },
  { name: "Bugbear", role: "Brute", trait: "Frappe dure, intimidation, attaque surprise.", tip: "Ouvre idealement un combat ou protege un chef." },
  { name: "Loup", role: "Poursuite", trait: "Pression de meute et renversement.", tip: "Utilisez-le pour separer un personnage du groupe." },
  { name: "Mantelet Rouge", role: "Humanoide violent", trait: "Menaces, embuscades, controle local.", tip: "Montrez leur assurance en ville avant le combat." },
  { name: "Doppelganger", role: "Manipulateur", trait: "Usurpation, infiltration, confusion.", tip: "Parfait pour casser la confiance dans une scene sociale." },
  { name: "Spectateur", role: "Gardien etrange", trait: "Rayons magiques et dialogue bizarre.", tip: "Faites-en une rencontre memorable, pas juste un sac a PV." },
  { name: "Squelette", role: "Pression lente", trait: "Endurance correcte et ambiance de ruine.", tip: "Fonctionne bien en vagues ou en gardes silencieux." },
  { name: "Zombie", role: "Pression lourde", trait: "Lent mais tenace, il absorbe bien les coups.", tip: "Servez-vous-en pour epuiser les ressources avant une menace plus intelligente." },
  { name: "Hobgobelin", role: "Soldat", trait: "Discipline, armure correcte et attaque coordonnee.", tip: "Beaucoup plus dangereux que des gobelins si vous le jouez en formation." },
  { name: "Araignee geante", role: "Controleur", trait: "Toile, poison, escalade des murs.", tip: "Utilisez la verticalite et l’obscurite pour la rendre inquietante." },
  { name: "Ogre", role: "Masse de degats", trait: "Peu subtil mais capable d’abattre un personnage fragile en peu de temps.", tip: "Ideal comme choc brutal dans une rencontre ouverte." },
  { name: "Nothic", role: "Aberration curieuse", trait: "Lecture de pensees, secretions malsaines et savoir derangeant.", tip: "Faites-lui reveler un secret ou une peur d’un personnage pour une vraie scene de roleplay." },
  { name: "Goule", role: "Predateur", trait: "Paralysie et agressivite dans les espaces clos.", tip: "Rend les cryptes et tunnels bien plus dangereux qu’un simple mort-vivant lent." },
  { name: "Orc", role: "Assaillant", trait: "Charge brutale, agressivite immediate.", tip: "Excellents pour casser un plan trop statique du groupe." },
  { name: "Jeune dragon vert", role: "Predateur majeur", trait: "Souffle toxique, intimidation et domination de territoire.", tip: "Meme sans combat frontal, sa presence doit suffire a changer le comportement du groupe." },
  { name: "Blight", role: "Corruption vegetale", trait: "Attaque en groupe, ambiance malsaine et progression rampante.", tip: "Utile pour donner a la nature un aspect hostile et surnaturel." },
  { name: "Gelatine cubique", role: "Piege vivant", trait: "Presque invisible, engloutit les imprudents.", tip: "Parfaite dans un couloir si vous voulez une rencontre memorable et differente." },
  { name: "Nezznar", role: "Boss", trait: "Manipulation, magie et araignees.", tip: "Rendez sa scene finale theatrale avec terrain et serviteurs." }
];

const mapData = {
  phandaline: {
    title: "Phandaline",
    image: "assets/phandaline.svg",
    description: "Le coeur social de l’aventure. C’est ici que se croisent quetes, achats, alliances et menaces plus discretes.",
    points: [
      { name: "Auberge Stonehill", x: 26, y: 34, description: "Le meilleur point d’ancrage pour les rumeurs, les rencontres et les debriefs de fin de journee." },
      { name: "Hotel de ville", x: 47, y: 69, description: "Harbin Wester peut lancer ou compliquer des quetes. Bon lieu pour montrer l’etat politique local." },
      { name: "Sanctuaire", x: 56, y: 34, description: "Soeur Garaele y relie la campagne a un ton plus spirituel et mysterieux." },
      { name: "Comptoir minier", x: 75, y: 64, description: "Bon point pour les recompenses, tensions economiques et manigances de Halia Thornton." }
    ]
  },
  cragmaw: {
    title: "Repaire des Cragmaw",
    image: "assets/cragmaw.svg",
    description: "Un lieu sale, humide et piege ou le terrain compte autant que les ennemis. La circulation de l’eau doit influencer les choix des joueurs.",
    points: [
      { name: "Entree", x: 19, y: 27, description: "Zone ideale pour les sentinelles et la tension avant l’infiltration." },
      { name: "Chenil", x: 25, y: 79, description: "Le bruit des loups peut avertir tout le repaire si les joueurs agissent brutalement." },
      { name: "Barrage", x: 58, y: 55, description: "Element de decor cle pour modifier la scene et punir une approche trop frontale." },
      { name: "Captifs", x: 81, y: 49, description: "Le lieu ou une decision rapide peut compter plus qu’un combat parfait." }
    ]
  },
  mine: {
    title: "Mine oubliee",
    image: "assets/mine.svg",
    description: "Le decor final. Faites sentir l’antiquite du lieu, la magie residuelle et la proximite d’un pouvoir convoite depuis longtemps.",
    points: [
      { name: "Entree", x: 20, y: 27, description: "Commencez avec des echos, de la poussiere et des indices de passages recents." },
      { name: "Crypte", x: 28, y: 58, description: "Parfaite pour les morts-vivants, les murmures et les secrets enfouis." },
      { name: "Forge des Sorts", x: 58, y: 57, description: "Le coeur symbolique du site. Faites-la sentir puissante avant meme qu’elle serve." },
      { name: "Salle finale", x: 83, y: 60, description: "Terrain, hauteur et serviteurs doivent rendre la confrontation finale dynamique." }
    ]
  }
};

const boostIdeas = [
  "Reliez immediatement la scene actuelle a l’objectif personnel d’un personnage.",
  "Montrez une consequence forte d’un choix passe.",
  "Faites entrer un PNJ essouffle avec une urgence claire.",
  "Introduisez une offre tentante mais dangereuse.",
  "Revelez qu’un ennemi a pris de l’avance pendant leur hesitation."
];

const helpIdeas = [
  "Donnez un indice visuel, sonore ou olfactif au lieu d’une explication directe.",
  "Laissez un PNJ reformuler le probleme sans en livrer la solution.",
  "Proposez une reussite partielle avec cout narratif.",
  "Transformez le puzzle en plusieurs approches valides.",
  "Autorisez une idee inattendue meme si elle contourne votre plan initial."
];

const eventTables = {
  types: ["Embuscade", "Rumeur", "Mystere", "Rencontre sociale", "Danger naturel", "Signe surnaturel", "Survivant en fuite"],
  triggers: ["Sur la route de Triboar", "En sortant de Phandaline", "Au repos pres d’un feu", "En fouillant des ruines", "Apres un combat bruyant", "Dans un tunnel humide"],
  scenes: [
    "Un temoin surgit et affirme avoir vu un symbole de l’Araignee Noire.",
    "Des traces contradictoires menent soit vers un piege, soit vers un raccourci precieux.",
    "Un petit groupe arme demande de l’aide mais cache un detail important.",
    "Un bruit venu des profondeurs interrompt la progression et force une decision rapide.",
    "Un objet ancien emet une faible lueur au moment ou quelqu’un le touche.",
    "Une patrouille ennemie cherche quelque chose que les joueurs possedent deja sans le savoir."
  ],
  twists: [
    "Le danger principal n’est pas l’ennemi visible mais l’environnement.",
    "Le PNJ implique ment sur son identite ou ses intentions.",
    "Le groupe attire l’attention d’un adversaire plus important.",
    "La scene offre une piste utile mais seulement si les joueurs prennent un risque.",
    "Une faction locale profite du chaos pour regler un autre compte."
  ],
  rewards: [
    "Indice vers Gundren ou la mine.",
    "Objet consommable ou potion.",
    "Nouvelle alliance potentielle.",
    "Raccourci vers un prochain lieu.",
    "Information sur Glasstaff ou Nezznar.",
    "Petit tresor et nouvelle complication."
  ]
};

const defaultResources = [
  { name: "Potions / consommables", value: 2, step: 1 },
  { name: "Rations restantes", value: 8, step: 1 },
  { name: "Torches / lumiere", value: 6, step: 1 },
  { name: "Munitions critiques", value: 12, step: 1 }
];

const defaultSlots = [
  { level: 1, max: 3, current: 3 },
  { level: 2, max: 2, current: 2 },
  { level: 3, max: 0, current: 0 }
];

const defaultPlayers = [
  { name: "Joueur 1", hp: 14, maxHp: 14 },
  { name: "Joueur 2", hp: 8, maxHp: 8 },
  { name: "Joueur 3", hp: 10, maxHp: 10 }
];

const dom = {
  aiChat: document.getElementById("ai-chat"),
  aiForm: document.getElementById("ai-form"),
  aiInput: document.getElementById("ai-input"),
  oracleCategory: document.getElementById("oracle-category"),
  oracleSuggestions: document.getElementById("oracle-suggestions"),
  oracleTitle: document.getElementById("oracle-title"),
  oracleAnswer: document.getElementById("oracle-answer"),
  oracleTags: document.getElementById("oracle-tags"),
  checklistGrid: document.getElementById("checklist-grid"),
  gmNotes: document.getElementById("gm-notes"),
  notesStatus: document.getElementById("notes-status"),
  spellList: document.getElementById("spell-list"),
  spellSearch: document.getElementById("spell-search"),
  slotBoard: document.getElementById("slot-board"),
  boostIdeas: document.getElementById("boost-ideas"),
  helpIdeas: document.getElementById("help-ideas"),
  resourceList: document.getElementById("resource-list"),
  journalForm: document.getElementById("journal-form"),
  journalTitle: document.getElementById("journal-title"),
  journalEntry: document.getElementById("journal-entry"),
  journalList: document.getElementById("journal-list"),
  playerNameEditor: document.getElementById("player-name-editor"),
  playerHealthList: document.getElementById("player-health-list"),
  monsterList: document.getElementById("monster-list"),
  monsterSearch: document.getElementById("monster-search"),
  mapFocusImage: document.getElementById("map-focus-image"),
  mapFocusTitle: document.getElementById("map-focus-title"),
  mapFocusDescription: document.getElementById("map-focus-description"),
  mapPoints: document.getElementById("map-points"),
  mapHotspots: document.getElementById("map-hotspots"),
  mapPointTitle: document.getElementById("map-point-title"),
  mapPointDescription: document.getElementById("map-point-description"),
  eventType: document.getElementById("event-type"),
  eventTrigger: document.getElementById("event-trigger"),
  eventScene: document.getElementById("event-scene"),
  eventTwist: document.getElementById("event-twist"),
  eventReward: document.getElementById("event-reward")
};

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setNotesStatus(text) {
  dom.notesStatus.textContent = text;
}

function renderOracleSuggestions() {
  const category = dom.oracleCategory.value;
  dom.oracleSuggestions.innerHTML = "";

  oracleEntries
    .filter((entry) => category === "all" || entry.category === category)
    .slice(0, 6)
    .forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip-button";
      button.textContent = entry.title;
      button.addEventListener("click", () => {
        dom.aiInput.value = entry.prompts[0];
        dom.aiForm.requestSubmit();
      });
      dom.oracleSuggestions.appendChild(button);
    });
}

function getOracleWords(question) {
  const stopWords = ["le", "la", "les", "de", "des", "du", "un", "une", "et", "ou", "a", "au", "aux", "en", "sur", "pour", "qui", "que", "quoi", "comment", "dans", "est"];
  return normalizeText(question)
    .split(/\W+/)
    .filter((word) => word.length >= 3 && !stopWords.includes(word));
}

function scoreOracle(question, entry) {
  const words = getOracleWords(question);
  const searchable = normalizeText(`${entry.title} ${entry.prompts.join(" ")} ${entry.tags.join(" ")}`);
  let score = 0;
  let matches = 0;

  words.forEach((word) => {
    if (searchable.includes(word)) {
      matches += 1;
      score += entry.prompts.some((prompt) => normalizeText(prompt).includes(word)) ? 4 : 2;
      score += normalizeText(entry.title).includes(word) ? 2 : 0;
      score += entry.tags.some((tag) => normalizeText(tag).includes(word)) ? 1 : 0;
    }
  });

  if (matches === 0) {
    return 0;
  }

  const exactPromptHit = entry.prompts.some((prompt) => normalizeText(question).includes(normalizeText(prompt)));
  return score + (exactPromptHit ? 5 : 0);
}

function getOracleReply(question) {
  const scored = oracleEntries
    .map((entry) => ({ entry, score: scoreOracle(question, entry) }))
    .sort((left, right) => right.score - left.score);

  const best = scored[0];
  const second = scored[1];

  if (!best || best.score < 4 || (second && best.score - second.score < 2)) {
    return {
      title: "Question a preciser",
      answer: "L’oracle ne trouve pas de correspondance assez fiable. Essayez avec un nom exact comme Phandaline, Cragmaw, Glasstaff, Sildar, Nezznar, repos, gobelin ou Forge des Sorts.",
      tags: ["question floue", "reformulation"],
      category: "all"
    };
  }

  return best.entry;
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message message--${type}`;
  message.textContent = text;
  dom.aiChat.appendChild(message);
  dom.aiChat.scrollTop = dom.aiChat.scrollHeight;
}

function displayOracleReply(reply) {
  dom.oracleTitle.textContent = reply.title;
  dom.oracleAnswer.textContent = reply.answer;
  dom.oracleTags.innerHTML = "";
  reply.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    dom.oracleTags.appendChild(span);
  });
}

function renderChecklist() {
  const saved = loadJson(storageKeys.checklist, {});
  dom.checklistGrid.innerHTML = "";

  checklistSections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "checklist-card";
    const title = document.createElement("h4");
    title.textContent = section.title;
    card.appendChild(title);

    section.items.forEach((item) => {
      const key = `${section.title}-${item}`;
      const label = document.createElement("label");
      label.className = "checklist-item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = Boolean(saved[key]);
      input.addEventListener("change", () => {
        saved[key] = input.checked;
        saveJson(storageKeys.checklist, saved);
      });

      const span = document.createElement("span");
      span.textContent = item;
      label.append(input, span);
      card.appendChild(label);
    });

    dom.checklistGrid.appendChild(card);
  });
}

function renderSpells(query = "") {
  const term = normalizeText(query.trim());
  const slots = loadJson(storageKeys.slots, defaultSlots);
  dom.spellList.innerHTML = "";

  spells
    .filter((spell) => {
      if (!term) return true;
      return normalizeText(`${spell.name} ${spell.school} ${spell.level} ${spell.use}`).includes(term);
    })
    .forEach((spell) => {
      const card = document.createElement("article");
      card.className = "spell-card";
      const slot = slots.find((item) => item.level === spell.level);
      const canCast = slot && slot.current > 0;
      card.innerHTML = `
        <strong>${spell.name}</strong>
        <div class="spell-meta">
          <span class="pill">Niveau ${spell.level}</span>
          <span class="pill">${spell.school}</span>
        </div>
        <p>${spell.use}</p>
      `;

      const button = document.createElement("button");
      button.type = "button";
      button.className = `spell-cast${canCast ? "" : " disabled"}`;
      button.textContent = canCast ? `Lancer le sort (slot niv. ${spell.level})` : "Plus d’emplacements disponibles";
      if (canCast) {
        button.addEventListener("click", () => consumeSpellSlot(spell.level, spell.name));
      }
      card.appendChild(button);
      dom.spellList.appendChild(card);
    });

  if (!dom.spellList.children.length) {
    const empty = document.createElement("div");
    empty.className = "idea-card";
    empty.textContent = "Aucun sort ne correspond a cette recherche.";
    dom.spellList.appendChild(empty);
  }
}

function renderSlots() {
  const slots = loadJson(storageKeys.slots, defaultSlots);
  dom.slotBoard.innerHTML = "";

  slots.forEach((slot) => {
    if (slot.max === 0) return;
    const card = document.createElement("article");
    card.className = "slot-card";
    card.innerHTML = `<strong>Niveau ${slot.level}</strong><p>${slot.current} / ${slot.max} disponibles</p>`;

    const orbs = document.createElement("div");
    orbs.className = "slot-orbs";
    for (let index = 0; index < slot.max; index += 1) {
      const orb = document.createElement("span");
      orb.className = `slot-orb${index >= slot.current ? " used" : ""}`;
      orbs.appendChild(orb);
    }

    card.appendChild(orbs);
    dom.slotBoard.appendChild(card);
  });
}

function consumeSpellSlot(level, spellName) {
  const slots = loadJson(storageKeys.slots, defaultSlots);
  const target = slots.find((slot) => slot.level === level);
  if (!target || target.current <= 0) return;
  target.current -= 1;
  saveJson(storageKeys.slots, slots);
  renderSlots();
  renderSpells(dom.spellSearch.value);
  addMessage(`Le groupe vient de lancer ${spellName}.`, "user");
  addMessage(`Emplacement de niveau ${level} consomme. Il en reste ${target.current}.`, "oracle");
}

function renderIdea(container, text) {
  container.innerHTML = "";
  const card = document.createElement("div");
  card.className = "idea-card";
  card.innerHTML = `<p>${text}</p>`;
  container.appendChild(card);
}

function renderResources() {
  const resources = loadJson(storageKeys.resources, defaultResources);
  dom.resourceList.innerHTML = "";

  resources.forEach((resource, index) => {
    const card = document.createElement("article");
    card.className = "resource-card";
    card.innerHTML = `
      <header>
        <strong>${resource.name}</strong>
        <span>${resource.value}</span>
      </header>
      <p>Quantite actuelle de la reserve.</p>
    `;

    const controls = document.createElement("div");
    controls.className = "counter-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "icon-button";
    minus.textContent = "-";
    minus.addEventListener("click", () => updateResource(index, -resource.step));

    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "icon-button";
    plus.textContent = "+";
    plus.addEventListener("click", () => updateResource(index, resource.step));

    controls.append(minus, plus);
    card.appendChild(controls);
    dom.resourceList.appendChild(card);
  });
}

function updateResource(index, delta) {
  const resources = loadJson(storageKeys.resources, defaultResources);
  resources[index].value = Math.max(0, resources[index].value + delta);
  saveJson(storageKeys.resources, resources);
  renderResources();
}

function renderJournal() {
  const journal = loadJson(storageKeys.journal, []);
  dom.journalList.innerHTML = "";

  journal.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "journal-card";
    card.innerHTML = `
      <strong>${entry.title}</strong>
      <p>${entry.text}</p>
      <small>${entry.date}</small>
    `;
    dom.journalList.appendChild(card);
  });

  if (!journal.length) {
    const empty = document.createElement("div");
    empty.className = "idea-card";
    empty.innerHTML = "<p>Aucune entree pour l’instant.</p>";
    dom.journalList.appendChild(empty);
  }
}

function addJournalEntry(title, text) {
  const journal = loadJson(storageKeys.journal, []);
  journal.unshift({ title: title || "Entree sans titre", text, date: new Date().toLocaleString("fr-FR") });
  saveJson(storageKeys.journal, journal);
  renderJournal();
}

function renderPlayers() {
  const players = loadJson(storageKeys.players, defaultPlayers);
  dom.playerNameEditor.innerHTML = "";
  dom.playerHealthList.innerHTML = "";

  players.forEach((player, index) => {
    const nameCard = document.createElement("div");
    nameCard.className = "player-name-card";
    nameCard.innerHTML = `<label for="player-name-${index}">Joueur ${index + 1}</label>`;

    const input = document.createElement("input");
    input.id = `player-name-${index}`;
    input.type = "text";
    input.value = player.name;
    input.placeholder = `Nom du joueur ${index + 1}`;
    input.addEventListener("change", () => updatePlayerName(index, input.value));
    nameCard.appendChild(input);
    dom.playerNameEditor.appendChild(nameCard);

    const percentage = Math.round((player.hp / player.maxHp) * 100);
    const card = document.createElement("article");
    card.className = "player-card";
    card.innerHTML = `
      <strong>${player.name}</strong>
      <div class="player-track">
        <span>${player.hp} / ${player.maxHp} PV</span>
      </div>
      <div class="hp-bar"><span style="width:${percentage}%"></span></div>
    `;

    const controls = document.createElement("div");
    controls.className = "counter-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.className = "icon-button";
    minus.textContent = "-";
    minus.addEventListener("click", () => updatePlayerHp(index, -1));

    const plus = document.createElement("button");
    plus.type = "button";
    plus.className = "icon-button";
    plus.textContent = "+";
    plus.addEventListener("click", () => updatePlayerHp(index, 1));

    const maxLabel = document.createElement("span");
    maxLabel.textContent = "PV modifiables";

    controls.append(minus, plus, maxLabel);
    card.appendChild(controls);
    dom.playerHealthList.appendChild(card);
  });
}

function updatePlayerName(index, name) {
  const players = loadJson(storageKeys.players, defaultPlayers);
  players[index].name = name.trim() || `Joueur ${index + 1}`;
  saveJson(storageKeys.players, players);
  renderPlayers();
}

function updatePlayerHp(index, delta) {
  const players = loadJson(storageKeys.players, defaultPlayers);
  players[index].hp = Math.max(0, Math.min(players[index].maxHp, players[index].hp + delta));
  saveJson(storageKeys.players, players);
  renderPlayers();
}

function applyRest(type) {
  const players = loadJson(storageKeys.players, defaultPlayers);
  const slots = loadJson(storageKeys.slots, defaultSlots);

  players.forEach((player) => {
    if (type === "short") {
      player.hp = Math.min(player.maxHp, player.hp + Math.ceil(player.maxHp * 0.35));
    } else {
      player.hp = player.maxHp;
    }
  });

  slots.forEach((slot) => {
    if (type === "short") {
      const recovery = Math.max(1, Math.floor(slot.max / 2));
      slot.current = Math.min(slot.max, slot.current + recovery);
    } else {
      slot.current = slot.max;
    }
  });

  saveJson(storageKeys.players, players);
  saveJson(storageKeys.slots, slots);
  renderPlayers();
  renderSlots();
  renderSpells(dom.spellSearch.value);
}

function renderMonsters(query = "") {
  const term = normalizeText(query.trim());
  dom.monsterList.innerHTML = "";

  monsters
    .filter((monster) => {
      if (!term) return true;
      return normalizeText(`${monster.name} ${monster.role} ${monster.trait} ${monster.tip}`).includes(term);
    })
    .forEach((monster) => {
      const card = document.createElement("article");
      card.className = "monster-card";
      card.innerHTML = `
        <strong>${monster.name}</strong>
        <p><span class="pill">${monster.role}</span></p>
        <p><strong>Particularite :</strong> ${monster.trait}</p>
        <p><strong>Mise en scene :</strong> ${monster.tip}</p>
      `;
      dom.monsterList.appendChild(card);
    });
}

function selectMapPoint(mapKey, pointIndex) {
  const map = mapData[mapKey];
  const point = map.points[pointIndex];
  dom.mapPointTitle.textContent = point.name;
  dom.mapPointDescription.textContent = point.description;
  document.querySelectorAll(".map-hotspot").forEach((node, index) => {
    node.classList.toggle("active", index === pointIndex);
  });
}

function updateMapFocus(key) {
  const map = mapData[key];
  document.querySelectorAll(".map-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.map === key);
  });
  dom.mapFocusImage.src = map.image;
  dom.mapFocusTitle.textContent = map.title;
  dom.mapFocusDescription.textContent = map.description;
  dom.mapPoints.innerHTML = "";
  dom.mapHotspots.innerHTML = "";

  map.points.forEach((point, index) => {
    const tag = document.createElement("button");
    tag.type = "button";
    tag.className = "tag";
    tag.textContent = point.name;
    tag.addEventListener("click", () => selectMapPoint(key, index));
    dom.mapPoints.appendChild(tag);

    const hotspot = document.createElement("button");
    hotspot.type = "button";
    hotspot.className = "map-hotspot";
    hotspot.style.left = `${point.x}%`;
    hotspot.style.top = `${point.y}%`;
    hotspot.textContent = index + 1;
    hotspot.dataset.label = point.name;
    hotspot.addEventListener("click", () => selectMapPoint(key, index));
    dom.mapHotspots.appendChild(hotspot);
  });

  selectMapPoint(key, 0);
}

function generateEvent() {
  dom.eventType.textContent = randomItem(eventTables.types);
  dom.eventTrigger.textContent = randomItem(eventTables.triggers);
  dom.eventScene.textContent = randomItem(eventTables.scenes);
  dom.eventTwist.textContent = randomItem(eventTables.twists);
  dom.eventReward.textContent = randomItem(eventTables.rewards);
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((node) => node.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
}

function setupModals() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.openModal).classList.add("open");
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".modal").classList.remove("open");
    });
  });
}

function initializeNotes() {
  dom.gmNotes.value = localStorage.getItem(storageKeys.notes) || "";
  document.getElementById("save-notes").addEventListener("click", () => {
    localStorage.setItem(storageKeys.notes, dom.gmNotes.value);
    setNotesStatus("Notes MJ sauvegardees.");
  });
  document.getElementById("clear-notes").addEventListener("click", () => {
    dom.gmNotes.value = "";
    localStorage.removeItem(storageKeys.notes);
    setNotesStatus("Notes MJ effacees.");
  });
}

function initializePlayersPanel() {
  renderIdea(dom.boostIdeas, randomItem(boostIdeas));
  renderIdea(dom.helpIdeas, randomItem(helpIdeas));
  dom.spellSearch.addEventListener("input", (event) => renderSpells(event.target.value));
  document.getElementById("shuffle-boost").addEventListener("click", () => renderIdea(dom.boostIdeas, randomItem(boostIdeas)));
  document.getElementById("shuffle-help").addEventListener("click", () => renderIdea(dom.helpIdeas, randomItem(helpIdeas)));
}

function initializeResources() {
  if (!localStorage.getItem(storageKeys.resources)) {
    saveJson(storageKeys.resources, defaultResources);
  }
  if (!localStorage.getItem(storageKeys.slots)) {
    saveJson(storageKeys.slots, defaultSlots);
  }
  if (!localStorage.getItem(storageKeys.players)) {
    saveJson(storageKeys.players, defaultPlayers);
  }

  const players = loadJson(storageKeys.players, defaultPlayers).slice(0, 3);
  while (players.length < 3) {
    players.push({ ...defaultPlayers[players.length] });
  }
  saveJson(storageKeys.players, players);

  renderResources();
  renderSlots();
  renderPlayers();
  document.getElementById("reset-resources").addEventListener("click", () => {
    saveJson(storageKeys.resources, defaultResources);
    renderResources();
  });
  document.getElementById("short-rest").addEventListener("click", () => applyRest("short"));
  document.getElementById("long-rest").addEventListener("click", () => applyRest("long"));
}

function initializeJournal() {
  dom.journalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = dom.journalTitle.value.trim();
    const text = dom.journalEntry.value.trim();
    if (!text) return;
    addJournalEntry(title, text);
    dom.journalTitle.value = "";
    dom.journalEntry.value = "";
  });
  renderJournal();
}

function initializeAI() {
  dom.aiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = dom.aiInput.value.trim();
    if (!question) return;
    addMessage(question, "user");
    const reply = getOracleReply(question);
    addMessage(reply.answer, "oracle");
    displayOracleReply(reply);
    dom.aiInput.value = "";
  });
  dom.oracleCategory.addEventListener("change", renderOracleSuggestions);
  document.getElementById("oracle-random").addEventListener("click", () => {
    const pick = randomItem(oracleEntries);
    dom.aiInput.value = pick.prompts[0];
    dom.aiForm.requestSubmit();
  });
  renderOracleSuggestions();
}

function initializeMaps() {
  document.querySelectorAll(".map-card").forEach((card) => {
    card.addEventListener("click", () => updateMapFocus(card.dataset.map));
  });

  document.getElementById("toggle-map-labels").addEventListener("click", (event) => {
    dom.mapHotspots.classList.toggle("is-hidden");
    event.currentTarget.textContent = dom.mapHotspots.classList.contains("is-hidden")
      ? "Afficher les reperes"
      : "Masquer les reperes";
  });

  updateMapFocus("phandaline");
}

function initializeEvents() {
  document.getElementById("generate-event").addEventListener("click", generateEvent);
  generateEvent();
}

function initializeMonsters() {
  renderMonsters();
  dom.monsterSearch.addEventListener("input", (event) => renderMonsters(event.target.value));
}

function init() {
  renderChecklist();
  renderSpells();
  setupTabs();
  setupModals();
  initializeNotes();
  initializePlayersPanel();
  initializeResources();
  initializeJournal();
  initializeAI();
  initializeMaps();
  initializeEvents();
  initializeMonsters();
}

init();






