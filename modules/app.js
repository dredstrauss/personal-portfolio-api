const express = require('express');
const url = require('url');
const { getLang } = require('./Lang');
const app = express();

let text = require('../lang.json'); text = text.app;
let LANG = 'esp';

const server = (PORT,LANG) => {
    LANG = LANG;
    app.listen(PORT,() => console.log(`${text.listening[LANG]}: ${PORT}`));
}

app.get('/lang-strings', (req,res) => {
    let queries = url.parse(req.url,true).query;
    let result = JSON.stringify(getLang(queries.lang));
    res.end(result)
});

app.get('*', (req,res) => {
    req
    res.end()
})

module.exports = { server };
