const { Pool } = require('pg');
const { reorderLangStrings } = require('./tools');

const text = require('../lang.json');
const LANG = process.env.LANGUAGE || 'esp';

const dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    port: 5432,
    max: 30,
    min: 0,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 3000
};

const getLang = async(langQuery) => {
    if (langQuery != 'eng' && langQuery != 'esp') { langQuery = LANG };

    const pool = new Pool(dbConfig);
    const SQLQuery = `SELECT page, section, element, ${langQuery} AS str FROM lang;`;

    try {
        const languageStrings = await pool.query(SQLQuery);
        const orderedLang = reorderLangStrings(languageStrings.rows);
        return JSON.stringify(orderedLang)
    } catch (e) {
        console.error(e);
        throw e
    }
}

module.exports = { getLang }
