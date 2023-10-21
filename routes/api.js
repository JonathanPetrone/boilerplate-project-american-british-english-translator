"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let translatedText = "";
    const { text, locale } = req.body;
    if (!locale || text == undefined) {
      res.json({ error: "Required field(s) missing" });
      return;
    }
    if (text == "") {
      res.json({ error: "No text to translate" });
      return;
    }
    
    if (locale == "american-to-british") {
      translatedText= translator.toBritishEnglish(text);
    } else if (locale == "british-to-american") {
      translatedText = translator.toAmericanEnglish(text);
    } else {
      res.json({ error: "Invalid value for locale field" });
      return;
    }
    if (translatedText == text || !translatedText) {
      res.json({ text, translation: "Everything looks good to me!" });
    } else {
      res.json({ text, translation: translatedText[1] });
    }
  });
};
