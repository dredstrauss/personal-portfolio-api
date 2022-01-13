const reorderLangStrings = (rawLang) => {
    let lang = {};

    rawLang.forEach((strObj) => {

        if (!lang[strObj.page]) {lang[strObj.page] = {}};
        if (!lang[strObj.page][strObj.section]) {lang[strObj.page][strObj.section] = {}};
        if (!lang[strObj.page][strObj.section][strObj.element]) {lang[strObj.page][strObj.section][strObj.element] = []};

        lang[strObj.page][strObj.section][strObj.element].push(strObj.str);
    });

    return lang
};

const reorderBlogStrings = (rawBlog => {
    let blog = {};

    rawBlog.forEach((strObj) => {

        if (!blog[strObj.slug]) { blog[strObj.slug] = { 'created' : strObj.created } };
        if (!blog[strObj.slug][strObj.field]) {blog[strObj.slug][strObj.field] = {}};
        blog[strObj.slug][strObj.field] = strObj.str;

    });

    return blog
});

module.exports = { reorderLangStrings, reorderBlogStrings };
