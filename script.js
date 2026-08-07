const surveyLinks = {
  zh: "https://cambridge.eu.qualtrics.com/jfe/form/SV_9FEBMduBCgDWP0W",
  nl: "https://cambridge.eu.qualtrics.com/jfe/form/SV_5pXuIlkvJmiRT9A",
  en: "https://cambridge.eu.qualtrics.com/jfe/form/SV_cAWycnadcuCxghM",
  fr: "https://cambridge.eu.qualtrics.com/jfe/form/SV_0ibOQg6cNr94Wmq",
  ar: "https://cambridge.eu.qualtrics.com/jfe/form/SV_ewFH4QBg074KxpA"
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
