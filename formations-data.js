/* ════════════════════════════════════════════════════════
   RESCUE FORMA — Base formations
   Ajouter une formation : copier un bloc, changer id/code.
   Image : placer le fichier dans assets/img/ et renseigner "image".
   Fiche programme PDF : placer le fichier dans assets/fiches/
   et renseigner "fiche" (ex: "sst.pdf"). Laisser "" si absent.
   ════════════════════════════════════════════════════════ */

const THEMES = {
  SEC: { nom: "Secourisme", desc: "Gestes de premiers secours et conduite à tenir face à l'urgence, en milieu professionnel comme auprès du grand public." },
  INC: { nom: "Incendie & évacuation", desc: "Prévention du risque incendie, manipulation des moyens d'extinction et organisation de l'évacuation des locaux." },
  SUR: { nom: "Sûreté & sécurité des personnes", desc: "Prévention de la malveillance, gestion des conflits et des situations d'agression, protection des personnes et des biens." },
  PRE: { nom: "Prévention & santé au travail", desc: "Réduction des risques professionnels : TMS, RPS, addictions, risque routier — conformément aux référentiels INRS." },
  ELE: { nom: "Habilitations électriques", desc: "Préparation aux habilitations électriques non électricien et opérations d'ordre électrique simples, selon la norme NF C 18-510." },
  HYG: { nom: "Restauration & hygiène alimentaire", desc: "Obligations réglementaires des établissements de restauration : hygiène alimentaire, méthode HACCP et sécurité en cuisine." },
  SAN: { nom: "Établissements de santé & médico-social", desc: "Formations conçues pour les EHPAD, cliniques, hôpitaux et structures médico-sociales : manutention des patients, sécurité incendie adaptée, gestion de l'agressivité en milieu de soins." }
};

const SECTEURS = {
  sante: "Santé & médico-social",
  resto: "Restauration & hôtellerie",
  tous: "Tous secteurs"
};

const FORMATIONS = [

/* ── SECOURISME ─────────────────────────────────────────── */
{
  id: "sst", code: "SEC-01", theme: "SEC",
  titre: "SST — Sauveteur Secouriste du Travail",
  duree: "14 h (2 jours)", effectif: "4 à 10 stagiaires",
  public: "Tout salarié, tout secteur d'activité",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Certificat SST (INRS) — validité 24 mois",
  secteurs: ["tous"],
  resume: "Devenir acteur de la prévention et porter secours à toute victime d'un accident du travail ou d'un malaise, conformément au référentiel INRS.",
  objectifs: [
    "Intervenir efficacement face à une situation d'accident du travail",
    "Mettre en application ses compétences au profit de la santé et sécurité au travail",
    "Contribuer à la prévention des risques professionnels dans l'entreprise"
  ],
  programme: [
    "Le rôle du SST dans l'entreprise et le cadre juridique de son intervention",
    "Protéger, examiner, faire alerter, secourir : la conduite à tenir",
    "La victime saigne abondamment, s'étouffe, se plaint de malaise, de brûlures, de douleurs",
    "La victime ne répond pas : elle respire / elle ne respire pas — RCP et défibrillation",
    "Situations inhérentes aux risques spécifiques de l'entreprise",
    "Épreuves certificatives conformes au référentiel INRS"
  ],
  fiche: "", image: ""
},
{
  id: "mac-sst", code: "SEC-02", theme: "SEC",
  titre: "MAC SST — Maintien et Actualisation des Compétences",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Titulaires du certificat SST",
  prerequis: "Certificat SST en cours de validité",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Prolongation du certificat SST — 24 mois",
  secteurs: ["tous"],
  resume: "Maintenir et actualiser les compétences du Sauveteur Secouriste du Travail pour prolonger la validité du certificat.",
  objectifs: [
    "Actualiser ses compétences de SST au regard des évolutions du référentiel",
    "Réviser les conduites à tenir face aux situations d'urgence",
    "Renforcer son rôle d'acteur de la prévention dans l'entreprise"
  ],
  programme: [
    "Retour d'expérience sur les actions menées en entreprise",
    "Actualisation des conduites à tenir et des techniques de secours",
    "Réentraînement aux gestes : hémorragies, étouffement, malaise, RCP-DAE",
    "Épreuves certificatives conformes au référentiel INRS"
  ],
  fiche: "", image: ""
},
{
  id: "gqs", code: "SEC-03", theme: "SEC",
  titre: "GQS — Gestes Qui Sauvent",
  duree: "2 h", effectif: "4 à 15 participants",
  public: "Tout public à partir de 10 ans",
  prerequis: "Aucun",
  financement: "Financement direct entreprise ou collectivité",
  certif: "Attestation de sensibilisation GQS",
  secteurs: ["tous"],
  resume: "Sensibilisation aux gestes de premiers secours essentiels : alerter, masser, défibriller, poser un garrot.",
  objectifs: [
    "Se protéger et protéger la victime",
    "Alerter les secours et transmettre les bonnes informations",
    "Réaliser les gestes essentiels face à une hémorragie ou un arrêt cardiaque"
  ],
  programme: [
    "Protection et alerte des secours",
    "Arrêt d'une hémorragie — compression et garrot",
    "Positions d'attente et position latérale de sécurité",
    "Réanimation cardio-pulmonaire et utilisation du défibrillateur"
  ],
  fiche: "", image: ""
},
{
  id: "initiation-ps", code: "SEC-04", theme: "SEC",
  titre: "Initiation aux premiers secours",
  duree: "3 h 30", effectif: "4 à 12 participants",
  public: "Salariés, agents de collectivité, grand public",
  prerequis: "Aucun",
  financement: "Financement direct entreprise ou collectivité",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Acquérir les réflexes de base face aux situations d'urgence les plus fréquentes de la vie quotidienne et professionnelle.",
  objectifs: [
    "Identifier une situation d'urgence et alerter efficacement",
    "Réaliser les gestes de premiers secours de base",
    "Agir en sécurité en attendant les secours organisés"
  ],
  programme: [
    "La protection de la victime, du sauveteur et des témoins",
    "L'alerte : qui appeler, quoi dire",
    "Étouffement, saignement abondant, perte de connaissance",
    "Arrêt cardiaque : massage et défibrillateur",
    "Mises en situation pratiques"
  ],
  fiche: "", image: ""
},
{
  id: "dae", code: "SEC-05", theme: "SEC",
  titre: "Utilisation du défibrillateur (DAE)",
  duree: "2 h", effectif: "4 à 15 participants",
  public: "Tout public — établissements équipés d'un DAE",
  prerequis: "Aucun",
  financement: "Financement direct entreprise ou collectivité",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Savoir reconnaître un arrêt cardiaque et mettre en œuvre la chaîne de survie : alerte, massage cardiaque, défibrillation.",
  objectifs: [
    "Reconnaître un arrêt cardio-respiratoire",
    "Pratiquer une réanimation cardio-pulmonaire efficace",
    "Utiliser un défibrillateur automatisé externe en toute sécurité"
  ],
  programme: [
    "La chaîne de survie et l'importance des premières minutes",
    "Reconnaissance de l'arrêt cardiaque",
    "Réanimation cardio-pulmonaire adulte",
    "Mise en œuvre du DAE : démonstration et pratique sur mannequin"
  ],
  fiche: "", image: ""
},
{
  id: "ps-petite-enfance", code: "SEC-06", theme: "SEC",
  titre: "Premiers secours petite enfance",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Professionnels de la petite enfance, crèches, assistantes maternelles, périscolaire",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Les gestes de premiers secours adaptés au nourrisson et à l'enfant : étouffement, malaise, traumatismes, arrêt cardiaque.",
  objectifs: [
    "Identifier les situations d'urgence spécifiques au nourrisson et à l'enfant",
    "Réaliser les gestes de secours adaptés à l'âge de la victime",
    "Prévenir les accidents de la vie courante en structure d'accueil"
  ],
  programme: [
    "Spécificités du nourrisson et de l'enfant",
    "Étouffement, chute, brûlure, intoxication",
    "Malaise et perte de connaissance de l'enfant",
    "RCP nourrisson et enfant, utilisation du DAE",
    "Prévention des accidents en structure d'accueil"
  ],
  fiche: "", image: ""
},
{
  id: "ps-sport", code: "SEC-07", theme: "SEC",
  titre: "Premiers secours en milieu sportif",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Éducateurs sportifs, clubs, salles de sport, encadrants associatifs",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Prise en charge des urgences en contexte sportif : traumatismes, malaise à l'effort, arrêt cardiaque sur le terrain.",
  objectifs: [
    "Identifier les urgences spécifiques à la pratique sportive",
    "Prendre en charge un traumatisme ou un malaise à l'effort",
    "Organiser la chaîne de secours dans une enceinte sportive"
  ],
  programme: [
    "Traumatismes des membres, entorses, fractures, plaies",
    "Traumatisme crânien et rachidien : conduite à tenir",
    "Malaise à l'effort, hypoglycémie, coup de chaleur",
    "Arrêt cardiaque du sportif : RCP et DAE",
    "Trousse de secours et organisation des secours en club"
  ],
  fiche: "", image: ""
},
{
  id: "ps-risques-specifiques", code: "SEC-08", theme: "SEC",
  titre: "Premiers secours adaptés aux risques spécifiques",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Entreprises présentant des risques particuliers (chimique, hauteur, isolement…)",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Programme construit après analyse des risques propres à votre activité : produits chimiques, travail isolé, milieu confiné, hauteur.",
  objectifs: [
    "Identifier les risques spécifiques de son environnement de travail",
    "Adapter les gestes de secours aux accidents propres à l'activité",
    "Mettre en place une organisation des secours adaptée au site"
  ],
  programme: [
    "Analyse préalable des risques du site avec l'employeur",
    "Conduites à tenir spécifiques : brûlure chimique, électrisation, chute de hauteur",
    "Secours à un travailleur isolé",
    "Organisation interne des secours et matériel adapté",
    "Mises en situation sur le poste de travail"
  ],
  fiche: "", image: ""
},
{
  id: "sensibilisation-gqs", code: "SEC-09", theme: "SEC",
  titre: "Sensibilisation aux gestes d'urgence",
  duree: "1 h 30", effectif: "Jusqu'à 20 participants",
  public: "Tout public — format court pour événements internes",
  prerequis: "Aucun",
  financement: "Financement direct entreprise ou collectivité",
  certif: "Attestation de participation",
  secteurs: ["tous"],
  resume: "Format court et dynamique pour découvrir les gestes essentiels : idéal en Safety Day, séminaire ou journée sécurité.",
  objectifs: [
    "Découvrir les gestes qui sauvent en format court",
    "Démystifier l'utilisation du défibrillateur",
    "Donner envie d'aller vers une formation certifiante"
  ],
  programme: [
    "Alerter : les numéros et les bons réflexes",
    "Démonstration massage cardiaque et DAE",
    "Atelier pratique sur mannequin",
    "Questions-réponses avec le formateur"
  ],
  fiche: "", image: ""
},

/* ── INCENDIE ───────────────────────────────────────────── */
{
  id: "extincteur", code: "INC-01", theme: "INC",
  titre: "Manipulation des extincteurs",
  duree: "2 h", effectif: "4 à 12 stagiaires",
  public: "Tout salarié — obligation Code du travail art. R4227-28",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "resto", "sante"],
  resume: "Savoir réagir face à un départ de feu et manipuler un extincteur sur feu réel, en sécurité.",
  objectifs: [
    "Comprendre la naissance et la propagation d'un incendie",
    "Choisir le bon extincteur selon la classe de feu",
    "Éteindre un départ de feu en sécurité sur feu réel"
  ],
  programme: [
    "Le triangle du feu et les classes de feu",
    "Les différents types d'extincteurs et leurs usages",
    "Consignes de sécurité et conduite à tenir",
    "Exercices pratiques d'extinction sur bac à feux écologique"
  ],
  fiche: "", image: ""
},
{
  id: "epi", code: "INC-02", theme: "INC",
  titre: "EPI — Équipier de Première Intervention",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Salariés désignés pour la première intervention incendie",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation EPI",
  secteurs: ["tous", "sante", "resto"],
  resume: "Former les équipiers chargés d'intervenir sur un départ de feu avant l'arrivée des secours : extinction, alarme, alerte, évacuation.",
  objectifs: [
    "Donner l'alarme et alerter les secours",
    "Intervenir sur un départ de feu avec les moyens de première intervention",
    "Participer à l'évacuation des occupants"
  ],
  programme: [
    "La réglementation et le rôle de l'EPI",
    "Théorie du feu, modes de propagation, fumées",
    "Moyens de première intervention : extincteurs, alarme, consignes",
    "Exercices d'extinction sur feu réel",
    "Rôle de l'EPI dans l'évacuation"
  ],
  fiche: "", image: ""
},
{
  id: "esi", code: "INC-03", theme: "INC",
  titre: "ESI — Équipier de Seconde Intervention",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Membres des équipes de seconde intervention, sites industriels",
  prerequis: "Formation EPI recommandée",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation ESI",
  secteurs: ["tous"],
  resume: "Renforcer l'action des EPI avec des moyens hydrauliques et organiser l'intervention en attendant les secours extérieurs.",
  objectifs: [
    "Intervenir en équipe sur un incendie avec les moyens de seconde intervention",
    "Mettre en œuvre les moyens hydrauliques du site (RIA, lances)",
    "Assurer l'interface avec les services de secours extérieurs"
  ],
  programme: [
    "Organisation de la lutte incendie en entreprise",
    "Reconnaissance, établissement et utilisation des moyens hydrauliques",
    "Techniques d'intervention en équipe et binôme",
    "Exercices pratiques d'extinction et manœuvres",
    "Accueil et guidage des secours extérieurs"
  ],
  fiche: "", image: ""
},
{
  id: "ria", code: "INC-04", theme: "INC",
  titre: "Utilisation des RIA — Robinets d'Incendie Armés",
  duree: "2 h", effectif: "4 à 12 stagiaires",
  public: "Salariés d'établissements équipés de RIA",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "Mettre en œuvre un robinet d'incendie armé sur un départ de feu, en sécurité et en équipe.",
  objectifs: [
    "Connaître le fonctionnement et les limites du RIA",
    "Dérouler, alimenter et manœuvrer un RIA en sécurité",
    "Attaquer un feu naissant en binôme"
  ],
  programme: [
    "Présentation du RIA : implantation, portée, débit",
    "Règles de sécurité liées à l'eau et à l'électricité",
    "Technique de déroulement et de progression",
    "Exercices pratiques de mise en œuvre"
  ],
  fiche: "", image: ""
},
{
  id: "evacuation", code: "INC-05", theme: "INC",
  titre: "Évacuation des locaux",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Tout salarié, personnels désignés",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante", "resto"],
  resume: "Organiser et réaliser l'évacuation complète d'un bâtiment : consignes, cheminements, point de rassemblement.",
  objectifs: [
    "Connaître les consignes et l'organisation de l'évacuation",
    "Identifier les cheminements et les issues de secours",
    "Participer efficacement à une évacuation générale"
  ],
  programme: [
    "Le signal d'alarme et le déclenchement de l'évacuation",
    "Cheminements, issues de secours, point de rassemblement",
    "Les comportements face aux fumées",
    "Cas particuliers : personnes à mobilité réduite, public",
    "Exercice d'évacuation commenté"
  ],
  fiche: "", image: ""
},
{
  id: "guide-serre-file", code: "INC-06", theme: "INC",
  titre: "Guide-file & serre-file",
  duree: "2 h", effectif: "4 à 12 stagiaires",
  public: "Personnels désignés guide-file / serre-file",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "Former les personnels chargés de guider et de vérifier l'évacuation complète de leur zone.",
  objectifs: [
    "Comprendre le rôle du guide-file et du serre-file",
    "Diriger l'évacuation de sa zone vers le point de rassemblement",
    "Vérifier l'évacuation complète et rendre compte"
  ],
  programme: [
    "Missions respectives du guide-file et du serre-file",
    "Reconnaissance des itinéraires et zones de responsabilité",
    "Gestion des comportements et des refus d'évacuer",
    "Le compte-rendu au responsable d'évacuation",
    "Mise en situation dans les locaux"
  ],
  fiche: "", image: ""
},
{
  id: "exercices-evacuation", code: "INC-07", theme: "INC",
  titre: "Organisation d'exercices d'évacuation",
  duree: "3 h 30", effectif: "Selon site",
  public: "Employeurs, responsables sécurité, chargés d'évacuation",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation + rapport d'exercice",
  secteurs: ["tous", "sante", "resto"],
  resume: "Conception, encadrement et débriefing de votre exercice semestriel d'évacuation, avec rapport écrit conforme à vos obligations.",
  objectifs: [
    "Préparer un scénario d'exercice adapté à l'établissement",
    "Encadrer et observer le déroulement de l'évacuation",
    "Exploiter le retour d'expérience et le registre de sécurité"
  ],
  programme: [
    "Préparation du scénario avec le responsable d'établissement",
    "Briefing des acteurs : guide-files, serre-files, chargés d'évacuation",
    "Déclenchement et observation de l'exercice",
    "Débriefing à chaud et rapport écrit avec axes d'amélioration",
    "Renseignement du registre de sécurité"
  ],
  fiche: "", image: ""
},
{
  id: "incendie-lieux-risques", code: "INC-08", theme: "INC",
  titre: "Incendie en lieux à risques particuliers",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Sites industriels, entrepôts, laboratoires, parkings, locaux techniques",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Adapter la prévention et l'intervention incendie aux environnements à risques : stockages, produits dangereux, locaux techniques.",
  objectifs: [
    "Identifier les risques incendie propres à l'activité du site",
    "Adapter les moyens de prévention et de première intervention",
    "Intervenir en sécurité dans un environnement à risques"
  ],
  programme: [
    "Analyse des risques spécifiques du site",
    "Produits dangereux, réactions et modes d'extinction adaptés",
    "Moyens de protection et de détection particuliers",
    "Conduites à tenir spécifiques et périmètres de sécurité",
    "Exercices adaptés à la configuration des locaux"
  ],
  fiche: "", image: ""
},

/* ── SÛRETÉ & SÉCURITÉ DES PERSONNES ────────────────────── */
{
  id: "gestion-conflits", code: "SUR-01", theme: "SUR",
  titre: "Gestion des conflits et de l'agressivité",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Personnels en contact avec du public",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante", "resto"],
  resume: "Prévenir, désamorcer et gérer les situations de tension et d'agressivité verbale avec le public, animé par des professionnels de la gestion de conflit en activité.",
  objectifs: [
    "Comprendre les mécanismes de l'agressivité et du conflit",
    "Adopter les postures et techniques de communication apaisantes",
    "Gérer une situation de tension jusqu'au retour au calme"
  ],
  programme: [
    "Mécanismes de l'agressivité : frustration, stress, incompréhension",
    "Communication verbale et non verbale en situation tendue",
    "Techniques de désamorçage et gestion de ses propres émotions",
    "Quand et comment passer le relais, alerter",
    "Mises en situation à partir de cas réels vécus par les formateurs"
  ],
  fiche: "", image: ""
},
{
  id: "desescalade", code: "SUR-02", theme: "SUR",
  titre: "Techniques de désescalade verbale",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Accueil, guichet, services clients, soignants, agents de proximité",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "Approfondir les techniques de désescalade utilisées quotidiennement par les professionnels de la sécurité publique.",
  objectifs: [
    "Repérer les signaux de montée en tension",
    "Appliquer une méthodologie structurée de désescalade",
    "Sécuriser l'espace et protéger les tiers pendant l'échange"
  ],
  programme: [
    "Lecture comportementale : signaux faibles et signaux d'alerte",
    "Positionnement, distance de sécurité, gestion de l'espace",
    "Techniques verbales : reformulation, cadrage, options de sortie",
    "Gestion du stress de l'intervenant",
    "Entraînement intensif sur scénarios progressifs"
  ],
  fiche: "", image: ""
},
{
  id: "face-agression", code: "SUR-03", theme: "SUR",
  titre: "Faire face à une agression",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Tout personnel exposé au risque d'agression physique",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante", "resto"],
  resume: "Réagir de manière adaptée et légale face à une agression physique : protection, mise en sécurité, alerte, gestion post-événement.",
  objectifs: [
    "Adopter les bons réflexes de protection face à une agression",
    "Connaître le cadre légal de la légitime défense",
    "Gérer l'après-agression : alerte, témoignage, accompagnement"
  ],
  programme: [
    "Prévention situationnelle : réduire son exposition au risque",
    "Cadre juridique : légitime défense et assistance à personne en danger",
    "Réflexes de protection et de mise en sécurité",
    "L'alerte aux forces de l'ordre : les informations utiles",
    "Le dépôt de plainte et l'accompagnement de la victime"
  ],
  fiche: "", image: ""
},
{
  id: "vsst", code: "SUR-04", theme: "SUR",
  titre: "Prévention des violences sexistes et sexuelles au travail",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Référents VSST, RH, managers, CSE",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Identifier, prévenir et traiter les situations de violences sexistes et sexuelles conformément aux obligations légales de l'employeur.",
  objectifs: [
    "Maîtriser le cadre légal des VSST et les obligations de l'employeur",
    "Identifier les comportements constitutifs d'agissements sexistes ou de harcèlement",
    "Réagir et orienter en tant que référent ou manager"
  ],
  programme: [
    "Définitions juridiques : agissement sexiste, harcèlement, agression",
    "Obligations de l'employeur et rôle du référent VSST",
    "Recueillir la parole d'une victime : posture et méthode",
    "Procédure d'enquête interne et mesures conservatoires",
    "Études de cas et jurisprudence récente"
  ],
  fiche: "", image: ""
},
{
  id: "menace-terroriste", code: "SUR-05", theme: "SUR",
  titre: "Réagir face à la menace terroriste et attaque armée",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Tout établissement recevant du public ou du personnel",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "S'échapper, se cacher, alerter : les réflexes de survie face à une attaque, enseignés par des professionnels de la sécurité publique en activité.",
  objectifs: [
    "Connaître les principes « s'échapper, se cacher, alerter »",
    "Adapter la réaction à la configuration de son établissement",
    "Faciliter l'intervention des forces de l'ordre"
  ],
  programme: [
    "Le contexte de la menace et les enseignements des retours d'expérience",
    "Les réflexes : s'échapper, se cacher, alerter",
    "Confinement et barricadage : méthode et points clés",
    "Le comportement à l'arrivée des forces d'intervention",
    "Exercice de mise en situation dans les locaux"
  ],
  fiche: "", image: ""
},
{
  id: "braquage", code: "SUR-06", theme: "SUR",
  titre: "Réagir face à un braquage ou vol à main armée",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Commerces, bijouteries, pharmacies, banques, stations-service",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "resto"],
  resume: "Adopter les comportements qui protègent la vie du personnel pendant et après un braquage, et faciliter le travail des enquêteurs.",
  objectifs: [
    "Adopter les comportements de protection pendant les faits",
    "Préserver les éléments utiles à l'enquête",
    "Gérer l'après-événement : alerte, témoignages, soutien"
  ],
  programme: [
    "Prévention situationnelle du point de vente",
    "Pendant les faits : les comportements qui protègent",
    "Après les faits : gel des lieux, alerte, préservation des indices",
    "Le témoignage : mémoriser et décrire",
    "Accompagnement psychologique des victimes"
  ],
  fiche: "", image: ""
},
{
  id: "cambriolage", code: "SUR-07", theme: "SUR",
  titre: "Prévention des cambriolages et intrusions",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Commerces, entreprises, professions libérales",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Réduire la vulnérabilité de vos locaux face aux cambriolages : diagnostic, protections mécaniques et électroniques, bons réflexes.",
  objectifs: [
    "Évaluer la vulnérabilité de ses locaux",
    "Hiérarchiser les mesures de protection mécaniques et électroniques",
    "Adopter les bons réflexes en cas d'intrusion ou de découverte"
  ],
  programme: [
    "Modes opératoires des cambrioleurs : ce que révèlent les enquêtes",
    "Diagnostic de vulnérabilité du bâtiment",
    "Protections mécaniques, électroniques et organisationnelles",
    "Conduite à tenir en cas de découverte d'un cambriolage",
    "Le dépôt de plainte et les éléments utiles à l'enquête"
  ],
  fiche: "", image: ""
},
{
  id: "malveillance", code: "SUR-08", theme: "SUR",
  titre: "Prévention de la malveillance en entreprise",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Dirigeants, responsables de site, personnels d'accueil",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Panorama des actes de malveillance visant l'entreprise — vol interne, dégradations, ingérence — et mesures de prévention adaptées.",
  objectifs: [
    "Identifier les principales formes de malveillance visant l'entreprise",
    "Mettre en place des mesures de prévention proportionnées",
    "Réagir de façon adaptée à un acte de malveillance avéré"
  ],
  programme: [
    "Typologie des actes de malveillance : interne et externe",
    "Contrôle d'accès, gestion des clés, protection de l'information",
    "Signaux d'alerte et remontée d'information",
    "Réaction à l'incident et judiciarisation",
    "Étude de cas adaptée au secteur des participants"
  ],
  fiche: "", image: ""
},
{
  id: "securite-luxe", code: "SUR-09", theme: "SUR",
  titre: "Sûreté des commerces et enseignes de luxe",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Boutiques de luxe, bijouteries, horlogeries, galeries",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Prévention du vol à l'étalage organisé, du vol au rendez-vous et des attaques ciblant les enseignes haut de gamme.",
  objectifs: [
    "Identifier les modes opératoires visant le secteur du luxe",
    "Structurer l'accueil et les process de présentation des produits",
    "Réagir face au vol, à la tentative d'escroquerie ou à l'attaque"
  ],
  programme: [
    "Modes opératoires spécifiques : équipes organisées, repérages, escroqueries",
    "Process de sûreté : accueil, sas, présentation produit, coffres",
    "Détection des comportements de repérage",
    "Conduite à tenir en cas de vol ou d'attaque",
    "Coordination avec les forces de l'ordre et la télésurveillance"
  ],
  fiche: "", image: ""
},
{
  id: "securisation-evenements", code: "SUR-10", theme: "SUR",
  titre: "Sécurisation d'événements et rassemblements",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Organisateurs d'événements, collectivités, associations",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Concevoir le dispositif de sécurité d'un événement : analyse de risques, dimensionnement, coordination avec les secours et forces de l'ordre.",
  objectifs: [
    "Analyser les risques d'un événement et dimensionner le dispositif",
    "Organiser les flux, les accès et le poste de secours",
    "Coordonner le dispositif avec les autorités et les secours"
  ],
  programme: [
    "Cadre réglementaire des rassemblements et déclarations préalables",
    "Analyse de risques : affluence, site, contexte",
    "Gestion des flux, filtrage, périmètres de sécurité",
    "Dimensionnement des secours et du dispositif de sûreté",
    "Coordination avec mairie, préfecture, SDIS et forces de l'ordre"
  ],
  fiche: "", image: ""
},
{
  id: "audit-surete", code: "SUR-11", theme: "SUR",
  titre: "Audit sûreté de site",
  duree: "Sur devis", effectif: "—",
  public: "Entreprises, commerces, collectivités, établissements de santé",
  prerequis: "—",
  financement: "Prestation de conseil — devis personnalisé",
  certif: "Rapport d'audit avec plan d'action",
  secteurs: ["tous", "sante", "resto"],
  resume: "Diagnostic complet de la sûreté de votre site par des professionnels de la sécurité publique : vulnérabilités, préconisations hiérarchisées, plan d'action.",
  objectifs: [
    "Évaluer la vulnérabilité globale du site face à la malveillance",
    "Hiérarchiser les préconisations selon le rapport coût/efficacité",
    "Disposer d'un plan d'action opérationnel et budgétisé"
  ],
  programme: [
    "Visite technique complète du site et de ses abords",
    "Analyse des flux, des accès et des process existants",
    "Entretiens avec les personnels clés",
    "Rapport écrit : vulnérabilités constatées et préconisations",
    "Restitution et accompagnement à la mise en œuvre"
  ],
  fiche: "", image: ""
},
{
  id: "culture-securite", code: "SUR-12", theme: "SUR",
  titre: "Développer la culture sécurité en entreprise",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Managers, encadrants, référents sécurité",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Faire de la sécurité un réflexe partagé : management de la sécurité, remontée d'information, animation de causeries et rituels terrain.",
  objectifs: [
    "Comprendre les leviers d'une culture sécurité durable",
    "Animer des rituels sécurité efficaces : causeries, minutes sécurité",
    "Impliquer les équipes dans la remontée des situations dangereuses"
  ],
  programme: [
    "Les fondamentaux de la culture sécurité et les pièges à éviter",
    "Le rôle de l'encadrement : exemplarité et cohérence",
    "Animer une causerie sécurité : méthode et pratique",
    "Le traitement des remontées : presqu'accidents et situations dangereuses",
    "Construction d'un plan d'animation annuel"
  ],
  fiche: "", image: ""
},

/* ── PRÉVENTION & SANTÉ AU TRAVAIL ──────────────────────── */
{
  id: "gestes-postures", code: "PRE-01", theme: "PRE",
  titre: "Gestes et postures au travail",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Tout salarié effectuant des manutentions manuelles",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation (art. R4541-8 Code du travail)",
  secteurs: ["tous", "resto", "sante"],
  resume: "Réduire les risques d'accidents et de pathologies liés aux manutentions manuelles : principes de sécurité physique et d'économie d'effort.",
  objectifs: [
    "Identifier les risques liés à l'activité physique de son poste",
    "Appliquer les principes de sécurité physique et d'économie d'effort",
    "Proposer des améliorations de son poste de travail"
  ],
  programme: [
    "Statistiques AT/MP et enjeux pour l'entreprise",
    "Notions d'anatomie : colonne vertébrale et pathologies",
    "Principes de sécurité physique et d'économie d'effort",
    "Applications pratiques sur les charges du poste de travail",
    "Pistes d'aménagement des postes"
  ],
  fiche: "", image: ""
},
{
  id: "tms", code: "PRE-02", theme: "PRE",
  titre: "Prévention des TMS — Troubles Musculo-Squelettiques",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Salariés, encadrants, membres CSE",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante", "resto"],
  resume: "Comprendre les mécanismes d'apparition des TMS — première cause de maladie professionnelle — et agir sur les postes de travail.",
  objectifs: [
    "Comprendre les mécanismes d'apparition des TMS",
    "Repérer les facteurs de risque sur les postes de travail",
    "Participer à une démarche de prévention des TMS"
  ],
  programme: [
    "Les TMS : définitions, chiffres, enjeux humains et économiques",
    "Facteurs biomécaniques, organisationnels et psychosociaux",
    "Observation et analyse de situations de travail",
    "Pistes de prévention : technique, organisation, formation",
    "Échauffements et réveil musculaire en entreprise"
  ],
  support: "incendie-tms-sante.html",
  fiche: "", image: ""
},
{
  id: "rps", code: "PRE-03", theme: "PRE",
  titre: "Prévention des risques psychosociaux (RPS)",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Managers, RH, membres CSE, référents",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "Identifier les facteurs de RPS — stress, burn-out, harcèlement — et structurer une démarche de prévention conforme aux obligations de l'employeur.",
  objectifs: [
    "Identifier les facteurs de risques psychosociaux",
    "Repérer les signaux d'alerte individuels et collectifs",
    "Structurer une démarche de prévention des RPS"
  ],
  programme: [
    "Définitions : stress, burn-out, harcèlement, violences internes",
    "Cadre juridique et obligations de l'employeur",
    "Les six familles de facteurs de RPS (rapport Gollac)",
    "Repérage des signaux d'alerte et orientation",
    "Intégration des RPS au DUERP et plan d'action"
  ],
  fiche: "", image: ""
},
{
  id: "addictions", code: "PRE-04", theme: "PRE",
  titre: "Prévention des addictions en milieu professionnel",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Managers, RH, membres CSE, tout salarié",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Alcool, cannabis, médicaments, écrans : comprendre les conduites addictives et gérer les situations à risque dans le respect du droit.",
  objectifs: [
    "Comprendre les mécanismes des conduites addictives",
    "Connaître le cadre juridique applicable en entreprise",
    "Réagir face à une situation aiguë ou à une suspicion"
  ],
  programme: [
    "Substances et comportements : effets et risques professionnels",
    "Cadre juridique : règlement intérieur, dépistage, sanctions",
    "Gérer un salarié en état apparent d'ébriété ou sous emprise",
    "Orienter vers les acteurs de soin et de prévention",
    "Construire une démarche de prévention collective"
  ],
  fiche: "", image: ""
},
{
  id: "risque-routier", code: "PRE-05", theme: "PRE",
  titre: "Risque routier professionnel et accidents de trajet",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Salariés itinérants, conducteurs VL, tout salarié",
  prerequis: "Permis B",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Le risque routier est la première cause d'accident mortel au travail : agir sur les comportements, l'organisation des déplacements et le véhicule.",
  objectifs: [
    "Prendre conscience des enjeux du risque routier professionnel",
    "Identifier les facteurs de risque : vitesse, distracteurs, fatigue",
    "Adopter une conduite préventive et organiser ses déplacements"
  ],
  programme: [
    "Accidentalité routière professionnelle : mission et trajet",
    "Facteurs de risque : téléphone, vitesse, fatigue, substances",
    "La conduite préventive : anticipation et distances",
    "Organisation des déplacements et politique de l'entreprise",
    "Constat, alerte et protection en cas d'accident"
  ],
  fiche: "", image: ""
},
{
  id: "travail-nuit", code: "PRE-06", theme: "PRE",
  titre: "Travail de nuit et travail posté : préserver sa santé",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Salariés en horaires décalés, de nuit ou en 3x8",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "sante"],
  resume: "Limiter les effets du travail en horaires atypiques sur la santé : sommeil, alimentation, vigilance, vie sociale.",
  objectifs: [
    "Comprendre les effets du travail de nuit sur l'organisme",
    "Adopter des stratégies de sommeil et d'alimentation adaptées",
    "Maintenir sa vigilance pendant le poste"
  ],
  programme: [
    "Chronobiologie : rythmes circadiens et dette de sommeil",
    "Effets sur la santé : risques avérés et surveillance médicale",
    "Stratégies de sommeil : siestes, environnement, récupération",
    "Alimentation et hydratation en horaires décalés",
    "Vigilance au poste et sécurité du trajet retour"
  ],
  fiche: "", image: ""
},
{
  id: "sommeil-vigilance", code: "PRE-07", theme: "PRE",
  titre: "Sommeil, fatigue et vigilance au travail",
  duree: "3 h 30", effectif: "4 à 15 participants",
  public: "Tout salarié",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "La fatigue dégrade la sécurité et la performance : comprendre son sommeil et retrouver une vigilance durable.",
  objectifs: [
    "Comprendre les mécanismes du sommeil et de la vigilance",
    "Identifier ses propres facteurs de dette de sommeil",
    "Mettre en place des habitudes favorables à la récupération"
  ],
  programme: [
    "Le sommeil : cycles, besoins, idées reçues",
    "Fatigue et risques : erreurs, accidents, santé",
    "Hygiène de sommeil : écrans, café, environnement",
    "Micro-siestes et stratégies de récupération",
    "Auto-évaluation et plan d'action personnel"
  ],
  fiche: "", image: ""
},
{
  id: "nutrition", code: "PRE-08", theme: "PRE",
  titre: "Nutrition et santé au travail",
  duree: "3 h 30", effectif: "4 à 15 participants",
  public: "Tout salarié",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Alimentation, énergie et performance au travail : des repères simples et applicables, sans dogme ni régime.",
  objectifs: [
    "Comprendre les liens entre alimentation, énergie et vigilance",
    "Adapter son alimentation à ses horaires et contraintes de travail",
    "Repérer les pièges : grignotage, boissons énergisantes, sauts de repas"
  ],
  programme: [
    "Les fondamentaux d'une alimentation équilibrée",
    "Alimentation et vigilance : le coup de barre expliqué",
    "Manger en horaires décalés ou en déplacement",
    "Hydratation et boissons : repères pratiques",
    "Construire ses menus types de journée de travail"
  ],
  fiche: "", image: ""
},
{
  id: "hygiene-numerique", code: "PRE-09", theme: "PRE",
  titre: "Hygiène numérique et prévention de l'hyperconnexion",
  duree: "3 h 30", effectif: "4 à 15 participants",
  public: "Tout salarié, managers, télétravailleurs",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous"],
  resume: "Réduire la charge mentale numérique : notifications, sollicitations permanentes, droit à la déconnexion.",
  objectifs: [
    "Mesurer l'impact de l'hyperconnexion sur la santé et la concentration",
    "Mettre en place des pratiques numériques plus saines",
    "Connaître le cadre du droit à la déconnexion"
  ],
  programme: [
    "Hyperconnexion : mécanismes attentionnels et effets sur la santé",
    "Auto-diagnostic de ses usages numériques",
    "Organiser ses outils : notifications, messageries, réunions",
    "Le droit à la déconnexion en pratique",
    "Plan d'action individuel et collectif"
  ],
  fiche: "", image: ""
},
{
  id: "fortes-chaleurs", code: "PRE-10", theme: "PRE",
  titre: "Travail par fortes chaleurs : prévenir les risques",
  duree: "2 h", effectif: "4 à 15 participants",
  public: "Salariés exposés : BTP, extérieur, cuisines, ateliers",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["tous", "resto"],
  resume: "Prévenir le coup de chaleur et adapter l'organisation du travail lors des épisodes de canicule, conformément aux obligations renforcées de l'employeur.",
  objectifs: [
    "Identifier les risques liés au travail par fortes chaleurs",
    "Reconnaître les signes d'alerte du coup de chaleur",
    "Appliquer les mesures de prévention individuelles et collectives"
  ],
  programme: [
    "Effets de la chaleur sur l'organisme au travail",
    "Signes d'alerte : épuisement, coup de chaleur — conduite à tenir",
    "Hydratation, tenues, rythme de travail",
    "Obligations de l'employeur et plan canicule",
    "Premiers secours face à un coup de chaleur"
  ],
  fiche: "", image: ""
},
{
  id: "duerp", code: "PRE-11", theme: "PRE",
  titre: "Élaborer et mettre à jour son DUERP",
  duree: "7 h (1 jour)", effectif: "2 à 8 stagiaires",
  public: "Dirigeants TPE/PME, RH, référents sécurité",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation + trame DUERP fournie",
  secteurs: ["tous", "resto", "sante"],
  resume: "Construire un Document Unique d'Évaluation des Risques Professionnels conforme, exploitable et réellement utile à la prévention.",
  objectifs: [
    "Maîtriser les obligations légales liées au DUERP",
    "Évaluer méthodiquement les risques de chaque unité de travail",
    "Bâtir le plan d'action de prévention et organiser la mise à jour"
  ],
  programme: [
    "Cadre réglementaire : contenu, mise à jour, conservation 40 ans",
    "Découpage en unités de travail",
    "Méthode d'évaluation : identification, cotation, hiérarchisation",
    "Du DUERP au plan d'action de prévention",
    "Atelier pratique sur les situations réelles des participants"
  ],
  fiche: "", image: ""
},

/* ── HABILITATIONS ÉLECTRIQUES ──────────────────────────── */
{
  id: "h0b0", code: "ELE-01", theme: "ELE",
  titre: "Habilitation électrique H0-B0 — Personnel non électricien",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Personnel non électricien travaillant à proximité d'installations électriques",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Avis après formation — titre d'habilitation délivré par l'employeur",
  secteurs: ["tous"],
  resume: "Permettre au personnel non électricien d'accéder en sécurité aux locaux et environnements électriques, conformément à la norme NF C 18-510.",
  objectifs: [
    "Connaître les dangers du courant électrique",
    "Identifier les zones d'environnement et leurs limites",
    "Adopter les comportements adaptés aux opérations d'ordre non électrique"
  ],
  programme: [
    "Grandeurs électriques et effets du courant sur le corps humain",
    "Zones d'environnement et niveaux d'habilitation",
    "Rôles et limites du H0-B0 : travaux d'ordre non électrique",
    "Conduite à tenir en cas d'accident ou d'incendie électrique",
    "Évaluation théorique et pratique selon NF C 18-510"
  ],
  fiche: "", image: ""
},
{
  id: "be-bs", code: "ELE-02", theme: "ELE",
  titre: "Habilitation électrique BE Manœuvre / BS — Interventions simples",
  duree: "14 h (2 jours)", effectif: "4 à 8 stagiaires",
  public: "Personnel réalisant des manœuvres ou interventions de remplacement et raccordement simples",
  prerequis: "Connaissances de base en électricité",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Avis après formation — titre d'habilitation délivré par l'employeur",
  secteurs: ["tous"],
  resume: "Former le personnel aux manœuvres d'exploitation et aux interventions élémentaires en basse tension, selon la norme NF C 18-510.",
  objectifs: [
    "Réaliser en sécurité des manœuvres d'exploitation (BE Manœuvre)",
    "Effectuer des interventions de remplacement et raccordement simples (BS)",
    "Appliquer les procédures de mise en sécurité"
  ],
  programme: [
    "Rappels : dangers du courant, zones d'environnement",
    "Limites des habilitations BE Manœuvre et BS",
    "Mise hors tension, VAT, condamnation",
    "Remplacement de fusibles, lampes, prises et raccordements simples",
    "Travaux pratiques et évaluation selon NF C 18-510"
  ],
  fiche: "", image: ""
},

/* ── RESTAURATION & HYGIÈNE ─────────────────────────────── */
{
  id: "hygiene-alimentaire", code: "HYG-01", theme: "HYG",
  titre: "Hygiène alimentaire en restauration commerciale",
  duree: "14 h (2 jours)", effectif: "4 à 12 stagiaires",
  public: "Restaurants, restauration rapide, traiteurs, food-trucks — formation obligatoire (décret 2011-731)",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation spécifique en hygiène alimentaire (enregistrement DRAAF/ROFHYA visé)",
  secteurs: ["resto"],
  resume: "La formation réglementaire obligatoire pour tout établissement de restauration commerciale : au moins une personne formée par établissement.",
  objectifs: [
    "Identifier les grands principes de la réglementation en hygiène alimentaire",
    "Analyser les risques de contamination et mettre en œuvre les mesures de maîtrise",
    "Organiser production et stockage dans le respect du Paquet Hygiène"
  ],
  programme: [
    "Dangers microbiologiques, chimiques, physiques et allergènes",
    "Le Paquet Hygiène et les contrôles officiels (DDPP)",
    "Le Plan de Maîtrise Sanitaire : BPH, HACCP, traçabilité",
    "Températures, chaîne du froid et du chaud, DLC/DDM",
    "Nettoyage-désinfection et gestion des non-conformités",
    "Mises en pratique sur les process des participants"
  ],
  fiche: "", image: ""
},
{
  id: "haccp", code: "HYG-02", theme: "HYG",
  titre: "HACCP — Méthode et Plan de Maîtrise Sanitaire",
  duree: "14 h (2 jours)", effectif: "4 à 10 stagiaires",
  public: "Responsables de cuisine, chefs, gérants, responsables qualité",
  prerequis: "Expérience en production alimentaire recommandée",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["resto", "sante"],
  resume: "Construire et faire vivre le Plan de Maîtrise Sanitaire de votre établissement : la méthode HACCP appliquée pas à pas à vos process.",
  objectifs: [
    "Maîtriser les 7 principes et les 12 étapes de la méthode HACCP",
    "Identifier les CCP de ses propres process de fabrication",
    "Construire un Plan de Maîtrise Sanitaire documenté et auditable"
  ],
  programme: [
    "Le cadre : Paquet Hygiène et obligations documentaires",
    "Les 7 principes de l'HACCP et l'analyse des dangers",
    "Diagrammes de fabrication et détermination des CCP",
    "Limites critiques, surveillance et actions correctives",
    "Traçabilité, gestion des alertes et retrait-rappel",
    "Construction du PMS à partir des documents des participants"
  ],
  fiche: "", image: ""
},
{
  id: "incendie-cuisine", code: "HYG-03", theme: "HYG",
  titre: "Sécurité incendie en cuisine professionnelle",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Personnels de cuisine, restauration commerciale et collective",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["resto", "sante"],
  resume: "Feux d'huile, friteuses, hottes : les risques incendie propres aux cuisines et les gestes d'extinction adaptés, sur feux réels.",
  objectifs: [
    "Identifier les risques incendie spécifiques aux cuisines professionnelles",
    "Réagir face à un feu d'huile ou de friteuse sans l'aggraver",
    "Utiliser les moyens d'extinction adaptés : couverture anti-feu, extincteurs"
  ],
  programme: [
    "Les causes d'incendie en cuisine : huiles, hottes, gaz, électricité",
    "Ce qu'il ne faut jamais faire : eau sur feu d'huile",
    "Couverture anti-feu et extincteurs adaptés : pratique sur feu réel",
    "Coupures d'urgence gaz et électricité",
    "Évacuation d'une cuisine et alerte des secours"
  ],
  fiche: "", image: ""
},
{
  id: "ps-cuisine", code: "HYG-04", theme: "HYG",
  titre: "Premiers secours en cuisine — brûlures, coupures, urgences",
  duree: "3 h 30", effectif: "4 à 12 stagiaires",
  public: "Personnels de cuisine et de salle",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["resto"],
  resume: "Les accidents les plus fréquents en restauration — brûlures, coupures, chutes, étouffement d'un client — et les gestes qui limitent les séquelles.",
  objectifs: [
    "Prendre en charge une brûlure thermique ou chimique",
    "Réagir face à une coupure grave ou une hémorragie",
    "Porter secours à un client qui s'étouffe ou fait un malaise"
  ],
  programme: [
    "Brûlures : refroidissement, protection, critères de gravité",
    "Coupures et hémorragies : compression et alerte",
    "Étouffement d'un adulte : désobstruction",
    "Malaise et arrêt cardiaque en salle : RCP et DAE",
    "Trousse de secours de l'établissement"
  ],
  fiche: "", image: ""
},

/* ── SANTÉ & MÉDICO-SOCIAL (spécialité) ─────────────────── */
{
  id: "manutention-patients", code: "SAN-01", theme: "SAN",
  titre: "Gestes et postures en milieu de soins — manutention des personnes",
  duree: "14 h (2 jours)", effectif: "4 à 8 stagiaires",
  public: "Aides-soignants, AES, ASH, infirmiers, auxiliaires de vie — EHPAD, cliniques, SSIAD, domicile",
  prerequis: "Aucun",
  financement: "OPCO Santé · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "Manutention des patients et résidents : protéger le dos des soignants tout en préservant l'autonomie et la dignité de la personne aidée.",
  objectifs: [
    "Appliquer les principes de manutention adaptés aux personnes dépendantes",
    "Utiliser les aides techniques : lève-personne, verticalisateur, draps de glisse",
    "Préserver l'autonomie et la dignité de la personne mobilisée"
  ],
  programme: [
    "TMS dans le secteur du soin : premières causes d'arrêt et d'inaptitude",
    "Principes de manutention des personnes : rehaussements, transferts, relevés",
    "Aides techniques : lève-personne, verticalisateur, matériel de glisse",
    "Stimuler les capacités restantes de la personne aidée",
    "Pratique intensive sur les situations réelles du service",
    "Relevage d'une personne au sol"
  ],
  fiche: "", image: ""
},
{
  id: "chutes-personnes-agees", code: "SAN-02", theme: "SAN",
  titre: "Prévention des chutes de la personne âgée",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Personnels d'EHPAD, résidences autonomie, SSIAD, aide à domicile",
  prerequis: "Aucun",
  financement: "OPCO Santé · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "Réduire l'incidence et la gravité des chutes en établissement : repérage des facteurs de risque, aménagement, conduite à tenir après la chute.",
  objectifs: [
    "Identifier les facteurs de risque de chute chez la personne âgée",
    "Mettre en place des actions de prévention individuelles et collectives",
    "Adopter la bonne conduite après une chute : évaluation, relevage, traçabilité"
  ],
  programme: [
    "Épidémiologie des chutes en établissement et à domicile",
    "Facteurs de risque : médicaments, environnement, chaussage, pathologies",
    "Aménagement des chambres et espaces de circulation",
    "Après la chute : évaluation, alerte, techniques de relevage",
    "Traçabilité et analyse des chutes en équipe"
  ],
  fiche: "", image: ""
},
{
  id: "incendie-etablissement-sante", code: "SAN-03", theme: "SAN",
  titre: "Sécurité incendie en établissement de santé et médico-social",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Tous personnels d'EHPAD, cliniques, hôpitaux, foyers (ERP types U et J)",
  prerequis: "Aucun",
  financement: "OPCO Santé · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "La spécificité des ERP types U et J : des résidents non autonomes qu'on n'évacue pas comme un bureau. Transfert horizontal, compartimentage et rôle de chacun.",
  objectifs: [
    "Comprendre la stratégie incendie propre aux établissements de soins",
    "Mettre en œuvre le transfert horizontal et l'évacuation différée",
    "Utiliser les moyens de première intervention en présence de résidents"
  ],
  programme: [
    "Réglementation ERP types U et J : compartimentage, dégagements",
    "La stratégie : transfert horizontal avant évacuation verticale",
    "Le rôle du personnel de nuit : effectifs réduits, priorités",
    "Manipulation extincteurs et RIA en zone de soins",
    "Exercice de transfert de résidents avec matériel de l'établissement",
    "Lecture du SSI et levée de doute"
  ],
  support: "incendie-tms-sante.html",
  fiche: "", image: ""
},
{
  id: "agressivite-soins", code: "SAN-04", theme: "SAN",
  titre: "Gestion de l'agressivité et des troubles du comportement en milieu de soins",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Soignants, personnels d'accueil et administratifs des établissements de santé",
  prerequis: "Aucun",
  financement: "OPCO Santé · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "Agressivité des patients, des résidents ou des familles : désamorcer sans rompre la relation de soin, avec des formateurs rompus à la gestion de crise.",
  objectifs: [
    "Comprendre les causes de l'agressivité en contexte de soin",
    "Désamorcer une situation de tension avec un patient, un résident ou une famille",
    "Se protéger et protéger les autres patients en cas de crise"
  ],
  programme: [
    "Agressivité et pathologies : troubles cognitifs, douleur, anxiété",
    "L'agressivité des familles : attentes, deuil, incompréhensions",
    "Communication apaisante et positionnement physique sécurisé",
    "Gestion d'une crise aiguë : protection, renfort, alerte",
    "Le signalement des violences et le soutien aux équipes",
    "Mises en situation adaptées au service"
  ],
  fiche: "", image: ""
},
{
  id: "urgences-medico-social", code: "SAN-05", theme: "SAN",
  titre: "Prise en charge des urgences vitales en établissement médico-social",
  duree: "7 h (1 jour)", effectif: "4 à 10 stagiaires",
  public: "Personnels soignants et non soignants d'EHPAD et structures médico-sociales",
  prerequis: "Aucun",
  financement: "OPCO Santé · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "Les premières minutes avant l'arrivée du SAMU : reconnaître l'urgence vitale chez la personne âgée et agir avec les moyens de l'établissement.",
  objectifs: [
    "Reconnaître une urgence vitale chez la personne âgée",
    "Réaliser les gestes d'urgence adaptés en attendant les secours",
    "Transmettre un bilan structuré au centre 15"
  ],
  programme: [
    "Spécificités de l'urgence gériatrique : présentations atypiques",
    "Étouffement au moment du repas : désobstruction adaptée",
    "Malaise, AVC, détresse respiratoire : reconnaissance et alerte",
    "Arrêt cardiaque : RCP et DAE chez la personne âgée",
    "Le bilan au 15 : méthode et informations attendues",
    "Chariot d'urgence et organisation interne"
  ],
  fiche: "", image: ""
},
{
  id: "bientraitance", code: "SAN-06", theme: "SAN",
  titre: "Bientraitance et protection des publics vulnérables",
  duree: "7 h (1 jour)", effectif: "4 à 12 stagiaires",
  public: "Tous personnels au contact de publics vulnérables : soin, médico-social, périscolaire",
  prerequis: "Aucun",
  financement: "OPCO · Plan de développement des compétences",
  certif: "Attestation de formation",
  secteurs: ["sante"],
  resume: "Prévenir la maltraitance et promouvoir la bientraitance : repérage des signaux, obligations de signalement, culture d'équipe.",
  objectifs: [
    "Distinguer maltraitance, négligence et douce violence",
    "Repérer les signaux d'alerte chez la personne vulnérable",
    "Connaître les obligations de signalement et les circuits d'alerte"
  ],
  programme: [
    "Définitions : bientraitance, maltraitance, négligences, douces violences",
    "Le cadre légal : obligations de signalement, protection des lanceurs d'alerte",
    "Repérage des signaux physiques, comportementaux et environnementaux",
    "Les circuits : direction, ARS, procureur, 3977",
    "Analyse de situations et prévention en équipe"
  ],
  fiche: "", image: ""
}
];
