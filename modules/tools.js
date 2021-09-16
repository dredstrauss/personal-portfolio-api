const reorderLangStrings = (rawLang) => {
    let lang = {};

    rawLang.forEach((strObj) => {

        if (!lang[strObj.page]) {lang[strObj.page] = {}};
        if (!lang[strObj.page][strObj.section]) {lang[strObj.page][strObj.section] = {}};
        lang[strObj.page][strObj.section][strObj.element] = strObj.str;
    });

    return lang
};

module.exports = { reorderLangStrings };
