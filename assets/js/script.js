'use strict';

const frenchTranslations = {
  "sidebar.title": "Portfolio d'ingénieur",
  "sidebar.overview": "Présentation du portfolio",
  "sidebar.summary": "Bienvenue dans mon espace numérique. Je suis Michel Idiaquez Song, élève-ingénieur spécialisé en Sciences du Numérique (SN) à l'ENSEEIHT, à Toulouse.",
  "language.label": "Langue",
  "nav.welcome": "Accueil",
  "nav.engineering": "Formation d'ingénieur",
  "nav.mobility": "Mobilité internationale",
  "nav.sustainability": "Développement durable & engagement citoyen",
  "nav.activities": "Sport & autres activités",
  "nav.career": "Projet professionnel",
  "welcome.title": "Bienvenue",
  "welcome.aboutTitle": "À propos de moi",
  "welcome.profileLabel": "À propos de Michel",
  "welcome.avatarAlt": "Portrait illustré de Michel Idiaquez Song",
  "welcome.kicker": "Élève-ingénieur · ENSEEIHT",
  "welcome.bio": "Je suis élève-ingénieur à l'ENSEEIHT (SN — Sciences du Numérique), après une formation en PCSI. Je suis passionné par le génie logiciel, la recherche en intelligence artificielle (LLM et modèles RAG) et le montage de PC sur mesure. En dehors des écrans, vous me trouverez généralement sur un terrain de sport, à découvrir de nouvelles musiques ou à regarder les dernières sorties cinéma.",
  "welcome.linkedin": "Me retrouver sur LinkedIn",
  "welcome.cv": "Télécharger mon CV",
  "welcome.projectsTitle": "Projets en cours",
  "welcome.inProgress": "En cours",
  "welcome.comingSoon": "Bientôt...",
  "welcome.projectsPlaceholder": "Les détails des projets seront ajoutés prochainement.",
  "welcome.sectionsTitle": "Découvrir mon portfolio",
  "welcome.sectionsLabel": "Sections du portfolio",
  "welcome.videoTitle": "Présentation vidéo",
  "welcome.videoLabel": "Vidéo de présentation",
  "welcome.cardEngineeringKicker": "01 / Apprendre & créer",
  "welcome.cardEngineering": "Compétences techniques et comportementales, ainsi qu'un projet d'équipe de cartographie de la pollution marine avec un drone autonome.",
  "welcome.cardMobilityKicker": "02 / Langues & échanges",
  "welcome.cardMobility": "Un projet d'études en Corée du Sud et mes langues avec leurs niveaux de maîtrise.",
  "welcome.cardSustainabilityKicker": "03 / Engagement",
  "welcome.cardSustainability": "Du bénévolat en rééducation pédiatrique et un atelier de sensibilisation au harcèlement et aux violences sexistes et sexuelles.",
  "welcome.cardActivitiesKicker": "04 / En dehors des cours",
  "welcome.cardActivities": "Volley-ball, taekwondo, baseball et loisirs en dehors des cours.",
  "welcome.cardCareerKicker": "05 / Parcours professionnel",
  "welcome.cardCareer": "Recherche sur les modèles RAG, les LLM et le choix social computationnel, ainsi qu'une expérience d'interprétation.",
  "interests.dj": "DJing & mixage audio",
  "interests.pc": "Montage de PC sur mesure",
  "interests.cinema": "Cinéma",
  "interests.skiing": "Ski",
  "interests.weightlifting": "Musculation",
  "interests.pokemon": "Collection de cartes Pokémon",
  "interests.games": "Jeux vidéo",
  "interests.editing": "Montage vidéo",
  "interests.coffee": "Dégustation de café",
  "interests.travel": "Voyages",
  "interests.f1": "Formule 1",
  "engineering.tabsLabel": "Rubriques de la formation d'ingénieur",
  "engineering.skillsTab": "Compétences",
  "engineering.projectsTab": "Projets",
  "engineering.languagesTitle": "Langages",
  "engineering.dataProcessingTitle": "Traitement des données",
  "engineering.toolsTitle": "Outils",
  "engineering.softSkillsTitle": "Compétences comportementales",
  "engineering.problemSolving": "Résolution de problèmes",
  "engineering.teamwork": "Travail d'équipe",
  "engineering.communication": "Communication",
  "engineering.adaptability": "Adaptabilité",
  "engineering.projectPlaceholderKicker": "Bientôt",
  "engineering.projectImageLabel": "Emplacement pour l'image du projet",
  "engineering.projectImagePlaceholder": "La photo du projet sera ajoutée ici",
  "engineering.droneProjectKicker": "Projet d'ingénierie en équipe / 2026",
  "engineering.droneProjectTitle": "Drone autonome pour la cartographie de la pollution marine",
  "engineering.droneProjectText": "Développement d'un prototype de drone autonome capable de détecter et de cartographier la pollution marine. Intégration d'un capteur infrarouge LiDAR TF-Luna utilisant le principe du temps de vol (ToF) pour détecter les irrégularités de la surface de l'eau, ainsi que de deux capteurs ultrasoniques HC-SR04 pour le positionnement spatial en 2D. Gestion de la collecte des données matérielles via un microcontrôleur Arduino. Traitement des données télémétriques en Python, avec mise en œuvre d'un filtre de Kalman pour lisser le bruit des capteurs et génération en temps réel d'une carte quadrillée 2D des déchets détectés à l'aide de Tkinter.",
  "engineering.project2Title": "Bientôt...",
  "engineering.project2Text": "D'autres projets seront bientôt ajoutés ici.",
  "mobility.tabsLabel": "Rubriques de mobilité internationale",
  "common.otherExperiences": "Autres expériences",
  "mobility.destinationsTab": "Destinations possibles",
  "mobility.korea": "Corée",
  "mobility.koreaDescription": "Pour maîtriser la langue, découvrir la culture et poursuivre mes études dans un programme d'ingénierie de premier plan.",
  "mobility.languagesTab": "Langues",
  "mobility.native": "Langue maternelle",
  "mobility.b1Level": "Niveau B1",
  "mobility.studying": "En cours d’apprentissage",
  "languages.english": "Anglais",
  "languages.french": "Français",
  "languages.spanish": "Espagnol",
  "languages.portuguese": "Portugais",
  "languages.korean": "Coréen",
  "languages.chinese": "Chinois",
  "sustainability.volunteerKicker": "Bénévolat / 2024",
  "sustainability.volunteerTitle": "Bénévole en kinésithérapie pédiatrique",
  "sustainability.volunteerText": "J'ai assisté les kinésithérapeutes dans une clinique pédiatrique en accompagnant les enfants lors de leurs exercices et traitements de rééducation. J'ai contribué à créer un environnement encourageant et sûr afin d'aider les jeunes patients à développer leurs capacités motrices et leur confiance, tout en renforçant mes compétences en communication interpersonnelle et en adaptabilité.",
  "sustainability.awarenessKicker": "Sensibilisation / 2026",
  "sustainability.awarenessTitle": "« Le Procès de King Kong » — Atelier HVSS",
  "sustainability.awarenessText": "Participation à un atelier théâtral interactif consacré à l'identification et à la prévention du harcèlement et des violences sexistes et sexuelles (HVSS). Analyse de trois scénarios joués en direct afin de repérer les comportements inappropriés, suivie de discussions structurées avec un intervenant juridique sur les conséquences correspondantes.",
  "activities.intro": "Le sport et les loisirs qui témoignent de mes intérêts, de mon engagement et de ma vie en dehors des cours.",
  "activities.sportsTitle": "Sports",
  "activities.sportsTitle": "Sports",
  "activities.volleyballKicker": "Actuellement · Compétition",
  "activities.volleyballTitle": "Volley-ball interuniversitaire",
  "activities.volleyballText": "Je joue au poste de central dans des tournois interuniversitaires de volley-ball.",
  "activities.taekwondoKicker": "Arts martiaux",
  "activities.taekwondoTitle": "Ceinture noire 3e dan de taekwondo",
  "activities.taekwondoText": "J'ai obtenu ma ceinture noire 3e dan grâce à la discipline et à un entraînement assidu.",
  "activities.baseballKicker": "7 ans",
  "activities.baseballTitle": "Baseball",
  "activities.baseballText": "Sept ans d'expérience en équipe, avec une participation à des compétitions de niveau national.",
  "activities.otherKicker": "En dehors du terrain",
  "activities.interestsTitle": "Autres centres d'intérêt & loisirs",
  "career.tabsLabel": "Rubriques du projet professionnel",
  "career.internshipsTab": "Stages",
  "career.internshipKicker": "STAGE DE RECHERCHE / JUIN 2026 – JUILLET 2026",
  "career.internshipTitle": "Groupe de recherche LILaC (UT3 / ENSEEIHT)",
  "career.internshipText": "Recherche sur les modèles RAG, les LLMs et le choix social computationnel (prédiction des votes des groupes politiques de l'Assemblée nationale).",
  "career.otherKicker": "Autre expérience",
  "career.otherTitle": "Interprète",
  "career.otherText": "Interprète de l’anglais vers l’espagnol et du français vers l’espagnol, lors du COFFEE PRODUCERS ROASTERS FORUM EL SALVADOR."
};

const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAriaLabels = document.querySelectorAll("[data-i18n-aria]");
const translatableAltTexts = document.querySelectorAll("[data-i18n-alt]");
const cvDownloadLink = document.querySelector("[data-cv-download]");

const setLanguage = function (language) {
  const isFrench = language === "fr";

  document.documentElement.lang = language;
  cvDownloadLink.href = isFrench
    ? "./assets/files/CV_FR.pdf"
    : "./assets/files/CV_ENG.pdf";
  document.title = isFrench
    ? "Michel Idiaquez Song | Portfolio numérique"
    : "Michel Idiaquez Song | E-Portfolio";

  translatableElements.forEach(function (element) {
    if (isFrench) {
      const translation = frenchTranslations[element.dataset.i18n];
      if (translation) element.textContent = translation;
    } else {
      element.textContent = element.dataset.defaultText;
    }
  });

  translatableAriaLabels.forEach(function (element) {
    if (isFrench) {
      element.setAttribute("aria-label", frenchTranslations[element.dataset.i18nAria]);
    } else {
      element.setAttribute("aria-label", element.dataset.defaultAria);
    }
  });

  translatableAltTexts.forEach(function (element) {
    if (isFrench) {
      element.setAttribute("alt", frenchTranslations[element.dataset.i18nAlt]);
    } else {
      element.setAttribute("alt", element.dataset.defaultAlt);
    }
  });

  languageButtons.forEach(function (button) {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

translatableElements.forEach(function (element) {
  element.dataset.defaultText = element.textContent;
});

translatableAriaLabels.forEach(function (element) {
  element.dataset.defaultAria = element.getAttribute("aria-label");
});

translatableAltTexts.forEach(function (element) {
  element.dataset.defaultAlt = element.getAttribute("alt");
});

languageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(button.dataset.language);
  });
});

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

const pages = document.querySelectorAll("[data-page]");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const navbarLinks = document.querySelectorAll(".navbar [data-nav-link]");

const showPage = function (pageName) {
  pages.forEach(function (page) {
    page.classList.toggle("active", page.dataset.page === pageName);
  });

  navbarLinks.forEach(function (link) {
    const isActive = link.dataset.targetPage === pageName;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo(0, 0);
};

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    showPage(link.dataset.targetPage);
  });
});

document.querySelectorAll("[role='tablist']").forEach(function (tablist) {
  const tabs = Array.from(tablist.querySelectorAll("[data-subtab]"));
  const page = tablist.closest(".showcase-page");
  const panels = page.querySelectorAll("[data-subpanel]");

  const activateTab = function (tab) {
    const panelName = tab.dataset.subtab;

    tabs.forEach(function (item) {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach(function (panel) {
      const isActive = panel.dataset.subpanel === panelName;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  };

  tabs.forEach(function (tab, index) {
    tab.tabIndex = tab.classList.contains("active") ? 0 : -1;
    tab.addEventListener("click", function () {
      activateTab(tab);
    });

    tab.addEventListener("keydown", function (event) {
      let nextIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    });
  });
});
