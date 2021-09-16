const express = require('express');
const url = require('url');
const { getLang } = require('./Lang');
const app = express();

let text = require('../lang.json'); text = text.app;

const server = (PORT,LANG) => {
    app.listen(PORT,() => console.log(`${text.listening[LANG]}: ${PORT}`));
}

app.get('/lang-strings', async(req,res) => {
    let queries = url.parse(req.url,true).query;

    try {
        let data = await getLang(queries.lang);
        res.end(data)
    } catch (e) {
        console.error(e);
        res.end()
    }

});

app.get('*', async(req,res) => {
    req
    res.end();
})

module.exports = { server };
