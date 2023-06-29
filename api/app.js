const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./services/db")

app.use(express.json());
app.use(cors({ origin: '*' }));


app.get("/teste", async (req, res) => {
    try {
        const cpf = req.query.cpf
        const sql = `SELECT * FROM cliente where cpf="${cpf}"`;
        console.log("🚀 ~ file: app.js:15 ~ app.get ~ sql:", sql)
        const [result] = await db.promise().query(sql);
        // console.log("🚀 ~ file: app.js:13 ~ app.get ~ result:", result)
        res.json(result[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});
