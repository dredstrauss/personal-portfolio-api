const express = require('express');
const url = require('url');
const cors = require('cors');
const { getLang } = require('./Lang');
const app = express();

let text = require('../lang.json'); text = text.app;

const server = (PORT,LANG) => {
    app.listen(PORT,() => console.log(`${text.listening[LANG]}: ${PORT}`));
}

app.use(cors());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, accept');
    next();
});

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
    res.redirect('https://github.com/dredstrauss/personal-portfolio');
})

module.exports = { server };
