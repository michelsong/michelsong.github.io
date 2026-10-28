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
  "welcome.cardEngineeringKicker": "01 / Apprendre & créer",
  "welcome.cardEngineering": "Compétences, projets de formation et réalisations sélectionnées.",
  "welcome.cardMobilityKicker": "02 / Langues & échanges",
  "welcome.cardMobility": "Destinations possibles, langues et expériences internationales.",
  "welcome.cardSustainabilityKicker": "03 / Engagement",
  "welcome.cardSustainability": "Initiatives, bénévolat et engagement dans la communauté.",
  "welcome.cardActivitiesKicker": "04 / En dehors des cours",
  "welcome.cardActivities": "Activités, centres d'intérêt et engagements personnels.",
  "welcome.cardCareerKicker": "05 / Parcours professionnel",
  "welcome.cardCareer": "Stages et autres expériences professionnelles.",
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
  "engineering.productionsTab": "Meilleures réalisations",
  "engineering.kickerSkills": "Compétences",
  "engineering.technicalTitle": "Compétences techniques",
  "engineering.technicalText": "Présentez les outils, méthodes et technologies appris en formation, avec des exemples de leur mise en pratique.",
  "engineering.strengthsTitle": "Atouts personnels",
  "engineering.strengthsText": "Mettez en avant votre résolution de problèmes, votre esprit d'équipe, votre communication ou d'autres atouts, avec des exemples concrets.",
  "engineering.projectPlaceholderKicker": "Projet / Ajouter l'année",
  "engineering.projectTitle": "Ajouter un projet de formation",
  "engineering.projectText": "Présentez le défi, votre contribution, les outils utilisés et le résultat. Ajoutez des images ou un lien vers un rapport si possible.",
  "engineering.project2Title": "Ajouter un autre projet",
  "engineering.project2Text": "Présentez aussi bien la démarche que le résultat : objectifs, choix importants, collaboration et enseignements tirés.",
  "engineering.productionPlaceholderKicker": "Réalisation / Ajouter l'année",
  "engineering.productionTitle": "Ajouter une réalisation marquante",
  "engineering.productionText": "Mettez en avant un rapport, un prototype, une présentation, une étude technique ou un autre travail dont vous êtes particulièrement fier.",
  "engineering.production2Title": "Ajouter une autre réalisation",
  "engineering.production2Text": "Ajoutez le contexte, votre rôle et un lien ou un visuel pour permettre aux visiteurs de découvrir le travail.",
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
  "sustainability.kicker": "Développement durable",
  "sustainability.environmentTitle": "Initiatives environnementales",
  "sustainability.environmentText": "Ajoutez des projets ou actions liés au développement durable. Expliquez l'enjeu, votre rôle et l'impact ou les enseignements tirés.",
  "sustainability.civicKicker": "Engagement citoyen",
  "sustainability.civicTitle": "Engagement dans la communauté",
  "sustainability.civicText": "Présentez votre bénévolat, vos associations ou vos projets citoyens, ainsi que vos responsabilités et votre contribution.",
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
