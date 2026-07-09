const surveyLinks = {
  fr: "[INSERT_SURVEY_LINK_FR]",
  zh: "[INSERT_SURVEY_LINK_CHINESE]",
  nl: "[INSERT_SURVEY_LINK_DUTCH]",
  es: "[INSERT_SURVEY_LINK_SPANISH]",
  de: "[INSERT_SURVEY_LINK_GERMAN]"
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
