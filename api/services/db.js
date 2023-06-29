
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    // 'host': 'localhost',
    // 'user': 'root',
    // 'password': '',
    // 'database': 'mobile',
    'host': '189.113.13.186',
    'user': 'sisprecisacom',
    'password': 'f&cZp9Xj1K2YQ3Dke%gPNoo8kbVT3zDXBpmV7B19&U45MghKdg',
    'database': 'sisprecisacom_cesta_supercesta',
});

module.exports = db;