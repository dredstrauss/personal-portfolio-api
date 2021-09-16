const inputJSON = require('../frontLang.json');

const getLang = (LANG) => {
    let outputJSON = {};

    let pages = Object.keys(inputJSON);
    pages.forEach((page) => {
        outputJSON[page] = {};
        let sections = Object.keys(inputJSON[page]);
        sections.forEach((section) => {
            outputJSON[page][section] = {};
            let elements = Object.keys(inputJSON[page][section]);
            elements.forEach((element) => {
                outputJSON[page][section][element] = inputJSON[page][section][element][LANG];
            });
        });
    });

    return outputJSON;

};

module.exports = { getLang }
