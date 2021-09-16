const { server } = require('./modules/app');

const PORT = process.env.PORT || 3000;
const LANG = process.env.LANGUAGE || 'esp';

server(PORT,LANG);
