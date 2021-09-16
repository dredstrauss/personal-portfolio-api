const express = require('express'); const app = express();
let text = require('./lang.json'); text = text.index;

const PORT = process.env.PORT || 3000;
const LANG = process.env.LANGUAGE || 'esp';

app.listen(PORT,()=>console.log(`${text.listening[LANG]}: ${PORT}`));
