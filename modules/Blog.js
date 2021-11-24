const { Pool } = require('pg');
const { reorderBlogStrings } = require('./tools');

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

const getBlog = async(langQuery) => {
    if (langQuery != 'eng' && langQuery != 'esp') { langQuery = LANG };

    const pool = new Pool(dbConfig);
    const SQLQuery = `SELECT created, slug, field, ${langQuery} AS str FROM blog;`;

    try {
        const languageStrings = await pool.query(SQLQuery);
        const orderedLang = reorderBlogStrings(languageStrings.rows);
        return JSON.stringify(orderedLang)
    } catch (e) {
        console.error(e);
        throw e
    }
}

module.exports = { getBlog }
