const surveyLinks = {
  zh: "https://cambridge.eu.qualtrics.com/jfe/form/SV_6Ybm7C31C3y4hbo",
  nl: "https://cambridge.eu.qualtrics.com/jfe/form/SV_bpkWY0yNbI6tU6q",
  en: "https://cambridge.eu.qualtrics.com/jfe/form/SV_3gc1hHhFfpXSI7A",
  fr: "https://cambridge.eu.qualtrics.com/jfe/form/SV_dfXOrvctE0k1KKi",
  ar: "https://cambridge.eu.qualtrics.com/jfe/form/SV_e9fF5ghA4t9W0qW"
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
