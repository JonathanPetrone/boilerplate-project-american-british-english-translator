const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");


// this will do a reverse when translating from american to british english
const reverseDict = (obj) => {
  return Object.assign(
    {},
    ...Object.entries(obj).map(([k, v]) => ({ [v]: k }))
  );
};

class Translator {
  toBritishEnglish(text) {
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    const dict = { ...americanOnly, ...americanToBritishSpelling };
    const titles = americanToBritishTitles;
    const translated = this.translate(
      text,
      timeRegex,
      dict,
      titles,
      "toBritish"
    );
    if (!translated) {
      return text;
    }

    return translated;
  }
  toAmericanEnglish(text) {
    const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
    const dict = { ...britishOnly, ...reverseDict(americanToBritishSpelling) };
    const titles = reverseDict(americanToBritishTitles);
    const translated = this.translate(
      text,
      timeRegex,
      dict,
      titles,
      "toAmerican"
    );
    if (!translated) {
      return text;
    }
    return translated;
  }

  translate(text, timeRegex, dict, titles, locale) {
    const lowerText = text.toLowerCase();
    const matchesMap = {};

    Object.entries(titles).map(([k, v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v.charAt(0).toUpperCase() + v.slice(1);
      }
    });

    const wordsWithSpace = Object.fromEntries(
      Object.entries(dict).filter(([k, v]) => k.includes(" "))
    );

    Object.entries(wordsWithSpace).map(([k, v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v;
      }
    });

    lowerText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
      if (dict[word]) matchesMap[word] = dict[word];
    });

    const matchedTimes = lowerText.match(timeRegex);

    if (matchedTimes) {
      matchedTimes.map((e) => {
        if (locale === "toBritish") {
          return (matchesMap[e] = e.replace(":", "."));
        }
        return (matchesMap[e] = e.replace(".", ":"));
      });
    }

    // If we get no matches
    if (Object.keys(matchesMap).length === 0) {
        return null
    };

    const translation = this.replaceAll(text, matchesMap);

    const translationWithHighlight = this.replaceAllWithHighlight(
      text,
      matchesMap
    );

    return [translation, translationWithHighlight];
  }

  replaceAll(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => matchesMap[matched.toLowerCase()]);
  }

  replaceAllWithHighlight(text, matchesMap) {
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    return text.replace(re, (matched) => {
      return `<span class="highlight">${
        matchesMap[matched.toLowerCase()]
      }</span>`;
    });
  }
}

module.exports = Translator;