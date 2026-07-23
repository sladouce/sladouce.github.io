const surveyLinks = {
  ar: "[INSERT_SURVEY_LINK_ARABIC]",
  zh: "[INSERT_SURVEY_LINK_CHINESE]",
  nl: "[INSERT_SURVEY_LINK_DUTCH]",
  en: "[INSERT_SURVEY_LINK_EN]",
  fr: "[INSERT_SURVEY_LINK_FR]",
  de: "[INSERT_SURVEY_LINK_GERMAN]",
  ary: "[INSERT_SURVEY_LINK_MOROCCAN]",
  es: "[INSERT_SURVEY_LINK_SPANISH]"
};

const surveyLanguageSelects = document.querySelectorAll(".survey-language");

surveyLanguageSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    const surveyLink = surveyLinks[event.target.value];

    if (surveyLink) {
      window.location.href = surveyLink;
    }
  });
});
